---
title: "US Physiography"
date: 2026-11-03 12:00:00
permalink: /pages/2e93f898/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aspect"
  - "csp"
  - "elevation"
  - "elevation-topography"
  - "ergo"
  - "geophysical"
  - "landforms"
  - "slope"
  - "topography"
  - "us"
---

# US Physiography

## 数据集简介

The Physiography dataset represents the spatial intersection of landforms
(available in EE as ERGo/1_0/US/landforms) and lithology (available in EE
as ERGo/1_0/US/lithology) data layers. It provides 247 unique combinations
out of a possible 270. The values for each type are formed by concatenating
the landform and lithology types (e.g., 1101 is \"Peak/ridge\" landform on
\"carbonate\" lithology). This data layer is sometimes referred to as
characterizing \"land facets\".

The landforms layer is based on the USGS's 10m NED DEM (available in EE
as USGS/NED). The lithology layer is not basen on any DEM.

This dataset is provided just for the US, because of the availability
of the lithology data layer, though these data are likely available for
other countries.

## 基本信息

- 数据集编号（Earth Engine ID）：`CSP/ERGo/1_0/US/physiography`
- 数据类型：影像（Image）
- 提供方：Conservation Science Partners、Google Earth Engine
- 时间范围：2006-01-24 至 2011-05-13
- 空间分辨率：90 米
- 许可：CC-BY-NC-SA-4.0
- 关键词：aspect, csp, elevation, elevation-topography, ergo, geophysical, landforms, slope, topography, us

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| constant | Landforms and lithology intersection | 90 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('CSP/ERGo/1_0/US/physiography');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CSP_ERGo_1_0_US_physiography
- 数据引用：Theobald, D. M., Harrison-Atlas, D., Monahan, W. B., & Albano, C. M.
(2015). Ecologically-relevant maps of landforms and physiographic diversity
for climate adaptation planning. PloS one, 10(12),
[e0143619](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0143619)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
