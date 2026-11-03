---
title: "CPC Global Unified Temperature"
date: 2026-11-03 12:00:00
permalink: /pages/8042cb38/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "daily"
  - "noaa"
  - "precipitation"
  - "weather"
  - "weather-and-climate"
---

# CPC Global Unified Temperature

## 数据集简介

This dataset provides a gridded analysis of daily surface air temperature
over global land areas, including daily maximum (Tmax), minimum (Tmin)
temperatures. Spanning from 1979 to the present, the data is presented on
0.5-degree latitude/longitude grids, aligning with the resolution of CPC's
gauge-based global daily precipitation analysis. The construction of this
dataset considers orographic effects. Its primary purpose is to support
climate monitoring and forecast verification activities. Input data
originates from the CPC archive of GTS (Global Telecommunication System)
daily reports, incorporating Tmax and Tmin data from approximately 6,000 to
7,000 global stations.

Refer [this](https://ftp.cpc.ncep.noaa.gov/precip/PEOPLE/wd52ws/global_temp/CPC-GLOBAL-T.pdf)
for technical documentation.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/CPC/Temperature`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA Physical Sciences Laboratory、Google Earth Engine
- 时间范围：1979-01-01 至 2026-10-31
- 空间分辨率：55500 米
- 许可：proprietary
- 关键词：climate, daily, noaa, precipitation, weather, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| tmax | daily maximum temperature | 55500 |  |
| tmin | daily minimum temperature | 55500 |  |
| nmax | number of reports for maximum temperature | 55500 |  |
| nmin | number of reports for minimum temperature | 55500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/CPC/Temperature');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CPC_Temperature

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
