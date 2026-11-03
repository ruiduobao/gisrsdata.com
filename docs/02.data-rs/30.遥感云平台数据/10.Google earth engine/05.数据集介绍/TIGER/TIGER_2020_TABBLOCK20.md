---
title: "TIGER: 2020 Tabulation (Census) Block "
date: 2026-11-03 12:00:00
permalink: /pages/17e8e957/
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

# TIGER: 2020 Tabulation (Census) Block 

## 数据集简介

The United States Census Bureau regularly releases
a geodatabase named TIGER. This dataset contains the 2020 census
blocks, roughly equivalent to a city block. There are just over
eight million polygon features covering the United States, the District
of Columbia, Puerto Rico, and the
[Island areas](https://www.census.gov/programs-surveys/decennial-census/decade/2020/planning-management/release/2020-island-areas-data-products.html).

For full technical details on all TIGER 2020 products, see the
[TIGER technical documentation](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2020/TGRSHP2020_TechDoc.pdf).

## 基本信息

- 数据集编号（Earth Engine ID）：`TIGER/2020/TABBLOCK20`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：United States Census Bureau、Google Earth Engine
- 时间范围：2020-01-01 至 2020-01-02
- 许可：proprietary
- 关键词：census, city, infrastructure-boundaries, neighborhood, table, tiger, urban, us

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| ALAND20 | DOUBLE | 2020 Census land area |
| AWATER20 | DOUBLE | 2020 Census water area |
| BLOCKCE20 | STRING | 2020 Census tabulation block number |
| COUNTYFP20 | STRING | 2020 Census county FIPS code |
| FUNCSTAT20 | STRING | 2020 Census functional status |
| GEOID20 | STRING | Census block identifier: a concatenation of 2020 Census state FIPS code, 2020 Census county FIPS code, 2020 Census tract code, and 2020 Census block number  |
| INTPTLAT20 | STRING | 2020 Census latitude of the internal point |
| INTPTLON20 | STRING | 2020 Census longitude of the internal point |
| MTFCC20 | STRING | MAF/TIGER feature class code |
| NAME20 | STRING | 2020 Census tabulation block name: a concatenation of Block and the tabulation block number  |
| STATEFP20 | STRING | 2020 Census state FIPS code |
| TRACTCE20 | STRING | 2020 Census tract code |
| UACE20 | STRING | 2020 Census urban area code |
| UATYPE20 | STRING | 2020 Census urban area type |
| UR20 | STRING | 2020 Census urban/rural indicator |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('TIGER/2020/TABBLOCK20');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TIGER_2020_TABBLOCK20
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
