---
title: "VNP09H1: VIIRS Surface Reflectance 8-Day L3 Global 500m"
date: 2026-11-03 12:00:00
permalink: /pages/862913cc/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "nasa"
  - "noaa"
  - "npp"
  - "reflectance"
  - "satellite-imagery"
  - "sr"
  - "viirs"
---

# VNP09H1: VIIRS Surface Reflectance 8-Day L3 Global 500m

## 数据集简介

The 8-day Visible Infrared Imaging Radiometer Suite (VIIRS) Surface
Reflectance (VNP09H1) Version 1 composite product provides an estimate of
land surface reflectance from the Suomi National Polar-orbiting Partnership
(Suomi NPP) VIIRS sensor for three imagery bands (I1, I2, I3) at nominal
500m resolution (~463m). The 500m dataset is derived through resampling the
native 375m VIIRS resolution in the L2 input product. The data are corrected
for atmospheric conditions such as the effects of molecular gases, including
ozone and water vapor, and for the effects of atmospheric aerosols. Each
pixel represents the best possible Level 2G observation during an 8-day
period, which is selected on the basis of high observation coverage, low
sensor angle, the absence of clouds or cloud shadow, and aerosol loading.
The three reflectance bands, this product includes a state quality assurance
(QA) layer and a reflectance band quality layer.

Documentation:

* [User's Guide]( https://lpdaac.usgs.gov/documents/1657/VNP09_User_Guide_V2.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/122/VNP09_ATBD.pdf)

* [General Documentation](https://lpdaac.usgs.gov/products/vnp09h1v002/)

* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/VIIRS/002/VNP09H1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2012-01-19 至 2026-10-16
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：daily, nasa, noaa, npp, reflectance, satellite-imagery, sr, viirs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| SurfReflect_I1 | 500 m Surface Reflectance Band I1 | 500 |  |
| SurfReflect_I2 | 500 m Surface Reflectance Band I2 | 500 |  |
| SurfReflect_I3 | 500 m Surface Reflectance Band I3 | 500 |  |
| SurfReflect_QC_500m | Surface Reflectance Band Quality Control (QC) | 500 |  |
| SurfReflect_State_500m | Surface Reflectance State Quality Assurance (QA) | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP09H1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP09H1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
- DOI：10.5067/VIIRS/VNP09H1.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
