## 步骤条 steps

### 描述

显示任务的进度/引导用户完成某些操作

#### steps 组件属性

| 属性          | 类型    | 默认值       | 说明                                           |
| ------------- | ------- | ------------ | ---------------------------------------------- |
| current       | Number  | 0            | 当前步骤，从 0 开始                            |
| direction     | String  | 'horizontal' | step 的排列方式，可选值为 vertical、horizontal |
| id            | String  | ''           | steps 组件 ID，必填                            |
| hasText       | Boolean | fase         | 是否显示数字                                   |
| finishedColor | String  | \#456FFF     | 完成状态的颜色                                 |
| errorColor    | String  | \#F19E38     | 错误状态的颜色                                 |

### step 组件属性

| 属性    | 类型           | 默认值 | 说明                                                       |
| ------- | -------------- | ------ | ---------------------------------------------------------- |
| status  | String         | ''     | step 的当前状态："waiting", "proceed", "finished", "error" |
| icon    | String         | ''     | icon 样式，具体样式查看 icon 组件                          |
| title   | String         | ''     | 标题                                                       |
| content | String         | ''     | 内容                                                       |
| groupId | String         | ''     | 所属的 steps 组件的 ID，必填                               |
| title   | String \| slot | ''     | 自定义标题                                                 |
| content | String \| slot | ''     | 自定义内容                                                 |
