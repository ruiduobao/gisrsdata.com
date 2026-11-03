---
title: "ERA5 Daily Aggregates - Latest Climate Reanalysis Produced by ECMWF / Copernicus Climate Change Service"
date: 2026-11-03 12:00:00
permalink: /pages/9ae9975a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "copernicus"
  - "dewpoint"
  - "ecmwf"
  - "era5"
  - "precipitation"
  - "pressure"
  - "reanalysis"
  - "surface"
  - "temperature"
  - "weather-and-climate"
  - "wind"
---

# ERA5 Daily Aggregates - Latest Climate Reanalysis Produced by ECMWF / Copernicus Climate Change Service

## 数据集简介

ERA5 is the fifth generation ECMWF atmospheric reanalysis of the global climate.
Reanalysis combines model data with observations from across the world into
a globally complete and consistent dataset. ERA5 replaces its predecessor,
the ERA-Interim reanalysis.

ERA5 DAILY provides aggregated values for each day for seven ERA5 climate
reanalysis parameters: 2m air temperature, 2m dewpoint temperature, total
precipitation, mean sea level pressure, surface pressure, 10m u-component
of wind and 10m v-component of wind. Additionally, daily minimum and maximum
air temperature at 2m has been calculated based on the hourly 2m air
temperature data. Daily total precipitation values are given as daily sums.
All other parameters are provided as daily averages.

ERA5 data is available from 1979 to three months from real-time. More information
and more ERA5 atmospheric parameters can be found at the
[Copernicus Climate Data Store](https://cds.climate.copernicus.eu).

Provider's Note: Daily aggregates have been calculated based on the ERA5 hourly values
of each parameter.

## 基本信息

- 数据集编号（Earth Engine ID）：`ECMWF/ERA5/DAILY`
- 数据类型：影像集合（ImageCollection）
- 提供方：ECMWF / Copernicus Climate Change Service、Google Earth Engine
- 时间范围：1979-01-02 至 2020-07-09
- 空间分辨率：27830 米
- 许可：proprietary
- 关键词：climate, copernicus, dewpoint, ecmwf, era5, precipitation, pressure, reanalysis, surface, temperature, weather-and-climate, wind

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| mean_2m_air_temperature | Average air temperature at 2m height (daily average) | 27830 |  |
| minimum_2m_air_temperature | Minimum air temperature at 2m height (daily minimum) | 27830 |  |
| maximum_2m_air_temperature | Maximum air temperature at 2m height (daily maximum) | 27830 |  |
| dewpoint_2m_temperature | Dewpoint temperature at 2m height (daily average) | 27830 |  |
| total_precipitation | Total precipitation (daily sums) | 27830 |  |
| surface_pressure | Surface pressure (daily average) | 27830 |  |
| mean_sea_level_pressure | Mean sea level pressure (daily average) | 27830 |  |
| u_component_of_wind_10m | 10m u-component of wind (daily average) | 27830 |  |
| v_component_of_wind_10m | 10m v-component of wind (daily average) | 27830 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('ECMWF/ERA5/DAILY');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ECMWF_ERA5_DAILY
- 数据引用：Copernicus Climate Change Service (C3S) (2017): ERA5: Fifth generation of ECMWF atmospheric reanalyses of the global climate.
Copernicus Climate Change Service Climate Data Store (CDS), (date of access), [https://cds.climate.copernicus.eu/datasets/reanalysis-era5-single-levels?tab=overview](https://cds.climate.copernicus.eu/datasets/reanalysis-era5-single-levels?tab=overview)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
