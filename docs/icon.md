## 图标 icon

### 描述

用于各类业务逻辑场景的基础组件。

### 图标列表

<icon/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-icon" src="qaui/src/components/icon/index"></import>
```

### 示例

```html
<template>
  <div class="qaui-wrap">
    <div class="icon">
      <q-icon type="love" size="48"></q-icon>
    </div>
  </div>
</template>
```

```less
.qaui-wrap {
  flex-direction: row;
  flex-wrap: wrap;
  .icon {
    flex-direction: column;
    justify-content: center;
    width: 120px;
    height: 120px;
    .name {
      font-size: 10px;
      text-align: center;
      margin-top: 20px;
    }
  }
}
```

### API

#### 组件属性

| 属性  | 类型   | 默认值  | 说明     |
| ----- | ------ | ------- | -------- |
| type  | String | 'empty' | 图标类型 |
| size  | String | '14'    | 图标大小 |
| color | String | ''      | 图标颜色 |
