---
title: "GHSL: Global settlement characteristics (10 m) 2018 (P2023A)"
date: 2026-11-03 12:00:00
permalink: /pages/465f5706/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "building"
  - "built"
  - "builtup"
  - "copernicus"
  - "ghsl"
  - "height"
  - "jrc"
  - "landcover"
  - "population"
  - "roads"
  - "sdg"
  - "sentinel2-derived"
---

# GHSL: Global settlement characteristics (10 m) 2018 (P2023A)

## 数据集简介

This spatial raster dataset delineates human settlements at 10 m resolution,
and describes their inner characteristics in terms of the functional and
height-related components of the built environment.

More information about the GHSL data products can be found in the [GHSL Data
Package 2023 report]
(https://ghsl.jrc.ec.europa.eu/documents/GHSL_Data_Package_2023.pdf?t=1683540422)

The Global Human Settlement Layer (GHSL) project is supported by the European
Commission, Joint Research Centre, and Directorate-General for Regional and
Urban Policy.

## 基本信息

- 数据集编号（Earth Engine ID）：`JRC/GHSL/P2023A/GHS_BUILT_C`
- 数据类型：影像集合（ImageCollection）
- 提供方：EC JRC、Google Earth Engine
- 时间范围：2018-01-01 至 2018-12-31
- 空间分辨率：10 米
- 许可：proprietary
- 关键词：building, built, builtup, copernicus, ghsl, height, jrc, landcover, population, roads, sdg, sentinel2-derived, settlement, urban

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| built_characteristics | Settlement characteristics | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2023A/GHS_BUILT_C');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_C
- DOI：10.2905/3c60ddf6-0586-4190-854b-f6aa0edc2a30

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
