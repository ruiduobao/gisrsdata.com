---
title: "ASTER L1T Radiance"
date: 2026-11-03 12:00:00
permalink: /pages/b48e6fb4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aster"
  - "eos"
  - "imagery"
  - "nasa"
  - "nir"
  - "radiance"
  - "satellite-imagery"
  - "swir"
  - "terra"
  - "thermal"
  - "tir"
  - "toa"
---

# ASTER L1T Radiance

## 数据集简介

**Note:**
There is a gap in data collection between November 28, 2024 and January 16,
2025 due to technical issues with the ASTER instrument. See the USGS
[announcement](https://lpdaac.usgs.gov/news/aster-resumes-limited-operations/)
for more information.

The Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER)
is a multispectral imager that was launched on board NASA's Terra spacecraft
in December, 1999. ASTER can collect data in 14 spectral bands from the
visible to the thermal infrared. Each scene covers an area of 60 x 60 km.
These scenes, produced by the USGS, contain calibrated at-sensor radiance,
ortho-rectified and terrain corrected.

Not all 14 bands were collected in each scene. An asset property named
ORIGINAL_BANDS_PRESENT contains the list of bands that are present in each
scene.

To convert from Digital Numbers (DN) to radiance at the sensor, the unit
conversion coefficients are available in the metadata. See
[ASTER L1T Product Users' Guide](https://lpdaac.usgs.gov/documents/647/AST__L1T_User_Guide_V3.pdf)
and [ASTER L1T Product Specification](https://lpdaac.usgs.gov/documents/300/ASTER_L1T_Product_Specification.pdf)
for more information.

Documentation:

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/72/AST_L1T_ATBD.pdf)

* [User's Guide](https://lpdaac.usgs.gov/documents/647/AST__L1T_User_Guide_V3.pdf)

* [ASTER Level-1T Product Specification](https://lpdaac.usgs.gov/documents/300/ASTER_L1T_Product_Specification.pdf)

* [ASTER L1T Quick Reference Guide](https://lpdaac.usgs.gov/documents/174/AST_L1T_Quick_Reference_Guide.pdf)

## 基本信息

- 数据集编号（Earth Engine ID）：`ASTER/AST_L1T_003`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-03-04 至 2025-12-08
- 许可：proprietary
- 关键词：aster, eos, imagery, nasa, nir, radiance, satellite-imagery, swir, terra, thermal, tir, toa, usgs, vnir

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B01 | VNIR_Band1 (visible green/yellow) | 15 | 0.520-0.600&mu;m |
| B02 | VNIR_Band2 (visible red) | 15 | 0.630-0.690&mu;m |
| B3N | VNIR_Band3N (near infrared, nadir pointing) | 15 | 0.780-0.860&mu;m |
| B04 | SWIR_Band4 (short-wave infrared) | 30 | 1.600-1.700&mu;m |
| B05 | SWIR_Band5 (short-wave infrared) | 30 | 2.145-2.185&mu;m |
| B06 | SWIR_Band6 (short-wave infrared) | 30 | 2.185-2.225&mu;m |
| B07 | SWIR_Band7 (short-wave infrared) | 30 | 2.235-2.285&mu;m |
| B08 | SWIR_Band8 (short-wave infrared) | 30 | 2.295-2.365&mu;m |
| B09 | SWIR_Band9 (short-wave infrared) | 30 | 2.360-2.430&mu;m |
| B10 | TIR_Band10 (thermal infrared) | 90 | 8.125-8.475&mu;m |
| B11 | TIR_Band11 (thermal infrared) | 90 | 8.475-8.825&mu;m |
| B12 | TIR_Band12 (thermal infrared) | 90 | 8.925-9.275&mu;m |
| B13 | TIR_Band13 (thermal infrared) | 90 | 10.250-10.950&mu;m |
| B14 | TIR_Band14 (thermal infrared) | 90 | 10.950-11.650&mu;m |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('ASTER/AST_L1T_003');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ASTER_AST_L1T_003
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/ASTER/AST_L1T.003

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
