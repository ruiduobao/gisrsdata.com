---
title: "OPERA Radiometric Terrain-Corrected SAR Backscatter from Sentinel-1 Static Layers V1.0"
date: 2026-11-03 12:00:00
permalink: /pages/d7f26f8f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "jpl"
  - "nasa"
  - "opera"
  - "sar"
  - "satellite-imagery"
  - "sentinel1-derived"
---

# OPERA Radiometric Terrain-Corrected SAR Backscatter from Sentinel-1 Static Layers V1.0

## 数据集简介

This product contains static radar geometry layers associated with the
[OPERA Radiometric Terrain Corrected SAR Backscatter from Sentinel-1 dataset](OPERA_RTC_L2_V1_S1).

Due to the S1 mission’s narrow orbital tube, radar-geometry layers such as
incidence angle, local incidence angle, number of looks, and RTC Area
Normalization Factor (ANF) vary slightly over time for each position on the
ground, and therefore are considered static. These static layers are
provided separately from the OPERA RTC-S1 product, as they are produced
only once or a limited number of times, to account for changes in the DEM,
in the S1 orbit, or in the static-layers generation algorithm.

## 基本信息

- 数据集编号（Earth Engine ID）：`OPERA/RTC/L2_V1/S1_STATIC`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA JPL、Google Earth Engine
- 时间范围：2014-04-03 至 2014-04-04
- 空间分辨率：30 米
- 许可：CC0-1.0
- 关键词：jpl, nasa, opera, sar, satellite-imagery, sentinel1-derived

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| local_incidence_angle | Angle between LOS vector and terrain normal vector at the target provided in the same geographic grid as the geocoded imagery.  | 30 |  |
| incidence_angle | Angle between LOS vector and the ellipsoid normal at the target provided in the same geographic grid as the geocoded imagery.  | 30 |  |
| number_of_looks | The number of radar samples used to compute each RTC-S1 imagery pixel, provided in the same geographic grid as the RTC-S1 product imagery.  | 30 |  |
| rtc_anf_gamma0_to_beta0 | The factors to normalize the gamma0 backscatter to beta0, provided in the same grid as the corresponding RTC-S1 imagery.  | 30 |  |
| rtc_anf_gamma0_to_sigma0 | The factors to normalize the gamma0 backscatter to sigma0, provided in the same grid as the associated RTC-S1 imagery.  | 30 |  |
| mask | Mask layer containing valid/invalid, layover, and shadow classification computed using the RTC-S1 burst orbit, provided over the same geographic grid as the associated geocoded imagery.  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('OPERA/RTC/L2_V1/S1_STATIC');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OPERA_RTC_L2_V1_S1_STATIC
- 数据引用：NASA/JPL/OPERA. (2023). OPERA Radiometric Terrain Corrected SAR Backscatter
from Sentinel-1 Static Layers validated product (Version 1) [Data set].
NASA Alaska Satellite Facility Distributed Active Archive Center.
[doi:10.5067/SNWG/OPERA_L2_RTC-S1-STATIC_V1](https://doi.org/10.5067/SNWG/OPERA_L2_RTC-S1-STATIC_V1)

- DOI：10.5067/SNWG/OPERA_L2_RTC-S1-STATIC_V1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
