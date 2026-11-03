---
title: "GHSL: Global building height 2018 (P2023A)"
date: 2026-11-03 12:00:00
permalink: /pages/13e5cfe4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alos"
  - "building"
  - "built"
  - "built-environment"
  - "builtup"
  - "copernicus"
  - "dem"
  - "ghsl"
  - "height"
  - "jrc"
  - "population"
  - "sdg"
---

# GHSL: Global building height 2018 (P2023A)

## 数据集简介

This spatial raster dataset depicts the global distribution of building
heights at a resolution of 100 m, referred to the year 2018. The input data
used to predict building heights are the ALOS Global Digital Surface Model
(30 m), the NASA Shuttle Radar Topographic Mission data (30 m), and a global
Sentinel-2 image composite from L1C data for the period 2017-2018.

More information about the GHSL data products can be found in the
[GHSL Data Package 2023 report]
(https://ghsl.jrc.ec.europa.eu/documents/GHSL_Data_Package_2023.pdf?t=1683540422),
where the building height layer is referred to as the Average Net Building
Height (ANBH).

The Global Human Settlement Layer (GHSL) project is supported by the
European Commission, Joint Research Centre, and Directorate-General for
Regional and Urban Policy.

## 基本信息

- 数据集编号（Earth Engine ID）：`JRC/GHSL/P2023A/GHS_BUILT_H`
- 数据类型：影像集合（ImageCollection）
- 提供方：EC JRC、Google Earth Engine
- 时间范围：2018-01-01 至 2018-12-31
- 空间分辨率：100 米
- 许可：proprietary
- 关键词：alos, building, built, built-environment, builtup, copernicus, dem, ghsl, height, jrc, population, sdg, sentinel2-derived, srtm, urban

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| built_height | Average building height per grid cell | 100 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2023A/GHS_BUILT_H');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_H
- DOI：10.2905/85005901-3A49-48DD-9D19-6261354F56FE

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
