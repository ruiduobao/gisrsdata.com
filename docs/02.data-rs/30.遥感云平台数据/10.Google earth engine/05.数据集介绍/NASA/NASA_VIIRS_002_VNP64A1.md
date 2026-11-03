---
title: "VNP64A1.002: Burned Area Monthly L4 Global 500m SIN Grid"
date: 2026-11-03 12:00:00
permalink: /pages/49ac0524/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "burn"
  - "change-detection"
  - "fire"
  - "land"
  - "nasa"
  - "surface"
  - "viirs"
---

# VNP64A1.002: Burned Area Monthly L4 Global 500m SIN Grid

## 数据集简介

The daily Suomi National Polar-Orbiting Partnership (Suomi NPP) NASA Visible
Infrared Imaging Radiometer Suite (VIIRS) Burned Area (VNP64A1) Version 2
data product is a monthly, global gridded 500m product containing per-pixel
burned area and quality information. The VNP64 burned area mapping approach
employs 750m VIIRS imagery coupled with 750m VIIRS active fire
observations.

VIIRS bands that are both sensitive and insensitive to biomass burning are
used to detect changes caused by fire and to differentiate them from other
types of change.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/1330/VNP64A1_User_Guide_V1.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/572/VNP64A1_ATBD_V1.pdf)

* [General Documentation](https://doi.org/10.5067/VIIRS/VNP64A1.002)

* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/VIIRS/002/VNP64A1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2012-01-19 至 2026-08-01
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：burn, change-detection, fire, land, nasa, surface, viirs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Burn_Date | Ordinal day of burn (1-366) for each 500-m grid cell.  | 500 |  |
| Burn_Date_Uncertainty | Estimated uncertainty in date of burn, in days. Unburned, unmapped, and water grid cells are masked out.  | 500 |  |
| QA | Quality Assurance Indicators | 500 |  |
| First_Day | First day of the year of reliable change detection | 500 |  |
| Last_Day | Last day of the year of reliable change detection | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP64A1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP64A1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP64A1.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
