---
title: "Landsat Global Land Survey 2005, Landsat 5 scenes"
date: 2026-11-03 12:00:00
permalink: /pages/5c492644/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "etm"
  - "gls"
  - "l5"
  - "landsat"
  - "radiance"
  - "satellite-imagery"
  - "usgs"
---

# Landsat Global Land Survey 2005, Landsat 5 scenes

## 数据集简介

The GLS2005 data set is a collection of 9500
orthorectified leaf-on medium-resolution satellite images collected between
2004 and 2007 and covering the Earth's land masses. GLS2005 uses mainly Landsat
5 and gap-filled Landsat 7 data with EO-1 ALI and Terra ASTER data filling in
any data holes.

This collection contains just the subset of the GLS2005 images
      from the L5 ETM sensor.

## 基本信息

- 数据集编号（Earth Engine ID）：`LANDSAT/GLS2005_L5`
- 数据类型：影像集合（ImageCollection）
- 提供方：USGS、Google Earth Engine
- 时间范围：2003-08-14 至 2008-05-29
- 许可：PDDL-1.0
- 关键词：etm, gls, l5, landsat, radiance, satellite-imagery, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| 10 | Blue | 30 | 0.45 - 0.52 &mu;m |
| 20 | Green | 30 | 0.52 - 0.60 &mu;m |
| 30 | Red | 30 | 0.63 - 0.69 &mu;m |
| 40 | Near infrared | 30 | 0.76 - 0.90 &mu;m |
| 50 | Shortwave infrared 1 | 30 | 1.55 - 1.75 &mu;m |
| 60 | Thermal Infrared 1. Resampled from 60m to 30m. | 60 | 10.40 - 12.50 &mu;m |
| 70 | Shortwave infrared 2 | 30 | 2.08 - 2.35 &mu;m |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LANDSAT/GLS2005_L5');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_GLS2005_L5

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
