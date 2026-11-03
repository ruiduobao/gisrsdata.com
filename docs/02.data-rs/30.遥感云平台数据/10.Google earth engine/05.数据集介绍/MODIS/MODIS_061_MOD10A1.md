---
title: "MOD10A1.061 Terra Snow Cover Daily Global 500m"
date: 2026-11-03 12:00:00
permalink: /pages/63afd45f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "cryosphere"
  - "daily"
  - "geophysical"
  - "global"
  - "mod10a1"
  - "modis"
  - "nasa"
  - "nsidc"
  - "snow"
  - "terra"
---

# MOD10A1.061 Terra Snow Cover Daily Global 500m

## 数据集简介

The MOD10A1 V6.1 Snow Cover Daily Global 500m product
contains snow cover, snow albedo, fractional snow cover, and quality
assessment (QA) data. Snow cover data are based on a snow mapping
algorithm that employs a Normalized Difference Snow Index (NDSI)
and other criteria tests.

[General documentation](https://doi.org/10.5067/MODIS/MOD10A1.061)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MOD10A1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA NSIDC DAAC at CIRES、Google Earth Engine
- 时间范围：2000-02-24 至 2026-10-29
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：albedo, cryosphere, daily, geophysical, global, mod10a1, modis, nasa, nsidc, snow, terra

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
var dataset = ee.ImageCollection('MODIS/061/MOD10A1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD10A1
- 数据引用：Hall, D. K., V. V. Salomonson, and G. A. Riggs. 2016. MODIS/Terra
Snow Cover Daily L3 Global 500m Grid. Version 6. Boulder, Colorado
USA: NASA National Snow and Ice Data Center Distributed Active
Archive Center.

- DOI：10.5067/MODIS/MOD10A1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
