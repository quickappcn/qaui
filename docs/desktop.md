## 添桌浮层 desktop

### 描述

添加到桌面。

### 使用效果

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-desktop" src="qaui/src/components/desktop/index"></import>
```

### 示例

```html
<template>
  <div class="qaui-wrap">
    <q-desktop
      description="{{ description }}"
      btn-text="添加"
      icon="qrcode-fill"
      onclose="handClose"
      onsuccess="handSuccess"
      onfail="handFail"
      oncreated="handCreated"
    ></q-desktop>
  </div>
</template>
```

```javascript
<script>
/* eslint-disable no-console */
import prompt from '@system.prompt'
export default {
  props: {},
  data() {
    return {
      description: '添加到桌面，描述文字描述',
      background: '#fff',
      activeColor: '#456FFF',
      textColor: '#B2B2B2',
    }
  },
  handClose() {
    console.log('关闭浮层回调')
  },
  handSuccess() {
    prompt.showToast({
      message: '成功创建桌面图标',
    })
  },
  handFail(evt) {
    console.log(evt.detail)
  },
  handCreated() {
    prompt.showToast({
      message: '已创建桌面图标',
    })
  },
}
</script>
```

```less
<style lang="less">
.qaui-wrap {
  flex-direction: column;
}
</style>
```

### API

#### 组件属性

| 属性        | 类型   | 默认值   | 说明           |
| :---------- | :----- | :------- | :------------- |
| icon        | String | 'qrcode' | icon 名称      |
| description | String | ''       | 文字描述，必填 |
| btnText     | String | '添加'   | 按钮文字，必填 |

#### 组件事件

| 事件名称 | 事件描述               | 返回值                                 |
| -------- | ---------------------- | -------------------------------------- |
| created  | 已创建桌面的回调       | -                                      |
| success  | 添加桌面成功之后的回调 | -                                      |
| fail     | 添加桌面失败之后的回调 | evt 对象（添桌失败的返回状态码和描述） |
| close    | 关闭添桌浮层           | -                                      |
