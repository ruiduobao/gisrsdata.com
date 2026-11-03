---
title: "Copernicus DEM GLO-30: Global 30m Digital Elevation Model [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/191e6d51/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
---

# Copernicus DEM GLO-30: Global 30m Digital Elevation Model [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The Copernicus DEM is a Digital Surface Model (DSM) which represents the
surface of the Earth including buildings, infrastructure and vegetation.
This DEM is derived from an edited DSM named WorldDEM&trade;, i.e., flattening of
water bodies and consistent flow of rivers has been included. Editing of
shore- and coastlines, special features such as airports and implausible
terrain structures has also been applied.

The WorldDEM product is based on the radar satellite data acquired during
the TanDEM-X Mission, which is funded by a Public Private Partnership
between the German State, represented by the German Aerospace Centre (DLR)
and Airbus Defence and Space. More details are available in the dataset
[documentation](https://dataspace.copernicus.eu/sites/default/files/media/files/2024-06/geo1988-copernicusdem-spe-002_producthandbook_i5.0.pdf).

The DSM uses the EGM2008 vertical datum:
[EPSG:3855](https://spatialreference.org/ref/epsg/3855/). This means a 0
elevation at a location does not imply the location is at a mean sea level.

Earth Engine asset has been ingested from the DGED files.

Note: See the code example for the recommended way of computing slope.
Unlike most DEMs in Earth Engine, this is an image collection due to
multiple resolutions of source files that make it impossible to mosaic them
into a single asset, so the slope computations need a reprojection.

## 基本信息

- 数据集编号（Earth Engine ID）：`COPERNICUS/DEM/GLO30`
- 数据类型：影像集合（ImageCollection）
- 提供方：Copernicus、Google Earth Engine
- 时间范围：2010-12-01 至 2015-01-31
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：copernicus, dem, elevation, elevation-topography, geophysical

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| DEM | Digital Surface Model | 30 |  |
| EDM | The Edit Data Mask indicates all DEM pixels that were modified during the terrain and hydro editing process.  | 30 |  |
| FLM | The Filling Mask is created primarily during the terrain editing process.  | 30 |  |
| HEM | The Height Error Mask represents the corresponding height error for each DEM pixel in the form of the standard deviation derived from the interferometric coherence and geometrical considerations.  | 30 |  |
| WBM | The Water Body Mask shows all DEM pixels which are classified as water and edited according to the categories Ocean, Lake or River.  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/DEM/GLO30');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
