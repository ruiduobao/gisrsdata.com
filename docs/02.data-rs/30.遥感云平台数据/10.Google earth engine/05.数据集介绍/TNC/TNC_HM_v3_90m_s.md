---
title: "TNC Global Human Modification v3 (Static Snapshot 90m)"
date: 2026-11-03 12:00:00
permalink: /pages/b32eca78/
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

# TNC Global Human Modification v3 (Static Snapshot 90m)

## 数据集简介

The Global Human Modification v3 dataset measures cumulative human pressures on global
terrestrial ecosystems (excluding Antarctica). It tracks data from 1990 to 2022 and is
intended to help quantify human impact for conservation planning, policy-making, and research.

This is the 2022 static snapshot ("s" series) available at 90 meter resolution.
Because it uses updated satellite and land-cover inputs, it is not recommended for
direct quantitative comparison with the 1990–2020 "c" series.

The modification score per pixel is calculated using the formula:
modification = footprint proportion multiplied by stressor intensity.
The data values are stored as 32-bit floats ranging from 0.0 to 1.0, where
0.0 indicates no detectable human modification and 1.0 represents the maximum modeled modification.

This dataset provides data for eight IUCN-aligned threat categories, plus one combined index.
It was rigorously validated using a spatially balanced sample from the Global Land
Use Emergent Dataset (GLUED). It achieved a root-mean-squared error (RMSE) of 0.178 at 90m.

## 基本信息

- 数据集编号（Earth Engine ID）：`TNC/HM/v3/90m_s`
- 数据类型：影像集合（ImageCollection）
- 提供方：The Nature Conservancy、Google Earth Engine
- 时间范围：2022-01-01 至 2022-12-31
- 空间分辨率：90 米
- 许可：CC-BY-4.0
- 关键词：fragmentation, human-modification, landcover, landscape-gradient, population, stressors, tnc

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| All_threats_combined | All threats combined (overall modification) | 90 |  |
| Agriculture | Agriculture (croplands, forestry) | 90 |  |
| Built_up | Built-Up (residential, commercial, recreation areas) | 90 |  |
| Energy_production_and_mining | Energy production and mining | 90 |  |
| Biological_resource_use | Biological resource use | 90 |  |
| Human_accessibility | Human accessibility (roads, trails, infrastructure) | 90 |  |
| Natural_system_modification | Natural system modification (e.g., dams, water regulation) | 90 |  |
| Pollution | Pollution | 90 |  |
| Transportation_and_service_corridors | Transportation and service corridors | 90 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('TNC/HM/v3/90m_s');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TNC_HM_v3_90m_s
- 数据引用：Theobald, D.M., Oakleaf, J.R., Moncrieff, G., Voigt, M., Kiesecker, J. & Kennedy, C.M. (2025).
Global extent and change in human modification of terrestrial ecosystems from 1990 to 2022.
Scientific Data 12, 489.
[doi:10.1038/s41597-025-04892-2](https://doi.org/10.1038/s41597-025-04892-2)

- DOI：10.1038/s41597-025-04892-2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
