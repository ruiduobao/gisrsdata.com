---
title: "GFSAD1000: Cropland Extent 1km Crop Dominance, Global Food-Support Analysis Data [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/88d8c7e9/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "crop"
  - "gfsad"
  - "landcover"
  - "usgs"
---

# GFSAD1000: Cropland Extent 1km Crop Dominance, Global Food-Support Analysis Data [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The GFSAD is a NASA-funded project to provide high-resolution global
cropland data and their water use that contributes towards global food
security in the twenty-first century. The GFSAD products are derived
through multi-sensor remote sensing data (e.g., Landsat, MODIS, AVHRR),
secondary data, and field-plot data and aims at documenting cropland
dynamics.

At a nominal 1km scale, V0.0 provides the spatial distribution of the
five major global cropland types (wheat, rice, corn, barley, and soybeans)
which occupy 60% of all global cropland areas. The map is produced by
overlaying these crops over the remote sensing derived global irrigated and
rainfed cropland area map of the International Water Management Institute.
V0.0 an 8-class product that provides information on global: cropland
extent, crop dominance, irrigated versus rainfed cropping, and cropping
intensity (single, double, triple, and continuous crops). The GFSAD1000
nominal 2010 product was created with data from 2007 to 2012.

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/GFSAD1000_V0`
- 数据类型：影像（Image）
- 提供方：Global Food Security-support Analysis Data at 30m Project (GFSAD30)、Google Earth Engine
- 时间范围：2010-01-01 至 2011-01-01
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：agriculture, crop, gfsad, landcover, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| landcover | Crop dominance class descriptions | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('USGS/GFSAD1000_V0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_GFSAD1000_V0
- 数据引用：Thenkabail P.S., Knox J.W., Ozdogan, M., Gumma, M.K., Congalton, R.G., Wu,
Z., Milesi, C., Finkral, A., Marshall, M., Mariotto, I., You, S. Giri, C.
and Nagler, P. 2012. Assessing future risks to agricultural productivity,
water resources and food security: how can remote sensing help?.
Photogrammetric Engineering and Remote Sensing, August 2012 Special Issue
on Global Croplands: Highlight Article. 78(8): 773-782.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
