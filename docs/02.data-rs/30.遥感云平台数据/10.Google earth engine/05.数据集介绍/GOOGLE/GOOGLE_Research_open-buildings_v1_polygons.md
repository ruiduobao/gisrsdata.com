---
title: "Open Buildings V1 Polygons [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/a6665342/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "africa"
  - "building"
  - "built-up"
  - "open-buildings"
  - "population"
  - "structure"
  - "table"
---

# Open Buildings V1 Polygons [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

This large-scale open dataset consists of outlines of buildings derived
from high-resolution 50 cm satellite imagery. It contains 516M building
detections across an area of 19.4M km2 (64% of the African continent).

For each building in this dataset we include the polygon describing its
footprint on the ground, a confidence score indicating how sure we are that
this is a building, and a [Plus Code](https://plus.codes/) corresponding to
the center of the building. There is no information about the type of
building, its street address, or any details other than its geometry.

Building footprints are useful for a range of important applications: from
population estimation, urban planning and humanitarian response to
environmental and climate science. The project being based in Ghana, the
current focus is on the continent of Africa.

Inference was carried out during April 2021.

For more details see the official
[website](https://sites.research.google/open-buildings/) of the Open
Buildings dataset.

Note that updated versions of this data are available. The newest version,
Version 3.0 (with inference carried out on May 2023), is available as
[GOOGLE/Research/open-buildings/v3/polygons](GOOGLE_Research_open-buildings_v3_polygons).

## 基本信息

- 数据集编号（Earth Engine ID）：`GOOGLE/Research/open-buildings/v1/polygons`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：Google Research - Open Buildings、Google Earth Engine
- 时间范围：2021-04-30 至 2021-04-30
- 许可：CC-BY-4.0
- 关键词：africa, building, built-up, open-buildings, population, structure, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| area_in_meters | DOUBLE | Area in square meters of the polygon. |
| confidence | DOUBLE | Confidence score [0.5;1.0] assigned by the model. |
| full_plus_code | STRING | The full [Plus Code](https://plus.codes/) at the building polygon centroid. |
| longitude_latitude | GEOMETRY | Centroid of the polygon. |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('GOOGLE/Research/open-buildings/v1/polygons');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_Research_open-buildings_v1_polygons
- 数据引用：W. Sirko, S. Kashubin, M. Ritter, A. Annkah, Y.S.E. Bouchareb, Y. Dauphin,
D. Keysers, M. Neumann, M. Cisse, J.A. Quinn. Continental-scale building
detection from high resolution satellite imagery.
[arXiv:2107.12283](https://arxiv.org/abs/2107.12283), 2021.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
