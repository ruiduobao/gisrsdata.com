---
title: "NOAA CDR AVHRR: Surface Reflectance, Version 5"
date: 2026-11-03 12:00:00
permalink: /pages/6d18f9ec/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "avhrr"
  - "cdr"
  - "daily"
  - "land"
  - "noaa"
  - "reflectance"
  - "satellite-imagery"
  - "sr"
---

# NOAA CDR AVHRR: Surface Reflectance, Version 5

## 数据集简介

The NOAA Climate Data Record (CDR) of AVHRR Surface Reflectance contains
gridded daily surface reflectance and brightness temperatures derived from
the Advanced Very High Resolution Radiometer (AVHRR) sensors onboard seven
NOAA polar orbiting satellites. The data are gridded at a
resolution of 0.05° and computed globally over land surfaces.

Known issues with this dataset include:

- TIMEOFDAY variable contains values that are too large by 1 day

- Latitude values are not correctly associated with the center of
  the grid cell, error is < 0.002 degrees

- Longitude values are not correctly associated with the center of
  the grid cell, error is < 0.02 degrees

See [technical note from the data provider](https://www.ncei.noaa.gov/pub/data/sds/cdr/CDRs/Surface_Reflectance/AVHRR/AlgorithmDescriptionAVHRR_01B-20a.pdf).

Provider's note: the orbital drift of N-19 (the last NOAA satellite
carrying the AVHRR sensor) began to severely degrade the retrieved
product quality. Therefore, VIIRS is now the primary sensor being used for
these products from 2014-present.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/CDR/AVHRR/SR/V5`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA、Google Earth Engine
- 时间范围：1981-06-24 至 2013-12-31
- 空间分辨率：5566 米
- 许可：proprietary
- 关键词：avhrr, cdr, daily, land, noaa, reflectance, satellite-imagery, sr

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| SREFL_CH1 | Bidirectional surface reflectance | 5566 | 640nm |
| SREFL_CH2 | Bidirectional surface reflectance | 5566 | 860nm |
| SREFL_CH3 | Bidirectional surface reflectance | 5566 | 3.75&micro;m |
| BT_CH3 | Brightness temperature | 5566 | 3.75&micro;m |
| BT_CH4 | Brightness temperature | 5566 | 11.0&micro;m |
| BT_CH5 | Brightness temperature | 5566 | 12.0&micro;m |
| TIMEOFDAY | Hours since start of day | 5566 |  |
| RELAZ | Relative sensor azimuth angle | 5566 |  |
| SZEN | Solar zenith angle | 5566 |  |
| VZEN | View zenith angle, scale 0.01 | 5566 |  |
| QA | Quality control bit flags | 5566 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/CDR/AVHRR/SR/V5');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_AVHRR_SR_V5
- 数据引用：Eric Vermote, Chris Justice, Ivan Csiszar, Jeff Eidenshink, Ranga Myneni,
Frederic Baret, Ed Masuoka, Robert Wolfe, Martin Claverie and NOAA CDR
Program (2014): NOAA Climate Data Record (CDR) of AVHRR Surface Reflectance,
Version 4. [indicate subset used]. NOAA National Climatic Data Center.

- DOI：10.7289/V53776Z4

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
