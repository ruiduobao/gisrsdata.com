---
title: "GRACE Monthly Mass Grids - Global Mascons [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/5bc9dcc7/
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

# GRACE Monthly Mass Grids - Global Mascons [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

GRACE Tellus Monthly Mass Grids provides monthly
gravitational anomalies relative to a 2004-2010 time-mean baseline.
The data contained in this dataset are units of \"Equivalent Water Thickness\"
which represent the deviations of mass in terms of vertical extent
of water in centimeters. See the provider's [Monthly Mass
Grids Overview](https://grace.jpl.nasa.gov/data/monthly-mass-grids/)
for more details.

The GRACE Tellus (GRCTellus) Global Mascon dataset
is based on Level-1 GRACE observations and processed
at NASA Jet Propulsion Laboratory (JPL).

This dataset uses a-priori constraints in space and time to
estimate global, monthly gravity fields in terms of equal-area
3&deg;x3&deg; spherical cap mass concentration (mascon) functions to minimize the
effect of measurement errors. No additional empirical destriping
filter has been applied to the data. This results in better S/N
ratios of the mascon fields compared to the conventional
spherical-harmonic solutions.

**Note**

* Mascons which lie on coastlines contain mixed land and ocean signals.
  A version of this dataset with the Coastline Resolution Improvement
  (CRI) filter applied to separate the land and ocean portions of mass
  within each land/ocean mascon in a post-processing step. This
  dataset is available at
  [NASA/GRACE/MASS_GRIDS/MASCON_CRI](https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_MASCON_CRI).

* The data are represented on a 1/2 degree lon-lat grid, but they
  represent the 3x3 degree equal-area caps, which is the current
  native resolution of JPL-RL05M.

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GRACE/MASS_GRIDS/MASCON`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA Jet Propulsion Laboratory、Google Earth Engine
- 时间范围：2002-03-31 至 2017-05-22
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
var dataset = ee.ImageCollection('NASA/GRACE/MASS_GRIDS/MASCON');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_MASCON
- 数据引用：D.N. Wiese. 2015. GRACE monthly global water mass grids NETCDF
RELEASE 5.0. Ver. 5.0. PO.DAAC, CA, USA.. Dataset accessed [YYYY-MM-DD] at
[https://doi.org/10.5067/TEMSC-OCL05](https://doi.org/10.5067/TEMSC-OCL05).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
