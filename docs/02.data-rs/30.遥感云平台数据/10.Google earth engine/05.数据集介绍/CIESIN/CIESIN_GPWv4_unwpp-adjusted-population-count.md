---
title: "GPWv4: Gridded Population of the World Version 4, UN-Adjusted Population Count [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/6a1c9cc3/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ciesin"
  - "gpw"
  - "population"
---

# GPWv4: Gridded Population of the World Version 4, UN-Adjusted Population Count [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The Gridded Population of World Version 4 (GPWv4) models the distribution
of global human population for the years 2000, 2005, 2010, 2015, and 2020
on 30 arc-second (approximately 1 km) grid cells. Population is distributed
to cells using proportional allocation of population from census and
administrative units. Population input data are collected at the most
detailed spatial resolution available from the results of the 2010 round of
censuses, which occurred between 2005 and 2014. The input data are
extrapolated to produce population estimates for each modeled year.

These population count grids contain estimates of the number of persons per
30 arc-second grid cell, consistent with national censuses and population
registers with respect to relative spatial distribution but adjusted to
match the 2015 Revision of UN World Population Prospects country totals.
There is one image for each modeled year.

[General Documentation](https://beta.sedac.ciesin.columbia.edu/data/set/gpw-v4-population-count-adjusted-to-2015-unwpp-country-totals/docs)

## 基本信息

- 数据集编号（Earth Engine ID）：`CIESIN/GPWv4/unwpp-adjusted-population-count`
- 数据类型：影像集合（ImageCollection）
- 提供方：CIESIN、Google Earth Engine
- 时间范围：2000-01-01 至 2020-01-01
- 空间分辨率：927.67 米
- 许可：CC-BY-4.0
- 关键词：ciesin, gpw, population

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| population-count | The estimated number of persons per 30 arc-second grid cell. | 927.67 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('CIESIN/GPWv4/unwpp-adjusted-population-count');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv4_unwpp-adjusted-population-count
- 数据引用：Center for International Earth Science Information Network - CIESIN -
Columbia University. 2016. Gridded Population of the World, Version 4
(GPWv4): Population Count Adjusted to Match 2015 Revision of UN WPP Country
Totals. Palisades, NY: NASA Socioeconomic Data and Applications Center
(SEDAC). [https://doi.org/10.7927/H4SF2T42](https://doi.org/10.7927/H4SF2T42).
Accessed DAY MONTH YEAR.

- DOI：10.7927/H4SF2T42

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
