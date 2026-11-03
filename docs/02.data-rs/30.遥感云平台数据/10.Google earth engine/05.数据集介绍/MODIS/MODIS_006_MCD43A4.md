---
title: "MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/23f81408/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "brdf"
  - "daily"
  - "global"
  - "modis"
  - "nasa"
  - "reflectance"
  - "satellite-imagery"
  - "usgs"
---

# MCD43A4.006 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MCD43A4 V6 Nadir Bidirectional Reflectance Distribution
Function Adjusted Reflectance (NBAR) product provides 500 meter
reflectance data of the MODIS \"land\" bands 1-7. These are adjusted
using a bidirectional reflectance distribution function to model
the values as if they were collected from a nadir view.  The data
are produced daily based on a 16-day retrieval period, with the
image's date occurring on the 9th day. This product combines data
from both the Terra and Aqua spacecrafts, choosing the best representative
pixel from the 16-day period.

Documentation:

* [User's Guide](https://www.umb.edu/spectralmass/terra_aqua_modis/v006)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/97/MCD43_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MCD43A4)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MCD43A4`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-24 至 2023-02-10
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：albedo, brdf, daily, global, modis, nasa, reflectance, satellite-imagery, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Nadir_Reflectance_Band1 | NBAR at local solar noon for band 1 | 500 | 620-670nm |
| Nadir_Reflectance_Band2 | NBAR at local solar noon for band 2 | 500 | 841-876nm |
| Nadir_Reflectance_Band3 | NBAR at local solar noon for band 3 | 500 | 459-479nm |
| Nadir_Reflectance_Band4 | NBAR at local solar noon for band 4 | 500 | 545-565nm |
| Nadir_Reflectance_Band5 | NBAR at local solar noon for band 5 | 500 | 1230-1250nm |
| Nadir_Reflectance_Band6 | NBAR at local solar noon for band 6 | 500 | 1628-1652nm |
| Nadir_Reflectance_Band7 | NBAR at local solar noon for band 7 | 500 | 2105-2155nm |
| BRDF_Albedo_Band_Mandatory_Quality_Band1 | BRDF albedo mandatory quality for band 1 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band2 | BRDF albedo mandatory quality for band 2 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band3 | BRDF albedo mandatory quality for band 3 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band4 | BRDF albedo mandatory quality for band 4 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band5 | BRDF albedo mandatory quality for band 5 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band6 | BRDF albedo mandatory quality for band 6 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band7 | BRDF albedo mandatory quality for band 7 | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/006/MCD43A4');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A4
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD43A4.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
