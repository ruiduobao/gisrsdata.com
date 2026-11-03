---
title: "MOD16A2GF.061: Terra Net Evapotranspiration Gap-Filled 8-Day Global 500m"
date: 2026-11-03 12:00:00
permalink: /pages/8ff1337c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "evapotranspiration"
  - "global"
  - "modis"
  - "nasa"
  - "water-vapor"
---

# MOD16A2GF.061: Terra Net Evapotranspiration Gap-Filled 8-Day Global 500m

## 数据集简介

The Terra Moderate Resolution Imaging Spectroradiometer (MODIS) MOD16A2GF
Version 6.1 Evapotranspiration/Latent Heat Flux (ET/LE) product is a
year-end gap-filled 8-day composite dataset produced at 500 meter (m) pixel
resolution. The algorithm used for the MOD16 data product collection is
based on the logic of the Penman-Monteith equation, which includes inputs of
daily meteorological reanalysis data along with MODIS remotely sensed data
products such as vegetation property dynamics, albedo, and land cover.

The pixel values for the two Evapotranspiration layers (ET and PET) are the
sum of all eight days within the composite period, and the pixel values for
the two Latent Heat layers (LE and PLE) are the average of all eight days
within the composite period. The last acquisition period of each year is a
5 or 6-day composite period, depending on the year.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/931/MOD16_User_Guide_V61.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/93/MOD16_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD16A2GF)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MOD16A2GF`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-01-01 至 2025-12-27
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：8-day, evapotranspiration, global, modis, nasa, water-vapor

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ET | Total evapotranspiration | 500 |  |
| LE | Average latent heat flux | 500 |  |
| PET | Total potential evapotranspiration | 500 |  |
| PLE | Average potential latent heat flux | 500 |  |
| ET_QC | Evapotranspiration quality control flags | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MOD16A2GF');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD16A2GF
- 数据引用：Please visit
[LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD16A2GF.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
