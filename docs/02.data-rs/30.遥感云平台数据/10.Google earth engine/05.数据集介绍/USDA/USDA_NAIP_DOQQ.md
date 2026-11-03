---
title: "NAIP: National Agriculture Imagery Program"
date: 2026-11-03 12:00:00
permalink: /pages/52a70103/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aerial"
  - "agriculture"
  - "fpac"
  - "highres"
  - "imagery"
  - "naip"
  - "orthophotos"
  - "usda"
---

# NAIP: National Agriculture Imagery Program

## 数据集简介

The National Agriculture Imagery Program (NAIP) acquires aerial imagery
during the agricultural growing seasons in the continental U.S.

NAIP projects are contracted each year based upon available funding and the
imagery acquisition cycle. Beginning in 2003, NAIP was acquired on
a 5-year cycle. 2008 was a transition year, and a three-year cycle began
in 2009.

NAIP imagery is acquired at a one-meter ground sample distance (GSD) with a
horizontal accuracy that matches within six meters of photo-identifiable
ground control points, which are used during image inspection.

Older images were collected using 3 bands (Red, Green, and Blue: RGB), but
newer imagery is usually collected with an additional near-infrared band
(RGBN). RGB asset ids begin with 'n_', NRG asset ids begin with 'c_', RGBN
asset ids begin with 'm_'.

Some older images have GSD of 2 meters.

## 基本信息

- 数据集编号（Earth Engine ID）：`USDA/NAIP/DOQQ`
- 数据类型：影像集合（ImageCollection）
- 提供方：USDA Farm Production and Conservation - Business Center, Geospatial Enterprise Operations、Google Earth Engine
- 时间范围：2002-06-15 至 2023-11-17
- 空间分辨率：0.6 米
- 许可：proprietary
- 关键词：aerial, agriculture, fpac, highres, imagery, naip, orthophotos, usda

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| R | Red | 0.6 |  |
| G | Green | 0.6 |  |
| B | Blue | 0.6 |  |
| N | Near infrared | 0.6 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('USDA/NAIP/DOQQ');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USDA_NAIP_DOQQ
- 数据引用：USDA Farm Production and Conservation - Business Center, Geospatial Enterprise Operations

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
