---
title: "MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km"
date: 2026-11-03 12:00:00
permalink: /pages/18647d64/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aerosol"
  - "aod"
  - "aqua"
  - "daily"
  - "global"
  - "maiac"
  - "modis"
  - "nasa"
  - "satellite-imagery"
  - "terra"
  - "usgs"
---

# MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km

## 数据集简介

The MCD19A1 Version 6.1 data product is a Moderate Resolution Imaging
Spectroradiometer (MODIS) Terra and Aqua combined Land Surface Bidirectional
Reflectance Factor (BRF) gridded Level 2 product produced daily at 500 meter
and 1 kilometer resolution. For more information see the
[MAIAC user guide](https://lpdaac.usgs.gov/documents/1500/MCD19_User_Guide_V61.pdf).

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MCD19A1_GRANULES`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-12-21 至 2026-10-29
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：aerosol, aod, aqua, daily, global, maiac, modis, nasa, satellite-imagery, terra, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Sur_refl1 | Surface reflectance at 500m for band 1.  | 1000 |  |
| Sur_refl2 | Surface reflectance at 500m for band 2.  | 1000 |  |
| Sur_refl3 | Surface reflectance at 500m for band 3.  | 1000 |  |
| Sur_refl4 | Surface reflectance at 500m for band 4.  | 1000 |  |
| Sur_refl5 | Surface reflectance at 500m for band 5.  | 1000 |  |
| Sur_refl6 | Surface reflectance at 500m for band 6.  | 1000 |  |
| Sur_refl7 | Surface reflectance at 500m for band 7.  | 1000 |  |
| Sur_refl8 | Surface reflectance at 1km for band 8.  | 1000 |  |
| Sur_refl9 | Surface reflectance at 1km for band 9.  | 1000 |  |
| Sur_refl10 | Surface reflectance at 1km for band 10.  | 1000 |  |
| Sur_refl11 | Surface reflectance at 1km for band 11.  | 1000 |  |
| Sur_refl12 | Surface reflectance at 1km for band 12.  | 1000 |  |
| Sigma_BRFn1 | BRFn uncertainty over time at 1km, for band 1  | 1000 |  |
| Sigma_BRFn2 | BRFn uncertainty over time at 1km, for band 2 | 1000 |  |
| Status_QA | QA bits | 1000 |  |
| cosSZA | Cosine of Solar zenith angle (5 km resolution) | 1000 |  |
| cosVZA | Cosine view zenith angle (5 km resolution) | 1000 |  |
| RelAZ | Relative azimuth angle (5 km resolution) | 1000 |  |
| Scattering_Angle | Scattering angle (5 km resolution) | 1000 |  |
| SAZ | Solar Azimuth Angle (5 km resolution) | 1000 |  |
| VAZ | View Azimuth Angle (5 km resolution) | 1000 |  |
| Glint_Angle | Glint angle (5 km resolution) | 1000 |  |
| Fv | RTLS volumetric kernel (5 km resolution) | 1000 |  |
| Fg | RTLS geometric kernel (5 km resolution) | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MCD19A1_GRANULES');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD19A1_GRANULES
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD19A1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
