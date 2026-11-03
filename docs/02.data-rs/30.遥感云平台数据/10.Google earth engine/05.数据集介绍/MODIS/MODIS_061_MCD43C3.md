---
title: "MCD43C3.061 BRDF/Albedo Daily L3 0.05 Deg CMG"
date: 2026-11-03 12:00:00
permalink: /pages/01c5662d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "black-sky"
  - "brdf"
  - "daily"
  - "global"
  - "modis"
  - "nasa"
  - "satellite-imagery"
  - "usgs"
  - "white-sky"
---

# MCD43C3.061 BRDF/Albedo Daily L3 0.05 Deg CMG

## 数据集简介

The MCD43C3 Version 6.1
Bidirectional Reflectance Distribution Function and Albedo (BRDF/Albedo) Albedo
dataset is produced daily using 16 days of Terra and Aqua MODIS data in a 0.05
degree (5,600 meters at the equator) Climate Modeling Grid (CMG). Data are
temporally weighted to the ninth day of the retrieval period which is reflected
in the Julian date in the file name. This CMG product covers the entire globe
for use in climate simulation models.

MCD43C3 provides black-sky albedo (directional hemispherical reflectance)
and white-sky albedo (bihemispherical reflectance) at local solar noon.
Black-sky albedo and white-sky albedo values are available as a separate layer
for MODIS spectral bands 1 through 7 as well as the visible, near infrared
(NIR), and shortwave bands. Along with the 20 albedo layers are ancillary
layers for quality, local solar noon, percent finer resolution inputs, snow
cover, and uncertainty.

See
[dataset user guide](https://www.umb.edu/spectralmass/terra_aqua_modis/v006/mcd43c3)
for more information.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MCD43C3`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-24 至 2026-10-24
- 空间分辨率：5600 米
- 许可：proprietary
- 关键词：albedo, black-sky, brdf, daily, global, modis, nasa, satellite-imagery, usgs, white-sky

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Albedo_BSA_Band1 | Black-sky albedo for band 1 | 5600 | 620-670nm |
| Albedo_BSA_Band2 | Black-sky albedo for band 2 | 5600 | 841-876nm |
| Albedo_BSA_Band3 | Black-sky albedo for band 3 | 5600 | 459-479nm |
| Albedo_BSA_Band4 | Black-sky albedo for band 4 | 5600 | 545-565nm |
| Albedo_BSA_Band5 | Black-sky albedo for band 5 | 5600 | 1230-1250nm |
| Albedo_BSA_Band6 | Black-sky albedo for band 6 | 5600 | 1628-1652nm |
| Albedo_BSA_Band7 | Black-sky albedo for band 7 | 5600 | 2105-2155nm |
| Albedo_BSA_vis | Black-sky albedo for visible brodband | 5600 |  |
| Albedo_BSA_nir | Black-sky albedo for NIR broadband | 5600 | 858nm |
| Albedo_BSA_shortwave | Black-sky albedo for shortwave broadband | 5600 |  |
| Albedo_WSA_Band1 | White-sky albedo for band 1 | 5600 | 620-670nm |
| Albedo_WSA_Band2 | White-sky albedo for band 2 | 5600 | 841-876nm |
| Albedo_WSA_Band3 | White-sky albedo for band 3 | 5600 | 459-479nm |
| Albedo_WSA_Band4 | White-sky albedo for band 4 | 5600 | 545-565nm |
| Albedo_WSA_Band5 | White-sky albedo for band 5 | 5600 | 1230-1250nm |
| Albedo_WSA_Band6 | White-sky albedo for band 6 | 5600 | 1628-1652nm |
| Albedo_WSA_Band7 | White-sky albedo for band 7 | 5600 | 2105-2155nm |
| Albedo_WSA_vis | White-sky albedo for visible broadband | 5600 |  |
| Albedo_WSA_nir | White-sky albedo for NIR broadband | 5600 | 858nm |
| Albedo_WSA_shortwave | White-sky albedo for shortwave broadband | 5600 |  |
| BRDF_Quality | Global albedo quality | 5600 |  |
| Local_Solar_Noon | Local solar noon zenith angle | 5600 |  |
| Percent_Inputs | Percent of the processed finer resolution data which contributed to this CMG pixel | 5600 |  |
| Percent_Snow | Percent of underlying data flagged as snow | 5600 |  |
| BRDF_Albedo_Uncertainty | BRDF inversion information. Weights of determination (WoD) of the white sky albedo (see Lucht, W., & Lewis, P. (2000). Theoretical noise sensitivity of BRDF and albedo retrieval from the EOS-MODIS and MISR sensors with respect to angular sampling. International Journal of Remote Sensing, 21(1), 81-98). WoDs give a measure of the uncertainty due to the angular sampling of the inputs available for each retrieval.  | 5600 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MCD43C3');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD43C3
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
