---
title: "MOD09Q1.005 Surface Reflectance 8-Day Global 250m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/092067b2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "global"
  - "mod09q1"
  - "modis"
  - "satellite-imagery"
  - "surface-reflectance"
  - "terra"
---

# MOD09Q1.005 Surface Reflectance 8-Day Global 250m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MODIS Surface Reflectance products
provide an estimate of the surface spectral reflectance as it would be
measured at ground level in the absence of atmospheric scattering or
absorption. Low-level data are corrected for atmospheric gases and
aerosols, yielding a level-2 basis for several higher-order gridded
level-2 (L2G) and level-3 products.

MOD09Q1 provides Bands 1
and 2 at 250-meter resolution in an 8-day gridded level-3 product in the
Sinusoidal projection. Each MOD09Q1 pixel contains the best possible L2G
observation during an 8-day period as selected on the basis of
high observation coverage, low view angle, the absence of clouds or cloud
shadow, and aerosol loading. Science Data Sets provided for this product
include reflectance values for Bands 1 and 2, and a quality rating.

Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data) for information on citing LP DAAC datasets.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/MOD09Q1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-18 至 2017-03-22
- 空间分辨率：250 米
- 许可：proprietary
- 关键词：8-day, global, mod09q1, modis, satellite-imagery, surface-reflectance, terra

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sur_refl_b01 | Surface reflectance band 1 | 250 | 620-670nm |
| sur_refl_b02 | Surface reflectance for band 2 | 250 | 841-876nm |
| QA | Surface reflectance 250m band quality control flags | 250 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/MOD09Q1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09Q1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
