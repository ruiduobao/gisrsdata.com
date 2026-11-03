---
title: "GPWv411: UN-Adjusted Population Density (Gridded Population of the World Version 4.11)"
date: 2026-11-03 12:00:00
permalink: /pages/65521765/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ciesin"
  - "gpw"
  - "nasa"
  - "population"
---

# GPWv411: UN-Adjusted Population Density (Gridded Population of the World Version 4.11)

## 数据集简介

This dataset contains estimates of the number of persons
per 30 arc-second grid cell, consistent with national censuses and
population registers with respect to relative spatial distribution but
adjusted to match the 2015 Revision of UN World Population Prospects
country totals. There is one image for each modeled year.

[General Documentation](https://sedac.ciesin.columbia.edu/data/set/gpw-v4-population-density-rev11/docs)

The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution
of global human population for the years 2000, 2005, 2010, 2015, and 2020
on 30 arc-second (approximately 1 km) grid cells. Population is distributed
to cells using proportional allocation of population from census and
administrative units. Population input data are collected at the most
detailed spatial resolution available from the results of the 2010 round of
censuses, which occurred between 2005 and 2014. The input data are
extrapolated to produce population estimates for each modeled year.

## 基本信息

- 数据集编号（Earth Engine ID）：`CIESIN/GPWv411/GPW_UNWPP-Adjusted_Population_Density`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA SEDAC at the Center for International Earth Science Information Network、Google Earth Engine
- 时间范围：2000-01-01 至 2020-01-01
- 空间分辨率：927.67 米
- 许可：CC-BY-4.0
- 关键词：ciesin, gpw, nasa, population

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| unwpp-adjusted_population_density | The estimated number of persons per square kilometer. | 927.67 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('CIESIN/GPWv411/GPW_UNWPP-Adjusted_Population_Density');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Density
- 数据引用：Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4.11): Population Density Adjusted to Match 2015 Revision of UN WPP
Country Totals, Revision 11. Palisades, NY: NASA Socioeconomic Data and Applications
Center (SEDAC). [https://doi.org/10.7927/H4F47M65](https://doi.org/10.7927/H4F47M65).
Accessed DAY MONTH YEAR.

- DOI：10.7927/H4F47M65

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
