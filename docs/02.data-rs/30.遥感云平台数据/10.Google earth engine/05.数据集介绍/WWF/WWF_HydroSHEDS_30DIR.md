---
title: "WWF HydroSHEDS Drainage Direction, 30 Arc-Seconds"
date: 2026-11-03 12:00:00
permalink: /pages/0316ee5d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "direction"
  - "drainage"
  - "flow"
  - "geophysical"
  - "hydrography"
  - "hydrology"
  - "hydrosheds"
  - "srtm"
  - "surface-ground-water"
  - "water"
  - "wwf"
---

# WWF HydroSHEDS Drainage Direction, 30 Arc-Seconds

## 数据集简介

HydroSHEDS is a mapping product that provides hydrographic
information for regional and global-scale applications in a consistent
format. It offers a suite of geo-referenced datasets (vector and
raster) at various scales, including river networks, watershed
boundaries, drainage directions, and flow accumulations. HydroSHEDS
is based on elevation data obtained in 2000 by NASA's Shuttle Radar
Topography Mission (SRTM).

This drainage direction dataset defines the direction
of flow from each cell in the conditioned DEM to its steepest
down-slope neighbor. Values of drainage direction vary from 1
to 128. All final outlet cells to the ocean are flagged with
a value of 0. All cells that mark the lowest point of an endorheic
basin (inland sink) are flagged with a value of -1. The drainage
direction values follow the convention adopted by ESRI's flow
direction implementation: 1=E, 2=SE, 4=S, 8=SW, 16=W, 32=NW,
64=N, 128=NE. \
\
 This dataset is at 30 arc-second resolution.
The datasets available at 30 arc-seconds are the Hydrologically
Conditioned DEM, Drainage (Flow) Direction, and Flow Accumulation.

Note that the quality of the HydroSHEDS data is significantly lower for regions above
60 degrees northern latitude as there is no underlying SRTM elevation data available
and thus a coarser-resolution DEM was (HYDRO1k provided by USGS).

HydroSHEDS was developed by the World Wildlife Fund (WWF)
Conservation Science Program in partnership with the U.S. Geological
Survey, the International Centre for Tropical Agriculture, The
Nature Conservancy, and the Center for Environmental Systems Research
of the University of Kassel, Germany.

## 基本信息

- 数据集编号（Earth Engine ID）：`WWF/HydroSHEDS/30DIR`
- 数据类型：影像（Image）
- 提供方：WWF、Google Earth Engine
- 时间范围：2000-02-11 至 2000-02-22
- 空间分辨率：927.67 米
- 许可：proprietary
- 关键词：direction, drainage, flow, geophysical, hydrography, hydrology, hydrosheds, srtm, surface-ground-water, water, wwf

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| b1 | Drainage direction possible values: 1=E, 2=SE, 4=S, 8=SW, 16=W, 32=NW, 64=N, 128=NE; final outlet cells to the ocean are flagged with a value of 0 and cells that mark the lowest point of an endorheic basin (inland sink) are flagged with a value of 255 (original value of -1)  | 927.67 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('WWF/HydroSHEDS/30DIR');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WWF_HydroSHEDS_30DIR
- 数据引用：Lehner, B., Verdin, K., Jarvis, A. (2008): New global hydrography
derived from spaceborne elevation data. Eos, Transactions, AGU,
89(10): 93-94.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
