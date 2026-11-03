---
title: "Australian 5M DEM"
date: 2026-11-03 12:00:00
permalink: /pages/eb3acc3a/
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
  - "lidar"
---

# Australian 5M DEM

## 数据集简介

The Digital Elevation Model (DEM) 5 meter Grid of Australia
derived from LiDAR model represents a National 5 meter (bare
earth) DEM which has been derived from some 236 individual LiDAR
surveys between 2001 and 2015 covering an area in excess of 245,000
square kilometers. These surveys cover Australia's populated
coastal zone; floodplain surveys within the Murray Darling Basin,
and individual surveys of major and minor population centers.
All available 1 meter resolution LiDAR-derived DEMs have been
compiled and resampled using a neighborhood-mean method to 5
meter resolution datasets for each survey area, and then merged
into a single dataset for each State. Each state's dataset is
provided as a separate image within the image collection.

The acquisition of the individual LiDAR surveys and derivation
of the 5m product has been part of a long-term collaboration
between Geoscience Australia, the Cooperative Research Centre
for Spatial Information (CRCSI), the Departments of Climate Change
and Environment, State and Territory jurisdictions, Local Government
and the Murray Darling Basin Authority under the auspices of
the National Elevation Data Framework and Coastal and Urban DEM
Program. The source datasets have been captured to standards
that are generally consistent with the Australian ICSM LiDAR
Acquisition Specifications with require a fundamental vertical
accuracy of at least 0.30m (95% confidence) and horizontal accuracy
of at least 0.80m (95% confidence).

There are several areas close to Perth with null (NaN) values around
(115.85, -31.99), (115.72, -33.75), and (115.10, -33.43).

## 基本信息

- 数据集编号（Earth Engine ID）：`AU/GA/AUSTRALIA_5M_DEM`
- 数据类型：影像集合（ImageCollection）
- 提供方：Geoscience Australia、Google Earth Engine
- 时间范围：2015-12-01 至 2015-12-01
- 空间分辨率：5 米
- 许可：CC-BY-4.0
- 关键词：australia, dem, elevation, elevation-topography, ga, geophysical, geoscience-australia, lidar

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | Elevation | 5 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('AU/GA/AUSTRALIA_5M_DEM');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AU_GA_AUSTRALIA_5M_DEM
- 数据引用：Geoscience Australia, 2015. Digital Elevation Model (DEM) of Australia
derived from LiDAR 5 Metre Grid. Geoscience Australia, Canberra.

- DOI：10.4225/25/5652419862E23

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
