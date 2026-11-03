---
title: "VNP21A1N.001: Night Land Surface Temperature and Emissivity Daily 1km [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/2edb8761/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "land"
  - "nasa"
  - "night"
  - "noaa"
  - "surface"
  - "temperature"
  - "viirs"
  - "weather-and-climate"
---

# VNP21A1N.001: Night Land Surface Temperature and Emissivity Daily 1km [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The NASA Suomi National Polar-Orbiting Partnership (Suomi NPP) Visible
Infrared Imaging Radiometer Suite (VIIRS) Land Surface Temperature and
Emissivity (LST&E) Night Version 1 product (VNP21A1N) is compiled daily
from nighttime Level 2 Gridded (L2G) intermediate products.

The L2G process maps the daily VNP21 swath granules onto a sinusoidal MODIS
grid and stores all observations overlapping a gridded cell for a given
night. The VNP21A1 algorithm sorts through all these observations for each
cell and estimates the final LST value as an average from all cloud-free
observations that have good LST accuracies. Only observations having
observation coverage more than a certain threshold (15%) are considered for
this averaging.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/429/VNP21_User_Guide_V1.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1332/VNP21_ATBD_V1.pdf)

* [General Documentation](https://lpdaac.usgs.gov/products/vnp21a1nv001/)

* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/001/VNP21A1N`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2012-01-19 至 2024-05-01
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：daily, land, nasa, night, noaa, surface, temperature, viirs, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LST_1KM | Daily 1 km Land Surface Temperature.  | 1000 |  |
| QC | Daily Quality control for LST and emissivity | 1000 |  |
| Emis_14 | Daily M14 emissivity | 1000 |  |
| Emis_15 | Daily M15 emissivity | 1000 |  |
| Emis_16 | Daily M16 emissivity | 1000 |  |
| View_Angle | View zenith angle of LST | 1000 |  |
| View_Time | Time of LST observation | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP21A1N');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP21A1N
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP21A1N.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
