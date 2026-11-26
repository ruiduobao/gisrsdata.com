---
title: "OPERA Sentinel-1 辐射地形校正 SAR 后向散射静态层 V1.0"
date: 2026-11-03 12:00:00
permalink: /pages/d7f26f8f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "jpl"
  - "nasa"
  - "opera"
  - "sar"
  - "satellite-imagery"
  - "sentinel1-derived"
---

# OPERA Sentinel-1 辐射地形校正 SAR 后向散射静态层 V1.0

英文原名：OPERA Radiometric Terrain-Corrected SAR Backscatter from Sentinel-1 Static Layers V1.0

## 这是什么数据

本产品包含与 [OPERA Sentinel-1 辐射地形校正 SAR 后向散射数据集](OPERA_RTC_L2_V1_S1) 关联的静态雷达几何层。

由于 S1 任务轨道管狭窄，入射角、局部入射角、视数与 RTC 面积归一化因子（ANF）等雷达几何层在地面每个位置随时间仅略有变化，因此视为静态。这些静态层与 OPERA RTC-S1 产品分开提供，因为它们只生产一次或少数几次，以应对 DEM、S1 轨道或静态层生成算法的变化。

## 覆盖范围与时间

- 覆盖范围：空间：近全球；时间：静态层（示例时段 2014 年）；分辨率：30 米。
- 时间范围：2014-04-03 至 2014-04-04

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| local_incidence_angle | 目标处视线（LOS）矢量与地形法线矢量的夹角，与地理编码影像在同一地理格网上提供。 | 30 |  |
| incidence_angle | 目标处 LOS 矢量与椭球法线的夹角，与地理编码影像在同一地理格网上提供。 | 30 |  |
| number_of_looks | 计算每个 RTC-S1 影像像元所用的雷达采样数，与 RTC-S1 产品影像在同一地理格网上提供。 | 30 |  |
| rtc_anf_gamma0_to_beta0 | 将 gamma0 后向散射归一化为 beta0 的因子，与对应 RTC-S1 影像在同一格网上提供。 | 30 |  |
| rtc_anf_gamma0_to_sigma0 | 将 gamma0 后向散射归一化为 sigma0 的因子，与相关 RTC-S1 影像在同一格网上提供。 | 30 |  |
| mask | 掩膜层，包含用 RTC-S1 段轨道计算的有效/无效、叠掩与阴影分类，与相关地理编码影像在同一地理格网上提供。 | 30 |  |

## 能拿来做什么

- 为 RTC-S1 后向散射提供入射角等几何校正参数。
- 做 SAR 辐射定标与地形效应分析。
- 支撑叠掩/阴影区域的识别与掩膜。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('OPERA/RTC/L2_V1/S1_STATIC');
```

- 数据集编号（Earth Engine ID）：`OPERA/RTC/L2_V1/S1_STATIC`
- 提供方：NASA JPL、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OPERA_RTC_L2_V1_S1_STATIC

## 许可与引用

- 许可：CC0-1.0
- 关键词：jpl, nasa, opera, sar, satellite-imagery, sentinel1-derived
- 数据引用：NASA/JPL/OPERA. (2023). OPERA Radiometric Terrain Corrected SAR Backscatter
from Sentinel-1 Static Layers validated product (Version 1) [Data set].
NASA Alaska Satellite Facility Distributed Active Archive Center.
[doi:10.5067/SNWG/OPERA_L2_RTC-S1-STATIC_V1](https://doi.org/10.5067/SNWG/OPERA_L2_RTC-S1-STATIC_V1)

- DOI：10.5067/SNWG/OPERA_L2_RTC-S1-STATIC_V1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [OPERA Sentinel-1 辐射地形校正 SAR 后向散射 V1.0](/pages/8c150ee4/)
- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
