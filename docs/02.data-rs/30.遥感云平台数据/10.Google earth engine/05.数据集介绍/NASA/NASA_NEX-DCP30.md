---
title: "NEX-DCP30: NASA Earth Exchange Downscaled Climate Projections"
date: 2026-11-03 12:00:00
permalink: /pages/e49726fc/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cag"
  - "climate"
  - "cmip5"
  - "geophysical"
  - "ipcc"
  - "nasa"
  - "nex"
  - "precipitation"
  - "temperature"
  - "weather-and-climate"
---

# NEX-DCP30: NASA Earth Exchange Downscaled Climate Projections

## 数据集简介

The NASA NEX-DCP30 dataset is comprised of downscaled climate scenarios
for the conterminous United States that are derived from the General
Circulation Model (GCM) runs conducted under the Coupled Model
Intercomparison Project Phase 5 (CMIP5, see [Taylor et al. 2012](https://journals.ametsoc.org/doi/abs/10.1175/BAMS-D-11-00094.1))
and across the four greenhouse gas emissions scenarios known as
Representative Concentration Pathways (RCPs, see [Meinshausen et al. 2011](https://rd.springer.com/article/10.1007%2Fs10584-011-0156-z#page-1))
developed for the Fifth Assessment Report of the Intergovernmental Panel
on Climate Change (IPCC AR5). The purpose of these datasets is to provide
a set of high resolution, bias-corrected climate change projections that
can be used to evaluate climate change impacts on processes that are
sensitive to finer-scale climate gradients and the effects of local
topography on climate conditions.

The dataset contains monthly projections covering the periods from 1950
through 2005 (Retrospective Run) and from 2006 to 2099 (Prospective Run).
It includes downscaled projections from 33 models. Not every
scenario contains projections from every model.

NEX-DCP30 was prepared by the Climate Analytics Group and NASA Ames
Research Center using the NASA Earth Exchange, and distributed by the NASA
Center for Climate Simulation (NCCS).

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/NEX-DCP30`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA / Climate Analytics Group、Google Earth Engine
- 时间范围：1950-01-01 至 2099-12-01
- 空间分辨率：927.67 米
- 许可：proprietary
- 关键词：cag, climate, cmip5, geophysical, ipcc, nasa, nex, precipitation, temperature, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| pr | Monthly mean of the daily precipitation rate at surface; includes both liquid and solid phases from all types of clouds (both large-scale and convective)  | 927.67 |  |
| tasmin | Monthly mean of the daily-minimum near-surface air temperature | 927.67 |  |
| tasmax | Monthly mean of the daily-maximum near-surface air temperature | 927.67 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/NEX-DCP30');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_NEX-DCP30
- 数据引用：Thrasher, B., J. Xiong, W. Wang, F. Melton, A. Michaelis and R. Nemani
(2013), Downscaled Climate Projections Suitable for Resource Management,
Eos Trans. AGU, 94(37), 321.
[doi:10.1002/2013EO370002](https://doi.org/10.1002/2013EO370002)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
