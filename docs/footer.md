## 页脚 footer

### 描述

用于展示页脚信息。

### 使用效果

<preview url="https://editor.quickapp.cn/preview/2009/Yz/2009YzjNs0Tl/build/pages/button"/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-footer" src="qaui/src/components/footer/index"></import>
```

### 示例

```html
<template>
  <div class="qaui-wrap">
    <q-footer content="这是一行版本号版本号信息，内容自定义" logo="/common/logo.png"></q-footer>
    <q-footer links="{{links}}" content="这是一行版本号版本号信息，内容自定义"></q-footer>
    <q-footer links="{{links.slice(0,1)}}" content="这是一行版本号版本号信息，内容自定义"></q-footer>
    <q-footer content="底部文案自定义置底"></q-footer>
  </div>
</template>
```

```js
export default {
  props: {},
  data() {
    return {
      links: [
        {
          name: "底部链接",
          url: "https://doc.quickapp.cn",
        },
        {
          name: "底部链接",
          url: "https://doc.quickapp.cn",
        },
      ],
    };
  },
};
```

```less
.qaui-wrap {
  background-color: #ffffff;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 0;
  .custom {
    font-size: 20px;
    color: #456fff;
  }
}
```

### API

#### 组件属性

| 属性      | 类型        | 默认值 | 说明                   |
| --------- | ----------- | ------ | ---------------------- |
| logo      | String      | ''     | 图标图片链接或路由路径 |
| content   | String      | ''     | 描述内容文本           |
| links     | Array<link> | []     | 链接数据               |
| link.name | String      | ''     | 链接名称               |
| link.url  | String      | ''     | 链接跳转地址           |

#### slot

| 名称    | 描述           |
| ------- | -------------- |
| logo    | 自定义图标内容 |
| content | 自定义样式内容 |
