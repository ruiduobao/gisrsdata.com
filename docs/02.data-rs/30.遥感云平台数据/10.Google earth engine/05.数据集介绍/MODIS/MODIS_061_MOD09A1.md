---
title: "MOD09A1.061 Terra Surface Reflectance 8-Day Global 500m"
date: 2026-11-03 12:00:00
permalink: /pages/33644e9c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "global"
  - "mod09a1"
  - "modis"
  - "nasa"
  - "satellite-imagery"
  - "sr"
  - "surface-reflectance"
  - "terra"
  - "usgs"
---

# MOD09A1.061 Terra Surface Reflectance 8-Day Global 500m

## 数据集简介

The MOD09A1 V6.1 product provides an estimate of the surface
spectral reflectance of Terra MODIS bands 1-7 at 500m resolution
and corrected for atmospheric conditions such as gasses, aerosols,
and Rayleigh scattering. Along with the seven reflectance bands
is a quality layer and four observation bands. For each pixel,
a value is selected from all the acquisitions within the 8-day
composite on the basis of high observation coverage, low view angle,
the absence of clouds or cloud shadow, and aerosol loading.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/306/MOD09_User_Guide_V6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MOD09A1)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MOD09A1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-18 至 2026-10-16
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：8-day, global, mod09a1, modis, nasa, satellite-imagery, sr, surface-reflectance, terra, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sur_refl_b01 | Surface reflectance for band 1 | 500 | 620-670nm |
| sur_refl_b02 | Surface reflectance for band 2 | 500 | 841-876nm |
| sur_refl_b03 | Surface reflectance for band 3 | 500 | 459-479nm |
| sur_refl_b04 | Surface reflectance for band 4 | 500 | 545-565nm |
| sur_refl_b05 | Surface reflectance for band 5 | 500 | 1230-1250nm |
| sur_refl_b06 | Surface reflectance for band 6 | 500 | 1628-1652nm |
| sur_refl_b07 | Surface reflectance for band 7 | 500 | 2105-2155nm |
| QA | Surface reflectance 500m band quality control flags | 500 |  |
| SolarZenith | MODIS Solar zenith angle | 500 |  |
| ViewZenith | MODIS view zenith angle | 500 |  |
| RelativeAzimuth | MODIS relative azimuth angle | 500 |  |
| StateQA | Surface reflectance 500m state flags | 500 |  |
| DayOfYear | Julian day of the year for the pixel | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MOD09A1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD09A1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD09A1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
