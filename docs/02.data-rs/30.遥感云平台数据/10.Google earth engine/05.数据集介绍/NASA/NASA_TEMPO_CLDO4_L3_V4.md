---
title: "TEMPO gridded cloud fraction and pressure (O2-O2 dimer) V04 (PROVISIONAL)"
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

# TEMPO gridded cloud fraction and pressure (O2-O2 dimer) V04 (PROVISIONAL)

## 数据集简介

The TEMPO Level 3 Cloud Product (O2-O2 dimer) provides gridded cloud fraction
and cloud pressure data. These parameters are derived from the O2-O2 absorption
band near 477 nm and are essential for air quality retrievals and atmospheric
monitoring. The data are created by combining and re-gridding Level 2 files
from single East-West scan cycles using an area-weighted methodology.

Documentation:

* [User's Guide](https://asdc.larc.nasa.gov/documents/tempo/guide/TEMPO_Level-2-3_trace_gas_clouds_user_guide_V1.2.pdf)

* [General Documentation](https://asdc.larc.nasa.gov/project/TEMPO)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/TEMPO/CLDO4_L3_V4`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA ASDC、Google Earth Engine
- 时间范围：2023-08-02 至 2026-11-01
- 空间分辨率：2226 米
- 许可：proprietary
- 关键词：air-quality, cloud, nasa, pollution, satellite-imagery, tempo

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| weight | Sum of Level 2 pixel overlap areas. Represents the weighting factor for each grid cell, indicating the fraction of the grid cell area with valid data.  | 2226 |  |
| relative_azimuth_angle | Relative azimuth angle at pixel center | 2226 |  |
| solar_zenith_angle | Solar zenith angle at pixel center | 2226 |  |
| viewing_zenith_angle | Viewing zenith angle at pixel center | 2226 |  |
| cloud_fraction | Cloud fraction derived from O2-O2 absorption | 2226 |  |
| cloud_pressure | Cloud top pressure derived from O2-O2 absorption | 2226 |  |
| CloudRadianceFraction440 | Cloud radiance fraction at 440 nm | 2226 |  |
| CloudRadianceFraction466 | Cloud radiance fraction at 466 nm | 2226 |  |
| GLER440 | Geometry-dependent Lambertian Equivalent Reflectivity at 440 nm | 2226 |  |
| GLER466 | Geometry-dependent Lambertian Equivalent Reflectivity at 466 nm | 2226 |  |
| surface_pressure | Surface pressure | 2226 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/TEMPO/CLDO4_L3_V4');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_TEMPO_CLDO4_L3_V4
- 数据引用：NASA/LARC/SD/ASDC.(2025). TEMPO gridded cloud fraction and pressure (O2-O2 dimer) V04 (PROVISIONAL)
[Data set]. NASA Langley Atmospheric Science Data Center DAAC.
Retrieved from [10.5067/IS-40e/TEMPO/CLDO4_L3.004](https://doi.org/10.5067/IS-40e/TEMPO/CLDO4_L3.004)

- DOI：10.5067/IS-40e/TEMPO/CLDO4_L3.004

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
