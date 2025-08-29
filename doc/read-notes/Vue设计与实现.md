## Vue设计与实现阅读笔记

### Vue3 设计思路

#### 声明式UI

描述声明式UI的两种方式：

- DOM元素，属性，事件，元素层级结构（模版）

  ```html
  <h1 @click="handler"><span></span></h1>
  ```

- JS对象

  ```js
  const vnode = {
    tag: 'div',
    props: {
      onClick: () => alert('hello')
    },
    children: 'click me'
  }
  ```

个人理解，声明式UI本质就是描述页面。

JS对象相比模版来说，更加方便灵活，Vue内部就采用JS对象来描述声明式UI，对应的就是Vue里VNode（虚拟dom）。

h函数：

创建虚拟dom的工具函数

```js
import { h } from 'vue'
export default {
	render() {
		return h('h1', { onClick: handler }) // 虚拟 DOM
 	}
}
```

个人理解：每次都自己敲JS对象，会非常麻烦，如果还有子节点，工作量很大。因此使用h函数来辅助创建JS对象（虚拟DOM）。通过传递参数，就能快速创建虚拟dom，减少心智负担。

#### 渲染器

把虚拟DOM转换为真实DOM

![image-20250828152636662](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20250828152636662.png)

```js
function renderer(vnode, container) {
  // 使用 vnode.tag 作为标签名称创建 DOM 元素
	const el = document.createElement(vnode.tag)
  // 遍历 vnode.props 将属性、事件添加到 DOM 元素
  for (const key in vnode.props) {
    if (/^on/.test(key)) {
      // 如果 key 以 on 开头，那么说明它是事件
      el.addEventListener(
        key.substr(2).toLowerCase(), // 事件名称 onClick ---> click
        vnode.props[key] // 事件处理函数
      )
    }
  }

  // 处理 children
  if (typeof vnode.children === 'string') {
    // 如果 children 是字符串，说明是元素的文本子节点
    el.appendChild(document.createTextNode(vnode.children))
  } else if (Array.isArray(vnode.children)) {
    // 递归地调用 renderer 函数渲染子节点，使用当前元素 el 作为挂载点
    vnode.children.forEach(child => renderer(child, el))
  }

  // 将元素添加到挂载点下
  container.appendChild(el)
}

const vnode = {
  tag: 'div',
  props: {
    onClick: () => alert('hello')
  },
  children: 'click me'
}

renderer(vnode, document.body)
```

#### 组件的本质

组件就是一组 DOM 元素的封装

- 函数描述

  ```js
  const myComponent = () => {
      return {
        tag: 'div',
        props: {
          onClick: () => alert('hello')
        },
        children: 'click me'
      }
    }
  
    const vnode = {
      tag: myComponent
    }
  ```

- 对象描述

  ```js
  const myComponent = {
      render() {
        return {
          tag: 'div',
          props: {
            onClick: () => alert('hello')
          },
          children: 'click me'
        }
      }
    }
  
    const vnode = {
      tag: myComponent
    }
  ```

个人理解：本质还是JS对象（虚拟DOM），封装成函数或者对象便于复用

#### 编译器

将`模板`编译为`渲染函数`

模版

```html
<div @click="handler">
 	click me
</div>
```

渲染函数

```js
h('div', { onClick: handler }, 'click me')
```

对于vue来说，template标签包裹的就是模版内容

流程图：

![image-20250828162158306](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20250828162158306.png)

### 响应系统的作用和实现

#### 响应式数据和副作用函数

- 副作用函数

  副作用函数`effect`指的是会产生副作用的函数(废话)

  ```js
  function effect() {
      document.body.innerText = 'hello vue3'
  }
  ```

​	个人理解：该函数执行之后，会影响某个变量的值

- 响应式数据

  副作用函数依赖了变量的值，变量的值的改变自动引起副作用函数的执行

  ```js
  const obj = { text: 'hello world' }
  function effect() {
  	// effect 函数的执行会读取 obj.text
  	document.body.innerText = obj.text
  }
  ```

  

#### 响应式系统

##### 最简单版本

[Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

[Set](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)

使用`Proxy`来劫持数据的get和set，`Set`来储存副作用函数

`get`读的时候收集副作用函数

`set`改的时候执行副作用函数

```js
// 存储副作用函数的桶
const bucket = new Set()

// 原始数据
const data = { text: 'hello world' }
// 对原始数据的代理
const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 将副作用函数 effect 添加到存储副作用函数的桶中
    bucket.add(effect)
    // 返回属性值
    return target[key]
  },
  // 拦截设置操作
  set(target, key, newVal) {
    console.log(target, key, newVal)
    // 设置属性值
    target[key] = newVal
    // 把副作用函数从桶里取出并执行
    bucket.forEach(fn => fn())
  }
})

function effect() {
  document.body.innerText = obj.text
}
effect()
setTimeout(() => {
  // obj是代理对象Proxy
  obj.text = 'hello vue3'
}, 1000)
```

##### 第一次优化

问题：当前副作用函数不够灵活，函数名称限定为`effect`，如果要考虑复用性，也不方便。

新增一个匿名函数`activeEffect`来储存被注册的副作用函数

```js
// 存储副作用函数的桶
const bucket = new Set()

// 原始数据
const data = { text: 'hello world' }
// 对原始数据的代理
const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 将副作用函数 activeEffect 添加到存储副作用函数的桶中
    bucket.add(activeEffect)
    // 返回属性值
    return target[key]
  },
  // 拦截设置操作
  set(target, key, newVal) {
    // 设置属性值
    target[key] = newVal
    // 把副作用函数从桶里取出并执行
    bucket.forEach(fn => fn())
  }
})


// 用一个全局变量存储当前激活的 effect 函数
let activeEffect
function effect(fn) {
  // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
  activeEffect = fn
  // 执行副作用函数
  fn()
}

effect(() => {
  console.log('effect run')
  document.body.innerText = obj.text
})

setTimeout(() => {
  obj.text2 = 'hello vue3'
}, 1000)
```

##### 第二次优化

问题：如果给当前的对象`obj`新增一个不存在的属性，会触发`set`函数的执行，正常应该是哪个属性变了就执行那个属性的副作用函数，减少不必要的开销，提升性能。

`target-key-effect`的关系图：

![image-20250829171032670](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20250829171032670.png)

`targert`：代理对象

`key`：对象的key

`effect`：key的副作用函数

[WeakMap](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/WeakMap)

[Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)

使用`WeakMap`和`Map`来构建如下关系：

1.`WeakMap`的`key`是对象`Target`

2.`Map`的`key`是对象`Target`的`key`

![image-20250829172040735](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20250829172040735.png)

使用`WeakMap`来储存`target`可以防止内存溢出。`WeakMap`对`key`是弱引用，不影响[垃圾回收](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Memory_management)（简单理解：内存里不使用的对象，JS会自动销毁此对象），因此如果`target`不被使用了，就会被垃圾回收掉。如果使用`Map`，那么会引起不必要的内存开销，如果这个`target`不被使用了。

代码实现：

```js
// 存储副作用函数的桶
const bucket = new WeakMap()

// 原始数据
const data = { text: 'hello world' }
// 对原始数据的代理
const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 将副作用函数 activeEffect 添加到存储副作用函数的桶中
    let depsMap = bucket.get(target)
    if (!depsMap) {
      bucket.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
      depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect)

    // 返回属性值
    return target[key]
  },
  // 拦截设置操作
  set(target, key, newVal) {
    // 设置属性值
    target[key] = newVal
    // 把副作用函数从桶里取出并执行
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const effects = depsMap.get(key)
    effects && effects.forEach(fn => fn())
  }
})


// 用一个全局变量存储当前激活的 effect 函数
let activeEffect
function effect(fn) {
  // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
  activeEffect = fn
  // 执行副作用函数
  fn()
}

effect(() => {
  console.log('effect run')
  document.body.innerText = obj.text
})

setTimeout(() => {
  obj.text = 'hello vue3'
}, 1000)
```

抽离函数：

把收集副作用的函数提取为`track`和把执行副作用的函数提取为`trigger`

```js
// 存储副作用函数的桶
const bucket = new WeakMap()

// 原始数据
const data = { text: 'hello world' }
// 对原始数据的代理
const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 将副作用函数 activeEffect 添加到存储副作用函数的桶中
    track(target, key)
    // 返回属性值
    return target[key]
  },
  // 拦截设置操作
  set(target, key, newVal) {
    // 设置属性值
    target[key] = newVal
    // 把副作用函数从桶里取出并执行
    trigger(target, key)
  }
})

function track(target, key) {
  let depsMap = bucket.get(target)
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()))
  }
  let deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  deps.add(activeEffect)
}

function trigger(target, key) {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)
  effects && effects.forEach(fn => fn())
}

// 用一个全局变量存储当前激活的 effect 函数
let activeEffect
function effect(fn) {
  // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
  activeEffect = fn
  // 执行副作用函数
  fn()
}

effect(() => {
  console.log('effect run')
  document.body.innerText = obj.text
})

setTimeout(() => {
  trigger(data, 'text')
}, 1000)

```



​			
