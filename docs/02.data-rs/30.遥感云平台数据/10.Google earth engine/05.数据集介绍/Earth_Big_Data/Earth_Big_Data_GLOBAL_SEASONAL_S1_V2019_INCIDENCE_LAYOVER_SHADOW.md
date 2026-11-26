---
title: "全球季节性 Sentinel-1 干涉相干性与后向散射 V2019：入射角与叠掩阴影"
date: 2026-11-03 12:00:00
permalink: /pages/008235d0/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "earth-big-data"
  - "jpl"
  - "nasa"
  - "polarization"
  - "radar"
  - "sar"
  - "satellite-imagery"
  - "seasonal"
  - "sentinel1-derived"
---

# 全球季节性 Sentinel-1 干涉相干性与后向散射 V2019：入射角与叠掩阴影

英文原名：Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Incidence Layover Shadow

## 这是什么数据

本数据集是首个此类数据集：多季节、全球 C 波段合成孔径雷达（SAR）干涉重复轨道相干性与后向散射特征的空间表示。覆盖范围包括北纬 82 度至南纬 79 度之间的陆地与冰盖。本数据集由 2019 年 12 月 1 日至 2020 年 11 月 30 日期间、以干涉宽幅模式获取的约 205,000 景 Sentinel-1 C 波段 SAR 影像经多时相重复轨道干涉处理导出。

本数据集包含辅助数据，用于辅助后向散射与相干性产品的解译与处理。

同一时期由 Sentinel-1 观测导出的其他数据集包括：

## 覆盖范围与时间

- 覆盖范围：北纬 82 度至南纬 79 度之间的陆地与冰盖
- 时间范围：2019-12-01 至 2020-12-01

## 分辨率与规格

- 空间分辨率：约 92.7 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| inc | 入射雷达信号路径与每个像元处局地地面法向量之间的夹角 | 92.7 |  |
| lsmap | 叠掩/阴影掩膜：1 = 无阴影或叠掩；5 = 叠掩：一种几何畸变，较高处的特征向雷达方向位移（出现在较低处特征之前），使测量无法进行；17 = 阴影：被雷达波束遮挡的区域（陡坡或高大物体之后），接收不到信号，导致所测后向散射与相干性为零或接近零；21 = 叠掩中的阴影 | 92.7 |  |

## 能拿来做什么

- SAR 几何畸变区（叠掩/阴影）的掩膜
- 后向散射与相干性产品的质量控制

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/INCIDENCE_LAYOVER_SHADOW');
```

- 数据集编号（Earth Engine ID）：`Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/INCIDENCE_LAYOVER_SHADOW`
- 提供方：Earth Big Data LLC、Alaska Satellite Facility、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_INCIDENCE_LAYOVER_SHADOW
* [Backscatter](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_BACKSCATTER)
* [Coherence](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_COHERENCE)
* [Decay Model Parameters](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_DECAY_MODEL_PARAMETERS)

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：earth-big-data, jpl, nasa, polarization, radar, sar, satellite-imagery, seasonal, sentinel1-derived
- 数据引用：Kellndorfer, J., Cartus, O., Lavalle, M. et al. Global seasonal Sentinel-1
interferometric coherence and backscatter data set. Sci Data 9, 73 (2022).
[doi:10.1038/s41597-022-01189-6](https://doi.org/10.1038/s41597-022-01189-6).

- DOI：10.1038/s41597-022-01189-6

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Backscatter](/pages/0fd3af2c/)
- [Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Coherence](/pages/2e6c1d1a/)
- [Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Decay Model Parameters](/pages/40f99a0e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
