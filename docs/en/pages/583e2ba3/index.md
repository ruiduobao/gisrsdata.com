---
title: "DEM-H: Australian Hydrologically Enforced DEM"
date: 2026-11-03 12:00:00
---

# DEM-H: Australian Hydrologically Enforced DEM

Original name: DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model

## What this dataset is

The Hydrologically Enforced Digital Elevation Model (DEM-H) is derived from the SRTM data acquired by NASA in February 2000. It has been hydrologically conditioned and drainage-enforced: it captures flow paths based on SRTM elevations and mapped stream lines, and supports delineation of catchments and related hydrological attributes.

DEM-H was derived from the 1-second smoothed DEM (DEM-S) by enforcing hydrological connectivity with the ANUDEM software, using selected AusHydro V1.6 (February 2010) 1:250,000 watercourse lines and lines derived from DEM-S to define the watercourses. The drainage enforcement produces a consistent representation of hydrological connectivity, with some elevation artifacts resulting from the enforcement. This product is suited to hydrological analysis such as catchment definition and flow routing. Note: there are unexpected negative values in a few areas — close to Canberra around (150.443044, -35.355281) with values of -55, and in Western Australia around (124.84, -16.44) with -43.

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

- Catchment delineation and flow routing
- Hydrological modelling that needs a drainage-consistent DEM
- Terrain input for flood and water-resource studies

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('AU/GA/DEM_1SEC/v10/DEM-H');
```

- Earth Engine ID: `AU/GA/DEM_1SEC/v10/DEM-H`
- Providers: Geoscience Australia, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H

## License and citation

- License: CC-BY-4.0
- Keywords: australia, dem, elevation, elevation-topography, ga, geophysical, geoscience-australia, smoothed, srtm
- 数据引用：Geoscience Australia, 2015. Digital Elevation Model (DEM) of Australia
derived from LiDAR 5 Metre Grid. Geoscience Australia, Canberra.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Australian 5 m DEM (from LiDAR)](/en/pages/eb3acc3a/)
- [DEM-S: Australian Smoothed DEM](/en/pages/ada188d3/)
- [How to Download the ASTER Global DEM](/en/pages/da7fa1/)
- [CryoSat-2 Antarctica 1 km DEM](/en/pages/a0390601/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
