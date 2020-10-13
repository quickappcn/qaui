module.exports = {
  title: 'QaUI',
  description: 'QaUI是联盟官方组件库',
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: '',
      },
    ],
    '@vuepress/back-to-top',
  ],
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    ['meta', { name: 'keywords', content: '快应用 组件库 官方 UI组件库 快应用开发' }],
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 0,
    nav: [
      { text: '快应用文档', link: 'https://doc.quickapp.cn' },
      { text: 'GitHub', link: '' },
    ],
    sidebar: [
      '/',
      {
        title: '基础组件',
        collapsable: false,
        children: ["/icon", "/button", "/container", "/titlebar", "/searchbar", "/title", "/divider", "/footer"],
      },
      {
        title: '表单组件',
        collapsable: false,
        children: [
          '/radio',
          '/radio-group',
          '/checkbox',
          '/checkbox-group',
          '/input',
          '/textarea',
          '/filter',
          '/vcode',
          '/switch',
          '/slider',
          '/calendar',
        ],
      },
      {
        title: '操作反馈',
        collapsable: false,
        children: ['/notice', '/popover', '/page-error', '/page-result', '/progress'],
      },
      {
        title: '数据展示',
        collapsable: false,
        children: ['/list', '/steps', '/collapse', '/gallery'],
      },
      {
        title: '高级组件',
        collapsable: false,
<<<<<<< HEAD
        children: ['/tabbar', '/desktop', '/tabs', '/vtabs', '/alphabet'],
=======
        children: ["/tabbar", "/desktop", "/tabs", "/vtabs", "/alphabet"],
>>>>>>> c4c065b... 完成steps组件
      },
    ],
  },
}
