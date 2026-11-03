---
title: "Murray Global Intertidal Change QA Pixel Count"
date: 2026-11-03 12:00:00
permalink: /pages/627e2271/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "coastal"
  - "google"
  - "intertidal"
  - "landsat-derived"
  - "murray"
  - "surface-ground-water"
  - "tidal-flats"
  - "uq"
---

# Murray Global Intertidal Change QA Pixel Count

## 数据集简介

The Murray Global Intertidal Change Dataset contains global maps of tidal flat
ecosystems produced via a supervised classification of 707,528 Landsat
Archive images. Each pixel was classified into tidal flat, permanent water
or other with reference to a globally distributed set of training data.

The classification was implemented along the entire global coastline
between 60° North and 60° South from 1 January 1984 to 31 December 2016.
The image collection consists consists of a time-series of 11 global maps
of tidal flats at 30m pixel resolution for set time-periods (1984-1986;
1987-1989; 1990-1992; 1993-1995; 1996-1998; 1999-2001; 2002-2004;
2005-2007; 2008-2010; 2011-2013; 2014-2016)

The number of Landsat images used to develop the Landsat covariate layers
in each time step of the tidal flat classification. Each image in the image
collection refers to a single time step.

## 基本信息

- 数据集编号（Earth Engine ID）：`UQ/murray/Intertidal/v1_1/qa_pixel_count`
- 数据类型：影像集合（ImageCollection）
- 提供方：Murray/UQ/Google/USGS/NASA、Google Earth Engine
- 时间范围：1984-01-01 至 2017-01-01
- 空间分辨率：30 米
- 许可：CC-BY-4.0
- 关键词：coastal, google, intertidal, landsat-derived, murray, surface-ground-water, tidal-flats, uq

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| pixel_count | Input image count. | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('UQ/murray/Intertidal/v1_1/qa_pixel_count');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UQ_murray_Intertidal_v1_1_qa_pixel_count
- 数据引用：Murray, N.J., Phinn, S.R., DeWitt, M., Ferrari, R., Johnston, R., Lyons, M.B.,
Clinton, N., Thau, D. & Fuller, R.A. (2019) The global distribution and
trajectory of tidal flats. Nature, 565, 222-225.

- DOI：10.1038/s41586-018-0805-8

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
