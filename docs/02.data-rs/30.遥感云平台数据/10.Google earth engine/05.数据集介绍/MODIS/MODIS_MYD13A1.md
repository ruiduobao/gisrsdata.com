---
title: "MYD13A1.005 Vegetation Indices 16-Day L3 Global 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/35908fdd/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "aqua"
  - "evi"
  - "global"
  - "modis"
  - "myd13a1"
  - "ndvi"
  - "vegetation"
  - "vegetation-indices"
---

# MYD13A1.005 Vegetation Indices 16-Day L3 Global 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

Global MODIS vegetation indices are designed to
provide consistent spatial and temporal comparisons of vegetation conditions.
Blue, red, and near-infrared reflectances, centered at 469-nanometers,
645-nanometers, and 858-nanometers, respectively, are used to determine the
MODIS daily vegetation indices.

The MODIS Normalized Difference Vegetation Index (NDVI) complements
NOAA's Advanced Very High Resolution Radiometer (AVHRR) NDVI products
provide continuity for time series historical applications. MODIS also
includes a new Enhanced Vegetation Index (EVI) that minimizes canopy
background variations and maintains sensitivity over dense vegetation
conditions. The EVI also uses the blue band to remove residual atmosphere
contamination caused by smoke and sub-pixel thin cloud clouds. The MODIS
NDVI and EVI products are computed from atmospherically corrected
bi-directional surface reflectances that have been masked for water, clouds,
heavy aerosols, and cloud shadows.

Global MYD13A1 data are provided every 16 days at 500-meter spatial
resolution as a gridded level-3 product in the Sinusoidal projection.
Vegetation indices are used for global monitoring of vegetation conditions
and are used in products displaying land cover and land cover changes. These
data may be used as input for modeling global biogeochemical and hydrologic
processes and global and regional climate. These data also may be used for
characterizing land surface biophysical properties and processes, including
primary production and land cover conversion.

Version-5 MODIS Vegetation Indices products have attained Validation Stage
3.

Vegetation Indices production is phased between Terra and Aqua
acquisitions, with Terra beginning on Day 001 and Aqua beginning on Day
008.

Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data) for information on citing LP DAAC datasets.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/MYD13A1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2002-07-04 至 2017-03-14
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：16-day, aqua, evi, global, modis, myd13a1, ndvi, vegetation, vegetation-indices

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
var dataset = ee.ImageCollection('MODIS/MYD13A1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD13A1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
