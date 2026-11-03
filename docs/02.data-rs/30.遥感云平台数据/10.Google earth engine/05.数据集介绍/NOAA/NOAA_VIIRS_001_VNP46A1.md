---
title: "VNP46A1: VIIRS Daily Gridded Day Night Band 500m Linear Lat Lon Grid Night"
date: 2026-11-03 12:00:00
permalink: /pages/89a1d68e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "dnb"
  - "nasa"
  - "noaa"
  - "population"
  - "viirs"
---

# VNP46A1: VIIRS Daily Gridded Day Night Band 500m Linear Lat Lon Grid Night

## 数据集简介

The Suomi National Polar-orbiting Partnership (SNPP) Visible Infrared
Imaging Radiometer Suite (VIIRS) supports a Day-Night Band (DNB) sensor
that provides global daily measurements of nocturnal visible and
near-infrared (NIR) light that are suitable for Earth system science and
applications. The VIIRS DNB's ultra-sensitivity in lowlight conditions
enables us to generate a new set of science-quality nighttime products that
manifest substantial improvements in sensor resolution and calibration when
compared to the previous era of Defense Meteorological Satellite
Program/Operational Linescan System's (DMSP/OLS) nighttime lights image
products.

VNP46A1 is a daily, top-of-atmosphere, at-sensor nighttime radiance product
called VIIRS/NPP Daily Gridded Day Night Band 15 arc-second Linear Lat Lon
Grid Night. The product contains 26 Science Data Sets (SDS) that include
sensor radiance, zenith and azimuth angles (at-sensor, solar, and lunar),
cloud-mask flags, time, shortwave IR radiance, brightness temperatures,
VIIRS quality flags, moon phase angle, and moon illumination fraction. It
also provides Quality Flag (QF) information specific to the cloud-mask,
VIIRS moderate-resolution bands M10, M11, M12, M13, M15, M16, and DNB.

Documentation:

* [User's Guide](https://ladsweb.modaps.eosdis.nasa.gov/api/v2/content/archives/Document%20Archive/Science%20Data%20Product%20Documentation/VIIRS_Black_Marble_UG_v1.3_Sep_2022.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://ladsweb.modaps.eosdis.nasa.gov/api/v2/content/archives/Document%20Archive/Science%20Data%20Product%20Documentation/Product%20Generation%20Algorithms/VIIRS_Black_Marble_ATBD_v1.1_July_2020.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/missions-and-measurements/products/VNP46A1/)

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/001/VNP46A1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LAADS DAAC、Google Earth Engine
- 时间范围：2012-01-19 至 2025-01-02
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：daily, dnb, nasa, noaa, population, viirs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BrightnessTemperature_M12 | Brightness temperature of band M12 | 500 |  |
| BrightnessTemperature_M13 | Brightness temperature of band M13 | 500 |  |
| BrightnessTemperature_M15 | Brightness temperature of band M15 | 500 |  |
| BrightnessTemperature_M16 | Brightness temperature of band M16 | 500 |  |
| DNB_At_Sensor_Radiance_500m | At-sensor DNB radiance | 500 |  |
| Glint_Angle | Moon glint angle | 500 |  |
| Granule | Number of selected Granule | 500 |  |
| Lunar_Zenith | Lunar zenith angle | 500 |  |
| Lunar_Azimuth | Lunar azimuth angle | 500 |  |
| Moon_Illumination_Fraction | Moon illumination fraction | 500 |  |
| Moon_Phase_Angle | Moon phase angle | 500 |  |
| QF_Cloud_Mask | Quality flag for cloud mask | 500 |  |
| QF_DNB | DNB quality flag | 500 |  |
| QF_VIIRS_M10 | Quality flag of band M10 | 500 |  |
| QF_VIIRS_M11 | Quality flag of band M11 | 500 |  |
| QF_VIIRS_M12 | Quality flag of band M12 | 500 |  |
| QF_VIIRS_M13 | Quality flag of band M13 | 500 |  |
| QF_VIIRS_M15 | Quality flag of band M15 | 500 |  |
| QF_VIIRS_M16 | Quality flag of band M16 | 500 |  |
| Radiance_M10 | Radiance in band M10 | 500 |  |
| Radiance_M11 | Radiance in band M11 | 500 |  |
| Sensor_Azimuth | Sensor azimuth angle | 500 |  |
| Sensor_Zenith | Sensor zenith angle | 500 |  |
| Solar_Azimuth | Solar azimuth angle | 500 |  |
| Solar_Zenith | Solar zenith angle | 500 |  |
| UTC_Time | UTC time | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP46A1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP46A1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
- DOI：10.5067/VIIRS/VNP46A1.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
