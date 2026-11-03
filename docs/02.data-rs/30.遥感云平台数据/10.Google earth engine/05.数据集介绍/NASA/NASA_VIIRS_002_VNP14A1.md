---
title: "VNP14A1.002: Thermal Anomalies/Fire Daily L3 Global 1km SIN Grid"
date: 2026-11-03 12:00:00
permalink: /pages/ef413f33/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "fire"
  - "land"
  - "nasa"
  - "noaa"
  - "surface"
  - "viirs"
---

# VNP14A1.002: Thermal Anomalies/Fire Daily L3 Global 1km SIN Grid

## 数据集简介

The daily Suomi National Polar-Orbiting Partnership NASA Visible Infrared
Imaging Radiometer Suite (VIIRS) Thermal Anomalies/Fire (VNP14A1) Version 1
data product provides daily information about active fires and other thermal
anomalies. The VNP14A1 data product is a global, 1km gridded composite of
fire pixels detected from VIIRS 750m bands over a daily (24-hour) period.
The VNP14 data products are designed after the Moderate Resolution Imaging
Spectroradiometer (MODIS) Thermal Anomalies/Fire product suite.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/427/VNP14_User_Guide_V1.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/427/VNP14_User_Guide_V1.pdf)

* [General Documentation](https://lpdaac.usgs.gov/products/vnp14a1v002/)

* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/VIIRS/002/VNP14A1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2012-01-19 至 2026-10-30
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：fire, land, nasa, noaa, surface, viirs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| FireMask | Confidence of fire.  | 1000 |  |
| MaxFRP | Maximum Fire Radiative Power | 1000 |  |
| QA | Global Land Surface Phenology Quality Control | 1000 |  |
| sample | Sample number within a swath | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP14A1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP14A1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP14A1.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
