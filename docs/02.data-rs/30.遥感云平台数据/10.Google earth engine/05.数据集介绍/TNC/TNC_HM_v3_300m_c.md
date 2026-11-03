---
title: "TNC Global Human Modification v3 (Change-Consistent 300m)"
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

# TNC Global Human Modification v3 (Change-Consistent 300m)

## 数据集简介

The Global Human Modification v3 dataset measures cumulative human pressures on
global terrestrial ecosystems (excluding Antarctica). It tracks data from 1990 to 2022 and is
intended to help quantify human impact for conservation planning, policy-making, and research.
This dataset is the "Change-Consistent" Series ("c" series) covering the years 1990, 1995, 2000,
2005, 2010, 2015, and 2020 at a 300-meter resolution. This series uses consistent input data
to allow for valid temporal change analysis across these years. The modification score per pixel
is calculated using modification = footprint proportion * stressor intensity. The values are
Float32 ranging from 0.0 to 1.0.

## 基本信息

- 数据集编号（Earth Engine ID）：`TNC/HM/v3/300m_c`
- 数据类型：影像集合（ImageCollection）
- 提供方：The Nature Conservancy、Google Earth Engine
- 时间范围：1990-01-01 至 2020-12-31
- 空间分辨率：300 米
- 许可：CC-BY-4.0
- 关键词：fragmentation, human-modification, landcover, landscape-gradient, population, stressors, tnc

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| All_threats_combined | All threats combined | 300 |  |
| Agriculture | Agriculture | 300 |  |
| Built_up | Built up or urban areas | 300 |  |
| Energy_production_and_mining | Energy production and mining | 300 |  |
| Biological_resource_use | Biological resource use | 300 |  |
| Human_accessibility | Human accessibility | 300 |  |
| Natural_system_modification | Natural system modification | 300 |  |
| Pollution | Pollution | 300 |  |
| Transportation_and_service_corridors | Transportation and service corridors | 300 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('TNC/HM/v3/300m_c');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TNC_HM_v3_300m_c
- 数据引用：Theobald, D. M., Oakleaf, J. R., Moncrieff, G., Voigt, M., Kiesecker, J., & Kennedy, C. M. (2025).
Global extent and change in human modification of terrestrial ecosystems from 1990 to 2022.
Scientific Data, 12, 489. [doi:10.1038/s41597-025-04892-2](https://doi.org/10.1038/s41597-025-04892-2)

- DOI：10.1038/s41597-025-04892-2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
