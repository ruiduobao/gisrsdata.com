---
title: "OpenET DisALEXI Monthly Evapotranspiration v2.1"
date: 2026-11-03 12:00:00
permalink: /pages/e41f7d19/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "evapotranspiration"
  - "landsat-derived"
  - "monthly"
  - "openet"
  - "water"
  - "water-vapor"
---

# OpenET DisALEXI Monthly Evapotranspiration v2.1

## 数据集简介

Atmosphere-Land Exchange Inverse / Disaggregation of the Atmosphere-Land
Exchange Inverse (ALEXI/DisALEXI).

DisALEXI was ported to Google Earth Engine as part of the OpenET
framework. The baseline ALEXI/DisALEXI model structure is described by
Anderson et al. (2012, 2018). The ALEXI evapotranspiration (ET) model
specifically uses time differential land surface temperature (LST)
measurements from geostationary or moderate resolution polar orbiting
platforms to generate regional ET maps. DisALEXI then disaggregates the
regional ALEXI ET to finer scales using Landsat data (30 m; biweekly) to
resolve individual farm fields and other landscape features.

Note: DisALEXI data does not exist before 2001 since the source ALEXI data
is only available starting in 2001.
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

- 数据集编号（Earth Engine ID）：`projects/openet/assets/disalexi/conus/gridmet/monthly/v2_1`
- 数据类型：影像集合（ImageCollection）
- 提供方：OpenET, Inc.、Google Earth Engine
- 时间范围：2015-10-01 至 2026-09-01
- 空间分辨率：30 米
- 许可：CC-BY-4.0
- 关键词：evapotranspiration, landsat-derived, monthly, openet, water, water-vapor

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| et | Total actual evapotranspiration (ET) | 30 |  |
| count | Number of cloud free observations in the month included in the interpolation | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/openet/assets/disalexi/conus/gridmet/monthly/v2_1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_disalexi_conus_gridmet_monthly_v2_1
- 数据引用：Anderson, M., Gao, F., Knipper, K., Hain, C., Dulaney, W., Baldocchi, D .,
Eichelmann, E., Hemes, K., Yang, Y., Medellin-Azuara, J. and Kustas, W.,
2018. Field-scale assessment of land and water use change over the
California Delta using remote sensing. Remote Sensing, 10(6), p.889.
[doi:10.3390/rs10060889](https://doi.org/10.3390/rs10060889)

- DOI：10.3390/rs10060889

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
