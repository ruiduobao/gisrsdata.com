---
title: "Copernicus Global Ocean Bio-Geo-Chemical Forecast - CO2"
date: 2026-11-03 12:00:00
permalink: /pages/6e230781/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "daily"
  - "forecast"
  - "oceans"
---

# Copernicus Global Ocean Bio-Geo-Chemical Forecast - CO2

## 数据集简介

The Operational Mercator Ocean biogeochemical global ocean analysis and
forecast system at 1/4 degree is providing 10 days of 3D global ocean
forecasts updated weekly. The time series is aggregated in time, in order
to reach a two full year's time series sliding window. This product
includes daily and monthly mean files of biogeochemical parameters
(chlorophyll, nitrate, phosphate, silicate, dissolved oxygen, dissolved
iron, primary production, phytoplankton, zooplankton, PH, and surface
partial pressure of carbon dioxide) over the global ocean. The global
ocean output files are displayed with a 1/4 degree horizontal resolution
with regular longitude/latitude equirectangular projection.
<br><br> This dataset consists of surface partial pressure
of carbon dioxide.

## 基本信息

- 数据集编号（Earth Engine ID）：`COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_BGC_001_028/CO2`
- 数据类型：影像集合（ImageCollection）
- 提供方：Copernicus、Google Earth Engine
- 时间范围：2022-01-01 至 2025-09-19
- 空间分辨率：27750 米
- 许可：CC-BY-4.0
- 关键词：copernicus, daily, forecast, oceans

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| spco2_depth1 | Surface Partial Pressure of Carbon Dioxide | 27750 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_BGC_001_028/CO2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CO2
- 数据引用：E.U. Copernicus Marine Service Information.
[https://doi.org/10.48670/moi-00015](https://doi.org/10.48670/moi-00015)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
