---
title: "SPOT Multispectral Imagery 10-20m, Brazil"
date: 2026-11-03 12:00:00
permalink: /pages/0f610d9b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "brazil"
  - "forest-code"
  - "google"
  - "multispectral"
  - "satellite-imagery"
  - "spot"
---

# SPOT Multispectral Imagery 10-20m, Brazil

## 数据集简介

This collection provides 2008-era raw multispectral imagery from the SPOT 2, 4, and 5 satellites over the country of Brazil. These missions, operated by CNES, were designed to provide high-resolution, wide-area optical imagery for managing Earth's resources. SPOT 2 and 4 utilized HRV and HRVIR "pushbroom" sensors with a 60 km swath. SPOT 5 introduced the High-Resolution Geometric (HRG) instrument, offering improved 10m multispectral resolution. This raw image collection can be used for historical environmental analysis such as in the context of the [Brazil Forest Code](https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12651.htm). See also [Brazil Forest Imagery Dataset 2008: Analytic Basemap](/earth-engine/datasets/catalog/GOOGLE_BRAZIL_FOREST_2008_V1_ANALYTIC).

A cloud mask can be added to images in this collection by linking the [MS_NC collection](/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_NC_V1). See the example below.


### Data access

To access this dataset, please fill out the [request form](https://forms.gle/jQmCbWgarjENQBYz6).

## 基本信息

- 数据集编号（Earth Engine ID）：`AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/MS/V1`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google/CNES、Google Earth Engine
- 时间范围：2007-01-01 至 2009-11-26
- 空间分辨率：20 米
- 许可：proprietary
- 关键词：brazil, forest-code, google, multispectral, satellite-imagery, spot

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| G | Green (0.50-0.59 µm) | 20 |  |
| R | Red (0.61-0.68 µm) | 20 |  |
| N | Near-Infrared (NIR) (0.78-0.89 µm) | 20 |  |
| S | Shortwave near-Infrared SWIR (1.53-1.78 µm). Available for SPOT 4/5 | 20 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('AIRBUS/SPOT_2_4_5/BRAZIL/2007_2009/MS/V1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AIRBUS_SPOT_2_4_5_BRAZIL_2007_2009_MS_V1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
