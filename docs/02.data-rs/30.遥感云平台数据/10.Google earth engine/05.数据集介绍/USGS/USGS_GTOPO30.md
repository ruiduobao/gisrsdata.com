---
title: "GTOPO30: Global 30 Arc-Second Elevation"
date: 2026-11-03 12:00:00
permalink: /pages/5a3bec59/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
  - "gtopo30"
  - "nasa"
  - "topography"
  - "usgs"
---

# GTOPO30: Global 30 Arc-Second Elevation

## 数据集简介

GTOPO30 is a global digital elevation model (DEM) with
a horizontal grid spacing of 30 arc seconds (approximately 1 kilometer).
The DEM was derived from several raster and vector sources of topographic
information.  Completed in late 1996, GTOPO30 was developed over
a three-year period through a collaborative effort led by the U.S.
Geological Survey''s Center for Earth Resources Observation and
Science (EROS). The following organizations  participated by contributing
funding or source data:  the National Aeronautics  and Space Administration
(NASA), the United Nations Environment Programme/Global Resource
Information Database (UNEP/GRID), the U.S. Agency for International
Development (USAID), the Instituto Nacional de Estadistica Geografica
e Informatica (INEGI) of Mexico, the Geographical Survey Institute  (GSI)
of Japan, Manaaki Whenua Landcare Research of New Zealand, and
the  Scientific Committee on Antarctic Research (SCAR).

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/GTOPO30`
- 数据类型：影像（Image）
- 提供方：United States Geological Survey、Google Earth Engine
- 时间范围：1996-01-01 至 1996-01-01
- 许可：proprietary
- 关键词：dem, elevation, elevation-topography, geophysical, gtopo30, nasa, topography, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | Elevation | 927.67 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('USGS/GTOPO30');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_GTOPO30
- 数据引用：GTOPO30 DEM courtesy of the U.S. Geological Survey

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
