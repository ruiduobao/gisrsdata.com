---
title: "MCD43A4.005 BRDF-Adjusted Reflectance 16-Day Global 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/04d0ef96/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "brdf"
  - "global"
  - "mcd43a4"
  - "modis"
  - "nbar"
  - "reflectance"
  - "satellite-imagery"
  - "surface-reflectance"
  - "usgs"
---

# MCD43A4.005 BRDF-Adjusted Reflectance 16-Day Global 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MODerate-resolution Imaging
Spectroradiometer (MODIS) Reflectance product MCD43A4 provides
500-meter reflectance data adjusted using a bidirectional reflectance
distribution function (BRDF) to model the values as if they were taken
from nadir view. The MCD43A4 product contains 16 days of data provided
in a level-3 gridded data set in Sinusoidal projection.

Both Terra and Aqua data are used in the generation of this product, providing
the highest probability for quality input data and designating it as
an MCD, meaning Combined, product.

Version-5 MODIS/Terra+Aqua BRDF/Albedo
products are Validated Stage 1, meaning that accuracy has been
estimated using a small number of independent measurements obtained
from selected locations and time periods and ground-truth/field
program efforts. Although there may be later improved versions, these
data are ready for use in scientific publications.

Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data) for information on citing LP DAAC datasets.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/MCD43A4`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-18 至 2017-03-14
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：16-day, brdf, global, mcd43a4, modis, nbar, reflectance, satellite-imagery, surface-reflectance, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Nadir_Reflectance_Band1 | NBAR at local solar noon for band 1 | 500 | 620-670nm |
| Nadir_Reflectance_Band2 | NBAR at local solar noon for band 2 | 500 | 841-876nm |
| Nadir_Reflectance_Band3 | NBAR at local solar noon for band 3 | 500 | 459-479nm |
| Nadir_Reflectance_Band4 | NBAR at local solar noon for band 4 | 500 | 545-565nm |
| Nadir_Reflectance_Band5 | NBAR at local solar noon for band 5 | 500 | 1230-1250nm |
| Nadir_Reflectance_Band6 | NBAR at local solar noon for band 6 | 500 | 1628-1652nm |
| Nadir_Reflectance_Band7 | NBAR at local solar noon for band 7 | 500 | 2105-2155nm |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/MCD43A4');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
