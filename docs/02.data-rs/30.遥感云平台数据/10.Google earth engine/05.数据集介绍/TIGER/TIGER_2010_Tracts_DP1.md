---
title: "TIGER：美国人口普查区人口统计——概况 1"
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

# TIGER：美国人口普查区人口统计——概况 1

英文原名：TIGER: US Census Tracts Demographic - Profile 1

## 这是什么数据

美国人口普查局定期发布名为 TIGER 的地理数据库。本表包含按普查区聚合的 2010 年人口普查人口概况 1 的值。普查区面积差异巨大，但在城市地区大致相当于一个社区。共有约 74,000 个多边形要素，覆盖美国、哥伦比亚特区、波多黎各与 [岛屿地区](https://www.census.gov/data/tables/2010/dec/2010-island-areas.html)。

全部 TIGER 2010 产品的技术细节见 [TIGER 技术文档](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2010/TGRSHP10SF1.pdf)。

每个普查区还包括与边界相交的 DP1 人口测量总和属性。列名与 [DP1 查找表](https://developers.google.com/earth-engine/tiger_2010_tract_dp1_metadata) 中的 shortname 列相同。

## 覆盖范围与时间

- 覆盖范围：空间：美国（含哥伦比亚特区、波多黎各与岛屿地区）；时间：2010 年；类型：矢量/表格。
- 时间范围：2010-01-01 至 2010-01-02

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| aland10 | DOUBLE | 陆地面积 |
| awater10 | DOUBLE | 水域面积 |
| geoid10 | STRING | 普查区标识符：州 FIPS 代码、县 FIPS 代码与普查区代码的连接 |
| intptlat10 | STRING | 内部点的纬度 |
| intptlon10 | STRING | 内部点的经度 |
| namelsad10 | STRING | 法定/统计区域描述与普查区名称 |
| shape_area | DOUBLE | 面积（平方度） |
| shape_leng | DOUBLE | 周长（度） |

## 能拿来做什么

- 作为美国人口普查地理单元的底图与属性表。
- 做人口、社会经济数据的空间连接与制图。
- 为选址与区域分析提供行政边界。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('TIGER/2010/Tracts_DP1');
```

- 数据集编号（Earth Engine ID）：`TIGER/2010/Tracts_DP1`
- 提供方：United States Census Bureau、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TIGER_2010_Tracts_DP1

## 许可与引用

- 许可：proprietary
- 关键词：census, demographic, human, infrastructure-boundaries, social, table, tiger, us
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [TIGER: US Census Block Groups (BG) 2010](/pages/121edc81/)
- [TIGER: US Census Blocks](/pages/86b83027/)
- [TIGER: US Census 5-digit ZIP Code Tabulation Areas 2010 [deprecated]](/pages/1eaf6b31/)
- [GHSL：全球人口表面 1975–2030（P2023A）](/pages/cf948667/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
