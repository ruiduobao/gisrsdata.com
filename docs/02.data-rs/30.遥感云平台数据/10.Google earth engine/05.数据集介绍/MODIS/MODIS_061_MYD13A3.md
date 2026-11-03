---
title: "MYD13A3.061 Aqua Vegetation Indices Monthly L3 Global 1 km SIN Grid"
date: 2026-11-03 12:00:00
permalink: /pages/ea60f587/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aqua"
  - "evi"
  - "global"
  - "modis"
  - "monthly"
  - "nasa"
  - "ndvi"
  - "usgs"
  - "vegetation"
  - "vegetation-indices"
---

# MYD13A3.061 Aqua Vegetation Indices Monthly L3 Global 1 km SIN Grid

## 数据集简介

The Aqua Moderate Resolution Imaging Spectroradiometer (MODIS) Vegetation
Indices (MYD13A3) Version 6.1 data are provided monthly at 1 kilometer (km)
spatial resolution as a gridded Level 3 product in the sinusoidal
projection. In generating this monthly product, the algorithm ingests all
the MYD13A2 products that overlap the month and employs a weighted temporal
average.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/621/MOD13_User_Guide_V61.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/104/MOD13_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MYD13A3)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MYD13A3`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2002-07-01 至 2026-09-01
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：aqua, evi, global, modis, monthly, nasa, ndvi, usgs, vegetation, vegetation-indices

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDVI | Monthly NDVI average | 1000 |  |
| EVI | Monthly EVI average | 1000 |  |
| DetailedQA | VI Quality indicators | 1000 |  |
| sur_refl_b01 | Surface reflectance band 1 (red) | 1000 | 620-670nm |
| sur_refl_b02 | Surface reflectance band 2 (near-infrared) | 1000 | 841-876nm |
| sur_refl_b03 | Surface reflectance band 3 (blue) | 1000 | 459-479nm |
| sur_refl_b07 | Surface reflectance band 7 (mid-infrared) | 1000 | 2105-2155nm |
| ViewZenith | View zenith angle of VI Pixel | 1000 |  |
| SolarZenith | Sun zenith angle of VI pixel | 1000 |  |
| RelativeAzimuth | Relative azimuth angle of VI pixel | 1000 |  |
| SummaryQA | Quality reliability of VI pixel | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MYD13A3');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MYD13A3
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD13A3.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
