import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'node:url'
import rewrites from './rewrites.json'
import sidebar from './sidebar.json'
import enSidebar from './en-sidebar.json'

// Static assets stay in their original location (docs/.vuepress/public,
// already tracked in git) instead of a duplicated docs/public copy.
const legacyPublicDir = fileURLToPath(new URL('../.vuepress/public', import.meta.url))

// Local-search tokenizer with CJK bigram support （发现层 §11): MiniSearch's
// default tokenizer treats a whole Chinese phrase as one token, so a query
// like 夜间灯光 would never match. Splitting CJK runs into overlapping
// bigrams makes Chinese keywords searchable; latin words stay whole.
const cjkTokenize = (text: string): string[] => {
  const tokens: string[] = []
  const lower = text.toLowerCase()
  for (const m of lower.matchAll(/[a-z0-9]+(?:[._-][a-z0-9]+)*/g)) tokens.push(m[0])
  for (const m of lower.matchAll(/[一-鿿]+/g)) {
    const run = m[0]
    if (run.length === 1) tokens.push(run)
    else for (let i = 0; i < run.length - 1; i++) tokens.push(run.slice(i, i + 2))
  }
  return tokens
}
const localSearchOptions = {
  miniSearch: {
    options: { tokenize: cjkTokenize },
    searchOptions: { prefix: true, fuzzy: 0.15, combineWith: 'AND' as const }
  }
}

// gisrsdata.com — migrated from VuePress 1.8 + vdoing to VitePress.
// Every legacy permalink is preserved via the generated `rewrites` map
// (source md path -> permalink path). See MIGRATION-REPORT.md.
export default defineConfig({
  lang: 'zh-CN',
  title: '地信遥感数据汇',
  description: '遥感/地信/编程软件类数据资源与教程',
  // 全站访问人数（自建计数服务）：页脚显示总访问量/今日人数，脚本自动上报+渲染
  head: [
    ['script', { src: 'https://api.ruiduobao.cn/stats/visitor-count.js', 'data-site': 'gisrsdata.com', defer: '' }]
  ],
  // Bilingual rebuild (2026-11-26): Chinese stays on the root locale with
  // every legacy URL untouched; English is added under /en/ as a mirror.
  // See ~/workspace/ops/gisrsdata-rebuild/重构规格.md — URLs are frozen,
  // only additions are allowed.
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'GIS & Remote Sensing Data Hub',
      description:
        'Plain-language guides to GIS and remote sensing datasets, with download and Earth Engine access notes.',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Catalog', link: '/en/catalog/' },
          {
            text: 'Dataset Guides',
            items: [
              { text: 'Ocean Sea Surface Salinity (Copernicus)', link: '/en/pages/36f5ea1f/' },
              { text: 'Landsat 8 Level 2 (USGS)', link: '/en/pages/778e3960/' },
              { text: 'ASTER Global DEM', link: '/en/pages/7306f8/' }
            ]
          },
          { text: 'GIS Data (中文)', link: '/data-gis' },
          { text: 'RS Data (中文)', link: '/data-rs' },
          { text: '中文站', link: '/' }
        ],
        sidebar: enSidebar as any,
        outline: { label: 'On this page' },
        docFooter: { prev: 'Previous page', next: 'Next page' },
        darkModeSwitchLabel: 'Theme',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Back to top',
        lastUpdatedText: 'Last updated',
        search: {
          provider: 'local',
          options: {
            ...localSearchOptions,
            translations: {
              button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear search',
                footer: { selectText: 'Select', navigateText: 'Navigate', closeText: 'Close' }
              }
            }
          }
        }
      }
    }
  },
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
        ...localSearchOptions,
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
