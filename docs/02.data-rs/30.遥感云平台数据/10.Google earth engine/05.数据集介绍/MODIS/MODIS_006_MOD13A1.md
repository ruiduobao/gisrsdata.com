---
title: "MOD13A1.006 Terra Vegetation Indices 16-Day Global 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/7a44de8e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "evi"
  - "global"
  - "mod13a1"
  - "modis"
  - "nasa"
  - "ndvi"
  - "terra"
  - "usgs"
  - "vegetation"
  - "vegetation-indices"
---

# MOD13A1.006 Terra Vegetation Indices 16-Day Global 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MOD13A1 V6 product provides a Vegetation Index (VI)
value at a per pixel basis. There are two primary vegetation layers.
The first is the Normalized Difference Vegetation Index (NDVI)
which is referred to as the continuity index to the existing National
Oceanic and Atmospheric Administration-Advanced Very High Resolution
Radiometer (NOAA-AVHRR) derived NDVI. The second vegetation layer
is the Enhanced Vegetation Index (EVI) that minimizes canopy background
variations and maintains sensitivity over dense vegetation conditions.
The EVI also uses the blue band to remove residual atmosphere contamination
caused by smoke and sub-pixel thin cloud clouds. The MODIS NDVI
and EVI products are computed from atmospherically corrected bi-directional
surface reflectances that have been masked for water, clouds, heavy
aerosols, and cloud shadows.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/103/MOD13_User_Guide_V6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/104/MOD13_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD13A1)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MOD13A1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-18 至 2023-02-02
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：16-day, evi, global, mod13a1, modis, nasa, ndvi, terra, usgs, vegetation, vegetation-indices

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDVI | Normalized Difference Vegetation Index | 500 |  |
| EVI | Enhanced Vegetation Index | 500 |  |
| DetailedQA | VI quality indicators | 500 |  |
| sur_refl_b01 | Red surface reflectance | 500 | 645nm |
| sur_refl_b02 | NIR surface reflectance | 500 | 858nm |
| sur_refl_b03 | Blue surface reflectance | 500 | 469nm |
| sur_refl_b07 | MIR surface reflectance | 500 | 2130nm/2105 - 2155nm |
| ViewZenith | View zenith angle | 500 |  |
| SolarZenith | Solar zenith angle | 500 |  |
| RelativeAzimuth | Relative azimuth angle | 500 |  |
| DayOfYear | Julian day of year | 500 |  |
| SummaryQA | Quality reliability of VI pixel | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/006/MOD13A1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD13A1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD13A1.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
