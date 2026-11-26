---
title: "TEMPO 格网臭氧总柱 V03（临时）[已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/611f8aee/
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

# TEMPO 格网臭氧总柱 V03（临时）[已弃用]

英文原名：TEMPO gridded ozone total column V03 (PROVISIONAL) [deprecated]

## 这是什么数据

TEMPO 格网臭氧总柱 V03（临时）是一个三级数据集，在北美规则格网上提供基本的总臭氧柱信息。数据由 IS-40e 平台上的 TEMPO 仪器生成，通过使用面积加权方法组合并重格网单个东西扫描周期的二级文件创建。这些测量对监测大陆空气质量与大气化学至关重要，由 NASA 兰利研究中心（LaRC）ASDC 分发。

此三级产品是二级数据的质量控制版本，预过滤为仅包括最高质量的反演。具体而言，它包括质量标志为 0、太阳与观测天顶角（SZA/VZA）低于 80°、有效云分数低于 0.5 的像元。

本数据集包括辅助测量，如有效与辐射云特性、二氧化硫指数与地形气压。这些参数支持广泛的研究应用，同时确保用户能获得已经筛除常见反演异常与极端几何的研究就绪数据。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：北美；时间范围：2023 年至 2025 年；分辨率：2,226 米。
- 时间范围：2023-08-02 至 2025-09-16

## 分辨率与规格

- 空间分辨率：约 2,226 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| relative_azimuth_angle | 相对方位角。 | 2226 |  |
| solar_zenith_angle | 太阳天顶角。 | 2226 |  |
| viewing_zenith_angle | 观测天顶角。 | 2226 |  |
| column_amount_o3 | 总臭氧柱。 | 2226 |  |
| fc | 有效云分数（混合 LER 模式）。 | 2226 |  |
| o3_below_cloud | 云下臭氧浓度。 | 2226 |  |
| radiative_cloud_frac | 辐射云分数。 | 2226 |  |
| so2_index | 二氧化硫指数。 | 2226 |  |
| uv_aerosol_index | UV 气溶胶指数。 | 2226 |  |
| max_column_sample | 最大柱样本。 | 2226 |  |
| min_column_sample | 最小柱样本。 | 2226 |  |
| num_column_samples | 柱样本数。 | 2226 |  |
| cloud_pressure | 云气压。 | 2226 |  |
| terrain_height | 地形高度。 | 2226 |  |
| terrain_pressure | 地形气压。 | 2226 |  |
| weight | 二级像元重叠面积之和，表示每个格网单元内有效数据的总空间覆盖。它作为计算格网平均的权重因子，较低值指示部分覆盖或因质量过滤移除的数据。 | 2226 |  |

## 能拿来做什么

- 空气质量监测
- 痕量气体柱浓度反演
- 大气污染研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/TEMPO/O3_L3_QA');
```

- 数据集编号（Earth Engine ID）：`NASA/TEMPO/O3_L3_QA`
- 提供方：NASA ASDC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_TEMPO_O3_L3_QA
* [User's Guide](https://asdc.larc.nasa.gov/documents/tempo/guide/TEMPO_Level-2-3_O3TOT_user_guide_V2.0.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://asdc.larc.nasa.gov/documents/tempo/TEMPO_O3TOT_Algorithm_description_V2.0.pdf)
* [General Documentation](https://asdc.larc.nasa.gov/project/TEMPO)

## 许可与引用

- 许可：proprietary
- 关键词：air-quality, nasa, ozone, pollution, satellite-imagery, tempo, tropomi
- 数据引用：NASA/LARC/SD/ASDC.(2024). TEMPO gridded ozone total column V03 (PROVISIONAL)
[Data set]. NASA Langley Atmospheric Science Data Center DAAC.
Retrieved from [10.5067/IS-40e/TEMPO/O3TOT_L3.003](https://doi.org/10.5067/IS-40e/TEMPO/O3TOT_L3.003)

- DOI：10.5067/IS-40e/TEMPO/O3TOT_L3.003

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [TEMPO gridded HCHO (QA filtered) vertical columns V04](/pages/cefdcd3d/)
- [TEMPO gridded HCHO vertical columns V04](/pages/8d56a30a/)
- [TEMPO gridded NO2 (QA filtered) tropospheric and stratospheric columns V04](/pages/1239d51f/)
- [TEMPO gridded NO2 tropospheric and stratospheric columns V04](/pages/0407e6fe/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
