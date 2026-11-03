---
title: "LSIB 2017: Large Scale International Boundary Polygons, Simplified"
date: 2026-11-03 12:00:00
permalink: /pages/b6805aa2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "borders"
  - "countries"
  - "dos"
  - "infrastructure-boundaries"
  - "political"
  - "table"
  - "usdos"
---

# LSIB 2017: Large Scale International Boundary Polygons, Simplified

## 数据集简介

The United States Office of the Geographer provides
the Large Scale International Boundary (LSIB) dataset. The detailed
version (2013) is derived from two other datasets: a LSIB line
vector file and the World Vector Shorelines (WVS) from the National
Geospatial-Intelligence Agency (NGA). The interior boundaries
reflect U.S. government policies on boundaries, boundary disputes,
and sovereignty. The exterior boundaries are derived from the
WVS; however, the WVS coastline data is outdated and generally
shifted from between several hundred meters to over a kilometer.
Each feature is the polygonal area enclosed by interior boundaries
and exterior coastlines where applicable, and many countries
consist of multiple features, one per disjoint region.

Compared with the detailed LSIB, in this simplified dataset some disjointed
regions of each country have been reduced to a single feature.
Furthermore, it excludes medium and smaller islands. The resulting
simplified boundary lines are rarely shifted by more than 100
meters from the detailed LSIB lines. Each of the 312 features
is a part of the geometry of one of the 284 countries described
in this dataset.

## 基本信息

- 数据集编号（Earth Engine ID）：`USDOS/LSIB_SIMPLE/2017`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：United States Department of State, Office of the Geographer、Google Earth Engine
- 时间范围：2017-03-30 至 2017-03-30
- 许可：proprietary
- 关键词：borders, countries, dos, infrastructure-boundaries, political, table, usdos

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| abbreviati | STRING | Country abbreviation |
| country_co | STRING | [Two-letter FIPS country code](https://en.wikipedia.org/wiki/List_of_FIPS_country_codes) |
| country_na | STRING | US-recognized country name |
| wld_rgn | STRING | Continental region, e.g. South America |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USDOS_LSIB_SIMPLE_2017

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
