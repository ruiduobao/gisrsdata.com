---
title: "Canadian Digital Elevation Model"
date: 2026-11-03 12:00:00
permalink: /pages/34572cde/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "canada"
  - "cdem"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
  - "nrcan"
  - "topography"
---

# Canadian Digital Elevation Model

## 数据集简介

The Canadian Digital Elevation Model (CDEM) is part of Natural Resources
Canada's (NRCan) altimetry system and stems from the existing Canadian
Digital Elevation Data (CDED). In these data, elevations can be either
ground or reflective surface elevations.

The CDEM is comprised of multiple DEMs with varying resolutions. These
vary according to latitude and have a base resolution of 0.75 arc-seconds.
For more information see the [Product Specifications](https://ftp.geogratis.gc.ca/pub/nrcan_rncan/elevation/cdem_mnec/doc/CDEM_product_specs.pdf)

Contains information licensed under the
[Open Government Licence - Canada](https://open.canada.ca/en/open-government-licence-canada).

## 基本信息

- 数据集编号（Earth Engine ID）：`NRCan/CDEM`
- 数据类型：影像集合（ImageCollection）
- 提供方：NRCan、Google Earth Engine
- 时间范围：1945-01-01 至 2011-01-01
- 空间分辨率：23.19 米
- 许可：OGL-Canada-2.0
- 关键词：canada, cdem, dem, elevation, elevation-topography, geophysical, nrcan, topography

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | Elevation | 23.19 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NRCan/CDEM');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NRCan_CDEM

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
