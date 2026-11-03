---
title: "RTMA: Real-Time Mesoscale Analysis"
date: 2026-11-03 12:00:00
permalink: /pages/d0d6c80e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "climate"
  - "cloud"
  - "geophysical"
  - "humidity"
  - "noaa"
  - "nws"
  - "precipitation"
  - "pressure"
  - "rtma"
  - "surface"
  - "temperature"
---

# RTMA: Real-Time Mesoscale Analysis

## 数据集简介

The Real-Time Mesoscale Analysis (RTMA) is a high-spatial and temporal
resolution analysis for near-surface weather conditions.  This dataset
includes hourly analyses at 2.5 km for CONUS.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/NWS/RTMA`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA/NWS、Google Earth Engine
- 时间范围：2011-01-01 至 2026-11-02
- 空间分辨率：2500 米
- 许可：proprietary
- 关键词：atmosphere, climate, cloud, geophysical, humidity, noaa, nws, precipitation, pressure, rtma, surface, temperature, visibility, weather, wind

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| HGT | Model terrain elevation | 2500 |  |
| PRES | Pressure | 2500 |  |
| TMP | Temperature | 2500 |  |
| DPT | Dew point temperature | 2500 |  |
| UGRD | U-component of wind | 2500 |  |
| VGRD | V-component of wind | 2500 |  |
| SPFH | Specific humidity | 2500 |  |
| WDIR | Wind direction (from which blowing) | 2500 |  |
| WIND | Wind speed | 2500 |  |
| GUST | Wind speed (gust) | 2500 |  |
| VIS | Visibility | 2500 |  |
| TCDC | Total cloud cover | 2500 |  |
| ACPC01 | Total precipitation | 2500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/NWS/RTMA');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_NWS_RTMA

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
