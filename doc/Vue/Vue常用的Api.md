## Vue常用的Api

### 异步组件

[官方文档](https://cn.vuejs.org/guide/components/async.html#async-components)

1.是什么

是按需加载的组件,动态的从服务器中读取,有利于减少初始化加载时间,提高应用性能

2.使用方法

使用`dedefineAsyncComponent`来定义异步组件,函数的参数为一个对象

对象的属性

```js
{
  // loader为一个函数,函数返回值为import('组件路径')
  loader: () => import('../components/AsyncComNew.vue'),
  // loadingComponent 组件加载的延迟时间
  delay: 1000,
  // 组件没有加载时显示的组件
  loadingComponent: Loading,
  // 组件加载失败时显示的组件
  errorComponent: Error,
  // 组件的加载时间超过了timeout则显示错误组件
  timeout: 4000
}
```

示例:

```vue
<template>
  <div>my-view</div>
  <AsyncCom />
</template>

<script setup>
// 导入
import { defineAsyncComponent } from 'vue'
import Loading from '../components/Loading.vue'
import Error from '../components/Error.vue'
const AsyncCom = defineAsyncComponent({
  // 使用的组件
  loader: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(import('../components/AsyncComNew.vue'))
      }, 2000)
    })
  },
  // loadingComponent 组件加载的延迟时间
  delay: 1000,
  // 组件没有加载时显示的组件
  loadingComponent: Loading,
  // 组件加载失败时显示的组件
  errorComponent: Error,
  // 组件的加载时间超过了timeout则显示错误组件
  timeout: 4000
})
</script>

<style lang="scss" scoped></style>

```

查看浏览器控制台,等待2s,从服务器获取组件

![image-20240819170137779](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240819170137779.png?imageSlim)



### 自定义插件



### 自定义指令

[官方文档](https://cn.vuejs.org/guide/reusability/custom-directives#custom-directives)

1.是什么

除了 Vue 内置的一系列指令 (比如 `v-model` 或 `v-show`) 之外，Vue 还允许你注册自定义的指令

2.使用

- 局部
- 全部