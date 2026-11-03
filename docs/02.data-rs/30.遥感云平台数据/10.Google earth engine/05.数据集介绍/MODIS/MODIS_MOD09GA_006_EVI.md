---
title: "MODIS Terra Daily EVI"
date: 2026-11-03 12:00:00
permalink: /pages/a6c681c3/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "evi"
  - "global"
  - "mod09ga"
  - "modis"
  - "surface-reflectance"
  - "terra"
  - "usgs"
  - "vegetation-indices"
---

# MODIS Terra Daily EVI

## 数据集简介

The Enhanced Vegetation Index (EVI) is generated from the
Near-IR, Red and Blue bands of each scene, and ranges in value from
-1.0 to 1.0. See
[Huete et al. (2002)](https://www.sciencedirect.com/science/article/pii/S0034425702000962)
for details. This product is generated from the MODIS/006/MOD09GA surface reflectance composites.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/MOD09GA_006_EVI`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google、Google Earth Engine
- 时间范围：2000-02-24 至 2023-02-17
- 许可：proprietary
- 关键词：daily, evi, global, mod09ga, modis, surface-reflectance, terra, usgs, vegetation-indices

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| EVI | Enhanced Vegetation Index | 463.312716528 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/MOD09GA_006_EVI');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09GA_006_EVI

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
