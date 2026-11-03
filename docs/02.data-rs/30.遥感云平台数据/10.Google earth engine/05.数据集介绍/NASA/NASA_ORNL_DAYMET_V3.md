---
title: "Daymet V3: Daily Surface Weather and Climatological Summaries [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/b11f9c4f/
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

# Daymet V3: Daily Surface Weather and Climatological Summaries [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

Daymet V3 provides gridded estimates of daily weather parameters for
United States, Mexico, Canada, Hawaii, and Puerto Rico. It is derived
from selected meteorological station data and various supporting data
sources.

Compared to the previous version, Daymet V3 uses an entirely new suite
of inputs including:

- NASA SRTM DEM version 2.1.

- Land/Water Mask: MODIS 250 `MOD44W_v2.NASA_ORNL_`

- Horizon files derived from the SRTM DEM.

- Ground station weather inputs from several sources with QA/QC.

Documentation:

* [ORNL DAAC Dataset Documentation](https://daac.ornl.gov/DAYMET/guides/Daymet_V3_CFMosaics.html)

* [Dataset Documentation](https://daac.ornl.gov/daacdata/daymet/Daymet_V3_CFMosaics/comp/Daymet_V3_CFMosaics.pdf)

* [The THREDDS location for this Collection](https://thredds.daac.ornl.gov/thredds/catalog/ornldaac/1328/catalog.html)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/ORNL/DAYMET_V3`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA ORNL DAAC at Oak Ridge National Laboratory、Google Earth Engine
- 时间范围：1980-01-01 至 2019-12-31
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
var dataset = ee.ImageCollection('NASA/ORNL/DAYMET_V3');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_ORNL_DAYMET_V3
- 数据引用：Thornton, P.E., M.M. Thornton, B.W. Mayer, Y. Wei, R. Devarakonda,
R.S.Vose, and R.B. Cook. {YEAR}. Daymet: Daily Surface Weather Data on a
1-km Grid for North America, Version3. ORNL DAAC, Oak Ridge, Tennessee, USA

- DOI：10.3334/ORNLDAAC/1328

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
