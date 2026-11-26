---
title: "GFS: Global Forecast System 384-Hour Predicted Atmosphere Data"
date: 2026-11-03 12:00:00
---

# GFS: Global Forecast System 384-Hour Predicted Atmosphere Data

Original name: GFS: Global Forecast System 384-Hour Predicted Atmosphere Data

## What this dataset is

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

## Coverage and time range

- Coverage: Coverage: global; time span: 2015 to 2026; resolution: 27,830 m.
- Time range: 2015-07-01 至 2026-11-02

## Resolution and specifications

- Spatial resolution: about 27,830 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| temperature_2m_above_ground | Temperature 2m above ground | 27830 |  |
| specific_humidity_2m_above_ground | Specific humidity 2m above ground | 27830 |  |
| dew_point_temperature_2m_above_ground | Dew point temperature 2m above ground (available starting from 2025/01/15) | 27830 |  |
| relative_humidity_2m_above_ground | Relative humidity 2m above ground | 27830 |  |
| maximum_temperature_2m_above_ground | Maximum temperature 2m above ground (available starting from 2025/01/15, but only for assets with forecast_hours > 0) | 27830 |  |
| minimum_temperature_2m_above_ground | Minimum temperature 2m above ground (available starting from 2025/01/15, but only for assets with forecast_hours > 0) | 27830 |  |
| u_component_of_wind_10m_above_ground | U component of wind 10m above ground | 27830 |  |
| v_component_of_wind_10m_above_ground | V component of wind 10m above ground | 27830 |  |
| total_precipitation_surface | Cumulative precipitation at surface for the previous 1-6 hours, depending on the value of the "forecast_hours" property according to the formula ((F - 1) % 6) + 1 (and only for assets with forecast_hours > 0).  As a consequence, to calculate the total precipitation by hour X, double-counting should be avoided by only summing the values for forecast_hours that are multiples of 6 plus any remainder to reach X. It also means that to determine the precipitation for just hour X, one must subtract the value for the preceding hour unless X is the first hour in a 6-hour window. | 27830 |  |
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

## What you can use it for

- Weather forecasting applications
- Numerical model analysis
- Weather research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/GFS0P25');
```

- Earth Engine ID: `NOAA/GFS0P25`
- Providers: NOAA/NCEP/EMC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_GFS0P25

## License and citation

- License: proprietary
- Keywords: climate, cloud, emc, flux, forecast, geophysical, gfs, humidity, ncep, noaa, precipitation, radiation, temperature, vapor, weather, weather-and-climate, wind
- 数据引用：Alpert, J., 2006 Sub-Grid Scale Mountain Blocking at NCEP, 20th Conf.
WAF/16 Conf. NWP P2.4.

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CPC Global Unified Temperature](/en/pages/8042cb38/)
- [CPC Global Unified Gauge-Based Analysis of Daily Precipitation](/en/pages/9d6b70e8/)
- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)
- [ERA5 Daily Aggregates — ECMWF Climate Reanalysis](/en/pages/9ae9975a/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
