---
title: "TEMPO gridded HCHO vertical columns V03 [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/be97446c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "air-quality"
  - "formaldehyde"
  - "nasa"
  - "pollution"
  - "satellite-imagery"
  - "tempo"
  - "tropomi"
---

# TEMPO gridded HCHO vertical columns V03 [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

Formaldehyde Level 3 collection provides trace gas information on a
regular grid covering the TEMPO field of regard for nominal TEMPO
observations. Level 3 files are derived by combining information from
all Level 2 files constituting a TEMPO East-West scan cycle. The
rasters contain information on formaldehyde vertical columns,
ancillary data used in air mass factor calculations and reference sector
or de-striping corrections, and retrieval quality flags.
The re-gridding algorithm uses an area-weighted approach.

* A version of this dataset with QA filters applied is available as [NASA/TEMPO/HCHO_L3_QA](NASA_TEMPO_HCHO_L3_QA)
* [General Documentation](https://asdc.larc.nasa.gov/documents/tempo/guide/TEMPO_Level-2-3_trace_gas_clouds_user_guide_V1.2.pdf)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/TEMPO/HCHO_L3`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA ASDC、Google Earth Engine
- 时间范围：2023-08-01 至 2025-09-16
- 空间分辨率：2226 米
- 许可：proprietary
- 关键词：air-quality, formaldehyde, nasa, pollution, satellite-imagery, tempo, tropomi

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| weight | Sum of Level 2 pixel overlap areas. Represents the weighting factor for each grid cell, indicating the fraction of the grid cell area with valid data.  | 2226 |  |
| vertical_column | HCHO vertical column | 2226 |  |
| vertical_column_uncertainty | HCHO vertical column uncertainty  | 2226 |  |
| main_data_quality_flag | Main data quality flag. Provides an overall assessment of the data quality  | 2226 |  |
| num_vertical_column_samples | Number of vertical column samples | 2226 |  |
| min_vertical_column_sample | Smallest vertical column sample | 2226 |  |
| max_vertical_column_sample | Largest vertical column sample | 2226 |  |
| solar_zenith_angle | Solar zenith angle at pixel center | 2226 |  |
| viewing_zenith_angle | Viewing zenith angle at pixel center | 2226 |  |
| relative_azimuth_angle | Relative azimuth angle at pixel center | 2226 |  |
| surface_pressure | Surface pressure | 2226 |  |
| terrain_height | Terrain height | 2226 |  |
| snow_ice_fraction | Fraction of pixel area covered by snow and/or ice  | 2226 |  |
| fitted_slant_column | HCHO fitted slant column | 2226 |  |
| fitted_slant_column_uncertainty | HCHO fitted slant column uncertainty | 2226 |  |
| albedo | Surface albedo | 2226 |  |
| amf | HCHO air mass factor | 2226 |  |
| eff_cloud_fraction | Effective cloud fraction | 2226 |  |
| amf_cloud_fraction | Cloud radiance fraction for AMF calculation  | 2226 |  |
| amf_cloud_pressure | Cloud pressure for AMF calculation | 2226 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/TEMPO/HCHO_L3');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_TEMPO_HCHO_L3
- 数据引用：NASA/LARC/SD/ASDC. (n.d.). TEMPO gridded HCHO vertical columns V03
(PROVISIONAL) [Data set]. NASA Langley
Atmospheric Science Data Center DAAC.
Retrieved from https://doi.org/10.5067/IS-40e/TEMPO/HCHO_L3.003


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
