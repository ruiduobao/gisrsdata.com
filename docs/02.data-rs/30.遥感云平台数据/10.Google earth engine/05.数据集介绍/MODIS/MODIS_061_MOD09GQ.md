---
title: "MOD09GQ.061 Terra Surface Reflectance Daily Global 250m"
date: 2026-11-03 12:00:00
permalink: /pages/9a4a37f2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "global"
  - "mod09gq"
  - "modis"
  - "nasa"
  - "satellite-imagery"
  - "sr"
  - "surface-reflectance"
  - "terra"
  - "usgs"
---

# MOD09GQ.061 Terra Surface Reflectance Daily Global 250m

## 数据集简介

The MODIS Surface Reflectance products provide an estimate
of the surface spectral reflectance as it would be measured at
ground level in the absence of atmospheric scattering or absorption.
Low-level data are corrected for atmospheric gases and aerosols.
MOD09GQ version 6.1 provides bands 1 and 2 at a 250m resolution in
a daily gridded L2G product in the Sinusoidal projection, including
a QC and five observation layers. This product is meant to be used
in conjunction with the MOD09GA where important quality and viewing
geometry information is stored.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/306/MOD09_User_Guide_V6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MOD09GQ)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MOD09GQ`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-24 至 2026-10-30
- 空间分辨率：250 米
- 许可：proprietary
- 关键词：daily, global, mod09gq, modis, nasa, satellite-imagery, sr, surface-reflectance, terra, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| num_observations | Number of observations per 250m pixel | 250 |  |
| sur_refl_b01 | Surface reflectance band 1 | 250 | 620-670nm |
| sur_refl_b02 | Surface reflectance for band 2 | 250 | 841-876nm |
| QC_250m | Surface reflectance quality assurance | 250 |  |
| obscov | Observation coverage percent | 250 |  |
| iobs_res | Observation number | 250 |  |
| orbit_pnt | Orbit pointer | 250 |  |
| granule_pnt | Granule pointer | 250 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MOD09GQ');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD09GQ
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD09GQ.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
