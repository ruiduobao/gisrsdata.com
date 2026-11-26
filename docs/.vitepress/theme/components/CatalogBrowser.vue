<script setup lang="ts">
// 数据目录浏览器（发现层， 重构规格 §11）：纯客户端筛选 catalog.json。
// 数据由 pipeline/extract_catalog.py 从数据集页结构化字段生成，
// 每完成一批双语改写重跑一次即自动补齐中文标题/简介。
import { ref, computed, onMounted } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps<{ lang: 'zh' | 'en' }>()
const en = props.lang === 'en'

interface Entry {
  id: string; url: string; en_url: string
  title_zh: string; title_en: string
  cat: string; tags: string[]
  res_m: number | null; res_bucket: string
  region: string; region_label: string
  coverage: string; time: string
  provider: string; platform: string
  ee_id: string; intro_zh: string; intro_en: string
  type: string; batch: string
}
interface Cat { id: string; zh: string; en: string }

const L = en ? {
  searchPh: 'Search by name, keyword, Earth Engine ID… e.g. nighttime lights, DEM, NDVI',
  allCats: 'All categories', res: 'Resolution', region: 'Coverage', source: 'Source',
  anyRes: 'Any resolution', anyRegion: 'Any coverage', anySource: 'Any source',
  global: 'Global', china: 'China', otherRegion: 'Other regions',
  gee: 'Google Earth Engine', mpc: 'Microsoft Planetary Computer', otherSrc: 'Tutorials / direct download',
  found: (n: number) => `${n} datasets`,
  more: 'Show more', none: 'No datasets match. Try fewer filters or different keywords.',
  loading: 'Loading catalog…', loadFail: 'Failed to load the catalog. Please refresh.',
  hasEn: 'English guide', clear: 'Clear filters'
} : {
  searchPh: '输入名称、关键词或 Earth Engine 编号… 如 夜间灯光、DEM、NDVI、Landsat',
  allCats: '全部类目', res: '分辨率', region: '覆盖区域', source: '数据来源',
  anyRes: '不限分辨率', anyRegion: '不限区域', anySource: '不限来源',
  global: '全球', china: '中国', otherRegion: '其他区域',
  gee: 'Google Earth Engine', mpc: 'Microsoft Planetary Computer', otherSrc: '教程/直接下载',
  found: (n: number) => `共 ${n} 个数据集`,
  more: '显示更多', none: '没有符合条件的数据集，试试减少筛选条件或换个关键词。',
  loading: '目录加载中…', loadFail: '目录加载失败，请刷新页面重试。',
  hasEn: '有英文版', clear: '清除筛选'
}

const RES_ORDER = ['10 米及以内', '10–30 米', '30–100 米', '100 米–1 公里', '1 公里以上', '矢量/表格或未注明']
const RES_EN: Record<string, string> = {
  '10 米及以内': '≤ 10 m', '10–30 米': '10–30 m', '30–100 米': '30–100 m',
  '100 米–1 公里': '100 m – 1 km', '1 公里以上': '> 1 km', '矢量/表格或未注明': 'Vector / table / n/a'
}
const SCENES: Record<string, string[]> = {
  landchange: ['landcover'], city: ['urban', 'population'], water: ['water'],
  disaster: ['hazards'], vegetation: ['vegetation'], nightlights: ['nightlights'],
  climate: ['climate'], dem: ['dem'], ocean: ['ocean'], atmosphere: ['atmosphere']
}

const entries = ref<Entry[]>([])
const cats = ref<Cat[]>([])
const state = ref<'loading' | 'ready' | 'error'>('loading')
const q = ref('')
const selCats = ref<Set<string>>(new Set())
const res = ref('')
const region = ref('')
const source = ref('')
const shown = ref(60)

onMounted(async () => {
  try {
    const r = await fetch(withBase('/catalog.json'))
    if (!r.ok) throw new Error(String(r.status))
    const data = await r.json()
    entries.value = data.entries
    cats.value = data.categories
  } catch {
    state.value = 'error'
    return
  }
  const params = new URLSearchParams(window.location.search)
  if (params.get('q')) q.value = params.get('q')!
  const scene = params.get('scene')
  const catParam = params.get('cat')
  const initial = catParam ? catParam.split(',') : (scene ? (SCENES[scene] || []) : [])
  initial.forEach(c => selCats.value.add(c))
  if (params.get('res')) res.value = params.get('res')!
  if (params.get('region')) region.value = params.get('region')!
  state.value = 'ready'
})

const catName = (c: Cat) => (en ? c.en : c.zh)
const catById = computed(() => Object.fromEntries(cats.value.map(c => [c.id, c])))
const catCounts = computed(() => {
  const m: Record<string, number> = {}
  for (const e of entries.value) m[e.cat] = (m[e.cat] || 0) + 1
  return m
})
const resOptions = computed(() => RES_ORDER.filter(r => entries.value.some(e => e.res_bucket === r)))
const resLabel = (r: string) => (en ? (RES_EN[r] || r) : r)
const regionLabelOf = (e: Entry) => e.region_label || (e.region === '全球' ? L.global : e.region === '中国' ? L.china : '')
const titleOf = (e: Entry) => (en ? (e.title_en || e.title_zh) : (e.title_zh || e.title_en))
const introOf = (e: Entry) => (en ? (e.intro_en || e.intro_zh) : (e.intro_zh || e.intro_en))
const linkOf = (e: Entry) => (en && e.batch ? e.en_url : e.url)
const sourceOf = (e: Entry) => e.platform === 'Google Earth Engine' ? 'gee' : e.platform === 'Microsoft Planetary Computer' ? 'mpc' : 'other'

const filtered = computed(() => {
  const terms = q.value.toLowerCase().split(/\s+/).filter(Boolean)
  const out = entries.value.filter(e => {
    if (selCats.value.size && !selCats.value.has(e.cat)) return false
    if (res.value && e.res_bucket !== res.value) return false
    if (region.value && e.region !== region.value) return false
    if (source.value && sourceOf(e) !== source.value) return false
    if (terms.length) {
      const hay = `${e.title_zh} ${e.title_en} ${e.ee_id} ${e.provider} ${e.tags.join(' ')} ${e.intro_zh} ${e.intro_en}`.toLowerCase()
      if (!terms.every(t => hay.includes(t))) return false
    }
    return true
  })
  const ql = q.value.trim().toLowerCase()
  out.sort((a, b) => {
    if (ql) {
      const ah = titleOf(a).toLowerCase().includes(ql) ? 0 : 1
      const bh = titleOf(b).toLowerCase().includes(ql) ? 0 : 1
      if (ah !== bh) return ah - bh
    }
    const ab = a.batch ? 0 : 1, bb = b.batch ? 0 : 1
    if (ab !== bb) return ab - bb
    return titleOf(a).localeCompare(titleOf(b))
  })
  return out
})
const visible = computed(() => filtered.value.slice(0, shown.value))

function toggleCat(id: string) {
  selCats.value.has(id) ? selCats.value.delete(id) : selCats.value.add(id)
  selCats.value = new Set(selCats.value)
  shown.value = 60
}
function clearAll() {
  q.value = ''; selCats.value = new Set(); res.value = ''; region.value = ''; source.value = ''
  shown.value = 60
}
</script>

<template>
  <div class="catalog">
    <div v-if="state === 'loading'" class="c-status">{{ L.loading }}</div>
    <div v-else-if="state === 'error'" class="c-status">{{ L.loadFail }}</div>
    <template v-else>
      <input class="c-search" type="search" v-model="q" :placeholder="L.searchPh" @input="shown = 60" />
      <div class="c-cats">
        <button v-for="c in cats" :key="c.id" class="c-chip"
          :class="{ on: selCats.has(c.id) }" @click="toggleCat(c.id)">
          {{ catName(c) }} <span class="c-n">{{ catCounts[c.id] || 0 }}</span>
        </button>
      </div>
      <div class="c-filters">
        <label>{{ L.res }}
          <select v-model="res" @change="shown = 60">
            <option value="">{{ L.anyRes }}</option>
            <option v-for="r in resOptions" :key="r" :value="r">{{ resLabel(r) }}</option>
          </select>
        </label>
        <label>{{ L.region }}
          <select v-model="region" @change="shown = 60">
            <option value="">{{ L.anyRegion }}</option>
            <option value="全球">{{ L.global }}</option>
            <option value="中国">{{ L.china }}</option>
            <option value="其他">{{ L.otherRegion }}</option>
          </select>
        </label>
        <label>{{ L.source }}
          <select v-model="source" @change="shown = 60">
            <option value="">{{ L.anySource }}</option>
            <option value="gee">{{ L.gee }}</option>
            <option value="mpc">{{ L.mpc }}</option>
            <option value="other">{{ L.otherSrc }}</option>
          </select>
        </label>
        <span class="c-count">{{ L.found(filtered.length) }}</span>
        <button class="c-clear" @click="clearAll">{{ L.clear }}</button>
      </div>
      <div v-if="!filtered.length" class="c-status">{{ L.none }}</div>
      <div class="c-grid">
        <a v-for="e in visible" :key="e.id" class="c-card" :href="linkOf(e)">
          <div class="c-card-top">
            <span class="c-tag">{{ catById[e.cat] ? catName(catById[e.cat]) : e.cat }}</span>
            <span v-if="en ? e.batch : e.batch" class="c-en">{{ en ? 'EN' : L.hasEn }}</span>
          </div>
          <div class="c-title">{{ titleOf(e) }}</div>
          <div class="c-meta">
            <span>{{ resLabel(e.res_bucket) }}</span>
            <span v-if="e.time"> · {{ e.time }}</span>
            <span v-if="regionLabelOf(e)"> · {{ regionLabelOf(e) }}</span>
          </div>
          <div v-if="introOf(e)" class="c-intro">{{ introOf(e) }}</div>
          <div class="c-src">{{ e.provider || e.platform }}</div>
        </a>
      </div>
      <button v-if="filtered.length > shown" class="c-more" @click="shown += 60">
        {{ L.more }} ({{ filtered.length - shown }})
      </button>
    </template>
  </div>
</template>

<style scoped>
.catalog { margin: 16px 0 8px; }
.c-status { padding: 32px 0; text-align: center; color: var(--vp-c-text-2); }
.c-search {
  width: 100%; padding: 12px 16px; font-size: 16px;
  border: 1px solid var(--vp-c-divider); border-radius: 10px;
  background: var(--vp-c-bg-soft); color: var(--vp-c-text-1);
}
.c-search:focus { outline: 2px solid var(--vp-c-brand-1); }
.c-cats { display: flex; flex-wrap: wrap; gap: 8px; margin: 14px 0 4px; }
.c-chip {
  padding: 5px 12px; border-radius: 999px; font-size: 13.5px; cursor: pointer;
  border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); color: var(--vp-c-text-1);
}
.c-chip.on { background: var(--vp-c-brand-1); border-color: var(--vp-c-brand-1); color: #fff; }
.c-chip .c-n { opacity: .65; font-size: 12px; }
.c-filters { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; margin: 12px 0 18px; font-size: 14px; color: var(--vp-c-text-2); }
.c-filters select {
  margin-left: 6px; padding: 5px 8px; border-radius: 8px;
  border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); color: var(--vp-c-text-1);
}
.c-count { font-weight: 600; color: var(--vp-c-text-1); }
.c-clear { background: none; border: none; color: var(--vp-c-brand-1); cursor: pointer; font-size: 14px; }
.c-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 14px; }
.c-card {
  display: block; padding: 14px 16px; border: 1px solid var(--vp-c-divider);
  border-radius: 12px; background: var(--vp-c-bg-soft); text-decoration: none !important;
  transition: border-color .15s;
}
.c-card:hover { border-color: var(--vp-c-brand-1); }
.c-card-top { display: flex; justify-content: space-between; margin-bottom: 6px; }
.c-tag { font-size: 12px; padding: 2px 8px; border-radius: 999px; background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); }
.c-en { font-size: 12px; color: var(--vp-c-text-3); }
.c-title { font-size: 15.5px; font-weight: 600; line-height: 1.45; color: var(--vp-c-text-1); }
.c-meta { font-size: 13px; color: var(--vp-c-text-2); margin-top: 5px; }
.c-intro { font-size: 13.5px; color: var(--vp-c-text-2); line-height: 1.55; margin-top: 6px;
  display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.c-src { font-size: 12px; color: var(--vp-c-text-3); margin-top: 8px; }
.c-more {
  display: block; margin: 20px auto 4px; padding: 9px 28px; border-radius: 999px; cursor: pointer;
  border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); font-size: 14.5px;
}
.c-more:hover { border-color: var(--vp-c-brand-1); }
</style>
