---
title: "DEM-S: Australian Smoothed Digital Elevation Model"
date: 2026-11-03 12:00:00
permalink: /pages/ada188d3/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "australia"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "ga"
  - "geophysical"
  - "geoscience-australia"
  - "smoothed"
  - "srtm"
---

# DEM-S: Australian Smoothed Digital Elevation Model

## 数据集简介

The Smoothed Digital Elevation Model (DEM-S) was derived
from the SRTM data acquired by NASA in February 2000. DEM-S represents
ground surface topography (excluding vegetation features) and has
been smoothed to reduce noise and improve the representation of
surface shape. An adaptive process applied more smoothing in flatter
areas than hilly areas, and more smoothing in noisier areas than
in less noisy areas.

This DEM-S supports calculation of local terrain shape attributes
such as slope, aspect, and curvature that could not be reliably
derived from the unsmoothed 1 second DEM because of noise.

There are several areas with unexpected negative values: close to
Canberra around (150.443044, -35.355281) with values of -55 and in Western
Australia around (124.84, -16.44) with -43.

## 基本信息

- 数据集编号（Earth Engine ID）：`AU/GA/DEM_1SEC/v10/DEM-S`
- 数据类型：影像（Image）
- 提供方：Geoscience Australia、Google Earth Engine
- 时间范围：2010-02-01 至 2010-02-01
- 空间分辨率：30.92 米
- 许可：CC-BY-4.0
- 关键词：australia, dem, elevation, elevation-topography, ga, geophysical, geoscience-australia, smoothed, srtm

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | Elevation | 30.92 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('AU/GA/DEM_1SEC/v10/DEM-S');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S
- 数据引用：Geoscience Australia, 2015. Digital Elevation Model (DEM) of Australia
derived from LiDAR 5 Metre Grid. Geoscience Australia, Canberra.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
