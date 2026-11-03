---
title: "OpenET geeSEBAL Monthly Evapotranspiration v2.0 (1985-1999)"
date: 2026-11-03 12:00:00
permalink: /pages/4c9d9d7d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "evapotranspiration"
  - "gridmet-derived"
  - "landsat-derived"
  - "monthly"
  - "openet"
  - "water"
  - "water-vapor"
---

# OpenET geeSEBAL Monthly Evapotranspiration v2.0 (1985-1999)

## 数据集简介

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

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/openet/assets/geesebal/conus/gridmet/monthly/v2_0_pre2000`
- 数据类型：影像集合（ImageCollection）
- 提供方：OpenET, Inc.、Google Earth Engine
- 时间范围：1984-10-01 至 1999-10-01
- 空间分辨率：30 米
- 许可：CC-BY-4.0
- 关键词：evapotranspiration, gridmet-derived, landsat-derived, monthly, openet, water, water-vapor

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| et | Total actual evapotranspiration (ET) | 30 |  |
| count | Number of cloud free observations in the month included in the interpolation | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/openet/assets/geesebal/conus/gridmet/monthly/v2_0_pre2000');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_geesebal_conus_gridmet_monthly_v2_0_pre2000
- 数据引用：Laipelt, L., Kayser, R.H.B., Fleischmann, A.S., Ruhoff, A., Bastiaanssen,
W., Erickson, T.A. and Melton, F., 2021. Long-term monitoring of
evapotranspiration using the SEBAL algorithm and Google Earth Engine cloud
computing. ISPRS Journal of Photogrammetry and Remote Sensing, 178,
pp.81-96.
[doi:10.1016/j.isprsjprs.2021.05.018](https://doi.org/10.1016/j.isprsjprs.2021.05.018)

- DOI：10.1016/j.isprsjprs.2021.05.018

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
