---
title: "Daymet V4: Daily Surface Weather and Climatological Summaries"
date: 2026-11-03 12:00:00
permalink: /pages/7b6d050e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "daily"
  - "daylight"
  - "daymet"
  - "flux"
  - "geophysical"
  - "nasa"
  - "ornl"
  - "precipitation"
  - "radiation"
  - "snow"
  - "temperature"
---

# Daymet V4: Daily Surface Weather and Climatological Summaries

## 数据集简介

Daymet V4 provides gridded estimates of daily weather parameters for
Continental North America, Hawaii, and Puerto Rico (Data for Puerto Rico is available starting
in 1950). It is derived from selected meteorological station data and various supporting data
sources.

Compared to the previous version, Daymet V4 provides effective solutions to known issues and
further considers improvements to what were believed to be input weather station biases.
Improvements include:

- Reductions in the timing bias of input reporting weather station measurements.

- Improvement to the three-dimensional regression model techniques in the core algorithm.

- A novel approach to handling high elevation temperature measurement biases.

2020 and 2021 data are ingested from V4 R1 sources

Documentation:

* [ORNL DAAC Dataset Documentation](https://daac.ornl.gov/DAYMET/guides/Daymet_Daily_V4.html)

* [Dataset Documentation](https://daac.ornl.gov/daacdata/daymet/Daymet_Daily_V4/comp/Daymet_Daily_V4.pdf)

* [The THREDDS location for this Collection](https://thredds.daac.ornl.gov/thredds/catalogs/ornldaac/Regional_and_Global_Data/DAYMET_COLLECTIONS/DAYMET_COLLECTIONS.html)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/ORNL/DAYMET_V4`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA ORNL DAAC at Oak Ridge National Laboratory、Google Earth Engine
- 时间范围：1980-01-01 至 2025-12-31
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：climate, daily, daylight, daymet, flux, geophysical, nasa, ornl, precipitation, radiation, snow, temperature, vapor, water, weather, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| dayl | Duration of the daylight period. Based on the period of the day during which the sun is above a hypothetical flat horizon.  | 1000 |  |
| prcp | Daily total precipitation, sum of all forms converted to water-equivalent. | 1000 |  |
| srad | Incident shortwave radiation flux density, taken as an average over the daylight period of the day. | 1000 |  |
| swe | Snow water equivalent, the amount of water contained within the snowpack. | 1000 |  |
| tmax | Daily maximum 2-meter air temperature. | 1000 |  |
| tmin | Daily minimum 2-meter air temperature. | 1000 |  |
| vp | Daily average partial pressure of water vapor. | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/ORNL/DAYMET_V4');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_ORNL_DAYMET_V4
- 数据引用：Thornton, M.M., R. Shrestha, Y. Wei, P.E. Thornton, S-C. Kao, and B.E. Wilson. 2022.
Daymet: Daily Surface Weather Data on a 1-km Grid for North America, Version 4 R1.
ORNL DAAC, Oak Ridge, Tennessee, USA. https://doi.org/10.3334/ORNLDAAC/2129

- DOI：10.3334/ORNLDAAC/2129

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
