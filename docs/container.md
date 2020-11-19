## 容器 container

### 描述

用来放置各类组件的基础布局组件。

### 使用效果

<preview url="https://editor.quickapp.cn/preview/2009/Yz/2009YzjNs0Tl/build/pages/button"/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-container" src="qaui/src/components/container/index"></import>
```

### 示例

```html
<template>
  <div class="qaui-wrap">
    <q-container>
      <text class="content">内容</text>
    </q-container>
    <q-container>
      <div class="two">
        <text>内容</text>
        <text>内容</text>
      </div>
    </q-container>
    <q-container flex-direction="column">
      <div class="three">
        <text>内容</text>
        <text>内容</text>
        <text>内容</text>
      </div>
      <text class="footer">底部展示区</text>
    </q-container>
    <q-container>
      <swiper class="swiper" autoplay="true">
        <text>内容1</text>
        <text>内容2</text>
        <text>内容3</text>
      </swiper>
    </q-container>
  </div>
</template>
```

```less
.qaui-wrap {
  background-color: #e0e0e0;
  padding: 20px 0;
  flex-direction: column;
  text {
    font-size: 12px;
    color: #000000;
    font-weight: bold;
    text-align: center;
    background-color: #e7e7e7;
    border-radius: 3px;
  }
  .content {
    background-color: #e7e7e7;
    height: 100px;
    width: 100%;
  }
  .two {
    height: 100px;
    width: 100%;
    justify-content: space-between;
    text {
      width: 144px;
    }
  }
  .three {
    height: 100px;
    width: 100%;
    justify-content: space-between;
    text {
      width: 93px;
    }
  }
  .footer {
    margin-top: 12px;
    background-color: #ffffff;
    font-size: 14px;
    text-align: left;
  }
  .swiper {
    background-color: #e7e7e7;
    padding-bottom: 5px;
    height: 100px;
    indicator-size: 5px;
    border-radius: 3px;
    indicator-color: #b2b2b2;
    indicator-selected-color: #666666;
  }
}
```

### API

#### 组件属性

| 属性          | 类型   | 默认值    | 说明                               |
| ------------- | ------ | --------- | ---------------------------------- |
| bgColor       | String | '#FFFFFF' | 组件背景颜色                       |
| flexDirection | String | 'row'     | 内容排列方式，可选 'row'，'column' |
