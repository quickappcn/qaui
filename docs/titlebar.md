## 标题栏 titleBar

### 描述

用来展示页面标题。

### 使用效果

<preview url="https://editor.quickapp.cn/preview/2009/Yz/2009YzjNs0Tl/build/pages/button"/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-titlebar" src="qaui/src/components/titlebar/index"></import>
```

### 示例

```html
<template>
  <div class="qaui-wrap">
    <text class="title">1、标题文字</text>
    <q-titlebar title="一级标题文字"></q-titlebar>
    <text class="title">2、搜索框</text>
    <q-titlebar title="一级标题文字" search="/pages/searchbar"></q-titlebar>
    <text class="title">3、Back+标题文字</text>
    <q-titlebar back="true" title="二级标题文字"></q-titlebar>
    <text class="title">4、返回首页按钮+标题文字</text>
    <q-titlebar back="true" home="/pages/home" title="二级标题文字"></q-titlebar>
  </div>
</template>
```

```less
.qaui-wrap {
  background-color: #f6f6f6;
  padding: 20px 0;
  flex-direction: column;
  .title {
    opacity: 0.6;
    font-size: 12px;
    color: #000000;
    line-height: 30px;
    padding: 15px 20px;
  }
}
```

### API

#### 组件属性

| 属性        | 类型    | 默认值 | 说明             |
| ----------- | ------- | ------ | ---------------- |
| title       | String  | ''     | 标题文本         |
| home        | String  | ''     | 首页路由路径     |
| back        | Boolean | false  | 是否显示返回键   |
| search      | String  | ''     | 搜索页面路由路径 |
| placeholder | String  | '搜索' | 搜索框提示词     |
