---
title: "AHN2 Netherlands 0.5 m DEM, Interpolated"
date: 2026-11-03 12:00:00
---

# AHN2 Netherlands 0.5 m DEM, Interpolated

Original name: AHN Netherlands 0.5m DEM, Interpolated

## What this dataset is

The AHN DEM is a 0.5 m digital elevation model covering the Netherlands, generated from LiDAR data taken in the spring between 2007 and 2012.

It contains ground-level samples with everything above ground (buildings, bridges, trees, etc.) removed. This is the interpolated version: the areas where objects were removed are filled with interpolated values. The point cloud was converted to a 0.5 m grid using a squared inverse-distance weighting method. Note: a small number of tiles listed in the manifest are only available at a lower resolution and are not included.

## Coverage and time range

- Coverage: The Netherlands
- Time range: 2012-01-01 至 2012-01-01

## Resolution and specifications

- Spatial resolution: about 0.5 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| elevation | Elevation | 0.5 |  |

## What you can use it for

- Fine-scale terrain analysis and surface-water flow modelling
- A high-accuracy ground reference for flood inundation modelling and drainage planning
- Base elevation layer for 3D city modelling and infrastructure planning

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('AHN/AHN2_05M_INT');
```

- Earth Engine ID: `AHN/AHN2_05M_INT`
- Providers: AHN, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_INT

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
