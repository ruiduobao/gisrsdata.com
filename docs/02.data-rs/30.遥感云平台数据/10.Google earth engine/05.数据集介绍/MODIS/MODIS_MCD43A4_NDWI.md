---
title: "MODIS Combined 16-Day NDWI [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/5a2149b5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "brdf"
  - "global"
  - "mcd43a4"
  - "modis"
  - "nbar"
  - "ndwi"
  - "reflectance"
  - "surface-reflectance"
  - "usgs"
  - "vegetation-indices"
---

# MODIS Combined 16-Day NDWI [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The Normalized Difference Water Index (NDWI) is sensitive
to changes in liquid water content of vegetation canopies.  It is
derived from the Near-IR band and a second IR band, &approx;1.24&mu;m when
available and the nearest available IR band otherwise.  It ranges in
value from -1.0 to 1.0.  See
[Gao (1996)](https://www.sciencedirect.com/science/article/pii/S0034425796000673)
for details. This product is generated from the MODIS/MCD43A4 surface reflectance composites.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/MCD43A4_NDWI`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google、Google Earth Engine
- 时间范围：2000-02-18 至 2017-03-14
- 许可：proprietary
- 关键词：16-day, brdf, global, mcd43a4, modis, nbar, ndwi, reflectance, surface-reflectance, usgs, vegetation-indices

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDWI | Normalized Difference Water Index | 463.312716528 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/MCD43A4_NDWI');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4_NDWI

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
