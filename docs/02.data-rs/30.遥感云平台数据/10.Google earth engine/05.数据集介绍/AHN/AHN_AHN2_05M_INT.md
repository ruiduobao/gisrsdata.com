---
title: "AHN Netherlands 0.5m DEM, Interpolated"
date: 2026-11-03 12:00:00
permalink: /pages/1dc8c864/
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

# AHN Netherlands 0.5m DEM, Interpolated

## 数据集简介

The AHN DEM is a 0.5m DEM covering the Netherlands. It was generated from
LIDAR data taken in the spring between 2007 and 2012.

It contains ground level samples with all other items above ground (such as
buildings, bridges, trees etc.) removed. This version is interpolated; the
areas where objects have been removed are filled with interpolated values. The
point cloud was converted to a 0.5m grid using a squared inverse distance
weighting method.

Note: This dataset does not include a small number of tiles listed in the
manifest that are only available at a lower resolution.

## 基本信息

- 数据集编号（Earth Engine ID）：`AHN/AHN2_05M_INT`
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
var dataset = ee.Image('AHN/AHN2_05M_INT');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_INT

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
