---
title: "MODIS Net Primary Production CONUS"
date: 2026-11-03 12:00:00
permalink: /pages/36a82d51/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "conus"
  - "gridmet-derived"
  - "mod09q1"
  - "mod17"
  - "modis"
  - "nlcd-derived"
  - "npp"
  - "photosynthesis"
  - "plant-productivity"
  - "production"
  - "productivity"
  - "yearly"
---

# MODIS Net Primary Production CONUS

## 数据集简介

The MODIS Net Primary Production (NPP) CONUS dataset estimates NPP using
MODIS Surface Reflectance for CONUS. NPP is the amount of
carbon captured by plants in an ecosystem, after accounting for losses due to
respiration. NPP is calculated using the MOD17 algorithm (see [MOD17 User
Guide](https://www.ntsg.umt.edu/files/modis/MOD17UsersGuide2015_v3.pdf)) with
MODIS Surface Reflectance, gridMET, and the National Land Cover Database.

## 基本信息

- 数据集编号（Earth Engine ID）：`UMT/NTSG/v2/MODIS/NPP`
- 数据类型：影像集合（ImageCollection）
- 提供方：University of Montana Numerical Terradynamic Simulation Group (NTSG)、Google Earth Engine
- 时间范围：2001-01-01 至 2019-01-01
- 空间分辨率：250 米
- 许可：proprietary
- 关键词：conus, gridmet-derived, mod09q1, mod17, modis, nlcd-derived, npp, photosynthesis, plant-productivity, production, productivity, yearly

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| annualNPP | Annual net primary productivity | 250 |  |
| QC | Percentage of gap-filled NDVI values. | 250 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('UMT/NTSG/v2/MODIS/NPP');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UMT_NTSG_v2_MODIS_NPP
- 数据引用：Robinson, N.P., B.W. Allred, W.K. Smith, M.O. Jones, A. Moreno, T.A.
Erickson, D.E. Naugle, and S.W. Running. 2018. Terrestrial primary
production for the conterminous United States derived from Landsat 30 m and
MODIS 250 m. Remote Sensing in Ecology and Conservation.
[doi:10.1002/rse2.74](https://doi.org/10.1002/rse2.74)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
