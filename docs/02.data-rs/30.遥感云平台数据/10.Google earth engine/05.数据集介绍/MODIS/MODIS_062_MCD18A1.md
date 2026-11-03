---
title: "MCD18A1.062 Surface Radiation Daily/3-Hour"
date: 2026-11-03 12:00:00
permalink: /pages/50554e4e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "par"
  - "radiation"
  - "weather-and-climate"
---

# MCD18A1.062 Surface Radiation Daily/3-Hour

## 数据集简介

The MCD18A1 Version 6.2
is a Moderate Resolution Imaging Spectroradiometer
(MODIS) Terra and Aqua combined Downward Shortwave Radiation (DSR) gridded
Level 3 product produced daily at 1 kilometer pixel resolution with
estimates of DSR every 3 hours. DSR is incident solar radiation over land
surfaces in the shortwave spectrum (300-4,000 nanometers) and is an
important variable in land-surface models that address a variety of
scientific and application issues. The MCD18 products are based on a
prototyping algorithm that uses multi-temporal signatures of MODIS data to
derive surface reflectance and then calculate incident DSR using the look-up
table (LUT) approach. The LUTs consider different types of loadings of
aerosols and clouds at a variety of illumination/viewing geometry. Global
DSR products are generated from MODIS and geostationary satellite data.
Additional details regarding the methodology used to create the data are
available in the
[Algorithm Theoretical Basis Document](https://lpdaac.usgs.gov/documents/106/MCD18_ATBD.pdf).

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/062/MCD18A1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-03-03 至 2026-08-01
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：par, radiation, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| DSR | Instantaneous total DSR at MODIS overpass | 1000 |  |
| Direct | Instantaneous direct DSR at MODIS overpass | 1000 |  |
| Diffuse | Instantaneous diffuse DSR at MODIS overpass | 1000 |  |
| GMT_0000_DSR | Total DSR at GMT 00:00 | 1000 |  |
| GMT_0300_DSR | Total DSR at GMT 03:00 | 1000 |  |
| GMT_0600_DSR | Total DSR at GMT 06:00 | 1000 |  |
| GMT_0900_DSR | Total DSR at GMT 09:00 | 1000 |  |
| GMT_1200_DSR | Total DSR at GMT 12:00 | 1000 |  |
| GMT_1500_DSR | Total DSR at GMT 15:00 | 1000 |  |
| GMT_1800_DSR | Total DSR at GMT 18:00 | 1000 |  |
| GMT_2100_DSR | Total DSR at GMT 21:00 | 1000 |  |
| DSR_Quality | Quality flag | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/062/MCD18A1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_062_MCD18A1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD18A1.062

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
