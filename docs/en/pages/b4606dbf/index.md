---
title: "Oxford MAP LST: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature [deprecated]"
date: 2026-11-03 12:00:00
---

# Oxford MAP LST: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature [deprecated]

Original name: Oxford MAP LST: Malaria Atlas Project Gap-Filled Daytime Land Surface Temperature [deprecated]

## What this dataset is

The underlying dataset for this daytime product is MODIS land surface
temperature data (MOD11A2), which was gap-filled using the approach
outlined in Weiss et al. (2014) to eliminate missing data caused by factors
such as cloud cover. Gap-free outputs were then aggregated temporally and
spatially to produce the monthly &asymp;5km product.

This dataset was produced by Harry Gibson and Daniel Weiss of the
Malaria Atlas Project (Big Data Institute, University of Oxford,
United Kingdom, [https://malariaatlas.org/](https://malariaatlas.org/)).

## Coverage and time range

- Coverage: Spatial: global; temporal: 2001 to 2015 (monthly); resolution: 5,000 m.
- Time range: 2001-03-01 至 2015-06-01

## Resolution and specifications

- Spatial resolution: about 5,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Mean | The mean value of daytime land surface temperature for each aggregated pixel. | 5000 |  |
| FilledProportion | A quality control band that indicates the percentage of each resulting pixel that was comprised of raw data (as opposed to gap-filled estimates). | 5000 |  |

## What you can use it for

- Provide long time-series environmental variables for malaria-transmission studies.
- Model disease ecology and vector distributions.
- Combine with other health-geography data.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('Oxford/MAP/LST_Day_5km_Monthly');
```

- Earth Engine ID: `Oxford/MAP/LST_Day_5km_Monthly`
- Providers: Oxford Malaria Atlas Project, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_LST_Day_5km_Monthly

## License and citation

- License: CC-BY-NC-SA-4.0
- Keywords: lst, map, oxford, surface-temperature, weather-and-climate
- 数据引用：Weiss, D.J., P.M. Atkinson, S. Bhatt, B. Mappin, S.I. Hay & P.W. Gething
(2014) An effective approach for gap-filling continental scale remotely
sensed time-series. ISPRS Journal of Photogrammetry and Remote Sensing,
98, 106-118.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CPC Global Unified Temperature](/en/pages/8042cb38/)
- [CPC Global Unified Gauge-Based Analysis of Daily Precipitation](/en/pages/9d6b70e8/)
- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)
- [ERA5 Daily Aggregates — ECMWF Climate Reanalysis](/en/pages/9ae9975a/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
