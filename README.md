# weex-tabbar
weex custom tabbar Component , Support children component and Label text(weex自定义tabbar组件,支持label文字显示)

## 安装

```javascript
npm install weex-tabbar --save
```

再引用:

```javascript
require("weex-tabbar");
```

## 使用

```html
<template>
  <tabbar id="tabbar" bgopacity="0.9"  tabs="{{tabItems}}" selected="{{page}}" class="tabbar"></tabbar>
</template>

<style>
.tabbar{
  width:750;
  z-index: 10;}
</style>

<script>
require("weex-tabbar");
module.exports = {
  data:{
    page:0,//默认选择的是第一个页面
    tabItems: [//配置每个tabbar
      {
        title: "首页",
        defaultTitleColor: "#000",
        image: "http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png",
        selectedImage: "http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png",
        activeTitleColor:"#db3652"
      },
      {
        title: "最新",
        defaultTitleColor: "#000",
        image: "http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png",
        selectedImage: "http://gtms02.alicdn.com/tps/i2/TB1qysbMpXXXXcnXXXX9t7RGVXX-46-46.png",
        activeTitleColor:"#db3652"
      },
      {
        title: "购物车",
        defaultTitleColor: "#000",
        image: "http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png",
        selectedImage: "http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png",
        activeTitleColor:"#db3652",
        haslabel:true,
        labelName:"cart",
        label:5,
      },
      {
        title: "个人中心",
        defaultTitleColor: "#000",
        image: "http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png",
        selectedImage: "http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png",
        activeTitleColor:"#db3652"
      }
    ],
  }
}
</script>
```

**注意:**`tabs`只有2~5个之间的tab才会显示正确,所以如果你tab大于5个或者少于2个,请自己手动调整样式.

tabbar有以下两个属性:

1. `tabs`:一个包含了tab信息的数组.
2. `selected`:默认开始选中的tab.
3. `bgopacity`:背景透明度,值为0~1.

其中`tabs`中的tab有以下几个属性:

```javascript
{
  title: "个人中心",//tab标签文字
  defaultTitleColor: "#000",//标签未激活时显示的颜色
  image: "http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png",//标签未激活时显示的图片
  selectedImage: "http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png",//标签选中后的图片
  activeTitleColor:"#db3652",//激活时的文字颜色
  haslabel:true,//是否有标签
  labelName:"cart",//标签的名id(唯一)
  label:5,//标签显示数字
  labelColor:"#db3652",//标签背景色
}
```

上面中的`labelName`属性是这个label的唯一值,所以不能与其它的label名字相同,后面我们会用到这个属性来更改属性`label`的值.

## 切换页面

切换页面这个操作tabbar已经封装好了,剩下的是我们需要在父组件中和tabbar组件通信即可.

如果你已经下载了本库,你可以打开根目录下的`index.we`文件,这是我们的父组件,而目录`components`下的文件都是子组件,我们可以利用父组件和子组件来实现兄弟组件之间的通信(不懂为何weex中没有类似vuex的实现,而react-native都有redux的实现了).

打开`index.we`文件看第五行:

```html
<tab1 class="page" if="page===0" style="z-index:{{page===0?5:0}}"></tab1>
```

**这是我们第一个内容展示页,之前版本的tab1页面的显示与否都是由属性`display`来控制的,现在由`z-index`和`if`控制,因为自从weex更新后发现`display`属性被弃用.**

对于html5来说建议不用`if`来控制,实验中发现切换缓慢,所以如果是主要实现html5折这边的话请删掉这个,而手机端必须使用,否则无法实现切换效果.

感兴趣的同学可以打开在项目中的`html5`文件地下的`index.html`文件测试一下.

再看105行:

```javascript
// 监听子组件tabbar发送过来的消息
this.$on("switchPage",(e)=>{
  this.page = e.detail.page;
});
```

这是tabbar通知父组件:你要换页了.

## 通信

这个大部分同学应该都知道,而tabbar页封装好了通信接口,只需要调用即可.

请看到第108行:

```javascript
// 监听子组件index发送过来的消息
this.$on("addGoodsNumber",(e)=>{
  // 再根据消息传递给tabbar
  this.$broadcast("tabbarAccept",{
    action:e.detail.action,//执行的动作,包含"add","minus","set"
    target:e.detail.target,//执行的目标
    value:e.detail.value,//自定义字段
  })
});
```

父组件监听其它子组件传递过来的信息,然后通过父组件分发`tabbarAccept`到tabbar组件那里去,tabbar接受三个信息:

1. `action`:需要执行的动作,有三个字段:"add","minus","set"
2. `target`:这是需要执行动作的对象,也就是上面开始说的`labelName`.
3. `value`:数字类型,如果`action`是"add",那么一次增加的值就是`value`,同理"minus",而"set"的时候就是设置值为`value`.

## 显示隐藏

不同于官方定死tabbar的位置,这里的tabbar可以隐藏和显示,和上面一样,需要你在自己组件中通信通知tabbar来执行动作:

请看到第119行:

```javascript
// 隐藏tabbar
this.$on("State",(e)=>{
  // 再根据消息传递给tabbar
  this.$broadcast("tabbarState",{
    state:e.detail.state
  });
});
```

这里的state有两个字段:"show"和"hide",表示当前需要显示还是隐藏,接下来还需要在其他组件中添加检测才能实现这个功能,比如在`tab1.we`文件中:

```html
<!-- 3行 -->
<text ondisappear="tabbarState" onappear="tabbarState" class="text" style="color:{{color}}">{{text}}</text>
```

```javascript
// 79行
tabbarState(event){
  this.$dispatch("State",{
    state:event.direction==="up"?"hide":"show"
  });
}
```

## 为何造轮子

官方已经提供了`wxc-tabbar`组件供我们使用,但是在我使用的过程中发现这个组件不支持子组件,对于组件需要通信的来说,这是一个致命的问题,比如我点击页面的一个按钮,需要增加tabbar上的一个数字显示,可是并没有这个功能和方法,即使我再构造一个父组件也无法实现父子组件间通信(也不清楚是否是我方法错了),所以只好自己重新实现这个组件了.