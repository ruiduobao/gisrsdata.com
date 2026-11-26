---
title: "RTMA: Real-Time Mesoscale Analysis"
date: 2026-11-03 12:00:00
---

# RTMA: Real-Time Mesoscale Analysis

Original name: RTMA: Real-Time Mesoscale Analysis

## What this dataset is

The Real-Time Mesoscale Analysis (RTMA) is a high-spatial and temporal
resolution analysis for near-surface weather conditions.  This dataset
includes hourly analyses at 2.5 km for CONUS.

## Coverage and time range

- Coverage: Spatial: CONUS; temporal: 2011 to present (hourly); resolution: 2,500 m.
- Time range: 2011-01-01 至 2026-11-02

## Resolution and specifications

- Spatial resolution: about 2,500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| HGT | Model terrain elevation | 2500 |  |
| PRES | Pressure | 2500 |  |
| TMP | Temperature | 2500 |  |
| DPT | Dew point temperature | 2500 |  |
| UGRD | U-component of wind | 2500 |  |
| VGRD | V-component of wind | 2500 |  |
| SPFH | Specific humidity | 2500 |  |
| WDIR | Wind direction (from which blowing) | 2500 |  |
| WIND | Wind speed | 2500 |  |
| GUST | Wind speed (gust) | 2500 |  |
| VIS | Visibility | 2500 |  |
| TCDC | Total cloud cover | 2500 |  |
| ACPC01 | Total precipitation | 2500 |  |

## What you can use it for

- Call the dataset in Google Earth Engine and overlay boundaries, land cover and other layers for spatial analysis.
- Run long time-series analyses, extract regional statistics and export charts and GeoTIFFs.
- Use it as teaching and research sample data demonstrating ImageCollection filtering, compositing and visualization in Earth Engine.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/NWS/RTMA');
```

- Earth Engine ID: `NOAA/NWS/RTMA`
- Providers: NOAA/NWS, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_NWS_RTMA

## License and citation

- License: proprietary
- Keywords: atmosphere, climate, cloud, geophysical, humidity, noaa, nws, precipitation, pressure, rtma, surface, temperature, visibility, weather, wind
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [AERDB_D3_VIIRS_NOAA20.002: VIIRS/NOAA-20 Deep Blue Aerosol Optical Depth Daily L3 Global 1.0 Deg Grid](/en/pages/fa53b9c1/)
- [AERDB_D3_VIIRS_SNPP.002: VIIRS/SNPP Deep Blue Aerosol Optical Depth Daily L3 Global 1.0 Deg Grid](/en/pages/64c851e2/)
- [ERA5 Hourly — ECMWF Climate Reanalysis](/en/pages/2de85afd/)
- [ERA5 Hourly Pressure Levels — ECMWF Climate Reanalysis](/en/pages/e4d910e9/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
