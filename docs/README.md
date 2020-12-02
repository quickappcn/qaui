## 快速上手

### 快速预览

使用`浏览器`或者`快应用调试器`扫码快速预览组件库效果：

<div style="text-align: center;margin: 40px;"><img src="./assets/qrcode.png" alt="barcode" style="width:300px" /></div>

### 使用组件库

使用下面两种方式均可安装组件库到项目依赖中。

```sh
npm install qaui --save  # 使用npm
yarn add qaui # 使用yarn
```

组件库使用了 less 来开发，所以你还需要安装对应依赖。

```shell script
npm install less less-loader --save-dev
```

::: danger 强烈提示
组件库 designWidth 基于 360 开发，为了适配不同的 designWidth，你需要修改文件`qaui/src/components/common.less`中的@ratio 变量。

当前组件库默认@ratio 为 750/360，如果你的快应用 designWidth 为 360，则应该修改@ratio 为 360/360。
:::

### 反馈交流

你在使用组件库的过程中遇到任何问题，欢迎在`github`上给我们提 issue。
