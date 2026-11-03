---
title: "Global Ocean Physics Analysis and Forecast Daily"
date: 2026-11-03 12:00:00
permalink: /pages/208ecbda/
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

# Global Ocean Physics Analysis and Forecast Daily

## 数据集简介

Copernicus Marine Physics 2D Daily Mean Fields
(cmems_mod_glo_phy_anfc_0.083deg_P1D-m) deliver global daily-averaged ocean
surface and bottom variables at 8km resolution.

The Operational Mercator global ocean analysis and forecast system is
providing 10 days of 2D global ocean forecasts updated daily.
The time series is aggregated in time in order to reach a two full year's
time series sliding window. This product includes daily mean
files of temperature, salinity, currents, sea level, mixed layer depth and
ice parameters from the top to the bottom over the global ocean.

## 基本信息

- 数据集编号（Earth Engine ID）：`COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_PHY_DAILY`
- 数据类型：影像集合（ImageCollection）
- 提供方：Copernicus Marine Service、Google Earth Engine
- 时间范围：2022-06-01 至 2026-11-06
- 空间分辨率：9276.62 米
- 许可：CC-BY-4.0
- 关键词：copernicus, daily, forecast, oceans

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sialb | Mean albedo over sea ice | 9276.62 |  |
| siage | Mean sea ice age | 9276.62 |  |
| siconc | Sea Ice Concentration | 9276.62 |  |
| ist | Sea Ice Surface Temperature | 9276.62 |  |
| sivelo | Sea Ice Velocity | 9276.62 |  |
| sithick | Sea Ice Thickness | 9276.62 |  |
| sisnthick | Sea Ice Surface Snow Thickness | 9276.62 |  |
| mlotst | Mixed Layer Depth | 9276.62 |  |
| pbo | Sea Water Pressure at Sea floor | 9276.62 |  |
| sob | Sea Bottom Salinity | 9276.62 |  |
| zos | Sea Surface Height | 9276.62 |  |
| tob | Sea Bottom Temperature | 9276.62 |  |
| usi | Sea Ice Eastward Velocity | 9276.62 |  |
| vsi | Sea Ice Northward Velocity | 9276.62 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_PHY_DAILY');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY
- 数据引用：E.U. Copernicus Marine Service Information (2024). Global Ocean Physics Analysis and Forecast.
[doi:10.48670/moi-00016](https://doi.org/10.48670/moi-00016)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
