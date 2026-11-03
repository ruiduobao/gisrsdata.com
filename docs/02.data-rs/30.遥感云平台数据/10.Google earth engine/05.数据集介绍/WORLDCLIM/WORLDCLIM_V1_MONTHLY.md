---
title: "WorldClim Climatology V1"
date: 2026-11-03 12:00:00
permalink: /pages/827e02c7/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "berkeley"
  - "climate"
  - "monthly"
  - "precipitation"
  - "temperature"
  - "weather"
  - "weather-and-climate"
  - "worldclim"
---

# WorldClim Climatology V1

## 数据集简介

WorldClim version 1 has average monthly global climate data for minimum,
mean, and maximum temperature and for precipitation.

WorldClim version 1 was developed by Robert J. Hijmans, Susan Cameron,
and Juan Parra, at the Museum of Vertebrate Zoology, University
of California, Berkeley, in collaboration with Peter Jones and
Andrew Jarvis (CIAT), and with Karen Richardson (Rainforest CRC).

## 基本信息

- 数据集编号（Earth Engine ID）：`WORLDCLIM/V1/MONTHLY`
- 数据类型：影像集合（ImageCollection）
- 提供方：University of California, Berkeley、Google Earth Engine
- 时间范围：1960-01-01 至 1991-01-01
- 空间分辨率：927.67 米
- 许可：CC-BY-SA-4.0
- 关键词：berkeley, climate, monthly, precipitation, temperature, weather, weather-and-climate, worldclim

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| tavg | Mean temperature | 927.67 |  |
| tmin | Minimum temperature | 927.67 |  |
| tmax | Maximum temperature | 927.67 |  |
| prec | Precipitation | 927.67 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('WORLDCLIM/V1/MONTHLY');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WORLDCLIM_V1_MONTHLY
- 数据引用：Hijmans, R.J., S.E. Cameron, J.L. Parra, P.G. Jones and A. Jarvis,
2005. Very High Resolution Interpolated Climate Surfaces for Global Land
Areas. International Journal of Climatology 25: 1965-1978.
[doi:10.1002/joc.1276](https://doi.org/10.1002/joc.1276).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
