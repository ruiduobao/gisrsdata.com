---
title: "MCD43A1.005 BRDF-Albedo Model Parameters 16-Day L3 Global 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/93efe7d4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "albedo"
  - "brdf"
  - "global"
  - "mcd43a1"
  - "modis"
  - "reflectance"
  - "satellite-imagery"
  - "usgs"
---

# MCD43A1.005 BRDF-Albedo Model Parameters 16-Day L3 Global 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MODerate-resolution Imaging Spectroradiometer
(MODIS) BRDF/Albedo Model Parameters product (MCD43A1) contains datasets
providing users with weighting parameters for the models used to derive the
Albedo and BRDF products (MCD43A3 and MCD43A4). The models support the spatial
relationship and parameter characterization best describing the differences in
radiation due to the scattering (anisotropy) of each pixel, relying on
multi-date, atmospherically corrected, cloud-cleared input data measured over
16-day periods. Both Terra and Aqua data are used in the generation of this
product, providing the highest probability for quality input data and
designating it as an MCD, meaning Combined, product.

Version-5 MODIS/Terra+Aqua BRDF/Albedo
products are Validated Stage 1, meaning that accuracy has been
estimated using a small number of independent measurements obtained
from selected locations and time periods and ground-truth/field
program efforts. Although there may be later improved versions, these
data are ready for use in scientific publications.

Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data) for information on citing LP DAAC datasets.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/MCD43A1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-18 至 2017-03-14
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：16-day, albedo, brdf, global, mcd43a1, modis, reflectance, satellite-imagery, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BRDF_Albedo_Parameters_Band1_iso | BDRF/Albedo isotropic parameter for band 1 | 500 | 620-670nm |
| BRDF_Albedo_Parameters_Band1_vol | BDRF/Albedo volumetric parameter for band 1 | 500 | 620-670nm |
| BRDF_Albedo_Parameters_Band1_geo | BDRF/Albedo geometric parameter for band 1 | 500 | 620-670nm |
| BRDF_Albedo_Parameters_Band2_iso | BDRF/Albedo isotropic parameter for band 2 | 500 | 841-876nm |
| BRDF_Albedo_Parameters_Band2_vol | BDRF/Albedo volumetric parameter for band 2 | 500 | 841-876nm |
| BRDF_Albedo_Parameters_Band2_geo | BDRF/Albedo geometric parameter for band 2 | 500 | 841-876nm |
| BRDF_Albedo_Parameters_Band3_iso | BDRF/Albedo isotropic parameter for band 3 | 500 | 459-479nm |
| BRDF_Albedo_Parameters_Band3_vol | BDRF/Albedo volumetric parameter for band 3 | 500 | 459-479nm |
| BRDF_Albedo_Parameters_Band3_geo | BDRF/Albedo geometric parameter for band 3 | 500 | 459-479nm |
| BRDF_Albedo_Parameters_Band4_iso | BDRF/Albedo isotropic parameter for band 4 | 500 | 545-565nm |
| BRDF_Albedo_Parameters_Band4_vol | BDRF/Albedo volumetric parameter for band 4 | 500 | 545-565nm |
| BRDF_Albedo_Parameters_Band4_geo | BDRF/Albedo geometric parameter for band 4 | 500 | 545-565nm |
| BRDF_Albedo_Parameters_Band5_iso | BDRF/Albedo isotropic parameter for band 5 | 500 | 1230-1250nm |
| BRDF_Albedo_Parameters_Band5_vol | BDRF/Albedo volumetric parameter for band 5 | 500 | 1230-1250nm |
| BRDF_Albedo_Parameters_Band5_geo | BDRF/Albedo geometric parameter for band 5 | 500 | 1230-1250nm |
| BRDF_Albedo_Parameters_Band6_iso | BDRF/Albedo isotropic parameter for band 6 | 500 | 1628-1652nm |
| BRDF_Albedo_Parameters_Band6_vol | BDRF/Albedo volumetric parameter for band 6 | 500 | 1628-1652nm |
| BRDF_Albedo_Parameters_Band6_geo | BDRF/Albedo geometric parameter for band 6 | 500 | 1628-1652nm |
| BRDF_Albedo_Parameters_Band7_iso | BDRF/Albedo isotropic parameter for band 7 | 500 | 2105-2155nm |
| BRDF_Albedo_Parameters_Band7_vol | BDRF/Albedo volumetric parameter for band 7 | 500 | 2105-2155nm |
| BRDF_Albedo_Parameters_Band7_geo | BDRF/Albedo geometric parameter for band 7 | 500 | 2105-2155nm |
| BRDF_Albedo_Parameters_vis_iso | BDRF/Albedo isotropic parameter for the visible band | 500 |  |
| BRDF_Albedo_Parameters_vis_vol | BDRF/Albedo volumetric parameter for the visible band | 500 |  |
| BRDF_Albedo_Parameters_vis_geo | BDRF/Albedo geometric parameter for the visible band | 500 |  |
| BRDF_Albedo_Parameters_nir_iso | BDRF/Albedo isotropic parameter for the NIR band | 500 | 858nm |
| BRDF_Albedo_Parameters_nir_vol | BDRF/Albedo volumetric parameter for the NIR band | 500 | 858nm |
| BRDF_Albedo_Parameters_nir_geo | BDRF/Albedo geometric parameter for the NIR band | 500 | 858nm |
| BRDF_Albedo_Parameters_shortwave_iso | BDRF/Albedo isotropic parameter for the shortwave band | 500 |  |
| BRDF_Albedo_Parameters_shortwave_vol | BDRF/Albedo volumetric parameter for the shortwave band | 500 |  |
| BRDF_Albedo_Parameters_shortwave_geo | BDRF/Albedo geometric parameter for the shortwave band | 500 |  |
| BRDF_Shape_Indicators_ANIF | Anisotropic Index | 500 |  |
| BRDF_Shape_Indicators_AFX | Anisotropic Flat Index | 500 |  |
| BRDF_Shape_Indicators_NDAX | Normalized Difference Anisotropic Index | 500 |  |
| BRDF_Shape_Indicators_SSI | Snow Shape Index | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/MCD43A1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
