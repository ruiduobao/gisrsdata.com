---
title: "Earth Timelapse v0"
date: 2026-11-03 12:00:00
permalink: /pages/4f1740e6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "global"
  - "google"
  - "landsat-derived"
  - "satellite-imagery"
  - "sentinel2-derived"
---

# Earth Timelapse v0

## 数据集简介

The Earth Timelapse dataset provides a four-decade visual record of
planetary change spanning from 1984 to 2022. Synthesized by Google from
petabytes of spaceborne observations acquired by NASA/USGS Landsat missions
(Landsat 4, 5, 7, 8, and 9) and ESA's Copernicus Sentinel-2 constellation,
the dataset is offered as annual mosaics for visual interpretation.

The annual mosaics are globally complete, gap-filled, and water-masked
visual basemaps that power the public Google Earth Timelapse interactive
viewer. Pre-1999 observation voids are smoothly reconstructed using
pixel-wise temporal linear regression interpolation across adjacent
valid observation years. Open ocean waters are replaced with styled
NOAA ETOPO1 shaded-relief bathymetry and global water masking (using Hansen
GFC and MOD44W datasets). These data are suitable for: visual
interpretation, educational storytelling, base mapping, or custom video
exports.

Note: The RGB bands contain visually normalized 8-bit values derived from
Top-of-Atmosphere (TOA) reflectance (contrast-stretched from [0.02, 0.50]
with gamma 1.7 and matched to a MODIS BRDF baseline), not surface
reflectance. Timelapse is not recommended for quantitative radiometric
analysis.

See [the Timelapse developer documentation](https://developers.google.com/earth-engine/timelapse/about)
for more details on data characteristics, processing, and limitations.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/ee-earth-timelapse/assets/annual`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google Earth Outreach、Google Earth Engine
- 时间范围：1984-01-01 至 2022-12-31
- 空间分辨率：30 米
- 许可：CC-BY-4.0
- 关键词：copernicus, global, google, landsat-derived, satellite-imagery, sentinel2-derived

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| red | Visually normalized 8-bit red value derived from TOA reflectance (min 0.02, max 0.50, gamma 1.7, matched to MODIS BRDF; not surface reflectance).  | 30 |  |
| green | Visually normalized 8-bit green value derived from TOA reflectance (min 0.02, max 0.50, gamma 1.7, matched to MODIS BRDF; not surface reflectance).  | 30 |  |
| blue | Visually normalized 8-bit blue value derived from TOA reflectance (min 0.02, max 0.50, gamma 1.7, matched to MODIS BRDF; not surface reflectance).  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/ee-earth-timelapse/assets/annual');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_ee-earth-timelapse_assets_annual
- 数据引用：Google Earth Timelapse (Google, Landsat, Copernicus). [Online](https://developers.google.com/earth-engine/timelapse/about)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
