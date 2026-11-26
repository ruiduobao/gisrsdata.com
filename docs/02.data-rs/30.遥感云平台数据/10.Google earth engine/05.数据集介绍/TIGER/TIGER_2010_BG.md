---
title: "TIGER：美国人口普查街区组（BG）2010"
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

# TIGER：美国人口普查街区组（BG）2010

英文原名：TIGER: US Census Block Groups (BG) 2010

## 这是什么数据

美国人口普查局定期发布名为 TIGER 的地理数据库。本数据集包含 2010 年人口普查 [街区组](https://www.census.gov/programs-surveys/geography/about/glossary.html#par_textimage_4)，即同一普查区内四位普查街区编号首位数字相同的一组街区。共有略多于 300,000 个多边形要素，覆盖美国、哥伦比亚特区、波多黎各与岛屿地区。

全部 TIGER 2010 产品的技术细节见 [TIGER 技术文档](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2010/TGRSHP10SF1.pdf)。

## 覆盖范围与时间

- 覆盖范围：空间：美国（含哥伦比亚特区、波多黎各与岛屿地区）；时间：2010 年；类型：矢量/表格。
- 时间范围：2010-01-01 至 2010-01-02

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| ALAND10 | DOUBLE | 陆地面积（平方米） |
| AWATER10 | DOUBLE | 水域面积（平方米） |
| BLKGRPCE10 | STRING | 街区组代码 |
| COUNTYFP10 | STRING | 县 FIPS 代码 |
| FUNCSTAT10 | STRING | 功能状态（S = 统计） |
| GEOID10 | STRING | 汇总级别、特征迭代、美国、州、县、普查区、街区组代码的唯一标识符 |
| INTPTLAT10 | DOUBLE | 内部点纬度 |
| INTPTLON10 | DOUBLE | 内部点经度 |
| MTFCC10 | STRING | MAF/TIGER 要素分类代码 |
| NAMELSAD10 | STRING | 全名 |
| STATEFP10 | STRING | 州 FIPS 代码 |
| TRACTCE10 | STRING | 普查区代码 |

## 能拿来做什么

- 作为美国人口普查地理单元的底图与属性表。
- 做人口、社会经济数据的空间连接与制图。
- 为选址与区域分析提供行政边界。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('TIGER/2010/BG');
```

- 数据集编号（Earth Engine ID）：`TIGER/2010/BG`
- 提供方：United States Census Bureau、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TIGER_2010_BG

## 许可与引用

- 许可：proprietary
- 关键词：census, city, infrastructure-boundaries, neighborhood, table, tiger, urban, us
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [TIGER: US Census Blocks](/pages/86b83027/)
- [TIGER: US Census Tracts Demographic - Profile 1](/pages/da325dd6/)
- [TIGER: US Census 5-digit ZIP Code Tabulation Areas 2010 [deprecated]](/pages/1eaf6b31/)
- [GHSL：全球人口表面 1975–2030（P2023A）](/pages/cf948667/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
