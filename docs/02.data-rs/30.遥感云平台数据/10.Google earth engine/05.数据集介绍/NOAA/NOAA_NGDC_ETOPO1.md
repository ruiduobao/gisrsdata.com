---
title: "ETOPO1: Global 1 Arc-Minute Elevation"
date: 2026-11-03 12:00:00
permalink: /pages/52780435/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "bedrock"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
  - "ice"
  - "noaa"
  - "topography"
---

# ETOPO1: Global 1 Arc-Minute Elevation

## 数据集简介

ETOPO1 is a 1 arc-minute global relief model of Earth''s
surface that integrates land topography and ocean bathymetry. It
was built from numerous global and regional data sets. It contains
two elevation bands: ice_surface and bedrock.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/NGDC/ETOPO1`
- 数据类型：影像（Image）
- 提供方：NOAA、Google Earth Engine
- 时间范围：2008-08-01 至 2008-08-01
- 空间分辨率：1855 米
- 许可：proprietary
- 关键词：bedrock, dem, elevation, elevation-topography, geophysical, ice, noaa, topography

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| bedrock | Elevation at ground level and at the base of the Antarctic and Greenland ice sheets | 1855 |  |
| ice_surface | Elevation at ground level and at the top of the Antarctic and Greenland ice sheets | 1855 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('NOAA/NGDC/ETOPO1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_NGDC_ETOPO1
- 数据引用：Amante, C. and B. W. Eakins, ETOPO1 1 Arc-Minute Global Relief
Model: Procedures, Data Sources and Analysis. NOAA Technical Memorandum
NESDIS NGDC-24, 19 pp, March 2009.

- DOI：10.7289/V5C8276M

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
