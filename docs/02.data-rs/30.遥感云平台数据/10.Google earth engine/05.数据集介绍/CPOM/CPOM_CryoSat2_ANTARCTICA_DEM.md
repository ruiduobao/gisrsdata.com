---
title: "CryoSat-2 Antarctica 1km DEM"
date: 2026-11-03 12:00:00
permalink: /pages/a0390601/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "antarctica"
  - "cpom"
  - "cryosat-2"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "polar"
---

# CryoSat-2 Antarctica 1km DEM

## 数据集简介

This dataset is a digital elevation model (DEM) of the
Antarctic ice sheet and ice shelves based on
observations recorded by the CryoSat-2 satellite
radar altimeter between July 2010 and July 2016.

The DEM is formed from spatio-temporal fits to elevation
measurements accumulated within 1, 2, and 5 km grid cells,
and is posted at the modal resolution of 1 km. The median
and root mean square difference between the DEM and 2.3*10<sup>7</sup>;
airborne laser altimeter measurements acquired during
NASA Operation IceBridge campaigns are -0.30 and 13.50 m,
respectively.

The DEM uncertainty rises in regions of high slope,
especially where elevation measurements were acquired in
low-resolution mode; taking this into account, we estimate
the average accuracy to be 9.5 m.

## 基本信息

- 数据集编号（Earth Engine ID）：`CPOM/CryoSat2/ANTARCTICA_DEM`
- 数据类型：影像（Image）
- 提供方：CPOM、Google Earth Engine
- 时间范围：2010-07-01 至 2016-07-01
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：antarctica, cpom, cryosat-2, dem, elevation, elevation-topography, polar

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | Antarctic ice sheet and ice shelf elevation. | 1000 |  |
| data_composition | Data processing method of elevation per grid cell. | 1000 |  |
| slope | Slope derived from elevation gradient. | 1000 |  |
| z_smoothed | Smoothed version of elevation model using a median filter. | 1000 |  |
| z_uncertainty | Certainty of elevation model derived from RMS of elevation residuals in observed grid cells and the kriging variance error in interpolated grid cells.  | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('CPOM/CryoSat2/ANTARCTICA_DEM');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CPOM_CryoSat2_ANTARCTICA_DEM
- 数据引用：Slater, T., Shepherd, A., McMillan, M., Muir, A., Gilbert, L.,
Hogg, A. E., Konrad, H. and Parrinello, T.: A new Digital Elevation
Model of Antarctica derived from CryoSat-2 altimetry, The Cryosphere,
[doi:10.5194/tc-2017-223](https://doi.org/10.5194/tc-2017-223), 2018

- DOI：10.5194/tc-2017-223

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
