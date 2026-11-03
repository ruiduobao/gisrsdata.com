---
title: "OpenET Ensemble Monthly Evapotranspiration v2.1"
date: 2026-11-03 12:00:00
permalink: /pages/e711299d/
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

# OpenET Ensemble Monthly Evapotranspiration v2.1

## 数据集简介

The OpenET dataset includes satellite-based data on the total amount of
water that is transferred from the land surface to the atmosphere through
the process of evapotranspiration (ET). OpenET provides ET data from
multiple satellite-driven models, and also calculates a single "ensemble
value" from the model ensemble. The models currently included in the OpenET
model ensemble are ALEXI/DisALEXI, eeMETRIC, geeSEBAL, PT-JPL, SIMS, and
SSEBop. The OpenET ensemble ET value is calculated as the mean of the
ensemble after filtering and removing outliers using the median absolute
deviation approach. All models currently use Landsat satellite data to
produce ET data at a pixel size of 30 meters by 30 meters (0.22 acres per
pixel). The monthly ET dataset provides data on total ET by month as an
equivalent depth of water in millimeters.
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

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/openet/assets/ensemble/conus/gridmet/monthly/v2_1`
- 数据类型：影像集合（ImageCollection）
- 提供方：OpenET, Inc.、Google Earth Engine
- 时间范围：2015-10-01 至 2026-09-01
- 空间分辨率：30 米
- 许可：CC-BY-4.0
- 关键词：evapotranspiration, gridmet-derived, landsat-derived, monthly, openet, water, water-vapor

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| et_ensemble_mad | Ensemble ET value, computed as the mean of the ensemble after filtering outliers using the median absolute deviation (mad)  | 30 |  |
| et_ensemble_mad_min | The minimum value in the ensemble range, after filtering for outliers using the median absolute deviation (mad)  | 30 |  |
| et_ensemble_mad_max | The maximum value in the ensemble range, after filtering for outliers using the median absolute deviation (mad)  | 30 |  |
| et_ensemble_mad_count | The number of models used to compute the ensemble ET value, after filtering for outliers using the median absolute deviation (mad)  | 30 |  |
| et_ensemble_mad_index | Bitmask indicating which models were included in the ensemble ET value, after filtering for outliers using the median absolute deviation (mad)  | 30 |  |
| et_ensemble_sam | The simple arithmetic mean (sam) of all six models in the OpenETmodel ensemble | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/openet/assets/ensemble/conus/gridmet/monthly/v2_1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_ensemble_conus_gridmet_monthly_v2_1
- 数据引用：Melton, F., Huntington, J., Grimm, R., Herring, J., Hall, M., Rollison, D.,
Erickson, T., Allen, R., Anderson, M., Fisher, J., Kilic, A., Senay, G.,
volk, J., Hain, C., Johnson, L., Ruhoff, A., Blankenau, P., Bromley, M.,
Carrara, W., Daudert, B., Doherty, C., Dunkerly, C., Friedrichs, M., Guzman,
A., Halverson, G., Hansen, J., Harding, J., Kang, Y., Ketchum, D., Minor,
B., Morton, C., Revelle, P., Ortega-Salazar, S., Ott, T., Ozdogon, M.,
Schull, M., Wang, T., Yang, Y., Anderson, R., 2021. OpenET: Filling a
Critical Data Gap in Water Management for the Western United States.
Journal of the American Water Resources Association, 2021 Nov 2.
[doi:10.1111/1752-1688.12956](https://doi.org/10.1111/1752-1688.12956)

- DOI：10.1111/1752-1688.12956

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
