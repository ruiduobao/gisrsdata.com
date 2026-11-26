---
title: "DEM-S: Australian Smoothed DEM"
date: 2026-11-03 12:00:00
---

# DEM-S: Australian Smoothed DEM

Original name: DEM-S: Australian Smoothed Digital Elevation Model

## What this dataset is

The Smoothed Digital Elevation Model (DEM-S) is derived from the SRTM data acquired by NASA in February 2000. It represents ground surface topography (excluding vegetation features) and has been smoothed to reduce noise and improve the representation of surface shape. The smoothing is adaptive: flatter and noisier areas are smoothed more than hilly or cleaner areas.

DEM-S supports calculating local terrain attributes such as slope, aspect and curvature, which could not be reliably derived from the unsmoothed 1-second DEM because of noise. Note: there are unexpected negative values in a few areas — close to Canberra around (150.443044, -35.355281) with values of -55, and in Western Australia around (124.84, -16.44) with -43.

## Coverage and time range

- Coverage: Australia
- Time range: 2010-02-01 至 2010-02-01

## Resolution and specifications

- Spatial resolution: about 30.92 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| elevation | Elevation | 30.92 |  |

## What you can use it for

- Derive slope, aspect and curvature reliably
- General terrain analysis across Australia
- A cleaner SRTM-based base DEM for further processing

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('AU/GA/DEM_1SEC/v10/DEM-S');
```

- Earth Engine ID: `AU/GA/DEM_1SEC/v10/DEM-S`
- Providers: Geoscience Australia, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S

## License and citation

- License: CC-BY-4.0
- Keywords: australia, dem, elevation, elevation-topography, ga, geophysical, geoscience-australia, smoothed, srtm
- 数据引用：Geoscience Australia, 2015. Digital Elevation Model (DEM) of Australia
derived from LiDAR 5 Metre Grid. Geoscience Australia, Canberra.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Australian 5 m DEM (from LiDAR)](/en/pages/eb3acc3a/)
- [DEM-H: Australian Hydrologically Enforced DEM](/en/pages/583e2ba3/)
- [How to Download the ASTER Global DEM](/en/pages/da7fa1/)
- [CryoSat-2 Antarctica 1 km DEM](/en/pages/a0390601/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
