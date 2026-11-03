---
title: "GRACE Monthly Mass Grids - Ocean EOFR"
date: 2026-11-03 12:00:00
permalink: /pages/25e1bee4/
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
  - "mass"
  - "nasa"
  - "oceans"
  - "tellus"
  - "water"
---

# GRACE Monthly Mass Grids - Ocean EOFR

## 数据集简介

GRACE Tellus Monthly Mass Grids provides monthly
gravitational anomalies relative to a 2004-2010 time-mean baseline.
The data contained in this dataset are units of \"Equivalent Water Thickness\"
which represent the deviations of mass in terms of vertical extent
of water in centimeters. See the provider's [Monthly Mass
Grids Overview](https://grace.jpl.nasa.gov/data/monthly-mass-grids/)
for more details.

This dataset is a filtered version of the GRACE Tellus (GRCTellus)
Ocean dataset. The 'EOFR' bottom pressure (OBP) grids are obtained by
projecting the data from the regular GRC Ocean grids product
onto the Empirical Orthogonal Functions (EOFs) of the
Ocean Model for Circulation and Tides (OMCT). This effectively
filters out signals in the GRACE data that are inconsistent
with the physics and OBP variations in the OMCT ocean model.

The EOFR filtered reconstructed OBP fields agree
better with radar altimetric sea surface height,
reduce leakage around ice sheets and glaciers, and reduce
noise in the mid latitudes where OBP variability is lower.
[(Chambers and Willis, 2010)](https://doi.org/10.1175/2010JTECHO738.1)

**Note**

* The GRCTellus Ocean datasets are optimized to examine regional
  ocean bottom pressure, but NOT intended to be spatially
  averaged to determine global mean ocean mass.

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GRACE/MASS_GRIDS/OCEAN_EOFR`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA Jet Propulsion Laboratory、Google Earth Engine
- 时间范围：2002-12-31 至 2016-12-10
- 空间分辨率：111320 米
- 许可：proprietary
- 关键词：crs, gfz, grace, gravity, jpl, mass, nasa, oceans, tellus, water

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| lwe_thickness_csr | Equivalent liquid water thickness in centimeters calculated by CSR. | 111320 |  |
| lwe_thickness_gfz | Equivalent liquid water thickness in centimeters calculated by GFZ. | 111320 |  |
| lwe_thickness_jpl | Equivalent liquid water thickness in centimeters calculated by JPL. | 111320 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/GRACE/MASS_GRIDS/OCEAN_EOFR');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_OCEAN_EOFR
- 数据引用：D.P. Chambers. 2012. GRACE MONTHLY OCEAN MASS GRIDS NETCDF
RELEASE 5.0. Ver. 5.0. PO.DAAC, CA, USA. Dataset accessed
[YYYY-MM-DD] at [doi:10.5067/TEOCN-0N005](https://doi.org/10.5067/TEOCN-0N005).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
