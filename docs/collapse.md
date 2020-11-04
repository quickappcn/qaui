## 折叠面板 collapse

### 描述

对复杂区域进行展开和隐藏，其中‘手风琴’是一种特殊的折叠面板，只允许单个内容区域展开

### API

#### collapse-group 组件属性

| 属性        | 类型     | 默认值 | 说明                                         |
| ----------- | -------- | ------ | -------------------------------------------- |
| defaultOpen | String[] | []     | 默认处于打开状态的子组件                     |
| accordion   | Boolean  | false  | accordion 模式，只有一个子组件能处于打开状态 |
| title       | String   | ''     | 标题                                         |
| id          | String   | ''     | accordion-group 组件 ID，必填                |

#### collapse 组件属性

| 属性     | 类型    | 默认值 | 说明                                   |
| -------- | ------- | ------ | -------------------------------------- |
| key      | String  | ''     | 索引                                   |
| thumb    | String  | ''     | 左侧缩略图的路径                       |
| icon     | String  | ''     | icon 的类型，具体参考 icon 组件        |
| title    | String  | ''     | 标题                                   |
| content  | String  | ''     | 内容                                   |
| disabled | Boolean | false  | 禁用                                   |
| groupId  | String  | ''     | 所属的 accordion-group 组件的 ID，必填 |

### collapse-group 组件事件

| 名称   | 参数             | 描述                       |
| ------ | ---------------- | -------------------------- |
| change | {key:currentkey} | 当前打开的子组件变化时触发 |
