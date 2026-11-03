---
title: "2000 Greenland Mosaic - Greenland Ice Mapping Project (GIMP)"
date: 2026-11-03 12:00:00
permalink: /pages/c8cdeaa2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "arctic"
  - "gimp"
  - "greenland"
  - "imagery"
  - "nasa"
  - "polar"
  - "radarsat-1"
  - "satellite-imagery"
---

# 2000 Greenland Mosaic - Greenland Ice Mapping Project (GIMP)

## 数据集简介

This dataset provides a complete 15 m resolution image mosaic
of the Greenland ice sheet derived from Landsat 7 ETM+ and
RADARSAT-1 SAR imagery from the years 1999 to 2002. The methods
include a combination of image cloud masking, pan sharpening,
image sampling and resizing, and image coregistration.
Please see Howat, 2014 for more information regarding
processing methods.

**Note**

*  Users of GIMP DEM or GIMP 2000 Image Mosaic images may find
it helpful to mask out areas outside of the Greenland coastline
using the corresponding 15 m ocean mask image
Greenland Ice Mapping Project (GIMP) Land Ice and Ocean
Classification Mask,
*  The SAR data are distributed at 20 m resolution. Data were
up-sampled through bilinear interpolation to 15 m to match
the resolution of Landsat band-8.

[General documentation](https://doi.org/10.5067/4RNTRRE4JCYD)

## 基本信息

- 数据集编号（Earth Engine ID）：`OSU/GIMP/2000_IMAGERY_MOSAIC`
- 数据类型：影像（Image）
- 提供方：NASA NSIDC DAAC at CIRES、Google Earth Engine
- 时间范围：1999-06-30 至 2002-09-04
- 许可：proprietary
- 关键词：arctic, gimp, greenland, imagery, nasa, polar, radarsat-1, satellite-imagery

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | Landsat 7 ETM+ blue | 15 | 0.45 - 0.52 &mu;m |
| B2 | Landsat 7 ETM+ green | 15 | 0.52 - 0.60 &mu;m |
| B3 | Landsat 7 ETM+ red | 15 | 0.63 - 0.69 &mu;m |
| B4 | Landsat 7 ETM+ near infrared | 15 | 0.77 - 0.90 &mu;m |
| B5 | Landsat 7 ETM+ shortwave infrared 1 | 30 | 1.55 - 1.75 &mu;m |
| B6_low_gain | Landsat 7 ETM+ low-gain thermal Infrared 1. This band has expanded dynamic range and lower radiometric resolution (sensitivity), with less saturation at high Digital Number (DN) values. Resampled from 60m to 30m.  | 30 | 10.40 - 12.50 &mu;m |
| B6_high_gain | Landsat 7 ETM+ high-gain thermal Infrared 1. This band has higher radiometric resolution (sensitivity), although it has a more restricted dynamic range. Resampled from 60m to 30m.  | 30 | 10.40 - 12.50 &mu;m |
| B7 | Landsat 7 ETM+ shortwave infrared 2 | 30 | 2.08 - 2.35 &mu;m |
| B8 | Landsat 7 ETM+ panchromatic | 15 | 0.52 - 0.90 &mu;m |
| B8_radarsat | RADARSAT-1 synthetic aperture radar amplitude imagery | 15 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('OSU/GIMP/2000_IMAGERY_MOSAIC');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OSU_GIMP_2000_IMAGERY_MOSAIC
- 数据引用：Howat, I.M., A. Negrete, B.E. Smith, 2014, The Greenland Ice
Mapping Project (GIMP) land classification and surface elevation
datasets, The Cryosphere, 8, 1509-1518,
[doi:10.5194/tc-8-1509-2014](https://doi.org/10.5194/tc-8-1509-2014)
[article pdf](https://www.the-cryosphere.net/8/1509/2014/tc-8-1509-2014.pdf)

- DOI：10.5067/4RNTRRE4JCYD

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
