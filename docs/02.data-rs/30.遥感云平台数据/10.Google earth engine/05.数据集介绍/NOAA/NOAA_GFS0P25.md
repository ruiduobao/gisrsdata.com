---
title: "GFS: Global Forecast System 384-Hour Predicted Atmosphere Data"
date: 2026-11-03 12:00:00
permalink: /pages/c5693455/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "cloud"
  - "emc"
  - "flux"
  - "forecast"
  - "geophysical"
  - "gfs"
  - "humidity"
  - "ncep"
  - "noaa"
  - "precipitation"
  - "radiation"
---

# GFS: Global Forecast System 384-Hour Predicted Atmosphere Data

## 数据集简介

The Global Forecast System (GFS) is a weather forecast model produced by
the National Centers for Environmental Prediction (NCEP). The GFS dataset
consists of selected model outputs (described below) as gridded forecast
variables. The 384-hour forecasts, with 1-hour (up to 120 hours)
and 3-hour (after 120 hours) forecast intervals, are made at 6-hour temporal
resolution (i.e. updated four times daily). Use the 'creation_time' and
'forecast_time' properties to select data of interest.

The GFS is a coupled model, composed of an atmosphere model, an ocean model,
a land/soil model, and a sea ice model which work together to provide an
accurate picture of weather conditions. Note that this model may change;
see [history of recent modifications to the global forecast/analysis system](https://www.emc.ncep.noaa.gov/gmb/STATS/html/model_changes.html)
and the [documentation](https://www.emc.ncep.noaa.gov/emc/pages/numerical_forecast_systems/gfs.php)
for more information. There may be significant hour-to-hour and day-to-day
fluctuations that require noise-reduction techniques to be applied to bands
before analysis.

Note that the available forecast hours and intervals have changed over time:

* From 2015/04/01-2017/07/09: 36-hour forecasts, excluding hour 0, at
3-hour intervals.
* From 2017/07/09-2021/06/11: 384-hour forecasts, at 1-hour intervals from
hours 0-120, at 3-hour intervals from hours 120-240, and 12-hour intervals
from hours 240-384.
* From 2021/06/12: 384-hour forecasts, at 1-hour intervals from hours 0-120
and 3-hour intervals from hours 120-384.

Some bands are only available starting on 2025/01/15 as noted in the band
descriptions.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/GFS0P25`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA/NCEP/EMC、Google Earth Engine
- 时间范围：2015-07-01 至 2026-11-02
- 空间分辨率：27830 米
- 许可：proprietary
- 关键词：climate, cloud, emc, flux, forecast, geophysical, gfs, humidity, ncep, noaa, precipitation, radiation, temperature, vapor, weather, weather-and-climate, wind

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| temperature_2m_above_ground | Temperature 2m above ground | 27830 |  |
| specific_humidity_2m_above_ground | Specific humidity 2m above ground | 27830 |  |
| dew_point_temperature_2m_above_ground | Dew point temperature 2m above ground (available starting from 2025/01/15) | 27830 |  |
| relative_humidity_2m_above_ground | Relative humidity 2m above ground | 27830 |  |
| maximum_temperature_2m_above_ground | Maximum temperature 2m above ground (available starting from 2025/01/15, but only for assets with forecast_hours > 0) | 27830 |  |
| minimum_temperature_2m_above_ground | Minimum temperature 2m above ground (available starting from 2025/01/15, but only for assets with forecast_hours > 0) | 27830 |  |
| u_component_of_wind_10m_above_ground | U component of wind 10m above ground | 27830 |  |
| v_component_of_wind_10m_above_ground | V component of wind 10m above ground | 27830 |  |
| total_precipitation_surface | Cumulative precipitation at surface for the previous 1-6 hours, depending on the value of the "forecast_hours" property according to the formula ((F - 1) % 6) + 1 (and only for assets with forecast_hours > 0).  As a consequence, to calculate the total precipitation by hour X, double-counting should be avoided by only summing the values for forecast_hours that are multiples of 6 plus any remainder to reach X. It also means that to determine the precipitation for just hour X, one must subtract the value for the preceding hour unless X is the first hour in a 6-hour window.  | 27830 |  |
| precipitable_water_entire_atmosphere | Precipitable water for entire atmosphere | 27830 |  |
| u_component_of_wind_planetary_boundary_layer | U component of wind planetary boundary layer (available starting from 2025/01/15) | 27830 |  |
| v_component_of_wind_planetary_boundary_layer | V component of wind planetary boundary layer (available starting from 2025/01/15) | 27830 |  |
| gust | Wind Speed (Gust) (available starting from 2025/01/15) | 27830 |  |
| precipitation_rate | Precipitation Rate (available starting from 2025/01/15) | 27830 |  |
| haines_index | Haines Index (available starting from 2025/01/15) | 27830 |  |
| ventilation_rate | Ventilation Rate (available starting from 2025/01/15) | 27830 |  |
| total_cloud_cover_entire_atmosphere | Total cloud cover for entire atmosphere (previously only for assets with forecast_hours > 0, but available for those with forecast_hours == 0 starting from 2025/01/15) | 27830 |  |
| downward_shortwave_radiation_flux | Downward shortwave radiation flux (only for assets with forecast_hours > 0) | 27830 |  |
| downward_longwave_radiation_flux | Downward longwave radiation flux (available starting from 2025/01/15, but only for assets with forecast_hours > 0) | 27830 |  |
| upward_shortwave_radiation_flux | Upward shortwave radiation flux (available starting from 2025/01/15, but only for assets with forecast_hours > 0) | 27830 |  |
| upward_longwave_radiation_flux | Upward longwave radiation flux (available starting from 2025/01/15, but only for assets with forecast_hours > 0) | 27830 |  |
| planetary_boundary_layer_height | Planetary boundary layer height (available starting from 2025/01/15) | 27830 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/GFS0P25');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_GFS0P25
- 数据引用：Alpert, J., 2006 Sub-Grid Scale Mountain Blocking at NCEP, 20th Conf.
WAF/16 Conf. NWP P2.4.

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
