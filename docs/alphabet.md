## 字母检索表 alphabet

### 描述

字母索引器

### 使用效果

<preview url=""/>

### 使用方法

在`.ux`文件中引入组件

```html
<import name="q-alphabet" src="../../components/alphabet/index"></import>
```

### 示例

```html
<template>
  <div class="qaui-wrap">
    <q-alphabet
      id="alphabet"
      data="{{ data }}"
      active-color="#fff"
      active-background="#2878ff"
      is-shake="{{ true }}"
    >
    </q-alphabet>
  </div>
</template>
```

```js
<script>
export default {
  onInit() {
    this.$on('getItem', this.getItem)
  },
  data() {
    return {
      id: 'alphabetId',
      data: [
        {
          index: 'A',
          child: [
            { id: '111213', text: '澳门' },
            { id: '111214', text: '安庆' },
            { id: '111215', text: '鞍山' },
          ],
        },
        {
          index: 'B',
          child: [
            { id: '111216', text: '北海' },
            { id: '111217', text: '北京' },
          ],
        },
        {
          index: 'C',
          child: [
            { id: '111218', text: '长春' },
            { id: '111218', text: '长沙' },
            { id: '111218', text: '重庆' },
          ],
        },
        { index: 'D', child: [{ id: '111218', text: '大理' }] },
        {
          index: 'E',
          child: [
            { id: '111218', text: '鄂尔多斯' },
            { id: '111218', text: '恩施' },
          ],
        },
        {
          index: 'F',
          child: [
            { id: '111218', text: '阜阳' },
            { id: '111218', text: '福州' },
            { id: '111218', text: '佛山' },
          ],
        },
        {
          index: 'G',
          child: [
            { id: '111218', text: '广州' },
            { id: '111218', text: '贵阳' },
            { id: '111218', text: '桂林' },
          ],
        },
        {
          index: 'H',
          child: [
            { id: '111218', text: '哈尔滨' },
            { id: '111218', text: '海口' },
          ],
        },
        {
          index: 'J',
          child: [
            { id: '111218', text: '济南' },
            { id: '111218', text: '井冈山' },
            { id: '111218', text: '九寨沟' },
          ],
        },
        {
          index: 'K',
          child: [
            { id: '111218', text: '康定' },
            { id: '111218', text: '昆明' },
          ],
        },
        {
          index: 'L',
          child: [
            { id: '111218', text: '拉萨' },
            { id: '111218', text: '丽江' },
          ],
        },
        { index: 'M', child: [{ id: '111218', text: '牡丹江' }] },
        {
          index: 'N',
          child: [
            { id: '111218', text: '南昌' },
            { id: '111218', text: '南京' },
            { id: '111218', text: '宁波' },
          ],
        },
        { index: 'P', child: [{ id: '111218', text: '澎湖列岛' }] },
        {
          index: 'Q',
          child: [
            { id: '111218', text: '青岛' },
            { id: '111218', text: '泉州' },
          ],
        },
        {
          index: 'S',
          child: [
            { id: '111218', text: '三亚' },
            { id: '111218', text: '上海' },
            { id: '111218', text: '深圳' },
          ],
        },
        {
          index: 'T',
          child: [
            { id: '111218', text: '台州' },
            { id: '111218', text: '唐山' },
          ],
        },
        {
          index: 'W',
          child: [
            { id: '111218', text: '武汉' },
            { id: '111218', text: '武夷山' },
            { id: '111218', text: '无锡' },
          ],
        },
        {
          index: 'X',
          child: [
            { id: '111218', text: '西安' },
            { id: '111218', text: '厦门' },
            { id: '111218', text: '香港' },
            { id: '111218', text: '香港' },
            { id: '111218', text: '香港' },
            { id: '111218', text: '香港' },
            { id: '111218', text: '香港' },
            { id: '111218', text: '香港' },
            { id: '111218', text: '香港' },
            { id: '111218', text: '香港' },
          ],
        },
        {
          index: 'Y',
          child: [
            { id: '111218', text: '伊春' },
            { id: '111218', text: '扬州' },
            { id: '111218', text: '岳阳' },
            { id: '111218', text: '岳阳' },
            { id: '111218', text: '岳阳' },
            { id: '111218', text: '岳阳' },
            { id: '111218', text: '岳阳' },
            { id: '111218', text: '岳阳' },
            { id: '111218', text: '岳阳' },
            { id: '111218', text: '岳阳' },
            { id: '111218', text: '岳阳' },
          ],
        },
        {
          index: 'Z',
          child: [
            { id: '111218', text: '湛江' },
            { id: '111218', text: '湛江' },
            { id: '111218', text: '湛江' },
            { id: '111218', text: '湛江' },
            { id: '111218', text: '湛江' },
            { id: '111218', text: '张家界' },
            { id: '111218', text: '张家界' },
            { id: '111218', text: '张家界' },
          ],
        },
      ],
    }
  },
  getItem(evt) {
    console.log(evt.detail)
  },
}
</script>

```

### API

#### 组件属性

| 属性           | 类型    | 默认值     | 说明                                         |
| -------------- | ------- | ---------- | -------------------------------------------- |
| id             | String  | -          | 组件的 id，必须                              |
| active-color   | String  | `fff`      | 激活状态下字母的颜色                         |
| active-bgcolor | String  | \`#2878ff` | 激活状态下字母的背景颜色                     |
| is-shake       | Boolean | true       | 是否开启震动，点击字母时，调用原生的震动效果 |
| data           | Array   | [ ]        | data 数据对象数组，对象数据结构见下表        |

| 属性  | 类型   | 默认值 | 说明                                                                   |
| :---- | :----- | :----- | :--------------------------------------------------------------------- |
| index | String | -      | 字母，必填                                                             |
| child | []     | -      | 对应字母索引的二级列表，如`child: [{ id: '111218', text: '北京' }]`    |
| text  | String | -      | 二级列表中的正文内容，必填，child 中除 text 字段外，其余字段皆可自定义 |

#### 组件事件

| 事件名  | 说明                                 | 回调参数                                                |
| ------- | ------------------------------------ | ------------------------------------------------------- |
| getItem | 点击事件，点击索引表关联的正文时触发 | evt：回调对象，通过`evt.detail`可以获取到回传过来的对象 |
