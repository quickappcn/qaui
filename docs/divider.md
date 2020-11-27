## 分隔符 divider

### 描述

用于分隔不同模块及展示加载提示。

### 使用效果

<preview url="https://editor.quickapp.cn/preview/2011/sL/2011sL1yEg08/build/pages/divider"/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-divider" src="qaui/src/components/divider/index"></import>
```

### 示例

```html
<template>
  <div class="qaui-wrap">
    <q-divider loading="{{true}}" content="正在加载"></q-divider>
    <q-divider content="暂无数据"></q-divider>
    <q-divider content="自定义没有更多的内容"></q-divider>
    <q-divider><text class="custom">自定义样式内容</text></q-divider>
  </div>
</template>
```

```less
.qaui-wrap {
  background-color: #ffffff;
  flex-direction: column;
  padding: 20px 0;
  .custom {
    font-size: 20px;
    color: #456fff;
  }
}
```

### API

#### 组件属性

| 属性    | 类型    | 默认值 | 说明               |
| ------- | ------- | ------ | ------------------ |
| loading | Boolean | false  | 是否显示加载中样式 |
| content | String  | ''     | 分隔提示文本       |

#### slot

| 名称 | 描述               |
| ---- | ------------------ |
| -    | 自定义分隔提示内容 |
