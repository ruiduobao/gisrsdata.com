---
title: "FORMA Global Forest Watch Deforestation Alerts, 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/19a66aef/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alerts"
  - "deforestation"
  - "fire"
  - "forest"
  - "forma"
  - "geophysical"
  - "gfw"
  - "modis"
  - "nasa"
  - "wri"
---

# FORMA Global Forest Watch Deforestation Alerts, 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

FORMA is a MODIS-based deforestation alerting system for the humid tropical
forests. FORMA is designed for quick identification of new areas of tree
cover loss. The system analyzes data gathered daily by the MODIS sensor,
which operates on NASA's Terra and Aqua satellites. The FORMA alerts system
then detects pronounced changes in vegetation cover over time, as measured
by the Normalized Difference Vegetation Index (NDVI), a measure of
vegetation greenness. These pronounced changes in vegetation cover are
likely to indicate forest being cleared, burned, or defoliated. An alert is
added to the dataset by setting the pixel value to the date at which a
change was detected. FORMA alerts only appear in areas where the probability
of tree cover loss is greater than or equal to 50%. FORMA data has 500-meter
spatial resolution and twice-monthly update interval. FORMA alerts start in
January 2006.

## 基本信息

- 数据集编号（Earth Engine ID）：`FORMA/FORMA_500m`
- 数据类型：影像（Image）
- 提供方：Global Forest Watch, World Resources Institute、Google Earth Engine
- 时间范围：2006-01-01 至 2015-06-10
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：alerts, deforestation, fire, forest, forma, geophysical, gfw, modis, nasa, wri

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| constant | [Seconds since Jan 1, 1970](https://en.wikipedia.org/wiki/Unix_time) | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('FORMA/FORMA_500m');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/FORMA_FORMA_500m
- 数据引用：Hammer, Dan, Robin Kraft, and David Wheeler. 2013. FORMA Alerts. World
Resources Institute and Center for Global Development.
[www.globalforestwatch.org](www.globalforestwatch.org).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
