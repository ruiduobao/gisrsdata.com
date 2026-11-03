---
title: "geoBoundaries: Political administrative boundaries at District level (ADM1), v6.0.0"
date: 2026-11-03 12:00:00
permalink: /pages/cad0e333/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "borders"
  - "countries"
  - "infrastructure-boundaries"
  - "table"
---

# geoBoundaries: Political administrative boundaries at District level (ADM1), v6.0.0

## 数据集简介

The geoBoundaries Global Database of Political Administrative Boundaries
Database is an online, open license resource of boundaries (i.e., state,
county) for every country in the world. Currently 199 total entities are
tracked, including all 195 UN member states, Greenland, Taiwan, Niue, and
Kosovo.

Comprehensive Global Administrative Zones (CGAZ) is a set of global
composites for administrative boundaries. Disputed areas are removed and
replaced with polygons following US Department of State definitions. It has
three boundary levels ADM0, ADM1, and ADM2, clipped to international
boundaries (US Department of State), with gaps filled between borders.

This dataset is part of CGAZ. It was ingested from
[version 6.0.0](https://github.com/wmgeolab/geoBoundaries/tree/1289e40e366c7b320550be1ee0614a9472d572d4)
of Global Composite Files with DBF_DATE_LAST_UPDATE=2023-09-13.
It shows boundaries at level 
ADM1 (district-level boundaries).

## 基本信息

- 数据集编号（Earth Engine ID）：`WM/geoLab/geoBoundaries/600/ADM1`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：William and Mary geoLab、Google Earth Engine
- 时间范围：2023-09-14 至 2023-09-14
- 许可：CC-BY-4.0
- 关键词：borders, countries, infrastructure-boundaries, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| shapeGroup | STRING | Unique country code |
| shapeName | STRING | Administrative region name |
| shapeType | STRING | Boundary type:  * ADM0: Country level * ADM1: District level * ADM2: Municipality level   |
| shapeID | DOUBLE | Unique ID assigned to the shape |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('WM/geoLab/geoBoundaries/600/ADM1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WM_geoLab_geoBoundaries_600_ADM1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
