---
title: "USGS Landsat 4 MSS Collection 2 Tier 1 Raw Scenes"
date: 2026-11-03 12:00:00
permalink: /pages/b007d3bf/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "c2"
  - "global"
  - "l4"
  - "landsat"
  - "lm4"
  - "mss"
  - "radiance"
  - "satellite-imagery"
  - "t1"
  - "tier1"
  - "usgs"
---

# USGS Landsat 4 MSS Collection 2 Tier 1 Raw Scenes

## 数据集简介

Landsat 4 MSS Collection 2 Tier 1 DN values, representing scaled, calibrated at-sensor radiance.

Landsat scenes with the highest available data quality
are placed into Tier 1 and are considered suitable for time-series processing
analysis. Tier 1 includes Level-1 Precision Terrain (L1TP) processed data
that have well-characterized radiometry and are inter-calibrated across the
different Landsat sensors. The georegistration of Tier 1 scenes will be
consistent and within prescribed tolerances [<=12 m root mean square error
(RMSE)]. All Tier 1 Landsat data can be considered consistent and
inter-calibrated (regardless of sensor) across the full collection. See more
information [in the USGS
docs](https://www.usgs.gov/core-science-systems/nli/landsat/landsat-collections).

## 基本信息

- 数据集编号（Earth Engine ID）：`LANDSAT/LM04/C02/T1`
- 数据类型：影像集合（ImageCollection）
- 提供方：USGS、Google Earth Engine
- 时间范围：1982-08-14 至 1992-08-28
- 许可：PDDL-1.0
- 关键词：c2, global, l4, landsat, lm4, mss, radiance, satellite-imagery, t1, tier1, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | Green | 60 | 0.5 - 0.6 &mu;m |
| B2 | Red | 60 | 0.6 - 0.7 &mu;m |
| B3 | Near Infrared 1 | 60 | 0.7 - 0.8 &mu;m |
| B4 | Near Infrared 2 | 30 | 0.8 - 1.1 &mu;m |
| QA_PIXEL | Landsat Collection 2 MSS QA Bitmask  | 30 |  |
| QA_RADSAT | Radiometric saturation QA | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LANDSAT/LM04/C02/T1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LM04_C02_T1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
