## 模块标题 title

### 描述

用来展示各级标题。

### 使用效果

<preview url="https://editor.quickapp.cn/preview/2009/Yz/2009YzjNs0Tl/build/pages/button"/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-titlebar" src="qaui/src/components/title/index"></import>
```

### 示例

```html
<div class="qaui-wrap">
  <div class="group">
    <q-title title="外部标题"></q-title>
    <q-title title="外部标题" target="/pages/home"></q-title>
    <q-title title="外部标题" description="描述文字" target="/pages/home"></q-title>
  </div>
  <div class="group bg-white">
    <q-title title="内部标题"></q-title>
    <q-title icon="/common/logo.png" title="内部标题" target="/pages/home"></q-title>
    <q-title icon="/common/logo.png" title="内部标题" description="描述文字" target="/pages/home"></q-title>
    <q-title icon="/common/logo.png" target="/pages/home"><text class="custom">自定义样式</text></q-title>
  </div>
  <q-container flex-direction="column">
    <q-title title="标题文字"></q-title>
    <q-title icon="/common/logo.png" title="标题文字" target="/pages/home"></q-title>
    <q-title icon="/common/logo.png" title="标题文字" description="描述文字" target="/pages/home"></q-title>
    <q-title icon="/common/logo.png" target="/pages/home"><text class="custom">自定义样式</text></q-title>
  </q-container>
</div>
```

```less
.qaui-wrap {
  background-color: #f6f6f6;
  flex-direction: column;
  .group {
    flex-direction: column;
    padding: 0 20px;
    margin-bottom: 20px;
  }
  .bg-white {
    background-color: #ffffff;
  }
  .custom {
    color: #456fff;
    font-size: 20px;
  }
}
```

### API

#### 组件属性

| 属性        | 类型   | 默认值 | 说明         |
| ----------- | ------ | ------ | ------------ |
| title       | String | ''     | 标题文本     |
| icon        | String | ''     | 图标路径     |
| description | String | ''     | 描述文本     |
| target      | String | ''     | 点击跳转路径 |

#### slot

| 名称 | 描述       |
| ---- | ---------- |
| -    | 自定义标题 |
