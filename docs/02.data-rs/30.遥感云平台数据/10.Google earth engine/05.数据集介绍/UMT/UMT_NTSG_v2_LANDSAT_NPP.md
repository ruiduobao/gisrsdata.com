---
title: "Landsat Net Primary Production CONUS"
date: 2026-11-03 12:00:00
permalink: /pages/4d909514/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "conus"
  - "gridmet-derived"
  - "landsat"
  - "mod17"
  - "nlcd-derived"
  - "npp"
  - "photosynthesis"
  - "plant-productivity"
  - "production"
  - "productivity"
  - "yearly"
---

# Landsat Net Primary Production CONUS

## 数据集简介

The Landsat Net Primary Production (NPP) CONUS dataset estimates NPP using
Landsat Surface Reflectance for CONUS. NPP is the amount of
carbon captured by plants in an ecosystem, after accounting for losses due to
respiration. NPP is calculated using the MOD17 algorithm (see [MOD17 User
Guide](https://www.ntsg.umt.edu/files/modis/MOD17UsersGuide2015_v3.pdf)) with
Landsat Surface Reflectance, gridMET, and the National Land Cover Database.

## 基本信息

- 数据集编号（Earth Engine ID）：`UMT/NTSG/v2/LANDSAT/NPP`
- 数据类型：影像集合（ImageCollection）
- 提供方：University of Montana Numerical Terradynamic Simulation Group (NTSG)、Google Earth Engine
- 时间范围：1986-01-01 至 2020-01-01
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：conus, gridmet-derived, landsat, mod17, nlcd-derived, npp, photosynthesis, plant-productivity, production, productivity, yearly

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| annualNPP | Annual net primary production | 30 |  |
| QC | Percentage of gap-filled Landsat 16-day composites. Gaps are caused by missing data, high cloud contamination, and/or erroneous pixels. A value of 255 indicates incomplete data due to failure of the gap-filling method.  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('UMT/NTSG/v2/LANDSAT/NPP');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UMT_NTSG_v2_LANDSAT_NPP
- 数据引用：Robinson, N.P., B.W. Allred, W.K. Smith, M.O. Jones, A. Moreno, T.A.
Erickson, D.E. Naugle, and S.W. Running. 2018. Terrestrial primary
production for the conterminous United States derived from Landsat 30 m and
MODIS 250 m. Remote Sensing in Ecology and Conservation.
[doi:10.1002/rse2.74](https://doi.org/10.1002/rse2.74)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
