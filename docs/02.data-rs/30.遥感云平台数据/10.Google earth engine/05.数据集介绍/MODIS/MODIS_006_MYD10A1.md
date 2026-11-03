---
title: "MYD10A1.006 Aqua Snow Cover Daily Global 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/1a13e16a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "aqua"
  - "cryosphere"
  - "daily"
  - "geophysical"
  - "global"
  - "modis"
  - "myd10a1"
  - "nasa"
  - "nsidc"
  - "snow"
---

# MYD10A1.006 Aqua Snow Cover Daily Global 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MYD10A1 V6 Snow Cover Daily Global 500m product
contains snow cover, snow albedo, fractional snow cover, and quality
assessment (QA) data. Snow cover data are based on a snow mapping
algorithm that employs a Normalized Difference Snow Index (NDSI)
and other criteria tests.

[General documentation](https://doi.org/10.5067/MODIS/MYD10A1.006)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MYD10A1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA NSIDC DAAC at CIRES、Google Earth Engine
- 时间范围：2002-07-04 至 2023-02-25
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：albedo, aqua, cryosphere, daily, geophysical, global, modis, myd10a1, nasa, nsidc, snow

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDSI_Snow_Cover | NDSI snow cover. This value is computed for MOD10_L2 and retrieved when the observation of the day is selected. Provider values above 100 are masked out in this band (they can be found in the "NDSI_Snow_Cover_Class" band).  | 500 |  |
| NDSI_Snow_Cover_Basic_QA | A basic estimate of the quality of the algorithm result. This value is computed for MOD10_L2 and retrieved with the corresponding observation of the day.  | 500 |  |
| NDSI_Snow_Cover_Algorithm_Flags_QA | Bit flags indicating screen results and the presence of inland water. These flags are set when MOD10_L2 is generated and retrieved with the corresponding observation of the day.  | 500 |  |
| NDSI | Raw NDSI (i.e. prior to screening). This value is computed for MOD10_L2 and retrieved with the corresponding observation of the day.  | 500 |  |
| Snow_Albedo_Daily_Tile | Snow albedo percentage. Provider values above 100 are masked out in this band (they can be found in the "Snow_Albedo_Daily_Tile_Class" band).  | 500 |  |
| orbit_pnt | Pointer to the orbit number of the swath that was selected as the observation of the day. The pointer references by index the list of orbit numbers written to the ORBITNUMBERARRAY metadata object in ArchiveMetadata.0.  | 500 |  |
| granule_pnt | Pointer to the granule (swath) that was mapped into the tile. The pointer references the corresponding value in the GRANULEPOINTERARRAY metadata object written to ArchiveMetadata.0.  | 500 |  |
| NDSI_Snow_Cover_Class | Landcover classes from the "NDSI_Snow_Cover" subdataset (provider values less than or equal to 100 are masked out).  | 500 |  |
| Snow_Albedo_Daily_Tile_Class | Landcover classes from the "Snow_Albedo_Daily_Tile" subdataset (provider values less than or equal to 100 are masked out).  | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/006/MYD10A1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD10A1
- 数据引用：Hall, D. K., V. V. Salomonson, and G. A. Riggs. 2016. MODIS/Terra
Snow Cover Daily L3 Global 500m Grid. Version 6. Boulder, Colorado
USA: NASA National Snow and Ice Data Center Distributed Active
Archive Center.

- DOI：10.5067/MODIS/MYD10A1.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
