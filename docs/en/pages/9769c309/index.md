---
title: "AHN3 Netherlands 0.5 m Elevation (DSM & DTM)"
date: 2026-11-03 12:00:00
---

# AHN3 Netherlands 0.5 m Elevation (DSM & DTM)

Original name: AHN3: Netherlands AHN 0.5m

## What this dataset is

The Actueel Hoogtebestand Nederland (AHN) provides detailed, precise elevation data for the whole of the Netherlands, collected from helicopters and aircraft using laser technology with a vertical accuracy of 5 cm.

AHN3 contains the 0.5 m DSM and DTM variables for the period 2014–2019. The Digital Terrain Model (DTM) represents the elevation of the ground, while the Digital Surface Model (DSM) represents the elevation of the tallest surfaces at each point.

## Coverage and time range

- Coverage: The Netherlands
- Time range: 2014-01-01 至 2019-01-01

## Resolution and specifications

- Spatial resolution: about 0.5 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| dtm | Elevation of the ground | 0.5 |  |
| dsm | Elevation of the tallest surfaces at that point | 0.5 |  |

## What you can use it for

- High-accuracy terrain, hydrology and flood-risk analysis
- Estimate building and vegetation heights by comparing DSM and DTM
- Elevation base layer for urban planning and infrastructure design

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('AHN/AHN3');
```

- Earth Engine ID: `AHN/AHN3`
- Providers: AHN, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN3

## License and citation

- License: CC0-1.0
- Keywords: ahn, dem, elevation, elevation-topography, geophysical, lidar, netherlands
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [How to Download the ASTER Global DEM](/en/pages/da7fa1/)
- [CryoSat-2 Antarctica 1 km DEM](/en/pages/a0390601/)
- [SRTM Digital Elevation Data Version 4](/en/pages/81d193ff/)
- [Copernicus DEM GLO-30 (2024_1)](/en/pages/3bdccac6/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
