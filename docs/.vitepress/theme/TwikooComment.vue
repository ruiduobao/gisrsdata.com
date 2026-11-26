<script setup lang="ts">
// Twikoo 评论组件（2026-11-26 接入）：复刻旧 VuePress 站 Twikoo.vue 的行为口径。
// - 后端 envId 与 shengshixian.com 共用自托管服务 https://twikoo.shengshixian.com/
// - 前端 SDK 版本与旧站一致：twikoo@1.5.9（与后端 1.7.24 协议兼容，已在 shengshixian 验证）
// - 评论按页面 pathname 关联（与 Twikoo 默认一致，显式传 path），
//   旧站 permalink /pages/<id>/ 经 rewrites 保留，历史评论可直接对上。
// - 不显示评论的页面与旧站组件代码完全一致：frontmatter comment: false 的
//   页面、首页（/）、归档页（/archives/）、404 页。旧站组件是全局挂载后
//   自行判断的，没有 article: false 排除项——留言板页正是 article: false
//   却带评论（16 条），故此处不作该排除。
import { ref, watch, onMounted, nextTick } from 'vue'
import { useData, useRoute } from 'vitepress'

const ENV_ID = 'https://twikoo.shengshixian.com/'
const SDK_URL = 'https://cdn.jsdelivr.net/npm/twikoo@1.5.9/dist/twikoo.all.min.js'

const { frontmatter, page } = useData()
const route = useRoute()
const el = ref<HTMLElement | null>(null)

function shouldShow(): boolean {
  if (page.value.isNotFound) return false
  const fm = frontmatter.value as Record<string, unknown>
  if (fm.comment === false) return false
  if (route.path === '/') return false
  if (route.path === '/archives/') return false
  return true
}

let sdkPromise: Promise<void> | null = null
function loadSdk(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()
  if ((window as unknown as Record<string, unknown>).twikoo) return Promise.resolve()
  if (!sdkPromise) {
    sdkPromise = new Promise<void>((resolve, reject) => {
      const s = document.createElement('script')
      s.src = SDK_URL
      s.onload = () => resolve()
      s.onerror = () => reject(new Error('twikoo sdk load failed'))
      document.head.appendChild(s)
    })
  }
  return sdkPromise
}

async function init() {
  if (!shouldShow()) return
  await nextTick()
  if (!el.value) return
  try {
    await loadSdk()
    const twikoo = (window as unknown as Record<string, any>).twikoo
    if (!twikoo) return
    el.value.innerHTML = ''
    await twikoo.init({
      envId: ENV_ID,
      el: el.value,
      // 用于区分不同文章的路径键，与旧站默认行为一致（location.pathname）
      path: window.location.pathname,
      lang: 'zh-CN'
    })
  } catch (e) {
    // 评论加载失败不影响正文阅读
    console.warn('[twikoo] init failed:', e)
  }
}

onMounted(init)
watch(() => route.path, init)
</script>

<template>
  <div v-if="shouldShow()" class="twikoo-wrap">
    <div ref="el" id="tcomment"></div>
  </div>
</template>

<style>
.twikoo-wrap {
  margin-top: 24px;
}
.twikoo .tk-comments {
  margin-top: 20px;
}
</style>
