## 列表 list

### 描述

以列表的形式展示文字、图片、段落

### API

#### 组件属性

| 属性 | 类型   | 默认值 | 说明       |
| ---- | ------ | ------ | ---------- |
| data | Object | []     | 列表数据源 |

data 内对象的属性说明

| 属性         | 类型    | 说明                                                 |
| ------------ | ------- | ---------------------------------------------------- |
| title        | String  | 列表的标题                                           |
| description  | String  | 列表的描述文字                                       |
| iconType     | String  | 列表左侧的图标类型                                   |
| thumb        | String  | 列表左侧的缩略图路径                                 |
| extra        | String  | 额外内容,展示右侧内容 rightArrow \| switch \| button |
| rightBtnText | String  | 列表右侧按钮的文字                                   |
| rightText    | String  | 列表右侧的文字                                       |
| switchValue  | Boolean | 列表右侧的 siwtchvalue 的初始值                      |
