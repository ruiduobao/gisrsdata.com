---
title: "MCD43A3.006 MODIS Albedo Daily 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/96c6f8ff/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "black-sky"
  - "daily"
  - "global"
  - "modis"
  - "nasa"
  - "satellite-imagery"
  - "usgs"
  - "white-sky"
---

# MCD43A3.006 MODIS Albedo Daily 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MCD43A3 V6 Albedo Model dataset is a daily 16-day
product. It provides both directional hemispherical reflectance
(black sky albedo) and bihemispherical reflectance (white sky albedo)
for each of the MODIS surface reflectance bands (band 1 through
band 7) as well as 3 broad spectrum bands (visible, near infrared,
and shortwave).  Each 500m/pixel daily image is generated using
16 days of data, centered on the given day.  A quality band is
also provided for each of the 10 albedo bands.

Documentation:

* [User's Guide](https://www.umb.edu/spectralmass/terra_aqua_modis/v006)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/97/MCD43_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MCD43A3)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MCD43A3`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-24 至 2023-02-10
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：albedo, black-sky, daily, global, modis, nasa, satellite-imagery, usgs, white-sky

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Albedo_BSA_Band1 | Black-sky albedo for band 1 | 500 | 620-670nm |
| Albedo_BSA_Band2 | Black-sky albedo for band 2 | 500 | 841-876nm |
| Albedo_BSA_Band3 | Black-sky albedo for band 3 | 500 | 459-479nm |
| Albedo_BSA_Band4 | Black-sky albedo for band 4 | 500 | 545-565nm |
| Albedo_BSA_Band5 | Black-sky albedo for band 5 | 500 | 1230-1250nm |
| Albedo_BSA_Band6 | Black-sky albedo for band 6 | 500 | 1628-1652nm |
| Albedo_BSA_Band7 | Black-sky albedo for band 7 | 500 | 2105-2155nm |
| Albedo_BSA_vis | Black-sky albedo for visible brodband | 500 |  |
| Albedo_BSA_nir | Black-sky albedo for NIR broadband | 500 | 858nm |
| Albedo_BSA_shortwave | Black-sky albedo for shortwave broadband | 500 |  |
| Albedo_WSA_Band1 | White-sky albedo for band 1 | 500 | 620-670nm |
| Albedo_WSA_Band2 | White-sky albedo for band 2 | 500 | 841-876nm |
| Albedo_WSA_Band3 | White-sky albedo for band 3 | 500 | 459-479nm |
| Albedo_WSA_Band4 | White-sky albedo for band 4 | 500 | 545-565nm |
| Albedo_WSA_Band5 | White-sky albedo for band 5 | 500 | 1230-1250nm |
| Albedo_WSA_Band6 | White-sky albedo for band 6 | 500 | 1628-1652nm |
| Albedo_WSA_Band7 | White-sky albedo for band 7 | 500 | 2105-2155nm |
| Albedo_WSA_vis | White-sky albedo for visible broadband | 500 |  |
| Albedo_WSA_nir | White-sky albedo for NIR broadband | 500 | 858nm |
| Albedo_WSA_shortwave | White-sky albedo for shortwave broadband | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band1 | BRDF albedo mandatory quality for band 1 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band2 | BRDF albedo mandatory quality for band 2 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band3 | BRDF albedo mandatory quality for band 3 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band4 | BRDF albedo mandatory quality for band 4 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band5 | BRDF albedo mandatory quality for band 5 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band6 | BRDF albedo mandatory quality for band 6 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_Band7 | BRDF albedo mandatory quality for band 7 | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_vis | BRDF albedo mandatory quality for visible broadband | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_nir | BRDF albedo mandatory quality for NIR broadband | 500 |  |
| BRDF_Albedo_Band_Mandatory_Quality_shortwave | BRDF albedo mandatory quality for shortwave broadband | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/006/MCD43A3');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A3
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD43A3.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
