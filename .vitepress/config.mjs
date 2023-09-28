import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  base: "/element-plus-admin-pure-docs/",
  title: "element-plus-admin-pure",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/images/code.svg",
    nav: [
      { text: '首页', link: '/' },
      { text: '起步', link: '/guides' }
    ],

    sidebar: [
      {
        text: '起步',
        items: [
          { text: '快速上手', link: '/guides' },
          { text: '文件目录说明', link: '/file' },
          { text: '前后端数据交互规范', link: '/api' },
        ]
      },
      {
        text: '插件&方法&组件',
        items: [
          { text: 'admin-table', link: '/admin-table.md' },
          { text: 'table-formatter table格式化', link: '/admin-table-formatter' },
          { text: 'admin-dialog', link: '/admin-dialog.md' },
          { text: '$dict 全局字典', link: '/dict' },
          { text: 'select-dict', link: '/select-dict.md' },
          { text: 'auto-route 自动路由', link: '/auto-route' },
          { text: '权限', link: '/permission' },
          { text: '$rules 表单校验', link: '/rules' },
          { text: '$utils 工具函数', link: '/utils' },
          { text: 'dynamic proxy动态开发环境', link: '/dynamic-proxy' },
        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zjpzjp/element-plus-admin-pure' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gitee</title><path fill="#C71D23" d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>'
        }, link: 'https://gitee.com/siliang/element-plus-admin-pure'
      },
    ]
  }
})
