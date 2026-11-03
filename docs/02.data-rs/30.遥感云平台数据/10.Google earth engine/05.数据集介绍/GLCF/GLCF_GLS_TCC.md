---
title: "GLCF: Landsat Tree Cover Continuous Fields [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/c133e62e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "forest"
  - "forest-biomass"
  - "glcf"
  - "landsat-derived"
  - "nasa"
  - "umd"
---

# GLCF: Landsat Tree Cover Continuous Fields [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The Landsat Vegetation Continuous Fields (VCF) tree cover layers contain
estimates of the percentage of horizontal ground in each 30-m pixel covered
by woody vegetation greater than 5 meters in height. The data represent
three nominal epochs, 2000, 2005 and 2010, compiled from the NASA/USGS
Global Land Survey (GLS) collection of Landsat data. The product is derived
from all seven bands of Landsat-5 Thematic Mapper (TM) and/or Landsat-7
Enhanced Thematic Mapper Plus (ETM+), depending on the GLS image selection.

Tree cover, the proportional, vertically projected area of vegetation
(including leaves, stems, branches, etc.) of woody plants above a given
height, affects terrestrial energy and water exchanges, photosynthesis and
transpiration, net primary production, and carbon and nutrient fluxes. Tree
cover also affects habitat quality and movements of wildlife, residential
property value for humans, and other ecosystem services. The continuous
classification scheme of the VCF product enables better depiction of land
cover gradients than traditional discrete classification schemes.
Importantly for detection and monitoring of forest changes (e.g.,
deforestation and degradation), tree cover provides a measurable attribute
upon which to define forest cover and its changes. Changes in tree cover
over time can be used to monitor and retrieve site-specific histories of
forest change.

The dataset has been produced for three year epochs: 2000, 2005, 2010, with
an image in the collection for each available WRS2 path/row.

## 基本信息

- 数据集编号（Earth Engine ID）：`GLCF/GLS_TCC`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-01-01 至 2010-12-31
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：forest, forest-biomass, glcf, landsat-derived, nasa, umd

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| tree_canopy_cover | The percentage of pixel area covered by trees. | 30 |  |
| uncertainty | RMSE for tree-canopy_cover | 30 |  |
| source_index | Identity of source image used for the particular pixel. This is an index into the per image metadata array 'sources'.  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('GLCF/GLS_TCC');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GLCF_GLS_TCC
- 数据引用：Data citation: Tree Canopy Cover, {Year, ...}, Global Land Cover Facility.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
