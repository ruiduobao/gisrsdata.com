---
title: "全球季节性 Sentinel-1 干涉相干性与后向散射 V2019：相干性"
date: 2026-11-03 12:00:00
permalink: /pages/2e6c1d1a/
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

# 全球季节性 Sentinel-1 干涉相干性与后向散射 V2019：相干性

英文原名：Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Coherence

## 这是什么数据

本数据集是首个此类数据集：多季节、全球 C 波段合成孔径雷达（SAR）干涉重复轨道相干性与后向散射特征的空间表示。覆盖范围包括北纬 82 度至南纬 79 度之间的陆地与冰盖。本数据集由 2019 年 12 月 1 日至 2020 年 11 月 30 日期间、以干涉宽幅模式获取的约 205,000 景 Sentinel-1 C 波段 SAR 影像经多时相重复轨道干涉处理导出。

相干性是两幅在不同时间对同一区域获取的复数 SAR 影像之间相似性（相关性）的度量，范围从 0（不相关/高噪声）到 1（完全相关）。本数据集通过分析间隔最长 48 天的所有可能影像对生成，报告每个季节内、针对特定标准化时间基线（重复间隔）聚合的中值相干性。

每个波段的缩放因子已经应用。若想使用原始栅格的数字值进行计算，请改为加载 *Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/COHERENCE_RAW*。

同一时期由 Sentinel-1 观测导出的其他数据集包括：

## 覆盖范围与时间

- 覆盖范围：北纬 82 度至南纬 79 度之间的陆地与冰盖
- 时间范围：2019-12-01 至 2020-12-01

## 分辨率与规格

- 空间分辨率：约 92.7 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| fall_hh_COH06 | 秋季（2020 年 9–11 月）HH 相干性中值，基于 06 天重复间隔的全部相干性估计 | 92.7 |  |
| fall_hh_COH12 | 秋季（2020 年 9–11 月）HH 相干性中值，基于 12 天重复间隔的全部相干性估计 | 92.7 |  |
| fall_hh_COH18 | 秋季（2020 年 9–11 月）HH 相干性中值，基于 18 天重复间隔的全部相干性估计 | 92.7 |  |
| fall_hh_COH24 | 秋季（2020 年 9–11 月）HH 相干性中值，基于 24 天重复间隔的全部相干性估计 | 92.7 |  |
| fall_hh_COH36 | 秋季（2020 年 9–11 月）HH 相干性中值，基于 36 天重复间隔的全部相干性估计 | 92.7 |  |
| fall_hh_COH48 | 秋季（2020 年 9–11 月）HH 相干性中值，基于 48 天重复间隔的全部相干性估计 | 92.7 |  |
| fall_vv_COH06 | 秋季（2020 年 9–11 月）VV 相干性中值，基于 06 天重复间隔的全部相干性估计 | 92.7 |  |
| fall_vv_COH12 | 秋季（2020 年 9–11 月）VV 相干性中值，基于 12 天重复间隔的全部相干性估计 | 92.7 |  |
| fall_vv_COH18 | 秋季（2020 年 9–11 月）VV 相干性中值，基于 18 天重复间隔的全部相干性估计 | 92.7 |  |
| fall_vv_COH24 | 秋季（2020 年 9–11 月）VV 相干性中值，基于 24 天重复间隔的全部相干性估计 | 92.7 |  |
| fall_vv_COH36 | 秋季（2020 年 9–11 月）VV 相干性中值，基于 36 天重复间隔的全部相干性估计 | 92.7 |  |
| fall_vv_COH48 | 秋季（2020 年 9–11 月）VV 相干性中值，基于 48 天重复间隔的全部相干性估计 | 92.7 |  |
| spring_hh_COH06 | 春季（2020 年 3–5 月）HH 相干性中值，基于 06 天重复间隔的全部相干性估计 | 92.7 |  |
| spring_hh_COH12 | 春季（2020 年 3–5 月）HH 相干性中值，基于 12 天重复间隔的全部相干性估计 | 92.7 |  |
| spring_hh_COH18 | 春季（2020 年 3–5 月）HH 相干性中值，基于 18 天重复间隔的全部相干性估计 | 92.7 |  |
| spring_hh_COH24 | 春季（2020 年 3–5 月）HH 相干性中值，基于 24 天重复间隔的全部相干性估计 | 92.7 |  |
| spring_hh_COH36 | 春季（2020 年 3–5 月）HH 相干性中值，基于 36 天重复间隔的全部相干性估计 | 92.7 |  |
| spring_hh_COH48 | 春季（2020 年 3–5 月）HH 相干性中值，基于 48 天重复间隔的全部相干性估计 | 92.7 |  |
| spring_vv_COH06 | 春季（2020 年 3–5 月）VV 相干性中值，基于 06 天重复间隔的全部相干性估计 | 92.7 |  |
| spring_vv_COH12 | 春季（2020 年 3–5 月）VV 相干性中值，基于 12 天重复间隔的全部相干性估计 | 92.7 |  |
| spring_vv_COH18 | 春季（2020 年 3–5 月）VV 相干性中值，基于 18 天重复间隔的全部相干性估计 | 92.7 |  |
| spring_vv_COH24 | 春季（2020 年 3–5 月）VV 相干性中值，基于 24 天重复间隔的全部相干性估计 | 92.7 |  |
| spring_vv_COH36 | 春季（2020 年 3–5 月）VV 相干性中值，基于 36 天重复间隔的全部相干性估计 | 92.7 |  |
| spring_vv_COH48 | 春季（2020 年 3–5 月）VV 相干性中值，基于 48 天重复间隔的全部相干性估计 | 92.7 |  |
| summer_hh_COH06 | 夏季（2020 年 6–8 月）HH 相干性中值，基于 06 天重复间隔的全部相干性估计 | 92.7 |  |
| summer_hh_COH12 | 夏季（2020 年 6–8 月）HH 相干性中值，基于 12 天重复间隔的全部相干性估计 | 92.7 |  |
| summer_hh_COH18 | 夏季（2020 年 6–8 月）HH 相干性中值，基于 18 天重复间隔的全部相干性估计 | 92.7 |  |
| summer_hh_COH24 | 夏季（2020 年 6–8 月）HH 相干性中值，基于 24 天重复间隔的全部相干性估计 | 92.7 |  |
| summer_hh_COH36 | 夏季（2020 年 6–8 月）HH 相干性中值，基于 36 天重复间隔的全部相干性估计 | 92.7 |  |
| summer_hh_COH48 | 夏季（2020 年 6–8 月）HH 相干性中值，基于 48 天重复间隔的全部相干性估计 | 92.7 |  |
| summer_vv_COH06 | 夏季（2020 年 6–8 月）VV 相干性中值，基于 06 天重复间隔的全部相干性估计 | 92.7 |  |
| summer_vv_COH12 | 夏季（2020 年 6–8 月）VV 相干性中值，基于 12 天重复间隔的全部相干性估计 | 92.7 |  |
| summer_vv_COH18 | 夏季（2020 年 6–8 月）VV 相干性中值，基于 18 天重复间隔的全部相干性估计 | 92.7 |  |
| summer_vv_COH24 | 夏季（2020 年 6–8 月）VV 相干性中值，基于 24 天重复间隔的全部相干性估计 | 92.7 |  |
| summer_vv_COH36 | 夏季（2020 年 6–8 月）VV 相干性中值，基于 36 天重复间隔的全部相干性估计 | 92.7 |  |
| summer_vv_COH48 | 夏季（2020 年 6–8 月）VV 相干性中值，基于 48 天重复间隔的全部相干性估计 | 92.7 |  |
| winter_hh_COH06 | 冬季（2019 年 12 月–2020 年 2 月）HH 相干性中值，基于 06 天重复间隔的全部相干性估计 | 92.7 |  |
| winter_hh_COH12 | 冬季（2019 年 12 月–2020 年 2 月）HH 相干性中值，基于 12 天重复间隔的全部相干性估计 | 92.7 |  |
| winter_hh_COH18 | 冬季（2019 年 12 月–2020 年 2 月）HH 相干性中值，基于 18 天重复间隔的全部相干性估计 | 92.7 |  |
| winter_hh_COH24 | 冬季（2019 年 12 月–2020 年 2 月）HH 相干性中值，基于 24 天重复间隔的全部相干性估计 | 92.7 |  |
| winter_hh_COH36 | 冬季（2019 年 12 月–2020 年 2 月）HH 相干性中值，基于 36 天重复间隔的全部相干性估计 | 92.7 |  |
| winter_hh_COH48 | 冬季（2019 年 12 月–2020 年 2 月）HH 相干性中值，基于 48 天重复间隔的全部相干性估计 | 92.7 |  |
| winter_vv_COH06 | 冬季（2019 年 12 月–2020 年 2 月）VV 相干性中值，基于 06 天重复间隔的全部相干性估计 | 92.7 |  |
| winter_vv_COH12 | 冬季（2019 年 12 月–2020 年 2 月）VV 相干性中值，基于 12 天重复间隔的全部相干性估计 | 92.7 |  |
| winter_vv_COH18 | 冬季（2019 年 12 月–2020 年 2 月）VV 相干性中值，基于 18 天重复间隔的全部相干性估计 | 92.7 |  |
| winter_vv_COH24 | 冬季（2019 年 12 月–2020 年 2 月）VV 相干性中值，基于 24 天重复间隔的全部相干性估计 | 92.7 |  |
| winter_vv_COH36 | 冬季（2019 年 12 月–2020 年 2 月）VV 相干性中值，基于 36 天重复间隔的全部相干性估计 | 92.7 |  |
| winter_vv_COH48 | 冬季（2019 年 12 月–2020 年 2 月）VV 相干性中值，基于 48 天重复间隔的全部相干性估计 | 92.7 |  |

## 能拿来做什么

- 地表稳定性与变化检测（相干性丧失）
- 植被与积雪的季节性去相干分析
- InSAR 应用的相干性先验评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/COHERENCE');
```

- 数据集编号（Earth Engine ID）：`Earth_Big_Data/GLOBAL_SEASONAL_S1/V2019/COHERENCE`
- 提供方：Earth Big Data LLC、Alaska Satellite Facility、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_COHERENCE
* [Backscatter](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_BACKSCATTER)
* [Decay Model Parameters](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_DECAY_MODEL_PARAMETERS)
* [Incidence Layover Shadow](Earth_Big_Data_GLOBAL_SEASONAL_S1_V2019_INCIDENCE_LAYOVER_SHADOW)

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
- [Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Decay Model Parameters](/pages/40f99a0e/)
- [Global Seasonal Sentinel-1 Interferometric Coherence and Backscatter V2019 Incidence Layover Shadow](/pages/008235d0/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
