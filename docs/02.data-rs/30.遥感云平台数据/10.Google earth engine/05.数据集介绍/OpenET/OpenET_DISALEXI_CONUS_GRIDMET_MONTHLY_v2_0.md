---
title: "OpenET DisALEXI Monthly Evapotranspiration v2.0 [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/402a42e1/
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

# OpenET DisALEXI Monthly Evapotranspiration v2.0 [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

Atmosphere-Land Exchange Inverse / Disaggregation of the Atmosphere-Land
Exchange Inverse (ALEXI/DisALEXI)

DisALEXI was recently ported to Google Earth Engine as part of the OpenET
framework and the baseline ALEXI/DisALEXI model structure is described by
Anderson et al. (2012, 2018). The ALEXI evapotranspiration (ET) model
specifically uses time differential land surface temperature (LST)
measurements from geostationary or moderate resolution polar orbiting
platforms to generate regional ET maps. DisALEXI then disaggregates the
regional ALEXI ET to finer scales using Landsat data (30 m; biweekly) to
resolve individual farm fields and other landscape features.
[Additional information](https://openetdata.org/methodologies/)

## 基本信息

- 数据集编号（Earth Engine ID）：`OpenET/DISALEXI/CONUS/GRIDMET/MONTHLY/v2_0`
- 数据类型：影像集合（ImageCollection）
- 提供方：OpenET, Inc.、Google Earth Engine
- 时间范围：2001-01-01 至 2024-12-01
- 空间分辨率：30 米
- 许可：CC-BY-4.0
- 关键词：evapotranspiration, gridmet-derived, landsat-derived, monthly, openet, water, water-vapor

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| et | DisALEXI ET value | 30 |  |
| count | Number of cloud free values | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('OpenET/DISALEXI/CONUS/GRIDMET/MONTHLY/v2_0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenET_DISALEXI_CONUS_GRIDMET_MONTHLY_v2_0
- 数据引用：Anderson, M., Gao, F., Knipper, K., Hain, C., Dulaney, W., Baldocchi, D .,
Eichelmann, E., Hemes, K., Yang, Y., Medellin-Azuara, J. and Kustas, W.,
2018. Field-scale assessment of land and water use change over the
California Delta using remote sensing. Remote Sensing, 10(6), p.889.
[doi:10.3390/rs10060889](https://doi.org/10.3390/rs10060889)

- DOI：10.3390/rs10060889

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
