---
title: "MCD43A1.006 MODIS BRDF-Albedo Model Parameters Daily 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/dba783be/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "brdf"
  - "daily"
  - "global"
  - "mcd43a1"
  - "modis"
  - "nasa"
  - "reflectance"
  - "satellite-imagery"
  - "usgs"
---

# MCD43A1.006 MODIS BRDF-Albedo Model Parameters Daily 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MCD43A1 V6 Bidirectional Reflectance Distribution
Function and Albedo (BRDF/Albedo) Model Parameters dataset is
a 500 meter daily 16-day product. The Julian date represents
the 9th day of the 16-day retrieval period, and consequently
the observations are weighted to estimate the BRDF/Albedo for
that day. The MCD43A1 algorithm, as is with all combined products,
chooses the best representative pixel from a pool that includes
all the acquisitions from both the Terra and Aqua sensors from
the retrieval period.

The MCD43A1 provides the three model
weighting parameters (isotropic, volumetric, and geometric) for
each of the MODIS bands 1 through 7 and the visible (vis), near
infrared (nir), and shortwave bands used to derive the Albedo
and BRDF products (MCD43A3 and MCD43A4). The Mandatory Quality
layers for each of the 10 bands are supplied as well.

See
[dataset user guide](https://www.umb.edu/spectralmass/terra_aqua_modis/v006/mcd43a1_brdif_albedo_model_parameters_product)
for more information.

Documentation:

* [User's Guide](https://www.umb.edu/spectralmass/terra_aqua_modis/v006)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/97/MCD43_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MCD43A1)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MCD43A1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-24 至 2023-02-10
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：albedo, brdf, daily, global, mcd43a1, modis, nasa, reflectance, satellite-imagery, usgs

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
var dataset = ee.ImageCollection('MODIS/006/MCD43A1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD43A1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD43A1.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
