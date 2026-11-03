---
title: "MCD43A2.005 BRDF-Albedo Quality 16-Day Global 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/383ffd43/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "albedo"
  - "brdf"
  - "global"
  - "modis"
  - "quality"
  - "reflectance"
  - "satellite-imagery"
  - "usgs"
---

# MCD43A2.005 BRDF-Albedo Quality 16-Day Global 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MODerate-resolution Imaging
Spectroradiometer (MODIS) BRDF/Albedo Quality product (MCD43A2)
describes the overall condition of the other BRDF and Albedo
products. The MCD43A2 product contains 16 days of data at 500 meter
spatial resolution provided in a level-3 gridded data set in
Sinusoidal projection, and includes albedo quality, snow conditions,
ancillary information, and inversion information.  Both Terra and Aqua
data are used in the generation of this product, providing the highest
probability for quality input data and designating it as an MCD,
meaning Combined, product.

Version-5 MODIS/Terra+Aqua BRDF/Albedo
products are Validated Stage 1, meaning that accuracy has been
estimated using a small number of independent measurements obtained
from selected locations and time periods and ground-truth/field
program efforts. Although there may be later improved versions, these
data are ready for use in scientific publications.

Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data) for information on citing LP DAAC datasets.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/MCD43A2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-18 至 2017-03-14
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：16-day, albedo, brdf, global, modis, quality, reflectance, satellite-imagery, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BRDF_Albedo_Quality | BRDF/Albedo mandatory quality | 500 |  |
| Snow_BRDF_Albedo | Snow-free or snow BRDF/albedo retrieved | 500 |  |
| BRDF_Albedo_Ancillary | BRDF albedo ancillary quality | 500 |  |
| BRDF_Albedo_Band_Quality | BRDF albedo band quality | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/MCD43A2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
