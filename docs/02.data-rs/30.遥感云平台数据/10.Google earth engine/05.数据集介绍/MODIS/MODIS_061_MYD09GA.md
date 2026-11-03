---
title: "MYD09GA.061 Aqua Surface Reflectance Daily Global 1km and 500m"
date: 2026-11-03 12:00:00
permalink: /pages/a0871702/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aqua"
  - "daily"
  - "global"
  - "modis"
  - "myd09ga"
  - "nasa"
  - "satellite-imagery"
  - "sr"
  - "surface-reflectance"
  - "usgs"
---

# MYD09GA.061 Aqua Surface Reflectance Daily Global 1km and 500m

## 数据集简介

The MODIS Surface Reflectance products provide an estimate
of the surface spectral reflectance as it would be measured at
ground level in the absence of atmospheric scattering or absorption.
Low-level data are corrected for atmospheric gases and aerosols.
MYD09GA version 6.1 provides bands 1-7 in a daily gridded L2G product
in the sinusoidal projection, including 500m reflectance values
and 1km observation and geolocation statistics.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/306/MOD09_User_Guide_V6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MYD09GA)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MYD09GA`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2002-07-04 至 2026-10-29
- 许可：proprietary
- 关键词：aqua, daily, global, modis, myd09ga, nasa, satellite-imagery, sr, surface-reflectance, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| num_observations_1km | Number of observations per 1K pixel | 1000 |  |
| state_1km | Reflectance data state QA | 1000 |  |
| SensorZenith | Sensor zenith angle | 1000 |  |
| SensorAzimuth | Sensor azimuth angle | 1000 |  |
| Range | Distance to sensor | 1000 |  |
| SolarZenith | Solar zenith angle | 1000 |  |
| SolarAzimuth | Solar azimuth angle | 1000 |  |
| gflags | Geolocation flags | 1000 |  |
| orbit_pnt | Orbit pointer | 1000 |  |
| granule_pnt | Granule pointer | 1000 |  |
| num_observations_500m | Number of observations | 500 |  |
| sur_refl_b01 | Surface reflectance for band 1 | 500 | 620-670nm |
| sur_refl_b02 | Surface reflectance for band 2 | 500 | 841-876nm |
| sur_refl_b03 | Surface reflectance for band 3 | 500 | 459-479nm |
| sur_refl_b04 | Surface reflectance for band 4 | 500 | 545-565nm |
| sur_refl_b05 | Surface reflectance for band 5 | 500 | 1230-1250nm |
| sur_refl_b06 | Surface reflectance for band 6 | 500 | 1628-1652nm |
| sur_refl_b07 | Surface reflectance for band 7 | 500 | 2105-2155nm |
| QC_500m | Surface reflectance quality assurance | 500 |  |
| obscov_500m | Observation coverage percent | 500 |  |
| iobs_res | Observation number in coarser grid | 500 |  |
| q_scan | 250m scan value information | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MYD09GA');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MYD09GA
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD09GA.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
