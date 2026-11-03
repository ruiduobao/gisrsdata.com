---
title: "WRI Aqueduct Floods Hazard Maps Version 2"
date: 2026-11-03 12:00:00
permalink: /pages/770eae24/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "flood"
  - "monitoring"
  - "surface-ground-water"
  - "wri"
---

# WRI Aqueduct Floods Hazard Maps Version 2

## 数据集简介

Aqueduct Floods data measures riverine and coastal food risks under both
current baseline conditions and future projections in 2030, 2050, and 2080.
In addition to providing hazard maps and assessing risks, Aqueduct Floods
helps to conduct comprehensive cost-benefit analysis to evaluate the value
of dike flood protection strategies.

Aqueduct Floods aims to empower disaster risk analysts and managers with
quantitative information on food risks and adaptation strategy costs, and to
help inform policy and investment decision-making.

Google Earth Engine team recommendation:

This dataset can be used for:

* Larger scale regional analysis: what is the broad risk to the big area of
  the size of a US county level / large city?
* Preliminary assessments: when you need a quick, regional-scale "first
  look" at potential changes in river discharge without needing precise
  floodplain inundation maps.
* Relative changes: This looks at different climate scenarios so can be
  used for generalized changes in magnitude of impacts

This dataset should not be used for:

* Detailed flood inundation mapping: such as looking at properties specific
  risk
* Flat, lowland rivers: the simplification of the equations do not take
  into account backwater effects (water flowing backwards) which happens a
  lot in flood plains
* Analyzing hydraulic structures: it is not suitable for assessing the
  specific impact of structures like bridges, levees, or weirs that cause
  significant backwater effects

Please see
[the technical note](https://files.wri.org/d8/s3fs-public/aqueduct-floods-methodology.pdf)
from data provider for full details on the methods used and to
understand if this data is right for your application.

## 基本信息

- 数据集编号（Earth Engine ID）：`WRI/Aqueduct_Flood_Hazard_Maps/V2`
- 数据类型：影像集合（ImageCollection）
- 提供方：World Resources Institute、Google Earth Engine
- 时间范围：2010-01-01 至 2080-12-31
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：flood, monitoring, surface-ground-water, wri

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| inundation_depth | Flood inundation depth | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('WRI/Aqueduct_Flood_Hazard_Maps/V2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/WRI_Aqueduct_Flood_Hazard_Maps_V2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
