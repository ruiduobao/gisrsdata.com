---
title: "全球一致校正夜间灯光 CCNL（1992–2013）"
date: 2026-11-03 12:00:00
permalink: /pages/c2c834f0/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "bnu"
  - "dmsp"
  - "eog"
  - "imagery"
  - "lights"
  - "nighttime"
  - "ols"
  - "population"
  - "visible"
  - "yearly"
---

# 全球一致校正夜间灯光 CCNL（1992–2013）

英文原名：CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013) v1

## 这是什么数据

CCNL 是对 [DMSP-OLS 第 4 版夜间灯光](https://developers.google.com/earth-engine/datasets/catalog/NOAA_DMSP-OLS_NIGHTTIME_LIGHTS) 的再加工版本。原始 DMSP 灯光有三个老毛病：不同年份之间对不上、亮区饱和、灯光向外晕开（blooming）。CCNL 用一系列方法逐一缓解这些问题，提高了数据质量，让 1992–2013 年的灯光可以逐年可比。

CCNL 第 1 版覆盖 75°N 到 65°S，像元 1 公里。

## 覆盖范围与时间

- 覆盖范围：全球，75°N 至 65°S
- 时间范围：1992-01-01 至 2014-01-01
- 更新节奏：逐年

## 分辨率与规格

- 空间分辨率：约 1,000 米（像元 1 公里）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| b1 | 校正后的夜间灯光强度 | 1000 |  |

## 能拿来做什么

- 用夜间灯光研究城镇化与经济活动的长期变化
- 在一致口径下比较各年城市灯光的增长
- 1992–2013 年人口与 GDP 空间化

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('BNU/FGS/CCNL/v1');
```

- 数据集编号（Earth Engine ID）：`BNU/FGS/CCNL/v1`
- 提供方：Beijing Normal University、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：bnu, dmsp, eog, imagery, lights, nighttime, ols, population, visible, yearly
- 数据引用：Zhao,Chenchen, Cao,Xin, Chen,Xuehong, & Cui,Xihong. (2020). A Consistent
and Corrected Nighttime Light dataset (CCNL 1992-2013) from DMSP-OLS data
(Version 1.0) [Data set]. Zenodo. https://doi.org/10.5281/zenodo.6644980


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [DMSP OLS: Global Radiance-Calibrated Nighttime Lights Version 4, Defense Meteorological Program Operational Linescan System](/pages/a2c92c1d/)
- [DMSP OLS: Nighttime Lights Time Series Version 4, Defense Meteorological Program Operational Linescan System](/pages/65a6304d/)
- [LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (8-Daily 1km)](/pages/6f3727a9/)
- [LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (Annual 1km)](/pages/13f243dd/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
