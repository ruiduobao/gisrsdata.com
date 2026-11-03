---
title: "SRTM Digital Elevation Data Version 4"
date: 2026-11-03 12:00:00
permalink: /pages/81d193ff/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cgiar"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
  - "srtm"
  - "topography"
---

# SRTM Digital Elevation Data Version 4

## 数据集简介

The Shuttle Radar Topography Mission (SRTM) digital
elevation dataset was originally produced to provide consistent,
high-quality elevation data at near global scope. This version
of the SRTM digital elevation data has been processed to fill data
voids, and to facilitate its ease of use.

## 基本信息

- 数据集编号（Earth Engine ID）：`CGIAR/SRTM90_V4`
- 数据类型：影像（Image）
- 提供方：NASA/CGIAR、Google Earth Engine
- 时间范围：2000-02-11 至 2000-02-22
- 许可：proprietary
- 关键词：cgiar, dem, elevation, elevation-topography, geophysical, srtm, topography

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | Elevation | 90 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('CGIAR/SRTM90_V4');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CGIAR_SRTM90_V4
- 数据引用：Jarvis, A., H.I. Reuter, A. Nelson, E. Guevara. 2008. Hole-filled
SRTM for the globe Version 4, available from the CGIAR-CSI SRTM
90m Database: [https://srtm.csi.cgiar.org](https://srtm.csi.cgiar.org).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
