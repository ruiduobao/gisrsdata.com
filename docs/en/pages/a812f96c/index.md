---
title: "OpenET geeSEBAL Monthly Evapotranspiration v2.0"
date: 2026-11-03 12:00:00
---

# OpenET geeSEBAL Monthly Evapotranspiration v2.0

Original name: OpenET geeSEBAL Monthly Evapotranspiration v2.0

## What this dataset is

Google Earth Engine implementation of the Surface Energy Balance Algorithm
for Land (SEBAL) model.

An overview of the current geeSEBAL version can be found in Laipelt et al.
(2021), which is based on the original algorithms developed by
Bastiaanssen et al. (1998). The OpenET geeSEBAL implementation uses land
surface temperature (LST) data from Landsat Collection 2, in addition to
NLDAS-2 and gridMET datasets as instantaneous and daily meteorological
inputs, respectively.

The automated statistical algorithm to select the hot and cold endmembers
is based on a simplified version of the Calibration using Inverse Modeling
at Extreme Conditions (CIMEC) algorithm proposed by Allen et al. (2013),
where quantiles of LST and the normalized difference vegetation index
(NDVI) values are used to select endmember candidates in the Landsat
domain area. The cold and wet endmember candidates are selected in well
vegetated areas, while the hot and dry endmember candidates are selected
in the least vegetated cropland areas.Based on the selected endmembers,
geeSEBAL assumes that in the cold and wet endmember all available energy
is converted to latent heat (with high rates of transpiration), while in
the hot and dry endmember all available energy is converted to sensible
heat. Finally, estimates of daily evapotranspiration are upscaled from
instantaneous estimates based on the evaporative fraction, assuming it is
constant during the daytime without significant changes in soil moisture
and advection.

Based on the results from the OpenET Accuracy Assessment and
Intercomparison study, the OpenET geeSEBAL algorithm was modified as
follows:

1. The simplified version of CIMEC was improved by using additional
filters to select the endmembers, including the use of the USDA Cropland
Data Layer (CDL) and filters for NDVI, LST and albedo.
2. Corrections to LST for endmembers based on antecedent precipitation.
3. Definition of NLDAS-2 wind speed thresholds to reduce model instability
during the atmospheric correction.
4. Improvements to estimate daily net radiation, using FAO-56 as reference
(Allen et al., 1998).

Overall, geeSEBAL performance is dependent on topographic, climate, and
meteorological conditions, with higher sensitivity and uncertainty related
to hot and cold endmember selections for the CIMEC automated calibration,
and lower sensitivity and uncertainty related to meteorological inputs
(Laipelt et al., 2021 and Kayser et al., 2022). To reduce uncertainties
related to complex terrain, improvements were added to correct LST and
global (incident) radiation on the surface (including the environmental
lapse rate, elevation slope and aspect) to represent the effects of
topographic features on the model’s endmember selection algorithm and ET
estimates.

[Additional information](https://etdata.org/methods/)

## Coverage and time range

- Coverage: Spatial: CONUS; temporal: 1999 to 2025 (monthly); resolution: 30 m.
- Time range: 1999-10-01 至 2025-01-01

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
var dataset = ee.ImageCollection('projects/openet/assets/geesebal/conus/gridmet/monthly/v2_0');
```

- Earth Engine ID: `projects/openet/assets/geesebal/conus/gridmet/monthly/v2_0`
- Providers: OpenET, Inc., Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_geesebal_conus_gridmet_monthly_v2_0

## License and citation

- License: CC-BY-4.0
- Keywords: evapotranspiration, gridmet-derived, landsat-derived, monthly, openet, water, water-vapor
- 数据引用：Laipelt, L., Kayser, R.H.B., Fleischmann, A.S., Ruhoff, A., Bastiaanssen,
W., Erickson, T.A. and Melton, F., 2021. Long-term monitoring of
evapotranspiration using the SEBAL algorithm and Google Earth Engine cloud
computing. ISPRS Journal of Photogrammetry and Remote Sensing, 178,
pp.81-96.
[doi:10.1016/j.isprsjprs.2021.05.018](https://doi.org/10.1016/j.isprsjprs.2021.05.018)

- DOI：10.1016/j.isprsjprs.2021.05.018

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [OpenET DisALEXI Monthly Evapotranspiration v2.0](/pages/d4a94ba4/)
- [OpenET DisALEXI Monthly Evapotranspiration v2.1](/pages/e41f7d19/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0](/pages/f842a55a/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0 (1985-1999)](/pages/0e0267d6/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
