---
title: "OpenET 集合逐月蒸散发 v2.0（1985–1999）"
date: 2026-11-03 12:00:00
permalink: /pages/0e0267d6/
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

# OpenET 集合逐月蒸散发 v2.0（1985–1999）

英文原名：OpenET Ensemble Monthly Evapotranspiration v2.0 (1985-1999)

## 这是什么数据

OpenET 数据集包括基于卫星的数据，记录通过蒸散发（ET）过程从陆地表面转移到大气的水量。OpenET 提供来自多个卫星驱动模型的 ET 数据，并从模型集合计算单一的「集合值」。当前 OpenET 模型集合包括的模型有 ALEXI/DisALEXI、eeMETRIC、geeSEBAL、PT-JPL、SIMS 与 SSEBop。OpenET 集合 ET 值在使用中位绝对偏差方法过滤并去除异常值后，取集合的平均值计算。所有模型当前都使用 Landsat 卫星数据，以 30 米 × 30 米（每像元 0.22 英亩）的像元大小生产 ET 数据。逐月 ET 数据集提供按月的总 ET，以毫米等效水深表示。

注：DisALEXI 在 2001 年之前无法生成，不纳入本集合的计算。

**OpenET 集合 v2.0，2000 年前（1985–1999）**

注：本集合不应与主 v2.0 集合合并来计算长期趋势、年度总量或距平类计算，除非注意识别并填补缺口或缺失数据。本集合仅使用 Landsat 5 数据生成，数据缺口（空间与时间上）将多于纳入多颗 Landsat 卫星（5 与 7、7 与 8 等）数据的主 v2.0 集合。这个 2000 年前集合可能有长时间无数据，尤其在冬季月份，早年（1985–1993）的大片区域可能完全无数据。

[更多信息](https://etdata.org/methods/)

## 覆盖范围与时间

- 覆盖范围：空间：美国本土（CONUS）；时间：1984 年至 1999 年（逐月）；分辨率：30 米。
- 时间范围：1984-10-01 至 1999-10-01

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
var dataset = ee.ImageCollection('projects/openet/assets/ensemble/conus/gridmet/monthly/v2_0_pre2000');
```

- 数据集编号（Earth Engine ID）：`projects/openet/assets/ensemble/conus/gridmet/monthly/v2_0_pre2000`
- 提供方：OpenET, Inc.、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_ensemble_conus_gridmet_monthly_v2_0_pre2000

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

- [OpenET DisALEXI Monthly Evapotranspiration v2.0](/pages/d4a94ba4/)
- [OpenET DisALEXI Monthly Evapotranspiration v2.1](/pages/e41f7d19/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0](/pages/f842a55a/)
- [OpenET Ensemble Monthly Evapotranspiration v2.1](/pages/e711299d/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
