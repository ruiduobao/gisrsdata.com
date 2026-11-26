---
title: "SRTM Digital Elevation Data Version 4"
date: 2026-11-03 12:00:00
---

# SRTM Digital Elevation Data Version 4

Original name: SRTM Digital Elevation Data Version 4

## What this dataset is

The Shuttle Radar Topography Mission (SRTM) digital elevation dataset was originally produced to provide consistent, high-quality elevation data at near-global scope. This version (Version 4, distributed by CGIAR-CSI) has been processed to fill data voids and to facilitate ease of use — the well-known "hole-filled" SRTM.

## Coverage and time range

- Coverage: Near-global
- Time range: 2000-02-11 至 2000-02-22

## Resolution and specifications

- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| elevation | Elevation | 90 |  |

## What you can use it for

- Terrain analysis almost anywhere on land: slope, aspect, hillshade
- Watershed and drainage delineation
- A standard global elevation base for modelling and mapping

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('CGIAR/SRTM90_V4');
```

- Earth Engine ID: `CGIAR/SRTM90_V4`
- Providers: NASA/CGIAR, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/CGIAR_SRTM90_V4

## License and citation

- License: proprietary
- Keywords: cgiar, dem, elevation, elevation-topography, geophysical, srtm, topography
- 数据引用：Jarvis, A., H.I. Reuter, A. Nelson, E. Guevara. 2008. Hole-filled
SRTM for the globe Version 4, available from the CGIAR-CSI SRTM
90m Database: [https://srtm.csi.cgiar.org](https://srtm.csi.cgiar.org).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [How to Download the ASTER Global DEM](/en/pages/da7fa1/)
- [CryoSat-2 Antarctica 1 km DEM](/en/pages/a0390601/)
- [Copernicus DEM GLO-30 (2024_1)](/en/pages/3bdccac6/)
- [Australian 5 m DEM (from LiDAR)](/en/pages/eb3acc3a/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
