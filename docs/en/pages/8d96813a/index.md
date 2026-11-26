---
title: "Landsat Global Land Survey 2005, Landsat 7 scenes"
date: 2026-11-03 12:00:00
---

# Landsat Global Land Survey 2005, Landsat 7 scenes

Original name: Landsat Global Land Survey 2005, Landsat 7 scenes

## What this dataset is

The GLS2005 data set is a collection of 9500
orthorectified leaf-on medium-resolution satellite images collected between
2004 and 2007 and covering the Earth's land masses. GLS2005 uses mainly Landsat
5 and gap-filled Landsat 7 data with EO-1 ALI and Terra ASTER data filling in
any data holes.

This collection contains just the subset of the GLS2005 images
      from the L7 ETM+ sensor.

## Coverage and time range

- Coverage: Coverage: global land; time span: 2003 to 2008; resolution: 30 m.
- Time range: 2003-07-29 至 2008-07-29

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| 10 | Blue | 30 | 0.45 - 0.52 &mu;m |
| 20 | Green | 30 | 0.52 - 0.60 &mu;m |
| 30 | Red | 30 | 0.63 - 0.69 &mu;m |
| 40 | Near infrared | 30 | 0.76 - 0.90 &mu;m |
| 50 | Shortwave infrared 1 | 30 | 1.55 - 1.75 &mu;m |
| 60 | Thermal Infrared 1. Resampled from 60m to 30m. | 60 | 10.40 - 12.50 &mu;m |
| 70 | Shortwave infrared 2 | 30 | 2.08 - 2.35 &mu;m |

## What you can use it for

- Historical Landsat imagery analysis
- Long-term land-cover change backtracking
- Global Land Survey baseline data

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('LANDSAT/GLS2005_L7');
```

- Earth Engine ID: `LANDSAT/GLS2005_L7`
- Providers: USGS, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_GLS2005_L7

## License and citation

- License: PDDL-1.0
- Keywords: etm, gls, l7, landsat, radiance, satellite-imagery, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/en/pages/4a61128e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
