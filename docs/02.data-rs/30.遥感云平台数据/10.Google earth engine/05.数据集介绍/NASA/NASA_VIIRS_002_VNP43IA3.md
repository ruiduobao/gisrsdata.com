---
title: "VNP43IA3: BRDF/Albedo Daily L3 Global 500m SIN Grid"
date: 2026-11-03 12:00:00
permalink: /pages/217dd9b2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "brdf"
  - "land"
  - "nasa"
  - "noaa"
  - "satellite-imagery"
  - "surface"
  - "viirs"
---

# VNP43IA3: BRDF/Albedo Daily L3 Global 500m SIN Grid

## 数据集简介

The NASA/NOAA Suomi National Polar-orbiting Partnership (Suomi NPP) Visible
Infrared Imaging Radiometer Suite (VIIRS) Bidirectional Reflectance
Distribution Function (BRDF) and Albedo (BRDF/Albedo) Version 2 product
provides albedo estimates at 500 meter resolution. The VNP43IA3 product is
produced daily using 16 days of VIIRS data and is weighted temporally to the
ninth day, which is reflected in the file name. It provides both directional
hemispherical reflectance (black-sky albedo) at local solar noon and
bihemispherical reflectance (white-sky albedo) for the three VIIRS imagery
bands (I1, I2, and I3). The VNP43 data products are designed to promote the
continuity of NASA's Moderate Resolution Imaging Spectroradiometer (MODIS)
BRDF/Albedo data product suite.

The VNP43 algorithm uses the RossThick/Li-Sparse-Reciprocal (RTLSR)
semi-empirical kernel-driven BRDF model, with the three kernel weights from
VNP43IA1 to reconstruct surface anisotropic effects, correcting the
directional reflectance to a common view geometry (VNP43IA4), while
also computing integrated black-sky albedo (BSA) at local solar noon and
white-sky albedo (WSA) (VNP43IA3). Researchers can use the BRDF model
parameters with a simple polynomial, to obtain black-sky albedo at any solar
illumination angle. Likewise, both the BSA and WSA Science Dataset (SDS)
layers can be used with a simple polynomial, to manually estimate
instantaneous actual albedo (blue-sky albedo). Additional details regarding
the methodology are available in the Algorithm Theoretical Basis Document
(ATBD).

Documentation:

* [User's Guide](https://www.umb.edu/spectralmass/viirs-user-guides-c1-and-c2/vnp43ia3-and-vnp43ma3-albedo-products/)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/194/VNP43_ATBD_V1.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/VIIRS/1/VNP43IA3)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/VIIRS/002/VNP43IA3`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2012-01-17 至 2026-10-21
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：albedo, brdf, land, nasa, noaa, satellite-imagery, surface, viirs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BRDF_Albedo_Band_Mandatory_Quality_I1 | BRDF/Albedo mandatory quality for band I1 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_I2 | BRDF/Albedo mandatory quality for band I2 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_I3 | BRDF/Albedo mandatory quality for band I3 | 500 |  |
| Albedo_BSA_I1 | Black-sky albedo for band I1 | 500 |  |
| Albedo_BSA_I2 | Black-sky albedo for band I2 | 500 |  |
| Albedo_BSA_I3 | Black-sky albedo for band I3 | 500 |  |
| Albedo_WSA_I1 | White-sky albedo for band I1 | 500 |  |
| Albedo_WSA_I2 | White-sky albedo for band I2 | 500 |  |
| Albedo_WSA_I3 | White-sky albedo for band I3 | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP43IA3');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP43IA3
- 数据引用：Schaaf, C., Z. Wang, A. Erb, I. Paynter. VIIRS/NPP BRDF/Albedo Albedo Daily L3
Global 500m SIN Grid V002. 2024, distributed by NASA EOSDIS Land Processes
Distributed Active Archive Center,
[10.5067/VIIRS/VNP43IA3.002](https://doi.org/10.5067/VIIRS/VNP43IA3.002).

- DOI：10.5067/VIIRS/VNP43IA3.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
