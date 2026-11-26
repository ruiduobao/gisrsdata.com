---
title: "TIGER：美国人口普查州 2016"
date: 2026-11-03 12:00:00
permalink: /pages/e17691bc/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "census"
  - "infrastructure-boundaries"
  - "state"
  - "states"
  - "table"
  - "tiger"
  - "us"
---

# TIGER：美国人口普查州 2016

英文原名：TIGER: US Census States 2016

## 这是什么数据

美国人口普查局 TIGER 数据集包含美国主要政府区划的 2016 年边界。除五十个州外，人口普查局出于数据呈现目的，将哥伦比亚特区、波多黎各与每个岛屿地区（美属萨摩亚、北马里亚纳群岛联邦、关岛与美属维尔京群岛）视为州的统计等效。每个要素代表一个州或州等效。

TIGER 2016 产品的全部技术细节见 [TIGER 技术文档](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2016/TGRSHP2016_TechDoc.pdf)。

## 覆盖范围与时间

- 覆盖范围：空间：美国；时间：2016 年；类型：矢量/表格。
- 时间范围：2016-01-01 至 2017-01-02

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| ALAND | DOUBLE | 陆地面积 |
| AWATER | DOUBLE | 水域面积 |
| DIVISION | STRING | 分区代码 |
| FUNCSTAT | STRING | 功能状态 |
| GEOID | STRING | 州标识符：州 FIPS 代码 |
| INTPTLAT | STRING | 内部点纬度 |
| INTPTLON | STRING | 内部点经度 |
| LSAD | STRING | 州的法定/统计区域描述 |
| MTFCC | STRING | MAF/TIGER 要素类代码（=G4000） |
| NAME | STRING | 州名 |
| REGION | STRING | 区域代码 |
| STATEFP | STRING | 州 FIPS 代码 |
| STATENS | STRING | 州 GNIS 代码 |
| STUSPS | STRING | 美国邮政州缩写 |

## 能拿来做什么

- 作为美国人口普查地理单元的底图与属性表。
- 做人口、社会经济数据的空间连接与制图。
- 为选址与区域分析提供行政边界。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('TIGER/2016/States');
```

- 数据集编号（Earth Engine ID）：`TIGER/2016/States`
- 提供方：United States Census Bureau、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TIGER_2016_States

## 许可与引用

- 许可：proprietary
- 关键词：census, infrastructure-boundaries, state, states, table, tiger, us
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [TIGER: US Census Counties 2016](/pages/bbd503d0/)
- [TIGER: US Census Roads](/pages/978de92e/)
- [GHSL：全球人口表面 1975–2030（P2023A）](/pages/cf948667/)
- [LandScan 高清人口数据：乌克兰（2022 年 1 月）](/pages/c7a57ce4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
