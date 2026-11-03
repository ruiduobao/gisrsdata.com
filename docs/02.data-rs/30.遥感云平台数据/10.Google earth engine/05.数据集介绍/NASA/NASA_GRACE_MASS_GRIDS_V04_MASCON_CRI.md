---
title: "GRACE Monthly Mass Grids Version 04 - Global Mascon (CRI Filtered)"
date: 2026-11-03 12:00:00
permalink: /pages/78028c87/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "grace"
  - "gravity"
  - "jpl"
  - "mascon"
  - "mass"
  - "nasa"
  - "surface-ground-water"
  - "tellus"
  - "water"
---

# GRACE Monthly Mass Grids Version 04 - Global Mascon (CRI Filtered)

## 数据集简介

This dataset contains gridded monthly global water storage/height anomalies
relative to a time-mean, derived from GRACE and GRACE-FO and processed at
JPL using the Mascon approach (RL06.3Mv04). These data are provided in a
single data file in netCDF format, and can be used for analysis for ocean,
ice, and hydrology phenomena. The water storage/height anomalies are given
in equivalent water thickness units (cm). The solution provided here is
derived from solving for monthly gravity field variations in terms of
geolocated spherical cap mass concentration functions, rather than global
spherical harmonic coefficients. Additionally, realistic geophysical
information is introduced during the solution inversion to intrinsically
remove correlated error. Thus, these Mascon grids do not need to be
de-correlated or smoothed, like traditional spherical harmonic gravity
solutions.

The complete Mascon solution consists of 4,551 relatively
independent estimates of surface mass change that have been derived using an
equal-area 3-degree grid of individual mascons. It should be noted that this
dataset does not correct for leakage errors across coastlines; it is
therefore recommended only for users who want to apply their own algorithm
to separate between land and ocean mass very near coastlines.

For more information, please visit [GRACE page](https://grace.jpl.nasa.gov/data/get-data/jpl_global_mascons/).
For a detailed description on the Mascon solution, including
the mathematical derivation, implementation of geophysical constraints, and
solution validation, please see [Watkins et al., 2015](https://doi.org/10.1002/2014JB011547).
This product is intended for expert use only; other users are encouraged to
use the [CRI-filtered Mascon dataset](https://podaac.jpl.nasa.gov/dataset/TELLUS_GRAC-GRFO_MASCON_CRI_GRID_RL06.3_V4).

This RL06.3Mv04 is an updated version of the previous [Tellus JPL Mascon
RL06.1Mv03](https://doi.org/10.5067/TEMSC-3MJ63).

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GRACE/MASS_GRIDS_V04/MASCON_CRI`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA Jet Propulsion Laboratory、Google Earth Engine
- 时间范围：2002-03-31 至 2024-09-30
- 空间分辨率：55660 米
- 许可：proprietary
- 关键词：grace, gravity, jpl, mascon, mass, nasa, surface-ground-water, tellus, water

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| lwe_thickness | Equivalent liquid water thickness in centimeters. | 55660 |  |
| uncertainty | 1-sigma uncertainty for each 3-degree mascon estimate. The provided estimates of uncertainty are regarded to be conservative. See the provider's [Error & Uncertainty Estimates section](https://grace.jpl.nasa.gov/data/get-data/jpl_global_mascons/)  | 55660 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/GRACE/MASS_GRIDS_V04/MASCON_CRI');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_V04_MASCON_CRI
- 数据引用：D. N. Wiese, D.-N. Yuan, C. Boening, F. W. Landerer, M. M. Watkins. 2023.
JPL GRACE and GRACE-FO Mascon Ocean, Ice, and Hydrology Equivalent Water
Height CRI Filtered RL06.3Mv04. Ver. RL06.3Mv04. PO.DAAC, CA, USA. Dataset
accessed [YYYY-MM-DD] at
[https://doi.org/10.5067/TEMSC-3JC634](https://doi.org/10.5067/TEMSC-3JC634).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
