---
title: "OpenET Ensemble Monthly Evapotranspiration v2.0 [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/016dc2cd/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "evapotranspiration"
  - "gridmet-derived"
  - "landsat-derived"
  - "monthly"
  - "openet"
  - "water"
  - "water-vapor"
---

# OpenET Ensemble Monthly Evapotranspiration v2.0 [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The OpenET dataset includes satellite-based data on the total amount of
water that is transferred from the land surface to the atmosphere through
the process of evapotranspiration (ET). OpenET provides ET data from
multiple satellite-driven models, and also calculates a single "ensemble
value" from the model ensemble. The models currently included in the OpenET
model ensemble are ALEXI/DisALEXI, eeMETRIC, geeSEBAL, PT-JPL, SIMS, and
SSEBop. The OpenET ensemble ET value is calculated as the mean of the
ensemble after filtering and removing outliers using the median absolute
deviation approach. All models currently use Landsat satellite data to
produce ET data at a pixel size of 30 meters by 30 meters (0.22 acres per
pixel). The monthly ET dataset provides data on total ET by month as an
equivalent depth of water in millimeters.

[Additional information](https://openetdata.org/methodologies/)

## 基本信息

- 数据集编号（Earth Engine ID）：`OpenET/ENSEMBLE/CONUS/GRIDMET/MONTHLY/v2_0`
- 数据类型：影像集合（ImageCollection）
- 提供方：OpenET, Inc.、Google Earth Engine
- 时间范围：1999-10-01 至 2024-12-01
- 空间分辨率：30 米
- 许可：CC-BY-4.0
- 关键词：evapotranspiration, gridmet-derived, landsat-derived, monthly, openet, water, water-vapor

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| et_ensemble_mad | Ensemble ET value, computed as the mean of the ensemble after filtering outliers using the median absolute deviation (mad)  | 30 |  |
| et_ensemble_mad_min | The minimum value in the ensemble range, after filtering for outliers using the median absolute deviation (mad)  | 30 |  |
| et_ensemble_mad_max | The maximum value in the ensemble range, after filtering for outliers using the median absolute deviation (mad)  | 30 |  |
| et_ensemble_mad_count | The number of models used to compute the ensemble ET value, after filtering for outliers using the median absolute deviation (mad)  | 30 |  |
| et_ensemble_mad_index | Bitmask indicating which models were included in the ensemble ET value, after filtering for outliers using the median absolute deviation (mad)  | 30 |  |
| et_ensemble_sam | The simple arithmetic mean (sam) of all six models in the OpenETmodel ensemble | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('OpenET/ENSEMBLE/CONUS/GRIDMET/MONTHLY/v2_0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenET_ENSEMBLE_CONUS_GRIDMET_MONTHLY_v2_0
- 数据引用：Melton, F., Huntington, J., Grimm, R., Herring, J., Hall, M., Rollison, D.,
Erickson, T., Allen, R., Anderson, M., Fisher, J., Kilic, A., Senay, G.,
volk, J., Hain, C., Johnson, L., Ruhoff, A., Blankenau, P., Bromley, M.,
Carrara, W., Daudert, B., Doherty, C., Dunkerly, C., Friedrichs, M., Guzman,
A., Halverson, G., Hansen, J., Harding, J., Kang, Y., Ketchum, D., Minor,
B., Morton, C., Revelle, P., Ortega-Salazar, S., Ott, T., Ozdogon, M.,
Schull, M., Wang, T., Yang, Y., Anderson, R., 2021. OpenET: Filling a
Critical Data Gap in Water Management for the Western United States.
Journal of the American Water Resources Association, 2021 Nov 2.
[doi:10.1111/1752-1688.12956](https://doi.org/10.1111/1752-1688.12956)

- DOI：10.1111/1752-1688.12956

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
