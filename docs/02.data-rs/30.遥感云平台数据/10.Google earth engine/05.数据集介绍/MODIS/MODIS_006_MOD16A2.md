---
title: "MOD16A2.006: Terra Net Evapotranspiration 8-Day Global 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/75d3d2c3/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "evapotranspiration"
  - "global"
  - "mod16a2"
  - "modis"
  - "nasa"
  - "water-vapor"
---

# MOD16A2.006: Terra Net Evapotranspiration 8-Day Global 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MOD16A2 Version 6 Evapotranspiration/Latent Heat Flux product is an
8-day composite product produced at 500 meter pixel resolution. The
algorithm used for the MOD16 data product collection is based on the logic
of the Penman-Monteith equation, which includes inputs of daily
meteorological reanalysis data along with MODIS remotely sensed data
products such as vegetation property dynamics, albedo, and land cover.

The pixel values for the two Evapotranspiration layers (ET & PET) are the
sum of all eight days within the composite period. The pixel values for
the two Latent Heat layers (LE & PLE) are the average of all eight days
within the composite period. Note that the last 8-day period of each year
is a 5 or 6-day composite period, depending on the year.

According to
[the \"Layers\" section of the dataset docs](https://lpdaac.usgs.gov/products/mod16a2v006),
the class assignment in fill values 32761 through 32767 might be inaccurate.
They are not included in the EE assets.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/494/MOD16_User_Guide_V6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/93/MOD16_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD16A2)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MOD16A2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2001-01-01 至 2023-02-02
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：8-day, evapotranspiration, global, mod16a2, modis, nasa, water-vapor

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
var dataset = ee.ImageCollection('MODIS/006/MOD16A2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD16A2
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD16A2.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
