---
title: "NCEP-DOE Reanalysis 2 (Gaussian Grid), Total Cloud Coverage"
date: 2026-11-03 12:00:00
---

# NCEP-DOE Reanalysis 2 (Gaussian Grid), Total Cloud Coverage

Original name: NCEP-DOE Reanalysis 2 (Gaussian Grid), Total Cloud Coverage

## What this dataset is

**This collection is no longer being updated. The Model is no longer being updated at the source.**

NCEP-DOE Reanalysis 2 project is using a state-of-the-art analysis/forecast system to perform
data assimilation using past data from 1979 through the previous year.

## Coverage and time range

- Coverage: Spatial: global; temporal: 1979 to 2026; resolution: 278,300 m (Gaussian grid).
- Time range: 1979-01-01 至 2026-03-01

## Resolution and specifications

- Spatial resolution: about 278,300 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| tcdc | Total cloud cover | 278300 |  |

## What you can use it for

- Call the dataset in Google Earth Engine and overlay boundaries, land cover and other layers for spatial analysis.
- Run long time-series analyses, extract regional statistics and export charts and GeoTIFFs.
- Use it as teaching and research sample data demonstrating ImageCollection filtering, compositing and visualization in Earth Engine.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/NCEP_DOE_RE2/total_cloud_coverage');
```

- Earth Engine ID: `NOAA/NCEP_DOE_RE2/total_cloud_coverage`
- Providers: NOAA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_NCEP_DOE_RE2_total_cloud_coverage

## License and citation

- License: proprietary
- Keywords: atmosphere, climate, cloud, geophysical, ncep, noaa, reanalysis
- 数据引用：[NCEP-DOE AMIP-II Reanalysis (R-2): M. Kanamitsu, W. Ebisuzaki, J. Woollen, S-K Yang,
J.J. Hnilo, M. Fiorino, and G. L. Potter. 1631-1643, Nov 2002, Bulletin of the American
Meteorological Society.](https://journals.ametsoc.org/view/journals/bams/83/11/bams-83-11-1631.xml).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [AERDB_D3_VIIRS_NOAA20.002: VIIRS/NOAA-20 Deep Blue Aerosol Optical Depth Daily L3 Global 1.0 Deg Grid](/en/pages/fa53b9c1/)
- [AERDB_D3_VIIRS_SNPP.002: VIIRS/SNPP Deep Blue Aerosol Optical Depth Daily L3 Global 1.0 Deg Grid](/en/pages/64c851e2/)
- [ERA5 Hourly — ECMWF Climate Reanalysis](/en/pages/2de85afd/)
- [ERA5 Hourly Pressure Levels — ECMWF Climate Reanalysis](/en/pages/e4d910e9/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
