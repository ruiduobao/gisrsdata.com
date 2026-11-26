---
title: "CPC Global Unified Gauge-Based Analysis of Daily Precipitation"
date: 2026-11-03 12:00:00
---

# CPC Global Unified Gauge-Based Analysis of Daily Precipitation

Original name: CPC Global Unified Gauge-Based Analysis of Daily Precipitation

## What this dataset is

The CPC Unified Gauge-Based Analysis of Global Daily Precipitation dataset
offers daily precipitation estimates over land from 1979 to the present.
Developed by NOAA's Climate Prediction Center (CPC), it leverages an optimal
interpolation technique to combine data from a global network of rain
gauges, with over 30,000 gauges contributing to the retrospective version
(1979-2005) and around 17,000 to the real-time version (2006-present).
Data is provided at a 0.5-degree resolution and includes both precipitation
amounts (in 0.1 mm) and the number of gauges used for each grid cell,
allowing users to assess data quality.

The dataset's quality is acknowledged to be poor over tropical Africa and
Antarctica, and generally varies with gauge density. Real-time data is
subject to revision as more complete station data becomes available.

[This](https://ftp.cpc.ncep.noaa.gov/precip/CPC_UNI_PRCP/GAUGE_GLB/DOCU/)
folder has all the technical documentation.

NOTE: The historical data spanning from 1979 to 2005 is not available in the
current version of the dataset.

## Coverage and time range

- Coverage: Coverage: global land; time span: 2006 to 2026; resolution: 55,500 m.
- Time range: 2006-01-01 至 2026-10-30

## Resolution and specifications

- Spatial resolution: about 55,500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| precipitation | Daily total precipitation estimate in 0.1 mm | 55500 |  |
| num_gauges | Number of rain gauges contributing to the precipitation estimate within the 0.5-degree grid cell | 55500 |  |

## What you can use it for

- Global precipitation monitoring
- Climate analysis
- Hydrological applications

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/CPC/Precipitation');
```

- Earth Engine ID: `NOAA/CPC/Precipitation`
- Providers: NOAA Physical Sciences Laboratory, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_CPC_Precipitation

## License and citation

- License: proprietary
- Keywords: daily, noaa, precipitation, weather
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CPC Global Unified Temperature](/en/pages/8042cb38/)
- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)
- [ERA5 Daily Aggregates — ECMWF Climate Reanalysis](/en/pages/9ae9975a/)
- [GCOM-C/SGLI L3 Land Surface Temperature (V1)](/en/pages/a4b5eab0/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
