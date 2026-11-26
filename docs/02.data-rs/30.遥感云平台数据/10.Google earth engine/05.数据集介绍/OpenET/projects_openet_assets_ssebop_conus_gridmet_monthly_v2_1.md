---
title: "OpenET SSEBop 逐月蒸散发 v2.1"
date: 2026-11-03 12:00:00
permalink: /pages/58312ad1/
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

# OpenET SSEBop 逐月蒸散发 v2.1

英文原名：OpenET SSEBop Monthly Evapotranspiration v2.1

## 这是什么数据

业务化简化地表能量平衡（SSEBop）。

SSEBop 模型（Senay 等，2013；2023）是基于热红外的方法，使用卫星心理测量学原理估算实际蒸散发（ET）（Senay，2018）。作为 OpenET 集合的核心模型之一，SSEBop 为大范围业务化 ET 制图提供计算高效的框架。

OpenET 集合 2.1 的 SSEBop 实现依赖两个主要输入：

1. Landsat 第 2 集合 2 级科学产品的地表温度。2. gridMET 的格网参考 ET（Abotzoglou，2013）。

关键模型参数，包括冷/湿球参考温度（Tc）与地表心理测量常数（1/dT），由观测地表温度、归一化植被指数（NDVI）与 ERA5 净辐射数据（DOI：10.5066/P9JBW6R9）的组合派生。这些组件在 Google Earth Engine 处理环境中整合，连接全套 SSEBop 算法以生成中间产出与聚合 ET 产品。在整个美国本土的广泛评估（Senay 等，2022；Volk 等，2024；Ji 等，2025；Khand 等，2025）指导了基于云的实现，并证明了该模型在作物用水评估与区域水量预算分析等应用中的效用。

对于 OpenET 集合 2.1，SSEBop 模型 v0.7.1（Senay 等，2026）包含一项值得注意的增强：改进了确定 Tc 的强迫与归一化操作（FANO）方程实现。此更新增强了模型表示低 NDVI 湿表面的能力，改善了植被信号弱或混合区域（尤其冠层覆盖稀疏时的农田与草地）的性能。**OpenET 集合 v2.1**

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
var dataset = ee.ImageCollection('projects/openet/assets/ssebop/conus/gridmet/monthly/v2_1');
```

- 数据集编号（Earth Engine ID）：`projects/openet/assets/ssebop/conus/gridmet/monthly/v2_1`
- 提供方：OpenET, Inc.、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_openet_assets_ssebop_conus_gridmet_monthly_v2_1

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
