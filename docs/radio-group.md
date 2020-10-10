## 单选按钮组 radio-group

### 描述

用于给表单中的单选框分组，提供了多个相关单选框的操作方法。需要配合`radio`使用。

### 使用效果

<preview url="https://editor.quickapp.cn/preview/2009/Yz/2009YzjNs0Tl/build/pages/button"/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-radio-group" src="qaui/src/components/radio-group/index"></import>
```

### 示例

```html
<template>
  <div class="qaui-wrap">
    <text class="title">default样式</text>
    <q-radio-group id="myGroup1" current="{{current}}" onchange="handleChange">
      <q-radio group="myGroup1" for="{{list}}" value="{{$item.value}}" checked="{{$item.checked}}"></q-radio>
    </q-radio-group>
    <text class="title">list样式</text>
    <q-radio-group id="myGroup2" current="{{current}}" onchange="handleChange">
      <q-radio
        group="myGroup2"
        type="list"
        for="{{list}}"
        value="{{$item.value}}"
        checked="{{$item.checked}}"
      ></q-radio>
    </q-radio-group>
    <text class="title">dot样式</text>
    <q-radio-group id="myGroup3" current="{{current}}" onchange="handleChange">
      <q-radio group="myGroup3" type="dot" for="{{list}}" value="{{$item.value}}" checked="{{$item.checked}}"></q-radio>
    </q-radio-group>
  </div>
</template>
```

```js
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          value: "单选项1",
        },
        {
          id: 2,
          value: "单选项2",
          checked: true,
        },
        {
          id: 3,
          value: "单选项3",
        },
      ],
      current: "单选项2",
    };
  },
  handleChange({ detail }) {
    this.current = detail.value;
  },
};
```

```less
.qaui-wrap {
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px 0;
  .title {
    height: 40px;
    font-size: 14px;
    align-self: flex-start;
    padding-left: 20px;
  }
}
```

### API

#### 组件属性

| 属性    | 类型   | 默认值 | 说明                            |
| ------- | ------ | ------ | ------------------------------- |
| current | String | -      | 默认处于选中状态的 radio 的值   |
| id      | String | -      | 组的 id，用于区分不同组，必填项 |

#### 组件事件

| 事件名称 | 事件描述         | 返回值                         |
| -------- | ---------------- | ------------------------------ |
| change   | 值发生变化的事件 | {current:current, value:value} |
