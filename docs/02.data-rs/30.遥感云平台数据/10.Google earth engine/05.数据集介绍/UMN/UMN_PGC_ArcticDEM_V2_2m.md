---
title: "ArcticDEM Strips [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/83a5ad4e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "arctic"
  - "dem"
  - "elevation-topography"
  - "geophysical"
  - "pgc"
  - "umn"
---

# ArcticDEM Strips [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

ArcticDEM is a digital surface model (DSM) that portrays first-return
elevation values that include vegetation, tree canopy, buildings, and other
man-made surface features. The 2m asset is a collection of strips rather
than a single mosaic due to projection differences between strips.

Strip DEM files correspond to the overlapping area of the input stereopair
image swaths as they are collected by DigitalGlobe's constellation of
polar-orbiting satellites. Strip DEM dimensions will vary according to the
satellite sensor that acquired the images and the off-nadir angle of
collection. Most strips are between 16km and 18km in width, and 110km and
120km in length.

## 基本信息

- 数据集编号（Earth Engine ID）：`UMN/PGC/ArcticDEM/V2/2m`
- 数据类型：影像集合（ImageCollection）
- 提供方：University of Minnesota Polar Geospatial Center、Google Earth Engine
- 时间范围：2009-08-16 至 2017-03-12
- 空间分辨率：2 米
- 许可：proprietary
- 关键词：arctic, dem, elevation-topography, geophysical, pgc, umn

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | Elevation | 2 |  |
| matchtag | Bitmask raster indicating DEM pixels processing | 2 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('UMN/PGC/ArcticDEM/V2/2m');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UMN_PGC_ArcticDEM_V2_2m
- 数据引用：DEM(s) created by the Polar Geospatial Center from DigitalGlobe, Inc. imagery.

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
