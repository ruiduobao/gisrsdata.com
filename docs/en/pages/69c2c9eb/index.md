---
title: "NCEP/NCAR Reanalysis Data, Water Vapor [deprecated]"
date: 2026-11-03 12:00:00
---

# NCEP/NCAR Reanalysis Data, Water Vapor [deprecated]

Original name: NCEP/NCAR Reanalysis Data, Water Vapor [deprecated]

## What this dataset is

The NCEP/NCAR Reanalysis Project is a joint project between the National
Centers for Environmental Prediction (NCEP, formerly "NMC") and the
National Center for Atmospheric Research (NCAR). The goal of this joint
effort is to produce new atmospheric analyses using historical data as
well as to produce analyses of the current atmospheric state (Climate Data
Assimilation System, CDAS). The NCEP/NCAR Reanalysis 1 project is using a
state-of-the-art analysis/forecast system to perform data assimilation using
past data from 1948 to March 2026. The data have 6-hour temporal
resolution (0000, 0600, 1200, and 1800 UTC) and 2.5 degree spatial
resolution.

NCEP discontinued this dataset in March 2026 and it is no longer being
updated.

## Coverage and time range

- Coverage: Coverage: global; time span: 1948 to 2026; resolution: 278,300 m.
- Time range: 1948-01-01 至 2026-03-18

## Resolution and specifications

- Spatial resolution: about 278,300 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| pr_wtr | Total column water vapor | 278300 |  |

## What you can use it for

- Atmospheric reanalysis and climate research
- Weather analysis
- Climate monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NCEP_RE/surface_wv');
```

- Earth Engine ID: `NCEP_RE/surface_wv`
- Providers: NCEP, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NCEP_RE_surface_wv

## License and citation

- License: proprietary
- Keywords: atmosphere, climate, geophysical, ncep, noaa, precipitable, reanalysis, vapor, weather-and-climate
- 数据引用：Kalnay et al., 1996, The NCEP/NCAR 40-Year Reanalysis Project. Bull. Amer.
Meteor. Soc., 77, 437-471.
[doi:10.1175/1520-0477(1996)077<0437:TNYRP\\>2.0.CO;2](https://doi.org/10.1175/1520-0477(1996)077<0437:TNYRP>2.0.CO;2).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [AERDB_D3_VIIRS_NOAA20.002: VIIRS/NOAA-20 Deep Blue Aerosol Optical Depth Daily L3 Global 1.0 Deg Grid](/en/pages/fa53b9c1/)
- [AERDB_D3_VIIRS_SNPP.002: VIIRS/SNPP Deep Blue Aerosol Optical Depth Daily L3 Global 1.0 Deg Grid](/en/pages/64c851e2/)
- [ERA5 Hourly — ECMWF Climate Reanalysis](/en/pages/2de85afd/)
- [ERA5 Hourly Pressure Levels — ECMWF Climate Reanalysis](/en/pages/e4d910e9/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
