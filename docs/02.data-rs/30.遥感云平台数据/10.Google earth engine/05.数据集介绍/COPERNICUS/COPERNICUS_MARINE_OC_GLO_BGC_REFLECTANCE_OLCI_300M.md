---
title: "Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Reflectance, OLCI 300M"
date: 2026-11-03 12:00:00
permalink: /pages/f4ffb7b4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "oceans"
---

# Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Reflectance, OLCI 300M

## 数据集简介

The Global Ocean Colour (Copernicus-GlobColour) dataset is a Bio-Geo-Chemical
(BGC) product developed by ACRI-ST. Derived from multiple satellite sources
like SeaWiFS, MODIS, and OLCI. It provides a comprehensive range of
oceanographic variables, including: Chlorophyll (CHL),
Phytoplankton Functional types and sizes (PFT), Primary Production (PP),
Suspended Matter (SPM), Secchi Transparency Depth (ZSD),
Diffuse Attenuation (KD490), Particulate Backscattering (BBP),
Absorption Coefficient (CDM), Reflectance (RRS) and more.

This dataset is a global product from the Copernicus Marine Service (CMEMS).
It provides Remote-Sensing Reflectance (Rrs), a fundamental optical property
of the water that represents the light leaving the ocean surface.
Derived from the Ocean and Land Colour Instrument (OLCI), this L4 dataset is
processed into a ready-to-use format. With an exceptionally high spatial
resolution of 300 meters, this dataset is particularly valuable for detailed
coastal and regional studies of water quality and marine constituents.

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

- 数据集编号（Earth Engine ID）：`COPERNICUS/MARINE/OC_GLO_BGC/REFLECTANCE_OLCI_300M`
- 数据类型：影像集合（ImageCollection）
- 提供方：Copernicus、Google Earth Engine
- 时间范围：2025-03-01 至 2026-09-01
- 空间分辨率：300 米
- 许可：CC-BY-4.0
- 关键词：copernicus, oceans

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| RRS400 | Remote Sensing Reflectance at 400 nm | 300 |  |
| RRS400_uncertainty | Remote Sensing Reflectance at 400 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%).  | 300 |  |
| RRS412 | Remote Sensing Reflectance at 412 nm | 300 |  |
| RRS412_uncertainty | Remote Sensing Reflectance at 412 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%).  | 300 |  |
| RRS443 | Remote Sensing Reflectance at 443 nm | 300 |  |
| RRS443_uncertainty | Remote Sensing Reflectance at 443 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%).  | 300 |  |
| RRS490 | Remote Sensing Reflectance at 490 nm | 300 |  |
| RRS490_uncertainty | Remote Sensing Reflectance at 490 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%).  | 300 |  |
| RRS510 | Remote Sensing Reflectance at 510 nm | 300 |  |
| RRS510_uncertainty | Remote Sensing Reflectance at 510 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%).  | 300 |  |
| RRS560 | Remote Sensing Reflectance at 560 nm | 300 |  |
| RRS560_uncertainty | Remote Sensing Reflectance at 560 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%).  | 300 |  |
| RRS620 | Remote Sensing Reflectance at 620 nm | 300 |  |
| RRS620_uncertainty | Remote Sensing Reflectance at 620 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%).  | 300 |  |
| RRS665 | Remote Sensing Reflectance at 665 nm | 300 |  |
| RRS665_uncertainty | Remote Sensing Reflectance at 665 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%).  | 300 |  |
| RRS674 | Remote Sensing Reflectance at 674 nm | 300 |  |
| RRS674_uncertainty | Remote Sensing Reflectance at 674 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%).  | 300 |  |
| RRS681 | Remote Sensing Reflectance at 681 nm | 300 |  |
| RRS681_uncertainty | Remote Sensing Reflectance at 681 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%).  | 300 |  |
| RRS709 | Remote Sensing Reflectance at 709 nm | 300 |  |
| RRS709_uncertainty | Remote Sensing Reflectance at 709 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%).  | 300 |  |
| flags | Land water mask bit.  * 0: Water * 1: Land  | 300 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/OC_GLO_BGC/REFLECTANCE_OLCI_300M');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_OC_GLO_BGC_REFLECTANCE_OLCI_300M
- 数据引用：Copernicus Global Ocean Colour:  Global Ocean Satellite Observations,
ACRI-ST company (Sophia Antipolis, France) is providing Bio-Geo-Chemical
(BGC) products based on the Copernicus-GlobColour processor.
[doi:10.48670/moi-00279](https://doi.org/10.48670/moi-00279)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
