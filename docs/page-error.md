## 异常页 page-error

### 描述

用于展示一系列操作任务处理异常的页面

### 使用效果

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-page-error" src="qaui/src/components/page-error/index"></import>
```

### 示例

```html
<template>
  <div class="wrap">
    <q-page-error
      type="{{ typesArr[0] }}"
      left-btn-name="{{ leftBtnName }}"
      right-btn-name="{{ rightBtnName }}"
      description="{{ description }}"
      footer-btn-text="{{ footerBtnText }}"
      onleft-btn-tap="leftBtn"
      onright-btn-tap="rightBtn"
      onfooter-btn-tap="footerBtn"
    ></q-page-error>
  </div>
</template>
```

```js
import router from '@system.router'
export default {
  data() {
    return {
      typesArr: [
        'certificate_expires',
        'network_anomaly',
        'not_found',
        'page_error',
        'quick_app_not_online',
        'quick_app_offline',
        'version_too_low',
      ],
      leftBtnName: '返回',
      rightBtnName: '查看',
      description: '这是描述文字描述文字描述文字描述文字描述文字',
      footerBtnText: '底部文字按钮',
    }
  },
  leftBtn(data) {
    const event = data.detail.event
    console.log(event)
    router.back()
  },
  rightBtn(data) {
    const event = data.detail.event
    console.log(event)
    router.push({
      uri: '/pages/icon',
    })
  },
  footerBtn(data) {
    const event = data.detail.event
    console.log(event)
    router.push({
      uri: '/pages/footer',
    })
  },
}
```

```less
.wrap {
  width: 100%;
  height: 100%;
}
```

### API

#### 组件属性

| 属性          | 类型   | 默认值       | 说明                                                                                                                                                                            |
| ------------- | ------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type          | String | 'page_error' | 默认类型(每种类型有默认配图和文字)，可选值有'page_error', 'network_anomaly', 'version_too_low', 'not_found', 'quick_app_offline', 'quick_app_not_online', 'certificate_expires' |
| image         | String | -            | 自定义异常图片                                                                                                                                                                  |
| leftBtnName   | String | -            | 左侧按钮名称                                                                                                                                                                    |
| rightBtnName  | String | -            | 右侧按钮名称                                                                                                                                                                    |
| description   | String | -            | 异常描述文字                                                                                                                                                                    |
| footerBtnText | String | -            | 底部文字按钮内容                                                                                                                                                                |

#### 组件事件

| 事件名称     | 事件描述                 | 返回值 |
| ------------ | ------------------------ | ------ |
| leftBtnTap   | 点击左侧按钮时触发的事件 | event  |
| rightBtnTap  | 点击右侧按钮时触发的事件 | event  |
| footerBtnTap | 点击底部按钮时触发的事件 | event  |
