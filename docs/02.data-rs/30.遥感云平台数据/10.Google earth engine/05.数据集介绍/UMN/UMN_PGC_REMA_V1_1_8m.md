---
title: "REMA Mosaic"
date: 2026-11-03 12:00:00
permalink: /pages/74767b42/
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

# REMA Mosaic

## 数据集简介

The Reference Elevation Model of Antarctica (REMA) is a high resolution,
time-stamped Digital Surface Model (DSM) of Antarctica at 2-meter and 8-meter
spatial resolutions.

Mosaicked DEM files are compiled from multiple strips that have been
co-registered, blended, and feathered to reduce edge-matching artifacts.

## 基本信息

- 数据集编号（Earth Engine ID）：`UMN/PGC/REMA/V1_1/8m`
- 数据类型：影像（Image）
- 提供方：University of Minnesota Polar Geospatial Center、Google Earth Engine
- 时间范围：2009-01-01 至 2018-01-01
- 空间分辨率：8 米
- 许可：proprietary
- 关键词：dem, elevation-topography, geophysical, pgc, rema, umn

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | Elevation | 8 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('UMN/PGC/REMA/V1_1/8m');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UMN_PGC_REMA_V1_1_8m
- 数据引用：Howat, I. M., Porter, C., Smith, B. E., Noh, M.-J., and Morin, P.:
The Reference Elevation Model of Antarctica, The Cryosphere, 13, 665-674, 2019.

- DOI：10.5194/tc-13-665-2019

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
