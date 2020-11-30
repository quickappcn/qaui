# QaUI 组件库项目说明

快应用官方组件库项目，点击查看[组件库文档](https://quickappcn.github.io/qaui)

## 组件预览

使用`浏览器`或者`快应用调试器`扫码快速预览组件库效果：
![组件库二维码](https://quickappcn.github.io/qaui/assets/img/qrcode.08ad4afd.png)

## 使用方法

使用下面两种方式均可安装组件库到项目依赖中。

```sh
npm install qaui --save  # 使用npm
yarn add qaui # 使用yarn
```

组件库使用了 less 来开发，所以你还需要安装对应依赖。

```sh
npm install less less-loader --save-dev
```

## 项目结构

```sh
├── docs  # 组件库文档目录
├── sign  # 组件库sample签名
│   ├── debug
│   └── release
└── src # 组件库项目sample
    ├── common
    ├── components # 组件库具体组件
    │   └── button
    └── pages # sample页面
        ├── button
        └── home
```

## 开发上手

```shell script
npm install # 安装依赖
npm run dev # 启动文档开发
npm run server # 开启sample编译及调试
```
