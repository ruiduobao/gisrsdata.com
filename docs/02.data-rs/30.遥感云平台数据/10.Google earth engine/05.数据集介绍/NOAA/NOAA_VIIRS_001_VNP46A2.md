---
title: "VNP46A2: VIIRS Lunar Gap-Filled BRDF Nighttime Lights Daily L3 Global 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/877e12fd/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "brdf"
  - "daily"
  - "nasa"
  - "nighttime"
  - "noaa"
  - "population"
  - "viirs"
---

# VNP46A2: VIIRS Lunar Gap-Filled BRDF Nighttime Lights Daily L3 Global 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The Suomi National Polar-orbiting Partnership (SNPP) Visible Infrared
Imaging Radiometer Suite (VIIRS) supports a Day-Night Band (DNB) sensor
that provides global daily measurements of nocturnal visible and
near-infrared (NIR) light that are suitable for Earth system science and
applications. The VIIRS DNB's ultra-sensitivity in lowlight conditions
enables us to generate a new set of science-quality nighttime products that
manifest substantial improvements in sensor resolution and calibration when
compared to the previous era of Defense Meteorological Satellite
Program/Operational Linescan System's (DMSP/OLS) nighttime lights image
products.

VNP46A2 dataset is a daily moonlight- and atmosphere-corrected Nighttime
Lights (NTL) product using the Bidirectional Reflectance Distribution
Function (BRDF).

Documentation:

* [User's Guide](https://ladsweb.modaps.eosdis.nasa.gov/api/v2/content/archives/Document%20Archive/Science%20Data%20Product%20Documentation/VIIRS_Black_Marble_UG_v1.3_Sep_2022.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://ladsweb.modaps.eosdis.nasa.gov/api/v2/content/archives/Document%20Archive/Science%20Data%20Product%20Documentation/Product%20Generation%20Algorithms/VIIRS_Black_Marble_ATBD_v1.1_July_2020.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/missions-and-measurements/products/VNP46A2/)

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/001/VNP46A2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LAADS DAAC、Google Earth Engine
- 时间范围：2012-01-19 至 2024-12-26
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：brdf, daily, nasa, nighttime, noaa, population, viirs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| DNB_BRDF_Corrected_NTL | BRDF corrected DNB NTL | 500 |  |
| Gap_Filled_DNB_BRDF_Corrected_NTL | Gap Filled BRDF corrected DNB NTL | 500 |  |
| DNB_Lunar_Irradiance | DNB Lunar Irradiance | 500 |  |
| Latest_High_Quality_Retrieval | Latest high quality BRDF corrected DNB radiance retrieval | 500 |  |
| Mandatory_Quality_Flag | Mandatory quality flag | 500 |  |
| Snow_Flag | Flag for snow cover | 500 |  |
| QF_Cloud_Mask | Quality flag for cloud mask | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP46A2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP46A2
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
- DOI：10.5067/VIIRS/VNP46A2.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
