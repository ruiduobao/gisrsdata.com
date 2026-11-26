---
title: "全球季节性 Sentinel-1 干涉相干性与后向散射 V2019：后向散射"
date: 2026-11-03 12:00:00
permalink: /pages/0fd3af2c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "backscatter"
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

# 全球季节性 Sentinel-1 干涉相干性与后向散射 V2019：后向散射

英文原名：Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Backscatter

## 这是什么数据

本数据集是首个此类数据集：多季节、全球 C 波段合成孔径雷达（SAR）干涉重复轨道相干性与后向散射特征的空间表示。覆盖范围包括北纬 82 度至南纬 79 度之间的陆地与冰盖。本数据集由 2019 年 12 月 1 日至 2020 年 11 月 30 日期间、以干涉宽幅模式获取的约 205,000 景 Sentinel-1 C 波段 SAR 影像经多时相重复轨道干涉处理导出。

本数据集包含平均辐射地形校正（RTC）后向散射。原始信号强度已经过调整，以考虑局地地形（如丘陵与坡度）对所测雷达散射截面的影响。这一校正产生地形平坦化的后向散射值，更能代表地表本身的固有散射特性。

若想使用原始栅格的数字值进行计算，请改为加载 *Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/BACKSCATTER_RAW*。

同一时期由 Sentinel-1 观测导出的其他数据集包括：

## 覆盖范围与时间

- 覆盖范围：北纬 82 度至南纬 79 度之间的陆地与冰盖
- 时间范围：2019-12-01 至 2020-12-01

## 分辨率与规格

- 空间分辨率：约 92.7 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| fall_hh_AMP | 秋季（2020 年 9–11 月）HH 后向散射幅度 | 92.7 |  |
| fall_hv_AMP | 秋季（2020 年 9–11 月）HV 后向散射幅度 | 92.7 |  |
| fall_vh_AMP | 秋季（2020 年 9–11 月）VH 后向散射幅度 | 92.7 |  |
| fall_vv_AMP | 秋季（2020 年 9–11 月）VV 后向散射幅度 | 92.7 |  |
| spring_hh_AMP | 春季（2020 年 3–5 月）HH 后向散射幅度 | 92.7 |  |
| spring_hv_AMP | 春季（2020 年 3–5 月）HV 后向散射幅度 | 92.7 |  |
| spring_vh_AMP | 春季（2020 年 3–5 月）VH 后向散射幅度 | 92.7 |  |
| spring_vv_AMP | 春季（2020 年 3–5 月）VV 后向散射幅度 | 92.7 |  |
| summer_hh_AMP | 夏季（2020 年 6–8 月）HH 后向散射幅度 | 92.7 |  |
| summer_hv_AMP | 夏季（2020 年 6–8 月）HV 后向散射幅度 | 92.7 |  |
| summer_vh_AMP | 夏季（2020 年 6–8 月）VH 后向散射幅度 | 92.7 |  |
| summer_vv_AMP | 夏季（2020 年 6–8 月）VV 后向散射幅度 | 92.7 |  |
| winter_hh_AMP | 冬季（2019 年 12 月–2020 年 2 月）HH 后向散射幅度 | 92.7 |  |
| winter_hv_AMP | 冬季（2019 年 12 月–2020 年 2 月）HV 后向散射幅度 | 92.7 |  |
| winter_vh_AMP | 冬季（2019 年 12 月–2020 年 2 月）VH 后向散射幅度 | 92.7 |  |
| winter_vv_AMP | 冬季（2019 年 12 月–2020 年 2 月）VV 后向散射幅度 | 92.7 |  |

## 能拿来做什么

- 全球 SAR 后向散射的季节特征分析
- 土地覆盖与植被分类的雷达特征
- 后向散射与相干性联合应用

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/BACKSCATTER');
```

- 数据集编号（Earth Engine ID）：`Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/BACKSCATTER`
- 提供方：Earth Big Data LLC、Alaska Satellite Facility、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_BACKSCATTER
* [Coherence](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_COHERENCE)
* [Decay Model Parameters](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_DECAY_MODEL_PARAMETERS)
* [Incidence Layover Shadow](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_INCIDENCE_LAYOVER_SHADOW)

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：backscatter, earth-big-data, jpl, nasa, polarization, radar, sar, satellite-imagery, seasonal, sentinel1-derived
- 数据引用：Kellndorfer, J., Cartus, O., Lavalle, M. et al. Global seasonal Sentinel-1
interferometric coherence and backscatter data set. Sci Data 9, 73 (2022).
[doi:10.1038/s41597-022-01189-6](https://doi.org/10.1038/s41597-022-01189-6).

- DOI：10.1038/s41597-022-01189-6

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Coherence](/pages/2e6c1d1a/)
- [Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Decay Model Parameters](/pages/40f99a0e/)
- [Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Incidence Layover Shadow](/pages/008235d0/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
