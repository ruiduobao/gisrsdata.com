---
title: "全球油棕分布与种植年份（1990–2021）v1.2"
date: 2026-11-03 12:00:00
permalink: /pages/36b9933f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "biodiversity"
  - "biopama"
  - "conservation"
  - "crop"
  - "global"
  - "landcover"
  - "landuse"
  - "landuse-landcover"
  - "palm"
  - "plantation"
---

# 全球油棕分布与种植年份（1990–2021）v1.2

英文原名：Global Oil Palm Extent and Planting Year (1990-2021) v1.2

## 这是什么数据

这套数据画两件事：油棕种在哪里、是哪年种的。它给出 2016–2021 年全球油棕分布（10 米分辨率）和 1990–2021 年的种植年份（30 米分辨率），覆盖全球热带、亚热带油棕产区的 609 个 100×100 公里格网，共标出 2,398 万公顷郁闭油棕（工业种植园 1,669 万公顷、占 69.6%；小农种植园 729 万公顷、占 30.4%），抽样估算面积为工业 1,682 ± 19 万公顷、小农 737 ± 25 万公顷。注意：目录时间范围写到 1990 年只是反映种植年份的跨度，这是一幅静态拼图，不是多期时序数据。

做法简述：2016–2021 年逐年郁闭油棕图由 DeepLabv3+ 卷积神经网络对 Sentinel-1 年度合成影像解译得到，并用 ESA WorldCover 掩膜掉耕地、建成区、水体等易混类、再经人工筛查去掉椰子园、水田等误检；六年图按「任一年判为油棕即保留」合并。种植年份则由 1990–2021 年 Landsat 时序用随机森林找出郁闭前最后一次清地事件推算，取值范围 1989–2022 年。

使用前务必知道的限制：① Sentinel-1 要等油棕郁闭（约种后 3 年）才能可靠检出，2019–2021 年新种的种植园在分布图里基本缺失，不能用它量测 2019–2021 年的新增扩张或毁林；② 种植年份记的是最近一次重种年份，不一定是最初改种油棕的年份，且在 1989 年左截断（取值为 1989 的像元约占 7.5%，表示 1989 年及以前种下，不能按字面算树龄）；③ 未郁闭和半野生油棕园大多漏检；④ 小农种植园精度较低（种植年份均方根误差 4.89 年，工业园 2.02 年，整体 2.65 年）；⑤ 两个波段分辨率不同，约 5% 的边缘油棕像元没有种植年份值。

## 覆盖范围与时间

- 覆盖范围：全球热带与亚热带油棕种植区（609 个 100×100 公里格网）
- 时间范围：1990-01-01 至 2021-12-31

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| classification | 油棕种植类型分类 | 10 |  |
| planting_year | 估计的种植园建立年份 | 30 |  |

## 能拿来做什么

- 绘制全球油棕种植园的分布与林龄结构
- 结合种植年份评估毁林与欧盟零毁林法案（EUDR）相关风险
- 对比工业种植园与小农种植园的格局差异

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('BIOPAMA/GlobalOilPalm/v1_2');
```

- 数据集编号（Earth Engine ID）：`BIOPAMA/GlobalOilPalm/v1_2`
- 提供方：Biopama Programme、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/BIOPAMA_GlobalOilPalm_v1_2

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：agriculture, biodiversity, biopama, conservation, crop, global, landcover, landuse, landuse-landcover, palm, plantation
- 数据引用：Descals, A., Gaveau, D. L., Wich, S., Szantoi, Z., and Meijaard, E. (2024).
Global mapping of oil palm planting year from 1990 to 2021.
Earth System Science Data, 16(11), 5111-5129.
[doi:10.5194/essd-16-5111-2024](https://doi.org/10.5194/essd-16-5111-2024)

- DOI：10.5194/essd-16-5111-2024

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球油棕种植图 2019（已弃用）](/pages/1dc500dd/)
- [加拿大年度作物种植清单（AAFC）](/pages/ad6873e3/)
- [哥白尼全球土地覆盖 LC100 第 3 集合（100 米）](/pages/ab21afa1/)
- [欧洲 CORINE 土地覆盖 V20](/pages/a9db0306/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
