---
title: "MCD43A4.005 BRDF-Adjusted Reflectance 16-Day Global 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# MCD43A4.005 BRDF-Adjusted Reflectance 16-Day Global 500m [deprecated]

Original name: MCD43A4.005 BRDF-Adjusted Reflectance 16-Day Global 500m [deprecated]

## What this dataset is

The MODerate-resolution Imaging
Spectroradiometer (MODIS) Reflectance product MCD43A4 provides
500-meter reflectance data adjusted using a bidirectional reflectance
distribution function (BRDF) to model the values as if they were taken
from nadir view. The MCD43A4 product contains 16 days of data provided
in a level-3 gridded data set in Sinusoidal projection.

Both Terra and Aqua data are used in the generation of this product, providing
the highest probability for quality input data and designating it as
an MCD, meaning Combined, product.

Version-5 MODIS/Terra+Aqua BRDF/Albedo
products are Validated Stage 1, meaning that accuracy has been
estimated using a small number of independent measurements obtained
from selected locations and time periods and ground-truth/field
program efforts. Although there may be later improved versions, these
data are ready for use in scientific publications.

Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data) for information on citing LP DAAC datasets.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2017; resolution: 500 m.
- Time range: 2000-02-18 至 2017-03-14

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Nadir_Reflectance_Band1 | NBAR at local solar noon for band 1 | 500 | 620-670nm |
| Nadir_Reflectance_Band2 | NBAR at local solar noon for band 2 | 500 | 841-876nm |
| Nadir_Reflectance_Band3 | NBAR at local solar noon for band 3 | 500 | 459-479nm |
| Nadir_Reflectance_Band4 | NBAR at local solar noon for band 4 | 500 | 545-565nm |
| Nadir_Reflectance_Band5 | NBAR at local solar noon for band 5 | 500 | 1230-1250nm |
| Nadir_Reflectance_Band6 | NBAR at local solar noon for band 6 | 500 | 1628-1652nm |
| Nadir_Reflectance_Band7 | NBAR at local solar noon for band 7 | 500 | 2105-2155nm |

## What you can use it for

- BRDF/albedo modeling
- Surface reflectance correction
- Radiative transfer research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/MCD43A4');
```

- Earth Engine ID: `MODIS/MCD43A4`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4

## License and citation

- License: proprietary
- Keywords: 16-day, brdf, global, mcd43a4, modis, nbar, reflectance, satellite-imagery, surface-reflectance, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/en/pages/4a61128e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
