---
title: "TIGER: US Census Roads"
date: 2026-11-03 12:00:00
permalink: /pages/978de92e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "census"
  - "infrastructure-boundaries"
  - "roads"
  - "table"
  - "tiger"
  - "us"
---

# TIGER: US Census Roads

## 数据集简介

This United States Census Bureau TIGER dataset contains all road segments
from the 2016 release, containing more than 19 million individual
line features covering the United States, the District of Columbia,
Puerto Rico, and the [Island Areas](https://www.census.gov/newsroom/releases/archives/2010_census/press-kits/island-areas.html).
Each feature represents a road segment geometry (a single navigable
linear path connected to at least one intersection).

For full technical details on all TIGER 2016 products, see the [TIGER
technical documentation](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2016/TGRSHP2016_TechDoc.pdf).

## 基本信息

- 数据集编号（Earth Engine ID）：`TIGER/2016/Roads`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：United States Census Bureau、Google Earth Engine
- 时间范围：2016-01-01 至 2017-01-02
- 许可：proprietary
- 关键词：census, infrastructure-boundaries, roads, table, tiger, us

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| fullname | STRING | A human-readable road name |
| linearid | STRING | The primary identifier used to refer to this row in other TIGER products |
| mtfcc | STRING | The road [priority code](https://www.census.gov/library/reference/code-lists/mt-feature-class-codes.html), representing, e.g., primary, second, local, etc.  |
| rttyp | STRING | The route [type code](https://www.census.gov/library/reference/code-lists/route-type-codes.html), |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('TIGER/2016/Roads');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TIGER_2016_Roads
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
