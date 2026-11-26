---
title: "TEMPO 格网臭氧廓线 V04（临时）"
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

# TEMPO 格网臭氧廓线 V04（临时）

英文原名：TEMPO gridded ozone profile V04 (PROVISIONAL)

## 这是什么数据

TEMPO 格网臭氧廓线 V04（临时）是一个三级数据集，在北美规则格网上提供垂直臭氧廓线信息。数据由 IS-40e 平台上的 TEMPO 仪器生成，通过使用面积加权方法组合并重格网单个东西扫描周期的二级文件创建。这些测量对监测大气臭氧结构、平流层-对流层交换与大陆空气质量至关重要。

### 多维波段展平

为符合 Earth Engine 的二维影像波段模型，源 NetCDF 文件中的多维变量在摄入时被展平：

*   **平坦层波段：** 包含垂直层维度（24 层，从大气顶的第 `0` 层到近地表的第 `23` 层）的变量被拆为 24 个以 `_0` 至 `_23` 为后缀的独立波段。包括 `ozone_profile`、`ozone_profile_error`、`ozone_profile_precision`、`ozone_apriori_profile`、`ozone_apriori_profile_error`、`ozone_profile_altitude` 与 `ozone_profile_pressure`。

*   **层界（顶/底）波段：** 定义层边界的变量按层索引（`0` 至 `23`）与边界索引（顶界与底界）拆分，产生 48 个以 `_top` 与 `_bottom` 为后缀的波段（如 `_0_top`、`_0_bottom`……`_23_top`、`_23_bottom`）。包括 `ozone_profile_altitude_bounds` 与 `ozone_profile_pressure_bounds`。

### 「顶」与「底」界的空间参考
`_top` 与 `_bottom` 指相对于地球表面的空间高程：
*   **高度**：值随高度增加（`_top` > `_bottom`）。
*   **气压**：值随高度减小（`_top` < `_bottom`）。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：北美；时间范围：2023 年至 2026 年；分辨率：2,226 米。
- 时间范围：2023-08-02 至 2026-11-02

## 分辨率与规格

- 空间分辨率：约 2,226 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| weight | 二级像元重叠面积之和。 | 2226 |  |
| relative_azimuth_angle | 相对方位角。 | 2226 |  |
| solar_zenith_angle | 太阳天顶角。 | 2226 |  |
| viewing_zenith_angle | 观测天顶角。 | 2226 |  |
| stratosphere_ozone_column | 平流层臭氧柱。 | 2226 |  |
| stratosphere_ozone_error | 平流层臭氧柱误差。 | 2226 |  |
| stratosphere_ozone_precision | 平流层臭氧柱精度。 | 2226 |  |
| total_ozone_column | 总臭氧柱。 | 2226 |  |
| total_ozone_error | 总臭氧柱误差。 | 2226 |  |
| total_ozone_precision | 总臭氧柱精度。 | 2226 |  |
| troposphere_ozone_column | 对流层臭氧柱。 | 2226 |  |
| troposphere_ozone_error | 对流层臭氧柱误差。 | 2226 |  |
| troposphere_ozone_precision | 对流层臭氧柱精度。 | 2226 |  |
| eff_cloud_fraction | 有效云分数。 | 2226 |  |
| eff_cloud_pressure | 有效云气压。 | 2226 |  |
| tropopause_index | 对流层顶层索引。 | 2226 |  |
| ozone_profile_0 | 第 0 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_1 | 第 1 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_2 | 第 2 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_3 | 第 3 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_4 | 第 4 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_5 | 第 5 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_6 | 第 6 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_7 | 第 7 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_8 | 第 8 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_9 | 第 9 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_10 | 第 10 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_11 | 第 11 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_12 | 第 12 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_13 | 第 13 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_14 | 第 14 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_15 | 第 15 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_16 | 第 16 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_17 | 第 17 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_18 | 第 18 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_19 | 第 19 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_20 | 第 20 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_21 | 第 21 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_22 | 第 22 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_23 | 第 23 层臭氧廓线分柱（0 为大气顶，23 为近地表）。 | 2226 |  |
| ozone_profile_error_0 | 第 0 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_1 | 第 1 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_2 | 第 2 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_3 | 第 3 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_4 | 第 4 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_5 | 第 5 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_6 | 第 6 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_7 | 第 7 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_8 | 第 8 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_9 | 第 9 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_10 | 第 10 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_11 | 第 11 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_12 | 第 12 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_13 | 第 13 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_14 | 第 14 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_15 | 第 15 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_16 | 第 16 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_17 | 第 17 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_18 | 第 18 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_19 | 第 19 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_20 | 第 20 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_21 | 第 21 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_22 | 第 22 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_error_23 | 第 23 层臭氧廓线分柱误差。 | 2226 |  |
| ozone_profile_precision_0 | 第 0 层臭氧廓线分柱精度。 | 2226 |  |
| ozone_profile_precision_1 | 第 1 层臭氧廓线分柱精度。 | 2226 |  |
| ozone_profile_precision_2 | 第 2 层臭氧廓线分柱精度。 | 2226 |  |
| ozone_profile_precision_3 | 第 3 层臭氧廓线分柱精度。 | 2226 |  |
| ozone_profile_precision_4 | 第 4 层臭氧廓线分柱精度。 | 2226 |  |
| ozone_profile_precision_5 | 第 5 层臭氧廓线分柱精度。 | 2226 |  |
| ozone_profile_precision_6 | 第 6 层臭氧廓线分柱精度。 | 2226 |  |
| ozone_profile_precision_7 | 第 7 层臭氧廓线分柱精度。 | 2226 |  |
| ozone_profile_precision_8 | 第 8 层臭氧廓线分柱精度。 | 2226 |  |
| ozone_profile_precision_9 | 第 9 层臭氧廓线分柱精度。 | 2226 |  |
| ozone_profile_precision_10 | 第 10 层臭氧廓线分柱精度。 | 2226 |  |
| ozone_profile_precision_11 | 第 11 层臭氧廓线分柱精度。 | 2226 |  |
| ozone_profile_precision_12 | 第 12 层臭氧廓线分柱精度。 | 2226 |  |
| ozone_profile_precision_13 | 第 13 层臭氧廓线分柱精度。 | 2226 |  |
| ozone_profile_precision_14 | 第 14 层臭氧廓线分柱精度。 | 2226 |  |
| ozone_profile_precision_15 | 第 15 层臭氧廓线分柱精度。 | 2226 |  |

## 能拿来做什么

- 臭氧廓线监测
- 平流层-对流层交换研究
- 空气质量监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/TEMPO/O3PROF_L3_V4');
```

- 数据集编号（Earth Engine ID）：`NASA/TEMPO/O3PROF_L3_V4`
- 提供方：NASA ASDC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_TEMPO_O3PROF_L3_V4
* [User's Guide](https://asdc.larc.nasa.gov/documents/tempo/guide/TEMPO_Level-2-3_O3PROF_user_guide_V1.1.pdf)
* [General Documentation](https://asdc.larc.nasa.gov/project/TEMPO)

## 许可与引用

- 许可：proprietary
- 关键词：air-quality, nasa, ozone, pollution, satellite-imagery, tempo
- 数据引用：NASA/LARC/SD/ASDC.(2025). TEMPO gridded ozone profile V04 (PROVISIONAL)
[Data set]. NASA Langley Atmospheric Science Data Center DAAC.
Retrieved from [10.5067/IS-40E/TEMPO/O3PROF_L3.004](https://doi.org/10.5067/IS-40E/TEMPO/O3PROF_L3.004)

- DOI：10.5067/IS-40E/TEMPO/O3PROF_L3.004

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [TEMPO gridded HCHO (QA filtered) vertical columns V04](/pages/cefdcd3d/)
- [TEMPO gridded HCHO vertical columns V04](/pages/8d56a30a/)
- [TEMPO gridded NO2 (QA filtered) tropospheric and stratospheric columns V04](/pages/1239d51f/)
- [TEMPO gridded NO2 tropospheric and stratospheric columns V04](/pages/0407e6fe/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
