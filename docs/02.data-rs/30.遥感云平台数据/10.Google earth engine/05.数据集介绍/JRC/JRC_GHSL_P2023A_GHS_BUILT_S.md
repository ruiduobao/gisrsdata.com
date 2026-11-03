---
title: "GHSL: Global built-up surface 1975-2030 (P2023A)"
date: 2026-11-03 12:00:00
permalink: /pages/9724c860/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "built"
  - "built-environment"
  - "builtup"
  - "copernicus"
  - "ghsl"
  - "jrc"
  - "landcover"
  - "landsat-derived"
  - "population"
  - "sdg"
  - "sentinel2-derived"
  - "settlement"
---

# GHSL: Global built-up surface 1975-2030 (P2023A)

## 数据集简介

This raster dataset depicts the distribution of built-up surfaces,
expressed in square metres per 100 m grid cell.
The dataset measures:
a) the total built-up surface, and b) the built-up surface allocated to grid
cells of predominant non-residential (NRES) use. Data are
spatially-temporally interpolated or extrapolated from 1975 to 2030 in 5
year intervals.

The complete information about the GHSL main products can be
found in the [GHSL Data Package 2023 report]
(https://ghsl.jrc.ec.europa.eu/documents/GHSL_Data_Package_2023.pdf?t=1683540422)

The Global Human Settlement Layer (GHSL) project is supported by the
European Commission, Joint Research Centre, and Directorate-General for
Regional and Urban Policy.

## 基本信息

- 数据集编号（Earth Engine ID）：`JRC/GHSL/P2023A/GHS_BUILT_S`
- 数据类型：影像集合（ImageCollection）
- 提供方：EC JRC、Google Earth Engine
- 时间范围：1975-01-01 至 2030-12-31
- 空间分辨率：100 米
- 许可：proprietary
- 关键词：built, built-environment, builtup, copernicus, ghsl, jrc, landcover, landsat-derived, population, sdg, sentinel2-derived, settlement, urban

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| built_surface | Built-up surface per grid cell | 100 |  |
| built_surface_nres | Non-residential built-up surface per grid cell | 100 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2023A/GHS_BUILT_S');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_S
- DOI：10.2905/9F06F36F-4B11-47EC-ABB0-4F8B7B1D72EA

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
