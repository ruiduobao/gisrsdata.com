---
title: "CryoSat-2 Antarctica 1 km DEM"
date: 2026-11-03 12:00:00
---

# CryoSat-2 Antarctica 1 km DEM

Original name: CryoSat-2 Antarctica 1km DEM

## What this dataset is

This dataset is a digital elevation model (DEM) of the Antarctic ice sheet and ice shelves based on observations recorded by the CryoSat-2 satellite radar altimeter between July 2010 and July 2016.

The DEM is formed from spatio-temporal fits to elevation measurements accumulated within 1, 2, and 5 km grid cells, and is posted at the modal resolution of 1 km. The median and root mean square difference between the DEM and 2.3×10^7 airborne laser altimeter measurements acquired during NASA Operation IceBridge campaigns are -0.30 and 13.50 m, respectively.

The DEM uncertainty rises in regions of high slope, especially where elevation measurements were acquired in low-resolution mode; taking this into account, the average accuracy is estimated to be 9.5 m.

## Coverage and time range

- Coverage: Antarctica
- Time range: 2010-07-01 至 2016-07-01

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| elevation | Antarctic ice sheet and ice shelf elevation. | 1000 |  |
| data_composition | Data processing method of elevation per grid cell. | 1000 |  |
| slope | Slope derived from elevation gradient. | 1000 |  |
| z_smoothed | Smoothed version of elevation model using a median filter. | 1000 |  |
| z_uncertainty | Certainty of elevation model derived from RMS of elevation residuals in observed grid cells and the kriging variance error in interpolated grid cells. | 1000 |  |

## What you can use it for

- Antarctic ice sheet elevation and change studies
- Ice shelf research and polar modelling
- Reference elevation for altimetry validation

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('CPOM/CryoSat2/ANTARCTICA_DEM');
```

- Earth Engine ID: `CPOM/CryoSat2/ANTARCTICA_DEM`
- Providers: CPOM, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/CPOM_CryoSat2_ANTARCTICA_DEM

## License and citation

- License: proprietary
- Keywords: antarctica, cpom, cryosat-2, dem, elevation, elevation-topography, polar
- 数据引用：Slater, T., Shepherd, A., McMillan, M., Muir, A., Gilbert, L.,
Hogg, A. E., Konrad, H. and Parrinello, T.: A new Digital Elevation
Model of Antarctica derived from CryoSat-2 altimetry, The Cryosphere,
[doi:10.5194/tc-2017-223](https://doi.org/10.5194/tc-2017-223), 2018

- DOI：10.5194/tc-2017-223

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [How to Download the ASTER Global DEM](/en/pages/da7fa1/)
- [SRTM Digital Elevation Data Version 4](/en/pages/81d193ff/)
- [Copernicus DEM GLO-30 (2024_1)](/en/pages/3bdccac6/)
- [Australian 5 m DEM (from LiDAR)](/en/pages/eb3acc3a/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
