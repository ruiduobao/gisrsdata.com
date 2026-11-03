---
title: "CPC Global Unified Gauge-Based Analysis of Daily Precipitation"
date: 2026-11-03 12:00:00
permalink: /pages/9d6b70e8/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "noaa"
  - "precipitation"
  - "weather"
---

# CPC Global Unified Gauge-Based Analysis of Daily Precipitation

## 数据集简介

The CPC Unified Gauge-Based Analysis of Global Daily Precipitation dataset
offers daily precipitation estimates over land from 1979 to the present.
Developed by NOAA's Climate Prediction Center (CPC), it leverages an optimal
interpolation technique to combine data from a global network of rain
gauges, with over 30,000 gauges contributing to the retrospective version
(1979-2005) and around 17,000 to the real-time version (2006-present).
Data is provided at a 0.5-degree resolution and includes both precipitation
amounts (in 0.1 mm) and the number of gauges used for each grid cell,
allowing users to assess data quality.

The dataset's quality is acknowledged to be poor over tropical Africa and
Antarctica, and generally varies with gauge density. Real-time data is
subject to revision as more complete station data becomes available.

[This](https://ftp.cpc.ncep.noaa.gov/precip/CPC_UNI_PRCP/GAUGE_GLB/DOCU/)
folder has all the technical documentation.

NOTE: The historical data spanning from 1979 to 2005 is not available in the
current version of the dataset.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/CPC/Precipitation`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA Physical Sciences Laboratory、Google Earth Engine
- 时间范围：2006-01-01 至 2026-10-30
- 空间分辨率：55500 米
- 许可：proprietary
- 关键词：daily, noaa, precipitation, weather

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| precipitation | Daily total precipitation estimate in 0.1 mm | 55500 |  |
| num_gauges | Number of rain gauges contributing to the precipitation estimate within the 0.5-degree grid cell  | 55500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/CPC/Precipitation');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CPC_Precipitation

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
