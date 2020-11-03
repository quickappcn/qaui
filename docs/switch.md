## 单选开关 switch

### 描述

在两种状态间切换时用到的开关按钮。

### 使用效果

<preview url="https://editor.quickapp.cn/preview/2009/Yz/2009YzjNs0Tl/build/pages/button"/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-switch" src="qaui/src/components/switch/index"></import>
```

### 示例

```html
<template>
  <div class="qaui-wrap">
    <div class="row">
      <q-switch value="true"></q-switch>
      <text>常规-开</text>
    </div>
    <div class="row">
      <q-switch></q-switch>
      <text>常规-关</text>
    </div>
    <div class="row">
      <q-switch value="true" disabled="true"></q-switch>
      <text>不可点击-开</text>
    </div>
    <div class="row">
      <q-switch disabled="true"></q-switch>
      <text>不可点击-关</text>
    </div>
  </div>
</template>
```

```less
.qaui-wrap {
  flex-direction: column;
  padding: 20px;
  .row {
    margin-bottom: 10px;
  }
  text {
    font-size: 14px;
    color: #000000;
    margin-left: 10px;
  }
}
```

### API

#### 组件属性

| 属性     | 类型    | 默认值 | 说明             |
| -------- | ------- | ------ | ---------------- |
| value    | Boolean | false  | 当前开关默认值   |
| disabled | Boolean | false  | 是否处于禁用状态 |

#### 组件事件

| 事件名称 | 事件描述         | 返回值       |
| -------- | ---------------- | ------------ |
| change   | 值发生变化的事件 | 当前开关状态 |
