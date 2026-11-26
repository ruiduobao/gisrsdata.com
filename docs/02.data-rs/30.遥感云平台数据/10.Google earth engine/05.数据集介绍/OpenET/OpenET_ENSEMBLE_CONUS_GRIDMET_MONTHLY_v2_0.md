---
title: "OpenET 集合逐月蒸散发 v2.0 [已弃用]"
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

# OpenET 集合逐月蒸散发 v2.0 [已弃用]

英文原名：OpenET Ensemble Monthly Evapotranspiration v2.0 [deprecated]

## 这是什么数据

OpenET 数据集包括基于卫星的数据，记录通过蒸散发（ET）过程从陆地表面转移到大气的水量。OpenET 提供来自多个卫星驱动模型的 ET 数据，并从模型集合计算单一的「集合值」。当前 OpenET 模型集合包括的模型有 ALEXI/DisALEXI、eeMETRIC、geeSEBAL、PT-JPL、SIMS 与 SSEBop。OpenET 集合 ET 值在使用中位绝对偏差方法过滤并去除异常值后，取集合的平均值计算。所有模型当前都使用 Landsat 卫星数据，以 30 米 × 30 米（每像元 0.22 英亩）的像元大小生产 ET 数据。逐月 ET 数据集提供按月的总 ET，以毫米等效水深表示。

[更多信息](https://openetdata.org/methodologies/)

## 覆盖范围与时间

- 覆盖范围：空间：美国本土（CONUS）；时间：1999 年至 2024 年（逐月）；分辨率：30 米。
- 时间范围：1999-10-01 至 2024-12-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| et_ensemble_mad | 集合 ET 值，使用中位绝对偏差（mad）过滤异常值后取集合的平均值计算 | 30 |  |
| et_ensemble_mad_min | 使用中位绝对偏差（mad）过滤异常值后，集合范围内的最小值 | 30 |  |
| et_ensemble_mad_max | 使用中位绝对偏差（mad）过滤异常值后，集合范围内的最大值 | 30 |  |
| et_ensemble_mad_count | 使用中位绝对偏差（mad）过滤异常值后，用于计算集合 ET 值的模型数量 | 30 |  |
| et_ensemble_mad_index | 位掩膜，标明哪些模型被纳入集合 ET 值（使用中位绝对偏差（mad）过滤异常值后） | 30 |  |
| et_ensemble_sam | OpenET 模型集合全部六个模型的简单算术平均（sam）（原文作「OpenETmodel」，缺空格） | 30 |  |

## 能拿来做什么

- 做农田尺度灌溉用水与蒸散发监测。
- 为水资源管理与干旱评估提供逐月 ET 数据。
- 比较多模型集合与单模型 ET 结果的差异。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('OpenET/ENSEMBLE/CONUS/GRIDMET/MONTHLY/v2_0');
```

- 数据集编号（Earth Engine ID）：`OpenET/ENSEMBLE/CONUS/GRIDMET/MONTHLY/v2_0`
- 提供方：OpenET, Inc.、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenET_ENSEMBLE_CONUS_GRIDMET_MONTHLY_v2_0

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：evapotranspiration, gridmet-derived, landsat-derived, monthly, openet, water, water-vapor
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

## 同类数据

- [AG100：ASTER 全球发射率数据集 100 米 V003](/pages/3510f165/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ECOSTRESS 分片辅助 NDVI 与反照率 L2 全球 70 米 V002](/pages/a7bebe55/)
- [ECOSTRESS 地表温度与发射率 L2 全球 70 米 V002](/pages/f726b0e6/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
