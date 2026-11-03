---
title: "MODIS Terra Daily NDSI [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/c8d775aa/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "global"
  - "mod09ga"
  - "modis"
  - "ndsi"
  - "surface-reflectance"
  - "terra"
  - "usgs"
  - "vegetation-indices"
---

# MODIS Terra Daily NDSI [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The Normalized Difference Snow Index is used to
identify snow, based on its characteristically higher reflectance in
the visible portion of the spectrum compared to the mid-IR.  NDSI is
computed using the Green and Mid-IR bands, and has a range of -1.0 to
1.0. See
[Riggs et al. (1994)](https://doi.org/10.1109/IGARSS.1994.399618)
for details. This product is generated from the MODIS/MOD09GA surface reflectance composites.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/MOD09GA_NDSI`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google、Google Earth Engine
- 时间范围：2000-02-24 至 2017-03-30
- 许可：proprietary
- 关键词：daily, global, mod09ga, modis, ndsi, surface-reflectance, terra, usgs, vegetation-indices

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDSI | Normalized Difference Snow Index | 463.312716528 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/MOD09GA_NDSI');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09GA_NDSI

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
