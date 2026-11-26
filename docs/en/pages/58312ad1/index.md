---
title: "OpenET SSEBop Monthly Evapotranspiration v2.1"
date: 2026-11-03 12:00:00
---

# OpenET SSEBop Monthly Evapotranspiration v2.1

Original name: OpenET SSEBop Monthly Evapotranspiration v2.1

## What this dataset is

Operational Simplified Surface Energy Balance (SSEBop).

The Operational Simplified Surface Energy Balance (SSEBop) model
(Senay et al., 2013; 2023) is a thermal based approach for estimating
actual evapotranspiration (ET) using the principles of satellite
psychrometry (Senay, 2018). As one of the core models in the OpenET
ensemble, SSEBop provides a computationally efficient framework for large-
area, operational ET mapping.

The OpenET Collection 2.1 implementation of SSEBop relies on two primary
inputs:

1. Land surface temperature from Landsat Collection 2 Level 2 Science
Products.
2. Gridded reference ET from gridMET (Abotzoglou, 2013).

Key model parameters, including the cold/wet bulb reference temperature
(Tc) and the surface psychrometric constant (1/dT), are derived using a
combination of observed surface temperature, normalized difference
vegetation index (NDVI), and ERA5 net radiation data
(DOI: 10.5066/P9JBW6R9). These components are integrated within the Google
Earth Engine processing environment, which links the full suite of SSEBop
algorithms to generate both intermediate outputs and aggregated ET
products. Extensive evaluation across the conterminous United States
(Senay et al., 2022; Volk et al., 2024; Ji et al., 2025; Khand et al, 2025)
has guided the cloud-based implementation and demonstrated the model’s
utility for applications such as crop water use assessment and regional
water budget analysis.

For OpenET Collection 2.1, SSEBop model v0.7.1 (Senay et al., 2026)
includes a notable enhancement: an improved implementation of the Forcing
and Normalizing Operation (FANO) equation for determining Tc. This update
strengthens the model’s ability to represent wet surfaces with low NDVI,
improving performance in areas where vegetation signals are weak or mixed,
particularly over farmlands and grasslands during sparse canopy cover.
**OpenET Collection v2.1**

OpenET Collection v2.1 is a reprocessed and updated version of Collection
v2.0, designed primarily to address known v2.0 issues, while also
incorporating minor model improvements and input-data updates. It is
expected that there will be noticeable differences in ET between the two
collection versions for some places and times. Some of the updates and changes 
include:

* Additional cloud screening and filtering to skip Landsat images with 
unmasked clouds and/or extensive snow cover.
* Reprocessing to incorporate updates to the NLDAS-2 and GRIDMET
input meteorology datasets.
* Incorporation of the USGS Annual NLCD product for all models that require 
land cover information.
* Incorporation of the latest USDA CDL for all models that require crop type 
information.
* Updates to the interpolation so monthly ET is only produced when all
days in the month have interpolated values (reducing “count=0” months in
cloudy/snowy or low-coverage periods).
* Application of an emissivity correction to address a known issue in
Landsat LST data.

[Additional information](https://etdata.org/methods/)

## Coverage and time range

- Coverage: Spatial: CONUS; temporal: 2015 to 2026 (monthly); resolution: 30 m.
- Time range: 2015-10-01 至 2026-09-01

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| et | Total actual evapotranspiration (ET) | 30 |  |
| count | Number of cloud free observations in the month included in the interpolation | 30 |  |

## What you can use it for

- Monitor field-scale irrigation water use and evapotranspiration.
- Provide monthly ET data for water-resource management and drought assessment.
- Compare multi-model ensemble ET with single-model results.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('projects/openet/assets/ssebop/conus/gridmet/monthly/v2_1');
```

- Earth Engine ID: `projects/openet/assets/ssebop/conus/gridmet/monthly/v2_1`
- Providers: OpenET, Inc., Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_ssebop_conus_gridmet_monthly_v2_1

## License and citation

- License: CC-BY-4.0
- Keywords: evapotranspiration, gridmet-derived, landsat-derived, monthly, openet, water, water-vapor
- 数据引用：Senay, G.B., Parrish, G.E., Schauer, M., Friedrichs, M., Khand, K., Boiko,
O., Kagone, S., Dittmeier, R., Arab, S. and Ji, L., 2023. Improving the
Operational Simplified Surface Energy Balance Evapotranspiration Model Using
the Forcing and Normalizing Operation. Remote Sensing, 15(1), p.260.
[doi:10.3390/rs15010260](https://doi.org/10.3390/rs15010260)

- DOI：10.3390/rs15010260

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [OpenET DisALEXI Monthly Evapotranspiration v2.0](/pages/d4a94ba4/)
- [OpenET DisALEXI Monthly Evapotranspiration v2.1](/pages/e41f7d19/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0](/pages/f842a55a/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0 (1985-1999)](/pages/0e0267d6/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
