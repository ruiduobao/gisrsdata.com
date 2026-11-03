---
title: "DMSP OLS: Nighttime Lights Time Series Version 4, Defense Meteorological Program Operational Linescan System"
date: 2026-11-03 12:00:00
permalink: /pages/65a6304d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
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

# DMSP OLS: Nighttime Lights Time Series Version 4, Defense Meteorological Program Operational Linescan System

## 数据集简介

The Defense Meteorological Program (DMSP) Operational Line-Scan System
(OLS) has a unique capability to detect visible and near-infrared (VNIR)
emission sources at night.

Version 4 of the DMSP-OLS Nighttime Lights Time Series consists of
cloud-free composites made using all the available archived DMSP-OLS smooth
resolution data for calendar years. In cases where two satellites were
collecting data, two composites were produced.

Image and data processing by NOAA's National Geophysical Data Center.
DMSP data collected by US Air Force Weather Agency.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/DMSP-OLS/NIGHTTIME_LIGHTS`
- 数据类型：影像集合（ImageCollection）
- 提供方：Earth Observation Group, Payne Institute for Public Policy, Colorado School of Mines、Google Earth Engine
- 时间范围：1992-01-01 至 2014-01-01
- 空间分辨率：927.67 米
- 许可：proprietary
- 关键词：dmsp, eog, imagery, lights, nighttime, ols, population, visible, yearly

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| avg_vis | The average of the visible band digital number values with no further filtering. | 927.67 |  |
| stable_lights | The cleaned up avg_vis contains the lights from cities, towns, and other sites with persistent lighting, including gas flares. Ephemeral events, such as fires, have been discarded. The background noise was identified and replaced with values of zero.  | 927.67 |  |
| cf_cvg | Cloud-free coverages tally the total number of observations that went into each 30-arc second grid cell. This band can be used to identify areas with low numbers of observations where the quality is reduced.  | 927.67 |  |
| avg_lights_x_pct | The average visible band digital number (DN) of cloud-free light detections multiplied by the percent frequency of light detection. The inclusion of the percent frequency of detection term normalizes the resulting digital values for variations in the persistence of lighting. For instance, the value for a light only detected half the time is discounted by 50%. Note that this product contains detections from fires and a variable amount of background noise.  | 927.67 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_DMSP-OLS_NIGHTTIME_LIGHTS

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
