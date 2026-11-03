---
title: "USGS Landsat 7 Collection 2 Tier 1 Raw Scenes"
date: 2026-11-03 12:00:00
permalink: /pages/809111b6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "c2"
  - "etm"
  - "global"
  - "l7"
  - "landsat"
  - "le7"
  - "radiance"
  - "satellite-imagery"
  - "t1"
  - "tier1"
  - "usgs"
---

# USGS Landsat 7 Collection 2 Tier 1 Raw Scenes

## 数据集简介

Landsat 7 Collection 2 Tier 1 DN values, representing scaled, calibrated at-sensor radiance.

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

Note that [Landsat 7's orbit has been drifting to an earlier acquisition time since
2017](https://www.sciencedirect.com/science/article/pii/S2666017221000134?via%3Dihub).

## 基本信息

- 数据集编号（Earth Engine ID）：`LANDSAT/LE07/C02/T1`
- 数据类型：影像集合（ImageCollection）
- 提供方：USGS、Google Earth Engine
- 时间范围：1999-05-28 至 2024-01-19
- 许可：PDDL-1.0
- 关键词：c2, etm, global, l7, landsat, le7, radiance, satellite-imagery, t1, tier1, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | Blue | 30 | 0.45 - 0.52 &mu;m |
| B2 | Green | 30 | 0.52 - 0.60 &mu;m |
| B3 | Red | 30 | 0.63 - 0.69 &mu;m |
| B4 | Near infrared | 30 | 0.77 - 0.90 &mu;m |
| B5 | Shortwave infrared 1 | 30 | 1.55 - 1.75 &mu;m |
| B6_VCID_1 | Low-gain Thermal Infrared 1. This band has expanded dynamic range and lower radiometric resolution (sensitivity), with less saturation at high Digital Number (DN) values. Resampled from 60m to 30m.  | 60 | 10.40 - 12.50 &mu;m |
| B6_VCID_2 | High-gain Thermal Infrared 1. This band has higher radiometric resolution (sensitivity), although it has a more restricted dynamic range. Resampled from 60m to 30m.  | 60 | 10.40 - 12.50 &mu;m |
| B7 | Shortwave infrared 2 | 30 | 2.08 - 2.35 &mu;m |
| B8 | Panchromatic | 15 | 0.52 - 0.90 &mu;m |
| QA_PIXEL | Landsat Collection 2 TM/ETM QA Bitmask  | 30 |  |
| QA_RADSAT | Radiometric saturation QA | 30 |  |
| SAA | Solar Azimuth Angle | 30 |  |
| SZA | Solar Zenith Angle | 30 |  |
| VAA | View Azimuth Angle | 30 |  |
| VZA | View Zenith Angle | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LANDSAT/LE07/C02/T1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LE07_C02_T1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
