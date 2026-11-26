---
title: "OpenET PT-JPL Monthly Evapotranspiration v2.0 [deprecated]"
date: 2026-11-03 12:00:00
---

# OpenET PT-JPL Monthly Evapotranspiration v2.0 [deprecated]

Original name: OpenET PT-JPL Monthly Evapotranspiration v2.0 [deprecated]

## What this dataset is

Priestley-Taylor Jet Propulsion Laboratory (PT-JPL)

The core formulation of the PT-JPL model within the OpenET framework has
not changed from the original formulation detailed in Fisher et al. (2008).
However, enhancements and updates to model inputs and time integration for
PT-JPL were made to take advantage of contemporary gridded weather datasets,
provide consistency with other models, improve open water evaporation
estimates, and account for advection over crop and wetland areas in
semiarid and arid environments. These changes include the use of
Landsat surface reflectance and thermal radiation for calculating net
radiation, photosynthetically active radiation, plant canopy and moisture
variables, and use of NLDAS, Spatial CIMIS, and gridMET weather data for
estimating insolation and ASCE reference ET. Similar to the implementation
of other OpenET models, estimation of daily and monthly time integrated
ET is based on the fraction of ASCE reference ET. Open water evaporation
is estimated following a surface energy balance approach of Abdelrady
et al. (2016) that is specific for water bodies by accounting for water
heat flux as opposed to soil heat flux.

[Additional information](https://openetdata.org/methodologies/)

## Coverage and time range

- Coverage: Spatial: CONUS; temporal: 1999 to 2024 (monthly); resolution: 30 m.
- Time range: 1999-10-01 至 2024-12-01

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| et | PT-JPL ET value | 30 |  |
| count | Number of cloud free values | 30 |  |

## What you can use it for

- Monitor field-scale irrigation water use and evapotranspiration.
- Provide monthly ET data for water-resource management and drought assessment.
- Compare multi-model ensemble ET with single-model results.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('OpenET/PTJPL/CONUS/GRIDMET/MONTHLY/v2_0');
```

- Earth Engine ID: `OpenET/PTJPL/CONUS/GRIDMET/MONTHLY/v2_0`
- Providers: OpenET, Inc., Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/OpenET_PTJPL_CONUS_GRIDMET_MONTHLY_v2_0

## License and citation

- License: CC-BY-4.0
- Keywords: evapotranspiration, gridmet-derived, landsat-derived, monthly, openet, water, water-vapor
- 数据引用：Fisher, J.B., Tu, K.P. and Baldocchi, D.D., 2008. Global estimates of the
land–atmosphere water flux based on monthly AVHRR and ISLSCP-II data,
validated at 16 FLUXNET sites. Remote Sensing of Environment, 112(3),
pp.901-919.
[doi:10.1016/j.rse.2007.06.025](https://doi.org/10.1016/j.rse.2007.06.025)

- DOI：10.1016/j.rse.2007.06.025

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [AG100: ASTER Global Emissivity Dataset 100-meter V003](/en/pages/3510f165/)
- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002](/en/pages/a7bebe55/)
- [ECOSTRESS Land Surface Temperature and Emissivity L2 Global 70 m V002](/en/pages/f726b0e6/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
