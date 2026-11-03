---
title: "WWF HydroSHEDS Void-Filled DEM, 3 Arc-Seconds"
date: 2026-11-03 12:00:00
permalink: /pages/3df06780/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dem"
  - "elevation"
  - "geophysical"
  - "hydrography"
  - "hydrology"
  - "hydrosheds"
  - "srtm"
  - "surface-ground-water"
  - "topography"
  - "void-filled"
  - "water"
  - "wwf"
---

# WWF HydroSHEDS Void-Filled DEM, 3 Arc-Seconds

## 数据集简介

HydroSHEDS is a mapping product that provides hydrographic
information for regional and global-scale applications in a consistent
format. It offers a suite of geo-referenced datasets (vector and
raster) at various scales, including river networks, watershed
boundaries, drainage directions, and flow accumulations. HydroSHEDS
is based on elevation data obtained in 2000 by NASA's Shuttle Radar
Topography Mission (SRTM).

This void-filled elevation dataset is the first step
towards producing the conditioned DEM datasets. Spikes and wells
in the SRTM data were detected and voided out. Small voids were
filled by interpolation of surrounding elevations. The ocean
was set to an elevation of 0 meters, and lakes, islands, and
rivers were filled using other techniques. Full details of the
underlying digital elevation model are available in the HydroSHEDS
website and documentation.

This dataset is at 3 arc-second
resolution. The datasets available at 3 arc-seconds are the Void-Filled
DEM, Hydrologically Conditioned DEM, and Drainage (Flow) Direction.

Note that the quality of the HydroSHEDS data is significantly lower for regions above
60 degrees northern latitude as there is no underlying SRTM elevation data available
and thus a coarser-resolution DEM was (HYDRO1k provided by USGS).

HydroSHEDS was developed by the World Wildlife Fund (WWF)
Conservation Science Program in partnership with the U.S. Geological
Survey, the International Centre for Tropical Agriculture, The
Nature Conservancy, and the Center for Environmental Systems Research
of the University of Kassel, Germany.

## 基本信息

- 数据集编号（Earth Engine ID）：`WWF/HydroSHEDS/03VFDEM`
- 数据类型：影像（Image）
- 提供方：WWF、Google Earth Engine
- 时间范围：2000-02-11 至 2000-02-22
- 空间分辨率：92.77 米
- 许可：proprietary
- 关键词：dem, elevation, geophysical, hydrography, hydrology, hydrosheds, srtm, surface-ground-water, topography, void-filled, water, wwf

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| b1 | Elevation | 92.77 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('WWF/HydroSHEDS/03VFDEM');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WWF_HydroSHEDS_03VFDEM
- 数据引用：Lehner, B., Verdin, K., Jarvis, A. (2008): New global hydrography
derived from spaceborne elevation data. Eos, Transactions, AGU,
89(10): 93-94.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
