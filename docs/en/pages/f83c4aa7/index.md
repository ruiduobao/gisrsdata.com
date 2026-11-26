---
title: "OpenET PT-JPL Monthly Evapotranspiration v2.0 (1985-1999)"
date: 2026-11-03 12:00:00
---

# OpenET PT-JPL Monthly Evapotranspiration v2.0 (1985-1999)

Original name: OpenET PT-JPL Monthly Evapotranspiration v2.0 (1985-1999)

## What this dataset is

Priestley-Taylor Jet Propulsion Laboratory (PT-JPL).

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

**OpenET Collection v2.0, pre-2000 (1985-1999)**

Note: This collection should not be merged with the main v2.0
collection to compute long-term trends, annual totals, or difference from
average type calculations, unless care is taken to identify and fill gaps
or missing data. This collection was generated using Landsat 5 data only,
and will have more data gaps (both spatially and temporally) than the main
v2.0 collection, which incorporates data from multiple Landsat satellites
(5 & 7, 7 & 8, etc.). This pre-2000 collection may have long periods
without data, especially in the winter months, and large regions without
data whatsoever in the earlier years (1985-1993).

[Additional information](https://etdata.org/methods/)

## Coverage and time range

- Coverage: Spatial: CONUS; temporal: 1984 to 1999 (monthly); resolution: 30 m.
- Time range: 1984-10-01 至 1999-10-01

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
var dataset = ee.ImageCollection('projects/openet/assets/ptjpl/conus/gridmet/monthly/v2_0_pre2000');
```

- Earth Engine ID: `projects/openet/assets/ptjpl/conus/gridmet/monthly/v2_0_pre2000`
- Providers: OpenET, Inc., Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_ptjpl_conus_gridmet_monthly_v2_0_pre2000

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

- [OpenET DisALEXI Monthly Evapotranspiration v2.0](/pages/d4a94ba4/)
- [OpenET DisALEXI Monthly Evapotranspiration v2.1](/pages/e41f7d19/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0](/pages/f842a55a/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0 (1985-1999)](/pages/0e0267d6/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
