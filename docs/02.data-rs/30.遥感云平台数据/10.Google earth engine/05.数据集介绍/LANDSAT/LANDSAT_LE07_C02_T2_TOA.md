---
title: "USGS Landsat 7 Collection 2 Tier 2 TOA Reflectance"
date: 2026-11-03 12:00:00
permalink: /pages/2a35ed9f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "c2"
  - "global"
  - "landsat"
  - "satellite-imagery"
  - "toa"
  - "usgs"
---

# USGS Landsat 7 Collection 2 Tier 2 TOA Reflectance

## 数据集简介

Landsat 7 Collection 2 Tier 2
  calibrated top-of-atmosphere (TOA) reflectance.
  Calibration coefficients are extracted from the image metadata.
  See [Chander et al. (2009)](https://www.sciencedirect.com/science/article/pii/S0034425709000169)
  for details on the TOA computation.

Note that [Landsat 7's orbit has been drifting to an earlier acquisition time since
2017](https://www.sciencedirect.com/science/article/pii/S2666017221000134?via%3Dihub).

## 基本信息

- 数据集编号（Earth Engine ID）：`LANDSAT/LE07/C02/T2_TOA`
- 数据类型：影像集合（ImageCollection）
- 提供方：USGS/Google、Google Earth Engine
- 时间范围：2003-12-01 至 2024-01-19
- 许可：PDDL-1.0
- 关键词：c2, global, landsat, satellite-imagery, toa, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | Blue | 30 | 0.45 - 0.52 &mu;m |
| B2 | Green | 30 | 0.52 - 0.60 &mu;m |
| B3 | Red | 30 | 0.63 - 0.69 &mu;m |
| B4 | Near infrared | 30 | 0.77 - 0.90 &mu;m |
| B5 | Shortwave infrared 1 | 30 | 1.55 - 1.75 &mu;m |
| B6_VCID_1 | Low-gain Thermal Infrared 1. This band has expanded dynamic range and lower radiometric resolution (sensitivity), with less saturation at high Digital Number (DN) values. Resampled from 60m to 30m.  | 60 | 10.40 - 12.50 &mu;m |
| B6_VCID_2 | High-gain Thermal Infrared 1. This band has higher radiometric resolution (sensitivity), although it has a more restricted dynamic range. Resampled from 60m to 30m.  | 60 | 10.40 - 12.50 &mu;m |
| B7 | Shortwave infrared 2 | 30 | 2.08 - 2.35 &mu;m |
| B8 | Panchromatic | 15 | 0.52 - 0.90 &mu;m |
| QA_PIXEL | Landsat Collection 2 TM/ETM QA Bitmask  | 30 |  |
| QA_RADSAT | Radiometric saturation QA | 30 |  |
| SAA | Solar Azimuth Angle | 30 |  |
| SZA | Solar Zenith Angle | 30 |  |
| VAA | View Azimuth Angle | 30 |  |
| VZA | View Zenith Angle | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LANDSAT/LE07/C02/T2_TOA');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LE07_C02_T2_TOA

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
