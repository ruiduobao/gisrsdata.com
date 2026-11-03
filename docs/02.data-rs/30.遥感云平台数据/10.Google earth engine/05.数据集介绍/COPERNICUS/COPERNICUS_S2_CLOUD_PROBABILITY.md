---
title: "Sentinel-2: Cloud Probability"
date: 2026-11-03 12:00:00
permalink: /pages/1a2cfa86/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cloud"
  - "copernicus"
  - "esa"
  - "eu"
  - "msi"
  - "radiance"
  - "satellite-imagery"
  - "sentinel"
  - "sentinelhub"
---

# Sentinel-2: Cloud Probability

## 数据集简介

The S2 cloud probability is created with the
[sentinel2-cloud-detector](https://github.com/sentinel-hub/sentinel2-cloud-detector)
library (using [LightGBM](https://github.com/microsoft/LightGBM)).
All bands are upsampled using bilinear interpolation to 10m resolution
before the gradient boost base algorithm is applied.  The resulting
`0..1` floating point probability is scaled to `0..100` and stored as
an UINT8.  Areas missing any or all of the bands are masked out.
Higher values are more likely to be clouds or highly reflective surfaces
(e.g. roof tops or snow).

Sentinel-2 is a wide-swath, high-resolution, multi-spectral
imaging mission supporting Copernicus Land Monitoring studies,
including the monitoring of vegetation, soil and water cover,
as well as observation of inland waterways and coastal areas.

The Level-2 data can be found in the collection
[COPERNICUS/S2_SR_HARMONIZED](COPERNICUS_S2_SR_HARMONIZED).  The Level-1B data can be found in the collection
[COPERNICUS/S2_HARMONIZED](COPERNICUS_S2_HARMONIZED).  Additional metadata is available on assets in those
collections.

See
[this tutorial](https://developers.google.com/earth-engine/tutorials/community/sentinel-2-s2cloudless)
explaining how to apply the cloud mask.

## 基本信息

- 数据集编号（Earth Engine ID）：`COPERNICUS/S2_CLOUD_PROBABILITY`
- 数据类型：影像集合（ImageCollection）
- 提供方：European Union/ESA/Copernicus/SentinelHub、Google Earth Engine
- 时间范围：2015-06-27 至 2026-11-03
- 许可：proprietary
- 关键词：cloud, copernicus, esa, eu, msi, radiance, satellite-imagery, sentinel, sentinelhub

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| probability | Probability that the pixel is cloudy. | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/S2_CLOUD_PROBABILITY');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_CLOUD_PROBABILITY

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
