## 搜索栏 searchBar

### 描述

用于搜索的组件。

### 使用效果

<preview url="https://editor.quickapp.cn/preview/2009/Yz/2009YzjNs0Tl/build/pages/button"/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-searchbar" src="qaui/src/components/searchbar/index"></import>
```

### 示例

```html
<template>
  <div class="qaui-wrap">
    <q-searchbar placeholder="搜索一下，你就知道"></q-searchbar>
    <q-searchbar value="正在搜索" focus="true"></q-searchbar>
    <q-searchbar left-btn="back"></q-searchbar>
    <q-searchbar left-btn="/common/logo.png"></q-searchbar>
    <q-searchbar right-btn="search"></q-searchbar>
    <q-searchbar right-btn="/common/logo.png"></q-searchbar>
    <q-searchbar left-btn="back" right-btn="search"></q-searchbar>
    <q-searchbar
      left-btn="/common/logo.png"
      right-btn="/common/logo.png"
    ></q-searchbar>
    <q-searchbar menubar="true"></q-searchbar>
  </div>
</template>
```

```less
.qaui-wrap {
  background-color: #f6f6f6;
  padding: 20px 0;
  flex-direction: column;
  justify-content: space-between;
}
```

### API

#### 组件属性

| 属性        | 类型    | 默认值 | 说明                                                 |
| ----------- | ------- | ------ | ---------------------------------------------------- |
| leftBtn     | String  | ''     | 左边按钮，填入图片路径，当值为'back'则显示返回按钮   |
| rightBtn    | String  | ''     | 右边按钮，填入图片路径，当值为'search'则显示搜索按钮 |
| placeholder | String  | '搜索' | 输入提示文本                                         |
| maxlength   | Number  | 50     | 最大输入长度                                         |
| focus       | Boolean | false  | 是否自动获得焦点                                     |
| value       | String  | ''     | 显示默认值                                           |
| menubar     | Boolean | false  | 是否适配 menubar 样式                                |

#### 组件事件

| 事件名称      | 事件描述             | 返回值           |
| ------------- | -------------------- | ---------------- |
| blur          | 失去焦点事件         | { event: evt }   |
| focus         | 获得焦点事件         | { event: evt }   |
| clear         | 清除输入值事件       | { value: value } |
| change        | 输入值变化事件       | { event: evt }   |
| enterkeyclick | 键盘搜索按钮点击事件 | { event: evt }   |
| left          | 左边按钮点击事件     | { value: value } |
| right         | 右边按钮点击事件     | { value: value } |
