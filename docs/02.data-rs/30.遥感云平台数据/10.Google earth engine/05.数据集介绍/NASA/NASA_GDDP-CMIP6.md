---
title: "NEX-GDDP-CMIP6: NASA Earth Exchange Global Daily Downscaled Climate Projections"
date: 2026-11-03 12:00:00
permalink: /pages/85afcbe3/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cag"
  - "climate"
  - "gddp"
  - "geophysical"
  - "ipcc"
  - "nasa"
  - "nex"
  - "precipitation"
  - "temperature"
  - "weather-and-climate"
---

# NEX-GDDP-CMIP6: NASA Earth Exchange Global Daily Downscaled Climate Projections

## 数据集简介

The NEX-GDDP-CMIP6 dataset is comprised of global downscaled climate
scenarios derived from the General Circulation Model (GCM) runs conducted
under the Coupled Model Intercomparison Project Phase 6 (CMIP6, see
[Thrasher et al. 2022](https://doi.org/10.7917/OFSG3345)) and across two of
the four "Tier 1" greenhouse gas emissions scenarios known as Shared
Socioeconomic Pathways (SSPs).

The CMIP6 GCM runs were developed in support of the Sixth Assessment Report
of the Intergovernmental Panel on Climate Change (IPCC AR6). This dataset
includes downscaled projections from ScenarioMIP model runs for which daily
scenarios were produced and distributed through the Earth System Grid
Federation.

This collection contains 34 different models. One model, "GFDL-CM4," has
data for two different configurations that can be differentiated by further
filtering on the *grid_label* property.

Bands are replaced as new versions become available and the *version*
property is updated with them.

See also
[the provider tech note](https://www.nccs.nasa.gov/wp-content/uploads/2024/03/NEX-GDDP-CMIP6-Tech_Note_4.pdf).

[You can submit data questions about CMIP6 to the provider](https://airtable.com/shr01weJfA7DYq6jf)
and
[see their answers](https://airtable.com/shrX4mj20TLSH0r2y/tblUMAYpCfCCwucSV).

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/GDDP-CMIP6`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA / Climate Analytics Group、Google Earth Engine
- 时间范围：1950-01-01 至 2100-12-31
- 空间分辨率：27830 米
- 许可：CC0-1.0
- 关键词：cag, climate, gddp, geophysical, ipcc, nasa, nex, precipitation, temperature, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| hurs | Near-surface relative humidity. Not present in these models: 'BCC-CSM2-MR', 'NESM3', 'KIOST-ESM' (only for scenario 'ssp245' in 2058).  | 27830 |  |
| huss | Near-surface specific humidity. Not present in these models: 'IPSL-CM6A-LR', 'MIROC6', 'NESM3'.  | 27830 |  |
| pr | Precipitation (mean of the daily precipitation rate) | 27830 |  |
| rlds | Surface downwelling longwave radiation | 27830 |  |
| rsds | Surface downwelling shortwave radiation | 27830 |  |
| sfcWind | Daily-mean near-surface wind speed | 27830 |  |
| tas | Daily near-surface air temperature. Not present in these models: 'NorESM2-LM' (only for scenario 'ssp585' in 2096).  | 27830 |  |
| tasmin | Daily minimum near-surface air temperature. Not present in these models: 'CESM2', 'CESM2-WACCM', 'IITM-ESM', 'TaiESM1' (only for scenario 'ssp585' in 2093).  | 27830 |  |
| tasmax | Daily maximum near-surface air temperature. Not present in these models: 'CESM2', 'CESM2-WACCM', 'IITM-ESM'.  | 27830 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/GDDP-CMIP6');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GDDP-CMIP6
- 数据引用：Thrasher, B., Maurer, E. P., McKellar, C., & Duffy, P. B., 2012:
Technical Note: Bias correcting climate model simulated daily temperature
extremes with quantile mapping. Hydrology and Earth System Sciences,
16(9), 3309-3314.
[doi:10.5194/hess-16-3309-2012](https://doi.org/10.5194/hess-16-3309-2012)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
