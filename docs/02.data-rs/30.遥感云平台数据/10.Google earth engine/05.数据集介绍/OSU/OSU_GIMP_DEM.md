---
title: "Greenland DEM - Greenland Mapping Project (GIMP)"
date: 2026-11-03 12:00:00
permalink: /pages/3ac1f909/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "arctic"
  - "elevation-topography"
  - "gimp"
  - "greenland"
  - "nasa"
  - "polar"
---

# Greenland DEM - Greenland Mapping Project (GIMP)

## 数据集简介

This Digital Elevation Model (DEM) is constructed from a combination
of ASTER and SPOT-5 DEM's for the ice sheet periphery and margin
(i.e. below the equilbrium line elevation) south of
approximately 82.5&deg;N and AVHRR photoclinometry in the ice sheet
interior and far north (Scambos and Haran, 2002).

SPOT-5 DEM's were produced and distributed as part of the Spot5
stereoscopic survey of Polar Ice: Reference Images & Topographies
(SPIRIT) project (Korona et al., 2009). Ocean surfaces were masked
using the GIMP Land Classification mask and replaced with the
CNES CLS11 mean sea surface height (Schaeffer et al., 2012).

**Note**

*   All land elevation data is horizontally and vertically registered
to average ICESat elevations for the 2003-2009 time period, and
therefore the DEM has a nominal date of 2007, although care must
be taken when using the DEM in areas of rapid change, such as
major outlet glaciers south of 70&deg;0N.
*   The DEM has a resolution of 30 m, although the \"true\" resolution of the
DEM will vary from 40 m in areas of SPOT-5 coverage
(see Korona et al. 2009) to 500 m in areas of photoclinometry.
*   The ice-sheet-wide root-mean-squared validation error
relative to ICESat is +/-10 m, rangining from close to +/- 1 m
over most ice surfaces to +/- 30 m in areas of high relief.

[General documentation](https://doi.org/10.5067/NV34YUIXLP9W)

## 基本信息

- 数据集编号（Earth Engine ID）：`OSU/GIMP/DEM`
- 数据类型：影像（Image）
- 提供方：NASA NSIDC DAAC at CIRES、Google Earth Engine
- 时间范围：1999-06-30 至 2002-09-04
- 许可：proprietary
- 关键词：arctic, elevation-topography, gimp, greenland, nasa, polar

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | Elevation | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('OSU/GIMP/DEM');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OSU_GIMP_DEM
- 数据引用：Howat, I.M., A. Negrete, B.E. Smith, 2014, The Greenland Ice
Mapping Project (GIMP) land classification and surface elevation
datasets, The Cryosphere, 8, 1509-1518,
[doi:10.5194/tc-8-1509-2014](https://doi.org/10.5194/tc-8-1509-2014)
[article pdf](https://www.the-cryosphere.net/8/1509/2014/tc-8-1509-2014.pdf)

- DOI：10.5067/NV34YUIXLP9W

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
