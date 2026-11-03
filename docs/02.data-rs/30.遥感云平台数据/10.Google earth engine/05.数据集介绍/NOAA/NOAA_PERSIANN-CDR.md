---
title: "PERSIANN-CDR: Precipitation Estimation From Remotely Sensed Information Using Artificial Neural Networks-Climate Data Record"
date: 2026-11-03 12:00:00
permalink: /pages/5f880006/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cdr"
  - "climate"
  - "geophysical"
  - "ncdc"
  - "noaa"
  - "persiann"
  - "precipitation"
  - "weather"
---

# PERSIANN-CDR: Precipitation Estimation From Remotely Sensed Information Using Artificial Neural Networks-Climate Data Record

## 数据集简介

PERSIANN-CDR is a daily quasi-global precipitation product
that spans the period from 1983-01-01 to present.  The data is
produced quarterly, with a typical lag of three months. The product
is developed by the Center for Hydrometeorology and Remote Sensing
at the University of California, Irvine (UC-IRVINE/CHRS) using
Gridded Satellite (GridSat-B1) IR data that are derived from merging
ISCCP B1 IR data, along with GPCP version 2.2.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/PERSIANN-CDR`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA NCDC、Google Earth Engine
- 时间范围：1983-01-01 至 2026-07-31
- 空间分辨率：27830 米
- 许可：proprietary
- 关键词：cdr, climate, geophysical, ncdc, noaa, persiann, precipitation, weather

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| precipitation | Estimated daily precipitation | 27830 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/PERSIANN-CDR');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_PERSIANN-CDR
- 数据引用：Cite this dataset when used as a source: Sorooshian, Soroosh;
Hsu, Kuolin; Braithwaite, Dan; Ashouri, Hamed; and NOAA CDR Program
(2014): NOAA Climate Data Record (CDR) of Precipitation Estimation
from Remotely Sensed Information using Artificial Neural Networks
(PERSIANN-CDR), Version 1 Revision 1. [indicate subset used]. NOAA
National Centers for Environmental Information. doi:
[doi:10.7289/V51V5BWQ](https://doi.org/10.7289/V51V5BWQ)
[access date].

- DOI：10.7289/V51V5BWQ

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
