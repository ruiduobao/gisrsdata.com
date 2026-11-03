---
title: "GRACE Monthly Mass Grids Version 03 - Global Mascon (CRI Filtered) [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/08fb92a4/
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

# GRACE Monthly Mass Grids Version 03 - Global Mascon (CRI Filtered) [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

This dataset contains gridded monthly global water storage/height anomalies
relative to a time-mean, derived from GRACE and GRACE-FO and processed at
JPL using the Mascon approach (RL06.1Mv03). This version of the data employs
a Coastal Resolution Improvement (CRI) filter that reduces signal leakage
errors across coastlines. These data are provided in a single data file in
netCDF format, and can be used for analysis for ocean, ice, and hydrology
phenomena. The water storage/height anomalies are given in equivalent water
thickness units (cm). The solution provided here is derived from solving for
monthly gravity field variations in terms of geolocated spherical cap mass
concentration functions, rather than global spherical harmonic coefficients.
Additionally, realistic geophysical information is introduced during the
solution inversion to intrinsically remove correlated error. Thus, these
Mascon grids do not need to be destriped or smoothed, like traditional
spherical harmonic gravity solutions. The complete Mascon solution consists
of 4,551 relatively independent estimates of surface mass change that have
been derived using an equal-area 3-degree grid of individual mascons.
A subset of these individual mascons span coastlines, and contain mixed land
and ocean mass change signals. In a post-processing step, the CRI filter is
applied to those mixed land/ocean Mascons to separate land and ocean mass.
The land mask used to perform this separation is provided in the same
directory as this dataset. Since the individual mascons act as an inherent
smoother on the gravity field, a set of optional gain factors
(for continental hydrology applications) that can be applied to the solution
to study mass change signals at sub-mascon resolution is also provided
within the same data directory as the Mascon data. This RL06.1Mv03 is an
updated version of the previous [Tellus JPL Mascon RL06Mv02](https://doi.org/10.5067/TEMSC-3JC62).
RL06.1Mv03 differs from RL06Mv02 only in the Level-1B accelerometer
transplant data that is used for the GF2 (GRACE-FO 2)satellite;
RL06.1Mv03 uses the ACH data product. For more information,
please visit [GRACE page](https://grace.jpl.nasa.gov/data/get-data/jpl_global_mascons/).
For a detailed description on the Mascon solution, including the
mathematical derivation, implementation of geophysical constraints, and
solution validation, please see [Watkins et al., 2015](https://doi.org/10.1002/2014JB011547).
For a detailed description of the CRI filter implementation,
please see [Wiese et al., 2016](https://doi.org/10.1002/2016WR019344).

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GRACE/MASS_GRIDS_V03/MASCON_CRI`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA Jet Propulsion Laboratory、Google Earth Engine
- 时间范围：2002-03-31 至 2024-03-31
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
var dataset = ee.ImageCollection('NASA/GRACE/MASS_GRIDS_V03/MASCON_CRI');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_V03_MASCON_CRI
- 数据引用：D.N. Wiese. 2015. GRACE monthly global water mass grids NETCDF
RELEASE 6.1. Ver. 3.0. PO.DAAC, CA, USA.. Dataset accessed [YYYY-MM-DD] at
[https://doi.org/10.5067/TEMSC-3JC63](https://doi.org/10.5067/TEMSC-3JC63).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
