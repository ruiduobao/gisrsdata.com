---
title: "USGS National Elevation Dataset 1/3 Arc-Second [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/74957af4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
  - "ned"
  - "topography"
  - "usgs"
---

# USGS National Elevation Dataset 1/3 Arc-Second [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The National Elevation Dataset (NED) used to be* the
primary elevation data product of the USGS. The NED is a seamless
dataset with the best available raster elevation data of the
conterminous United States, parts of Alaska, Hawaii, and some
territorial islands. The NED is derived from diverse source data
that are processed to a common coordinate system and unit of
vertical measure. NED data are distributed in conformance with
the North American Datum of 1983 (NAD 83). All elevation values
are in meters and, over the conterminous United States, are referenced
to the North American Vertical Datum of 1988 (NAVD 88). The vertical
reference will vary in other areas.

*For over 15 years, the NED was the primary elevation data product
of the USGS' National Map. However, it has been renamed and now
considered just one component of elevation in The National
Map after the 3D Elevation Program became operational.

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/NED`
- 数据类型：影像（Image）
- 提供方：United States Geological Survey、Google Earth Engine
- 时间范围：2012-02-07 至 2012-02-07
- 许可：proprietary
- 关键词：dem, elevation, elevation-topography, geophysical, ned, topography, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | Elevation | 10.2 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('USGS/NED');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_NED
- 数据引用：USGS National Elevation Dataset courtesy of the U.S. Geological Survey

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
