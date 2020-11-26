## 列表 list

### 描述

以列表的形式展示文字、图片、段落

### 使用效果

<preview url="https://editor.quickapp.cn/preview/2011/sL/2011sL1yEg08/build/pages/list/"/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-list" src="qaui/src/components/list/index"></import>
```

### 示例

```html
<template>
  <div class="qaui-wrap">
    <q-list
      title="列表标题"
      data="{{ listData }}"
      onitem-tap="itemTap"
      onsamll-btn-tap="smallBtnTap"
      onswitch-tap="switchTap"
    ></q-list>
  </div>
</template>
```

```js
export default {
  data() {
    return {
      listData: [
        {
          title: '标题文字',
        },
        {
          title: '标题文字',
          extra: 'rightArrow',
        },
        {
          title: '标题文字',
          rightText: '结果文字',
        },
        {
          title: '标题文字',
          rightText: '结果文字',
          extra: 'rightArrow',
        },
        {
          title: '标题文字',
          extra: 'switch',
          switchValue: true,
        },
        {
          title: '标题文字',
          extra: 'button',
          rightBtnText: '按钮',
        },
        {
          title: '标题文字1',
          iconType: 'bill-fill',
          extra: 'rightArrow',
        },
        {
          title: '标题文字1',
          iconType: 'bill-fill',
          rightText: '结果文字',
          extra: 'rightArrow',
        },
        {
          title: '标题文字1',
          iconType: 'bill-fill',
          extra: 'switch',
          switchValue: true,
        },
        {
          title: '标题文字4',
          thumb: '../../common/logo.png',
        },
        {
          title: '标题文字',
          description: '这是一段描述文字',
        },
        {
          title: '标题文字',
          description: '这是一段描述文字',
          extra: 'rightArrow',
        },
        {
          title: '标题文字',
          description: '这是一段描述文字',
          rightText: '结果文字',
        },
        {
          title: '标题文字',
          description: '这是一段描述文字',
          extra: 'rightArrow',
          rightText: '结果文字',
        },
        {
          title: '标题文字',
          description: '这是一段描述文字',
          extra: 'switch',
          switchValue: true,
        },
        {
          title: '标题文字',
          description: '这是一段描述文字',
          extra: 'button',
          rightBtnText: '按钮',
        },
        {
          title: '标题文字1',
          iconType: 'bill-fill',
          description: '这是一段描述文字',
          extra: 'rightArrow',
        },
        {
          title: '标题文字2',
          description: '这是一段描述文字2',
          iconType: 'bill-fill',
          rightText: '结果文字',
          extra: 'rightArrow',
        },
        {
          title: '标题文字2',
          description: '这是一段描述文字2',
          iconType: 'bill-fill',
          extra: 'switch',
          switchValue: true,
        },
        {
          title: '标题文字2',
          description: '这是一段描述文字2',
          iconType: 'bill-fill',
          extra: 'button',
          rightBtnText: '按钮',
        },
        {
          title: '标题文字3',
          description: '这是一段描述文字2',
          thumb: '../../common/logo.png',
        },
      ],
    }
  },

  itemTap(data) {
    const index = data.detail.index
    this.listData[index].title = `已选中第${index}行`
  },

  smallBtnTap(data) {
    const index = data.detail.index
    this.listData[index].title = `选中小按钮${index}`
  },

  switchTap(data) {
    const index = data.detail.index
    this.listData[index].title = `选中switch按钮${index}`
  },
}
```

### API

#### 组件属性

| 属性 | 类型  | 默认值 | 说明       |
| ---- | ----- | ------ | ---------- |
| data | Array | []     | 列表数据源 |

data 内对象的属性说明

| 属性         | 类型    | 说明                                                                      |
| ------------ | ------- | ------------------------------------------------------------------------- |
| title        | String  | 列表的标题                                                                |
| description  | String  | 列表的描述文字                                                            |
| iconType     | String  | 列表左侧的图标类型，详情见 icon 组件                                      |
| thumb        | String  | 列表左侧的缩略图路径                                                      |
| extra        | String  | 额外内容,展示在列表的最右侧,可选值有 'rightArrow' \| 'switch' \| 'button' |
| rightBtnText | String  | 列表右侧按钮的文字                                                        |
| rightText    | String  | 列表右侧的文字                                                            |
| switchValue  | Boolean | 列表右侧 switch 的初始 Value 值                                           |

#### 组件事件

| 事件名称    | 事件描述                                            | 返回值                                                               |
| ----------- | --------------------------------------------------- | -------------------------------------------------------------------- |
| itemTap     | 点击列表项时触发                                    | {detail：{index: 当前点击项的索引}}                                  |
| smallBtnTap | 当 extra 为 'button' 时，点击右侧按钮时触发         | {detail：{index: 当前点击项的索引}}                                  |
| switchTap   | 当 extra 为 'switch' 时，点击右侧 switch 组件时触发 | {detail：{index: 当前点击项的索引, active: 当前 switch 的 value 值}} |
