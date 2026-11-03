---
title: "Landsat Gross Primary Production CONUS"
date: 2026-11-03 12:00:00
permalink: /pages/e57156b4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "conus"
  - "gpp"
  - "gridmet-derived"
  - "landsat"
  - "mod17"
  - "nlcd-derived"
  - "photosynthesis"
  - "plant-productivity"
  - "production"
  - "productivity"
---

# Landsat Gross Primary Production CONUS

## 数据集简介

The Landsat Gross Primary Production (GPP) CONUS dataset estimates GPP using
Landsat Surface Reflectance for CONUS. GPP is the amount of
carbon captured by plants in an ecosystem and is an essential component in
the calculations of Net Primary Production (NPP). GPP is calculated using the
MOD17 algorithm (see [MOD17 User
Guide](https://www.ntsg.umt.edu/files/modis/MOD17UsersGuide2015_v3.pdf)) with
Landsat Surface Reflectance, gridMET, and the National Land Cover Database.

## 基本信息

- 数据集编号（Earth Engine ID）：`UMT/NTSG/v2/LANDSAT/GPP`
- 数据类型：影像集合（ImageCollection）
- 提供方：University of Montana Numerical Terradynamic Simulation Group (NTSG)、Google Earth Engine
- 时间范围：1986-01-01 至 2021-12-19
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：16-day, conus, gpp, gridmet-derived, landsat, mod17, nlcd-derived, photosynthesis, plant-productivity, production, productivity

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| GPP | 16-day gross primary production | 30 |  |
| QC | Indicates the quality of the Landsat NDVI pixel used in the GPP Calculation | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('UMT/NTSG/v2/LANDSAT/GPP');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UMT_NTSG_v2_LANDSAT_GPP
- 数据引用：Robinson, N.P., B.W. Allred, W.K. Smith, M.O. Jones, A. Moreno, T.A.
Erickson, D.E. Naugle, and S.W. Running. 2018. Terrestrial primary
production for the conterminous United States derived from Landsat 30 m and
MODIS 250 m. Remote Sensing in Ecology and Conservation.
[doi:10.1002/rse2.74](https://doi.org/10.1002/rse2.74)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
