---
title: "MCD12Q2.006 Land Cover Dynamics Yearly Global 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/d42cf828/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "evi"
  - "global"
  - "landuse-landcover"
  - "modis"
  - "onset-greenness"
  - "phenology"
  - "usgs"
  - "yearly"
---

# MCD12Q2.006 Land Cover Dynamics Yearly Global 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MCD12Q2 V6 Land Cover Dynamics product (informally
called the MODIS Global Vegetation Phenology product) provides
estimates of the timing of vegetation phenology at global scales.
Additionally, it provides information related to the range and
summation of the enhanced vegetation index (EVI) computed from
MODIS surface reflectance data at each pixel. It identifies the
onset of greenness, greenup midpoint, maturity, peak greenness,
senescence, greendown midpoint, dormancy, EVI2 minimum, EVI2 amplitude,
integrated EVI2 over a vegetation cycle, as well as overall and phenology
metric-specific quality information.

The MCD12Q2 Version 6 data product is derived from time series of the
2-band Enhanced Vegetation Index (EVI2) calculated from MODIS Nadir
Bidirectional Reflectance Distribution Function (BRDF)-Adjusted Reflectance
(NBAR). Vegetation phenology metrics are identified for up to two detected
growing cycles per year. For pixels with more than two valid vegetation
cycles, the data represent the two cycles with the largest NBAR-EVI2
amplitudes.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MCD12Q2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2001-01-01 至 2019-01-01
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：evi, global, landuse-landcover, modis, onset-greenness, phenology, usgs, yearly

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NumCycles | Total number of valid vegetation cycles with peak in product year | 500 |  |
| Greenup_1 | Date when EVI2 first crossed 15% of the segment EVI2 amplitude, cycle 1. Days since Jan 1, 1970. | 500 |  |
| Greenup_2 | Date when EVI2 first crossed 15% of the segment EVI2 amplitude, cycle 2. Days since Jan 1, 1970. | 500 |  |
| MidGreenup_1 | Date when EVI2 first crossed 50% of the segment EVI2 amplitude, cycle 1. Days since Jan 1, 1970. | 500 |  |
| MidGreenup_2 | Date when EVI2 first crossed 50% of the segment EVI2 amplitude, cycle 2. Days since Jan 1, 1970. | 500 |  |
| Peak_1 | Date when EVI2 reached the segment maximum, cycle 1. Days since Jan 1, 1970. | 500 |  |
| Peak_2 | Date when EVI2 reached the segment maximum, cycle 2. Days since Jan 1, 1970. | 500 |  |
| Maturity_1 | Date when EVI2 first crossed 90% of the segment EVI2 amplitude, cycle 1. Days since Jan 1, 1970. | 500 |  |
| Maturity_2 | Date when EVI2 first crossed 90% of the segment EVI2 amplitude, cycle 2. Days since Jan 1, 1970. | 500 |  |
| MidGreendown_1 | Date when EVI2 last crossed 50% of the segment EVI2 amplitude, cycle 1. Days since Jan 1, 1970. | 500 |  |
| MidGreendown_2 | Date when EVI2 last crossed 50% of the segment EVI2 amplitude, cycle 2. Days since Jan 1, 1970. | 500 |  |
| Senescence_1 | Date when EVI2 last crossed 90% of the segment EVI2 amplitude, cycle 1. Days since Jan 1, 1970. | 500 |  |
| Senescence_2 | Date when EVI2 last crossed 90% of the segment EVI2 amplitude, cycle 2. Days since Jan 1, 1970. | 500 |  |
| Dormancy_1 | Date when EVI2 last crossed 15% of the segment EVI2 amplitude, cycle 1. Days since Jan 1, 1970. | 500 |  |
| Dormancy_2 | Date when EVI2 last crossed 15% of the segment EVI2 amplitude, cycle 2. Days since Jan 1, 1970. | 500 |  |
| EVI_Minimum_1 | Segment minimum EVI2 value, cycle 1 | 500 |  |
| EVI_Minimum_2 | Segment minimum EVI2 value, cycle 2 | 500 |  |
| EVI_Amplitude_1 | Segment maximum - minimum EVI2, cycle 1 | 500 |  |
| EVI_Amplitude_2 | Segment maximum - minimum EVI2, cycle 2 | 500 |  |
| EVI_Area_1 | Sum of daily interpolated EVI2 from Greenup to Dormancy, cycle 1 | 500 |  |
| EVI_Area_2 | Sum of daily interpolated EVI2 from Greenup to Dormancy, cycle 2 | 500 |  |
| QA_Overall_1 | QA code for entire segment, cycle 1 | 500 |  |
| QA_Overall_2 | QA code for entire segment, cycle 2 | 500 |  |
| QA_Detailed_1 | Bit-packed, SDS-specific QA codes, cycle 1 | 500 |  |
| QA_Detailed_2 | Bit-packed, SDS-specific QA codes, cycle 2 | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/006/MCD12Q2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD12Q2
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD12Q2.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
