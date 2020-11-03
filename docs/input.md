## 输入框 input

### 描述

用于各类业务逻辑场景的用户输入文本的组件。

### 使用效果

<preview url="https://editor.quickapp.cn/preview/2009/Yz/2009YzjNs0Tl/build/pages/button"/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-input" src="qaui/src/components/input/index"></import>
```

### 示例

```html
<template>
  <div class="qaui-wrap">
    <q-input
      onchange="changeHandler"
      onblur="blurHandler"
      onclear="clearHandler"
    ></q-input>
    <q-input title="姓名" value="快应用" focus="true"></q-input>
    <q-input title="电子邮箱"></q-input>
    <q-input title="超长的家庭地址"></q-input>
    <q-input
      title="我的表头"
      icon-right-a="/common/logo.png"
      ontap="tapHandler"
    ></q-input>
    <q-input
      title="很长的表头"
      icon-left="/common/logo.png"
      icon-right-a="/common/logo.png"
    ></q-input>
    <q-input type="border"></q-input>
    <q-input type="border" value="正在输入内容" button="发送"></q-input>
    <q-input icon-left="/common/logo.png" type="border" button="发送"></q-input>
    <q-input
      icon-left="/common/logo.png"
      type="border"
      icon-right-a="/common/logo.png"
      icon-right-b="/common/logo.png"
    ></q-input>
    <q-input
      icon-left="/common/logo.png"
      type="border"
      icon-right-a="/common/logo.png"
      button="发送"
    ></q-input>
  </div>
</template>
```

```js
export default {
  changeHandler({ detail }) {
    console.log(detail)
  },
  blurHandler({ detail }) {
    console.log('失去焦点！', detail)
  },
  clearHandler({ detail }) {
    console.log('清空输入！', detail)
  },
  tapHandler({ detail }) {
    console.log(detail)
  },
}
```

```less
.qaui-wrap {
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
}
```

### API

#### 组件属性

| 属性        | 类型    | 默认值     | 说明                                            |
| ----------- | ------- | ---------- | ----------------------------------------------- |
| type        | String  | 'default'  | 输入框样式类型，可选值有 default, border        |
| title       | String  | ''         | 输入框名称                                      |
| value       | String  | ''         | 输入框默认值                                    |
| focus       | Boolean | false      | 输入框是否默认获得焦点                          |
| maxlength   | Number  | 20         | 输入框最大字符数量限制                          |
| placeholder | String  | '输入内容' | 输入框提示语                                    |
| button      | String  | ''         | 输入框右边文字按钮文字，限两个字                |
| iconLeft    | String  | ''         | 输入框左边图标按钮路径                          |
| iconRightA  | String  | ''         | 输入框右边 A 图标按钮路径                       |
| iconRightA  | String  | ''         | 输入框右边 B 图标按钮路径，当有文字按钮时不显示 |

#### 组件事件

| 事件名称 | 事件描述           | 返回值                                                      |
| -------- | ------------------ | ----------------------------------------------------------- |
| tap      | 组件上点击事件     | {position:position,event:event} position 值为对应按钮属性名 |
| change   | 输入框值变化事件   | {value:value}                                               |
| focus    | 输入框获得焦点事件 | {value:value}                                               |
| blur     | 输入框失去焦点事件 | {value:value}                                               |
| clear    | 输入框清空内容事件 | -                                                           |
