---
title: "MOD10A1.005 Terra Snow Cover Daily Global 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/fd40c603/
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
  - "nsidc"
  - "snow"
  - "terra"
---

# MOD10A1.005 Terra Snow Cover Daily Global 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MOD10A1 V5 Snow Cover Daily Global 500m product
contains snow cover, snow albedo, fractional snow cover, and quality
assessment (QA) data. Snow cover data are based on a snow mapping
algorithm that employs a Normalized Difference Snow Index (NDSI)
and other criteria tests.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/MOD10A1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NSIDC、Google Earth Engine
- 时间范围：2000-02-24 至 2016-12-26
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：albedo, cryosphere, daily, geophysical, global, mod10a1, modis, nsidc, snow, terra

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Snow_Cover_Daily_Tile | NDSI snow cover plus other results. This value is computed for MOD10_L2 and retrieved when the observation of the day is selected. Possible values are: 0-100 (NDSI snow cover).  | 500 |  |
| Snow_Spatial_QA | A basic estimate of the quality of the algorithm result. This value is computed for MOD10_L2 and retrieved with the corresponding observation of the day.  | 500 |  |
| Snow_Albedo_Daily_Tile | Snow albedo percentage plus other results. | 500 |  |
| Fractional_Snow_Cover | Snow cover percentage plus other results. | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/MOD10A1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD10A1
- 数据引用：Hall, D. K., V. V. Salomonson, and G. A. Riggs. 2006. MODIS/Terra
Snow Cover Daily L3 Global 500m Grid. Version 5. Boulder, Colorado
USA: NASA National Snow and Ice Data Center Distributed Active
Archive Center.

- DOI：10.5067/63NQASRDPDB0

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
