---
title: "TIGER: US Census Block Groups (BG) 2010"
date: 2026-11-03 12:00:00
permalink: /pages/121edc81/
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

# TIGER: US Census Block Groups (BG) 2010

## 数据集简介

The United States Census Bureau regularly releases
a geodatabase named TIGER. This dataset contains the 2010 census
[block groups](https://www.census.gov/programs-surveys/geography/about/glossary.html#par_textimage_4),
which is a cluster of blocks within the same census tract that have the same
first digit of their four-digit census block number. There are just over
300,000 polygon features covering the United States, the District
of Columbia, Puerto Rico, and the
Island areas.

For full technical details on all TIGER 2010 products, see the
[TIGER technical documentation](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2010/TGRSHP10SF1.pdf).

## 基本信息

- 数据集编号（Earth Engine ID）：`TIGER/2010/BG`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：United States Census Bureau、Google Earth Engine
- 时间范围：2010-01-01 至 2010-01-02
- 许可：proprietary
- 关键词：census, city, infrastructure-boundaries, neighborhood, table, tiger, urban, us

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| ALAND10 | DOUBLE | Land Area (square meters) |
| AWATER10 | DOUBLE | Water Area (square meters) |
| BLKGRPCE10 | STRING | Block Group Code |
| COUNTYFP10 | STRING | County FIPS Code |
| FUNCSTAT10 | STRING | Functional Status (S = Statistical) |
| GEOID10 | STRING | Unique Identifier of Summary Level, Characteristic Iteration, US, State, County, Tract, Block Group Code  |
| INTPTLAT10 | DOUBLE | Internal Point Latitude |
| INTPTLON10 | DOUBLE | Internal Point Longitude |
| MTFCC10 | STRING | MAF/TIGER Feature Classification Code |
| NAMELSAD10 | STRING | Full Name |
| STATEFP10 | STRING | State FIPS Code |
| TRACTCE10 | STRING | Census Tract Code |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('TIGER/2010/BG');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TIGER_2010_BG
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
