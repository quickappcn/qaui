module.exports = {
  title: "QUI",
  description: "QUI是联盟官方组件库",
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "",
      },
    ],
    "@vuepress/back-to-top",
  ],
  head: [
    ["link", { rel: "icon", href: "favicon.ico" }],
    [
      "meta",
      { name: "keywords", content: "快应用 组件库 官方 UI组件库 快应用开发" },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    displayAllHeaders: true,
    sidebarDepth: 0,
    nav: [
      { text: "快应用文档", link: "https://doc.quickapp.cn" },
      { text: "GitHub", link: "" },
    ],
    sidebar: [
      "/",
      {
        title: "基础组件",
        collapsable: false,
        children: ["/button"],
      },
      {
        title: "表单组件",
        collapsable: false,
        children: ["/button"],
      },
      {
        title: "操作反馈",
        collapsable: false,
        children: ["/button"],
      },
      {
        title: "数据展示",
        collapsable: false,
        children: ["/button"],
      },
      {
        title: "高级组件",
        collapsable: false,
        children: ["/button"],
      },
    ],
  },
};
