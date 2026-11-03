---
title: "GRACE Monthly Mass Grids Release 06 Version 04 - Land"
date: 2026-11-03 12:00:00
permalink: /pages/d281cddf/
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

# GRACE Monthly Mass Grids Release 06 Version 04 - Land

## 数据集简介

The monthly land mass grids contain water mass anomalies given as equivalent
water thickness derived from GRACE & GRACE-FO time-variable gravity
observations during the specified timespan, and relative to the specified
time-mean reference period. The equivalent water thickness represents the
total terrestrial water storage anomalies from soil moisture, snow, surface
water (incl. rivers, lakes, reservoirs etc.), as well as groundwater and
aquifers. A glacial isostatic adjustment (GIA) correction has been applied,
and standard corrections for geocenter (degree-1), C20 (degree-20) and
C30 (degree-30) are incorporated. Post-processing filters have been applied
to reduce correlated errors. Version 04 (v04) of the terrestrial water
storage data uses updated and consistent C20 and Geocenter corrections
(i.e., Technical Notes TN-14 and TN-13), as well as an ellipsoidal
correction to account for the non-spherical shape of the Earth when mapping
gravity anomalies to surface mass change.

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

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GRACE/MASS_GRIDS_V04/LAND`
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
| uncertainty_csr | Error estimation by CSR. | 111320 |  |
| uncertainty_gfz | Error estimation by GFZ. | 111320 |  |
| uncertainty_jpl | Error estimation by JPL. | 111320 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/GRACE/MASS_GRIDS_V04/LAND');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_V04_LAND
- 数据引用：Felix Landerer. 2021. TELLUS_GRAC_L3_JPL_RL06_LND_v04. Ver. RL06 v04.
PO.DAAC, CA, USA. Dataset accessed [YYYY-MM-DD] at
[https://doi.org/10.5067/TELND-3AJ64](https://doi.org/10.5067/TELND-3AJ64).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
