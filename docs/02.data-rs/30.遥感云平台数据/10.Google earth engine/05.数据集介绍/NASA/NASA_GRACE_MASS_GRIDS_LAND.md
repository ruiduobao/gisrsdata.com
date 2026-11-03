---
title: "GRACE Monthly Mass Grids - Land [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/89809ce5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "crs"
  - "gfz"
  - "grace"
  - "gravity"
  - "jpl"
  - "land"
  - "mass"
  - "nasa"
  - "surface-ground-water"
  - "tellus"
  - "water"
---

# GRACE Monthly Mass Grids - Land [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

GRACE Tellus Monthly Mass Grids provides monthly
gravitational anomalies relative to a 2004-2010 time-mean baseline.
The data contained in this dataset are units of \"Equivalent Water Thickness\"
which represent the deviations of mass in terms of vertical extent
of water in centimeters. See the provider's [Monthly Mass
Grids Overview](https://grace.jpl.nasa.gov/data/monthly-mass-grids/)
for more details.

The GRACE Tellus (GRCTellus) Monthly Mass Grids dataset is produced
by three centers: CSR (U. Texas / Center for Space Research),
GFZ (GeoForschungsZentrum Potsdam), and JPL
(NASA Jet Propulsion Laboratory). Each center is a part
of the GRACE Ground System and generates Level-2 data
(spherical harmonic fields) used in this dataset.
The output includes spherical harmonic coefficients
of the gravity field and of the dealiasing fields used to compute them.
Since each center independently produces the coefficients, the results
may be slightly different. It is recommended for most users to
use the mean of all three datasets. See the provider's [choosing a
solution](https://grace.jpl.nasa.gov/data/choosing-a-solution/) page
for more details.

**Note**

* Due to the sampling and post-processing of GRACE observations,
  surface mass variations at small spatial scales tend to be attenuated.
  Therefore, users should multiply the GRCTellus Land data by the
  scaling grid available at
  [NASA/GRACE/MASS_GRIDS/LAND_AUX_2014](https://code.earthengine.google.com/?asset=NASA/GRACE/MASS_GRIDS/LAND_AUX_2014).

* The GRCTellus Land grids processed from the Spherical Harmonic
  Level-2 data are not suited to accurately quantify ice mass
  changes over Greenland or Antarctica, or glaciers and ice caps.
  For those areas it is recommended to use JPL's mascon
  solution available as the following image collection:
  [NASA/GRACE/MASS_GRIDS/MASCON](https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_MASCON)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GRACE/MASS_GRIDS/LAND`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA Jet Propulsion Laboratory、Google Earth Engine
- 时间范围：2002-04-01 至 2017-01-07
- 空间分辨率：111320 米
- 许可：proprietary
- 关键词：crs, gfz, grace, gravity, jpl, land, mass, nasa, surface-ground-water, tellus, water

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| lwe_thickness_csr | Equivalent liquid water thickness in centimeters calculated by CSR. | 111320 |  |
| lwe_thickness_gfz | Equivalent liquid water thickness in centimeters calculated by GFZ. | 111320 |  |
| lwe_thickness_jpl | Equivalent liquid water thickness in centimeters calculated by JPL. | 111320 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/GRACE/MASS_GRIDS/LAND');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_LAND
- 数据引用：S.C. Swenson. 2012. GRACE monthly land water mass grids NETCDF
RELEASE 5.0. Ver. 5.0. PO.DAAC, CA, USA. Dataset accessed
[YYYY-MM-DD] at
[https://doi.org/10.5067/TELND-NC005](https://doi.org/10.5067/TELND-NC005).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
