---
title: "OpenET SIMS Monthly Evapotranspiration v2.0"
date: 2026-11-03 12:00:00
permalink: /pages/68641b6b/
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

# OpenET SIMS Monthly Evapotranspiration v2.0

## 数据集简介

Satellite Irrigation Management Support (SIMS).

The NASA Satellite Irrigation Management Support (SIMS) model was originally
developed to support satellite mapping of crop coefficients and
evapotranspiration (ET) from irrigated lands and to increase access to this
data to support use in irrigation scheduling and regional assessment of
agricultural water needs (Melton et al., 2012). SIMS uses a reflectance
based approach and incorporates the density coefficient described by Allen
and Pereira (2009) and Pereira et al. (2020) to compute basal crop
coefficients for each 30 x 30 m pixel. The primary change from the SIMS
publication (Pereira et al., 2020) for implementation in OpenET is the
integration of a gridded soil water balance model to account for soil
evaporation following precipitation events.

Results of the OpenET Phase I Intercomparison and Accuracy Assessment
(Melton et al., 2022) showed that SIMS generally performed well for
cropland sites during the growing season, but had a persistent low bias
during the winter months or other time periods with frequent precipitation.
This result was anticipated, since the reflectance-based approach used by
SIMS is not sensitive to soil evaporation. To correct for this
underestimation, a soil water balance model based on FAO-56
(Allen et al., 1998) was implemented on Google Earth Engine and driven
with gridded precipitation data from gridMET to estimate soil evaporation
coefficients. These coefficients were then combined with the basal crop
coefficients calculated by SIMS to calculate total crop evapotranspiration
using the dual crop coefficient approach. In addition, a modest positive
bias was observed in the SIMS data for periods with low or sparse
vegetative cover. To correct for this bias, updates were made to the
equations that calculate the minimum basal crop coefficient to allow lower
minimum basal crop coefficient values to be achieved. Full documentation
of the SIMS model, current algorithms, and details and equations used in
the soil water balance model are included in the SIMS user manual.

The SIMS model calculates ET under well-watered conditions for the current
crop growth stage and condition as measured by the satellite data, and SIMS
is generally expected to have a positive bias for deficit irrigated crops
and croplands with short-term or intermittent crop water stress. At
present, SIMS is only implemented for croplands, and non-agricultural lands
are masked out in this data collection. Future research will extend the
vegetation density-crop coefficient approach used within SIMS to other land
cover types.

[Additional information](https://etdata.org/methods/)

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/openet/assets/sims/conus/gridmet/monthly/v2_0`
- 数据类型：影像集合（ImageCollection）
- 提供方：OpenET, Inc.、Google Earth Engine
- 时间范围：1999-10-01 至 2025-01-01
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
var dataset = ee.ImageCollection('projects/openet/assets/sims/conus/gridmet/monthly/v2_0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_sims_conus_gridmet_monthly_v2_0
- 数据引用：Melton, F., Huntington, J., Grimm, R., Herring, J., Hall, M., Rollison, D.,
Erickson, T., Allen, R., Anderson, M., Fisher, J., Kilic, A., Senay, G.,
volk, J., Hain, C., Johnson, L., Ruhoff, A., Blanenau, P., Bromley, M.,
Carrara, W., Daudert, B., Doherty, C., Dunkerly, C., Friedrichs, M., Guzman,
A., Halverson, G., Hansen, J., Harding, J., Kang, Y., Ketchum, D., Minor,
B., Morton, C., Revelle, P., Ortega-Salazar, S., Ott, T., Ozdogon, M.,
Schull, M., Wang, T., Yang, Y., Anderson, R., 2021. "OpenET: Filling a
Critical Data Gap in Water Management for the Western United
States. "Journal of the American Water Resources Association, 58(6),
pp.971-994.
[doi:10.1111/1752-1688.12956](https://doi.org/10.1111/1752-1688.12956)

- DOI：10.1111/1752-1688.12956

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
