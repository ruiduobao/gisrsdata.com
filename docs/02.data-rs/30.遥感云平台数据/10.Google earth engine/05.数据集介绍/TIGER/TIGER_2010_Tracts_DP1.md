---
title: "TIGER: US Census Tracts Demographic - Profile 1"
date: 2026-11-03 12:00:00
permalink: /pages/da325dd6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "census"
  - "demographic"
  - "human"
  - "infrastructure-boundaries"
  - "social"
  - "table"
  - "tiger"
  - "us"
---

# TIGER: US Census Tracts Demographic - Profile 1

## 数据集简介

The United States Census Bureau regularly releases
a geodatabase named TIGER. This table contains the 2010 census
Demographic Profile 1 values aggregated by census tract. Tract
areas vary tremendously, but in urban areas are roughly equivalent
to a neighborhood. There are about 74,000 polygon features covering
the United States, the District of Columbia, Puerto Rico, and
the [Island areas](https://www.census.gov/data/tables/2010/dec/2010-island-areas.html).

For full technical details on all TIGER 2010 products, see
the [TIGER technical documentation](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2010/TGRSHP10SF1.pdf).

Each tract also includes attributes with sums of the DP1
population measurements that intersect the boundary. The columns
have the same name as the shortname column in the [DP1 lookup
table](https://developers.google.com/earth-engine/tiger_2010_tract_dp1_metadata).

## 基本信息

- 数据集编号（Earth Engine ID）：`TIGER/2010/Tracts_DP1`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：United States Census Bureau、Google Earth Engine
- 时间范围：2010-01-01 至 2010-01-02
- 许可：proprietary
- 关键词：census, demographic, human, infrastructure-boundaries, social, table, tiger, us

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| aland10 | DOUBLE | Land area |
| awater10 | DOUBLE | Water area |
| geoid10 | STRING | Census tract identifier: a concatenation of state FIPS code, county FIPS code, and census tract code |
| intptlat10 | STRING | Latitude of the internal point |
| intptlon10 | STRING | Longitude of the internal point |
| namelsad10 | STRING | Legal/statistical area description and the census tract name |
| shape_area | DOUBLE | Area in square degrees |
| shape_leng | DOUBLE | Perimeter in degrees |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('TIGER/2010/Tracts_DP1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TIGER_2010_Tracts_DP1
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
