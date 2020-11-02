## 多行输入框 textarea

### 描述

多行输入框，用于输入多行文本。

### 使用效果

<preview url="https://editor.quickapp.cn/preview/2009/Yz/2009YzjNs0Tl/build/pages/button"/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-textarea" src="qaui/src/components/textarea/index"></import>
```

### 示例

```html
<template>
  <div class="qaui-wrap">
    <text class="title">默认用法</text>
    <q-textarea></q-textarea>
    <text class="title">自定义用法</text>
    <q-textarea placeholder="请输入您的意见！" maxlength="50" default-value="快应用真快" focus="true"></q-textarea>
  </div>
</template>
```

```less
.qaui-wrap {
  flex-direction: column;
  background-color: #f2f2f2;
  .title {
    font-size: 14px;
    height: 30px;
    padding: 10px;
  }
}
```

### API

#### 组件属性

| 属性         | 类型    | 默认值 | 说明                     |
| ------------ | ------- | ------ | ------------------------ |
| defaultValue | String  | ''     | 内容默认值               |
| placeholder  | String  | ''     | 占位提示文字             |
| focus        | Boolean | false  | 自动获取焦点，拉起输入法 |
| maxlength    | Number  | 140    | 最大输入长度             |

#### 组件事件

| 事件名称 | 事件描述           | 返回值 |
| -------- | ------------------ | ------ |
| change   | 值发生变化的事件   | event  |
| focus    | 输入框获得焦点事件 | event  |
| blur     | 输入框失去焦点事件 | event  |
