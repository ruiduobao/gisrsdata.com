---
title: "MERIT DEM: Multi-Error-Removed Improved-Terrain DEM"
date: 2026-11-03 12:00:00
permalink: /pages/7e86fdfa/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "merit"
  - "topography"
---

# MERIT DEM: Multi-Error-Removed Improved-Terrain DEM

## 数据集简介

MERIT DEM a high accuracy global DEM at 3 arc second resolution (~90 m at
the equator) produced by eliminating major error components from existing DEMs
(NASA SRTM3 DEM, JAXA AW3D DEM, Viewfinder Panoramas DEM).

MERIT DEM separates absolute bias, stripe noise, speckle
noise and tree height bias using multiple satellite datasets and filtering techniques.
After the error removal, land areas mapped with 2 m or better vertical accuracy
were increased from 39% to 58%. Significant improvements were found in flat regions
where height errors larger than topography variability, and landscapes such as
river networks and hill-valley structures became clearly represented.

'MERIT DEM was developed by processing the following products as baseline data:

* [NASA SRTM3 DEM v2.1](https://dds.cr.usgs.gov/srtm/version2_1/SRTM3)
* [JAXA AW3D - 30 m DEM v1](https://www.eorc.jaxa.jp/ALOS/en/aw3d30/index.htm)
* [Viewfinder Panoramas DEM](https://www.viewfinderpanoramas.org/dem3.html)

In addition to the above baseline dems, these products were used as supplementary data:

* [NASA-NSIDC ICESat/GLAS GLA14 data](https://nsidc.org/data/gla14)
* [U-Maryland Landsat forest cover data](https://glad.earthengine.app/view/global-forest-change)
* [NASA Global Forest height data](https://www.nasa.gov/topics/earth/features/forest-height-map.html)
* [JAMSTEC/U-Tokyo G3WBM water body data](https://hydro.iis.u-tokyo.ac.jp/~yamadai/G3WBM/index.html)

## 基本信息

- 数据集编号（Earth Engine ID）：`MERIT/DEM/v1_0_3`
- 数据类型：影像（Image）
- 提供方：Dai Yamazaki (University of Tokyo)、Google Earth Engine
- 时间范围：1987-01-01 至 2017-01-01
- 许可：ODbL-1.0
- 关键词：dem, elevation, elevation-topography, merit, topography

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| dem | Elevation in meters, referenced to EGM96 geoid model. | 92.77 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('MERIT/DEM/v1_0_3');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MERIT_DEM_v1_0_3
- 数据引用：Yamazaki D., D. Ikeshima, R. Tawatari, T. Yamaguchi, F. O'Loughlin, J.C. Neal,
C.C. Sampson, S. Kanae & P.D. Bates. A high accuracy map of global
terrain elevations.  Geophysical Research Letters, vol.44, pp.5844-5853, 2017.

[doi:10.1002/2017GL072874](https://doi.org/10.1002/2017GL072874)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
