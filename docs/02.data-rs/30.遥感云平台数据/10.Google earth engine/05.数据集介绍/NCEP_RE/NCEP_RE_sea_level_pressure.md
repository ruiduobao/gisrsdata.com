---
title: "NCEP/NCAR Reanalysis Data, Sea-Level Pressure [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/de62bd70/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "climate"
  - "geophysical"
  - "ncep"
  - "noaa"
  - "pressure"
  - "reanalysis"
  - "weather-and-climate"
---

# NCEP/NCAR Reanalysis Data, Sea-Level Pressure [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The NCEP/NCAR Reanalysis Project is a joint project between the National
Centers for Environmental Prediction (NCEP, formerly "NMC") and the
National Center for Atmospheric Research (NCAR). The goal of this joint
effort is to produce new atmospheric analyses using historical data as
well as to produce analyses of the current atmospheric state (Climate Data
Assimilation System, CDAS). The NCEP/NCAR Reanalysis 1 project is using a
state-of-the-art analysis/forecast system to perform data assimilation using
past data from 1948 to March 2026. The data have 6-hour temporal
resolution (0000, 0600, 1200, and 1800 UTC) and 2.5 degree spatial
resolution.

NCEP discontinued this dataset in March 2026 and it is no longer being
updated.

## 基本信息

- 数据集编号（Earth Engine ID）：`NCEP_RE/sea_level_pressure`
- 数据类型：影像集合（ImageCollection）
- 提供方：NCEP、Google Earth Engine
- 时间范围：1948-01-01 至 2026-03-18
- 空间分辨率：278300 米
- 许可：proprietary
- 关键词：atmosphere, climate, geophysical, ncep, noaa, pressure, reanalysis, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| slp | Sea level pressure | 278300 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NCEP_RE/sea_level_pressure');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NCEP_RE_sea_level_pressure
- 数据引用：Kalnay et al., 1996, The NCEP/NCAR 40-Year Reanalysis Project. Bull. Amer.
Meteor. Soc., 77, 437-471.
[doi:10.1175/1520-0477(1996)077<0437:TNYRP\\>2.0.CO;2](https://doi.org/10.1175/1520-0477(1996)077<0437:TNYRP>2.0.CO;2).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
