---
title: "JRC Yearly Water Classification History, v1.0 [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/24553550/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "annual"
  - "geophysical"
  - "google"
  - "history"
  - "jrc"
  - "landsat-derived"
  - "surface"
  - "surface-ground-water"
  - "water"
  - "yearly"
---

# JRC Yearly Water Classification History, v1.0 [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

This dataset contains maps of the location and temporal
distribution of surface water from 1984 to 2015 and provides
statistics on the extent and change of those water surfaces.
For more information see the associated journal article: [High-resolution
mapping of global surface water and its long-term changes](https://www.nature.com/nature/journal/v540/n7633/full/nature20584.html)
(Nature, 2016) and the online [Data Users Guide](https://storage.googleapis.com/global-surface-water/downloads_ancillary/DataUsersGuidev2.pdf).

These data were generated using 3,066,102 scenes from Landsat
5, 7, and 8 acquired between 16 March 1984 and 10 October 2015.
Each pixel was individually classified into water / non-water
using an expert system and the results were collated into a monthly
history for the entire time period and two epochs (1984-1999,
2000-2015) for change detection.

This Yearly Seasonality Classification collection contains a year-by-year
classification of the seasonality of water based on the occurrence values
detected throughout the year.

## 基本信息

- 数据集编号（Earth Engine ID）：`JRC/GSW1_0/YearlyHistory`
- 数据类型：影像集合（ImageCollection）
- 提供方：EC JRC / Google、Google Earth Engine
- 时间范围：1984-03-16 至 2015-10-18
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：annual, geophysical, google, history, jrc, landsat-derived, surface, surface-ground-water, water, yearly

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| waterClass | Classification of the seasonality of water throughout the year. | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JRC/GSW1_0/YearlyHistory');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GSW1_0_YearlyHistory
- 数据引用：Jean-Francois Pekel, Andrew Cottam, Noel Gorelick, Alan S. Belward,
High-resolution mapping of global surface water and its long-term changes.
Nature 540, 418-422 (2016). ([doi:10.1038/nature20584](https://doi.org/10.1038/nature20584))


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
