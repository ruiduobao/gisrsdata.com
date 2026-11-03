---
title: "Landsat Global Land Survey 1975 Mosaic"
date: 2026-11-03 12:00:00
permalink: /pages/d566ae8a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "gls"
  - "landsat"
  - "radiance"
  - "satellite-imagery"
  - "usgs"
---

# Landsat Global Land Survey 1975 Mosaic

## 数据集简介

The Global Land Survey (GLS) 1975 is a
global collection of imagery from the Landsat Multispectral Scanner
(MSS).  Most scenes were acquired by Landsat 1&ndash;3 during the
years from 1972&ndash;1983.  A few gaps in the Landsat 1&ndash;3 data
have been filled with scenes acquired by Landsat 4&ndash;5 during the
years 1982&ndash;1987.

These data contain 4 spectral bands:
Green, Red, an NIR band, and a SWIR band.  In the typical false-color
presentation the images appear red because the NIR band, displayed as
red, highlights vegetation.

All scenes in the collection are included in this composite image.

## 基本信息

- 数据集编号（Earth Engine ID）：`LANDSAT/GLS1975_MOSAIC`
- 数据类型：影像集合（ImageCollection）
- 提供方：USGS、Google Earth Engine
- 时间范围：1975-01-01 至 1976-01-01
- 空间分辨率：60 米
- 许可：PDDL-1.0
- 关键词：gls, landsat, radiance, satellite-imagery, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| 10 | Green | 60 | 0.50 - 0.60 &mu;m |
| 20 | Red | 60 | 600-700 &mu;m |
| 30 | Near infrared | 60 | 0.70-0.80 &mu;m |
| 40 | Short-wavelength infrared | 60 | 0.80-1.10 &mu;m |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LANDSAT/GLS1975_MOSAIC');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_GLS1975_MOSAIC

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
