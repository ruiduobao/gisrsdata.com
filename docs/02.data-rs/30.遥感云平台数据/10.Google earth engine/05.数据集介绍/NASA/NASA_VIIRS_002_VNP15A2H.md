---
title: "VNP15A2H: LAI/FPAR 8-Day L4 Global 500m SIN Grid"
date: 2026-11-03 12:00:00
permalink: /pages/50cd4868/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "land"
  - "nasa"
  - "noaa"
  - "surface"
  - "vegetation-indices"
  - "viirs"
---

# VNP15A2H: LAI/FPAR 8-Day L4 Global 500m SIN Grid

## 数据集简介

The Visible Infrared Imaging Radiometer Suite (VIIRS) Leaf Area Index (LAI)
and Fraction of Photosynthetically Active Radiation (FPAR) Version 1 data
product provides information about the vegetative canopy layer at 500 meter
resolution (VNP15A2H). The VIIRS sensor is located onboard the NOAA/NASA
joint Suomi National Polar-Orbiting Partnership (Suomi NPP) satellite. LAI
is an index that quantifies the one-sided leaf area of a canopy, while FPAR
is the fraction of incoming solar energy absorbed through photosynthesis at
400 to 700 nanometers. This product is intentionally designed after the
Terra and Aqua Moderate Resolution Imaging Spectroradiometer (MODIS)
LAI/FPAR operational algorithm to promote the continuity of the Earth
Observation System (EOS) mission.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/126/VNP15_User_Guide.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/125/VNP15_ATBD.pdf)

* [General Documentation](https://lpdaac.usgs.gov/products/vnp15a2hv002/)

* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/VIIRS/002/VNP15A2H`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2012-01-17 至 2026-10-16
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：land, nasa, noaa, surface, vegetation-indices, viirs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Fpar | Fraction of Photosynthetically Active Radiation.  | 500 |  |
| FparExtra_QC | Pass-through Quality Control (QC) for FPAR | 500 |  |
| FparLai_QC | Quality for LAI and FPAR | 500 |  |
| FparStdDev | Standard deviation of FPAR | 500 |  |
| Lai | Leaf Area Index | 500 |  |
| LaiStdDev | Standard deviation for LAI | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP15A2H');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP15A2H
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP15A2H.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
