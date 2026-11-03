---
title: "TEMPO gridded ozone total column V04 (PROVISIONAL)"
date: 2026-11-03 12:00:00
permalink: /pages/3f6433d2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "air-quality"
  - "nasa"
  - "ozone"
  - "pollution"
  - "satellite-imagery"
  - "tempo"
  - "tropomi"
---

# TEMPO gridded ozone total column V04 (PROVISIONAL)

## 数据集简介

The TEMPO gridded ozone total column V04 (PROVISIONAL) is a Level 3 dataset
providing essential total column ozone information on a regular grid across
North America. Generated from the TEMPO instrument on the IS-40e platform,
the data is created by combining and re-gridding Level 2 files from single
East-West scan cycles using an area-weighted methodology. These measurements
are critical for monitoring continental air quality and atmospheric
chemistry and are distributed by the NASA Langley Research Center (LaRC)
ASDC.

This Level 3 product serves as a quality-controlled version of the Level 2
data, pre-filtered to include only the highest-quality retrievals.
Specifically, it includes pixels with a quality flag of 0, solar and
viewing zenith angles (SZA/VZA) below 80°, and an effective cloud fraction
under 0.5.

This dataset includes auxiliary measurements such as effective and radiative
cloud properties, sulfur dioxide index, and terrain pressure. These
parameters support a wide range of research applications while ensuring
that users have access to research-ready data that has already been
screened for common retrieval anomalies and extreme geometries.

Documentation:

* [User's Guide](https://asdc.larc.nasa.gov/documents/tempo/guide/TEMPO_Level-2-3_O3TOT_user_guide_V2.0.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://asdc.larc.nasa.gov/documents/tempo/TEMPO_O3TOT_Algorithm_description_V2.0.pdf)

* [General Documentation](https://asdc.larc.nasa.gov/project/TEMPO)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/TEMPO/O3_L3_V4_QA`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA ASDC、Google Earth Engine
- 时间范围：2023-08-02 至 2026-11-02
- 空间分辨率：2226 米
- 许可：proprietary
- 关键词：air-quality, nasa, ozone, pollution, satellite-imagery, tempo, tropomi

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| relative_azimuth_angle | Relative azimuth angle | 2226 |  |
| solar_zenith_angle | Solar zenith angle | 2226 |  |
| viewing_zenith_angle | Viewing zenith angle | 2226 |  |
| column_amount_o3 | Total column ozone | 2226 |  |
| fc | Effective cloud fraction (mixed LER model) | 2226 |  |
| o3_below_cloud | Ozone concentration below cloud | 2226 |  |
| radiative_cloud_frac | Radiative cloud fraction | 2226 |  |
| so2_index | Sulfur dioxide index | 2226 |  |
| uv_aerosol_index | UV aerosol index | 2226 |  |
| max_column_sample | Maximum column sample | 2226 |  |
| min_column_sample | Minimum column sample | 2226 |  |
| num_column_samples | Number of column samples | 2226 |  |
| cloud_pressure | Cloud pressure | 2226 |  |
| terrain_height | Terrain height | 2226 |  |
| terrain_pressure | Terrain pressure | 2226 |  |
| weight | Sum of Level 2 pixel overlap areas, representing the total spatial coverage of valid data within each grid cell. It serves as the weighting factor for calculating the gridded average, where lower values indicate partial coverage or data removed due to quality filtering.  | 2226 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/TEMPO/O3_L3_V4_QA');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_TEMPO_O3_L3_V4_QA
- 数据引用：NASA/LARC/SD/ASDC.(2025). TEMPO gridded ozone total column V04 (PROVISIONAL)
[Data set]. NASA Langley Atmospheric Science Data Center DAAC.
Retrieved from [10.5067/IS-40e/TEMPO/O3TOT_L3.004](https://doi.org/10.5067/IS-40e/TEMPO/O3TOT_L3.004)

- DOI：10.5067/IS-40e/TEMPO/O3TOT_L3.004

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
