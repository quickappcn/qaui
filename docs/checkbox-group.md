## 多选按钮组 checkbox-group

### 描述

用于给表单中的多选框分组，提供了多个相关多选框的操作方法。需要配合`checkbox`使用。

### 使用效果

<preview url="https://editor.quickapp.cn/preview/2009/Yz/2009YzjNs0Tl/build/pages/button"/>

### 使用方法

在`.ux`文件中引入组件

```html
<import
  name="q-checkbox-group"
  src="qaui/src/components/checkbox-group/index"
></import>
```

### 示例

```html
<template>
  <div class="qaui-wrap">
    <q-checkbox-group
      id="myGroup"
      current="{{current}}"
      onchange="handleChange"
    >
      <q-checkbox
        group="myGroup"
        type="list"
        for="{{list}}"
        value="{{$item.value}}"
        checked="{{$item.checked}}"
        disabled="{{$item.disabled}}"
      ></q-checkbox>
    </q-checkbox-group>
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
          value: '多选项1',
        },
        {
          id: 2,
          value: '多选项2',
          checked: true,
          disabled: true,
        },
        {
          id: 3,
          value: '多选项3',
        },
        {
          id: 4,
          value: '多选项4',
          disabled: true,
        },
      ],
      current: ['多选项2', '多选项1'],
    }
  },
  handleChange({ detail }) {
    const index = this.current.indexOf(detail.value)
    index === -1
      ? this.current.push(detail.value)
      : this.current.splice(index, 1)
  },
}
```

```less
.qaui-wrap {
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px 0;
}
```

### API

#### 组件属性

| 属性    | 类型   | 默认值 | 说明                             |
| ------- | ------ | ------ | -------------------------------- |
| current | Array  | []     | 默认处于选中状态的 checkbox 的值 |
| id      | String | -      | 组的 id，用于区分不同组，必填项  |

#### 组件事件

| 事件名称 | 事件描述         | 返回值                         |
| -------- | ---------------- | ------------------------------ |
| change   | 值发生变化的事件 | {current:current, value:value} |
