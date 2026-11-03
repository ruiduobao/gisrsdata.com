---
title: "VNP43IA2: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid"
date: 2026-11-03 12:00:00
permalink: /pages/81521072/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "land"
  - "nasa"
  - "noaa"
  - "satellite-imagery"
  - "surface"
  - "viirs"
---

# VNP43IA2: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid

## 数据集简介

The Suomi National Polar-Orbiting Partnership (Suomi NPP) NASA Visible
Infrared Imaging Radiometer Suite (VIIRS) Bidirectional Reflectance
Distribution Function (BRDF) and Albedo Quality (VNP43IA2) Version 1 product
provides BRDF and Albedo quality at 500m resolution. The VNP43IA2
product is produced daily using 16 days of VIIRS data and is weighted
temporally to the ninth day, which is reflected in the file name.
The VNP43IA2 product provides information regarding band quality and days
of valid observation within a 16-day period for the VIIRS imagery bands.
The VNP43 data products are designed to promote the continuity of
NASA&apos;s Moderate Resolution Imaging Spectroradiometer (MODIS)
BRDF/Albedo data product suite.

Documentation:

* [User's Guide](https://www.umb.edu/spectralmass/viirs-user-guides-c1-and-c2/vnp43ia2-and-vnp43ma2-brdfalbedo-quality-product/)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/194/VNP43_ATBD_V1.pdf)

* [General Documentation](https://lpdaac.usgs.gov/products/vnp43ia2v001/)

* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/001/VNP43IA2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2012-01-17 至 2024-06-09
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：land, nasa, noaa, satellite-imagery, surface, viirs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BRDF_Albedo_Band_Quality_I1 | BRDF inversion information I1 | 500 |  |
| BRDF_Albedo_Band_Quality_I2 | BRDF inversion information I2 | 500 |  |
| BRDF_Albedo_Band_Quality_I3 | BRDF inversion information I3 | 500 |  |
| BRDF_Albedo_LandWaterType | Land/Water type | 500 |  |
| BRDF_Albedo_LocalSolarNoon | Solar zenith angle at local solar noon | 500 |  |
| BRDF_Albedo_Platform | Platform name | 500 |  |
| BRDF_Albedo_Uncertainty | Weight of Determination (WoD) of WSA | 500 |  |
| BRDF_Albedo_ValidObs_I1 | Days of valid observation within 16-day period for band  I1 | 500 |  |
| BRDF_Albedo_ValidObs_I2 | Days of valid observation within 16-day period for band  I2 | 500 |  |
| BRDF_Albedo_ValidObs_I3 | Days of valid observation within 16-day period for band  I3 | 500 |  |
| Snow_BRDF_Albedo | Snow flag | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP43IA2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP43IA2
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP43IA2.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
