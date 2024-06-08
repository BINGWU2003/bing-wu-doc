## 教程参考

[react核心语法](https://www.bilibili.com/video/BV1pF411m7wV/?share_source=copy_web&vd_source=3acabbfb34a5a857a28e70904c4ac854)

[组件通信与插槽](https://www.bilibili.com/video/BV1xM41197cZ/?share_source=copy_web&vd_source=3acabbfb34a5a857a28e70904c4ac854)

[React Hooks速成](https://www.bilibili.com/video/BV1kc411D7F9/?share_source=copy_web&vd_source=3acabbfb34a5a857a28e70904c4ac854)

[React中文文档](https://zh-hans.react.dev/)

## React核心语法

### 搭建项目

#### 构建命令

使用官方的命令创建

```bash
npx create-next-app@latest
```

使用Vite创建项目

```bash
pnpm create vite
```

#### 创建第一个React项目

这里使用npx create-next-app@latest来创建项目

![image-20240608143917982](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240608143917982.png?imageSlim)

使用pnpm dev启动项目

![image-20240608144111614](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240608144111614.png?imageSlim)

浏览器访问http://localhost:3000出现以下页面说明搭建完成

![image-20240608144221197](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240608144221197.png?imageSlim)

### TSX(JSX)

TSX(JSX)将typescript(javascript)语法和html结合在一起的一种语法,是一种模板

#### 删除无用代码方便后续学习

修改一下**page.tsx**文件和**layout.tsx**文件,方便后续学习

page.tsx文件

```tsx
export default function Home() {
  return (
    <div>hello react</div>
  )
}
```

![image-20240608145431691](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240608145431691.png?imageSlim)

layout.tsx文件

删除全局样式的引入

![image-20240608145522872](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240608145522872.png?imageSlim)

刷新页面

出现hello react

![image-20240608145604864](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240608145604864.png?imageSlim)

#### 函数组件

一个函数为一个组件,函数的返回值为要渲染的内容

```tsx
export default function Home() {
  return (
    <div>hello react</div>
  )
}
```

如果返回的内容只有一行,可以省略 ()

```tsx
export default function Home() {
  return <div>hello react</div>
}
```

如果返回的内容有多行,括号不能省略

```tsx
export default function Home() {
  return (
    <div>
      <div>hello</div>
      <div>react</div>
    </div>
  )
}
```

#### TXS只能返回一个根元素

有点像vue2中的template,只能有一个根元素

出现两个根元素

```tsx
export default function Home() {
  return (
    <div>hello react</div>
    <div>hello react</div>
  )
}
```

vscode报错提示

![image-20240608150710033](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240608150710033.png?imageSlim)

#### TXS空标签

<> 多级元素内容 </>

用于处理多级元素

```tsx
export default function Home() {
  return (
    // 空标签
    <>
      <div>hello react</div>
      <div>hello react</div>
    </>
  )
}
```

最终渲染出来的结构没有产生多余的html元素

![image-20240608151051949](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240608151051949.png?imageSlim)

### 数据渲染

#### 插值语法

看完视频后,感觉有点类似vue的插值语法,哈哈哈

##### 标签内容

```tsx
export default function Home() {
  const title = 'hello react'
  return (
    <>
    {/* 使用在标签内部 */}
      <div>{title}</div>
    </>
  )
}
```

![image-20240608151829003](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240608151829003.png?imageSlim)

##### 标签属性

```tsx
export default function Home() {
  const title = 'hello react'
  // 标签属性
  const titleAttribute = 'titleAttribute'
  return (
    <>
    {/* 使用标签属性 */}
      <div title={titleAttribute}>{title}</div>
    </>
  )
}
```

![image-20240608152318341](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240608152318341.png?imageSlim)

#### 条件渲染

使用三元表达式

```tsx
export default function Home() {
  let flag = false
  return (
    <>
      <div>{flag?'hello react':'hello vue'}</div>
    </>
  )
}
```



```tsx
export default function Home() {
  let title = null
  let flag = true
  // 定义一个flag标志
  if(flag){
    title = <span>hello react</span>
  } else {
    title = <span>hello vue</span>
  }
  return (
    <>
      <div>{title}</div>
    </>
  )
}
```

flag为true

![image-20240608153100375](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240608153100375.png?imageSlim)

flag为false

![image-20240608153121992](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20240608153121992.png?imageSlim)

#### 列表渲染

