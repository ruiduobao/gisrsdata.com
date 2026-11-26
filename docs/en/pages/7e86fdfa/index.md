---
title: "MERIT DEM: Multi-Error-Removed Improved-Terrain DEM"
date: 2026-11-03 12:00:00
---

# MERIT DEM: Multi-Error-Removed Improved-Terrain DEM

Original name: MERIT DEM: Multi-Error-Removed Improved-Terrain DEM

## What this dataset is

MERIT DEM a high accuracy global DEM at 3 arc second resolution (~90 m at
the equator) produced by eliminating major error components from existing DEMs
(NASA SRTM3 DEM, JAXA AW3D DEM, Viewfinder Panoramas DEM).

MERIT DEM separates absolute bias, stripe noise, speckle
noise and tree height bias using multiple satellite datasets and filtering techniques.
After the error removal, land areas mapped with 2 m or better vertical accuracy
were increased from 39% to 58%. Significant improvements were found in flat regions
where height errors larger than topography variability, and landscapes such as
river networks and hill-valley structures became clearly represented.

'MERIT DEM was developed by processing the following products as baseline data:

In addition to the above baseline dems, these products were used as supplementary data:

## Coverage and time range

- Coverage: Coverage: global land; resolution: 3 arc-seconds (about 90 m).
- Time range: 1987-01-01 至 2017-01-01

## Resolution and specifications

- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| dem | Elevation in meters, referenced to EGM96 geoid model. | 92.77 |  |

## What you can use it for

- Terrain analysis and geomorphology
- Hydrological modeling and flood simulation
- Global elevation baseline data

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('MERIT/DEM/v1_0_3');
```

- Earth Engine ID: `MERIT/DEM/v1_0_3`
- Providers: Dai Yamazaki (University of Tokyo), Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MERIT_DEM_v1_0_3
* [NASA SRTM3 DEM v2.1](https://dds.cr.usgs.gov/srtm/version2_1/SRTM3)
* [JAXA AW3D - 30 m DEM v1](https://www.eorc.jaxa.jp/ALOS/en/aw3d30/index.htm)
* [Viewfinder Panoramas DEM](https://www.viewfinderpanoramas.org/dem3.html)
* [NASA-NSIDC ICESat/GLAS GLA14 data](https://nsidc.org/data/gla14)
* [U-Maryland Landsat forest cover data](https://glad.earthengine.app/view/global-forest-change)
* [NASA Global Forest height data](https://www.nasa.gov/topics/earth/features/forest-height-map.html)
* [JAMSTEC/U-Tokyo G3WBM water body data](https://hydro.iis.u-tokyo.ac.jp/~yamadai/G3WBM/index.html)

## License and citation

- License: ODbL-1.0
- Keywords: dem, elevation, elevation-topography, merit, topography
- 数据引用：Yamazaki D., D. Ikeshima, R. Tawatari, T. Yamaguchi, F. O'Loughlin, J.C. Neal,
C.C. Sampson, S. Kanae & P.D. Bates. A high accuracy map of global
terrain elevations.  Geophysical Research Letters, vol.44, pp.5844-5853, 2017.

[doi:10.1002/2017GL072874](https://doi.org/10.1002/2017GL072874)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS DSM: Global 30m  v4.1](/en/pages/774620fb/)
- [How to Download the ASTER Global DEM](/en/pages/da7fa1/)
- [CryoSat-2 Antarctica 1 km DEM](/en/pages/a0390601/)
- [GHSL: Global building volume 1975-2030 (P2023A)](/en/pages/a37f30e2/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
