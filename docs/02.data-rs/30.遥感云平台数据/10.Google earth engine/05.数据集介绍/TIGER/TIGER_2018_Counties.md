---
title: "TIGER: US Census Counties 2018"
date: 2026-11-03 12:00:00
permalink: /pages/895b7d94/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "census"
  - "county"
  - "infrastructure-boundaries"
  - "table"
  - "tiger"
  - "us"
---

# TIGER: US Census Counties 2018

## 数据集简介

The United States Census Bureau TIGER dataset contains the 2018 boundaries
for primary legal divisions of US states.  In most states, these entities
are termed "counties". In Louisiana, these divisions are known as
"parishes".

Alaska has governmental entities called "boroughs" which fill a similar
governmental role to counties, but in some areas those governmental
responsibilities are handled directly by the state and sometimes by a city.
For Alaska, county equivalent entities thus include

1. organized boroughs,
1. combined city and borough entities (e.g. Juneau),
1. municipalities, and
1. census areas.

The census areas are delineated cooperatively for statistical purposes by
the State of Alaska and the Census Bureau.

In four states (Maryland, Missouri, Nevada, and Virginia), there are one
or more incorporated places that are independent of any county
organization and thus constitute primary divisions of their states. These
incorporated places are known as independent cities and are treated as
county-equivalent entities for purposes of data presentation.

The District of Columbia and Guam have no primary divisions and each area is
considered a county-equivalent entity for purposes of data presentation.
The Census Bureau treats the following entities as equivalents of counties
for purposes of data presentation: municipios in Puerto Rico, districts
and islands in America Samoa, municipalities in the Commonwealth of the
Northern Mariana Islands, and islands in the U.S. Virgin Islands.

For full technical details on all TIGER 2018 products, see the [TIGER
technical documentation](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2018/TGRSHP2018_TechDoc.pdf).

## 基本信息

- 数据集编号（Earth Engine ID）：`TIGER/2018/Counties`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：United States Census Bureau、Google Earth Engine
- 时间范围：2018-01-01 至 2019-01-01
- 许可：proprietary
- 关键词：census, county, infrastructure-boundaries, table, tiger, us

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| ALAND | DOUBLE | Land area |
| AWATER | DOUBLE | Water area |
| CBSAFP | STRING | Metropolitan statistical area/micropolitan statistical area code |
| CLASSFP | STRING | FIPS class code |
| COUNTYFP | STRING | County FIPS code |
| COUNTYNS | STRING | County GNIS code |
| CSAFP | STRING | Combined statistical area code |
| FUNCSTAT | STRING | Functional Status |
| GEOID | STRING | County identifier; a concatenation of state FIPS code and county FIPS code |
| INTPTLAT | STRING | Internal point latitude |
| INTPTLON | STRING | Internal point longitude |
| LSAD | STRING | Legal/statistical area description for the county |
| METDIVFP | STRING | Metropolitan division code |
| MTFCC | STRING | MAF/TIGER feature class code (=G4020) |
| NAME | STRING | County name |
| NAMELSAD | STRING | Name and the translated legal/statistical area description for the county |
| STATEFP | STRING | State FIPS code |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('TIGER/2018/Counties');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TIGER_2018_Counties
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
