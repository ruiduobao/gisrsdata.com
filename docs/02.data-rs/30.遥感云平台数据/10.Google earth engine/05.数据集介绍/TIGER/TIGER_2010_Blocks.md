---
title: "TIGER: US Census Blocks"
date: 2026-11-03 12:00:00
permalink: /pages/86b83027/
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

# TIGER: US Census Blocks

## 数据集简介

The United States Census Bureau regularly releases
a geodatabase named TIGER. This dataset contains the 2010 census
blocks, roughly equivalent to a city block. There are just over
11 million polygon features covering the United States, the District
of Columbia, Puerto Rico, and the
[Island areas](https://www.census.gov/data/tables/2010/dec/2010-island-areas.html).

For full technical details on all TIGER 2010 products, see the
[TIGER technical documentation](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2010/TGRSHP10SF1.pdf).

## 基本信息

- 数据集编号（Earth Engine ID）：`TIGER/2010/Blocks`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：United States Census Bureau、Google Earth Engine
- 时间范围：2010-01-01 至 2010-01-02
- 许可：proprietary
- 关键词：census, city, infrastructure-boundaries, neighborhood, table, tiger, urban, us

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| blockce | STRING | 2010 Census tabulation block number |
| blockid10 | STRING | Block identifier: a concatenation of 2010 Census state Federal Information Processing Standards (FIPS) code, county FIPS code, census tract code, and tabulation block number  |
| countyfp10 | STRING | County FIPS code |
| housing10 | DOUBLE | 2010 Census number of housing units |
| partflg | STRING | Partial block flag |
| pop10 | DOUBLE | Population total as of 2010 census |
| statefp10 | STRING | 2010 Census state FIPS code |
| tractce10 | STRING | 2010 Census tract code |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('TIGER/2010/Blocks');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TIGER_2010_Blocks
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
