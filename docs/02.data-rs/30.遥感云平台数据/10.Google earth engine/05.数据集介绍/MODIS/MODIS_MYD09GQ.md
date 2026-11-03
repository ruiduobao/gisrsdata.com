---
title: "MYD09GQ.005 Aqua Surface Reflectance Daily L2G Global 250m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/4e84ebc3/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aqua"
  - "daily"
  - "global"
  - "modis"
  - "myd09gq"
  - "satellite-imagery"
  - "surface-reflectance"
  - "usgs"
---

# MYD09GQ.005 Aqua Surface Reflectance Daily L2G Global 250m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MODIS Surface Reflectance products
provide an estimate of the surface spectral reflectance as it would be
measured at ground level in the absence of atmospheric scattering or
absorption. Low-level data are corrected for atmospheric gases and
aerosols, yielding a level-2 basis for several higher-order gridded
level-2 (L2G) and level-3 products.

MYD09GQ provides Bands
1 and 2 at a 250-meter resolution in a daily gridded L2G product in
the Sinusoidal projection. Science Data Sets provided for this product
include reflectance for Bands 1 and 2, a quality rating, observation
coverage, and observation number. This product is meant to be used in
conjunction with the MOD09GA where important quality and viewing
geometry information is stored.

Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data) for information on citing LP DAAC datasets.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/MYD09GQ`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2002-07-04 至 2017-03-30
- 空间分辨率：250 米
- 许可：proprietary
- 关键词：aqua, daily, global, modis, myd09gq, satellite-imagery, surface-reflectance, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| num_observations | Number of observations per 250m pixel | 250 |  |
| sur_refl_b01 | Surface reflectance band 1 | 250 | 620-670nm |
| sur_refl_b02 | Surface reflectance for band 2 | 250 | 841-876nm |
| QC_250m | Surface reflectance quality assurance | 250 |  |
| obscov | Observation coverage percent | 250 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/MYD09GQ');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09GQ

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
