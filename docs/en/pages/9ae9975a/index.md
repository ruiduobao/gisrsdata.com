---
title: "ERA5 Daily Aggregates — ECMWF Climate Reanalysis"
date: 2026-11-03 12:00:00
---

# ERA5 Daily Aggregates — ECMWF Climate Reanalysis

Original name: ERA5 Daily Aggregates - Latest Climate Reanalysis Produced by ECMWF / Copernicus Climate Change Service

## What this dataset is

ERA5 is the fifth generation ECMWF atmospheric reanalysis of the global climate. Reanalysis combines model data with observations from across the world into a globally complete and consistent dataset. ERA5 replaces its predecessor, the ERA-Interim reanalysis.

ERA5 DAILY provides aggregated values for each day for seven ERA5 climate reanalysis parameters: 2m air temperature, 2m dewpoint temperature, total precipitation, mean sea level pressure, surface pressure, 10m u-component of wind and 10m v-component of wind. Additionally, daily minimum and maximum air temperature at 2m has been calculated based on the hourly 2m air temperature data. Daily total precipitation values are given as daily sums. All other parameters are provided as daily averages.

ERA5 data is available from 1979 to three months from real-time. More information and more ERA5 atmospheric parameters can be found at the [Copernicus Climate Data Store](https://cds.climate.copernicus.eu).

Provider's Note: Daily aggregates have been calculated based on the ERA5 hourly values of each parameter.

## Coverage and time range

- Coverage: Global
- Time range: 1979-01-02 至 2020-07-09
- Cadence: Daily

## Resolution and specifications

- Spatial resolution: about 27,830 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
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

## What you can use it for

- Daily-scale climate analysis of temperature, precipitation and wind
- Daily-scale studies of extreme weather events
- Hydrological and agricultural models needing daily weather inputs

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('ECMWF/ERA5/DAILY');
```

- Earth Engine ID: `ECMWF/ERA5/DAILY`
- Providers: ECMWF / Copernicus Climate Change Service, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/ECMWF_ERA5_DAILY

## License and citation

- License: proprietary
- Keywords: climate, copernicus, dewpoint, ecmwf, era5, precipitation, pressure, reanalysis, surface, temperature, weather-and-climate, wind
- 数据引用：Copernicus Climate Change Service (C3S) (2017): ERA5: Fifth generation of ECMWF atmospheric reanalyses of the global climate.
Copernicus Climate Change Service Climate Data Store (CDS), (date of access), [https://cds.climate.copernicus.eu/datasets/reanalysis-era5-single-levels?tab=overview](https://cds.climate.copernicus.eu/datasets/reanalysis-era5-single-levels?tab=overview)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ERA5 Monthly Aggregates - Latest Climate Reanalysis Produced by ECMWF / Copernicus Climate Change Service](/pages/87085b9b/)
- [CHELSA气象数据](/pages/1849d6/)
- [CHIRPS Precipitation Daily Near-Real-Time: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, IMERG-based)](/pages/09ea3f30/)
- [CHIRPS Precipitation Daily Reanalysis: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, ERA5-based)](/pages/11a19c2e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
