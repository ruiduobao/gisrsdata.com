---
title: "AHN Netherlands 0.5m DEM, Raw Samples"
date: 2026-11-03 12:00:00
permalink: /pages/ffa135bf/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ahn"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
  - "lidar"
  - "netherlands"
---

# AHN Netherlands 0.5m DEM, Raw Samples

## 数据集简介

The AHN DEM is a 0.5m DEM covering the Netherlands. It was generated from
LIDAR data taken in the spring between 2007 and 2012.

This version contains both ground level samples and items above ground level
(such as buildings, bridges, trees etc). The point cloud was converted to a
0.5m grid using a squared inverse distance weighting method.

## 基本信息

- 数据集编号（Earth Engine ID）：`AHN/AHN2_05M_RUW`
- 数据类型：影像（Image）
- 提供方：AHN、Google Earth Engine
- 时间范围：2012-01-01 至 2012-01-01
- 空间分辨率：0.5 米
- 许可：CC0-1.0
- 关键词：ahn, dem, elevation, elevation-topography, geophysical, lidar, netherlands

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | Elevation | 0.5 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('AHN/AHN2_05M_RUW');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_RUW

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
