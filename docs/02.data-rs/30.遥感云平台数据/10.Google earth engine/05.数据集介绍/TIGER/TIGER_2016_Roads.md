---
title: "TIGER：美国人口普查道路"
date: 2026-11-03 12:00:00
permalink: /pages/978de92e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "census"
  - "infrastructure-boundaries"
  - "roads"
  - "table"
  - "tiger"
  - "us"
---

# TIGER：美国人口普查道路

英文原名：TIGER: US Census Roads

## 这是什么数据

此美国人口普查局 TIGER 数据集包含 2016 年发布的所有道路段，共有超过 1,900 万个线要素，覆盖美国、哥伦比亚特区、波多黎各与 [岛屿地区](https://www.census.gov/newsroom/releases/archives/2010_census/press-kits/island-areas.html)。每个要素代表一个道路段几何（连接至少一个交叉口的单条可通行线性路径）。

TIGER 2016 产品的全部技术细节见 [TIGER 技术文档](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2016/TGRSHP2016_TechDoc.pdf)。

## 覆盖范围与时间

- 覆盖范围：空间：美国（含哥伦比亚特区、波多黎各与岛屿地区）；时间：2016 年；类型：矢量/表格。
- 时间范围：2016-01-01 至 2017-01-02

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| fullname | STRING | 人类可读的道路名称 |
| linearid | STRING | 在其他 TIGER 产品中引用此行的主要标识符 |
| mtfcc | STRING | 道路 [优先级代码](https://www.census.gov/library/reference/code-lists/mt-feature-class-codes.html)，表示如主要、次要、地方等 |
| rttyp | STRING | 路线 [类型代码](https://www.census.gov/library/reference/code-lists/route-type-codes.html)， |

## 能拿来做什么

- 作为美国人口普查地理单元的底图与属性表。
- 做人口、社会经济数据的空间连接与制图。
- 为选址与区域分析提供行政边界。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('TIGER/2016/Roads');
```

- 数据集编号（Earth Engine ID）：`TIGER/2016/Roads`
- 提供方：United States Census Bureau、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TIGER_2016_Roads

## 许可与引用

- 许可：proprietary
- 关键词：census, infrastructure-boundaries, roads, table, tiger, us
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [TIGER: US Census Counties 2016](/pages/bbd503d0/)
- [TIGER: US Census States 2016](/pages/e17691bc/)
- [GHSL：全球人口表面 1975–2030（P2023A）](/pages/cf948667/)
- [LandScan 高清人口数据：乌克兰（2022 年 1 月）](/pages/c7a57ce4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
