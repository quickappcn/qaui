## 滑动条 slider

### 描述

用于在一个区间内选择特定值。

### 使用效果

<preview url="https://editor.quickapp.cn/preview/2011/sL/2011sL1yEg08/build/pages/slider"/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-slider" src="qaui/src/components/slider/index"></import>
```

### 示例

```html
<template>
  <div class="qaui-wrap">
    <text class="title">设置-step</text>
    <q-slider step="2" value="50"></q-slider>
    <text class="title">设置最小/最大值</text>
    <q-slider min="10" max="20" value="12" show-value="true"></q-slider>
    <text class="title">显示当前值</text>
    <q-slider show-value="true" value="66"></q-slider>
    <text class="title">自定义样式</text>
    <q-slider color="#FFCC57" value="55"></q-slider>
    <text class="title">带节点样式</text>
    <q-slider dot="true" step="20" value="40"></q-slider>
    <q-slider
      dot="true"
      step="25"
      value="50"
      left-icon="../../common/logo.png"
      right-icon="../../common/logo.png"
    ></q-slider>
  </div>
</template>
```

```less
.qaui-wrap {
  flex-direction: column;
  padding: 20px 0;
  .title {
    font-size: 12px;
    color: #000000;
    padding-left: 20px;
  }
}
```

### API

#### 组件属性

| 属性          | 类型    | 默认值    | 说明                           |
| ------------- | ------- | --------- | ------------------------------ |
| min           | Number  | 0         | 滑动条最小值                   |
| max           | Number  | 100       | 滑动条最大值                   |
| step          | Number  | 1         | 步长，必须大于 0               |
| value         | Number  | 0         | 滑动条当前值                   |
| showValue     | Boolean | false     | 是否显示滑动条值               |
| color         | String  | '#F2F2F2' | 滑动条颜色                     |
| selectedColor | String  | '#456FFF' | 滑动条划过的颜色               |
| dot           | Boolean | false     | 是否显示节点                   |
| leftIcon      | String  | ''        | 左边 icon 的路径, 支持网络图片 |
| rightIcon     | String  | ''        | 右边 icon 的路径, 支持网络图片 |

#### 组件事件

| 事件名称 | 事件描述         | 返回值              |
| -------- | ---------------- | ------------------- |
| change   | 滑动条值改变事件 | {progress:progress} |
