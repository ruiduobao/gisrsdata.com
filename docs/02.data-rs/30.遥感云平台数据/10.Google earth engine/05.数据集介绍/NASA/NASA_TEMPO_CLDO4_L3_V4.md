---
title: "TEMPO 格网云分数与气压（O2-O2 二聚体）V04（临时）"
date: 2026-11-03 12:00:00
permalink: /pages/052929b1/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "air-quality"
  - "cloud"
  - "nasa"
  - "pollution"
  - "satellite-imagery"
  - "tempo"
---

# TEMPO 格网云分数与气压（O2-O2 二聚体）V04（临时）

英文原名：TEMPO gridded cloud fraction and pressure (O2-O2 dimer) V04 (PROVISIONAL)

## 这是什么数据

TEMPO 三级云产品（O2-O2 二聚体）提供格网云分数与云气压数据。这些参数源自 477 nm 附近的 O2-O2 吸收带，对空气质量反演与大气监测至关重要。数据通过使用面积加权方法组合并重格网单个东西扫描周期的二级文件创建。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：北美（TEMPO 视场）；时间范围：2023 年至 2026 年；分辨率：2,226 米。
- 时间范围：2023-08-02 至 2026-11-01

## 分辨率与规格

- 空间分辨率：约 2,226 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| weight | 二级像元重叠面积之和。表示每个格网单元的权重因子，指示格网单元面积中有效数据的分数。 | 2226 |  |
| relative_azimuth_angle | 像元中心相对方位角。 | 2226 |  |
| solar_zenith_angle | 像元中心太阳天顶角。 | 2226 |  |
| viewing_zenith_angle | 像元中心观测天顶角。 | 2226 |  |
| cloud_fraction | 源自 O2-O2 吸收的云分数。 | 2226 |  |
| cloud_pressure | 源自 O2-O2 吸收的云顶气压。 | 2226 |  |
| CloudRadianceFraction440 | 440 nm 云辐射分数。 | 2226 |  |
| CloudRadianceFraction466 | 466 nm 云辐射分数。 | 2226 |  |
| GLER440 | 440 nm 几何依赖朗伯等效反射率。 | 2226 |  |
| GLER466 | 466 nm 几何依赖朗伯等效反射率。 | 2226 |  |
| surface_pressure | 地表气压。 | 2226 |  |

## 能拿来做什么

- 空气质量监测
- 痕量气体柱浓度反演
- 大气污染研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/TEMPO/CLDO4_L3_V4');
```

- 数据集编号（Earth Engine ID）：`NASA/TEMPO/CLDO4_L3_V4`
- 提供方：NASA ASDC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_TEMPO_CLDO4_L3_V4
* [User's Guide](https://asdc.larc.nasa.gov/documents/tempo/guide/TEMPO_Level-2-3_trace_gas_clouds_user_guide_V1.2.pdf)
* [General Documentation](https://asdc.larc.nasa.gov/project/TEMPO)

## 许可与引用

- 许可：proprietary
- 关键词：air-quality, cloud, nasa, pollution, satellite-imagery, tempo
- 数据引用：NASA/LARC/SD/ASDC.(2025). TEMPO gridded cloud fraction and pressure (O2-O2 dimer) V04 (PROVISIONAL)
[Data set]. NASA Langley Atmospheric Science Data Center DAAC.
Retrieved from [10.5067/IS-40e/TEMPO/CLDO4_L3.004](https://doi.org/10.5067/IS-40e/TEMPO/CLDO4_L3.004)

- DOI：10.5067/IS-40e/TEMPO/CLDO4_L3.004

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [TEMPO gridded HCHO (QA filtered) vertical columns V04](/pages/cefdcd3d/)
- [TEMPO gridded HCHO vertical columns V04](/pages/8d56a30a/)
- [TEMPO gridded NO2 (QA filtered) tropospheric and stratospheric columns V04](/pages/1239d51f/)
- [TEMPO gridded NO2 tropospheric and stratospheric columns V04](/pages/0407e6fe/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
