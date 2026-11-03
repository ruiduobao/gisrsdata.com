---
title: "NEX-GDDP: NASA Earth Exchange Global Daily Downscaled Climate Projections"
date: 2026-11-03 12:00:00
permalink: /pages/e142b780/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cag"
  - "climate"
  - "cmip5"
  - "gddp"
  - "geophysical"
  - "ipcc"
  - "nasa"
  - "nex"
  - "precipitation"
  - "temperature"
  - "weather-and-climate"
---

# NEX-GDDP: NASA Earth Exchange Global Daily Downscaled Climate Projections

## 数据集简介

The NASA NEX-GDDP dataset is comprised of downscaled climate scenarios
for the globe that are derived from the General Circulation Model (GCM)
runs conducted under the Coupled Model Intercomparison Project Phase 5
(CMIP5, see [Taylor et al. 2012](https://journals.ametsoc.org/doi/abs/10.1175/BAMS-D-11-00094.1))
and across two of the four greenhouse gas emissions scenarios known as
Representative Concentration Pathways (RCPs, see [Meinshausen et
al. 2011](https://rd.springer.com/article/10.1007%2Fs10584-011-0156-z#page-1)).
The CMIP5 GCM runs were developed in support of the Fifth Assessment
Report of the Intergovernmental Panel on Climate Change (IPCC AR5).

This dataset was prepared by the Climate Analytics Group and NASA Ames
Research Center using the NASA Earth Exchange, and distributed by the NASA
Center for Climate Simulation (NCCS).

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/NEX-GDDP`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA /  Climate Analytics Group、Google Earth Engine
- 时间范围：1950-01-01 至 2100-12-31
- 空间分辨率：27830 米
- 许可：proprietary
- 关键词：cag, climate, cmip5, gddp, geophysical, ipcc, nasa, nex, precipitation, temperature, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| pr | Daily mean of precipitation at surface; includes both liquid and solid phases from all types of clouds (both large-scale and convective)  | 27830 |  |
| tasmin | Daily mean of the daily-minimum near-surface air temperature | 27830 |  |
| tasmax | Daily mean of the daily-maximum near-surface air temperature | 27830 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/NEX-GDDP');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_NEX-GDDP
- 数据引用：Thrasher, B., Maurer, E. P., McKellar, C., & Duffy, P. B., 2012:
Technical Note: Bias correcting climate model simulated daily temperature
extremes with quantile mapping. Hydrology and Earth System Sciences,
16(9), 3309-3314.
[doi:10.5194/hess-16-3309-2012](https://doi.org/10.5194/hess-16-3309-2012)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
