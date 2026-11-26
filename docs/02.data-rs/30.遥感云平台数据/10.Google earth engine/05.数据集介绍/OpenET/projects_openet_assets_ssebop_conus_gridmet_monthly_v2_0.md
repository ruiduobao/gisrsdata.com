---
title: "OpenET SSEBop 逐月蒸散发 v2.0"
date: 2026-11-03 12:00:00
permalink: /pages/61bf0158/
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

# OpenET SSEBop 逐月蒸散发 v2.0

英文原名：OpenET SSEBop Monthly Evapotranspiration v2.0

## 这是什么数据

业务化简化地表能量平衡（SSEBop）。

Senay 等（2013、2017）的业务化简化地表能量平衡（SSEBop）模型是基于热红外的简化地表能量模型，基于卫星心理测量学原理估算实际 ET（Senay 2018）。OpenET SSEBop 实现使用 Landsat（第 2 集合 2 级科学产品）的地表温度（Ts），关键模型参数（冷/湿球参考 Tc 与地表心理测量常数 1/dT）由观测地表温度、归一化植被指数（NDVI）、Daymet 的气候平均（1980–2017）逐日最高气温（Ta，1 公里）与 ERA-5 净辐射数据的组合派生。此模型实现使用 Google Earth Engine 处理框架，在生成中间与聚合 ET 结果时将关键 SSEBop ET 函数与算法连接起来。SSEBop 模型在整个美国本土的详细研究与评估（Senay 等，2022）为云实现与大尺度水量平衡应用评估提供了依据。值得注意的模型（v0.2.6）增强与相对先前版本的性能包括：增加对 Landsat 9（2021 年 9 月发射）的兼容、全球模型可扩展性，以及使用 FANO（强迫与归一化操作）改进 SSEBop 的参数化，以在所有景观与所有季节（无论植被覆盖密度）更好地估算 ET，从而避免将 Tc 外推到非定标区域、提高模型精度。

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
var dataset = ee.ImageCollection('projects/openet/assets/ssebop/conus/gridmet/monthly/v2_0');
```

- 数据集编号（Earth Engine ID）：`projects/openet/assets/ssebop/conus/gridmet/monthly/v2_0`
- 提供方：OpenET, Inc.、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_ssebop_conus_gridmet_monthly_v2_0

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：evapotranspiration, gridmet-derived, landsat-derived, monthly, openet, water, water-vapor
- 数据引用：Senay, G.B., Parrish, G.E., Schauer, M., Friedrichs, M., Khand, K., Boiko,
O., Kagone, S., Dittmeier, R., Arab, S. and Ji, L., 2023. Improving the
Operational Simplified Surface Energy Balance Evapotranspiration Model Using
the Forcing and Normalizing Operation. Remote Sensing, 15(1), p.260.
[doi:10.3390/rs15010260](https://doi.org/10.3390/rs15010260)

- DOI：10.3390/rs15010260

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [OpenET DisALEXI Monthly Evapotranspiration v2.0](/pages/d4a94ba4/)
- [OpenET DisALEXI Monthly Evapotranspiration v2.1](/pages/e41f7d19/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0](/pages/f842a55a/)
- [OpenET Ensemble Monthly Evapotranspiration v2.0 (1985-1999)](/pages/0e0267d6/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
