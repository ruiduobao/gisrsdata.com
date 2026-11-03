---
title: "Farmscapes 2020 Vectorised"
date: 2026-11-03 12:00:00
permalink: /pages/bf7bee38/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "biodiversity"
  - "climate"
  - "conservation"
  - "ecological-connectivity"
  - "forest"
  - "landuse-landcover"
  - "table"
---

# Farmscapes 2020 Vectorised

## 数据集简介

This is the vectorised version of the [Farmscapes 2020](projects_nature-trace_assets_farmscapes_england_v1_0)
raster dataset. It provides polygon geometries representing fine-scale
semi-natural landscape features (specifically hedgerows, woodland, and stone
walls) across England's agricultural landscapes. This dataset was developed
in collaboration with the Oxford Leverhulme Centre for Nature Recovery to
serve as a baseline for applications including landscape restoration,
biodiversity monitoring, and ecological connectivity analysis.

It is derived by vectorising the high-resolution (25cm) Farmscapes 2020
probability maps, filtered to exclude 'hedge gap' features, and simplified
to retain only the feature classification attribute.

**Limitations**

* Geographic Scope: Model performance is reduced in dense urban
environments and mountainous areas, which were underrepresented in the
training data that focused primarily on rural landscapes.
* Temporal Accuracy: The source imagery was captured between 2018 and 2020.
Consequently, the dataset does not account for landscape changes that have
occurred since this period.
* Class-Specific performance: The stone wall class exhibits lower
accuracy compared to woodland and hedgerows, a result of
significant class imbalance in the training data.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/nature-trace/assets/farmscapes/england_v1_0_vectorised`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：Google、Google Earth Engine
- 时间范围：2018-01-01 至 2020-12-31
- 许可：CC-BY-4.0
- 关键词：biodiversity, climate, conservation, ecological-connectivity, forest, landuse-landcover, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| feature_name | STRING | The type of the landscape feature: "hedgerow", "copse", "linear_woodland", "stone wall", or "woodland". |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('projects/nature-trace/assets/farmscapes/england_v1_0_vectorised');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_nature-trace_assets_farmscapes_england_v1_0_vectorised
- 数据引用：Michelangelo Conserva, Alex Wilson, Charlotte Stanton, Vishal Batchu, Varun
Gulshan , "Mapping Farmed Landscapes from Remote Sensing" (in review).
[doi:10.48550/arXiv.2506.13993](https://doi.org/10.48550/arXiv.2506.13993),


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
