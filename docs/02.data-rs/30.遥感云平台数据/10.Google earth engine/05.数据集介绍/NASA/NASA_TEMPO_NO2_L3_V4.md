---
title: "TEMPO gridded NO2 tropospheric and stratospheric columns V04"
date: 2026-11-03 12:00:00
permalink: /pages/0407e6fe/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "air-quality"
  - "nasa"
  - "nitrogen-dioxide"
  - "pollution"
  - "satellite-imagery"
  - "tempo"
  - "tropomi"
---

# TEMPO gridded NO2 tropospheric and stratospheric columns V04

## 数据集简介

Nitrogen dioxide Level 3 files provide trace gas information on a
regular grid covering the TEMPO field of regard for nominal TEMPO
observations. Level 3 files are derived by combining information from
all Level 2 files constituting a TEMPO East-West scan cycle. The
rasters contain information on tropospheric, stratospheric and total
nitrogen dioxide vertical columns, ancillary data used in air mass
factor and stratospheric/tropospheric separation calculations, and
retrieval quality flags. The re-gridding algorithm uses an area-weighted
approach.

* A version of this dataset with QA filters applied is available as [NASA/TEMPO/NO2_L3_V4_QA](NASA_TEMPO_NO2_L3_V4_QA)
* [General Documentation](https://asdc.larc.nasa.gov/documents/tempo/guide/TEMPO_Level-2-3_trace_gas_clouds_user_guide_V1.2.pdf)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/TEMPO/NO2_L3_V4`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA ASDC、Google Earth Engine
- 时间范围：2023-08-01 至 2026-11-02
- 空间分辨率：2226 米
- 许可：proprietary
- 关键词：air-quality, nasa, nitrogen-dioxide, pollution, satellite-imagery, tempo, tropomi

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| weight | Sum of Level 2 pixel overlap areas. Represents the weighting factor for each grid cell, indicating the fraction of the grid cell area with valid data.  | 2226 |  |
| vertical_column_troposphere | NO2 troposphere vertical column | 2226 |  |
| vertical_column_troposphere_uncertainty | NO2 troposphere vertical column uncertainty  | 2226 |  |
| vertical_column_stratosphere | NO2 stratosphere vertical column uncertainty  | 2226 |  |
| main_data_quality_flag | Main data quality flag. Provides an overall assessment of the data quality  | 2226 |  |
| num_vertical_column_troposphere_samples | Number of Level 2 pixel values contributing to Level 3 grid for the tropospheric vertical column.  | 2226 |  |
| min_vertical_column_troposphere_sample | Smallest Level 2 pixel values contributing to Level 3 grid for the tropospheric vertical column.  | 2226 |  |
| max_vertical_column_troposphere_sample | Largest Level 2 pixel values contributing to Level 3 grid for the tropospheric vertical column.  | 2226 |  |
| num_vertical_column_troposphere_uncertainty_samples | Number of Level 2 pixel values contributing to Level 3 grid for the tropospheric vertical column uncertainty.  | 2226 |  |
| min_vertical_column_troposphere_uncertainty_sample | Smallest Level 2 pixel values contributing to Level 3 grid for the tropospheric vertical column uncertainty.  | 2226 |  |
| max_vertical_column_troposphere_uncertainty_sample | Largest Level 2 pixel values contributing to Level 3 grid for the tropospheric vertical column uncertainty.  | 2226 |  |
| num_vertical_column_stratosphere_samples | Number of Level 2 pixel values contributing to Level 3 grid for the stratospheric vertical column.  | 2226 |  |
| min_vertical_column_stratosphere_sample | Smallest Level 2 pixel values contributing to Level 3 grid for the stratospheric vertical column.  | 2226 |  |
| max_vertical_column_stratosphere_sample | Largest Level 2 pixel values contributing to Level 3 grid for the stratospheric vertical column.  | 2226 |  |
| num_vertical_column_total_samples | Number of Level 2 pixel values contributing to Level 3 grid for the total vertical column.  | 2226 |  |
| min_vertical_column_total_sample | Smallest Level 2 pixel values contributing to Level 3 grid for the total vertical column.  | 2226 |  |
| max_vertical_column_total_sample | Largest Level 2 pixel values contributing to Level 3 grid for the total vertical column.  | 2226 |  |
| solar_zenith_angle | Solar zenith angle at pixel center | 2226 |  |
| viewing_zenith_angle | Viewing zenith angle at pixel center | 2226 |  |
| relative_azimuth_angle | Relative azimuth angle at pixel center | 2226 |  |
| vertical_column_total | NO2 vertical column | 2226 |  |
| vertical_column_total_uncertainty | NO2 vertical column uncertainty | 2226 |  |
| surface_pressure | Surface pressure | 2226 |  |
| terrain_height | Terrain height | 2226 |  |
| snow_ice_fraction | Fraction of pixel area covered by snow and/or ice  | 2226 |  |
| fitted_slant_column | NO2 fitted slant column | 2226 |  |
| fitted_slant_column_uncertainty | NO2 fitted slant column uncertainty | 2226 |  |
| albedo | Surface albedo | 2226 |  |
| tropopause_pressure | Tropopause pressure | 2226 |  |
| amf_total | NO2 air mass factor | 2226 |  |
| eff_cloud_fraction | Effective cloud fraction | 2226 |  |
| amf_cloud_fraction | Cloud radiance fraction for AMF calculation  | 2226 |  |
| amf_cloud_pressure | Cloud pressure for AMF calculation | 2226 |  |
| amf_troposphere | NO2 troposphere air mass factor | 2226 |  |
| amf_stratosphere | NO2 stratosphere air mass factor | 2226 |  |
| pbl_height | Planetary boundary layer height | 2226 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/TEMPO/NO2_L3_V4');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_TEMPO_NO2_L3_V4
- 数据引用：NASA/LARC/SD/ASDC. (n.d.). TEMPO gridded NO2 tropospheric and
stratospheric columns V04 (PROVISIONAL) [Data set]. NASA Langley
Atmospheric Science Data Center DAAC.
Retrieved from https://doi.org/10.5067/IS-40e/TEMPO/NO2_L3.004


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
