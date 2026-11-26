import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import type { Theme } from 'vitepress'
import TwikooComment from './TwikooComment.vue'
import CatalogBrowser from './components/CatalogBrowser.vue'
import HomeSearch from './components/HomeSearch.vue'

// 在默认主题的文章正文之后（doc-after 插槽）挂载 Twikoo 评论区，
// 其余页面结构与默认主题保持一致。
export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(TwikooComment)
    })
  },
  enhanceApp({ app }) {
    // 发现层组件（重构规格 §11）：数据目录筛选页与首页搜索框
    app.component('CatalogBrowser', CatalogBrowser)
    app.component('HomeSearch', HomeSearch)
  }
} satisfies Theme
