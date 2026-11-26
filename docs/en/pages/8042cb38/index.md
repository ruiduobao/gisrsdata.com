---
title: "CPC Global Unified Temperature"
date: 2026-11-03 12:00:00
---

# CPC Global Unified Temperature

Original name: CPC Global Unified Temperature

## What this dataset is

This dataset provides a gridded analysis of daily surface air temperature
over global land areas, including daily maximum (Tmax), minimum (Tmin)
temperatures. Spanning from 1979 to the present, the data is presented on
0.5-degree latitude/longitude grids, aligning with the resolution of CPC's
gauge-based global daily precipitation analysis. The construction of this
dataset considers orographic effects. Its primary purpose is to support
climate monitoring and forecast verification activities. Input data
originates from the CPC archive of GTS (Global Telecommunication System)
daily reports, incorporating Tmax and Tmin data from approximately 6,000 to
7,000 global stations.

Refer [this](https://ftp.cpc.ncep.noaa.gov/precip/PEOPLE/wd52ws/global_temp/CPC-GLOBAL-T.pdf)
for technical documentation.

## Coverage and time range

- Coverage: Coverage: global land; time span: 1979 to 2026; resolution: 55,500 m.
- Time range: 1979-01-01 至 2026-10-31

## Resolution and specifications

- Spatial resolution: about 55,500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| tmax | daily maximum temperature | 55500 |  |
| tmin | daily minimum temperature | 55500 |  |
| nmax | number of reports for maximum temperature | 55500 |  |
| nmin | number of reports for minimum temperature | 55500 |  |

## What you can use it for

- Global temperature monitoring
- Climate analysis
- Forecast verification

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/CPC/Temperature');
```

- Earth Engine ID: `NOAA/CPC/Temperature`
- Providers: NOAA Physical Sciences Laboratory, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_CPC_Temperature

## License and citation

- License: proprietary
- Keywords: climate, daily, noaa, precipitation, weather, weather-and-climate
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CPC Global Unified Gauge-Based Analysis of Daily Precipitation](/en/pages/9d6b70e8/)
- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)
- [ERA5 Daily Aggregates — ECMWF Climate Reanalysis](/en/pages/9ae9975a/)
- [GCOM-C/SGLI L3 Land Surface Temperature (V1)](/en/pages/a4b5eab0/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
