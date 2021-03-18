module.exports = {
  title: 'QaUI',
  base: '/qaui/',
  description: 'QaUI是联盟官方组件库',
  plugins: [
    [
      'vuepress-plugin-google-tag-manager',
      {
        gtm: 'G-GNKRB7QBLL',
      },
    ],
    '@vuepress/back-to-top',
    [
      'vuepress-plugin-feedback',
      {
        projectId: '161104887932449729',
        titleText: '您对组件库的使用体验满意吗?',
        good: '组件丰富&&使用简单方便&&UI清晰整洁&&文档丰富详细&&组件接口齐全',
        bad: '组件不全&&使用复杂&&UI不美观&&文档描述不清晰&&组件接口不全',
      },
    ],
  ],
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    [
      'meta',
      { name: 'keywords', content: '快应用 组件库 官方 UI组件库 快应用开发' },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 0,
    nav: [
      { text: '快应用文档', link: 'https://doc.quickapp.cn' },
      { text: 'GitHub', link: 'https://github.com/quickappcn/qaui' },
    ],
    sidebar: [
      '/',
      {
        title: '基础组件',
        collapsable: false,
        children: [
          '/icon',
          '/button',
          '/container',
          '/titlebar',
          '/searchbar',
          '/title',
          '/divider',
          '/footer',
        ],
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
        children: [
          '/notice',
          '/popover',
          '/page-error',
          '/page-result',
          '/progress',
        ],
      },
      {
        title: '数据展示',
        collapsable: false,
        children: ['/list', '/steps', '/collapse', '/gallery'],
      },
      {
        title: '高级组件',
        collapsable: false,
        children: ['/tabbar', '/desktop', '/tabs', '/vtabs', '/alphabet'],
      },
    ],
  },
}
