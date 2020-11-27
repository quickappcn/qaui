## 导航栏 tabbar

### 描述

底部 Tab 切换

### 使用效果

<preview url="https://editor.quickapp.cn/preview/2011/sL/2011sL1yEg08/build/pages/tabbar"/>

### 使用方法

在`.ux`文件中引入组件

```html
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
      ontap="changeTap"
    >
      <block for="{{ tabbarData }}">
        <div class="item-container">
          <div class="item-content">
            <text>标签{{ $idx + 1 }}内容</text>
          </div>
        </div>
      </block>
    </q-tabbar>
  </div>
</template>
```

```less
<style lang="less">
.qaui-wrap {
  flex-direction: column;
}

.item-content {
  flex-direction: column;
  text {
    color: red;
    font-size: 13px;
  }
}
</style>
```

```js
<script>
export default {
  data() {
    return {
      tabbarData: [
        {
          icon: 'homepage',
          iconPath: '../../common/images/tabIcon.svg',
          selectedIconPath: '../../common/images/tabSelectIcon.svg',
          text: '首页首页'
        },
        {
          icon: 'qrcode',
          iconPath: '../../common/images/tabIcon.svg',
          selectedIconPath: '../../common/images/tabSelectIcon.svg',
          text: '产品列表'
        },
        {
          icon: 'contact-fill',
          iconPath: '../../common/images/tabIcon.svg',
          selectedIconPath: '../../common/images/tabSelectIcon.svg',
          text: '我的',

        },
      ],
      index:0,
      iconSize:22,
      background: '#FFF',
      activeColor: '#456FFF',
      textColor: '#B2B2B2'
    }
  },
  changeTap(evt){
    console.log(evt.detail)
  }
}
</script>
```

### API

#### 组件属性

| 属性        | 类型   | 默认值    | 说明                                |
| ----------- | ------ | --------- | ----------------------------------- |
| index       | Number | '0'       | 当前激活项索引                      |
| background  | String | '#fff'    | 当前背景环境                        |
| textColor   | String | '#B2B2B2' | 未激活状态下文字颜色                |
| activeColor | String | '#456FFF' | 激活状态下文字颜色                  |
| iconSize    | Number | 22        | 如果设置了 icon，需传递 icon 的大小 |
| data        | Array  | [ ]       | tab 数据对象数组                    |

data 内对象的属性说明

| 属性             | 类型   | 默认值 | 说明                                         |
| :--------------- | :----- | :----- | :------------------------------------------- |
| icon             | String | -      | 图标类型，与图标路径互斥，优先级更高，非必填 |
| iconPath         | String | -      | 非激活状态下的图标路径，非必填               |
| selectedIconPath | String | -      | 激活状态下的图标路径，非必填                 |
| text             | String | -      | 标签文本，必填                               |

#### 组件事件

| 事件名称 | 事件描述 | 返回值                              |
| -------- | -------- | ----------------------------------- |
| tap      | 切换页面 | {detail：{index: 当前点击项的索引}} |
