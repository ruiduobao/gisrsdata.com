---
title: "Landsat Global Land Survey 1975 Mosaic"
date: 2026-11-03 12:00:00
---

# Landsat Global Land Survey 1975 Mosaic

Original name: Landsat Global Land Survey 1975 Mosaic

## What this dataset is

The Global Land Survey (GLS) 1975 is a
global collection of imagery from the Landsat Multispectral Scanner
(MSS).  Most scenes were acquired by Landsat 1&ndash;3 during the
years from 1972&ndash;1983.  A few gaps in the Landsat 1&ndash;3 data
have been filled with scenes acquired by Landsat 4&ndash;5 during the
years 1982&ndash;1987.

These data contain 4 spectral bands:
Green, Red, an NIR band, and a SWIR band.  In the typical false-color
presentation the images appear red because the NIR band, displayed as
red, highlights vegetation.

All scenes in the collection are included in this composite image.

## Coverage and time range

- Coverage: Coverage: global land; time: around 1975; resolution: 60 m.
- Time range: 1975-01-01 至 1976-01-01

## Resolution and specifications

- Spatial resolution: about 60 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| 10 | Green | 60 | 0.50 - 0.60 &mu;m |
| 20 | Red | 60 | 600-700 &mu;m |
| 30 | Near infrared | 60 | 0.70-0.80 &mu;m |
| 40 | Short-wavelength infrared | 60 | 0.80-1.10 &mu;m |

## What you can use it for

- Historical Landsat imagery analysis
- Long-term land-cover change backtracking
- Global Land Survey baseline data

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('LANDSAT/GLS1975_MOSAIC');
```

- Earth Engine ID: `LANDSAT/GLS1975_MOSAIC`
- Providers: USGS, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_GLS1975_MOSAIC

## License and citation

- License: PDDL-1.0
- Keywords: gls, landsat, radiance, satellite-imagery, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/en/pages/4a61128e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
