---
title: "CHIRPS Precipitation Pentad: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0)"
date: 2026-11-03 12:00:00
permalink: /pages/babe4e05/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "chc"
  - "chg"
  - "climate"
  - "geophysical"
  - "precipitation"
  - "ucsb"
  - "weather"
---

# CHIRPS Precipitation Pentad: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0)

## 数据集简介

The Climate Hazards Center Infrared Precipitation with Stations (CHIRPS v3)
is a 40+ year, high-resolution quasi-global rainfall dataset. It spans
60&deg;N to 60&deg;S and covers all longitudes, providing data from 1981 to
near-present. CHIRPS v3 combines satellite-based thermal infrared rainfall
estimates with in-situ station observations to produce a 0.05&deg; gridded
rainfall time series over land. This is version 3.0 of the dataset, for more
information see [the CHC page](https://www.chc.ucsb.edu/data/chirps3).

## 基本信息

- 数据集编号（Earth Engine ID）：`UCSB-CHC/CHIRPS/V3/PENTAD`
- 数据类型：影像集合（ImageCollection）
- 提供方：UCSB/CHC、Google Earth Engine
- 时间范围：1981-01-01 至 2026-09-26
- 空间分辨率：5566 米
- 许可：proprietary
- 关键词：chc, chg, climate, geophysical, precipitation, ucsb, weather

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| precipitation | Precipitation | 5566 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('UCSB-CHC/CHIRPS/V3/PENTAD');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UCSB-CHC_CHIRPS_V3_PENTAD
- 数据引用：Climate Hazards Center Infrared Precipitation with Stations version 3.
CHIRPS3 Data Repository [doi:10.15780/G2JQ0P](https://doi.org/10.15780/G2JQ0P) (2025).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
