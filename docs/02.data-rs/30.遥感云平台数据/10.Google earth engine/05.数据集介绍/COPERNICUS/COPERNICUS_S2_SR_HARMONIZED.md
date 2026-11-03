---
title: "Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-2A (SR)"
date: 2026-11-03 12:00:00
permalink: /pages/0620c27d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "esa"
  - "eu"
  - "msi"
  - "reflectance"
  - "satellite-imagery"
  - "sentinel"
  - "sr"
---

# Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-2A (SR)

## 数据集简介

After 2022-01-25, Sentinel-2 scenes with PROCESSING_BASELINE '04.00' or above
have their DN (value) range shifted by 1000. The HARMONIZED collection
shifts data in newer scenes to be in the same range as in older scenes.

Sentinel-2 is a wide-swath, high-resolution, multi-spectral
imaging mission supporting Copernicus Land Monitoring studies,
including the monitoring of vegetation, soil and water cover,
as well as observation of inland waterways and coastal areas.

The Sentinel-2 L2 data are downloaded from CDSE. They were
computed by running sen2cor. WARNING: 2017-2018 L2 coverage
in the EE collection is not yet global.

The assets contain
12 UINT16 spectral bands representing SR scaled by 10000 (unlike in L1 data,
there is no B10). There are also several more L2-specific bands (see band
list for details). See the
[Sentinel-2 User Handbook](https://sentinel.esa.int/documents/247904/685211/Sentinel-2_User_Handbook)
for details.

QA60 is a bitmask band that contained rasterized cloud mask
polygons until 2022-01-25, when these polygons stopped being produced.
Starting 2024-02-28, legacy-consistent QA60 bands are constructed from
the MSK_CLASSI cloud classification bands.
For more details,
[see the full explanation of how cloud masks are computed.](https://sentinel.esa.int/web/sentinel/technical-guides/sentinel-2-msi/level-1c/cloud-masks)

EE asset ids for Sentinel-2 L2 assets have the following format:
COPERNICUS/S2_SR/20151128T002653_20151128T102149_T56MNN. Here the
first numeric part represents the sensing date and time, the
second numeric part represents the product generation date and
time, and the final 6-character string is a unique granule identifier
indicating its UTM grid reference (see [MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)).

For datasets to assist with cloud and/or cloud shadow detection, see [COPERNICUS/S2_CLOUD_PROBABILITY](COPERNICUS_S2_CLOUD_PROBABILITY)
and [GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED](GOOGLE_CLOUD_SCORE_PLUS_V1_S2_HARMONIZED).

For more details on Sentinel-2 radiometric resolution, [see this page](https://sentinel.esa.int/web/sentinel/user-guides/sentinel-2-msi/resolutions/radiometric).

## 基本信息

- 数据集编号（Earth Engine ID）：`COPERNICUS/S2_SR_HARMONIZED`
- 数据类型：影像集合（ImageCollection）
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 时间范围：2017-03-28 至 2026-11-03
- 许可：proprietary
- 关键词：copernicus, esa, eu, msi, reflectance, satellite-imagery, sentinel, sr

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | Aerosols | 60 | 443.9nm (S2A) / 442.3nm (S2B) |
| B2 | Blue | 10 | 496.6nm (S2A) / 492.1nm (S2B) |
| B3 | Green | 10 | 560nm (S2A) / 559nm (S2B) |
| B4 | Red | 10 | 664.5nm (S2A) / 665nm (S2B) |
| B5 | Red Edge 1 | 20 | 703.9nm (S2A) / 703.8nm (S2B) |
| B6 | Red Edge 2 | 20 | 740.2nm (S2A) / 739.1nm (S2B) |
| B7 | Red Edge 3 | 20 | 782.5nm (S2A) / 779.7nm (S2B) |
| B8 | NIR | 10 | 835.1nm (S2A) / 833nm (S2B) |
| B8A | Red Edge 4 | 20 | 864.8nm (S2A) / 864nm (S2B) |
| B9 | Water vapor | 60 | 945nm (S2A) / 943.2nm (S2B) |
| B11 | SWIR 1 | 20 | 1613.7nm (S2A) / 1610.4nm (S2B) |
| B12 | SWIR 2 | 20 | 2202.4nm (S2A) / 2185.7nm (S2B) |
| AOT | Aerosol Optical Thickness | 10 |  |
| WVP | Water Vapor Pressure. The height the water would occupy if the vapor were condensed into liquid and spread evenly across the column.  | 10 |  |
| SCL | Scene Classification Map (The "No Data" value of 0 is masked out) | 20 |  |
| TCI_R | True Color Image, Red channel | 10 |  |
| TCI_G | True Color Image, Green channel | 10 |  |
| TCI_B | True Color Image, Blue channel | 10 |  |
| MSK_CLDPRB | Cloud Probability Map (missing in some products) | 20 |  |
| MSK_SNWPRB | Snow Probability Map (missing in some products) | 10 |  |
| QA10 | Always empty | 10 |  |
| QA20 | Always empty | 20 |  |
| QA60 | Cloud mask. Masked out between 2022-01-25 to 2024-02-28 inclusive. | 60 |  |
| MSK_CLASSI_OPAQUE | Opaque clouds classification band (0=no clouds, 1=clouds). Masked out before February 2024. | 60 |  |
| MSK_CLASSI_CIRRUS | Cirrus clouds classification band (0=no clouds, 1=clouds). Masked out before February 2024. | 60 |  |
| MSK_CLASSI_SNOW_ICE | Snow/ice classification band (0=no snow/ice, 1=snow/ice). Masked out before February 2024. | 60 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR_HARMONIZED

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
