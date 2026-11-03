---
title: "REMA Strips 8m"
date: 2026-11-03 12:00:00
permalink: /pages/8f5528a7/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dem"
  - "elevation-topography"
  - "geophysical"
  - "pgc"
  - "rema"
  - "umn"
---

# REMA Strips 8m

## 数据集简介

The Reference Elevation Model of Antarctica (REMA) is a high resolution,
time-stamped Digital Surface Model (DSM) of Antarctica at 2-meter and 8-meter
spatial resolutions.

Strip DEM files correspond to the overlapping area of the input stereoscopic
imagery pair strips as they are collected by DigitalGlobe's constellation
of polar-orbiting satellites. Strip DEM dimensions will vary according to
the satellite sensor that acquired the images and the off-nadir angle of
collection. Most strips are between 13 km and 17 km in width, and 110 km
and 120 km in length.

## 基本信息

- 数据集编号（Earth Engine ID）：`UMN/PGC/REMA/V1/8m`
- 数据类型：影像集合（ImageCollection）
- 提供方：University of Minnesota Polar Geospatial Center、Google Earth Engine
- 时间范围：2009-01-01 至 2018-01-01
- 空间分辨率：8 米
- 许可：proprietary
- 关键词：dem, elevation-topography, geophysical, pgc, rema, umn

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | Elevation | 8 |  |
| matchtag | Bitmask raster indicating DEM pixels processing | 8 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('UMN/PGC/REMA/V1/8m');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UMN_PGC_REMA_V1_8m
- 数据引用：Howat, I. M., Porter, C., Smith, B. E., Noh, M.-J., and Morin, P.:
The Reference Elevation Model of Antarctica, The Cryosphere, 13, 665-674, 2019.

- DOI：10.5194/tc-13-665-2019

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
