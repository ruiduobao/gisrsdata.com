---
title: "Greenland DEM - Greenland Mapping Project (GIMP)"
date: 2026-11-03 12:00:00
---

# Greenland DEM - Greenland Mapping Project (GIMP)

Original name: Greenland DEM - Greenland Mapping Project (GIMP)

## What this dataset is

This Digital Elevation Model (DEM) is constructed from a combination
of ASTER and SPOT-5 DEM's for the ice sheet periphery and margin
(i.e. below the equilbrium line elevation) south of
approximately 82.5&deg;N and AVHRR photoclinometry in the ice sheet
interior and far north (Scambos and Haran, 2002).

SPOT-5 DEM's were produced and distributed as part of the Spot5
stereoscopic survey of Polar Ice: Reference Images & Topographies
(SPIRIT) project (Korona et al., 2009). Ocean surfaces were masked
using the GIMP Land Classification mask and replaced with the
CNES CLS11 mean sea surface height (Schaeffer et al., 2012).

**Note**

*   All land elevation data is horizontally and vertically registered
to average ICESat elevations for the 2003-2009 time period, and
therefore the DEM has a nominal date of 2007, although care must
be taken when using the DEM in areas of rapid change, such as
major outlet glaciers south of 70&deg;0N.
*   The DEM has a resolution of 30 m, although the \"true\" resolution of the
DEM will vary from 40 m in areas of SPOT-5 coverage
(see Korona et al. 2009) to 500 m in areas of photoclinometry.
*   The ice-sheet-wide root-mean-squared validation error
relative to ICESat is +/-10 m, rangining from close to +/- 1 m
over most ice surfaces to +/- 30 m in areas of high relief.

[General documentation](https://doi.org/10.5067/NV34YUIXLP9W)

## Coverage and time range

- Coverage: Spatial: Greenland; temporal: 1999 to 2002 (nominal date 2007); resolution: 30 m.
- Time range: 1999-06-30 至 2002-09-04

## Resolution and specifications

- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| elevation | Elevation | 30 |  |

## What you can use it for

- Elevation input for Greenland ice-sheet topography and ice-flow modelling.
- Elevation-change analysis with ICESat and other altimetry.
- Base elevation for ice-sheet mapping.

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('OSU/GIMP/DEM');
```

- Earth Engine ID: `OSU/GIMP/DEM`
- Providers: NASA NSIDC DAAC at CIRES, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/OSU_GIMP_DEM

## License and citation

- License: proprietary
- Keywords: arctic, elevation-topography, gimp, greenland, nasa, polar
- 数据引用：Howat, I.M., A. Negrete, B.E. Smith, 2014, The Greenland Ice
Mapping Project (GIMP) land classification and surface elevation
datasets, The Cryosphere, 8, 1509-1518,
[doi:10.5194/tc-8-1509-2014](https://doi.org/10.5194/tc-8-1509-2014)
[article pdf](https://www.the-cryosphere.net/8/1509/2014/tc-8-1509-2014.pdf)

- DOI：10.5067/NV34YUIXLP9W

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS DSM: Global 30m  v4.1](/en/pages/774620fb/)
- [How to Download the ASTER Global DEM](/en/pages/da7fa1/)
- [CryoSat-2 Antarctica 1 km DEM](/en/pages/a0390601/)
- [GHSL: Global building volume 1975-2030 (P2023A)](/en/pages/a37f30e2/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
