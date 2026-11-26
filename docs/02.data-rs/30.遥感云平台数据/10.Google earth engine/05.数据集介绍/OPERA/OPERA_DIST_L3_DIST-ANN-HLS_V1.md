---
title: "OPERA 协调 Landsat Sentinel-2 地表扰动年度产品（DIST-ANN-HLS）V1"
date: 2026-11-03 12:00:00
permalink: /pages/79738746/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "disturbance"
  - "forest"
  - "forest-biomass"
  - "geophysical"
  - "landsat-derived"
  - "nasa"
  - "opera"
  - "sentinel2-derived"
  - "vegetation"
---

# OPERA 协调 Landsat Sentinel-2 地表扰动年度产品（DIST-ANN-HLS）V1

英文原名：OPERA Land Surface Disturbance Annual from Harmonized Landsat Sentinel-2 (DIST-ANN-HLS) V1

## 这是什么数据

遥感分析终端用户观测产品（OPERA）协调 Landsat Sentinel-2 地表扰动年度产品（DIST-ANN-HLS）第 1 版，将 DIST-ALERT 数据产品汇总为年度植被扰动数据产品。

DIST-ANN-HLS 产品以 30 米分辨率提供从协调 Landsat-8/9 与 Sentinel-2A/B（HLS）地表反射率数据探测的年度植被扰动指标与分类。扰动包括野火、采伐与清理等突发事件，以及持续或较长期的变化。产品在 21 个栅格层中同时包含植被专属扰动指标（VEG）与通用扰动指标（GEN）。

## 覆盖范围与时间

- 覆盖范围：空间：全球陆地；时间：2023 年至 2025 年（逐年）；分辨率：30 米。
- 时间范围：2023-01-01 至 2025-01-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| VEG-DIST-STATUS | 日历年内植被扰动的状态。 | 30 |  |
| VEG-ANOM-MAX | 年内观测到的最大植被损失异常。 | 30 |  |
| VEG-DIST-DATE | 首次植被扰动探测日，表示为自 2020 年 12 月 31 日以来的天数。 | 30 |  |
| VEG-DIST-DUR | 所报告植被扰动事件的持续时间（天）。 | 30 |  |
| VEG-DIST-CONF | 植被扰动探测的置信度。 | 30 |  |
| VEG-DIST-COUNT | 所报告事件中探测到植被损失的观测计数。 | 30 |  |
| VEG-CONF-PREV | 上一年报告的植被损失警报在本年得到确认。 | 30 |  |
| VEG-CONF-COUNT | 日历年内独立植被扰动事件的计数。 | 30 |  |
| VEG-LAST-DATE | 植被扰动监测的最后观测日，表示为自 2020 年 12 月 31 日以来的天数。 | 30 |  |
| VEG-HIST | 最大异常时刻基线植被覆盖百分比（0–100%，200 = 无扰动）。 | 30 |  |
| VEG-IND-MAX | 估算的最大植被覆盖，扰动区域取最大异常日期的植被覆盖（0–100%）。 | 30 |  |
| VEG-IND-3YR-MIN | 当年与前两年内的最小植被覆盖百分比。 | 30 |  |
| GEN-DIST-STATUS | 日历年内通用光谱扰动的状态。 | 30 |  |
| GEN-ANOM-MAX | 年内观测到的最大通用光谱损失异常。 | 30 |  |
| GEN-DIST-DATE | 首次通用光谱扰动探测日，表示为自 2020 年 12 月 31 日以来的天数。 | 30 |  |
| GEN-DIST-DUR | 所报告通用光谱扰动事件的持续时间（天）。 | 30 |  |
| GEN-DIST-CONF | 通用光谱扰动探测的置信度。 | 30 |  |
| GEN-DIST-COUNT | 所报告事件中探测到通用光谱损失的观测计数。 | 30 |  |
| GEN-CONF-PREV | 上一年报告的通用光谱损失警报在本年得到确认。 | 30 |  |
| GEN-CONF-COUNT | 日历年内独立通用光谱扰动事件的计数。 | 30 |  |
| GEN-LAST-DATE | 通用光谱扰动监测的最后观测日，表示为自 2020 年 12 月 31 日以来的天数。 | 30 |  |

## 能拿来做什么

- 做森林砍伐、野火与土地清理的年度监测。
- 为碳排放与生态评估提供扰动证据。
- 筛选需要实地核查的变化热点。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('OPERA/DIST/L3_DIST-ANN-HLS/V1');
```

- 数据集编号（Earth Engine ID）：`OPERA/DIST/L3_DIST-ANN-HLS/V1`
- 提供方：NASA JPL、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OPERA_DIST_L3_DIST-ANN-HLS_V1
* [DIST Product Suite Website](https://www.jpl.nasa.gov/go/opera/products/dist-product-suite/)
* [OPERA DIST-HLS Product Specification Document](https://lpdaac.usgs.gov/documents/1766/OPERA_DIST_HLS_Product_Specification_V1.pdf)
* [OPERA DIST-HLS Algorithm Theoretical Basis Document](https://lpdaac.usgs.gov/documents/1835/OPERA_DIST_ATBD__V1.pdf)
* [NASA Earthdata Search](https://search.earthdata.nasa.gov/search/granules?p=C2519119034-LPCLOUD)
* [Publication: Rapid monitoring of global land change](https://doi.org/10.1038/s41467-025-64014-9)

## 许可与引用

- 许可：proprietary
- 关键词：disturbance, forest, forest-biomass, geophysical, landsat-derived, nasa, opera, sentinel2-derived, vegetation
- 数据引用：Hansen, M. (2024). OPERA Land Surface Disturbance Annual from Harmonized Landsat
Sentinel-2 product (Version 1) [Dataset]. NASA Land Processes Distributed Active
Archive Center.
[https://doi.org/10.5067/SNWG/OPERA_L3_DIST-ANN-HLS_V1.001](https://doi.org/10.5067/SNWG/OPERA_L3_DIST-ANN-HLS_V1.001)

Pickens, A. H., Hansen, M. C., Song, Z., Poulson, A., Komarova, A., Baggett, A.,
Kerr, T., Mikus, A., Dominguez, C. O., Tyukavina, A., & Lima, A. (2025).
Rapid monitoring of global land change. Nature Communications, 16, 8820.
[https://doi.org/10.1038/s41467-025-64014-9](https://doi.org/10.1038/s41467-025-64014-9)

- DOI：10.5067/SNWG/OPERA_L3_DIST-ANN-HLS_V1.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GHSL：全球住区特征（10 米）2018（P2023A）](/pages/465f5706/)
- [GHSL：全球建成区表面 10 米（P2023A）](/pages/a10e4a06/)
- [GHSL：全球建成区表面 1975–2030（P2023A）](/pages/9724c860/)
- [GHSL：城市化程度 1975–2030 V2-0（P2023A）](/pages/5396cca7/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
