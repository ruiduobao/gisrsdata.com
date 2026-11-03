---
title: "USGS Landsat 9 Collection 2 Tier 1 Raw Scenes"
date: 2026-11-03 12:00:00
permalink: /pages/e4bd161a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "c2"
  - "global"
  - "l9"
  - "landsat"
  - "lc9"
  - "oli-tirs"
  - "radiance"
  - "satellite-imagery"
  - "t1"
  - "tier1"
  - "usgs"
---

# USGS Landsat 9 Collection 2 Tier 1 Raw Scenes

## 数据集简介

Landsat 9 Collection 2 Tier 1 DN values, representing scaled, calibrated at-sensor radiance.

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

- 数据集编号（Earth Engine ID）：`LANDSAT/LC09/C02/T1`
- 数据类型：影像集合（ImageCollection）
- 提供方：USGS、Google Earth Engine
- 时间范围：2021-10-31 至 2026-11-02
- 许可：PDDL-1.0
- 关键词：c2, global, l9, landsat, lc9, oli-tirs, radiance, satellite-imagery, t1, tier1, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | Coastal aerosol | 30 | 0.43 - 0.45 &mu;m |
| B2 | Blue | 30 | 0.45 - 0.51 &mu;m |
| B3 | Green | 30 | 0.53 - 0.59 &mu;m |
| B4 | Red | 30 | 0.64 - 0.67 &mu;m |
| B5 | Near infrared | 30 | 0.85 - 0.88 &mu;m |
| B6 | Shortwave infrared 1 | 30 | 1.57 - 1.65 &mu;m |
| B7 | Shortwave infrared 2 | 30 | 2.11 - 2.29 &mu;m |
| B8 | Band 8 Panchromatic | 15 | 0.50 - 0.68 &mu;m |
| B9 | Cirrus | 30 | 1.36 - 1.38 &mu;m |
| B10 | Thermal infrared 1, resampled from 100m to 30m | 30 | 10.60 - 11.19 &mu;m |
| B11 | Thermal infrared 2, resampled from 100m to 30m | 30 | 11.50 - 12.51 &mu;m |
| QA_PIXEL | Landsat Collection 2 OLI/TIRS QA Bitmask  | 30 |  |
| QA_RADSAT | Radiometric saturation QA | 30 |  |
| SAA | Solar Azimuth Angle | 30 |  |
| SZA | Solar Zenith Angle | 30 |  |
| VAA | View Azimuth Angle | 30 |  |
| VZA | View Zenith Angle | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LANDSAT/LC09/C02/T1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC09_C02_T1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
