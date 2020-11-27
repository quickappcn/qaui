## 加载进度条 progress

### 描述

用于展示加载进度，告知用户当前状态。

### 使用效果

<preview url="https://editor.quickapp.cn/preview/2011/sL/2011sL1yEg08/build/pages/progress/"/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-progress" src="qaui/src/components/progress/index"></import>
```

### 示例

```html
<template>
  <div class="wrap">
    <text class="title">progress进度条</text>
    <div class="progress-group">
      <div class="progress-box">
        <q-progress></q-progress>
      </div>
      <div class="progress-box">
        <q-progress percentage="{{ percentage }}"></q-progress>
      </div>
      <div class="progress-box">
        <q-progress
          percentage="{{ percentage }}"
          is-content-show="{{ isContentShow }}"
        ></q-progress>
      </div>
    </div>
    <text class="title">自定义进度条</text>
    <div class="progress-group">
      <div class="progress-box">
        <q-progress
          stroke-color="{{ strokeColor }}"
          trail-color="{{ trailColor }}"
        ></q-progress>
      </div>
      <div class="progress-box">
        <q-progress
          is-content-show="{{ isContentShow }}"
          format="{{ format }}"
        ></q-progress>
      </div>
      <div class="progress-box">
        <q-progress
          percentage="{{ 80 }}"
          progress-width="{{ progressWidth }}"
          is-content-show="{{ isContentShow }}"
          format="{{ format }}"
        ></q-progress>
      </div>
    </div>
  </div>
</template>
```

```js
export default {
  data() {
    return {
      percentage: 25,
      isContentShow: true,
      progressWidth: '360px',
      strokeColor: '#1E90FF',
      trailColor: 'rgba(255,215,0,.5)',
      format: (percentage) => '已下载' + percentage + '%',
    }
  },
}
```

```less
.wrap {
  flex-direction: column;
  width: 100%;
  background-color: #f2f2f2;
  opacity: 0.8;

  .title {
    width: 100%;
    height: 45px;
    margin-left: 20px;
    line-height: 45px;
    font-size: 12px;
  }

  .progress-group {
    flex-direction: column;
    width: 100%;
    padding: 0 20px 40px 20px;
    background-color: #ffffff;

    .progress-box {
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-top: 28px;
    }
  }
}
```

### API

#### 组件属性

| 属性          | 类型     | 默认值                           | 说明                                                  |
| ------------- | -------- | -------------------------------- | ----------------------------------------------------- |
| percentage    | Number   | 50                               | 进度条百分比，可选值 0-100，可以为小数                |
| progressWidth | String   | '100%'                           | 进度条组件的宽度(宽度包含文字的宽度，支持百分比和 px) |
| strokeHeight  | Number   | 2                                | 进度条的高度                                          |
| isContentShow | Boolean  | false                            | 是否显示右侧文字                                      |
| format        | Function | (percentage) => percentage + '%' | 右侧描述文字的模板函数                                |
| contentStyle  | Object   | {}                               | 自定义右侧文字的样式                                  |
| strokeColor   | String   | '#456fff'                        | 进度条的颜色                                          |
| trailColor    | String   | 'rgba(0, 0, 0, 0.12)'            | 未完成分段的颜色                                      |
