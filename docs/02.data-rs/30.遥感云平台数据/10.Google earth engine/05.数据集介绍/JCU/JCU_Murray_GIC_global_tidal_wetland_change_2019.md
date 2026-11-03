---
title: "Murray Global Tidal Wetland Change v1.0 (1999-2019)"
date: 2026-11-03 12:00:00
permalink: /pages/8dfd16a2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "coastal"
  - "ecosystem"
  - "intertidal"
  - "landsat-derived"
  - "mangrove"
  - "murray"
  - "saltmarsh"
  - "surface-ground-water"
  - "tidal-flat"
  - "tidal-marsh"
---

# Murray Global Tidal Wetland Change v1.0 (1999-2019)

## 数据集简介

The Murray Global Tidal Wetland Change Dataset contains maps of the global
extent of tidal wetlands and their change. The maps were developed from a three
stage classification that sought to (i) estimate the global distribution of
tidal wetlands (defined as either tidal marsh, tidal flat or mangrove
ecosystems), (ii) detect their change over the study period, and (iii) estimate
the ecosystem type and timing of tidal wetland change events.

The dataset was produced by combining observations from 1,166,385 satellite
images acquired by Landsat 5 to 8 with environmental data of variables known
to influence the distributions of each ecosystem type, including temperature,
slope, and elevation. The image contains bands for a tidal wetland extent
product (random forest probability of tidal wetland occurrence) for the
start and end time-steps of the study period and a tidal wetland change product
over the full study period (loss and gain of tidal wetlands).

Please see the [usage notes](https://www.globalintertidalchange.org/data-usage)
on the [project website](https://www.globalintertidalchange.org/). A full
description of the methods, validation, and limitations of the data produced by
this software is available in the associated scientific paper.

See also
[UQ/murray/Intertidal/v1_1/global_intertidal](UQ_murray_Intertidal_v1_1_global_intertidal)
for global maps of the distribution of tidal flat ecosystems.

## 基本信息

- 数据集编号（Earth Engine ID）：`JCU/Murray/GIC/global_tidal_wetland_change/2019`
- 数据类型：影像（Image）
- 提供方：Murray/JCU、Google Earth Engine
- 时间范围：1999-01-01 至 2019-12-31
- 空间分辨率：30 米
- 许可：CC-BY-4.0
- 关键词：coastal, ecosystem, intertidal, landsat-derived, mangrove, murray, saltmarsh, surface-ground-water, tidal-flat, tidal-marsh

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| loss | Set to 1 for loss locations, masked out otherwise. | 30 |  |
| lossYear | Integer representing the end year of the time-step of loss analysis (e.g., 19 = 2017-2019).  | 30 |  |
| lossType | Loss type  * 2 - Tidal Flat * 3 - Mangrove * 5 - Tidal Marsh  | 30 |  |
| gain | Set to 1 for gain locations, masked out otherwise. | 30 |  |
| gainYear | Integer representing the end year of the time-step of gain analysis (e.g., 19 = 2017-2019).  | 30 |  |
| gainType | Gain type:  * 2 - Tidal Flat * 3 - Mangrove * 5 - Tidal Marsh  | 30 |  |
| twprobabilityStart | Random forest agreement of the overarching tidal wetland class for the first time step (1999-2001). Integer between 0 and 100.  | 30 |  |
| twprobabilityEnd | Random forest agreement of the overarching tidal wetland class for the last time step (2017-2019). Integer between 0 and 100.  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('JCU/Murray/GIC/global_tidal_wetland_change/2019');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JCU_Murray_GIC_global_tidal_wetland_change_2019
- 数据引用：Murray, N.J., Worthington, T.A., Bunting, P., Duce, S., Hagger, V.,
Lovelock, C.E., Lucas, R., Saunders, M.I., Sheaves, M., Spalding, M.,
Waltham, N.J., Lyons, M.B., 2022. High-resolution mapping of losses and
gains of Earth's tidal wetlands. *Science*.
[doi:10.1126/science.abm9583](https://doi.org/10.1126/science.abm9583)

- DOI：10.1126/science.abm9583

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
