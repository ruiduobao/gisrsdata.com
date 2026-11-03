---
title: "PRISM Long-Term Normals Dataset Norm81m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/35c47a2e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "30-year"
  - "geophysical"
  - "oregonstate"
  - "precipitation"
  - "pressure"
  - "prism"
  - "temperature"
  - "vapor"
  - "weather"
  - "weather-and-climate"
---

# PRISM Long-Term Normals Dataset Norm81m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The PRISM daily and monthly datasets are gridded weather
datasets for the conterminous United States, produced by the
PRISM Group at Oregon State University.

Grids are
developed using PRISM (Parameter-elevation Regressions on Independent
Slopes Model). PRISM interpolation routines simulate how weather
varies with elevation, and account for coastal effects,
temperature inversions, and terrain barriers that can cause rain
shadows. Station data are assimilated from many networks across
the country. For more information, see the [Descriptions of PRISM
Spatial Datasets](https://www.prism.oregonstate.edu/documents/PRISM_datasets.pdf).

## 基本信息

- 数据集编号（Earth Engine ID）：`OREGONSTATE/PRISM/Norm81m`
- 数据类型：影像集合（ImageCollection）
- 提供方：PRISM / OREGONSTATE、Google Earth Engine
- 时间范围：1981-01-01 至 2010-12-31
- 空间分辨率：4638.3 米
- 许可：proprietary
- 关键词：30-year, geophysical, oregonstate, precipitation, pressure, prism, temperature, vapor, weather, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ppt | 30 Year average of monthly total precipitation (including rain and melted snow) | 4638.3 |  |
| tmean | 30 Year average of monthly mean temperature (calculated as (tmin+tmax)/2) | 4638.3 |  |
| tmin | 30 Year average of monthly minimum temperature | 4638.3 |  |
| tmax | 30 Year average of monthly maximum temperature | 4638.3 |  |
| tdmean | 30 Year average of monthly mean dew point temperature | 4638.3 |  |
| vpdmin | 30 Year average of monthly minimum vapor pressure deficit | 4638.3 |  |
| vpdmax | 30 Year average of monthly maximum vapor pressure deficit | 4638.3 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('OREGONSTATE/PRISM/Norm81m');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OREGONSTATE_PRISM_Norm81m
- 数据引用：Daly, C., Halbleib, M., Smith, J.I., Gibson, W.P., Doggett, M.K.,
Taylor, G.H., Curtis, J., and Pasteris, P.A. 2008. Physiographically-sensitive
mapping of temperature and precipitation across the conterminous
United States. International Journal of Climatology, 28: 2031-2064
[doi:10.1002/joc.1688](https://doi.org/10.1002/joc.1688)
[pdf](https://www.prism.oregonstate.edu/documents/pubs/2008intjclim_physiographicMapping_daly.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
