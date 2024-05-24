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

### 跨页面通信

getCurrentPages()获取当前的页面栈，函数会返回一个数组，当前页面的实例就是数组的最后一项。通过$vm来获取此页的组件实例

#### 场景1

表单为单独的一个页面，提交表单后要返回上一页，并马上刷新上一页的数据

#### 场景2

页面A的展示的数据来自页面B的数据，要去页面B筛选数据，并展示到页面A中

```js
fn(){
  let pages = getCurrentPages()
  // 获取上一页的实例
  let page = pages[pages.length - 2]
  // page.$vm 上一个页面的的组件vm实例
  // 访问data里的数据
  page.$vm.searchText
  // 访问methods里的方法
  page.$vm.refresh()
  // 返回上一级页面
  uni.navigateBack({
      delta: 1
  });
}

```

#### 自己刚开始用的页面通信的方法

```js
fn(){
    //在起始页面跳转到test.vue页面并传递参数
    let uniapp = {
    	uniappItem: 0,
    };
    //当传递的参数是对象时，必须先转化为JSON格式
    uni.navigateTo({
    	url: 'test?id=1&name=' + JSON.stringify(uniapp),
    });
}
```

```js
// 上一个页面接收参数
onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
    console.log(option.id); //打印出上个页面传递的参数。
    console.log(option.name); //打印出上个页面传递的参数。
}

```



用的这个方法，导致页面栈中的页面堆积太多，返回的时候页面跳转出现预期之外的页面。后续分析出来感觉是自己场景没有分析对，如果填写表单的时候使用这种方法，一个用户填写好几次表单，提交表单后再使用navigateTo跳回列表页，就会导致页面栈的页面堆积太多，返回页面的时候出现预期之外的问题。



















