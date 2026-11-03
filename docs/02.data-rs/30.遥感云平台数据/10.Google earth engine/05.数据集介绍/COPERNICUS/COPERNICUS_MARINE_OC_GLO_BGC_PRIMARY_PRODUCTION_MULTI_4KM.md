---
title: "Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Primary Production, Multi-Sensor 4KM"
date: 2026-11-03 12:00:00
permalink: /pages/6396836c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "oceans"
---

# Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Primary Production, Multi-Sensor 4KM

## 数据集简介

The Global Ocean Colour (Copernicus-GlobColour) dataset is a Bio-Geo-Chemical
(BGC) product developed by ACRI-ST. Derived from multiple satellite sources
like SeaWiFS, MODIS, and OLCI. It provides a comprehensive range of
oceanographic variables, including: Chlorophyll (CHL),
Phytoplankton Functional types and sizes (PFT), Primary Production (PP),
Suspended Matter (SPM), Secchi Transparency Depth (ZSD),
Diffuse Attenuation (KD490), Particulate Backscattering (BBP),
Absorption Coefficient (CDM), Reflectance (RRS) and more.

This dataset provides a global estimate of marine primary production.
It uses multi-sensor satellite data to measure the rate of carbon fixation by
phytoplankton, which is a key indicator of ocean health.
The primary production values are expressed in units of mg/m^2/day, making
it a valuable tool for monitoring global carbon cycles and marine ecosystem
dynamics.

Documentation:

 * [User's Guide](https://documentation.marine.copernicus.eu/PUM/CMEMS-OC-PUM.pdf)

 * [Quality Information Document](https://documentation.marine.copernicus.eu/QUID/CMEMS-OC-QUID-009-101to104-111-113-116-118.pdf)

 * [Copernicus Marine Datastore](https://data.marine.copernicus.eu/products)

NOTE: The provider may remove Copernicus Marine data (especially Near
 Real-Time, NRT, observations) from their repository after some time,
 possibly aggregating that data into different (e.g., monthly) products.
 However, the corresponding assets remain available in the Earth Engine
 collection.

## 基本信息

- 数据集编号（Earth Engine ID）：`COPERNICUS/MARINE/OC_GLO_BGC/PRIMARY_PRODUCTION_MULTI_4KM`
- 数据类型：影像集合（ImageCollection）
- 提供方：Copernicus、Google Earth Engine
- 时间范围：2025-03-01 至 2026-09-01
- 空间分辨率：4000 米
- 许可：CC-BY-4.0
- 关键词：copernicus, oceans

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| PP | Primary Production | 4000 |  |
| PP_uncertainty | Primary Production - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%).'  | 4000 |  |
| flags | Land water mask bit.    * 0: Water   * 1: Land  | 4000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/OC_GLO_BGC/PRIMARY_PRODUCTION_MULTI_4KM');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_OC_GLO_BGC_PRIMARY_PRODUCTION_MULTI_4KM
- 数据引用：Copernicus Global Ocean Colour:  Global Ocean Satellite Observations,
ACRI-ST company (Sophia Antipolis, France) is providing Bio-Geo-Chemical
(BGC) products based on the Copernicus-GlobColour processor.
[doi:10.48670/moi-00279](https://doi.org/10.48670/moi-00279)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
