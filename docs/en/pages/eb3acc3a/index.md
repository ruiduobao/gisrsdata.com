---
title: "Australian 5 m DEM (from LiDAR)"
date: 2026-11-03 12:00:00
---

# Australian 5 m DEM (from LiDAR)

Original name: Australian 5M DEM

## What this dataset is

This is a national 5 m (bare-earth) DEM of Australia derived from LiDAR. It was compiled from some 236 individual LiDAR surveys flown between 2001 and 2015, covering more than 245,000 km² — Australia's populated coastal zone, floodplain surveys within the Murray–Darling Basin, and surveys of major and minor population centres. All available 1 m LiDAR-derived DEMs were compiled and resampled with a neighborhood-mean method to 5 m for each survey area, then merged into a single dataset for each state; each state's dataset is a separate image in this collection.

The product is a long-term collaboration between Geoscience Australia, the Cooperative Research Centre for Spatial Information (CRCSI), climate-change and environment departments, state and territory jurisdictions, local government and the Murray Darling Basin Authority, under the National Elevation Data Framework and the Coastal and Urban DEM Program. Source data were captured to standards generally consistent with the Australian ICSM LiDAR acquisition specifications, requiring a fundamental vertical accuracy of at least 0.30 m (95% confidence) and horizontal accuracy of at least 0.80 m (95% confidence). Note: several areas close to Perth have null (NaN) values, around (115.85, -31.99), (115.72, -33.75) and (115.10, -33.43).

## Coverage and time range

- Coverage: Australia (populated coastal zone, Murray–Darling Basin floodplains, major and minor population centres)
- Time range: 2015-12-01 至 2015-12-01

## Resolution and specifications

- Spatial resolution: about 5 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| elevation | Elevation | 5 |  |

## What you can use it for

- High-resolution terrain analysis of coastal and urban Australia
- Floodplain and inundation modelling in the Murray–Darling Basin
- A bare-earth elevation reference for infrastructure and planning

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('AU/GA/AUSTRALIA_5M_DEM');
```

- Earth Engine ID: `AU/GA/AUSTRALIA_5M_DEM`
- Providers: Geoscience Australia, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/AU_GA_AUSTRALIA_5M_DEM

## License and citation

- License: CC-BY-4.0
- Keywords: australia, dem, elevation, elevation-topography, ga, geophysical, geoscience-australia, lidar
- 数据引用：Geoscience Australia, 2015. Digital Elevation Model (DEM) of Australia
derived from LiDAR 5 Metre Grid. Geoscience Australia, Canberra.

- DOI：10.4225/25/5652419862E23

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [DEM-S: Australian Smoothed DEM](/en/pages/ada188d3/)
- [DEM-H: Australian Hydrologically Enforced DEM](/en/pages/583e2ba3/)
- [How to Download the ASTER Global DEM](/en/pages/da7fa1/)
- [CryoSat-2 Antarctica 1 km DEM](/en/pages/a0390601/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
