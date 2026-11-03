---
title: "GOES-18 FDCC Series ABI Level 2 Fire/Hot Spot Characterization CONUS"
date: 2026-11-03 12:00:00
permalink: /pages/6ba905f6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "abi"
  - "fdc"
  - "fire"
  - "goes"
  - "goes-18"
  - "goes-t"
  - "goes-west"
  - "hotspot"
  - "nesdis"
  - "noaa"
  - "ospo"
  - "wildfire"
---

# GOES-18 FDCC Series ABI Level 2 Fire/Hot Spot Characterization CONUS

## 数据集简介

[GOES](https://www.goes.noaa.gov) satellites are geostationary weather satellites run by NOAA.

The Fire (HSC) product contains four images: one in the form
of a fire mask and the other three with pixel values identifying fire temperature, fire area,
and fire radiative power.

The ABI L2+ FHS metadata mask assigns a flag to every earth-navigated pixel
that indicates its disposition with respect to the FHS algorithm. Operational users who have
the lowest tolerance for false alarms should focus on the "processed" and
"saturated" categories (mask codes 10, 11, 30, and 31), but within these categories there
can still be false alarms.

[README](https://www.ncei.noaa.gov/products/satellite/goes-r)

NOAA provides the following scripts for suggested categories,
color maps, and visualizations:

 - [GOES-16-17_FireDetection.js](https://github.com/google/earthengine-community/blob/master/datasets/scripts/GOES-16-17_FireDetection.js)
 - [GOES-16-17_FireReclassification.js](https://github.com/google/earthengine-community/blob/master/datasets/scripts/GOES-16-17_FireReclassification.js)

NOAA's Office of Satellite and Product Operations has a
[General Satellite Messages](https://www.ospo.noaa.gov/Operations/messages.html)
channel with status updates.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/GOES/18/FDCC`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA、Google Earth Engine
- 时间范围：2022-10-13 至 2026-11-03
- 空间分辨率：2000 米
- 许可：proprietary
- 关键词：abi, fdc, fire, goes, goes-18, goes-t, goes-west, hotspot, nesdis, noaa, ospo, wildfire

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Area | Fire area | 2000 |  |
| Temp | Fire temperature | 2000 |  |
| Mask | Fire mask categories.  Pixel values in the fire mask image identify a fire category and diagnostic information associated with algorithm execution. The six fire categories include: Good quality or temporally filtered good quality fire pixel; Saturated fire pixel or temporally filtered saturated fire pixel; Cloud contaminated or temporally filtered cloud contaminated fire pixel; High probability or temporally filtered high probability fire pixel; Medium probability or temporally filtered high probability fire pixel; Low probability or temporally filtered high probability fire. Temporally filtered fire pixels are those resulting from fire pixels that are in close proximity in both space and time.  | 2000 |  |
| Power | Fire radiative power | 2000 |  |
| DQF | Data quality flags | 2000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/GOES/18/FDCC');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_GOES_18_FDCC
- 数据引用：Early characterization of the active fire detection products derived from the next generation
NPOESS/VIIRS and GOES-R/ABI instruments.  Schroeder, W., Csiszar, I., et al, (2010), Early
characterization of the active fire detection products derived from the next generation
NPOESS/VIIRS and GOES-R/ABI instruments, paper presented at 2010 IEEE International Geoscience
and Remote Sensing Symposium (IGARSS), Honolulu, HI.
[doi:10.1109/IGARSS.2010.5650863](https://doi.org/10.1109/IGARSS.2010.5650863)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
