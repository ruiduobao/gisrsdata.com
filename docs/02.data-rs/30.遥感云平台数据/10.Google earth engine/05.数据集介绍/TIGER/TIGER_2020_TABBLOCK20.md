---
title: "TIGER：2020 年制表（人口普查）街区"
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

# TIGER：2020 年制表（人口普查）街区

英文原名：TIGER: 2020 Tabulation (Census) Block 

## 这是什么数据

美国人口普查局定期发布名为 TIGER 的地理数据库。本数据集包含 2020 年人口普查街区，大致相当于一个城市街区。共有略多于 800 万个多边形要素，覆盖美国、哥伦比亚特区、波多黎各与 [岛屿地区](https://www.census.gov/programs-surveys/decennial-census/decade/2020/planning-management/release/2020-island-areas-data-products.html)。

TIGER 2020 产品的全部技术细节见 [TIGER 技术文档](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2020/TGRSHP2020_TechDoc.pdf)。

## 覆盖范围与时间

- 覆盖范围：空间：美国（含哥伦比亚特区、波多黎各与岛屿地区）；时间：2020 年；类型：矢量/表格。
- 时间范围：2020-01-01 至 2020-01-02

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| ALAND20 | DOUBLE | 2020 年人口普查陆地面积 |
| AWATER20 | DOUBLE | 2020 年人口普查水域面积 |
| BLOCKCE20 | STRING | 2020 年人口普查制表街区编号 |
| COUNTYFP20 | STRING | 2020 年人口普查县 FIPS 代码 |
| FUNCSTAT20 | STRING | 2020 年人口普查功能状态 |
| GEOID20 | STRING | 人口普查街区标识符：2020 年人口普查州 FIPS 代码、县 FIPS 代码、普查区代码与街区编号的连接 |
| INTPTLAT20 | STRING | 2020 年人口普查内部点的纬度 |
| INTPTLON20 | STRING | 2020 年人口普查内部点的经度 |
| MTFCC20 | STRING | MAF/TIGER 要素类代码 |
| NAME20 | STRING | 2020 年人口普查制表街区名称：「Block」与制表街区编号的连接 |
| STATEFP20 | STRING | 2020 年人口普查州 FIPS 代码 |
| TRACTCE20 | STRING | 2020 年人口普查区代码 |
| UACE20 | STRING | 2020 年人口普查城市区代码 |
| UATYPE20 | STRING | 2020 年人口普查城市区类型 |
| UR20 | STRING | 2020 年人口普查城市/乡村指标 |

## 能拿来做什么

- 作为美国人口普查地理单元的底图与属性表。
- 做人口、社会经济数据的空间连接与制图。
- 为选址与区域分析提供行政边界。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('TIGER/2020/TABBLOCK20');
```

- 数据集编号（Earth Engine ID）：`TIGER/2020/TABBLOCK20`
- 提供方：United States Census Bureau、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TIGER_2020_TABBLOCK20

## 许可与引用

- 许可：proprietary
- 关键词：census, city, infrastructure-boundaries, neighborhood, table, tiger, urban, us
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [TIGER: US Census 5-digit ZIP Code Tabulation Areas 2020](/pages/c4396997/)
- [TIGER: US Census Block Groups (BG) 2020](/pages/d8ec0b36/)
- [TIGER: US Census Tracts](/pages/7862b5d6/)
- [GHSL：全球人口表面 1975–2030（P2023A）](/pages/cf948667/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
