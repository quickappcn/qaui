## 画廊 gallery

### 描述

用于展示图片并可以点击预览

### 使用效果

<div style="text-align: center;margin: 40px;"><img src="./assets/gallery.gif" alt="barcode" style="width:300px" /></div>

### 使用方法

在.ux 文件中引入组件

```html
<import name="q-gallery" src="qaui/src/components/gallery/index"></import>
```

### 实例

```html
<template>
  <div style="flex-direction: column">
    <q-gallery title="标题文字" srcs="{{ data1 }}"></q-gallery>
    <q-gallery title="标题文字" srcs="{{ data2 }}"></q-gallery>
    <q-gallery
      title="标题文字"
      srcs="{{ data3 }}"
      onimage-preview-success="onImagePreviewSuccess"
    ></q-gallery>
    <q-gallery
      title="视频文件"
      video-orientation="landscape"
      video-url="https://swsdl.vivo.com.cn/appstore/developer/uploadfile/20180323/20180323183010837.mp4"
      onvideo-click="clickItem"
      onvideo-appear="videoAppear"
      poster-url="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png"
    ></q-gallery>
  </div>
</template>
```

```js
import prompt from '@system.prompt'

export default {
  data() {
    return {
      data1: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
      ],
      data2: [
        'https://developer.huawei.com/images/quickApp-ide/banner_320-484.png',
      ],
      data3: [
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=134518335,1751359104&fm=26&gp=0.jpg',
      ],
      data4: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
      ],
      data5: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603277817178&di=93757526f827b5ee7bdbcc033a29487b&imgtype=0&src=http%3A%2F%2Fwww.huaxia.com%2Fxw%2Fshgj%2Fimages%2F2018%2F06%2F12%2F2009996.png',
        'https://imagestbook.cn/c9162600-17a7-11e9-8302-0d1daa9ceb5b',
      ],
    }
  },

  clickItem() {
    prompt.showToast({
      message: 'click video',
    })
  },
  onImagePreviewSuccess() {
    console.log('图片预览成功')
  },
  videoAppear() {
    prompt.showToast({
      message: '视频出现了',
    })
  },
}
```

### API

#### 组件属性

| 属性             | 类型   | 默认值      | 说明                                                                                       |
| ---------------- | ------ | ----------- | ------------------------------------------------------------------------------------------ |
| srcs             | Array  | []          | 图片链接地址，支持网络地址、本地资源地址或 base64 图片，注意 base64 图片不支持大图预览功能 |
| title            | String | ''          | 画廊描述文字                                                                               |
| videoUrl         | String | ''          | 视频链接地址（网络地址或者本地路径）                                                       |
| posterUrl        | String | ''          | 视频预览海报                                                                               |
| videoOrientation | String | 'landscape' | 视频展示的和全屏播放的方向：'landscape' 横屏，'portrait' 竖屏                              |

#### 组件事件

| 事件名称            | 事件描述           | 返回值 |
| ------------------- | ------------------ | ------ |
| imagePreviewSuccess | 点击图片成功时触发 | event  |
| imagePreviewFail    | 点击图片失败时触发 | event  |
| videoTap            | 点击视频时触发     | event  |
| videoAppear         | 视频出现时触发     | event  |
