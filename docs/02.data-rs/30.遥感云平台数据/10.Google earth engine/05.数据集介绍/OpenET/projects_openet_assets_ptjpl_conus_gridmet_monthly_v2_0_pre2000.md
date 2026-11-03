---
title: "OpenET PT-JPL Monthly Evapotranspiration v2.0 (1985-1999)"
date: 2026-11-03 12:00:00
permalink: /pages/f83c4aa7/
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

# OpenET PT-JPL Monthly Evapotranspiration v2.0 (1985-1999)

## 数据集简介

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

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/openet/assets/ptjpl/conus/gridmet/monthly/v2_0_pre2000`
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
var dataset = ee.ImageCollection('projects/openet/assets/ptjpl/conus/gridmet/monthly/v2_0_pre2000');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_ptjpl_conus_gridmet_monthly_v2_0_pre2000
- 数据引用：Fisher, J.B., Tu, K.P. and Baldocchi, D.D., 2008. Global estimates of the
land–atmosphere water flux based on monthly AVHRR and ISLSCP-II data,
validated at 16 FLUXNET sites. Remote Sensing of Environment, 112(3),
pp.901-919.
[doi:10.1016/j.rse.2007.06.025](https://doi.org/10.1016/j.rse.2007.06.025)

- DOI：10.1016/j.rse.2007.06.025

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
