---
title: "USGS Landsat 2 MSS Collection 2 Tier 2 Raw Scenes"
date: 2026-11-03 12:00:00
permalink: /pages/07401e28/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "c2"
  - "global"
  - "l2"
  - "landsat"
  - "lm2"
  - "mss"
  - "radiance"
  - "satellite-imagery"
  - "t2"
  - "tier2"
  - "usgs"
---

# USGS Landsat 2 MSS Collection 2 Tier 2 Raw Scenes

## 数据集简介

Landsat 2 MSS Collection 2 Tier 2 DN values, representing scaled, calibrated at-sensor radiance.
Scenes not meeting Tier 1 criteria during
processing are assigned to Tier 2. This includes Systematic terrain (L1GT) and
Systematic (L1GS) processed scenes, as well as any L1TP scenes that do not meet
the Tier 1 specifications due to significant cloud cover, insufficient ground
control, and other factors. Users interested in Tier 2 scenes can analyze the
RMSE and other properties to determine the suitability for use in individual
applications and studies. See more information [in the USGS
docs](https://www.usgs.gov/core-science-systems/nli/landsat/landsat-collections).

## 基本信息

- 数据集编号（Earth Engine ID）：`LANDSAT/LM02/C02/T2`
- 数据类型：影像集合（ImageCollection）
- 提供方：USGS、Google Earth Engine
- 时间范围：1975-01-24 至 1982-03-12
- 许可：PDDL-1.0
- 关键词：c2, global, l2, landsat, lm2, mss, radiance, satellite-imagery, t2, tier2, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B4 | Green | 60 | 0.5 - 0.6 &mu;m |
| B5 | Red | 60 | 0.6 - 0.7 &mu;m |
| B6 | Near Infrared 1 | 60 | 0.7 - 0.8 &mu;m |
| B7 | Near Infrared 2 | 30 | 0.8 - 1.1 &mu;m |
| QA_PIXEL | Landsat Collection 2 MSS QA Bitmask  | 30 |  |
| QA_RADSAT | Radiometric saturation QA | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LANDSAT/LM02/C02/T2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LM02_C02_T2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
