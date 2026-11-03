---
title: "Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-1C (TOA)"
date: 2026-11-03 12:00:00
permalink: /pages/07bc7cbd/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "esa"
  - "eu"
  - "msi"
  - "radiance"
  - "satellite-imagery"
  - "sentinel"
---

# Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-1C (TOA)

## 数据集简介

After 2022-01-25, Sentinel-2 scenes with PROCESSING_BASELINE '04.00' or above
have their DN (value) range shifted by 1000. The HARMONIZED collection
shifts data in newer scenes to be in the same range as in older scenes.

Sentinel-2 is a wide-swath, high-resolution, multi-spectral
imaging mission supporting Copernicus Land Monitoring studies,
including the monitoring of vegetation, soil and water cover,
as well as observation of inland waterways and coastal areas.

The Sentinel-2 data contain 13 UINT16 spectral bands representing
TOA reflectance scaled by 10000. See the [Sentinel-2 User Handbook](https://sentinel.esa.int/documents/247904/685211/Sentinel-2_User_Handbook)
for details. QA60 is a bitmask band that contained rasterized cloud mask
polygons until Feb 2022, when these polygons stopped being produced.
Starting in February 2024, legacy-consistent QA60 bands are constructed from the MSK_CLASSI
cloud classification bands.
For more details,
[see the full explanation of how cloud masks are computed.](https://sentinel.esa.int/web/sentinel/technical-guides/sentinel-2-msi/level-1c/cloud-masks).

Each Sentinel-2 product (zip archive) may contain multiple
granules. Each granule becomes a separate Earth Engine asset.
EE asset ids for Sentinel-2 assets have the following format:
COPERNICUS/S2/20151128T002653_20151128T102149_T56MNN. Here the
first numeric part represents the sensing date and time, the
second numeric part represents the product generation date and
time, and the final 6-character string is a unique granule identifier
indicating its UTM grid reference (see [MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)).

The Level-2 data produced by ESA can be found in the collection
[COPERNICUS/S2_SR](COPERNICUS_S2_SR).

For datasets to assist with cloud and/or cloud shadow detection, see [COPERNICUS/S2_CLOUD_PROBABILITY](COPERNICUS_S2_CLOUD_PROBABILITY)
and [GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED](GOOGLE_CLOUD_SCORE_PLUS_V1_S2_HARMONIZED).

For more details on Sentinel-2 radiometric resolution, [see this page](https://sentinel.esa.int/web/sentinel/user-guides/sentinel-2-msi/resolutions/radiometric).

## 基本信息

- 数据集编号（Earth Engine ID）：`COPERNICUS/S2_HARMONIZED`
- 数据类型：影像集合（ImageCollection）
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 时间范围：2015-06-27 至 2026-11-03
- 许可：proprietary
- 关键词：copernicus, esa, eu, msi, radiance, satellite-imagery, sentinel

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
| B10 | Cirrus | 60 | 1373.5nm (S2A) / 1376.9nm (S2B) |
| B11 | SWIR 1 | 20 | 1613.7nm (S2A) / 1610.4nm (S2B) |
| B12 | SWIR 2 | 20 | 2202.4nm (S2A) / 2185.7nm (S2B) |
| QA10 | Always empty | 10 |  |
| QA20 | Always empty | 20 |  |
| QA60 | Cloud mask. Masked out between February 2022 and February 2024. | 60 |  |
| MSK_CLASSI_OPAQUE | Opaque clouds classification band (0=no clouds, 1=clouds). Masked out before February 2024. | 60 |  |
| MSK_CLASSI_CIRRUS | Cirrus clouds classification band (0=no clouds, 1=clouds). Masked out before February 2024. | 60 |  |
| MSK_CLASSI_SNOW_ICE | Snow/ice classification band (0=no snow/ice, 1=snow/ice). Masked out before February 2024. | 60 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/S2_HARMONIZED');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
