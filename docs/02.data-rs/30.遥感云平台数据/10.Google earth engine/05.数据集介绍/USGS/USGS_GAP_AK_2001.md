---
title: "USGS GAP Alaska 2001"
date: 2026-11-03 12:00:00
permalink: /pages/9142dddd/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ecosystems"
  - "gap"
  - "landcover"
  - "landfire"
  - "usgs"
  - "vegetation"
---

# USGS GAP Alaska 2001

## 数据集简介

The GAP/LANDFIRE National Terrestrial Ecosystems data represents a detailed
vegetation and land cover classification for the Conterminous U.S., Alaska,
Hawaii, and Puerto Rico.GAP/LF 2011 Ecosystems for the Conterminous U.S. is
an update of the National Gap Analysis Program Land Cover Data - Version 2.2.
Alaska ecosystems have been updated by LANDFIRE to 2012 conditions (LANDFIRE 2012).
Hawaii and Puerto Rico data represent the 2001 time-frame (Gon et al. 2006, Gould et al. 2008).
The classification scheme used for the Alaska and the lower 48 states is based
on NatureServe's Ecological System Classification (Comer et al. 2003), while
Puerto Rico and Hawaii's map legend are based on island specific classification
systems (Gon et al. 2006, Gould et al. 2008).

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/GAP/AK/2001`
- 数据类型：影像（Image）
- 提供方：USGS、Google Earth Engine
- 时间范围：2001-01-01 至 2002-01-01
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：ecosystems, gap, landcover, landfire, usgs, vegetation

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| landcover | Landcover class descriptions | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('USGS/GAP/AK/2001');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_GAP_AK_2001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
