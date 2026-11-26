---
title: "ETOPO1: Global 1 Arc-Minute Elevation"
date: 2026-11-03 12:00:00
---

# ETOPO1: Global 1 Arc-Minute Elevation

Original name: ETOPO1: Global 1 Arc-Minute Elevation

## What this dataset is

ETOPO1 is a 1 arc-minute global relief model of Earth''s
surface that integrates land topography and ocean bathymetry. It
was built from numerous global and regional data sets. It contains
two elevation bands: ice_surface and bedrock.

## Coverage and time range

- Coverage: Spatial: global; temporal: single epoch, 2008; resolution: 1,855 m (1 arc-minute).
- Time range: 2008-08-01 至 2008-08-01

## Resolution and specifications

- Spatial resolution: about 1,855 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| bedrock | Elevation at ground level and at the base of the Antarctic and Greenland ice sheets | 1855 |  |
| ice_surface | Elevation at ground level and at the top of the Antarctic and Greenland ice sheets | 1855 |  |

## What you can use it for

- Serve as a global elevation base for terrain visualization and 3D modelling.
- Provide terrain input for tsunami, flood-inundation and other coastal simulations.
- Compare and mosaic with other DEMs to build regional elevation products.

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('NOAA/NGDC/ETOPO1');
```

- Earth Engine ID: `NOAA/NGDC/ETOPO1`
- Providers: NOAA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_NGDC_ETOPO1

## License and citation

- License: proprietary
- Keywords: bedrock, dem, elevation, elevation-topography, geophysical, ice, noaa, topography
- 数据引用：Amante, C. and B. W. Eakins, ETOPO1 1 Arc-Minute Global Relief
Model: Procedures, Data Sources and Analysis. NOAA Technical Memorandum
NESDIS NGDC-24, 19 pp, March 2009.

- DOI：10.7289/V5C8276M

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CFSR: Climate Forecast System Reanalysis Harmonized](/en/pages/a2388741/)
- [CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products Harmonized](/en/pages/a1cd75f1/)
- [Daymet V4: Daily Surface Weather and Climatological Summaries](/en/pages/7b6d050e/)
- [ECMWF Near-Realtime IFS Atmospheric Forecasts](/en/pages/3fdfa56d/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
