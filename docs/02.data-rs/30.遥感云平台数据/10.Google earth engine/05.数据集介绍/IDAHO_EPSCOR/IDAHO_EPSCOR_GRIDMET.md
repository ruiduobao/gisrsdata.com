---
title: "GRIDMET: University of Idaho Gridded Surface Meteorological Dataset"
date: 2026-11-03 12:00:00
permalink: /pages/824ff3bb/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "fireburning"
  - "gridmet"
  - "humidity"
  - "merced"
  - "metdata"
  - "nfdrs"
  - "precipitation"
  - "radiation"
  - "temperature"
  - "water-vapor"
  - "weather-and-climate"
---

# GRIDMET: University of Idaho Gridded Surface Meteorological Dataset

## 数据集简介

The Gridded Surface Meteorological dataset provides
high spatial resolution (~4-km) daily surface fields of temperature,
precipitation, winds, humidity and radiation across the contiguous
United States from 1979. The dataset blends the high resolution
spatial data from PRISM with the high temporal resolution data
from the National Land Data Assimilation System (NLDAS) to produce
spatially and temporally continuous fields that lend themselves
to additional land surface modeling.

This dataset contains provisional products that are replaced with
updated versions when the complete source data become available.
Products can be distinguished by the value of the 'status' property.
At first, assets are ingested with status='early'. After several
days, they are replaced by assets with status='provisional'.
After about 2 months, they are replaced by the final assets with
status='permanent'.

## 基本信息

- 数据集编号（Earth Engine ID）：`IDAHO_EPSCOR/GRIDMET`
- 数据类型：影像集合（ImageCollection）
- 提供方：University of California Merced、Google Earth Engine
- 时间范围：1979-01-01 至 2026-10-26
- 空间分辨率：4638.3 米
- 许可：proprietary
- 关键词：climate, fireburning, gridmet, humidity, merced, metdata, nfdrs, precipitation, radiation, temperature, water-vapor, weather-and-climate, wind

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| pr | Precipitation amount | 4638.3 |  |
| rmax | Maximum relative humidity | 4638.3 |  |
| rmin | Minimum relative humidity | 4638.3 |  |
| sph | Specific humididy | 4638.3 |  |
| srad | Surface downward shortwave radiation | 4638.3 |  |
| th | Wind direction | 4638.3 |  |
| tmmn | Minimum temperature | 4638.3 |  |
| tmmx | Maximum temperature | 4638.3 |  |
| vs | Wind velocity at 10m | 4638.3 |  |
| erc | Energy release component | 4638.3 |  |
| eto | Daily grass reference evapotranspiration | 4638.3 |  |
| bi | Burning index | 4638.3 |  |
| fm100 | 100-hour dead fuel moisture | 4638.3 |  |
| fm1000 | 1000-hour dead fuel moisture | 4638.3 |  |
| etr | Daily alfalfa reference evapotranspiration | 4638.3 |  |
| vpd | Mean vapor pressure deficit | 4638.3 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('IDAHO_EPSCOR/GRIDMET');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IDAHO_EPSCOR_GRIDMET
- 数据引用：Abatzoglou J. T., Development of gridded surface meteorological
data for ecological applications and modelling, International Journal
of Climatology. (2012) [doi:10.1002/joc.3413](https://doi.org/10.1002/joc.3413)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
