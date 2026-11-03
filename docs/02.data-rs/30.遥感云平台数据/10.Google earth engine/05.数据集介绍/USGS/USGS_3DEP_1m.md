---
title: "USGS 3DEP 1m National Map"
date: 2026-11-03 12:00:00
permalink: /pages/794cb1ab/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "3dep"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
  - "topography"
  - "usgs"
---

# USGS 3DEP 1m National Map

## 数据集简介

This is a tiled collection of images with 1m pixel size from the 3D
Elevation Program (3DEP). The 3DEP data holdings serve as the elevation
layer of The National Map and provide foundational elevation information for
earth science studies and mapping applications in the United States.

The elevations in this DEM represent the topographic bare-earth surface.
USGS standard 1m pixel size DEMs are produced exclusively from high
resolution light detection and ranging (lidar) source data of images with 1m
pixel size or higher resolution. 1m pixel size DEM surfaces are seamless
within collection projects but not necessarily seamless across projects.
The spatial reference used for tiles of the 1m pixel size DEM within the
conterminous United States (CONUS) is Universal Transverse Mercator (UTM) in
units of meters and in conformance with the North American Datum of 1983
(NAD83). All bare earth elevation values are in meters and are referenced to
the North American Vertical Datum of 1988 (NAVD88). Each tile is distributed
in the UTM Zone in which it lies. If a tile crosses two UTM zones, it is
delivered in both zones.
In this and other cases of image overlaps, elevation values might be
slightly different in different images covering the same area.

The 1m pixel size DEM is the highest resolution standard DEM offered in the
3DEP product suite. The 10m 3DEP dataset is available at
[USGS_3DEP_10m_collection](USGS_3DEP_10m_collection).

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/3DEP/1m`
- 数据类型：影像集合（ImageCollection）
- 提供方：United States Geological Survey、Google Earth Engine
- 时间范围：2003-07-23 至 2025-04-08
- 许可：proprietary
- 关键词：3dep, dem, elevation, elevation-topography, geophysical, topography, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | Elevation (NAVD88) | 1 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('USGS/3DEP/1m');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_3DEP_1m
- 数据引用：U.S. Geological Survey, 3D Elevation Program 1-Meter Resolution Digital
Elevation Model.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
