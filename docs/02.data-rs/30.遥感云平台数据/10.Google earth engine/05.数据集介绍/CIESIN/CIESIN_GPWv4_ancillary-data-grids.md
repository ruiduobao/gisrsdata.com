---
title: "GPWv4: Gridded Population of the World Version 4, Ancillary Data Grids [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/ceffa7f4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ciesin"
  - "gpw"
  - "population"
---

# GPWv4: Gridded Population of the World Version 4, Ancillary Data Grids [deprecated]

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

These ancillary data grids contain additional per-pixel data that can be
used to assess the quality of the population estimates and how they were
produced.

[General Documentation](https://beta.sedac.ciesin.columbia.edu/data/set/gpw-v4-land-water-area/docs)

## 基本信息

- 数据集编号（Earth Engine ID）：`CIESIN/GPWv4/ancillary-data-grids`
- 数据类型：影像（Image）
- 提供方：CIESIN、Google Earth Engine
- 时间范围：2000-01-01 至 2020-01-01
- 空间分辨率：927.67 米
- 许可：CC-BY-4.0
- 关键词：ciesin, gpw, population

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| water-mask | Water mask | 927.67 |  |
| data-context | Categorizes pixels with estimated zero population based on information provided in the census documents.  | 927.67 |  |
| mean-administrative-unit-area | The mean area of the input unit(s) from which population count and density grids are created. | 927.67 |  |
| national-identifier | An integer that represents the census data source used to produce the GPWv4 population estimates. Pixels (grid cells) that have the same value reflect the same data source, most often a country or territory. Note that these data represent the area covered by the statistical data as provided, and are not official representations of country or territory boundaries.  | 927.67 |  |
| land-area | Estimate of the land area, excluding permanent ice and water, within each 30 arc-second pixel. | 927.67 |  |
| water-area | Estimate of the water area (permanent ice and water) within each 30 arc-second pixel. | 927.67 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('CIESIN/GPWv4/ancillary-data-grids');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv4_ancillary-data-grids
- 数据引用：Center for International Earth Science Information Network - CIESIN -
Columbia University. 2016. Gridded Population of the World, Version 4
(GPWv4): Administrative Unit Center Points with Population Estimates.
Palisades, NY: NASA Socioeconomic Data and Applications Center
(SEDAC). [https://doi.org/10.7927/H4F47M2C](https://doi.org/10.7927/H4F47M2C).
Accessed DAY MONTH YEAR.

- DOI：10.7927/H4F47M2C

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
