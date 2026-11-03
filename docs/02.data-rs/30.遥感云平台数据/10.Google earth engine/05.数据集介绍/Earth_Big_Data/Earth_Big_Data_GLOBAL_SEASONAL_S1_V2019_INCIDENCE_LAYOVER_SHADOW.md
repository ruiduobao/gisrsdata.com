---
title: "Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Incidence Layover Shadow"
date: 2026-11-03 12:00:00
permalink: /pages/008235d0/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "earth-big-data"
  - "jpl"
  - "nasa"
  - "polarization"
  - "radar"
  - "sar"
  - "satellite-imagery"
  - "seasonal"
  - "sentinel1-derived"
---

# Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Incidence Layover Shadow

## 数据集简介

This data set is the first-of-its-kind spatial representation of
multi-seasonal, global C-band Synthetic Aperture Radar (SAR)
interferometric repeat-pass coherence and backscatter signatures.
Coverage comprises land masses and ice sheets from 82 degrees
Northern to 79 degrees Southern latitudes. The data set is derived
from multi-temporal repeat-pass interferometric processing of about
205,000 Sentinel-1 C-band SAR images acquired in Interferometric
Wide-Swath Mode from 1-Dec-2019 to 30-Nov-2020.

This dataset contains ancillary data to aid in the interpretation and
processing of the backscatter and coherence products.

Other datasets derived from Sentinel-1 observations over the same time
period include:

* [Backscatter](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_BACKSCATTER)
* [Coherence](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_COHERENCE)
* [Decay Model Parameters](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_DECAY_MODEL_PARAMETERS)

## 基本信息

- 数据集编号（Earth Engine ID）：`Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/INCIDENCE_LAYOVER_SHADOW`
- 数据类型：影像集合（ImageCollection）
- 提供方：Earth Big Data LLC、Alaska Satellite Facility、Google Earth Engine
- 时间范围：2019-12-01 至 2020-12-01
- 空间分辨率：92.7 米
- 许可：CC-BY-4.0
- 关键词：earth-big-data, jpl, nasa, polarization, radar, sar, satellite-imagery, seasonal, sentinel1-derived

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| inc | The angle between the incoming radar signal path and the normal vector to the local ground surface at each pixel.  | 92.7 |  |
| lsmap | Layover/Shadow mask:  * 1 = No Shadow or Layover * 5 = Layover: A geometric distortion where features at higher   elevations are displaced toward the radar (appearing before features   at lower elevations), making measurement impossible. * 17 = Shadow: Areas hidden from the radar beam (behind steep slopes   or tall objects) where no signal is received, resulting in zero or   near-zero measured backscatter and coherence. * 21 = Shadow in Layover  | 92.7 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/INCIDENCE_LAYOVER_SHADOW');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_INCIDENCE_LAYOVER_SHADOW
- 数据引用：Kellndorfer, J., Cartus, O., Lavalle, M. et al. Global seasonal Sentinel-1
interferometric coherence and backscatter data set. Sci Data 9, 73 (2022).
[doi:10.1038/s41597-022-01189-6](https://doi.org/10.1038/s41597-022-01189-6).

- DOI：10.1038/s41597-022-01189-6

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
