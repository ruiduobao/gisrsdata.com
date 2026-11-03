---
title: "Landsat Global Land Survey 1975"
date: 2026-11-03 12:00:00
permalink: /pages/67260c17/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "global"
  - "gls"
  - "landsat"
  - "radiance"
  - "satellite-imagery"
  - "usgs"
---

# Landsat Global Land Survey 1975

## 数据集简介

The Global Land Survey (GLS) 1975 is a
global collection of imagery from the Landsat Multispectral
Scanner (MSS).  Most scenes were acquired by Landsat 1-3
in 1972-1983.  A few gaps in the Landsat 1-3 data
have been filled with scenes acquired by Landsat 4-5 during the
years 1982-1987.  These data contain 4 spectral bands:
Green, Red, an NIR band, and a SWIR band.  In the typical
False-color presentation, the images appear red because
the NIR band, displayed as red, highlights vegetation.

## 基本信息

- 数据集编号（Earth Engine ID）：`LANDSAT/GLS1975`
- 数据类型：影像集合（ImageCollection）
- 提供方：USGS、Google Earth Engine
- 时间范围：1972-07-25 至 1983-02-20
- 空间分辨率：60 米
- 许可：proprietary
- 关键词：global, gls, landsat, radiance, satellite-imagery, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| 10 | Green | 60 | 500-600 nm |
| 20 | Red | 60 | 600-700 nm |
| 30 | Near infrared | 60 | 700-800 nm |
| 40 | Short-wavelength infrared | 60 | 800-1100 nm |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LANDSAT/GLS1975');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_GLS1975
- 数据引用：GLS 1975 image courtesy of the U.S. Geological Survey

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
