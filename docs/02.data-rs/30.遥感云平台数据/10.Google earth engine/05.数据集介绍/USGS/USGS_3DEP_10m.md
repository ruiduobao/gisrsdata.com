---
title: "USGS 3DEP 10m National Map Seamless (1/3 Arc-Second) [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/c31e8291/
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

# USGS 3DEP 10m National Map Seamless (1/3 Arc-Second) [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

This is the seamless 3DEP DEM dataset for the U.S.
with full coverage of the 48 conterminous states, Hawaii, and
U.S. territories. Alaska coverage is partially available now and is being
expanded to statewide coverage as part of the Alaska Mapping Initiative.
Ground spacing is approximately 10 meters north/south, but variable
east/west due to convergence of meridians with latitude.

Spatial metadata dataset is ingested as a separate asset
[USGS_3DEP_10m_metadata](USGS_3DEP_10m_metadata).

The 1m dataset is ingested
as [USGS_3DEP_1m](USGS_3DEP_1m).

Dataset uploaded by [Farmers Business Network](https://fbn.com).

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/3DEP/10m`
- 数据类型：影像（Image）
- 提供方：United States Geological Survey、Google Earth Engine
- 时间范围：1998-08-16 至 2020-05-06
- 许可：proprietary
- 关键词：3dep, dem, elevation, elevation-topography, geophysical, topography, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | Elevation | 10.2 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('USGS/3DEP/10m');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_3DEP_10m
- 数据引用：U.S. Geological Survey, 3D Elevation Program 10-Meter Resolution Digital Elevation Model.

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
