---
title: "The Climate Hazards Center (CHC) Coupled Model Intercomparison Project Phase 6 (CHC-CMIP6)"
date: 2026-11-03 12:00:00
permalink: /pages/835f6143/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "geophysical"
  - "precipitation"
  - "ucsb"
  - "weather"
---

# The Climate Hazards Center (CHC) Coupled Model Intercomparison Project Phase 6 (CHC-CMIP6)

## 数据集简介

CHC-CMIP6 was explicitly developed to support the analysis of
climate-related hazards over the recent past and in the near-future.

This climate projection dataset contains global, daily gridded data for the
observational (1983-2016) and projection (2030 and 2050) periods to be used
in the identification and monitoring of hydroclimatic extremes. The dataset
contains global daily high resolution (0.05&#176;) grids of the Climate
Hazards InfraRed Temperature with Stations (CHIRTS-daily) temperature
product, the Climate Hazards InfraRed Precipitation with Stations (CHIRPS)
precipitation product, and ERA5-derived relative humidity, from which Vapor
Pressure Deficits (VPD) and maximum Wet Bulb Globe Temperatures (WBGTmax)
were derived.

Large CMIP6 ensembles from the Shared Socioeconomic Pathway (SSP) 245 and
SSP 585 scenarios were used to develop high resolution (0.05&#176;) daily
2030 and 2050 delta fields.

For more information, see
[The Climate Hazards Center (CHC) Coupled Model Intercomparison Project
Phase 6 (CHC-CMIP6)](https://chc.ucsb.edu/data/chc-cmip6).

## 基本信息

- 数据集编号（Earth Engine ID）：`UCSB/CHC/CMIP6/v1`
- 数据类型：影像集合（ImageCollection）
- 提供方：UCSB、Google Earth Engine
- 时间范围：1983-01-01 至 2016-12-31
- 空间分辨率：5566 米
- 许可：CC-BY-4.0
- 关键词：climate, geophysical, precipitation, ucsb, weather

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| CHIRPS | Daily total precipitation. | 5566 |  |
| himax | Daily maximum Heat Index. | 5566 |  |
| RH | Relative Humidity. | 5566 |  |
| RHx | Relative humidity at the hour of maximum temperature | 5566 |  |
| RHn | Relative humidity at the hour of minimum temperature. | 5566 |  |
| wbgtmax | Daily maximum wet bulb globe temperature. | 5566 |  |
| vpd | Daily vapor pressure deficit. | 5566 |  |
| svp | Daily average saturation vapor pressure. | 5566 |  |
| Tmax | Daily maximum near-surface air temperature. | 5566 |  |
| Tmin | Daily minimum near-surface air temperature. | 5566 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('UCSB/CHC/CMIP6/v1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UCSB_CHC_CMIP6_v1
- 数据引用：Williams, E., Funk, C., Peterson, P., & Tuholske, C. (2024). High resolution
climate change observations and projections for the evaluation of
heat-related extremes. Scientific Data, 11(1), 261.
[https://www.nature.com/articles/s41597-024-03074-w](https://www.nature.com/articles/s41597-024-03074-w)
2015.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
