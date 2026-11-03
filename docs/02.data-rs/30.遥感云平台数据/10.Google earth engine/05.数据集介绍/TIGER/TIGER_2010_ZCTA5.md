---
title: "TIGER: US Census 5-digit ZIP Code Tabulation Areas 2010 [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/1eaf6b31/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "census"
  - "infrastructure-boundaries"
  - "table"
  - "tiger"
  - "us"
  - "zcta"
  - "zip-code"
---

# TIGER: US Census 5-digit ZIP Code Tabulation Areas 2010 [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

ZIP Code tabulation areas (ZCTAs) are approximate area representations of
U.S. Postal Service (USPS) 5-digit ZIP Codes.
The Census Bureau defines ZCTAs by allocating each
Census block that contains addresses to a single ZIP Code tabulation area, usually
to the ZCTA that reflects the most frequently occurring ZIP Code for the
addresses within that block. Blocks that do not contain addresses but that
are completely surrounded by a single ZIP Code tabulation area (enclaves)
are assigned to the surrounding ZCTA; those surrounded by multiple ZCTAs
will be added to a single ZCTA based on the longest shared border.

The Census Bureau identifies 5-digit ZIP Code tabulation areas using a 5-
character numeric code that represents the most frequently occurring USPS
ZIP Code within that ZCTA.  This code may contain leading zeros.

Data users should not use ZCTAs to identify the official USPS ZIP Code for
mail delivery. The USPS makes periodic changes to ZIP Codes to support more
efficient mail delivery. ZIP Codes that cover primarily nonresidential or
post office box addresses may not have a corresponding ZCTA because the
delineation process uses primarily residential addresses, resulting in a
bias towards ZIP Codes used for city-style mail delivery.

For full technical details on all TIGER 2010 products, see the [TIGER
technical documentation](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2010/TGRSHP10SF1.pdf).

## 基本信息

- 数据集编号（Earth Engine ID）：`TIGER/2010/ZCTA5`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：United States Census Bureau、Google Earth Engine
- 时间范围：2010-01-01 至 2010-01-02
- 许可：proprietary
- 关键词：census, infrastructure-boundaries, table, tiger, us, zcta, zip-code

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| ALAND10 | DOUBLE | 2010 Census Land area |
| AWATER10 | DOUBLE | 2010 Census Water area |
| CLASSFP10 | STRING | 2010 Census FIPS 55 class code |
| FUNCSTAT10 | STRING | 2010 Census functional status (Always "S", for "Statistical entity".) |
| GEOID10 | STRING | 2010 Census 5-digit ZIP Code Tabulation Area identifier |
| INTPTLAT10 | STRING | 2010 Census latitude of the internal point |
| INTPTLON10 | STRING | 2010 Census longitude of the internal point |
| MTFCC10 | STRING | MAF/TIGER feature class code (Always "G6350".) |
| ZCTA5CE10 | STRING | 2010 Census 5-digit ZIP Code Tabulation Area code |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('TIGER/2010/ZCTA5');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TIGER_2010_ZCTA5
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
