---
title: "MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m"
date: 2026-11-03 12:00:00
permalink: /pages/cc1794f9/
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
  - "quality"
  - "reflectance"
  - "satellite-imagery"
  - "usgs"
---

# MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m

## 数据集简介

The MCD43A2 V6.1 Bidirectional Reflectance Distribution
Function and Albedo (BRDF/Albedo) Quality dataset is a 500 meter
daily 16-day product. It contains all the quality information
for the corresponding 16-day MCD43A3 Albedo and the MCD43A4 Nadir-BRDF
(NBAR) products.

The MCD43A2 contains individual band quality
and observation information for the MODIS land bands
1-7, along with the overall BRDF/Albedo quality information.

See
[dataset user guide](https://www.umb.edu/spectralmass/terra_aqua_modis/v006/mcd43a2_albedo_product)
for more information.

Documentation:

* [User's Guide](https://www.umb.edu/spectralmass/terra_aqua_modis/v006)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/97/MCD43_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MCD43A2)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MCD43A2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-24 至 2026-10-25
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：albedo, brdf, daily, global, modis, nasa, quality, reflectance, satellite-imagery, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Snow_BRDF_Albedo | Snow-free or snow BRDF/albedo retrieved | 500 |  |
| BRDF_Albedo_Platform | BRDF albedo platform information | 500 |  |
| BRDF_Albedo_LandWaterType | Land/water type | 500 |  |
| BRDF_Albedo_LocalSolarNoon | Solar zenith angle of local solar noon | 500 |  |
| BRDF_Albedo_ValidObs_Band1 | Valid observation for band 1 | 500 |  |
| BRDF_Albedo_ValidObs_Band2 | Valid observation for band 2 (same bit meaning as in band 1) | 500 |  |
| BRDF_Albedo_ValidObs_Band3 | Valid observation for band 3 (same bit meaning as in band 1) | 500 |  |
| BRDF_Albedo_ValidObs_Band4 | Valid observation for band 4 (same bit meaning as in band 1) | 500 |  |
| BRDF_Albedo_ValidObs_Band5 | Valid observation for band 5 (same bit meaning as in band 1) | 500 |  |
| BRDF_Albedo_ValidObs_Band6 | Valid observation for band 6 (same bit meaning as in band 1) | 500 |  |
| BRDF_Albedo_ValidObs_Band7 | Valid observation for band 7 (same bit meaning as in band 1) | 500 |  |
| BRDF_Albedo_Band_Quality_Band1 | BRDF inversion information for band 1 | 500 |  |
| BRDF_Albedo_Band_Quality_Band2 | BRDF inversion information for band 2 | 500 |  |
| BRDF_Albedo_Band_Quality_Band3 | BRDF inversion information for band 3 | 500 |  |
| BRDF_Albedo_Band_Quality_Band4 | BRDF inversion information for band 4 | 500 |  |
| BRDF_Albedo_Band_Quality_Band5 | BRDF inversion information for band 5 | 500 |  |
| BRDF_Albedo_Band_Quality_Band6 | BRDF inversion information for band 6 | 500 |  |
| BRDF_Albedo_Band_Quality_Band7 | BRDF inversion information for band 7 | 500 |  |
| BRDF_Albedo_Uncertainty | BRDF inversion information | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MCD43A2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD43A2
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD43A2.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
