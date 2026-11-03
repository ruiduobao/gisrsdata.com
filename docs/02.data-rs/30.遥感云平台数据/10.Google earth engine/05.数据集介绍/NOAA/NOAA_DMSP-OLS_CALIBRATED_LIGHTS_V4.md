---
title: "DMSP OLS: Global Radiance-Calibrated Nighttime Lights Version 4, Defense Meteorological Program Operational Linescan System"
date: 2026-11-03 12:00:00
permalink: /pages/a2c92c1d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "calibrated"
  - "dmsp"
  - "eog"
  - "imagery"
  - "lights"
  - "nighttime"
  - "ols"
  - "population"
  - "radiance"
  - "visible"
  - "yearly"
---

# DMSP OLS: Global Radiance-Calibrated Nighttime Lights Version 4, Defense Meteorological Program Operational Linescan System

## 数据集简介

The Defense Meteorological Program (DMSP) Operational Line-Scan System
(OLS) has a unique capability to detect visible and near-infrared (VNIR)
emission sources at night.

This collection contains global nighttime lights images with no sensor
saturation. The sensor is typically operated at a high-gain setting to
enable the detection of moonlit clouds. However, with six bit quantization
and limited dynamic range, the recorded data are saturated in the bright
cores of urban centers. A limited set of observations at low lunar
illumination were obtained where the gain of the detector was set
significantly lower than its typical operational setting (sometimes by a
factor of 100). Sparse data acquired at low-gain settings were combined
with the operational data acquired at high-gain settings to produce the set
of global nighttime lights images with no sensor saturation. Data from
different satellites were merged and blended into the final product in order
to gain maximum coverage. For more information, see this
[readme](https://eogdata.mines.edu/dmsp/radcal_readme.txt)
file from the provider.

Image and data processing by NOAA's National Geophysical Data Center.
DMSP data collected by US Air Force Weather Agency.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/DMSP-OLS/CALIBRATED_LIGHTS_V4`
- 数据类型：影像集合（ImageCollection）
- 提供方：Earth Observation Group, Payne Institute for Public Policy, Colorado School of Mines、Google Earth Engine
- 时间范围：1996-03-16 至 2011-07-31
- 空间分辨率：927.67 米
- 许可：proprietary
- 关键词：calibrated, dmsp, eog, imagery, lights, nighttime, ols, population, radiance, visible, yearly

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| avg_vis | Average digital band numbers from observations with cloud-free light detection. | 927.67 |  |
| cf_cvg | Cloud-free coverages, the total number of observations that went into each 30-arc second grid cell. This image can be used to identify areas with low numbers of observations where the quality is reduced.  | 927.67 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/DMSP-OLS/CALIBRATED_LIGHTS_V4');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_DMSP-OLS_CALIBRATED_LIGHTS_V4

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
