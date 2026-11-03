---
title: "MERIT Hydro: Supplementary Visualization Layers"
date: 2026-11-03 12:00:00
permalink: /pages/e2d4c415/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "hydrography"
  - "hydrosheds"
  - "merit"
  - "river-width"
  - "surface-ground-water"
  - "upstream-drainage-area"
---

# MERIT Hydro: Supplementary Visualization Layers

## 数据集简介

Supplementary visualization layers for [MERIT Hydro](MERIT_Hydro_v1_0_1)

## 基本信息

- 数据集编号（Earth Engine ID）：`MERIT/Hydro_reduced/v1_0_1`
- 数据类型：影像（Image）
- 提供方：Dai Yamazaki (University of Tokyo)、Google Earth Engine
- 时间范围：1987-01-01 至 2017-01-01
- 空间分辨率：556.6 米
- 许可：ODbL-1.0
- 关键词：hydrography, hydrosheds, merit, river-width, surface-ground-water, upstream-drainage-area

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| wth | River channel width at the channel centerlines. River channel width is calculated by the method described in [Yamazaki et al. 2012, WRR], with some improvements/changes on the algorithm. This band was upscaled to 18 arc seconds from the original 3 arc seconds for better visualization at global scale.  | 556.6 |  |
| upa | Upstream drainage area (flow accumulation area). This band was upscaled to 18 arc seconds from the original 3 arc seconds for better visualization at global scale.  | 556.6 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('MERIT/Hydro_reduced/v1_0_1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MERIT_Hydro_reduced_v1_0_1
- 数据引用：Yamazaki D., D. Ikeshima, J. Sosa, P.D. Bates, G.H. Allen, T.M. Pavelsky.
MERIT Hydro: A high-resolution global hydrography map based on latest
topography datasets
Water Resources Research, vol.55, pp.5053-5073, 2019,
[doi:10.1029/2019WR024873](https://doi.org/10.1029/2019WR024873)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
