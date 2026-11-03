---
title: "FAO GAUL: Global Administrative Unit Layers 2015, First-Level Administrative Units [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/2a1a3734/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "borders"
  - "departments"
  - "fao"
  - "gaul"
  - "infrastructure-boundaries"
  - "provinces"
  - "states"
  - "table"
  - "un"
---

# FAO GAUL: Global Administrative Unit Layers 2015, First-Level Administrative Units [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The Global Administrative Unit Layers (GAUL) compiles and disseminates the
best available information on administrative units for all the countries in
the world, providing a contribution to the standardization of the spatial
dataset representing administrative units. The GAUL always maintains global
layers with a unified coding system at country, first (e.g. departments),
and second administrative levels (e.g. districts). Where data is available,
it provides layers on a country by country basis down to third, fourth, and
lowers levels. The overall methodology consists in a) collecting the best
available data from most reliable sources, b) establishing validation
periods of the geographic features (when possible), c) adding selected data
to the global layer based on the last country boundaries map provided by
the UN Cartographic Unit (UNCS), d) generating codes using GAUL Coding
System, and e) distribute data to the users
(see [Technical Aspects of the GAUL Distribution Set](
  https://data.apps.fao.org:/map/catalog/srv/api/records/9c35ba10-5649-41c8-bdfc-eb78e9e65654/attachments/GAUL2015_Documentation.zip).
Note that some administrative units are multipolygon features.

## 基本信息

- 数据集编号（Earth Engine ID）：`FAO/GAUL/2015/level1`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：FAO UN、Google Earth Engine
- 时间范围：2014-12-19 至 2014-12-19
- 许可：proprietary
- 关键词：borders, departments, fao, gaul, infrastructure-boundaries, provinces, states, table, un

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| ADM0_CODE | INT | GAUL country code |
| ADM0_NAME | STRING | UN country name |
| DISP_AREA | STRING | Unsettled territory: 'Yes' or 'No' |
| STATUS | STRING | Status of the country |
| Shape_Area | DOUBLE | Shape area |
| Shape_Leng | DOUBLE | Shape length |
| ADM1_CODE | INT | GAUL code of administrative units at first level |
| ADM1_NAME | STRING | Name of administrative units at first level |
| EXP1_YEAR | INT | Expiry year of the administrative unit |
| STR1_YEAR | INT | Creation year of the administrative unit |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('FAO/GAUL/2015/level1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/FAO_GAUL_2015_level1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
