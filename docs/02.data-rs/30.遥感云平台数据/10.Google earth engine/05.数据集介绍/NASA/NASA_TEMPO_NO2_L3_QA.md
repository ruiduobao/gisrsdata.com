---
title: "TEMPO 格网 NO2（QA 过滤）对流层与平流层柱 V03 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/24aba3ee/
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

# TEMPO 格网 NO2（QA 过滤）对流层与平流层柱 V03 [已弃用]

英文原名：TEMPO gridded NO2 (QA filtered) tropospheric and stratospheric columns V03 [deprecated]

## 这是什么数据

二氧化氮三级文件在覆盖标称 TEMPO 观测的 TEMPO 视场的规则格网上提供痕量气体信息。三级文件通过组合构成一个 TEMPO 东西扫描周期的所有二级文件的信息导出。栅格包含对流层、平流层与总二氧化氮垂直柱、用于气团因子与平流层/对流层分离计算的辅助数据，以及反演质量标志的信息。重格网算法使用面积加权方法。

QA 过滤的 TEMPO NO2 L3 数据集是原始数据的质量控制版本。它通过移除高云覆盖（>50%）、极端太阳天顶角（>80 度）与主数据质量（标志 > 0）的数据点生成。

* 本数据集未应用 QA 过滤的版本可作为 [NASA/TEMPO/NO2_L3](NASA_TEMPO_NO2_L3) 获得
* [通用文档](https://asdc.larc.nasa.gov/documents/tempo/guide/TEMPO_Level-2-3_trace_gas_clouds_user_guide_V1.2.pdf)

## 覆盖范围与时间

- 覆盖范围：覆盖范围：北美（TEMPO 视场）；时间范围：2023 年至 2025 年；分辨率：2,226 米。
- 时间范围：2023-08-01 至 2025-09-16

## 分辨率与规格

- 空间分辨率：约 2,226 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| weight | 二级像元重叠面积之和。表示每个格网单元的权重因子，指示格网单元面积中有效数据的分数。 | 2226 |  |
| vertical_column_troposphere | NO2 对流层垂直柱。 | 2226 |  |
| vertical_column_troposphere_uncertainty | NO2 对流层垂直柱不确定性。 | 2226 |  |
| vertical_column_stratosphere | NO2 平流层垂直柱不确定性。 | 2226 |  |
| main_data_quality_flag | 主数据质量标志，始终为 0，指示数据质量良好。 | 2226 |  |
| num_vertical_column_troposphere_samples | 为三级格网的对流层垂直柱贡献的二级像元值数量。 | 2226 |  |
| min_vertical_column_troposphere_sample | 为三级格网的对流层垂直柱贡献的最小二级像元值。 | 2226 |  |
| max_vertical_column_troposphere_sample | 为三级格网的对流层垂直柱贡献的最大二级像元值。 | 2226 |  |
| num_vertical_column_troposphere_uncertainty_samples | 为三级格网的对流层垂直柱不确定性贡献的二级像元值数量。 | 2226 |  |
| min_vertical_column_troposphere_uncertainty_sample | 为三级格网的对流层垂直柱不确定性贡献的最小二级像元值。 | 2226 |  |
| max_vertical_column_troposphere_uncertainty_sample | 为三级格网的对流层垂直柱不确定性贡献的最大二级像元值。 | 2226 |  |
| num_vertical_column_stratosphere_samples | 为三级格网的平流层垂直柱贡献的二级像元值数量。 | 2226 |  |
| min_vertical_column_stratosphere_sample | 为三级格网的平流层垂直柱贡献的最小二级像元值。 | 2226 |  |
| max_vertical_column_stratosphere_sample | 为三级格网的平流层垂直柱贡献的最大二级像元值。 | 2226 |  |
| num_vertical_column_total_samples | 为三级格网的总垂直柱贡献的二级像元值数量。 | 2226 |  |
| min_vertical_column_total_sample | 为三级格网的总垂直柱贡献的最小二级像元值。 | 2226 |  |
| max_vertical_column_total_sample | 为三级格网的总垂直柱贡献的最大二级像元值。 | 2226 |  |
| solar_zenith_angle | 数据经过滤，仅包括太阳天顶角小于或等于 80 度的观测。 | 2226 |  |
| viewing_zenith_angle | 像元中心观测天顶角。 | 2226 |  |
| relative_azimuth_angle | 像元中心相对方位角。 | 2226 |  |
| vertical_column_total | NO2 垂直柱。 | 2226 |  |
| vertical_column_total_uncertainty | NO2 垂直柱不确定性。 | 2226 |  |
| surface_pressure | 地表气压。 | 2226 |  |
| terrain_height | 地形高度。 | 2226 |  |
| snow_ice_fraction | 被雪与/或冰覆盖的像元面积分数。 | 2226 |  |
| fitted_slant_column | NO2 拟合斜柱。 | 2226 |  |
| fitted_slant_column_uncertainty | NO2 拟合斜柱不确定性。 | 2226 |  |
| albedo | 地表反照率。 | 2226 |  |
| tropopause_pressure | 对流层顶气压。 | 2226 |  |
| amf_total | NO2 气团因子。 | 2226 |  |
| eff_cloud_fraction | 数据经过滤，仅包括有效云分数小于或等于 50% 的观测。 | 2226 |  |
| amf_cloud_fraction | AMF 计算的云辐射分数。 | 2226 |  |
| amf_cloud_pressure | AMF 计算的云气压。 | 2226 |  |
| amf_troposphere | NO2 对流层气团因子。 | 2226 |  |
| amf_stratosphere | NO2 平流层气团因子。 | 2226 |  |

## 能拿来做什么

- 空气质量监测
- 痕量气体柱浓度反演
- 大气污染研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/TEMPO/NO2_L3_QA');
```

- 数据集编号（Earth Engine ID）：`NASA/TEMPO/NO2_L3_QA`
- 提供方：QA Filtered: Google and NASA ASDC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_TEMPO_NO2_L3_QA

## 许可与引用

- 许可：proprietary
- 关键词：air-quality, nasa, nitrogen-dioxide, pollution, satellite-imagery, tempo, tropomi
- 数据引用：NASA/LARC/SD/ASDC. (n.d.). TEMPO gridded NO2 tropospheric and
stratospheric columns V03 (PROVISIONAL) [Data set]. NASA Langley
Atmospheric Science Data Center DAAC.
Retrieved from https://doi.org/10.5067/IS-40e/TEMPO/NO2_L3.003


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [TEMPO gridded HCHO (QA filtered) vertical columns V04](/pages/cefdcd3d/)
- [TEMPO gridded HCHO vertical columns V04](/pages/8d56a30a/)
- [TEMPO gridded NO2 (QA filtered) tropospheric and stratospheric columns V04](/pages/1239d51f/)
- [TEMPO gridded NO2 tropospheric and stratospheric columns V04](/pages/0407e6fe/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
