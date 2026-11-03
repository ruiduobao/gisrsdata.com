---
title: "GIMMS NDVI From AVHRR Sensors (3rd Generation)"
date: 2026-11-03 12:00:00
permalink: /pages/07e994dd/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "avhrr"
  - "gimms"
  - "nasa"
  - "ndvi"
  - "noaa"
  - "vegetation"
  - "vegetation-indices"
---

# GIMMS NDVI From AVHRR Sensors (3rd Generation)

## 数据集简介

GIMMS NDVI is generated from several NOAA's AVHRR sensors for a global
1/12-degree lat/lon grid. The latest version of the GIMMS NDVI dataset
is named NDVI3g (third generation GIMMS NDVI from AVHRR sensors).

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GIMMS/3GV0`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA/NOAA、Google Earth Engine
- 时间范围：1981-07-01 至 2013-12-16
- 空间分辨率：9277 米
- 许可：proprietary
- 关键词：avhrr, gimms, nasa, ndvi, noaa, vegetation, vegetation-indices

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ndvi | NDVI | 9277 |  |
| qa | QA flag | 9277 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/GIMMS/3GV0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GIMMS_3GV0

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
