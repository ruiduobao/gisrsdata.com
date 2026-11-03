---
title: "MCD19A2.006: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/2dcc3bae/
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

# MCD19A2.006: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MCD19A2 V6 data product is a MODIS Terra and Aqua combined Multi-angle
Implementation of Atmospheric Correction (MAIAC) Land Aerosol Optical Depth (AOD) gridded
Level 2 product produced daily at 1 km resolution. For more information
see the [MAIAC user guide](https://lpdaac.usgs.gov/documents/110/MCD19_User_Guide_V6.pdf).

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/110/MCD19_User_Guide_V6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/111/MCD19_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MCD19A2)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MCD19A2_GRANULES`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-26 至 2023-02-17
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：aerosol, aod, aqua, atmosphere, daily, global, maiac, mcd19a2, modis, nasa, terra, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Optical_Depth_047 | Blue band (0.47 &mu;m) aerosol optical depth over land | 1000 |  |
| Optical_Depth_055 | Green band (0.55 &mu;m) aerosol optical depth over land | 1000 |  |
| AOD_Uncertainty | AOD uncertainty based on blue-band surface brightness (reflectance) | 1000 |  |
| FineModeFraction | Fine mode fraction for ocean | 1000 |  |
| Column_WV | Column water vapor over land | 1000 |  |
| AOD_QA | AOD QA | 1000 |  |
| AOD_MODEL | AOD model used in retrieval | 1000 |  |
| Injection_Height | Smoke injection height | 1000 |  |
| cosSZA | Cosine of solar zenith angle (5 km resolution) | 1000 |  |
| cosVZA | Cosine view zenith angle (5 km resolution) | 1000 |  |
| RelAZ | Relative azimuth angle (5 km resolution) | 1000 |  |
| Scattering_Angle | Scattering angle (5 km resolution) | 1000 |  |
| Glint_Angle | Glint angle (5 km resolution) | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/006/MCD19A2_GRANULES');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD19A2_GRANULES
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD19A2.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
