---
title: "Daymet V4: Daily Surface Weather and Climatological Summaries"
date: 2026-11-03 12:00:00
---

# Daymet V4: Daily Surface Weather and Climatological Summaries

Original name: Daymet V4: Daily Surface Weather and Climatological Summaries

## What this dataset is

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

## Coverage and time range

- Coverage: Coverage: continental North America, Hawaii, and Puerto Rico; time span: 1980 to 2025; resolution: 1,000 m.
- Time range: 1980-01-01 至 2025-12-31

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| dayl | Duration of the daylight period. Based on the period of the day during which the sun is above a hypothetical flat horizon. | 1000 |  |
| prcp | Daily total precipitation, sum of all forms converted to water-equivalent. | 1000 |  |
| srad | Incident shortwave radiation flux density, taken as an average over the daylight period of the day. | 1000 |  |
| swe | Snow water equivalent, the amount of water contained within the snowpack. | 1000 |  |
| tmax | Daily maximum 2-meter air temperature. | 1000 |  |
| tmin | Daily minimum 2-meter air temperature. | 1000 |  |
| vp | Daily average partial pressure of water vapor. | 1000 |  |

## What you can use it for

- Daily weather and climate analysis
- Hydrological and ecological modeling
- Agrometeorological applications

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/ORNL/DAYMET_V4');
```

- Earth Engine ID: `NASA/ORNL/DAYMET_V4`
- Providers: NASA ORNL DAAC at Oak Ridge National Laboratory, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_ORNL_DAYMET_V4
* [ORNL DAAC Dataset Documentation](https://daac.ornl.gov/DAYMET/guides/Daymet_Daily_V4.html)
* [Dataset Documentation](https://daac.ornl.gov/daacdata/daymet/Daymet_Daily_V4/comp/Daymet_Daily_V4.pdf)
* [The THREDDS location for this Collection](https://thredds.daac.ornl.gov/thredds/catalogs/ornldaac/Regional_and_Global_Data/DAYMET_COLLECTIONS/DAYMET_COLLECTIONS.html)

## License and citation

- License: proprietary
- Keywords: climate, daily, daylight, daymet, flux, geophysical, nasa, ornl, precipitation, radiation, snow, temperature, vapor, water, weather, weather-and-climate
- 数据引用：Thornton, M.M., R. Shrestha, Y. Wei, P.E. Thornton, S-C. Kao, and B.E. Wilson. 2022.
Daymet: Daily Surface Weather Data on a 1-km Grid for North America, Version 4 R1.
ORNL DAAC, Oak Ridge, Tennessee, USA. https://doi.org/10.3334/ORNLDAAC/2129

- DOI：10.3334/ORNLDAAC/2129

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Daymet V3: Daily Surface Weather and Climatological Summaries [deprecated]](/pages/b11f9c4f/)
- [ECMWF Near-Realtime IFS Atmospheric Forecasts](/en/pages/3fdfa56d/)
- [ERA5-Land Monthly Averaged by Hour of Day — ECMWF Climate Reanalysis](/en/pages/39c04517/)
- [ERA5-Land Monthly Aggregated — ECMWF Climate Reanalysis](/en/pages/0889ecdc/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
