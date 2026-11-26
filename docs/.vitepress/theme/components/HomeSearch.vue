<script setup lang="ts">
// 首页大搜索框：提交后跳数据目录页并带上关键词（发现层， 重构规格 §11）。
import { ref } from 'vue'
const props = defineProps<{ lang: 'zh' | 'en' }>()
const q = ref('')
function go() {
  const base = props.lang === 'en' ? '/en/catalog/' : '/catalog/'
  const query = q.value.trim()
  window.location.href = query ? `${base}?q=${encodeURIComponent(query)}` : base
}
</script>

<template>
  <form class="home-search" @submit.prevent="go">
    <input v-model="q" type="search"
      :placeholder="lang === 'en'
        ? 'Try: nighttime lights, DEM, land cover, population…'
        : '试试搜：夜间灯光、DEM、土地覆盖、人口、降水…'" />
    <button type="submit">{{ lang === 'en' ? 'Search datasets' : '搜索数据' }}</button>
  </form>
</template>

<style scoped>
.home-search { display: flex; gap: 10px; max-width: 640px; margin: 8px auto 4px; }
.home-search input {
  flex: 1; padding: 13px 18px; font-size: 16px; border-radius: 999px;
  border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); color: var(--vp-c-text-1);
}
.home-search input:focus { outline: 2px solid var(--vp-c-brand-1); }
.home-search button {
  padding: 13px 26px; font-size: 16px; border: none; border-radius: 999px; cursor: pointer;
  background: var(--vp-c-brand-1); color: #fff; font-weight: 600; white-space: nowrap;
}
</style>
