---
title: "Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Plankton, Multi-Sensor, 4KM"
date: 2026-11-03 12:00:00
permalink: /pages/7a0a5c32/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "oceans"
---

# Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Plankton, Multi-Sensor, 4KM

## 数据集简介

The Global Ocean Colour (Copernicus-GlobColour) dataset is a Bio-Geo-Chemical
(BGC) product developed by ACRI-ST. Derived from multiple satellite sources
like SeaWiFS, MODIS, and OLCI. It provides a comprehensive range of
oceanographic variables, including: Chlorophyll (CHL),
Phytoplankton Functional types and sizes (PFT), Primary Production (PP),
Suspended Matter (SPM), Secchi Transparency Depth (ZSD),
Diffuse Attenuation (KD490), Particulate Backscattering (BBP),
Absorption Coefficient (CDM), Reflectance (RRS) and more.

This dataset provides key bio-geochemical information about ocean plankton.
This L4 dataset is unique for its "gap-free" nature, meaning it uses a
space-time interpolation to fill in data gaps caused by clouds or other
obstructions, providing a complete daily image.
It is derived from multiple satellite sensors, including SeaWiFS, MODIS, and
OLCI. The primary layer is chlorophyll-a concentration (CHL), which serves as
a proxy for the biomass of phytoplankton, a crucial component of the marine
food web. The dataset is used to monitor phytoplankton blooms, assess ocean
productivity, and study marine ecosystems.

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

- 数据集编号（Earth Engine ID）：`COPERNICUS/MARINE/OC_GLO_BGC/PLANKTON_MULTI_4KM`
- 数据类型：影像集合（ImageCollection）
- 提供方：Copernicus、Google Earth Engine
- 时间范围：2025-02-10 至 2026-10-28
- 空间分辨率：4000 米
- 许可：CC-BY-4.0
- 关键词：copernicus, oceans

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| CHL | Chlorophyll-a concentration | 4000 |  |
| CHL_uncertainty | Chlorophyll-a concentration - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%).  | 4000 |  |
| flags | Land water mask bit.    * 0: Water   * 1: Land  | 4000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/OC_GLO_BGC/PLANKTON_MULTI_4KM');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_OC_GLO_BGC_PLANKTON_MULTI_4KM
- 数据引用：Copernicus Global Ocean Colour:  Global Ocean Satellite Observations,
ACRI-ST company (Sophia Antipolis, France) is providing Bio-Geo-Chemical
(BGC) products based on the Copernicus-GlobColour processor.
[doi:10.48670/moi-00279](https://doi.org/10.48670/moi-00279)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
