---
title: "FAO GAUL: Global Administrative Unit Layers 2025, First-Level Administrative Units"
date: 2026-11-03 12:00:00
permalink: /pages/f5c20320/
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

# FAO GAUL: Global Administrative Unit Layers 2025, First-Level Administrative Units

## 数据集简介

The administrative boundaries dataset at level 1 (sub-national level) is part
of the Global Administrative Unit Layers (GAUL 2025) dataset series which
includes information on administrative units for all countries in the world,
providing a contribution to the standardization of the spatial dataset
representing administrative units.

The administrative boundaries at the level 1 dataset distinguishes States,
Provinces, Departments and equivalents.

The GAUL maintains global layers with a unified coding system at country,
first (e.g. departments), and second administrative levels (e.g. districts).
The overall GAUL methodology consists in a) collecting the best available
data from most reliable sources, b) assembling national datasets into a
common dataset by matching international boundaries with a reference
authoritative dataset (UN 2018), c) standardizing attributes to a common
table of attributes, d) generating codes using the GAUL Coding System,
e) applying a topology, and f) validating metadata for each country
(see [Technical Guidelines of the GAUL 2024 Set](
  https://doi.org/10.4060/cd4262en)).
Note that some administrative units are multipolygon features.

## 基本信息

- 数据集编号（Earth Engine ID）：`FAO/GAUL/2025/level1`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：FAO UN、Google Earth Engine
- 时间范围：2025-01-01 至 2025-12-31
- 许可：CC-BY-4.0
- 关键词：borders, departments, fao, gaul, infrastructure-boundaries, provinces, states, table, un

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| FID | INT | Internal feature identifier |
| ISO3_CODE | STRING | ISO 3166-1 alpha-3 country code |
| MAP_CODE | STRING | Map code for statistical joins |
| GAUL0_CODE | INT | GAUL country code |
| GAUL0_NAME | STRING | Country name (UN standard) |
| GAUL1_CODE | INT | GAUL code of administrative units at first level |
| GAUL1_NAME | STRING | Name of administrative units at first level |
| CONTINENT | STRING | Continent name |
| DISP_EN | STRING | Hierarchical display label in English |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('FAO/GAUL/2025/level1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/FAO_GAUL_2025_level1
- 数据引用：FAO. 2025. Global Administrative Unit Layers (GAUL). https://data.apps.fao.org. Licence: CC-BY-4.0


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
