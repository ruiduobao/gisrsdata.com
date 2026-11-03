---
title: "FORMA Alert Thresholds"
date: 2026-11-03 12:00:00
permalink: /pages/299d3b97/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "deforestation"
  - "fire"
  - "forest"
  - "forma"
  - "gfw"
  - "modis"
  - "monitoring"
  - "wri"
---

# FORMA Alert Thresholds

## 数据集简介

**NOTE from WRI**: WRI decided to stop updating FORMA alerts. The goal was
to simplify the [Global Forest Watch](https://www.globalforestwatch.org)
user experience and reduce redundancy.
We found that [Terra-i](http://www.terra-i.org/terra-i.html) and
[GLAD](https://glad-forest-alert.appspot.com/) were more frequently used.
Moreover, using GLAD as a standard, found that Terra-i outperformed
FORMA globally.

FORMA alerts are detected using a combination of two MODIS
products: NDVI (Normalized Difference Vegetation Index) and FIRMS
(Fires Information for Resource Management System). NDVI updates are
processed every 16 days, while fire updates are processed daily. Models
are developed individually for each ecogroup to relate the two inputs to
the area of clearing, using the Hansen annual tree cover loss data to train
the model. The minimum threshold to qualify as an alert is 25% of the pixel
cleared, though thresholds vary by ecogroup to minimize false positives.
Here is an [example script](https://code.earthengine.google.com/f29b1e4360f3fc36847bd789ceeb20f6)
for a quick introduction to the FORMA datasets.

This image contains the thresholds at which, when crossed, a FORMA alert is
produced. The values are equal to max(25,40%*RegionalMax), where RegionalMax
is the historical maximum clearing for a pixel in this ecogroup.

## 基本信息

- 数据集编号（Earth Engine ID）：`WRI/GFW/FORMA/thresholds`
- 数据类型：影像（Image）
- 提供方：World Resources Institute / Global Forest Watch、Google Earth Engine
- 时间范围：2012-01-01 至 2016-01-01
- 空间分辨率：250 米
- 许可：proprietary
- 关键词：daily, deforestation, fire, forest, forma, gfw, modis, monitoring, wri

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| delta_bound | The thresholds at which, when crossed, a FORMA alert is produced | 250 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('WRI/GFW/FORMA/thresholds');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WRI_GFW_FORMA_thresholds

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
