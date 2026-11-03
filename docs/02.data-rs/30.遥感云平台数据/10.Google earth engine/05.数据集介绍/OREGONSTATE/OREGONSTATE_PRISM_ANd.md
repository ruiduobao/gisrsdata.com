---
title: "PRISM Daily Spatial Dataset ANd"
date: 2026-11-03 12:00:00
permalink: /pages/fe60f87e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
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

# PRISM Daily Spatial Dataset ANd

## 数据集简介

The PRISM daily and monthly datasets are gridded weather
datasets for the conterminous United States, produced by the
PRISM Group at Oregon State University.
This collection contains both AN81 and AN91
data, indicated by the 'dataset_type' property.

Grids are
developed using PRISM (Parameter-elevation Regressions on Independent
Slopes Model). PRISM interpolation routines simulate how weather
varies with elevation, and account for coastal effects,
temperature inversions, and terrain barriers that can cause rain
shadows. Station data are assimilated from many networks across
the country. For more information, see the [Descriptions of PRISM
Spatial Datasets](https://www.prism.oregonstate.edu/documents/PRISM_datasets.pdf).

**Note**

* **Warning**: This dataset should not be
  used to calculate century-long trends due to non-weather-related
  variations from station equipment and location changes, openings
  and closings, varying observation times, and the use of relatively
  short-term networks. Please see the [dataset documentation
  ](https://www.prism.oregonstate.edu/documents/PRISM_datasets.pdf)
  for more details.
* The assets have start time of noon UTC, not midnight UTC.
* It takes time for observation networks to conduct quality control and
  release station data. Therefore,
  PRISM datasets are re-modeled several times until six months
  have elapsed, when they are considered permanent. A [release
  schedule is available](https://www.prism.oregonstate.edu/calendar/).

## 基本信息

- 数据集编号（Earth Engine ID）：`OREGONSTATE/PRISM/ANd`
- 数据类型：影像集合（ImageCollection）
- 提供方：PRISM / OREGONSTATE、Google Earth Engine
- 时间范围：1981-01-01 至 2026-10-29
- 空间分辨率：4638.3 米
- 许可：proprietary
- 关键词：daily, geophysical, oregonstate, precipitation, pressure, prism, temperature, vapor, weather, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ppt | Daily total precipitation (including rain and melted snow) | 4638.3 |  |
| tmean | Daily mean temperature (calculated as (tmin+tmax)/2) | 4638.3 |  |
| tmin | Daily minimum temperature | 4638.3 |  |
| tmax | Daily maximum temperature | 4638.3 |  |
| tdmean | Daily mean dew point temperature | 4638.3 |  |
| vpdmin | Daily minimum vapor pressure deficit | 4638.3 |  |
| vpdmax | Daily maximum vapor pressure deficit | 4638.3 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('OREGONSTATE/PRISM/ANd');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OREGONSTATE_PRISM_ANd
- 数据引用：[Daly, C., Halbleib, M., Smith, J.I., Gibson, W.P., Doggett, M.K.,
Taylor, G.H., Curtis, J., and Pasteris, P.A. 2008. Physiographically-sensitive
mapping of temperature and precipitation across the conterminous
United States. International Journal of Climatology, 28: 2031-2064](https://www.prism.oregonstate.edu/documents/pubs/2008intjclim_physiographicMapping_daly.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
