---
title: "Daymet V3: Daily Surface Weather and Climatological Summaries [deprecated]"
date: 2026-11-03 12:00:00
---

# Daymet V3: Daily Surface Weather and Climatological Summaries [deprecated]

Original name: Daymet V3: Daily Surface Weather and Climatological Summaries [deprecated]

## What this dataset is

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

## Coverage and time range

- Coverage: Coverage: North America (United States, Mexico, Canada, Hawaii, and Puerto Rico); time span: 1980 to 2019; resolution: 1,000 m.
- Time range: 1980-01-01 至 2019-12-31

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
var dataset = ee.ImageCollection('NASA/ORNL/DAYMET_V3');
```

- Earth Engine ID: `NASA/ORNL/DAYMET_V3`
- Providers: NASA ORNL DAAC at Oak Ridge National Laboratory, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_ORNL_DAYMET_V3
* [ORNL DAAC Dataset Documentation](https://daac.ornl.gov/DAYMET/guides/Daymet_V3_CFMosaics.html)
* [Dataset Documentation](https://daac.ornl.gov/daacdata/daymet/Daymet_V3_CFMosaics/comp/Daymet_V3_CFMosaics.pdf)
* [The THREDDS location for this Collection](https://thredds.daac.ornl.gov/thredds/catalog/ornldaac/1328/catalog.html)

## License and citation

- License: proprietary
- Keywords: climate, daily, daylight, daymet, flux, geophysical, nasa, ornl, precipitation, radiation, snow, temperature, vapor, water, weather, weather-and-climate
- 数据引用：Thornton, P.E., M.M. Thornton, B.W. Mayer, Y. Wei, R. Devarakonda,
R.S.Vose, and R.B. Cook. {YEAR}. Daymet: Daily Surface Weather Data on a
1-km Grid for North America, Version3. ORNL DAAC, Oak Ridge, Tennessee, USA

- DOI：10.3334/ORNLDAAC/1328

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Daymet V4: Daily Surface Weather and Climatological Summaries](/pages/7b6d050e/)
- [ECMWF Near-Realtime IFS Atmospheric Forecasts](/en/pages/3fdfa56d/)
- [ERA5-Land Monthly Averaged by Hour of Day — ECMWF Climate Reanalysis](/en/pages/39c04517/)
- [ERA5-Land Monthly Aggregated — ECMWF Climate Reanalysis](/en/pages/0889ecdc/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
