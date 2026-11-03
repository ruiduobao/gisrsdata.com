---
title: "MODOCGA.006 Terra Ocean Reflectance Daily Global 1km"
date: 2026-11-03 12:00:00
permalink: /pages/c8a03259/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "global"
  - "modis"
  - "modocga"
  - "nasa"
  - "oceans"
  - "reflectance"
  - "satellite-imagery"
  - "sr"
  - "terra"
  - "usgs"
---

# MODOCGA.006 Terra Ocean Reflectance Daily Global 1km

## 数据集简介

The MODOCGA V6 ocean reflectance product consists of
1 kilometer reflectance data from Terra MODIS bands 8-16. The product
is referred to as ocean reflectance, because bands 8-16 are used
primarily to produce ocean products, but this is not an ocean product
as the tiles produced are land tiles.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/306/MOD09_User_Guide_V6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MODOCGA)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MODOCGA`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-24 至 2023-02-17
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：daily, global, modis, modocga, nasa, oceans, reflectance, satellite-imagery, sr, terra, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| num_observations | Number of observations per pixel | 1000 |  |
| sur_refl_b08 | MODIS band 8 surface reflectance | 1000 | 405-420nm |
| sur_refl_b09 | MODIS band 9 surface reflectance | 1000 | 438-448nm |
| sur_refl_b10 | MODIS band 10 surface reflectance | 1000 | 483-493nm |
| sur_refl_b11 | MODIS band 11 surface reflectance | 1000 | 526-536nm |
| sur_refl_b12 | MODIS band 12 surface reflectance | 1000 | 546-556nm |
| sur_refl_b13 | MODIS band 13 surface reflectance | 1000 | 662-672nm |
| sur_refl_b14 | MODIS band 14 surface reflectance | 1000 | 673-683nm |
| sur_refl_b15 | MODIS band 15 surface reflectance | 1000 | 743-753nm |
| sur_refl_b16 | MODIS band 16 surface reflectance | 1000 | 862-877nm |
| QC_b8_15_1km | Band quality for MODIS bands 8-15 | 1000 |  |
| QC_b16_1km | Band quality for MODIS band 16 | 1000 |  |
| orbit_pnt | Pointer to the orbit of each observation | 1000 |  |
| granule_pnt | Pointer to the granule of each observation | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/006/MODOCGA');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MODOCGA
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MODOCGA.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
