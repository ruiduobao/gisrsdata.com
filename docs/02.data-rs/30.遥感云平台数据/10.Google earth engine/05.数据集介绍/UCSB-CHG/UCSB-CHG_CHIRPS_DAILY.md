---
title: "CHIRPS Precipitation Daily: Climate Hazards Center InfraRed Precipitation With Station Data (Version 2.0 Final)"
date: 2026-11-03 12:00:00
permalink: /pages/7d12c001/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "chg"
  - "climate"
  - "geophysical"
  - "precipitation"
  - "ucsb"
  - "weather"
---

# CHIRPS Precipitation Daily: Climate Hazards Center InfraRed Precipitation With Station Data (Version 2.0 Final)

## 数据集简介

Climate Hazards Center InfraRed Precipitation with Station data (CHIRPS)
is a 30+ year quasi-global rainfall dataset. CHIRPS incorporates
0.05° resolution satellite imagery with in-situ station data
to create gridded rainfall time series for trend analysis and seasonal
drought monitoring.

## 基本信息

- 数据集编号（Earth Engine ID）：`UCSB-CHG/CHIRPS/DAILY`
- 数据类型：影像集合（ImageCollection）
- 提供方：UCSB/CHG、Google Earth Engine
- 时间范围：1981-01-01 至 2026-09-30
- 空间分辨率：5566 米
- 许可：proprietary
- 关键词：chg, climate, geophysical, precipitation, ucsb, weather

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| precipitation | Precipitation | 5566 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('UCSB-CHG/CHIRPS/DAILY');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UCSB-CHG_CHIRPS_DAILY
- 数据引用：Funk, Chris, Pete Peterson, Martin Landsfeld, Diego Pedreros, James
Verdin, Shraddhanand Shukla, Gregory Husak, James Rowland, Laura Harrison,
Andrew Hoell & Joel Michaelsen. "The climate hazards infrared precipitation
with stations-a new environmental record for monitoring extremes".
Scientific Data 2, 150066. [doi:10.1038/sdata.2015.66](https://doi.org/10.1038/sdata.2015.66)
2015.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
