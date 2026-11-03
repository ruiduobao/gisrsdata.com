---
title: "PRISM Long-Term Normals Dataset Norm91m"
date: 2026-11-03 12:00:00
permalink: /pages/65fc7dbe/
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

# PRISM Long-Term Normals Dataset Norm91m

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

- 数据集编号（Earth Engine ID）：`OREGONSTATE/PRISM/Norm91m`
- 数据类型：影像集合（ImageCollection）
- 提供方：PRISM / OREGONSTATE、Google Earth Engine
- 时间范围：1991-01-01 至 2020-12-31
- 空间分辨率：928 米
- 许可：proprietary
- 关键词：30-year, geophysical, oregonstate, precipitation, pressure, prism, temperature, vapor, weather, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ppt | 30-year average of monthly total precipitation (including rain and melted snow) | 928 |  |
| tmean | 30-year average of monthly mean temperature (calculated as (tmin+tmax)/2) | 928 |  |
| tmin | 30-year average of monthly minimum temperature | 928 |  |
| tmax | 30-year average of monthly maximum temperature | 928 |  |
| tdmean | 30-year average of monthly mean dew point temperature | 928 |  |
| vpdmin | 30-year average of monthly minimum vapor pressure deficit | 928 |  |
| vpdmax | 30-year average of monthly maximum vapor pressure deficit | 928 |  |
| solclear | 30-year average of monthly global shortwave solar radiation received on a horizontal surface under clear sky conditions  | 928 |  |
| solslope | 30-year average of monthly global shortwave solar radiation received on a sloped surface  | 928 |  |
| soltotal | 30-year average of monthly global shortwave solar radiation received on a horizontal surface  | 928 |  |
| soltrans | 30-year average of atmospheric transmittance (cloudiness) | 928 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('OREGONSTATE/PRISM/Norm91m');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OREGONSTATE_PRISM_Norm91m
- 数据引用：Daly, C., Halbleib, M., Smith, J.I., Gibson, W.P., Doggett, M.K.,
Taylor, G.H., Curtis, J., and Pasteris, P.A. 2008. Physiographically-sensitive
mapping of temperature and precipitation across the conterminous
United States. International Journal of Climatology, 28: 2031-2064
[doi:10.1002/joc.1688](https://doi.org/10.1002/joc.1688)
[pdf](https://www.prism.oregonstate.edu/documents/pubs/2008intjclim_physiographicMapping_daly.pdf).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
