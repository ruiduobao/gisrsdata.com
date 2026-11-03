---
title: "MODIS 2-year Nadir BRDF-Adjusted Reflectance (NBAR) Mosaic"
date: 2026-11-03 12:00:00
permalink: /pages/57595a2a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "annual"
  - "bu"
  - "mcd43a4"
  - "modis-derived"
  - "nbar"
  - "reflectance"
  - "satellite-imagery"
  - "whrc"
---

# MODIS 2-year Nadir BRDF-Adjusted Reflectance (NBAR) Mosaic

## 数据集简介

The mosaics are created by using the MODIS 8-Day 500 meter
BRDF-Albedo Quality product.  Data Quality flags are used to select
the best observations from the MODIS 8-day 500 meter Nadir
BRDF-Adjusted Reflectance imagery product.  This specific mosaic picks
observations from the three highest quality categories over
a 2-year period of MODIS data.

The MODIS NBAR annual mosaics have been used by government
agencies and NGOs in tropical countries as input to generate
aboveground biomass/carbon maps. The Woods Hole Research Center has
been using the dataset for country capacity building and technical
training workshops in tropical countries.

## 基本信息

- 数据集编号（Earth Engine ID）：`WHBU/NBAR_2YEAR`
- 数据类型：影像集合（ImageCollection）
- 提供方：Baccini, A. (Woods Hole Research Center), Sulla-Menashe, D. (Boston University)、Google Earth Engine
- 时间范围：2001-01-01 至 2017-01-01
- 空间分辨率：463 米
- 许可：proprietary
- 关键词：albedo, annual, bu, mcd43a4, modis-derived, nbar, reflectance, satellite-imagery, whrc

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Nadir_Reflectance_Band1 | Best NBAR at local solar noon for band 1 | 463 | 620-670nm |
| Nadir_Reflectance_Band2 | Best NBAR at local solar noon for band 2 | 463 | 841-876nm |
| Nadir_Reflectance_Band3 | Best NBAR at local solar noon for band 3 | 463 | 459-479nm |
| Nadir_Reflectance_Band4 | Best NBAR at local solar noon for band 4 | 463 | 545-565nm |
| Nadir_Reflectance_Band5 | Best NBAR at local solar noon for band 5 | 463 | 1230-1250nm |
| Nadir_Reflectance_Band6 | Best NBAR at local solar noon for band 6 | 463 | 1628-1652nm |
| Nadir_Reflectance_Band7 | Best NBAR at local solar noon for band 7 | 463 | 2105-2155nm |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('WHBU/NBAR_2YEAR');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WHBU_NBAR_2YEAR
- 数据引用：Baccini, A., Laporte, N., Goetz, S. J., Sun, M., & Dong, H. (2008). A first map of tropical Africa's above-ground biomass derived from satellite imagery. Environmental Research Letters, 3(4), 045011. [doi:10.1088/1748-9326/3/4/045011](https://doi.org/10.1088/1748-9326/3/4/045011)

- DOI：10.1088/1748-9326/3/4/045011

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
