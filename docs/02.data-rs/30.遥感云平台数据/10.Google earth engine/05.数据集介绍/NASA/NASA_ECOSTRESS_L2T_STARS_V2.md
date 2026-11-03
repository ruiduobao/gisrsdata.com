---
title: "ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002"
date: 2026-11-03 12:00:00
permalink: /pages/a7bebe55/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "ecostress"
  - "land"
  - "ndvi"
  - "plant-productivity"
---

# ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002

## 数据集简介

The ECOSTRESS Tiled Ancillary NDVI and Albedo (ECO_L2T_STARS) V002 dataset
provides Normalized Difference Vegetation Index (NDVI) and albedo data at a
70m spatial resolution. This ancillary product, essential for understanding
plant water needs and stress, is created through a data fusion process that
combines Visible Infrared Imaging Radiometer Suite (VIIRS) and Harmonized
Landsat Sentinel (HLS) data. The fusion is performed using the STARS
algorithm, a Bayesian timeseries methodology, to align the data with
daytime ECOSTRESS overpasses. This product is only generated for
corresponding ECOSTRESS Land Surface Temperature and Emissivity tiles.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/1655/ECO_L1C-4_Grid_Tile_User_Guide_V2.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1869/ECOSTRESSL3JET_ATBD_V1.pdf)

* [General Documentation](https://github.com/nasa/ECOSTRESS-Data-Resources)

* [Land Processes Distributed Active Archive Center](https://www.earthdata.nasa.gov/centers/lp-daac)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/ECOSTRESS/L2T_STARS/V2`
- 数据类型：影像集合（ImageCollection）
- 提供方：Land Processes Distributed Active Archive Center、Google Earth Engine
- 时间范围：2018-07-09 至 2026-10-21
- 空间分辨率：70 米
- 许可：proprietary
- 关键词：albedo, ecostress, land, ndvi, plant-productivity

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDVI | Normalized Difference Vegetation Index (NDVI) | 70 |  |
| NDVI-UQ | Normalized Difference Vegetation Index (NDVI) uncertainty.  | 70 |  |
| albedo | Albedo | 70 |  |
| albedo-UQ | Albedo uncertainty.  | 70 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/ECOSTRESS/L2T_STARS/V2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_ECOSTRESS_L2T_STARS_V2
- 数据引用：Hook, Simon, et al. ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m
v002. NASA Land Processes Distributed Active Archive Center, 2023,
doi:[10.5067/ECOSTRESS/ECO_L2T_STARS.002](https://doi.org/10.5067/ECOSTRESS/ECO_L2T_STARS.002)

- DOI：10.5067/ECOSTRESS/ECO_L2T_STARS.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
