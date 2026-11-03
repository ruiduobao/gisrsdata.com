---
title: "MODIS Combined 16-Day NDVI [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/078c2d96/
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
  - "ndvi"
  - "reflectance"
  - "surface-reflectance"
  - "usgs"
  - "vegetation-indices"
---

# MODIS Combined 16-Day NDVI [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The Normalized Difference Vegetation Index is
generated from the Near-IR and Red bands of each scene as (NIR - Red) /
(NIR + Red), and ranges in value from -1.0 to 1.0. This product is generated from the MODIS/MCD43A4 surface reflectance composites.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/MCD43A4_NDVI`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google、Google Earth Engine
- 时间范围：2000-02-18 至 2017-03-14
- 许可：proprietary
- 关键词：16-day, brdf, global, mcd43a4, modis, nbar, ndvi, reflectance, surface-reflectance, usgs, vegetation-indices

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDVI | Normalized Difference Vegetation Index | 463.312716528 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/MCD43A4_NDVI');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4_NDVI

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
