---
title: "MCD19A2.061: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km"
date: 2026-11-03 12:00:00
permalink: /pages/93a4fc40/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aerosol"
  - "aod"
  - "aqua"
  - "atmosphere"
  - "daily"
  - "global"
  - "maiac"
  - "mcd19a2"
  - "modis"
  - "nasa"
  - "terra"
  - "usgs"
---

# MCD19A2.061: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km

## 数据集简介

The MCD19A2 V6.1 data product is a MODIS Terra and Aqua combined Multi-angle
Implementation of Atmospheric Correction (MAIAC) Land Aerosol Optical Depth
(AOD) gridded Level 2 product produced daily at 1 km resolution. For more
information see the [MAIAC user guide](https://lpdaac.usgs.gov/documents/1500/MCD19_User_Guide_V61.pdf).

NOTE: This product has been released with the caveat that the reprocessing
for the full mission is expected to continue through summer 2023.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MCD19A2_GRANULES`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-24 至 2026-10-31
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：aerosol, aod, aqua, atmosphere, daily, global, maiac, mcd19a2, modis, nasa, terra, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Optical_Depth_047 | Aerosol optical depth over land retrieved in the MODIS Blue band (0.47 &mu;m). AOD is not received at high altitude (greater than 4.2 km) except when smoke or dust is detected; rather, we report a static value of 0.02 used for atmospheric correction.  | 1000 |  |
| Optical_Depth_055 | Aerosol optical depth over land retrieved in the MODIS Green band (0.55 &mu;m).  | 1000 |  |
| AOD_Uncertainty | AOD uncertainty based on blue-band surface brightness (reflectance)  | 1000 |  |
| FineModeFraction | Fine mode fraction for ocean and large inland lakes | 1000 |  |
| Column_WV | Column water vapor over land, retrieved from MODIS near-IR bands at 0.94 &mu;m. When reported for cloudy pixels, it represents water vapor above the cloud.  | 1000 |  |
| AOD_QA | AOD QA | 1000 |  |
| Injection_Height | Smoke injection height | 1000 |  |
| AngstromExp_470-780 | Angstrom exponent 470-780nm over the ocean | 1000 |  |
| cosSZA | Cosine of solar zenith angle (5 km resolution) | 1000 |  |
| cosVZA | Cosine view zenith angle (5 km resolution) | 1000 |  |
| RelAZ | Relative azimuth angle (5 km resolution) | 1000 |  |
| Scattering_Angle | Scattering angle (5 km resolution) | 1000 |  |
| Glint_Angle | Glint angle (5 km resolution) | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MCD19A2_GRANULES');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD19A2_GRANULES
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD19A2.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
