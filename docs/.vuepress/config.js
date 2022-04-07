const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  lang: 'zh-CN',
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "地信遥感数据汇",
  description: 'GIS/RS 数据与经验资源导航',
  // themeConfig: {
  //   sidebar: { mode: 'structuring', collapsable: false} //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
  // },
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,

}
