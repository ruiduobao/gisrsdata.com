---
title: "OpenET SSEBop Monthly Evapotranspiration v2.1"
date: 2026-11-03 12:00:00
permalink: /pages/58312ad1/
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

# OpenET SSEBop Monthly Evapotranspiration v2.1

## 数据集简介

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

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/openet/assets/ssebop/conus/gridmet/monthly/v2_1`
- 数据类型：影像集合（ImageCollection）
- 提供方：OpenET, Inc.、Google Earth Engine
- 时间范围：2015-10-01 至 2026-09-01
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
var dataset = ee.ImageCollection('projects/openet/assets/ssebop/conus/gridmet/monthly/v2_1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_ssebop_conus_gridmet_monthly_v2_1
- 数据引用：Senay, G.B., Parrish, G.E., Schauer, M., Friedrichs, M., Khand, K., Boiko,
O., Kagone, S., Dittmeier, R., Arab, S. and Ji, L., 2023. Improving the
Operational Simplified Surface Energy Balance Evapotranspiration Model Using
the Forcing and Normalizing Operation. Remote Sensing, 15(1), p.260.
[doi:10.3390/rs15010260](https://doi.org/10.3390/rs15010260)

- DOI：10.3390/rs15010260

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
