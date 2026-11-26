---
title: "MCD43A2.005 BRDF-Albedo Quality 16-Day Global 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# MCD43A2.005 BRDF-Albedo Quality 16-Day Global 500m [deprecated]

Original name: MCD43A2.005 BRDF-Albedo Quality 16-Day Global 500m [deprecated]

## What this dataset is

The MODerate-resolution Imaging
Spectroradiometer (MODIS) BRDF/Albedo Quality product (MCD43A2)
describes the overall condition of the other BRDF and Albedo
products. The MCD43A2 product contains 16 days of data at 500 meter
spatial resolution provided in a level-3 gridded data set in
Sinusoidal projection, and includes albedo quality, snow conditions,
ancillary information, and inversion information.  Both Terra and Aqua
data are used in the generation of this product, providing the highest
probability for quality input data and designating it as an MCD,
meaning Combined, product.

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
| BRDF_Albedo_Quality | BRDF/Albedo mandatory quality | 500 |  |
| Snow_BRDF_Albedo | Snow-free or snow BRDF/albedo retrieved | 500 |  |
| BRDF_Albedo_Ancillary | BRDF albedo ancillary quality | 500 |  |
| BRDF_Albedo_Band_Quality | BRDF albedo band quality | 500 |  |

## What you can use it for

- BRDF/albedo modeling
- Surface reflectance correction
- Radiative transfer research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/MCD43A2');
```

- Earth Engine ID: `MODIS/MCD43A2`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A2

## License and citation

- License: proprietary
- Keywords: 16-day, albedo, brdf, global, modis, quality, reflectance, satellite-imagery, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/en/pages/4a61128e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
