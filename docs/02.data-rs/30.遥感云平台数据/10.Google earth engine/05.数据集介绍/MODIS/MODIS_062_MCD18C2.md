---
title: "MCD18C2.062 Photosynthetically Active Radiation Daily 3-Hour"
date: 2026-11-03 12:00:00
permalink: /pages/e72cb414/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "par"
  - "radiation"
  - "weather-and-climate"
---

# MCD18C2.062 Photosynthetically Active Radiation Daily 3-Hour

## 数据集简介

The MCD18C2 Version 6.2
is a Moderate Resolution Imaging Spectroradiometer
(MODIS) Terra and Aqua combined Photosynthetically Active Radiation (PAR)
gridded Level 3 product produced daily at 0.05 degree (5,600 meters at the
equator) resolution with estimates of PAR every 3 hours. PAR is incident
solar radiation in the visible spectrum (400-700 nanometers) and is an
important variable in land-surface models that address a variety of
scientific and application issues. The MCD18 products are based on a
prototyping algorithm that uses multi-temporal signatures of MODIS data to
derive surface reflectance and then calculate incident PAR using the look-up
table (LUT) approach. The LUTs consider different types of loadings of
aerosols and clouds at a variety of illumination/viewing geometry. Global
PAR products are generated from MODIS and geostationary satellite data.
Additional details regarding the methodology used to create the data are
available in the
[Algorithm Theoretical Basis Document](https://lpdaac.usgs.gov/documents/106/MCD18_ATBD.pdf)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/062/MCD18C2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-24 至 2026-08-01
- 空间分辨率：5566 米
- 许可：proprietary
- 关键词：par, radiation, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| GMT_0000_PAR | Total PAR at GMT 00:00 | 5566 |  |
| GMT_0300_PAR | Total PAR at GMT 03:00 | 5566 |  |
| GMT_0600_PAR | Total PAR at GMT 06:00 | 5566 |  |
| GMT_0900_PAR | Total PAR at GMT 09:00 | 5566 |  |
| GMT_1200_PAR | Total PAR at GMT 12:00 | 5566 |  |
| GMT_1500_PAR | Total PAR at GMT 15:00 | 5566 |  |
| GMT_1800_PAR | Total PAR at GMT 18:00 | 5566 |  |
| GMT_2100_PAR | Total PAR at GMT 21:00 | 5566 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/062/MCD18C2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_062_MCD18C2
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD18C2.062

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
