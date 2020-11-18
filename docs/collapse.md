## 折叠面板 collapse

### 描述

对复杂区域进行展开和隐藏，其中‘手风琴’是一种特殊的折叠面板，只允许单个内容区域展开

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="q-collapse-group"
  src="qaui/src/components/collapse-group/index"
></import>
<import name="q-collapse" src="qaui/src/components/collapse/index"></import>
```

### 示例

```html
<template>
  <div class="qaui-wrap">
    <q-collapse-group
      title="基础用法"
      id="1"
      default-open="{{['key1','key2']}}"
      onchange="change"
    >
      <q-collapse
        title="标题文字1"
        content="内容区域1"
        group-id="1"
        key="key1"
      ></q-collapse>
      <q-collapse
        title="标题文字2"
        content="内容区域2"
        group-id="1"
        key="key2"
        icon="theme-sms"
      ></q-collapse>
      <q-collapse
        title="标题文字3"
        content="内容区域3"
        group-id="1"
        key="key3"
        thumb="../../common/logo.png"
      ></q-collapse>
    </q-collapse-group>

    <div style="margin-top: 20px">
      <q-collapse-group title="手风琴用法" id="2" accordion="{{true}}">
        <q-collapse
          title="标题文字1"
          content="内容区域1内容区域1内容区域1内容区域1内容区域1内容区域1内容区域1内容区域1内容区域1内容区域1内容区域1内容区域1内容区域1内容区域1内容区域1内容区域1内容区域1内容区域1内容区域1内容区域1内容区域1内容区域1内容区域1"
          group-id="2"
          key="key4"
        ></q-collapse>
        <q-collapse
          title="标题文字2"
          content="内容区域2"
          group-id="2"
          key="key5"
          icon="theme-sms"
        ></q-collapse>
        <q-collapse
          title="标题文字3"
          content="内容区域3"
          group-id="2"
          key="key6"
        ></q-collapse>
      </q-collapse-group>
    </div>
  </div>
</template>
```

```js
export default {
  change(data) {
    console.log(data)
  },
}
```

```less
.qaui-wrap {
  background-color: #ffffff;
  flex-direction: column;
}
```

### API

#### collapse-group 组件属性

| 属性        | 类型    | 默认值 | 说明                                      |
| ----------- | ------- | ------ | ----------------------------------------- |
| defaultOpen | Array   | []     | 默认处于打开状态的子组件的 key 组成的数组 |
| accordion   | Boolean | false  | 手风琴模式，只有一个子组件能处于打开状态  |
| title       | String  | ''     | 自定义标题                                |
| id          | String  | ''     | ID，必填                                  |

#### collapse 组件属性

| 属性     | 类型    | 默认值 | 说明                                                                                              |
| -------- | ------- | ------ | ------------------------------------------------------------------------------------------------- |
| key      | String  | ''     | 索引                                                                                              |
| thumb    | String  | ''     | 左侧缩略图的路径，同时支持本地和云端路径，支持的图片格式包括静态类型（png, jpg）和动态类型（gif） |
| icon     | String  | ''     | icon 的类型，具体参考 icon 组件                                                                   |
| title    | String  | ''     | 自定义标题                                                                                        |
| content  | String  | ''     | 自定义内容                                                                                        |
| disabled | Boolean | false  | 是否禁用                                                                                          |
| groupId  | String  | ''     | 必填（需与父组件的 ID 保持一致）                                                                  |

### collapse-group 组件事件

| 事件名称 | 事件描述       | 返回值             |
| -------- | -------------- | ------------------ |
| change   | 切换面板的回调 | { key:currentkey } |
