---
title: "MOD09A1.005 Surface Reflectance 8-Day Global 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/283afd8e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "global"
  - "mod09a1"
  - "modis"
  - "satellite-imagery"
  - "surface-reflectance"
  - "terra"
---

# MOD09A1.005 Surface Reflectance 8-Day Global 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MODIS Surface Reflectance products
provide an estimate of the surface spectral reflectance as it would be
measured at ground level in the absence of atmospheric scattering or
absorption. Low-level data are corrected for atmospheric gases and
aerosols, yielding a level-2 basis for several higher-order gridded
level-2 (L2G) and level-3 products.

MOD09A1 provides
Bands 1-7 at 500-meter resolution in an 8-day gridded level-3 product in the
Sinusoidal projection. Each MOD09A1 pixel contains the best possible L2G
observation during an 8-day period as selected on the basis of high observation
coverage, low view angle, the absence of clouds or cloud shadow, and aerosol
loading. Science Data Sets provided for this product include reflectance values
for Bands 1-7, quality assessment, and the day of the year for the pixel along
with solar, view, and zenith angles.

Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data) for information on citing LP DAAC datasets.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/MOD09A1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-18 至 2017-03-22
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：8-day, global, mod09a1, modis, satellite-imagery, surface-reflectance, terra

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sur_refl_b01 | Surface reflectance for band 1 | 500 | 620-670nm |
| sur_refl_b02 | Surface reflectance for band 2 | 500 | 841-876nm |
| sur_refl_b03 | Surface reflectance for band 3 | 500 | 459-479nm |
| sur_refl_b04 | Surface reflectance for band 4 | 500 | 545-565nm |
| sur_refl_b05 | Surface reflectance for band 5 | 500 | 1230-1250nm |
| sur_refl_b06 | Surface reflectance for band 6 | 500 | 1628-1652nm |
| sur_refl_b07 | Surface reflectance for band 7 | 500 | 2105-2155nm |
| QA | Surface reflectance 500m band quality control flags | 500 |  |
| SolarZenith | MODIS Solar zenith angle | 500 |  |
| ViewZenith | MODIS view zenith angle | 500 |  |
| RelativeAzimuth | MODIS relative azimuth angle | 500 |  |
| StateQA | Surface reflectance 500m state flags | 500 |  |
| DayOfYear | Julian day of the year for the pixel | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/MOD09A1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09A1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
