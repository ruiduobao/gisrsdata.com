---
title: "MCD43A1.005 BRDF-Albedo Model Parameters 16-Day L3 Global 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# MCD43A1.005 BRDF-Albedo Model Parameters 16-Day L3 Global 500m [deprecated]

Original name: MCD43A1.005 BRDF-Albedo Model Parameters 16-Day L3 Global 500m [deprecated]

## What this dataset is

The MODerate-resolution Imaging Spectroradiometer
(MODIS) BRDF/Albedo Model Parameters product (MCD43A1) contains datasets
providing users with weighting parameters for the models used to derive the
Albedo and BRDF products (MCD43A3 and MCD43A4). The models support the spatial
relationship and parameter characterization best describing the differences in
radiation due to the scattering (anisotropy) of each pixel, relying on
multi-date, atmospherically corrected, cloud-cleared input data measured over
16-day periods. Both Terra and Aqua data are used in the generation of this
product, providing the highest probability for quality input data and
designating it as an MCD, meaning Combined, product.

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
| BRDF_Albedo_Parameters_Band1_iso | BDRF/Albedo isotropic parameter for band 1 | 500 | 620-670nm |
| BRDF_Albedo_Parameters_Band1_vol | BDRF/Albedo volumetric parameter for band 1 | 500 | 620-670nm |
| BRDF_Albedo_Parameters_Band1_geo | BDRF/Albedo geometric parameter for band 1 | 500 | 620-670nm |
| BRDF_Albedo_Parameters_Band2_iso | BDRF/Albedo isotropic parameter for band 2 | 500 | 841-876nm |
| BRDF_Albedo_Parameters_Band2_vol | BDRF/Albedo volumetric parameter for band 2 | 500 | 841-876nm |
| BRDF_Albedo_Parameters_Band2_geo | BDRF/Albedo geometric parameter for band 2 | 500 | 841-876nm |
| BRDF_Albedo_Parameters_Band3_iso | BDRF/Albedo isotropic parameter for band 3 | 500 | 459-479nm |
| BRDF_Albedo_Parameters_Band3_vol | BDRF/Albedo volumetric parameter for band 3 | 500 | 459-479nm |
| BRDF_Albedo_Parameters_Band3_geo | BDRF/Albedo geometric parameter for band 3 | 500 | 459-479nm |
| BRDF_Albedo_Parameters_Band4_iso | BDRF/Albedo isotropic parameter for band 4 | 500 | 545-565nm |
| BRDF_Albedo_Parameters_Band4_vol | BDRF/Albedo volumetric parameter for band 4 | 500 | 545-565nm |
| BRDF_Albedo_Parameters_Band4_geo | BDRF/Albedo geometric parameter for band 4 | 500 | 545-565nm |
| BRDF_Albedo_Parameters_Band5_iso | BDRF/Albedo isotropic parameter for band 5 | 500 | 1230-1250nm |
| BRDF_Albedo_Parameters_Band5_vol | BDRF/Albedo volumetric parameter for band 5 | 500 | 1230-1250nm |
| BRDF_Albedo_Parameters_Band5_geo | BDRF/Albedo geometric parameter for band 5 | 500 | 1230-1250nm |
| BRDF_Albedo_Parameters_Band6_iso | BDRF/Albedo isotropic parameter for band 6 | 500 | 1628-1652nm |
| BRDF_Albedo_Parameters_Band6_vol | BDRF/Albedo volumetric parameter for band 6 | 500 | 1628-1652nm |
| BRDF_Albedo_Parameters_Band6_geo | BDRF/Albedo geometric parameter for band 6 | 500 | 1628-1652nm |
| BRDF_Albedo_Parameters_Band7_iso | BDRF/Albedo isotropic parameter for band 7 | 500 | 2105-2155nm |
| BRDF_Albedo_Parameters_Band7_vol | BDRF/Albedo volumetric parameter for band 7 | 500 | 2105-2155nm |
| BRDF_Albedo_Parameters_Band7_geo | BDRF/Albedo geometric parameter for band 7 | 500 | 2105-2155nm |
| BRDF_Albedo_Parameters_vis_iso | BDRF/Albedo isotropic parameter for the visible band | 500 |  |
| BRDF_Albedo_Parameters_vis_vol | BDRF/Albedo volumetric parameter for the visible band | 500 |  |
| BRDF_Albedo_Parameters_vis_geo | BDRF/Albedo geometric parameter for the visible band | 500 |  |
| BRDF_Albedo_Parameters_nir_iso | BDRF/Albedo isotropic parameter for the NIR band | 500 | 858nm |
| BRDF_Albedo_Parameters_nir_vol | BDRF/Albedo volumetric parameter for the NIR band | 500 | 858nm |
| BRDF_Albedo_Parameters_nir_geo | BDRF/Albedo geometric parameter for the NIR band | 500 | 858nm |
| BRDF_Albedo_Parameters_shortwave_iso | BDRF/Albedo isotropic parameter for the shortwave band | 500 |  |
| BRDF_Albedo_Parameters_shortwave_vol | BDRF/Albedo volumetric parameter for the shortwave band | 500 |  |
| BRDF_Albedo_Parameters_shortwave_geo | BDRF/Albedo geometric parameter for the shortwave band | 500 |  |
| BRDF_Shape_Indicators_ANIF | Anisotropic Index | 500 |  |
| BRDF_Shape_Indicators_AFX | Anisotropic Flat Index | 500 |  |
| BRDF_Shape_Indicators_NDAX | Normalized Difference Anisotropic Index | 500 |  |
| BRDF_Shape_Indicators_SSI | Snow Shape Index | 500 |  |

## What you can use it for

- BRDF/albedo modeling
- Surface reflectance correction
- Radiative transfer research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/MCD43A1');
```

- Earth Engine ID: `MODIS/MCD43A1`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A1

## License and citation

- License: proprietary
- Keywords: 16-day, albedo, brdf, global, mcd43a1, modis, reflectance, satellite-imagery, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/en/pages/4a61128e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
