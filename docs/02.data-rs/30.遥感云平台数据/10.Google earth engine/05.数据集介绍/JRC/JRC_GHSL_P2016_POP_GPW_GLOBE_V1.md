---
title: "GHSL: Global Human Settlement Layers, Population Grid 1975-1990-2000-2015 (P2016) [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/434906ce/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ciesin-derived"
  - "ghsl"
  - "jrc"
  - "population"
---

# GHSL: Global Human Settlement Layers, Population Grid 1975-1990-2000-2015 (P2016) [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The GHSL relies on the design and implementation of new spatial data mining
technologies allowing to automatically process and extract analytics and
knowledge from large amount of heterogeneous data including: global,
fine-scale satellite image data streams, census data, and crowd sources or
volunteered geographic information sources.

This dataset depicts the distribution and density of population, expressed
as the number of people per cell, for reference epochs: 1975, 1990, 2000,
2015.

Residential population estimates were provided by CIESIN GPW v4. These were
disaggregated from census or administrative units to grid cells, informed by
the distribution and density of built-up as mapped in the GHSL global layer
per corresponding epoch. (See ["Development of New Open and Free
Multi-temporal Global Population Grids at 250 m
Resolution."](https://publications.jrc.ec.europa.eu/repository/handle/JRC100523))

This dataset was produced in the World Mollweide projection (EPSG:54009).

For more information visit: [https://ghsl.jrc.ec.europa.eu/ghs_pop.php](https://ghsl.jrc.ec.europa.eu/ghs_pop.php).

The Global Human Settlement Layer (GHSL) project is supported by the
European Commission, Joint Research Center, and Directorate-General for
Regional and Urban Policy. The GHSL produces new global spatial information,
evidence-based analytics, and knowledge describing the human presence in
the planet.

## 基本信息

- 数据集编号（Earth Engine ID）：`JRC/GHSL/P2016/POP_GPW_GLOBE_V1`
- 数据类型：影像集合（ImageCollection）
- 提供方：EC JRC、Google Earth Engine
- 时间范围：1975-01-01 至 2015-12-31
- 空间分辨率：250 米
- 许可：proprietary
- 关键词：ciesin-derived, ghsl, jrc, population

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| population_count | Number of people per cell | 250 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2016/POP_GPW_GLOBE_V1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2016_POP_GPW_GLOBE_V1
- 数据引用：European Commission, Joint Research Centre (JRC); Columbia University,
Center for International Earth Science Information Network - CIESIN (2015):
GHS population grid, derived from GPW4, multitemporal (1975, 1990, 2000,
2015). European Commission, Joint Research Centre (JRC) [Dataset]
PID: [https://data.europa.eu/89h/jrc-ghsl-ghs_pop_gpw4_globe_r2015a](https://data.europa.eu/89h/jrc-ghsl-ghs_pop_gpw4_globe_r2015a)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
