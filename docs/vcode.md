## 验证码 vcode

### 描述

用于处理用户输入验证码的组件。

### 使用效果

<preview url="https://editor.quickapp.cn/preview/2011/sL/2011sL1yEg08/build/pages/vcode"/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-vcode" src="qaui/src/components/vcode/index"></import>
```

### 示例

```html
<template>
  <div class="qaui-wrap">
    <q-vcode time="5" onsend="sendHandler" onchange="changeHandler"></q-vcode>
    <div class="line"></div>
    <q-vcode image="{{image}}" onimage="imageHandler"></q-vcode>
  </div>
</template>
```

```js
export default {
  data() {
    return {
      image:
        'https://s3.ifanr.com/wp-content/uploads/2019/07/yanzhengma01-1024x312.png',
    }
  },
  sendHandler() {
    console.log('request for sending verify code!')
  },
  imageHandler() {
    this.image =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnx_z6MfMIVA0etrLHrpzAo-kU-Rm2VJMTbQ&usqp=CAU'
  },
  changeHandler({ detail }) {
    console.log('input value', detail.value)
  },
}
```

```less
.qaui-wrap {
  flex-direction: column;
  background-color: #f2f2f2;
  .line {
    height: 1px;
    background-color: #ffffff;
    width: 20px;
  }
}
```

### API

#### 组件属性

| 属性  | 类型   | 默认值 | 说明                                 |
| ----- | ------ | ------ | ------------------------------------ |
| type  | Number | 120    | 发送验证码后等待时间，单位秒         |
| image | String | ''     | 图片验证码地址，传入则显示图片验证码 |

#### 组件事件

| 事件名称 | 事件描述                           | 返回值        |
| -------- | ---------------------------------- | ------------- |
| send     | 获取验证码按钮点击事件             | -             |
| change   | 验证码输入框值变更事件             | {value:value} |
| image    | 验证图片点击事件，用于更换验证图片 | -             |
