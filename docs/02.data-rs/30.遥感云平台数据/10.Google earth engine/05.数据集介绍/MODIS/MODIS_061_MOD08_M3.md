---
title: "MOD08_M3.061 Terra Atmosphere Monthly Global Product"
date: 2026-11-03 12:00:00
permalink: /pages/492818e5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "climate"
  - "geophysical"
  - "global"
  - "mod08"
  - "mod08-m3"
  - "modis"
  - "monthly"
  - "nasa"
  - "temperature"
  - "terra"
  - "usgs"
---

# MOD08_M3.061 Terra Atmosphere Monthly Global Product

## 数据集简介

MOD08_M3 V6.1 is an atmosphere global product that contains
monthly 1 x 1 degree grid average values of atmospheric parameters.
These parameters are related to atmospheric aerosol particle properties,
total ozone burden, atmospheric water vapor, cloud optical and
physical properties, and atmospheric stability indices. The product
also provides means, standard deviations, QA weighted statistics,
log-normal distributions, uncertainty estimates, and statistics
for fractions of pixels that satisfy some condition. Below is a
subset of the bands, for a complete list see the [MOD08 Band List](https://developers.google.com/earth-engine/MOD08_bands.html).

Documentation:

* [User's Guide](https://modis-atmos.gsfc.nasa.gov/sites/default/files/ModAtmo/L3_ATBD_C6_C61_2019_02_20.pdf)

* [Science Data Product Software Documentation](https://modis-atmos.gsfc.nasa.gov/sites/default/files/ModAtmo/L3_C61_Changes_v2.pdf)

* [MYD08_M3 product description](https://modis-atmos.gsfc.nasa.gov/products/monthly)

* [File specification document](https://modis-atmos.gsfc.nasa.gov/sites/default/files/ModAtmo/MOD08_M3_fs_3045.txt)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MOD08_M3`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LAADS DAAC at NASA Goddard Space Flight Center、Google Earth Engine
- 时间范围：2000-02-01 至 2026-09-01
- 空间分辨率：111320 米
- 许可：proprietary
- 关键词：atmosphere, climate, geophysical, global, mod08, mod08-m3, modis, monthly, nasa, temperature, terra, usgs, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Aerosol_Optical_Depth_Land_Ocean_Mean_Mean | Aerosol optical thickness at 0.55 microns for both ocean (best) and land (corrected): mean of daily mean  | 111320 |  |
| Aerosol_Optical_Depth_Land_Ocean_Std_Deviation_Mean | Aerosol optical thickness at 0.55 microns for both ocean (best) and land (corrected): mean of daily standard deviation  | 111320 |  |
| Aerosol_Optical_Depth_Land_QA_Mean_Mean_470 | Corrected aerosol optical depth (land) at 0.47 microns: mean of level-3 QA weighted mean | 111320 |  |
| Aerosol_Optical_Depth_Land_QA_Std_Deviation_Mean_470 | Corrected aerosol optical depth (land) at 0.47 microns: mean of level-3 weighted QA standard deviation | 111320 |  |
| Cirrus_Fraction_SWIR_FMean | Cirrus area fraction: mean of daily fraction | 111320 |  |
| Cirrus_Fraction_SWIR_FStd | Cirrus area fraction: standard deviation of daily fraction | 111320 |  |
| Cloud_Optical_Thickness_Liquid_Log_Mean_Mean | Liquid water cloud optical thickness: mean of daily log mean | 111320 |  |
| Cloud_Optical_Thickness_Liquid_Log_Std_Deviation_Mean | Liquid water cloud optical thickness: mean of daily log standard deviation | 111320 |  |
| Cloud_Optical_Thickness_Liquid_Mean_Uncertainty | Liquid water cloud optical thickness: multi-day absolute uncertainty estimate derived from the daily absolute uncertainty estimate  | 111320 |  |
| Cloud_Optical_Thickness_Liquid_Log_Mean_Uncertainty | Liquid water cloud optical thickness: multi-day absolute log uncertainty estimate derived from the daily absolute log uncertainty estimate  | 111320 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MOD08_M3');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD08_M3
- 数据引用：Platnick, S., M. King, P. Hubanks, 2015. MODIS Atmosphere L3 Monthly
Product. NASA MODIS Adaptive Processing System, Goddard Space Flight
Center, [doi:10.5067/MODIS/MOD08_M3.061](https://doi.org/10.5067/MODIS/MOD08_M3.061)

- DOI：10.5067/MODIS/MOD08_M3.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
