---
title: "TEMPO gridded ozone profile V04 (PROVISIONAL)"
date: 2026-11-03 12:00:00
permalink: /pages/6be5642d/
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
---

# TEMPO gridded ozone profile V04 (PROVISIONAL)

## 数据集简介

The TEMPO gridded ozone profile V04 (PROVISIONAL) is a Level 3 dataset
providing vertical ozone profile information on a regular grid across
North America. Generated from the TEMPO instrument on the IS-40e platform,
the data is created by combining and re-gridding Level 2 files from single
East-West scan cycles using an area-weighted methodology. These measurements
are critical for monitoring atmospheric ozone structure, stratospheric-tropospheric
exchange, and continental air quality.

### Multi-dimensional Band Flattening
To conform to Earth Engine's 2D image band model, multi-dimensional variables
in the source NetCDF files are flattened during ingestion:

*   **Flat Layer Bands:** Variables containing a vertical layer dimension (24 layers,
    from layer `0` at the top of the atmosphere to layer `23` near the surface)
    are split into 24 individual bands suffixed with `_0` to `_23`. These include
    `ozone_profile`, `ozone_profile_error`, `ozone_profile_precision`,
    `ozone_apriori_profile`, `ozone_apriori_profile_error`, `ozone_profile_altitude`,
    and `ozone_profile_pressure`.

*   **Layer Bounds (Top/Bottom) Bands:** Variables defining the layer boundaries are
    split by both layer index (`0` to `23`) and boundary index (top and bottom bounds),
    resulting in 48 bands suffixed with `_top` and `_bottom` (e.g., `_0_top`, `_0_bottom`
    ... `_23_top`, `_23_bottom`). These include `ozone_profile_altitude_bounds` and
    `ozone_profile_pressure_bounds`.

### Spatial Reference for "Top" and "Bottom" Bounds
`_top` and `_bottom` refer to spatial elevation relative to the Earth's
surface:
*   **Altitude**: Value increases with height (`_top` > `_bottom`).
*   **Pressure**: Value decreases with height (`_top` < `_bottom`).

Documentation:

* [User's Guide](https://asdc.larc.nasa.gov/documents/tempo/guide/TEMPO_Level-2-3_O3PROF_user_guide_V1.1.pdf)

* [General Documentation](https://asdc.larc.nasa.gov/project/TEMPO)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/TEMPO/O3PROF_L3_V4`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA ASDC、Google Earth Engine
- 时间范围：2023-08-02 至 2026-11-02
- 空间分辨率：2226 米
- 许可：proprietary
- 关键词：air-quality, nasa, ozone, pollution, satellite-imagery, tempo

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| weight | Sum of Level 2 pixel overlap areas | 2226 |  |
| relative_azimuth_angle | Relative azimuth angle | 2226 |  |
| solar_zenith_angle | Solar zenith angle | 2226 |  |
| viewing_zenith_angle | Viewing zenith angle | 2226 |  |
| stratosphere_ozone_column | Stratospheric ozone column | 2226 |  |
| stratosphere_ozone_error | Stratospheric ozone column error | 2226 |  |
| stratosphere_ozone_precision | Stratospheric ozone column precision | 2226 |  |
| total_ozone_column | Total ozone column | 2226 |  |
| total_ozone_error | Total ozone column error | 2226 |  |
| total_ozone_precision | Total ozone column precision | 2226 |  |
| troposphere_ozone_column | Tropospheric ozone column | 2226 |  |
| troposphere_ozone_error | Tropospheric ozone column error | 2226 |  |
| troposphere_ozone_precision | Tropospheric ozone column precision | 2226 |  |
| eff_cloud_fraction | Effective cloud fraction | 2226 |  |
| eff_cloud_pressure | Effective cloud pressure | 2226 |  |
| tropopause_index | Tropopause layer index | 2226 |  |
| ozone_profile_0 | Ozone profile partial column for layer 0 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_1 | Ozone profile partial column for layer 1 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_2 | Ozone profile partial column for layer 2 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_3 | Ozone profile partial column for layer 3 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_4 | Ozone profile partial column for layer 4 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_5 | Ozone profile partial column for layer 5 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_6 | Ozone profile partial column for layer 6 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_7 | Ozone profile partial column for layer 7 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_8 | Ozone profile partial column for layer 8 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_9 | Ozone profile partial column for layer 9 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_10 | Ozone profile partial column for layer 10 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_11 | Ozone profile partial column for layer 11 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_12 | Ozone profile partial column for layer 12 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_13 | Ozone profile partial column for layer 13 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_14 | Ozone profile partial column for layer 14 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_15 | Ozone profile partial column for layer 15 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_16 | Ozone profile partial column for layer 16 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_17 | Ozone profile partial column for layer 17 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_18 | Ozone profile partial column for layer 18 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_19 | Ozone profile partial column for layer 19 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_20 | Ozone profile partial column for layer 20 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_21 | Ozone profile partial column for layer 21 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_22 | Ozone profile partial column for layer 22 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_23 | Ozone profile partial column for layer 23 (0 is top of atmosphere, 23 is near surface) | 2226 |  |
| ozone_profile_error_0 | Ozone profile partial column error for layer 0 | 2226 |  |
| ozone_profile_error_1 | Ozone profile partial column error for layer 1 | 2226 |  |
| ozone_profile_error_2 | Ozone profile partial column error for layer 2 | 2226 |  |
| ozone_profile_error_3 | Ozone profile partial column error for layer 3 | 2226 |  |
| ozone_profile_error_4 | Ozone profile partial column error for layer 4 | 2226 |  |
| ozone_profile_error_5 | Ozone profile partial column error for layer 5 | 2226 |  |
| ozone_profile_error_6 | Ozone profile partial column error for layer 6 | 2226 |  |
| ozone_profile_error_7 | Ozone profile partial column error for layer 7 | 2226 |  |
| ozone_profile_error_8 | Ozone profile partial column error for layer 8 | 2226 |  |
| ozone_profile_error_9 | Ozone profile partial column error for layer 9 | 2226 |  |
| ozone_profile_error_10 | Ozone profile partial column error for layer 10 | 2226 |  |
| ozone_profile_error_11 | Ozone profile partial column error for layer 11 | 2226 |  |
| ozone_profile_error_12 | Ozone profile partial column error for layer 12 | 2226 |  |
| ozone_profile_error_13 | Ozone profile partial column error for layer 13 | 2226 |  |
| ozone_profile_error_14 | Ozone profile partial column error for layer 14 | 2226 |  |
| ozone_profile_error_15 | Ozone profile partial column error for layer 15 | 2226 |  |
| ozone_profile_error_16 | Ozone profile partial column error for layer 16 | 2226 |  |
| ozone_profile_error_17 | Ozone profile partial column error for layer 17 | 2226 |  |
| ozone_profile_error_18 | Ozone profile partial column error for layer 18 | 2226 |  |
| ozone_profile_error_19 | Ozone profile partial column error for layer 19 | 2226 |  |
| ozone_profile_error_20 | Ozone profile partial column error for layer 20 | 2226 |  |
| ozone_profile_error_21 | Ozone profile partial column error for layer 21 | 2226 |  |
| ozone_profile_error_22 | Ozone profile partial column error for layer 22 | 2226 |  |
| ozone_profile_error_23 | Ozone profile partial column error for layer 23 | 2226 |  |
| ozone_profile_precision_0 | Ozone profile partial column precision for layer 0 | 2226 |  |
| ozone_profile_precision_1 | Ozone profile partial column precision for layer 1 | 2226 |  |
| ozone_profile_precision_2 | Ozone profile partial column precision for layer 2 | 2226 |  |
| ozone_profile_precision_3 | Ozone profile partial column precision for layer 3 | 2226 |  |
| ozone_profile_precision_4 | Ozone profile partial column precision for layer 4 | 2226 |  |
| ozone_profile_precision_5 | Ozone profile partial column precision for layer 5 | 2226 |  |
| ozone_profile_precision_6 | Ozone profile partial column precision for layer 6 | 2226 |  |
| ozone_profile_precision_7 | Ozone profile partial column precision for layer 7 | 2226 |  |
| ozone_profile_precision_8 | Ozone profile partial column precision for layer 8 | 2226 |  |
| ozone_profile_precision_9 | Ozone profile partial column precision for layer 9 | 2226 |  |
| ozone_profile_precision_10 | Ozone profile partial column precision for layer 10 | 2226 |  |
| ozone_profile_precision_11 | Ozone profile partial column precision for layer 11 | 2226 |  |
| ozone_profile_precision_12 | Ozone profile partial column precision for layer 12 | 2226 |  |
| ozone_profile_precision_13 | Ozone profile partial column precision for layer 13 | 2226 |  |
| ozone_profile_precision_14 | Ozone profile partial column precision for layer 14 | 2226 |  |
| ozone_profile_precision_15 | Ozone profile partial column precision for layer 15 | 2226 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/TEMPO/O3PROF_L3_V4');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_TEMPO_O3PROF_L3_V4
- 数据引用：NASA/LARC/SD/ASDC.(2025). TEMPO gridded ozone profile V04 (PROVISIONAL)
[Data set]. NASA Langley Atmospheric Science Data Center DAAC.
Retrieved from [10.5067/IS-40E/TEMPO/O3PROF_L3.004](https://doi.org/10.5067/IS-40E/TEMPO/O3PROF_L3.004)

- DOI：10.5067/IS-40E/TEMPO/O3PROF_L3.004

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
