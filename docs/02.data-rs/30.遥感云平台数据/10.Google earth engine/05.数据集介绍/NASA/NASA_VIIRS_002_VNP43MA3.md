---
title: "VNP43MA3: BRDF/Albedo Daily L3 Global 1km SIN Grid"
date: 2026-11-03 12:00:00
permalink: /pages/86f9040c/
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

# VNP43MA3: BRDF/Albedo Daily L3 Global 1km SIN Grid

## 数据集简介

The NASA/NOAA Suomi National Polar-orbiting Partnership (Suomi NPP) Visible
Infrared Imaging Radiometer Suite (VIIRS) Bidirectional Reflectance
Distribution Function (BRDF) and Albedo (BRDF/Albedo) Version 2 product
provides albedo estimates at 1000 meter (1 km) resolution. The VNP43MA3 product
is produced daily using 16 days of VIIRS data and is weighted temporally to the
ninth day. It provides both directional
hemispherical reflectance (black-sky albedo) at local solar noon and
bihemispherical reflectance (white-sky albedo) for the nine VIIRS moderate
resolution bands (M1-M5, M7-M8, M10-M11) and three broadbands (vis, nir, and shortwave).
The VNP43 data products are designed to promote the continuity of NASA's
Moderate Resolution Imaging Spectroradiometer (MODIS) BRDF/Albedo data product suite.

The VNP43 algorithm uses the RossThick/Li-Sparse-Reciprocal (RTLSR)
semi-empirical kernel-driven BRDF model to reconstruct surface anisotropic effects,
computing integrated black-sky albedo (BSA) at local solar noon and
white-sky albedo (WSA) (VNP43MA3). Researchers can use the BRDF model
parameters with a simple polynomial, to obtain black-sky albedo at any solar
illumination angle. Likewise, both the BSA and WSA Science Dataset (SDS)
layers can be used with a simple polynomial, to manually estimate
instantaneous actual albedo (blue-sky albedo). Additional details regarding
the methodology are available in the Algorithm Theoretical Basis Document
(ATBD).

Documentation:

* [User's Guide](https://www.umb.edu/spectralmass/viirs-user-guides-c1-and-c2/vnp43ia3-and-vnp43ma3-albedo-products/)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/194/VNP43_ATBD_V1.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/VIIRS/1/VNP43MA3)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/VIIRS/002/VNP43MA3`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2012-01-17 至 2026-10-21
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：albedo, brdf, land, nasa, noaa, satellite-imagery, surface, viirs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BRDF_Albedo_Band_Mandatory_Quality_M1 | BRDF/Albedo mandatory quality for band M1:  * 0: full BRDF inversions * 1: magnitude BRDF inversions  | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_M2 | BRDF/Albedo mandatory quality for band M2:  * 0: full BRDF inversions * 1: magnitude BRDF inversions  | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_M3 | BRDF/Albedo mandatory quality for band M3:  * 0: full BRDF inversions * 1: magnitude BRDF inversions  | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_M4 | BRDF/Albedo mandatory quality for band M4:  * 0: full BRDF inversions * 1: magnitude BRDF inversions  | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_M5 | BRDF/Albedo mandatory quality for band M5:  * 0: full BRDF inversions * 1: magnitude BRDF inversions  | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_M7 | BRDF/Albedo mandatory quality for band M7:  * 0: full BRDF inversions * 1: magnitude BRDF inversions  | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_M8 | BRDF/Albedo mandatory quality for band M8:  * 0: full BRDF inversions * 1: magnitude BRDF inversions  | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_M10 | BRDF/Albedo mandatory quality for band M10:  * 0: full BRDF inversions * 1: magnitude BRDF inversions  | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_M11 | BRDF/Albedo mandatory quality for band M11:  * 0: full BRDF inversions * 1: magnitude BRDF inversions  | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_vis | BRDF/Albedo mandatory quality for band vis:  * 0: full BRDF inversions * 1: magnitude BRDF inversions  | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_nir | BRDF/Albedo mandatory quality for band nir:  * 0: full BRDF inversions * 1: magnitude BRDF inversions  | 1000 |  |
| BRDF_Albedo_Band_Mandatory_Quality_shortwave | BRDF/Albedo mandatory quality for band shortwave:  * 0: full BRDF inversions * 1: magnitude BRDF inversions  | 1000 |  |
| Albedo_BSA_M1 | Black-sky albedo at local solar noon for band M1 | 1000 |  |
| Albedo_BSA_M2 | Black-sky albedo at local solar noon for band M2 | 1000 |  |
| Albedo_BSA_M3 | Black-sky albedo at local solar noon for band M3 | 1000 |  |
| Albedo_BSA_M4 | Black-sky albedo at local solar noon for band M4 | 1000 |  |
| Albedo_BSA_M5 | Black-sky albedo at local solar noon for band M5 | 1000 |  |
| Albedo_BSA_M7 | Black-sky albedo at local solar noon for band M7 | 1000 |  |
| Albedo_BSA_M8 | Black-sky albedo at local solar noon for band M8 | 1000 |  |
| Albedo_BSA_M10 | Black-sky albedo at local solar noon for band M10 | 1000 |  |
| Albedo_BSA_M11 | Black-sky albedo at local solar noon for band M11 | 1000 |  |
| Albedo_BSA_vis | Black-sky albedo at local solar noon for band vis | 1000 |  |
| Albedo_BSA_nir | Black-sky albedo at local solar noon for band nir | 1000 |  |
| Albedo_BSA_shortwave | Black-sky albedo at local solar noon for band shortwave | 1000 |  |
| Albedo_WSA_M1 | White-sky albedo at local solar noon for band M1 | 1000 |  |
| Albedo_WSA_M2 | White-sky albedo at local solar noon for band M2 | 1000 |  |
| Albedo_WSA_M3 | White-sky albedo at local solar noon for band M3 | 1000 |  |
| Albedo_WSA_M4 | White-sky albedo at local solar noon for band M4 | 1000 |  |
| Albedo_WSA_M5 | White-sky albedo at local solar noon for band M5 | 1000 |  |
| Albedo_WSA_M7 | White-sky albedo at local solar noon for band M7 | 1000 |  |
| Albedo_WSA_M8 | White-sky albedo at local solar noon for band M8 | 1000 |  |
| Albedo_WSA_M10 | White-sky albedo at local solar noon for band M10 | 1000 |  |
| Albedo_WSA_M11 | White-sky albedo at local solar noon for band M11 | 1000 |  |
| Albedo_WSA_vis | White-sky albedo at local solar noon for band vis | 1000 |  |
| Albedo_WSA_nir | White-sky albedo at local solar noon for band nir | 1000 |  |
| Albedo_WSA_shortwave | White-sky albedo at local solar noon for band shortwave | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP43MA3');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP43MA3
- 数据引用：Schaaf, C., Z. Wang, A. Erb, I. Paynter. VIIRS/NPP BRDF/Albedo Albedo Daily L3
Global 1km SIN Grid V002. 2024, distributed by NASA EOSDIS Land Processes
Distributed Active Archive Center,
[10.5067/VIIRS/VNP43MA3.002](https://doi.org/10.5067/VIIRS/VNP43MA3.002).

- DOI：10.5067/VIIRS/VNP43MA3.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
