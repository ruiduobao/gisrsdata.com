---
title: "OpenET PT-JPL 逐月蒸散发 v2.1"
date: 2026-11-03 12:00:00
permalink: /pages/dd755809/
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

# OpenET PT-JPL 逐月蒸散发 v2.1

英文原名：OpenET PT-JPL Monthly Evapotranspiration v2.1

## 这是什么数据

Priestley-Taylor 喷气推进实验室（PT-JPL）。

OpenET 框架内 PT-JPL 模型的核心公式与 Fisher 等（2008）详述的原始公式没有变化。但对模型输入与时间积分做了增强与更新，以利用当代格网天气数据集、与其他模型保持一致、改进开阔水面蒸发估算，并考虑半干旱与干旱环境中作物与湿地区域的平流。这些变化包括：使用 Landsat 地表反射率与热辐射计算净辐射、光合有效辐射、植物冠层与水分变量；使用 NLDAS、Spatial CIMIS 与 gridMET 天气数据估算日射与 ASCE 参考 ET。与其他 OpenET 模型的实现类似，逐日与逐月时间积分 ET 的估算基于 ASCE 参考 ET 的分量。开阔水面蒸发按 Abdelrady 等（2016）的地表能量平衡方法估算，该方法针对水体、考虑水体热通量而非土壤热通量。 **OpenET 集合 v2.1**

OpenET 集合 v2.1 是集合 v2.0 的再处理更新版，主要旨在解决 v2.0 的已知问题，同时纳入小的模型改进与输入数据更新。预计两个集合版本之间的 ET 在某些地点与时间会有明显差异。部分更新与变化包括：

* 额外的云筛查与过滤，跳过含未掩膜云和/或大面积积雪的 Landsat 影像。* 重新处理以纳入 NLDAS-2 与 GRIDMET 输入气象数据集的更新。* 对所有需要土地覆盖信息的模型纳入 USGS 年度 NLCD 产品。* 对所有需要作物类型信息的模型纳入最新 USDA CDL。* 更新插值，使逐月 ET 仅当月中所有天都有插值时才生产（减少多云/多雪或低覆盖时期的「count=0」月份）。* 应用发射率校正，解决 Landsat LST 数据的一个已知问题。

[更多信息](https://etdata.org/methods/)

## 覆盖范围与时间

- 覆盖范围：空间：美国本土（CONUS）；时间：2015 年至 2026 年（逐月）；分辨率：30 米。
- 时间范围：2015-10-01 至 2026-09-01

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
var dataset = ee.ImageCollection('projects/openet/assets/ptjpl/conus/gridmet/monthly/v2_1');
```

- 数据集编号（Earth Engine ID）：`projects/openet/assets/ptjpl/conus/gridmet/monthly/v2_1`
- 提供方：OpenET, Inc.、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_ptjpl_conus_gridmet_monthly_v2_1

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
