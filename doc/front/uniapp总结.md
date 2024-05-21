## 写uniapp总结的原因

实习的第一家公司用的就是uniapp，目前自己已经实习了20多天了，但感觉自己对这块的知识还是非常零散，最近看同事写uniapp，发现还有这种新的用法。自己对uniapp的内置的标签了解的也极少，有次在搜span标签相对于uniapp的什么的标签的时候(以前一直用view标签)，发现uniapp内置了许多标签，等等原因，感觉自己得把知识聚拢起来，对自己的开发和学习都有帮助。

### 常用的组件库

[uview](https://v1.uviewui.com/)

[colorui](https://miren.lovemi.ren/colorui-document/)

### 条件编译

[官方文档](https://uniapp.dcloud.net.cn/tutorial/platform.html)

以 `#ifdef` 或 `#ifndef` 加 `%PLATFORM%` 开头，以 `#endif` 结尾。

#### 常用

只在微信小程序下运行的代码

js代码

模板

```js
// #ifdef MP-WEIXIN
需要条件编译的代码
// #endif
```

```js
// #ifdef MP-WEIXIN
uni.setPageStyle({
    style: {
        overflow: 'visible'
    }
})
// #endif
```

css代码

模板

```css
/*  #ifdef  MP-WEIXIN  */
平台特有样式
/*  #endif  */
```

```css
/*  #ifdef  MP-WEIXIN  */
.wx-color {
    color:red
}
/*  #endif  */
```





















