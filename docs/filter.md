## 筛选栏 filter

### 描述

用于对数据进行筛选。

### 使用效果

<preview url="https://editor.quickapp.cn/preview/2009/Yz/2009YzjNs0Tl/build/pages/filter-bar"/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-filter" src="../../components/filter"></import>
```

### 示例

```html
<template>
  <div class="wrap">
    <q-filter
      bar-option="{{barOption}}"
      popup-option="{{popupOption}}"
      show-filter-icon="{{showFilterIcon}}"
      onselect-bar="handleSelectBar"
      onselect-popup="handleSelectPopup"
    ></q-filter>
    <div style="flex-direction: column">
      <text>文字文字文字</text>
      <text>文字文字文字</text>
      <text>文字文字文字</text>
      <text>文字文字文字</text>
      <text>文字文字文字</text>
      <text>文字文字文字</text>
      <text>文字文字文字</text>
      <text>文字文字文字</text>
      <text>文字文字文字</text>
      <text>文字文字文字</text>
    </div>
  </div>
</template>
```

```js
export default {
  data: {
    barOption: [
      {
        type: 'drawer',
        label: '标题文字',
        value: 'barValue1',
        select: 'radio',
        direction: 'column',
        children: [
          {
            label: '描述文字描述文字',
            value: 'value1',
          },
          {
            label: '描述文字',
            value: 'value2',
          },
          {
            label: '描述文字',
            value: 'value3',
          },
          {
            label: '描述文字描述文字',
            value: 'value4',
            size: 'large',
          },
          {
            label: '描述文字',
            value: 'value5',
          },
        ],
      },
      {
        type: 'singleState',
        label: '标题文字',
        value: 'barValue2',
      },
      {
        type: 'sort',
        label: '标题文字',
        value: 'barValue3',
      },
    ],
    popupOption: [
      {
        type: 'radio',
        label: '标题文字',
        value: 'popupValue1',
        children: [
          {
            label: '描述文字描述文字',
            value: 'value1',
          },
          {
            label: '描述文字',
            value: 'value2',
          },
          {
            label: '描述文字',
            value: 'value3',
          },
          {
            label: '描述文字描述文字',
            value: 'value4',
          },
          {
            label: '描述文字',
            value: 'value5',
          },
        ],
      },
      {
        type: 'checkbox',
        label: '标题文字',
        value: 'popupValue2',
        children: [
          {
            label: '描述文字描述文字',
            value: 'value1',
          },
          {
            label: '描述文字',
            value: 'value2',
          },
          {
            label: '描述文字',
            value: 'value3',
          },
          {
            label: '描述文字描述文字',
            value: 'value4',
          },
          {
            label: '描述文字',
            value: 'value5',
          },
        ],
      },
      {
        type: 'checkbox',
        label: '标题文字',
        value: 'popupValue3',
        children: [
          {
            hasSecond: true,
            firstLabel: '标题',
            secondLabel: '辅助文字',
            value: 'value1',
          },
          {
            hasSecond: true,
            firstLabel: '标题',
            secondLabel: '辅助文字',
            value: 'value2',
          },
          {
            hasSecond: true,
            firstLabel: '标题',
            secondLabel: '辅助文字',
            value: 'value3',
          },
        ],
      },
      {
        type: 'range',
        label: '标题文字',
        value: 'popupValue3',
        leftRange: {
          default: '100',
          placeholder: '可输入文字',
        },
        rightRange: {
          default: '',
          placeholder: '可输入文字',
        },
      },
      {
        type: 'checkbox',
        label: '标题文字',
        value: 'popupValue3',
        canFold: true,
        isFolded: false,
        children: [
          {
            label: '描述文字描述文字',
            value: 'value1',
          },
          {
            label: '描述文字',
            value: 'value2',
          },
          {
            label: '描述文字',
            value: 'value3',
          },
          {
            label: '描述文字描述文字',
            value: 'value4',
          },
          {
            label: '描述文字',
            value: 'value5',
          },
        ],
      },
      {
        type: 'checkbox',
        label: '标题文字',
        value: 'popupValue3',
        canFold: true,
        isFolded: true,
        children: [
          {
            label: '描述文字描述文字',
            value: 'value1',
          },
          {
            label: '描述文字',
            value: 'value2',
          },
          {
            label: '描述文字',
            value: 'value3',
          },
          {
            label: '描述文字描述文字',
            value: 'value4',
          },
          {
            label: '描述文字',
            value: 'value5',
          },
        ],
      },
      {
        type: 'checkbox',
        label: '标题文字',
        value: 'popupValue3',
        canFold: true,
        isFolded: true,
        children: [
          {
            label: '描述文字描述文字',
            value: 'value1',
          },
          {
            label: '描述文字',
            value: 'value2',
          },
          {
            label: '描述文字',
            value: 'value3',
          },
          {
            label: '描述文字描述文字',
            value: 'value4',
          },
          {
            label: '描述文字',
            value: 'value5',
          },
        ],
      },
    ],
    showFilterIcon: true,
    drawerTop: '40px',
  },

  handleSelectBar(e) {
    console.log('选中的项为：', e.detail.barResult)
  },

  handleSelectPopup(e) {
    console.log('选中的项为：', e.detail.popupResult)
  },
}
```

```less
.wrap {
  flex-direction: column;
}
```

### API

#### 组件属性

| 属性           | 类型    | 默认值 | 说明             |
| -------------- | ------- | ------ | ---------------- |
| barOption      | Array   | []     | 顶部筛选栏配置项 |
| popupOption    | Array   | []     | 筛选弹出框配置项 |
| showFilterIcon | Boolean | true   | 是否显示筛选按钮 |

#### bar-option 属性

| 属性           | 类型   | 默认值  | 说明                                                                       |
| -------------- | ------ | ------- | -------------------------------------------------------------------------- |
| type           | String | ''      | 筛选项类型，可为 drawer,singleState,sort                                   |
| label          | String | ''      | 筛选项描述                                                                 |
| value          | String | ''      | 筛选项值                                                                   |
| select         | String | ''      | drawer 内的项是单选还是多选,只有 type 为 drawer 时生效                     |
| direction      | String | ''      | drawer 内子项的排列方式，可选值为 column 和 row,只有 type 为 drawer 时生效 |
| children       | Array  | []      | 子元素,只有 type 为 drawer 时生效                                          |
| children.label | String | ''      | 子元素的描述                                                               |
| children.value | String | ''      | 子元素的值                                                                 |
| children.size  | String | 'small' | 子元素的尺寸，可选值包括 small、middle、large                              |

#### popup-option 属性

| 属性                   | 类型    | 默认值 | 说明                                    |
| ---------------------- | ------- | ------ | --------------------------------------- |
| type                   | String  | ''     | 筛选项类型，可为 radio、checkbox、range |
| label                  | String  | ''     | 筛选项描述                              |
| value                  | String  | ''     | 筛选项值                                |
| canFold                | Boolean | false  | 该筛选项是否可折叠                      |
| isFolded               | Boolean | false  | 该筛选项是否已为折叠状态                |
| children               | Array   | []     | 子元素                                  |
| children.label         | String  | ''     | 子元素的描述                            |
| children.value         | String  | ''     | 子元素的值                              |
| leftRange              | Object  | {}     | 左输入框配置，type 为 range 时生效      |
| leftRange.default      | String  | ''     | 左输入框默认值                          |
| leftRange.placeholder  | String  | ''     | 左输入框 placeholder                    |
| rightRange             | Object  | {}     | 右输入框配置，type 为 range 时生效      |
| rightRange.default     | String  | ''     | 右输入框默认值                          |
| rightRange.placeholder | String  | ''     | 右输入框 placeholder                    |

#### 组件事件

| 事件名称    | 事件描述                   | 返回值            |
| ----------- | -------------------------- | ----------------- |
| selectBar   | 顶部筛选栏选中事件         | {value:value}     |
| selectPopup | 弹出搜索框确定按钮点击事件 | [ {value:value} ] |
