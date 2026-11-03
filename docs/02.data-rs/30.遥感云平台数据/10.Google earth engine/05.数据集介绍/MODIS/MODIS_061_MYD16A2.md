---
title: "MYD16A2.061: Aqua Net Evapotranspiration 8-Day L4 Global 500m SIN Grid V061"
date: 2026-11-03 12:00:00
permalink: /pages/ddb320e1/
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

# MYD16A2.061: Aqua Net Evapotranspiration 8-Day L4 Global 500m SIN Grid V061

## 数据集简介

The MYD16A2 Version 6.1 Evapotranspiration/Latent Heat Flux product is an
8-day composite product at 500 meter pixel resolution. The algorithm used
for the MOD16 data product collection is based on the logic of the
Penman-Monteith equation, which includes inputs of daily meteorological
reanalysis data along with MODIS remotely sensed data products such as
vegetation property dynamics, albedo, and land cover.

The pixel values for the ET, LE, PET and PLE layers are the sum for all days
within the 8-day composite period.Note that the last 8-day period of each
year is a 5 or 6-day composite period, depending on the year.

The Version 6.1 Level-1B (L1B) products have been improved by undergoing
various calibration changes that include: changes to the
response-versus-scan angle (RVS) approach that affects reflectance bands
for Aqua and Terra MODIS, corrections to adjust for the optical crosstalk
in Terra MODIS infrared (IR) bands, and corrections to the Terra MODIS
forward look-up table (LUT) update for the period 2012 - 2017.
A polarization correction has been applied to the L1B Reflective Solar
Bands (RSB). The product uses Climatology LAI/FPAR as back up to the
operational LAI/FPAR.

According to [the MODIS Science Team]
(https://forum.earthdata.nasa.gov/viewtopic.php?p=15070#p15070),
The MYD16A2 6.1 product will not have data prior to 2021. The MODIS Science
team recommends using the gap-filled MYD16A2GF 6.1 product for data from
2000 to 2021 -- and then also 2022 when the data are available.
They recommend this as the gap-filled product is expected to be superior in
product quality, especially over areas where otherwise the routine product
performance would have been negatively impacted by cloudy or poor quality
input observations. For the current year, there will not be a gap-filled
product until early the following year (i.e. 2023 data should be available
in early 2024). So, if a user needs MYD16A2GF 6.1 data for the year 2023
(or the "current" year in the future), they recommend using the MYD16A2 6.1
product, which is generated using the daily observation with climatology
observation replacing for the cloudy or poor quality observations.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/494/MOD16_User_Guide_V6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/93/MOD16_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MYD16A2)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MYD16A2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2021-01-01 至 2026-10-16
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
var dataset = ee.ImageCollection('MODIS/061/MYD16A2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MYD16A2
- 数据引用：Please visit
[LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD16A2.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
