---
title: "Greenland Ice & Ocean Mask - Greenland Mapping Project (GIMP)"
date: 2026-11-03 12:00:00
---

# Greenland Ice & Ocean Mask - Greenland Mapping Project (GIMP)

Original name: Greenland Ice & Ocean Mask - Greenland Mapping Project (GIMP)

## What this dataset is

This dataset provides complete land ice and ocean
classification masks at 15 m for the Greenland ice sheet.
Ice cover was mapped using
a combination of orthorectified panchromatic (band 8)
imagery from the Landsat 7 Enhanced Thematic Mapper
Plus (ETM+), distributed by the USGS, and RADARSAT-1
Synthetic Amplitude Radar (SAR) amplitude images produced
and distributed by I. Joughin at the Applied Physics
Laboratory, University of Washington.

The Landsat imagery was acquired for the months of July
through September in 1999, 2000 and 2001 (mostly 2000)
and the RADARSAT imagery was acquired in fall of 2000.

## Coverage and time range

- Coverage: Spatial: Greenland ice sheet; temporal: 1999 to 2002; resolution: 15 m.
- Time range: 1999-06-30 至 2002-09-04

## Resolution and specifications

- Spatial resolution: about 15 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| ocean_mask | Ocean mask | 15 |  |
| ice_mask | Ice mask | 15 |  |

## What you can use it for

- Map Greenland ice-sheet extent and coastline.
- Provide ice/ocean masks for ice-velocity and elevation products.
- Analyse ice-margin change.

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('OSU/GIMP/2000_ICE_OCEAN_MASK');
```

- Earth Engine ID: `OSU/GIMP/2000_ICE_OCEAN_MASK`
- Providers: NASA NSIDC DAAC at CIRES, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/OSU_GIMP_2000_ICE_OCEAN_MASK

## License and citation

- License: proprietary
- Keywords: arctic, cryosphere, gimp, greenland, ice, mask, nasa, polar
- 数据引用：Howat, I.M., A. Negrete, B.E. Smith, 2014, The Greenland Ice
Mapping Project (GIMP) land classification and surface elevation
datasets, The Cryosphere, 8, 1509-1518,
[doi:10.5194/tc-8-1509-2014](https://doi.org/10.5194/tc-8-1509-2014)
[article pdf](https://www.the-cryosphere.net/8/1509/2014/tc-8-1509-2014.pdf)

- DOI：10.5067/B8X58MQBFUPA

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MEaSUREs Greenland Ice Velocity: Selected Glacier Site Velocity Maps from Optical Images Version 2](/pages/da7120c8/)
- [CFSR: Climate Forecast System Reanalysis Harmonized](/en/pages/a2388741/)
- [CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products Harmonized](/en/pages/a1cd75f1/)
- [Daymet V4: Daily Surface Weather and Climatological Summaries](/en/pages/7b6d050e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
