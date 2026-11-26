---
title: "ERA5 Monthly Aggregates — ECMWF Climate Reanalysis"
date: 2026-11-03 12:00:00
---

# ERA5 Monthly Aggregates — ECMWF Climate Reanalysis

Original name: ERA5 Monthly Aggregates - Latest Climate Reanalysis Produced by ECMWF / Copernicus Climate Change Service

## What this dataset is

ERA5 is the fifth generation ECMWF atmospheric reanalysis of the global climate.
Reanalysis combines model data with observations from across the world into
a globally complete and consistent dataset. ERA5 replaces its predecessor,
the ERA-Interim reanalysis.

ERA5 MONTHLY provides aggregated values for each month for seven ERA5
climate reanalysis  parameters: 2m air temperature, 2m dewpoint temperature,
total precipitation,
mean sea level pressure, surface pressure, 10m u-component of wind and
10m v-component of wind. Additionally, monthly minimum and maximum air
temperature at 2m has been calculated based on the hourly 2m air temperature
data. Monthly total precipitation values are given as monthly sums.
All other parameters are provided as monthly averages.

ERA5 data is available from 1940 to three months from real-time, the version in the EE Data Catalog is available from 1979. More information
and more ERA5 atmospheric parameters can be found at the
[Copernicus Climate Data Store](https://cds.climate.copernicus.eu/cdsapp#!/dataset/reanalysis-era5-single-levels-monthly-means?tab=overview).

Provider's Note: Monthly aggregates have been calculated based on the ERA5 hourly values
of each parameter.

## Coverage and time range

- Coverage: Global
- Time range: 1979-01-01 至 2020-06-01
- Cadence: Monthly

## Resolution and specifications

- Spatial resolution: about 27,830 m (roughly 31 km grid)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| mean_2m_air_temperature | Average air temperature at 2m height (monthly average) | 27830 |  |
| minimum_2m_air_temperature | Minimum air temperature at 2m height (monthly minimum) | 27830 |  |
| maximum_2m_air_temperature | Maximum air temperature at 2m height (monthly maximum) | 27830 |  |
| dewpoint_2m_temperature | Dewpoint temperature at 2m height (monthly average) | 27830 |  |
| total_precipitation | Total precipitation (monthly sums) | 27830 |  |
| surface_pressure | Surface pressure (monthly average) | 27830 |  |
| mean_sea_level_pressure | Mean sea level pressure (monthly average) | 27830 |  |
| u_component_of_wind_10m | 10m u-component of wind (monthly average) | 27830 |  |
| v_component_of_wind_10m | 10m v-component of wind (monthly average) | 27830 |  |

## What you can use it for

- Monthly-scale climate monitoring and anomaly analysis
- Long-term change studies of temperature and precipitation
- Monthly base layers for regional climate assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('ECMWF/ERA5/MONTHLY');
```

- Earth Engine ID: `ECMWF/ERA5/MONTHLY`
- Providers: ECMWF / Copernicus Climate Change Service, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/ECMWF_ERA5_MONTHLY

## License and citation

- License: proprietary
- Keywords: climate, copernicus, dewpoint, ecmwf, era5, precipitation, pressure, reanalysis, surface, temperature, weather-and-climate, wind
- 数据引用：Copernicus Climate Change Service (C3S) (2017): ERA5: Fifth generation of ECMWF atmospheric reanalyses of the global climate.
Copernicus Climate Change Service Climate Data Store (CDS), (date of access), [https://cds.climate.copernicus.eu/cdsapp#!/home](https://cds.climate.copernicus.eu/cdsapp#!/home)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ERA5 Daily Aggregates — ECMWF Climate Reanalysis](/en/pages/9ae9975a/)
- [CHELSA气象数据](/pages/1849d6/)
- [CHIRPS Precipitation Daily Near-Real-Time: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, IMERG-based)](/pages/09ea3f30/)
- [CHIRPS Precipitation Daily Reanalysis: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, ERA5-based)](/pages/11a19c2e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
