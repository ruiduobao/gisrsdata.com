---
title: "PALSAR-2 ScanSAR Level 2.2"
date: 2026-11-03 12:00:00
permalink: /pages/636ee51c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alos2"
  - "eroc"
  - "jaxa"
  - "palsar2"
  - "radar"
  - "sar"
  - "satellite-imagery"
---

# PALSAR-2 ScanSAR Level 2.2

## 数据集简介

The 25 m PALSAR-2 ScanSAR is normalized backscatter data
of PALSAR-2 broad area observation mode with observation width of 350 km.
The SAR imagery was ortho-rectificatied and slope corrected
using the ALOS World 3D - 30 m (AW3D30) Digital Surface Model.
Polarization data are stored as 16-bit digital numbers (DN).
The DN values can be converted to gamma naught values in decibel unit (dB)
using the following equation:

* &gamma;<sub>0</sub> = 10*log<sub>10</sub>(DN<sup>2</sup>) - 83.0 dB

Level 2.2 data are ortho-rectified and radiometrically terrain-corrected.

This dataset is compatible with the
[Committee on Earth Observation (CEOS)](https://ceos.org/)
[Analysis Ready Data for LAND (CARD4L)](https://ceos.org/ard/files/PFS/NRB/v5.5/CARD4L-PFS_NRB_v5.5.pdf) standard.

Note that this collection is heterogeneous and contains a mixture of
single-polarization (HH) and dual-polarization (HH+HV, and rarely VV+VH)
images. Users should filter the collection by the `Polarizations` property
before selecting polarization bands (e.g.,
`collection.filter(ee.Filter.listContains('Polarizations', 'HV'))`).

## 基本信息

- 数据集编号（Earth Engine ID）：`JAXA/ALOS/PALSAR-2/Level2_2/ScanSAR`
- 数据类型：影像集合（ImageCollection）
- 提供方：JAXA EORC、Google Earth Engine
- 时间范围：2014-08-04 至 2026-10-16
- 空间分辨率：25 米
- 许可：proprietary
- 关键词：alos2, eroc, jaxa, palsar2, radar, sar, satellite-imagery

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| HH | HH polarization Terrain-flattened Gamma-Nought backscatter coefficient.  | 25 |  |
| HV | HV polarization Terrain-flattened Gamma-Nought backscatter coefficient.  | 25 |  |
| VV | VV polarization Terrain-flattened Gamma-Nought backscatter coefficient.  | 25 |  |
| VH | VH polarization Terrain-flattened Gamma-Nought backscatter coefficient.  | 25 |  |
| LIN | Local incidence angle. The angle formed by the radar irradiation direction and the normal of the slope.  | 25 |  |
| MSK | Data quality bitmask. | 25 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JAXA/ALOS/PALSAR-2/Level2_2/ScanSAR');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_PALSAR-2_Level2_2_ScanSAR
- 数据引用：The data used for this paper have been provided by Earth Observation
Research Center (EORC) of Japan Aerospace Exploration Agency (JAXA).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
