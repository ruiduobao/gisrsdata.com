---
title: "OpenET PT-JPL 逐月蒸散发 v2.0"
date: 2026-11-03 12:00:00
permalink: /pages/5e3fb372/
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

# OpenET PT-JPL 逐月蒸散发 v2.0

英文原名：OpenET PT-JPL Monthly Evapotranspiration v2.0

## 这是什么数据

Priestley-Taylor 喷气推进实验室（PT-JPL）。

OpenET 框架内 PT-JPL 模型的核心公式与 Fisher 等（2008）详述的原始公式没有变化。但对模型输入与时间积分做了增强与更新，以利用当代格网天气数据集、与其他模型保持一致、改进开阔水面蒸发估算，并考虑半干旱与干旱环境中作物与湿地区域的平流。这些变化包括：使用 Landsat 地表反射率与热辐射计算净辐射、光合有效辐射、植物冠层与水分变量；使用 NLDAS、Spatial CIMIS 与 gridMET 天气数据估算日射与 ASCE 参考 ET。与其他 OpenET 模型的实现类似，逐日与逐月时间积分 ET 的估算基于 ASCE 参考 ET 的分量。开阔水面蒸发按 Abdelrady 等（2016）的地表能量平衡方法估算，该方法针对水体、考虑水体热通量而非土壤热通量。

[更多信息](https://etdata.org/methods/)

## 覆盖范围与时间

- 覆盖范围：空间：美国本土（CONUS）；时间：1999 年至 2025 年（逐月）；分辨率：30 米。
- 时间范围：1999-10-01 至 2025-01-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| et | 实际蒸散发（ET）总量 | 30 |  |
| count | 当月纳入插值的无云观测数 | 30 |  |

## 能拿来做什么

- 做农田尺度灌溉用水与蒸散发监测。
- 为水资源管理与干旱评估提供逐月 ET 数据。
- 比较多模型集合与单模型 ET 结果的差异。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('projects/openet/assets/ptjpl/conus/gridmet/monthly/v2_0');
```

- 数据集编号（Earth Engine ID）：`projects/openet/assets/ptjpl/conus/gridmet/monthly/v2_0`
- 提供方：OpenET, Inc.、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_ptjpl_conus_gridmet_monthly_v2_0

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：evapotranspiration, gridmet-derived, landsat-derived, monthly, openet, water, water-vapor
- 数据引用：Fisher, J.B., Tu, K.P. and Baldocchi, D.D., 2008. Global estimates of the
land–atmosphere water flux based on monthly AVHRR and ISLSCP-II data,
validated at 16 FLUXNET sites. Remote Sensing of Environment, 112(3),
pp.901-919.
[doi:10.1016/j.rse.2007.06.025](https://doi.org/10.1016/j.rse.2007.06.025)

- DOI：10.1016/j.rse.2007.06.025

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [OpenET DisALEXI Monthly Evapotranspiration v2.0](/pages/d4a94ba4/)
- [OpenET DisALEXI Monthly Evapotranspiration v2.1](/pages/e41f7d19/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0](/pages/f842a55a/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0 (1985-1999)](/pages/0e0267d6/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
