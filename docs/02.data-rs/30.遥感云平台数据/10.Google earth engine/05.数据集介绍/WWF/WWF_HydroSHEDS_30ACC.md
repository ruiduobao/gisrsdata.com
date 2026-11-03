---
title: "WWF HydroSHEDS Flow Accumulation, 30 Arc-Seconds"
date: 2026-11-03 12:00:00
permalink: /pages/f9212348/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "accumulation"
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

# WWF HydroSHEDS Flow Accumulation, 30 Arc-Seconds

## 数据集简介

HydroSHEDS is a mapping product that provides hydrographic
information for regional and global-scale applications in a consistent
format. It offers a suite of geo-referenced datasets (vector and
raster) at various scales, including river networks, watershed
boundaries, drainage directions, and flow accumulations. HydroSHEDS
is based on elevation data obtained in 2000 by NASA's Shuttle Radar
Topography Mission (SRTM).

This flow accumulation dataset defines the amount of
upstream area (in number of cells) draining into each cell. The
drainage direction layer is used to define which cells flow into
the target cell. The number of accumulated cells is essentially
a measure of the upstream catchment area. However, since the
cell size of the HydroSHEDS data set depends on latitude, the
cell accumulation value cannot directly be translated into drainage
areas in square kilometers. Values range from 1 at topographic
highs (river sources) to very large numbers (on the order of
millions of cells) at the mouths of large rivers.

This dataset
is at 30 arc-second resolution. The datasets available at 30
arc-seconds are the Hydrologically Conditioned DEM, Drainage
(Flow) Direction, and Flow Accumulation.

Note that the quality of the HydroSHEDS data is significantly lower for regions above
60 degrees northern latitude as there is no underlying SRTM elevation data available
and thus a coarser-resolution DEM was (HYDRO1k provided by USGS).

HydroSHEDS was developed by the World Wildlife Fund (WWF)
Conservation Science Program in partnership with the U.S. Geological
Survey, the International Centre for Tropical Agriculture, The
Nature Conservancy, and the Center for Environmental Systems Research
of the University of Kassel, Germany.

## 基本信息

- 数据集编号（Earth Engine ID）：`WWF/HydroSHEDS/30ACC`
- 数据类型：影像（Image）
- 提供方：WWF、Google Earth Engine
- 时间范围：2000-02-11 至 2000-02-22
- 空间分辨率：927.67 米
- 许可：proprietary
- 关键词：accumulation, drainage, flow, geophysical, hydrography, hydrology, hydrosheds, srtm, surface-ground-water, water, wwf

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| b1 | Flow accumulation | 927.67 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('WWF/HydroSHEDS/30ACC');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WWF_HydroSHEDS_30ACC
- 数据引用：Lehner, B., Verdin, K., Jarvis, A. (2008): New global hydrography
derived from spaceborne elevation data. Eos, Transactions, AGU,
89(10): 93-94.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
