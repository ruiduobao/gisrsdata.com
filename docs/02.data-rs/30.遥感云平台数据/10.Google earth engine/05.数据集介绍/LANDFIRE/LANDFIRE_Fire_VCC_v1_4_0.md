---
title: "LANDFIRE VCC（植被状况类别）v1.4.0"
date: 2026-11-03 12:00:00
permalink: /pages/b1c52829/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "doi"
  - "fire"
  - "landfire"
  - "nature-conservancy"
  - "usda"
  - "usgs"
  - "vegetation"
  - "wildfire"
---

# LANDFIRE VCC（植被状况类别）v1.4.0

英文原名：LANDFIRE VCC (Vegetation Condition Class) v1.4.0

## 这是什么数据

LANDFIRE（LF），即景观火灾与资源管理规划工具（Landscape Fire and Resource Management Planning Tools），是美国农业部（USDA）林务局、美国内政部地质调查局与大自然保护协会的野地火灾管理项目之间的共享计划。

LANDFIRE（LF）的历史火灾制度、间隔与植被状况使用植被动态开发工具（VDDT）绘制。这些数据支持《国家野地火灾管理凝聚战略》、《联邦野地火灾管理政策》与《健康森林恢复法》中的火灾与景观管理规划目标。

植被状况类别（VCC）是相关植被偏离（VDEP）图层的简单分类，表示当前植被与模拟历史植被参考状况的差异的总体程度。VDEP 与 VCC 基于最初在《跨部门火灾制度状况类别指南》中描述的方法，但与之并不完全相同。所用方法的完整描述见 VDEP 产品说明。用户在跨 LANDFIRE（LF）版本比较 VDEP 或 VCC 值之前应审阅这些方法。VCC 是 VDEP 图层的派生。理解 VDEP 空间产品的特征很重要，特别是当跨版本比较 VCC 值时，因为 VDEP 方法的差异直接影响跨版本 VDEP 与 VCC 的可比性。在 LF 2012 中，原来的三个 VCC 类别被对半拆分，形成六个 VCC 类别，以提供更高的精度。

LANDFIRE 火灾数据集包括：

* 火灾制度组（FRG）：旨在基于植被动态、火蔓延、火效应与空间背景之间的相互作用，刻画景观内假定的历史火灾制度
* 平均火返回间隔（MFRI）：量化假定历史火灾制度下两次火灾之间的平均间隔
* 低严重度火百分比（PLS）影像：量化假定历史火灾制度下低严重度火相对于混合与置换严重度火的量，定义为给定植被类型在典型火周界内平均顶梢致死率小于 25%
* 混合严重度火百分比（PMS）图层：量化假定历史火灾制度下混合严重度火相对于低与置换严重度火的量，定义为给定植被类型在典型火周界内平均顶梢致死率在 25% 至 75% 之间
* 置换严重度火百分比（PRS）图层：量化假定历史火灾制度下置换严重度火相对于低与混合严重度火的量，定义为给定植被类型在典型火周界内平均顶梢致死率大于 75%
* 演替类别（SClass）图层：就每个生物物理设定内出现的演替状态的植被物种组成、覆盖与高度范围，刻画当前植被状况
* 植被状况类别（VCC）：是相关植被偏离（VDEP）图层的简单分类，表示当前植被与模拟历史植被参考状况的差异的总体程度
* 植被偏离（VDep）：表示景观上当前植被与估算历史状况的差异程度。VDep 基于物种组成、结构阶段与冠层郁闭度的变化。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：美国本土（CONUS）；时间：2014 年；分辨率：30 米。
- 时间范围：2014-09-01 至 2014-09-01

## 分辨率与规格

- 空间分辨率：约 30 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| VCC | 植被状况类别。 | 30 |  |

## 能拿来做什么

- 历史火灾制度分析
- 景观评估与火灾管理规划
- 燃料与植被管理

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('LANDFIRE/Fire/VCC/v1_4_0');
```

- 数据集编号（Earth Engine ID）：`LANDFIRE/Fire/VCC/v1_4_0`
- 提供方：U.S. Department of Agriculture's (USDA), U.S. Forest Service (USFS), U.S.
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDFIRE_Fire_VCC_v1_4_0

## 许可与引用

- 许可：proprietary
- 关键词：doi, fire, landfire, nature-conservancy, usda, usgs, vegetation, wildfire
- 数据引用：The suggested way to cite LANDFIRE products is specific to each product,
so the model for citation is provided, with an example for a particular product.
Producer. Year released. Product xxxxx:

- Individual model name.
- BpS Models and Descriptions, Online. LANDFIRE. Washington, DC. U.S. Department of
  Agriculture, Forest Service
- U.S. Department of the Interior; U.S. Geological Survey; Arlington, VA
- The Nature Conservancy (Producers). Available- URL. Access date.

Example Citation: LANDFIRE Biophysical Settings. 2018. Biophysical setting 14420:
South Texas sand sheet grassland. In: LANDFIRE Biophysical Setting Model: Map zone 36,
[Online]. In: BpS Models and Descriptions. In: LANDFIRE. Washington, DC:
U.S. Department of Agriculture, Forest Service; U.S. Department of the Interior;
U.S. Geological Survey; Arlington, VA: The Nature Conservancy (Producers).
Available: [https://www.landfire.gov/bps-models.php](https://www.landfire.gov/bps-models.php) [2018, June 27].
Additional guidance on citation of LANDFIRE products can be found
[here](https://landfire.gov/data/citation)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [LANDFIRE FRG (Fire Regime Groups) v1.2.0](/pages/fe1e8477/)
- [LANDFIRE MFRI (Mean Fire Return Interval) v1.2.0](/pages/fde00c02/)
- [LANDFIRE PLS (Percent Low-severity Fire) v1.2.0](/pages/cfcc463e/)
- [LANDFIRE PMS (Percent of Mixed-severity Fire) v1.2.0](/pages/d008693d/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
