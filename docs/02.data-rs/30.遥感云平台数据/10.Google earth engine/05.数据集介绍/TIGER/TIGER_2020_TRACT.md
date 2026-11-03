---
title: "TIGER: US Census Tracts"
date: 2026-11-03 12:00:00
permalink: /pages/7862b5d6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "census"
  - "city"
  - "infrastructure-boundaries"
  - "neighborhood"
  - "table"
  - "tiger"
  - "urban"
  - "us"
---

# TIGER: US Census Tracts

## 数据集简介

The United States Census Bureau regularly releases
a geodatabase named TIGER. This dataset contains the 2020 census
tracts. Tract areas vary tremendously, but in urban areas are roughly
equivalent to a neighborhood. There are just over
85000 polygon features covering the United States, the District
of Columbia, Puerto Rico, and the
[Island areas](https://www.census.gov/programs-surveys/decennial-census/decade/2020/planning-management/release/2020-island-areas-data-products.html).

For full technical details on all TIGER 2020 products, see the
[TIGER technical documentation](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2020/TGRSHP2020_TechDoc.pdf).

## 基本信息

- 数据集编号（Earth Engine ID）：`TIGER/2020/TRACT`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：United States Census Bureau、Google Earth Engine
- 时间范围：2020-01-01 至 2020-01-02
- 许可：proprietary
- 关键词：census, city, infrastructure-boundaries, neighborhood, table, tiger, urban, us

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| ALAND | DOUBLE | Land Area (square meters) |
| AWATER | DOUBLE | Water Area (square meters) |
| COUNTYFP | STRING | County FIPS Code |
| FUNCSTAT | STRING | Functional Status (S = Statistical) |
| GEOID | STRING | Unique Identifier of Summary Level, Characteristic Iteration, US, State, County, Tract, Block Group Code |
| INTPTLAT | DOUBLE | Internal Point Latitude |
| INTPTLON | DOUBLE | Internal Point Longitude |
| MTFCC | STRING | MAF/TIGER Feature Classification Code |
| NAME | STRING | 2020 Census tract name: this is the census tract code converted to an integer or integer plus 2-character decimal if the last two characters of the code are not both zeros.  |
| NAMELSAD | STRING | Full Name |
| STATEFP | STRING | State FIPS Code |
| TRACTCE | STRING | Census Tract Code |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('TIGER/2020/TRACT');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TIGER_2020_TRACT
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
