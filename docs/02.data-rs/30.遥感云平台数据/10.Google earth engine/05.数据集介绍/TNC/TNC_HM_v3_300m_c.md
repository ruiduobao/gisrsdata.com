---
title: "TNC 全球人类改造 v3（变化一致 300 米）"
date: 2026-11-03 12:00:00
permalink: /pages/17c59e77/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "fragmentation"
  - "human-modification"
  - "landcover"
  - "landscape-gradient"
  - "population"
  - "stressors"
  - "tnc"
---

# TNC 全球人类改造 v3（变化一致 300 米）

英文原名：TNC Global Human Modification v3 (Change-Consistent 300m)

## 这是什么数据

全球人类改造 v3 数据集测量全球陆地生态系统（不含南极洲）累积的人类压力。它跟踪 1990 至 2022 年的数据，旨在帮助为保护规划、政策制定与研究量化人类影响。本数据集是「变化一致」系列（「c」系列），覆盖 1990、1995、2000、2005、2010、2015 与 2020 年，分辨率 300 米。此系列使用一致的输入数据，以支持这些年份间有效的时序变化分析。每像元的改造分数按 改造 = 足迹比例 × 压力源强度 计算。值为 Float32，范围 0.0 到 1.0。

## 覆盖范围与时间

- 覆盖范围：空间：全球陆地（不含南极洲）；时间：1990 年至 2020 年（7 个年份）；分辨率：300 米。
- 时间范围：1990-01-01 至 2020-12-31

## 分辨率与规格

- 空间分辨率：约 300 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| All_threats_combined | 所有威胁合并 | 300 |  |
| Agriculture | 农业 | 300 |  |
| Built_up | 建成或城市区域 | 300 |  |
| Energy_production_and_mining | 能源生产与采矿 | 300 |  |
| Biological_resource_use | 生物资源利用 | 300 |  |
| Human_accessibility | 人类可达性 | 300 |  |
| Natural_system_modification | 自然系统改造 | 300 |  |
| Pollution | 污染 | 300 |  |
| Transportation_and_service_corridors | 交通与服务走廊 | 300 |  |

## 能拿来做什么

- 量化人类对陆地生态系统的压力，支撑保护规划。
- 分析 1990 年以来人类改造的变化趋势。
- 为政策制定与生态研究提供改造指数。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('TNC/HM/v3/300m_c');
```

- 数据集编号（Earth Engine ID）：`TNC/HM/v3/300m_c`
- 提供方：The Nature Conservancy、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TNC_HM_v3_300m_c

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：fragmentation, human-modification, landcover, landscape-gradient, population, stressors, tnc
- 数据引用：Theobald, D. M., Oakleaf, J. R., Moncrieff, G., Voigt, M., Kiesecker, J., & Kennedy, C. M. (2025).
Global extent and change in human modification of terrestrial ecosystems from 1990 to 2022.
Scientific Data, 12, 489. [doi:10.1038/s41597-025-04892-2](https://doi.org/10.1038/s41597-025-04892-2)

- DOI：10.1038/s41597-025-04892-2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [TNC Global Human Modification v3 (Static Snapshot 90m)](/pages/b32eca78/)
- [CSP 全球人类改造指数（gHM）](/pages/1227f44f/)
- [Dynamic World V1（动态世界）](/pages/a78539ca/)
- [ESA WorldCereal 10 米 v100](/pages/76b102d2/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
