## 纵向选项卡 vtabs

### 描述

纵向的标签页切换。

### 使用效果

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-tabs" src="qaui/src/components/vtabs/index"></import>
<import name="q-tabbar" src="qaui/src/components/tabbar/index"></import>
```

### 示例

```html
<template>
  <div class="qaui-wrap">
    <q-tabbar
      index="{{ index }}"
      background="{{ background }}"
      text-color="{{ textColor }}"
      active-color="{{ activeColor }}"
      data="{{ tabbarData }}"
      icon-size="{{ iconSize }}"
      ontap="changeTabbar"
    >
      <div class="item-container">
        <div class="item-content">
          <q-tabs
            type="default"
            data="{{ data }}"
            active-color="#456fff"
            ontap="changeTap"
          >
            <block for="{{ data }}">
              <div class="item-container">
                <div class="item-content">
                  <text>标签{{ $idx + 1 }}内容</text>
                </div>
              </div>
            </block>
          </q-tabs>
        </div>
      </div>
      <div class="item-container">
        <div class="item-content">
          <q-tabs
            type="capsule"
            data="{{ data }}"
            active-color="#fff"
            ontap="changeTap"
          >
            <block for="{{ data }}">
              <div class="item-container">
                <div class="item-content">
                  <text>标签{{ $idx + 1 }}内容</text>
                </div>
              </div>
            </block>
          </q-tabs>
        </div>
      </div>
      <div class="item-container">
        <div class="item-content">
          <q-tabs
            type="icon-label"
            data="{{ data }}"
            active-color="#456fff"
            ontap="changeTap"
          >
            <block for="{{ data }}">
              <div class="item-container">
                <div class="item-content">
                  <text>标签{{ $idx + 1 }}内容</text>
                </div>
              </div>
            </block>
          </q-tabs>
        </div>
      </div>
    </q-tabbar>
  </div>
</template>
```

```js
<script>
export default {
  data() {
    return {
      data: [
        { label: '标签文字', icon: 'qrcode-fill' },
        { label: '标签文字', icon: 'send' },
        { label: '标签文字', icon: 'call-forwarding' },
        { label: '标签文字', icon: 'restore-call-records' },
        { label: '标签文字', icon: 'restore-call-records' },
        { label: '标签文字', icon: 'restore-call-records' },
        { label: '标签文字', icon: 'restore-call-records' },
        { label: '标签文字', icon: 'restore-call-records' },
        { label: '标签文字', icon: 'restore-call-records' },
        { label: '标签文字', icon: 'restore-call-records' },
        { label: '标签文字', icon: 'restore-call-records' },
        { label: '标签文字', icon: 'restore-call-records' },
      ],
      tabbarData: [
        {
          icon: 'homepage',
          iconPath: '../../common/images/tabIcon.svg',
          selectedIconPath: '../../common/images/tabSelectIcon.svg',
          text: '普通标签',
        },
        {
          icon: 'qrcode',
          iconPath: '../../common/images/tabIcon.svg',
          selectedIconPath: '../../common/images/tabSelectIcon.svg',
          text: '胶囊标签',
        },
        {
          icon: 'contact-fill',
          iconPath: '../../common/images/tabIcon.svg',
          selectedIconPath: '../../common/images/tabSelectIcon.svg',
          text: '描述标签',
        },
      ],
      iconSize: 22,
      background: '#fff',
      activeColor: '#456FFF',
      textColor: '#B2B2B2',
    }
  },
  changeTabbar(evt) {
    console.log('changeTabbar',evt.detail)
  },
  changeTap(evt) {
    console.log('changeTap',evt.detail)
  }
}
</script>
```

```less
<style lang="less">
.qaui-wrap {
  flex-direction: row;
}
</style>
```

### API

#### 组件属性

| 属性        | 类型   | 默认值    | 说明                                                        |
| ----------- | ------ | --------- | ----------------------------------------------------------- |
| type        | String | 'default' | 标签类型,必填. 可选值有：'default'\|'capsule'\|'icon-label' |
| activeColor | String | '#456fff' | 激活时标签颜色                                              |
| data        | Array  | [ ]       | data 数据对象数组，对象数据结构见下表                       |

data 内对象的属性说明

| 属性  | 类型   | 默认值 | 说明                                          |
| :---- | :----- | :----- | :-------------------------------------------- |
| label | String | ''     | 标签文字，必填                                |
| icon  | String | ''     | icon 名称，仅当 type 为`icon-label`有效，必填 |

#### 组件事件

| 事件名称 | 事件描述       | 返回值                              |
| -------- | -------------- | ----------------------------------- |
| tap      | 切换标签时触发 | {detail：{index: 当前点击项的索引}} |
