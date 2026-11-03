---
title: "OPERA Radiometric Terrain-Corrected SAR Backscatter from Sentinel-1 V1.0"
date: 2026-11-03 12:00:00
permalink: /pages/8c150ee4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "backscatter"
  - "jpl"
  - "nasa"
  - "opera"
  - "polarization"
  - "radar"
  - "sar"
  - "satellite-imagery"
  - "sentinel1-derived"
---

# OPERA Radiometric Terrain-Corrected SAR Backscatter from Sentinel-1 V1.0

## 数据集简介

This product consists of radar backscatter normalized with respect to the
topography. It maps signals related to the physical properties of ground
scattering objects, such as surface roughness and soil moisture and/or
vegetation. The OPERA RTC-S1 product is derived from Copernicus Sentinel-1
Interferometric Wide (IW) Single Look Complex (SLC) data with a near global
scope and temporal sampling coincident with the availability of SLC data.

Each OPERA RTC-S1 product corresponds to a single S1 burst projected onto
a pre-defined UTM/Polar stereographic map projection system map grid with
a 30-meter spacing. The Copernicus global 30 m (GLO-30) Digital Elevation
Model (DEM) is the reference DEM used to correct for the impacts of
topography and to geocode the product. The OPERA RTC-S1 product is
normalized to the backscatter coefficient gamma0 obtained from the
original radar brightness beta0 through radiometric terrain correction.

Due to the S1 mission’s narrow orbital tube, radar-geometry layers such as
incidence angle, local incidence angle, number of looks, and RTC Area
Normalization Factor (ANF) vary slightly over time for each position on the
ground, and therefore are considered static. These static layers are
provided separately from the OPERA RTC-S1 product, as they are produced
only once or a limited number of times, to account for changes in the DEM,
in the S1 orbit, or in the static-layers generation algorithm. The static
layers are available in the associated
[OPERA Radiometric Terrain Corrected SAR Backscatter from Sentinel-1 Static Layers dataset](OPERA_RTC_L2_V1_S1_STATIC).

## 基本信息

- 数据集编号（Earth Engine ID）：`OPERA/RTC/L2_V1/S1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA JPL、Google Earth Engine
- 时间范围：2016-04-14 至 2026-11-02
- 空间分辨率：30 米
- 许可：CC0-1.0
- 关键词：backscatter, jpl, nasa, opera, polarization, radar, sar, satellite-imagery, sentinel1-derived

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| VV | VV polarization radar backscatter normalized to gamma0. | 30 |  |
| VH | VH polarization radar backscatter normalized to gamma0. | 30 |  |
| HV | HV polarization radar backscatter normalized to gamma0. | 30 |  |
| HH | HH polarization radar backscatter normalized to gamma0. | 30 |  |
| mask | Mask layer containing valid/invalid, layover, and shadow classification computed using the RTC-S1 burst orbit, provided over the same geographic grid as the associated geocoded imagery.  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('OPERA/RTC/L2_V1/S1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OPERA_RTC_L2_V1_S1
- 数据引用：NASA/JPL/OPERA. (2023). OPERA Radiometric Terrain Corrected SAR
Backscatter from Sentinel-1 validated product (Version 1) [Data set].
NASA Alaska Satellite Facility Distributed Active Archive Center.
[doi:10.5067/SNWG/OPERA_L2_RTC-S1_V1](https://doi.org/10.5067/SNWG/OPERA_L2_RTC-S1_V1)

- DOI：10.5067/SNWG/OPERA_L2_RTC-S1_V1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
