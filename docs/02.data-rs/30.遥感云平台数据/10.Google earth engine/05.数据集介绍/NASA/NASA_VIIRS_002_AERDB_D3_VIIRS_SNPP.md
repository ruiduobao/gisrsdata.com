---
title: "AERDB_D3_VIIRS_SNPP.002: VIIRS/SNPP Deep Blue Aerosol Optical Depth Daily L3 Global 1.0 Deg Grid"
date: 2026-11-03 12:00:00
permalink: /pages/64c851e2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aerosol"
  - "aot"
  - "atmosphere"
  - "daily"
  - "nasa"
  - "noaa"
  - "npp"
  - "viirs"
---

# AERDB_D3_VIIRS_SNPP.002: VIIRS/SNPP Deep Blue Aerosol Optical Depth Daily L3 Global 1.0 Deg Grid

## 数据集简介

The Visible Infrared Imaging Radiometer Suite (VIIRS) Deep Blue Level-3
Daily Global 1-Degree Gridded product (AERDB_D3_VIIRS_SNPP) provides daily
global gridded aerosol parameters derived from the Suomi National
Polar-orbiting Partnership (SNPP) VIIRS sensor. Data are generated using
the Deep Blue (DB) algorithm over land and the Satellite Aerosol for Land
and Ocean (SOAR) algorithm over ocean.

The product includes statistical summaries (mean, minimum, maximum, count,
and standard deviation) of aerosol optical thickness (AOT) at 550 nm across
land, ocean, and combined land/ocean scenes, along with Angstrom exponent
retrievals, fine-mode fraction estimates over ocean, and aerosol type
classifications. Data are projected on a regular 1.0 degree equal-angle
global grid (EPSG:4326).

Documentation:

* [Product User Guide](https://ladsweb.modaps.eosdis.nasa.gov/api/v2/content/archives/Document%20Archive/Science%20Data%20Product%20Documentation/VIIRS_Deep_Blue_Aerosol_UG_v2_March_2025.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://ladsweb.modaps.eosdis.nasa.gov/api/v2/content/archives/Document%20Archive/Science%20Data%20Product%20Documentation/Product%20Generation%20Algorithms/VIIRS_Deep_Blue_Aerosol_ATBD_March_2025.pdf)

* [Deep Blue Project](https://deepblue.gsfc.nasa.gov/)

* [LAADS DAAC Product Page](https://ladsweb.modaps.eosdis.nasa.gov/missions-and-measurements/products/AERDB_D3_VIIRS_SNPP#documentation)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/VIIRS/002/AERDB_D3_VIIRS_SNPP`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA Atmosphere SIPS / LAADS DAAC、Google Earth Engine
- 时间范围：2012-03-01 至 2026-10-28
- 空间分辨率：111320 米
- 许可：CC0-1.0
- 关键词：aerosol, aot, atmosphere, daily, nasa, noaa, npp, viirs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Aerosol_Optical_Thickness_550_Land_Count | Count of aerosol optical thickness retrievals at 550 nm over land | 111320 |  |
| Aerosol_Optical_Thickness_550_Land_Maximum | Maximum aerosol optical thickness at 550 nm over land | 111320 |  |
| Aerosol_Optical_Thickness_550_Land_Mean | Mean aerosol optical thickness at 550 nm over land | 111320 |  |
| Aerosol_Optical_Thickness_550_Land_Minimum | Minimum aerosol optical thickness at 550 nm over land | 111320 |  |
| Aerosol_Optical_Thickness_550_Land_Ocean_Count | Total count of aerosol optical thickness retrievals at 550 nm over land and ocean | 111320 |  |
| Aerosol_Optical_Thickness_550_Land_Ocean_Maximum | Maximum aerosol optical thickness at 550 nm over land and ocean | 111320 |  |
| Aerosol_Optical_Thickness_550_Land_Ocean_Mean | Mean aerosol optical thickness at 550 nm over land and ocean | 111320 |  |
| Aerosol_Optical_Thickness_550_Land_Ocean_Minimum | Minimum aerosol optical thickness at 550 nm over land and ocean | 111320 |  |
| Aerosol_Optical_Thickness_550_Land_Ocean_Standard_Deviation | Standard deviation of aerosol optical thickness at 550 nm over land and ocean | 111320 |  |
| Aerosol_Optical_Thickness_550_Land_Standard_Deviation | Standard deviation of aerosol optical thickness at 550 nm over land | 111320 |  |
| Aerosol_Optical_Thickness_550_Ocean_Count | Count of aerosol optical thickness retrievals at 550 nm over ocean | 111320 |  |
| Aerosol_Optical_Thickness_550_Ocean_Maximum | Maximum aerosol optical thickness at 550 nm over ocean | 111320 |  |
| Aerosol_Optical_Thickness_550_Ocean_Mean | Mean aerosol optical thickness at 550 nm over ocean | 111320 |  |
| Aerosol_Optical_Thickness_550_Ocean_Minimum | Minimum aerosol optical thickness at 550 nm over ocean | 111320 |  |
| Aerosol_Optical_Thickness_550_Ocean_Standard_Deviation | Standard deviation of aerosol optical thickness at 550 nm over ocean | 111320 |  |
| Aerosol_Type_Land_Ocean_Histogram | Aerosol type classification histogram over land and ocean | 111320 |  |
| Aerosol_Type_Land_Ocean_Mode | Mode of aerosol type classification over land and ocean | 111320 |  |
| Angstrom_Exponent_Land_Maximum | Maximum Angstrom exponent over land | 111320 |  |
| Angstrom_Exponent_Land_Mean | Mean Angstrom exponent over land | 111320 |  |
| Angstrom_Exponent_Land_Minimum | Minimum Angstrom exponent over land | 111320 |  |
| Angstrom_Exponent_Land_Ocean_Maximum | Maximum Angstrom exponent over land and ocean | 111320 |  |
| Angstrom_Exponent_Land_Ocean_Mean | Mean Angstrom exponent over land and ocean | 111320 |  |
| Angstrom_Exponent_Land_Ocean_Minimum | Minimum Angstrom exponent over land and ocean | 111320 |  |
| Angstrom_Exponent_Land_Ocean_Standard_Deviation | Standard deviation of Angstrom exponent over land and ocean | 111320 |  |
| Angstrom_Exponent_Land_Standard_Deviation | Standard deviation of Angstrom exponent over land | 111320 |  |
| Angstrom_Exponent_Ocean_Maximum | Maximum Angstrom exponent over ocean | 111320 |  |
| Angstrom_Exponent_Ocean_Mean | Mean Angstrom exponent over ocean | 111320 |  |
| Angstrom_Exponent_Ocean_Minimum | Minimum Angstrom exponent over ocean | 111320 |  |
| Angstrom_Exponent_Ocean_Standard_Deviation | Standard deviation of Angstrom exponent over ocean | 111320 |  |
| Fine_Mode_Fraction_550_Ocean_Mean | Mean fine-mode aerosol volume/optical fraction at 550 nm over ocean | 111320 |  |
| Fine_Mode_Fraction_550_Ocean_Standard_Deviation | Standard deviation of fine-mode aerosol fraction at 550 nm over ocean | 111320 |  |
| Spectral_Aerosol_Optical_Thickness_Land_Count | Count of spectral aerosol optical thickness retrievals over land | 111320 |  |
| Spectral_Aerosol_Optical_Thickness_Land_Mean | Mean spectral aerosol optical thickness over land | 111320 |  |
| Spectral_Aerosol_Optical_Thickness_Land_Standard_Deviation | Standard deviation of spectral aerosol optical thickness over land | 111320 |  |
| Spectral_Aerosol_Optical_Thickness_Ocean_Count | Count of spectral aerosol optical thickness retrievals over ocean | 111320 |  |
| Spectral_Aerosol_Optical_Thickness_Ocean_Mean | Mean spectral aerosol optical thickness over ocean | 111320 |  |
| Spectral_Aerosol_Optical_Thickness_Ocean_Standard_Deviation | Standard deviation of spectral aerosol optical thickness over ocean | 111320 |  |
| Unsuitable_Pixel_Fraction_Land_Ocean | Fraction of pixels within grid cell deemed unsuitable for aerosol retrieval | 111320 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/AERDB_D3_VIIRS_SNPP');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_AERDB_D3_VIIRS_SNPP
- 数据引用：Hsu, C., et al. (2019). VIIRS/SNPP Deep Blue Aerosol Optical Depth Daily L3
Global 1.0 Deg Grid. NASA Goddard Space Flight Center,
[doi:10.5067/VIIRS/AERDB_D3_VIIRS_SNPP.002](https://doi.org/10.5067/VIIRS/AERDB_D3_VIIRS_SNPP.002)

- DOI：10.5067/VIIRS/AERDB_D3_VIIRS_SNPP.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
