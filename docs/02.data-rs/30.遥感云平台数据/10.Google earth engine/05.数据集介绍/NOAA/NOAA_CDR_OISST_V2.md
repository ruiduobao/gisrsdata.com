---
title: "NOAA CDR OISST v2: Optimum Interpolation Sea Surface Temperature [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/0c219b07/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "avhrr"
  - "cdr"
  - "daily"
  - "ice"
  - "noaa"
  - "ocean"
  - "oceans"
  - "oisst"
  - "real-time"
  - "sst"
  - "temperature"
---

# NOAA CDR OISST v2: Optimum Interpolation Sea Surface Temperature [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The NOAA 1/4 degree daily Optimum Interpolation Sea Surface Temperature
(OISST) provides complete ocean temperature fields constructed by combining
bias-adjusted observations from different platforms (satellite, ships,
buoys) on a regular global grid, with gaps filled in by interpolation.
Satellite data from the Advanced Very High Resolution Radiometer (AVHRR)
provides the main input which permits the high temporal-spatial coverage
beginning in late 1981 to the present.

The OISST dataset has a single day's data processed twice. First a near
real-time preliminary version is released with a lag of 1 day, and a final
version with a lag of 14 days. The final version uses extra days for
smoothing, and zonal bias correction in addition to replacing the
preliminary version.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/CDR/OISST/V2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA、Google Earth Engine
- 时间范围：1981-09-01 至 2020-04-26
- 空间分辨率：27830 米
- 许可：proprietary
- 关键词：avhrr, cdr, daily, ice, noaa, ocean, oceans, oisst, real-time, sst, temperature

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sst | Daily sea surface temperature | 27830 |  |
| anom | Temperature anomaly; the daily OISST minus a 30-year climatological mean. | 27830 |  |
| ice | Seven-day median of daily sea ice concentrations. | 27830 |  |
| err | Estimated error; standard deviation of analyzed sea surface temperature. | 27830 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/CDR/OISST/V2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_OISST_V2
- 数据引用：Richard W. Reynolds, Viva F. Banzon, and NOAA CDR Program (2008): NOAA
Optimum Interpolation 1/4 Degree Daily Sea Surface Temperature (OISST)
Analysis, Version 2. [indicate subset used]. NOAA National Centers for
Environmental Information. [doi:10.7289/V5SQ8XB5](https://doi.org/10.7289/V5SQ8XB5)
[access date].

- DOI：10.7289/V5SQ8XB5

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
