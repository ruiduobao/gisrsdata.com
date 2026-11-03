---
title: "WorldPop Project Population Data: Estimated Residential Population per 100x100m Grid Square [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/91a8ea86/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "demography"
  - "population"
  - "worldpop"
---

# WorldPop Project Population Data: Estimated Residential Population per 100x100m Grid Square [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

High-resolution, contemporary data on human population distributions are
a prerequisite for the accurate measurement of the impacts of population
growth, for monitoring changes, and for planning interventions. The WorldPop
project aims to meet these needs through the provision of detailed and open
access population distribution datasets built using transparent and
peer-reviewed approaches.

Full details on the methods and datasets used in constructing the data,
along with open access publications, are provided on the [WorldPop
website](https://www.worldpop.org/). In brief, recent census-based
population counts matched to their associated administrative units are
disaggregated to &asymp;100x100m grid cells through machine learning
approaches that exploit the relationships between population densities and a
range of geospatial covariate layers. The datasets depict estimated number
of people residing in each grid cell in 2010, 2015, and other years.

Further WorldPop gridded datasets on population age structures,
poverty, urban growth, and population dynamics are freely available on
the WorldPop website. WorldPop represents a collaboration between
researchers at the University of Southampton, Universite Libre de
Bruxelles, and University of Louisville. The project is principally
funded by the Bill and Melinda Gates Foundation.

## 基本信息

- 数据集编号（Earth Engine ID）：`WorldPop/POP`
- 数据类型：影像集合（ImageCollection）
- 提供方：WorldPop、Google Earth Engine
- 时间范围：2010-01-01 至 2016-01-01
- 空间分辨率：92.77 米
- 许可：CC-BY-4.0
- 关键词：demography, population, worldpop

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| population | Estimated number of people residing in each grid cell | 92.77 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('WorldPop/POP');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WorldPop_POP
- 数据引用：Please cite the WorldPop website as the source: [www.worldpop.org]
(www.worldpop.org).

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
