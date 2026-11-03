---
title: "CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013) v1"
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

# CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013) v1

## 数据集简介

The Consistent and Corrected Nighttime Lights (CCNL) dataset is
a reprocessed version of the [Defense Meteorological Program (DMSP)
Operational Line-Scan System (OLS) Version 4](NOAA_DMSP-OLS_NIGHTTIME_LIGHTS).
A series of methods was used to mitigate the impact of inter-annual
inconsistency, saturation, and blooming effects and to improve data quality.

CCNL Version 1 spans the globe from 75N to 65S and has 1 km pixel size.

## 基本信息

- 数据集编号（Earth Engine ID）：`BNU/FGS/CCNL/v1`
- 数据类型：影像集合（ImageCollection）
- 提供方：Beijing Normal University、Google Earth Engine
- 时间范围：1992-01-01 至 2014-01-01
- 空间分辨率：1000 米
- 许可：CC-BY-4.0
- 关键词：bnu, dmsp, eog, imagery, lights, nighttime, ols, population, visible, yearly

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| b1 | Corrected nighttime light intensity. | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('BNU/FGS/CCNL/v1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1
- 数据引用：Zhao,Chenchen, Cao,Xin, Chen,Xuehong, & Cui,Xihong. (2020). A Consistent
and Corrected Nighttime Light dataset (CCNL 1992-2013) from DMSP-OLS data
(Version 1.0) [Data set]. Zenodo. https://doi.org/10.5281/zenodo.6644980


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
