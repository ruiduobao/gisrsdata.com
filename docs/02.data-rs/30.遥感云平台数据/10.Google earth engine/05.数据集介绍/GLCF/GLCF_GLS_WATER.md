---
title: "GLCF: Landsat Global Inland Water"
date: 2026-11-03 12:00:00
permalink: /pages/500a347f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "glcf"
  - "landsat-derived"
  - "nasa"
  - "surface-ground-water"
  - "umd"
  - "water"
---

# GLCF: Landsat Global Inland Water

## 数据集简介

The Global Inland Water dataset shows inland surface water bodies, including
fresh and saline lakes, rivers, and reservoirs.

From the GLS 2000 epoch, 3,650,723 km2 of inland water were identified,
around three quarters of which were in North America and Asia. Boreal
forests and tundra hold the largest portion of inland water, about 40% of
the global total. The data exhibits strong linear correlation with both the
MODIS dataset as well as 30-m resolution datasets over the United States
and Canada. Residual errors were due primarily to the seasonality of water
cover, snow and ice, and residual clouds.

The dataset contains one or more image for each available Landsat WRS2
path/row.

Documentation:

* [User's guide](https://lpdaac.usgs.gov/documents/1371/GFCC_User_Guide_V1.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1370/GFCC_ATBD.pdf)

## 基本信息

- 数据集编号（Earth Engine ID）：`GLCF/GLS_WATER`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-01-01 至 2000-12-31
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：glcf, landsat-derived, nasa, surface-ground-water, umd, water

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| water | Water classification | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('GLCF/GLS_WATER');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GLCF_GLS_WATER
- 数据引用：Data Citation: Global Inland Water, {Year, ...}, Global Land Cover
Facility.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
