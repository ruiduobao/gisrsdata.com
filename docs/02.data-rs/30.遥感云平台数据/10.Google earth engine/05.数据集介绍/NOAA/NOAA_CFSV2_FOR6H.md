---
title: "CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/f7c9715e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "daylight"
  - "flux"
  - "forecast"
  - "geophysical"
  - "ncep"
  - "noaa"
  - "nws"
  - "precipitation"
  - "radiation"
  - "snow"
  - "temperature"
---

# CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

Note: Starting October 20, 2025, this dataset switched to using Celsius
instead of Kelvin units for temperature bands. Please use
[NOAA/CFSV2/FOR6H_HARMONIZED](https://developers.google.com/earth-engine/datasets/catalog/NOAA_CFSV2_FOR6H_HARMONIZED)
for consistent temperature units (Kelvin).

The National Centers for Environmental Prediction (NCEP) Climate Forecast
System (CFS) is a fully coupled model representing the interaction between
the Earth's atmosphere, oceans, land, and sea ice. CFS was developed at the
Environmental Modeling Center (EMC) at NCEP. The operational CFS was
upgraded to version 2 (CFSv2) on March 30, 2011.

Forecasts are initialized four times per day (0000, 0600, 1200, and 1800
UTC). This is the same model that was used to create the NCEP Climate
Forecast System Reanalysis (CFSR), and the purpose of the CFSv2 dataset is
to extend CFSR. We ingest only a subset of bands from files matching
cdas1.t??z.sfluxgrbf**06**.grib2.

For more information about CFS, please see the [CFS NOAA site](https://cfs.ncep.noaa.gov/).

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/CFSV2/FOR6H`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA NWS National Centers for Environmental Prediction (NCEP)、Google Earth Engine
- 时间范围：1979-01-01 至 2026-11-01
- 空间分辨率：22264 米
- 许可：proprietary
- 关键词：climate, daylight, flux, forecast, geophysical, ncep, noaa, nws, precipitation, radiation, snow, temperature, vapor, water, weather, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Downward_Long-Wave_Radp_Flux_surface_6_Hour_Average | Downward long-wave radiation flux at surface, 6-hour average | 22264 |  |
| Downward_Short-Wave_Radiation_Flux_surface_6_Hour_Average | Downward short-wave radiation flux at surface, 6-hour average | 22264 |  |
| Geopotential_height_surface | Geopotential height at surface | 22264 |  |
| Latent_heat_net_flux_surface_6_Hour_Average | Latent heat net flux at surface, 6-hour average | 22264 |  |
| Maximum_specific_humidity_at_2m_height_above_ground_6_Hour_Interval | Maximum specific humidity 2m above ground, 6-hour interval | 22264 |  |
| Maximum_temperature_height_above_ground_6_Hour_Interval | Maximum temperature 2m above ground, 6-hour interval.         Note that the units switched from Kelvin to Celsius on 2025-10-20:18:00:00. | 22264 |  |
| Minimum_specific_humidity_at_2m_height_above_ground_6_Hour_Interval | Minimum specific humidity 2m above ground, 6-hour interval | 22264 |  |
| Minimum_temperature_height_above_ground_6_Hour_Interval | Minimum temperature 2m above ground, 6-hour interval.         Note that the units switched from Kelvin to Celsius on 2025-10-20:18:00:00. | 22264 |  |
| Potential_Evaporation_Rate_surface_6_Hour_Average | Potential evaporation rate at surface, 6-hour average | 22264 |  |
| Precipitation_rate_surface_6_Hour_Average | Precipitation rate at surface, 6-hour average | 22264 |  |
| Pressure_surface | Pressure at surface | 22264 |  |
| Sensible_heat_net_flux_surface_6_Hour_Average | Sensible heat net flux at surface, 6-hour average | 22264 |  |
| Specific_humidity_height_above_ground | Specific humidity 2m above ground | 22264 |  |
| Temperature_height_above_ground | Temperature 2m above ground.         Note that the units switched from Kelvin to Celsius on 2025-10-20:18:00:00. | 22264 |  |
| u-component_of_wind_height_above_ground | U-component of wind 10m above ground | 22264 |  |
| Upward_Long-Wave_Radp_Flux_surface_6_Hour_Average | Upward long-wave radiation flux at surface, 6-hour average | 22264 |  |
| Upward_Short-Wave_Radiation_Flux_surface_6_Hour_Average | Upward short-wave radiation flux at surface, 6-hour average | 22264 |  |
| v-component_of_wind_height_above_ground | V-component of wind 10m above ground | 22264 |  |
| Volumetric_Soil_Moisture_Content_depth_below_surface_layer_5_cm | Volumetric soil moisture content 5cm below surface layer | 22264 |  |
| Volumetric_Soil_Moisture_Content_depth_below_surface_layer_25_cm | Volumetric soil moisture content 25cm below surface layer | 22264 |  |
| Volumetric_Soil_Moisture_Content_depth_below_surface_layer_70_cm | Volumetric soil moisture content 70cm below surface layer | 22264 |  |
| Volumetric_Soil_Moisture_Content_depth_below_surface_layer_150_cm | Volumetric soil moisture content 150cm below surface layer | 22264 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/CFSV2/FOR6H');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CFSV2_FOR6H
- 数据引用：Saha, S., et al. 2011, updated daily. NCEP Climate Forecast System
Version 2 (CFSv2) 6-hourly Products. Research Data Archive at the National
Center for Atmospheric Research, Computational and Information Systems
Laboratory. [https://doi.org/10.5065/D61C1TXF](https://doi.org/10.5065/D61C1TXF).
Accessed dd mmm yyyy.

- DOI：10.5065/D61C1TXF

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
