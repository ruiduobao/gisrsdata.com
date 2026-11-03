---
title: "MOD13Q1.005 Vegetation Indices 16-Day Global 250m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/76db273a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "evi"
  - "global"
  - "mod13q1"
  - "modis"
  - "ndvi"
  - "terra"
  - "vegetation"
  - "vegetation-indices"
---

# MOD13Q1.005 Vegetation Indices 16-Day Global 250m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MODIS Normalized Difference Vegetation Index
(NDVI) complements NOAA's Advanced Very High Resolution Radiometer (AVHRR) NDVI
products and provides continuity for time series historical applications. MODIS
also includes a new Enhanced Vegetation Index (EVI) that minimizes canopy
background variations and maintains sensitivity over dense vegetation
conditions. The EVI also uses the blue band to remove residual atmosphere
contamination caused by smoke and sub-pixel thin cloud clouds. The MODIS NDVI
and EVI products are computed from atmospherically corrected bi-directional
surface reflectances that have been masked for water, clouds, heavy aerosols,
and cloud shadows.

MOD13AQ1 is comprised of the following layers:

- NDVI: Normalized Difference Vegetation Index, Scale 0.0001
- EVI: Enhanced Vegetation Index, Scale 0.0001
- DetailedQA: VI Quality, see MOD13Q1 VI Quality
- sur_refl_b01: Red surface reflectance, scale 0.0001
- sur_refl_b02: NIR surface reflectance, scale 0.0001
- sur_refl_b03: Blue surface reflectance, scale 0.0001
- sur_refl_b07: MIR surface reflectance, scale 0.0001
- ViewZenith: View zenith angle, scale 0.01
- SolarZenith: Solar zenith angle, scale 0.01
- RelativeAzimuth: Relative azimuth angle, scale 0.1
- DayOfYear: Julian day of year
- SummaryQA: Pixel reliability summary QA
   - -1 Fill/No data: Not processed
   - 0 Good data: Use with confidence
   - 1 Marginal data: Useful but look at detailed QA for more information
   - 2 Snow/ice: Pixel covered with snow/ice
   - 3: Cloudy: Pixel is cloudy

MOD13Q1 IV Quality

- Bits 0-1: MODLAND_QA
   - 00 (0): VI produced, good quality
   - 01 (1): VI produced, check other QA
   - 10 (2): Pixel produced, probably cloudy
   - 11 (3): Pixel not produced due to other reason (not clouds)
- Bits 2-5: VI Usefulness
   - 0000 (0): Highest quality
   - 0001 (1): Lower quality
   - 0010 (2): Decreasing quality
   - 0100 (4): Decreasing quality
   - 1000 (8): Decreasing quality
   - 1001 (9): Decreasing quality
   - 1010 (10): Decreasing quality
   - 1100 (12): Lowest quality
   - 1101 (13): Quality so low that it is not useful
   - 1110 (14): L1B data faulty
   - 1111 (15): Not useful for any other reason/not processed
- Bits 6-7: Aerosol quantity
   - 00 (0): Climatology
   - 01 (1): Low
   - 10 (2): Average
   - 11 (3): High
- Bit 8: Adjacent cloud detected
   - 0: No
   - 1: Yes
- Bit 9: Atmosphere BRDF correction performed
   - 0: No
   - 1: Yes
- Bit 10: Mixed Clouds
    - 0: No
    - 1: Yes
- Bits 11-13: Land/Water flag
   - 000 (0): Shallow ocean
   - 001 (1): Land
   - 010 (2): Ocean coastlines and lake shorelines
   - 011 (3): Shallow inland water
   - 100 (4): Ephemeral water
   - 101 (5): Deep inland water
   - 110 (6): Moderate or continental ocean
   - 111 (7): Deep ocean
- Bit 14: Possible snow/ice
   - 0: No
   - 1: Yes
- Bit 15: Possible shadow
   - 0: No
   - 1: Yes

Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data) for information on citing LP DAAC datasets.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/MOD13Q1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-18 至 2017-03-06
- 空间分辨率：250 米
- 许可：proprietary
- 关键词：16-day, evi, global, mod13q1, modis, ndvi, terra, vegetation, vegetation-indices

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDVI | Normalized Difference Vegetation Index | 250 |  |
| EVI | Enhanced Vegetation Index | 250 |  |
| DetailedQA | VI quality indicators | 250 |  |
| sur_refl_b01 | Red surface reflectance | 250 | 645nm |
| sur_refl_b02 | NIR surface reflectance | 250 | 858nm |
| sur_refl_b03 | Blue surface reflectance | 250 | 469nm |
| sur_refl_b07 | MIR surface reflectance | 250 | 2130nm/2105 - 2155nm |
| ViewZenith | View zenith angle | 250 |  |
| SolarZenith | Solar zenith angle | 250 |  |
| RelativeAzimuth | Relative azimuth angle | 250 |  |
| DayOfYear | Julian day of year | 250 |  |
| SummaryQA | Quality reliability of VI pixel | 250 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/MOD13Q1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD13Q1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
