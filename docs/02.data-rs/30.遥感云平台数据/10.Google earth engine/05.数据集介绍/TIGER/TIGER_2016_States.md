---
title: "TIGER: US Census States 2016"
date: 2026-11-03 12:00:00
permalink: /pages/e17691bc/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "census"
  - "infrastructure-boundaries"
  - "state"
  - "states"
  - "table"
  - "tiger"
  - "us"
---

# TIGER: US Census States 2016

## 数据集简介

The United States Census Bureau TIGER dataset contains the 2016 boundaries
for the primary governmental divisions of the United States. In addition
to the fifty states, the Census Bureau treats the District of Columbia,
Puerto Rico, and each of the island areas (American Samoa, the Commonwealth
of the Northern Mariana Islands, Guam, and the U.S. Virgin Islands) as the
statistical equivalents of States for the purpose of data presentation.
Each feature represents a state or state equivalent.

For full technical details on all TIGER 2016 products, see the [TIGER
technical documentation](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2016/TGRSHP2016_TechDoc.pdf).

## 基本信息

- 数据集编号（Earth Engine ID）：`TIGER/2016/States`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：United States Census Bureau、Google Earth Engine
- 时间范围：2016-01-01 至 2017-01-02
- 许可：proprietary
- 关键词：census, infrastructure-boundaries, state, states, table, tiger, us

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| ALAND | DOUBLE | Land area |
| AWATER | DOUBLE | Water area |
| DIVISION | STRING | Division code |
| FUNCSTAT | STRING | Functional Status |
| GEOID | STRING | State identifier; state FIPS code |
| INTPTLAT | STRING | Internal point latitude |
| INTPTLON | STRING | Internal point longitude |
| LSAD | STRING | Legal/statistical area description for state |
| MTFCC | STRING | MAF/TIGER feature class code (=G4000) |
| NAME | STRING | State name |
| REGION | STRING | Region code |
| STATEFP | STRING | State FIPS code |
| STATENS | STRING | State GNIS code |
| STUSPS | STRING | US Postal Service state abbreviation |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('TIGER/2016/States');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TIGER_2016_States
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
