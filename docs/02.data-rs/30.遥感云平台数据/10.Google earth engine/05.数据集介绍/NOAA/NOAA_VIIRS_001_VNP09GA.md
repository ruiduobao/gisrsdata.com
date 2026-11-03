---
title: "VNP09GA: VIIRS Surface Reflectance Daily 500m and 1km [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/940b557d/
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
  - "vnp09ga"
---

# VNP09GA: VIIRS Surface Reflectance Daily 500m and 1km [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The Visible Infrared Imaging Radiometer Suite (VIIRS) daily surface
reflectance (VNP09GA) product provides an estimate of land
surface reflectance from the Suomi National Polar-Orbiting Partnership
(S-NPP) VIIRS sensor. Data are provided for three imagery bands
(I1, I2, I3) at nominal 500 meter resolution (~463 meter) and nine
moderate-resolution bands (M1, M2, M3, M4, M5, M7, M8, M10, M11) at nominal
1 kilometer (~926 meter) resolution. The 500 meter and 1 kilometer datasets
are derived through resampling the native 375 meter and 750 meter VIIRS
resolutions, respectively, in the L2 input product. These bands are
corrected for atmospheric conditions to provide an estimate
of the surface spectral reflectance as it would be measured at ground level.

The data is temporally aggregated over each of the 16 possible passes per
day. When multiple observations are present for each day, only the first
of the highest-quality observations is included.

For additional information, visit the VIIRS [Land Product Quality
Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP) and see
the [User Guide](https://lpdaac.usgs.gov/documents/124/VNP09_User_Guide_V1.6.pdf).

Documentation:

* [User's Guide] (https://lpdaac.usgs.gov/documents/124/VNP09_User_Guide_V1.6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)] (https://lpdaac.usgs.gov/documents/122/VNP09_ATBD.pdf)

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/VIIRS/001/VNP09GA`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2012-01-19 至 2024-06-16
- 许可：proprietary
- 关键词：daily, nasa, noaa, npp, reflectance, satellite-imagery, sr, viirs, vnp09ga

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| M1 | 1km surface reflectance band M1 | 1000 | 0.402 - 0.422&micro;m |
| M2 | 1km surface reflectance Band M2 | 1000 | 0.436 - 0.454&micro;m |
| M3 | 1km surface reflectance band M3 | 1000 | 0.478 - 0.488&micro;m |
| M4 | 1km surface reflectance band M4 | 1000 | 0.545 - 0.565&micro;m |
| M5 | 1km surface reflectance band M5 | 1000 | 0.662 - 0.682&micro;m |
| M7 | 1km surface reflectance band M7 | 1000 | 0.846 - 0.885&micro;m |
| M8 | 1km surface reflectance band M8 | 1000 | 1.230 - 1.250&micro;m |
| M10 | 1km surface reflectance band M10 | 1000 | 1.580 - 1.640&micro;m |
| M11 | 1km surface reflectance band M11 | 1000 | 2.230 - 2.280&micro;m |
| I1 | 500m surface reflectance band I1 | 500 | 0.600 - 0.680&micro;m |
| I2 | 500m surface reflectance band I2 | 500 | 0.850 - 0.880&micro;m |
| I3 | 500m surface reflectance band I3 | 500 | 1.580 - 1.640&micro;m |
| SensorAzimuth | Sensor azimuth angle | 1000 |  |
| SensorZenith | Sensor zenith angle | 1000 |  |
| SolarAzimuth | Solar azimuth angle | 1000 |  |
| SolarZenith | Solar zenith angle | 1000 |  |
| iobs_res | Observation number | 500 |  |
| num_observations_1km | Number of observations 1km | 1000 |  |
| num_observations_500m | Number of observations 500m | 500 |  |
| obscov_1km | Observations coverage 1km | 1000 |  |
| obscov_500m | Observations coverage 500km | 500 |  |
| orbit_pnt | Orbit pointer | 1000 |  |
| QF1 | Quality flags 1 | 1000 |  |
| QF2 | Quality flags 2 | 1000 |  |
| QF3 | Quality flags 3 | 1000 |  |
| QF4 | Quality flags 4 | 1000 |  |
| QF5 | Quality flags 5 | 1000 |  |
| QF6 | Quality flags 6 | 1000 |  |
| QF7 | Quality flags 7 | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP09GA');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP09GA
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
- DOI：10.5067/VIIRS/VNP09GA.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
