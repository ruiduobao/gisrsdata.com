---
title: "AHN3: Netherlands AHN 0.5m"
date: 2026-11-03 12:00:00
permalink: /pages/9769c309/
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

# AHN3: Netherlands AHN 0.5m

## 数据集简介

The Actueel Hoogtebestand Nederland (AHN) is a dataset with detailed and
precise elevation data for the whole of the Netherlands. Elevation
information was collected from helicopters and aircraft using laser
technology with vertical accuracy of 5 cm.

AHN3 Dataset contains the Netherlands AHN 0.5m DSM and DTM variables.
The data cover the period between 2014 and 2019.

The Digital Terrain Model (DTM) product represents the elevation of the
ground, while the Digital Surface Model (DSM) product represents the
elevation of the tallest surfaces at that point.

## 基本信息

- 数据集编号（Earth Engine ID）：`AHN/AHN3`
- 数据类型：影像集合（ImageCollection）
- 提供方：AHN、Google Earth Engine
- 时间范围：2014-01-01 至 2019-01-01
- 空间分辨率：0.5 米
- 许可：CC0-1.0
- 关键词：ahn, dem, elevation, elevation-topography, geophysical, lidar, netherlands

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| dtm | Elevation of the ground | 0.5 |  |
| dsm | Elevation of the tallest surfaces at that point | 0.5 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('AHN/AHN3');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN3

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
