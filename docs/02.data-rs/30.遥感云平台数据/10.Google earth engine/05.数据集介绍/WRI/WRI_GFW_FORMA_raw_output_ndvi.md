---
title: "FORMA Raw Output NDVI"
date: 2026-11-03 12:00:00
permalink: /pages/987a314f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "deforestation"
  - "forest"
  - "forest-biomass"
  - "forma"
  - "gfw"
  - "modis"
  - "monitoring"
  - "wri"
---

# FORMA Raw Output NDVI

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

The images in this ImageCollection contain the raw FORMA data calculated after new
MODIS NDVI data becomes available, approximately every 16 days.

The image contains 4 bands. The 'delta', 'near_term_delta', and 'clearing' bands
all give a percentage of clearing (from 0 to 100) for different accumulation periods.
Accuracy gives a measure of confidence in these predictions
(0 = very little confidence, 100 is high confidence).

## 基本信息

- 数据集编号（Earth Engine ID）：`WRI/GFW/FORMA/raw_output_ndvi`
- 数据类型：影像集合（ImageCollection）
- 提供方：World Resources Institute / Global Forest Watch、Google Earth Engine
- 时间范围：2012-01-01 至 2019-04-23
- 空间分辨率：250 米
- 许可：proprietary
- 关键词：daily, deforestation, forest, forest-biomass, forma, gfw, modis, monitoring, wri

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| delta | Percentage of clearing in the last 96 days | 250 |  |
| near_term_delta | Percentage of clearing in the last 32 days | 250 |  |
| accuracy | Confidence in predictions | 250 |  |
| clearing | Percentage of clearing in the last 365 days | 250 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('WRI/GFW/FORMA/raw_output_ndvi');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WRI_GFW_FORMA_raw_output_ndvi

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
