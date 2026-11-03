---
title: "MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km"
date: 2026-11-03 12:00:00
permalink: /pages/d5e48b42/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "evi"
  - "global"
  - "mod13a2"
  - "modis"
  - "nasa"
  - "ndvi"
  - "terra"
  - "usgs"
  - "vegetation"
  - "vegetation-indices"
---

# MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km

## 数据集简介

The MOD13A2 V6.1 product provides two Vegetation Indices (VI): the Normalized
Difference Vegetation Index (NDVI) and the Enhanced Vegetation Index (EVI).
The NDVI is referred to as the continuity index to the existing National
Oceanic and Atmospheric Administration-Advanced Very High Resolution
Radiometer (NOAA-AVHRR) derived NDVI. The EVI has improved sensitivity over
high biomass regions.

The algorithm for this product chooses the best available
pixel value from all the acquisitions from the 16-day period. The criteria
used are low clouds, low view angle, and the highest NDVI/EVI value.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/103/MOD13_User_Guide_V6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/104/MOD13_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MOD13A2)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MOD13A2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-18 至 2026-09-30
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：16-day, evi, global, mod13a2, modis, nasa, ndvi, terra, usgs, vegetation, vegetation-indices

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDVI | 16-day NDVI average | 1000 |  |
| EVI | 16-day EVI average | 1000 |  |
| DetailedQA | VI Quality indicators | 1000 |  |
| sur_refl_b01 | Surface reflectance band 1 (red) | 1000 | 620-670nm |
| sur_refl_b02 | Surface reflectance band 2 (near-infrared) | 1000 | 841-876nm |
| sur_refl_b03 | Surface reflectance band 3 (blue) | 1000 | 459-479nm |
| sur_refl_b07 | Surface reflectance band 7 (mid-infrared) | 1000 | 2105-2155nm |
| ViewZenith | View zenith angle of VI Pixel | 1000 |  |
| SolarZenith | Sun zenith angle of VI pixel | 1000 |  |
| RelativeAzimuth | Relative azimuth angle of VI pixel | 1000 |  |
| DayOfYear | Day of year VI pixel | 1000 |  |
| SummaryQA | Quality reliability of VI pixel | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MOD13A2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD13A2
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD13A2.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
