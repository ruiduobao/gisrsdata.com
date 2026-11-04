import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'node:url'
import rewrites from './rewrites.json'
import sidebar from './sidebar.json'

// Static assets stay in their original location (docs/.vuepress/public,
// already tracked in git) instead of a duplicated docs/public copy.
const legacyPublicDir = fileURLToPath(new URL('../.vuepress/public', import.meta.url))

// gisrsdata.com — migrated from VuePress 1.8 + vdoing to VitePress.
// Every legacy permalink is preserved via the generated `rewrites` map
// (source md path -> permalink path). See MIGRATION-REPORT.md.
export default defineConfig({
  lang: 'zh-CN',
  title: '地信遥感数据汇',
  description: '遥感/地信/编程软件类数据资源与教程',
  cleanUrls: true,
  // Legacy content contains many historical cross-links; do not fail the
  // build on them during migration.
  ignoreDeadLinks: true,
  srcExclude: ['**/.vuepress/**', 'public/**'],
  vite: {
    publicDir: legacyPublicDir
  },
  rewrites: rewrites as Record<string, string>,
  sitemap: {
    hostname: 'https://www.gisrsdata.com'
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '地信数据',
        link: '/data-gis',
        items: [
          { text: '基础地理信息数据', link: '/data-gis-jichu' },
          { text: '栅格数据', link: '/data-gis-shange' },
          { text: '领域/学科数据', link: '/data-gis-lingyu' },
          { text: '坐标系', link: '/data-gis-cor' }
        ]
      },
      {
        text: '遥感数据',
        link: '/data-rs',
        items: [
          { text: '卫星数据', link: '/data-rs-sat' },
          { text: '卫星产品数据', link: '/data-rs-product' },
          { text: '云平台数据', link: '/data-rs-cloud' }
        ]
      },
      {
        text: '网站导航',
        link: '/pages/8fbb95/',
        items: [
          { text: '网站导航(中文版)', link: '/pages/783964/' },
          { text: '网站导航(英文版)', link: '/pages/8d8352/' },
          { text: '学科导航', link: '/pages/b6c092/' },
          { text: '专题导航', link: '/pages/bede60/' }
        ]
      },
      { text: '开发/软件', link: '/softs' },
      {
        text: '其他',
        items: [
          { text: '内容分类', link: '/categories/' },
          { text: '网站时间线', link: '/archives/' },
          { text: '关于网站', link: '/about' },
          { text: '各类数据', link: 'https://ruiduobao.com/' },
          { text: '遥感论坛', link: 'https://www.rserforum.com/' },
          { text: '地信宝藏屋', link: 'https://r.landcover100.com/' },
          { text: '锐多宝区划', link: 'https://www.shengshixian.com/' }
        ]
      }
    ],
    sidebar: sidebar as any,
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },
    outline: { label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    lastUpdatedText: '最后更新'
  }
})
