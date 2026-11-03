---
title: "JRC Global River Flood Hazard Maps Version 1 [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/a326b13b/
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

# JRC Global River Flood Hazard Maps Version 1 [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The global river flood hazard maps are a gridded data set representing
inundation along the river network, for seven different flood return periods
(from 1-in-10-years to 1-in-500-years). The input river flow data for the
new maps are produced by means of the open-source hydrological model
LISFLOOD, while inundation simulations are performed with the hydrodynamic
model LISFLOOD-FP. The extent comprises the entire world with the exception
of Greenland and Antarctica and small islands with river basins smaller than
500 km^2.

Cell values indicate water depth (in meters). The maps can be used to assess
the exposure of population and economic assets to river floods, and to
perform flood risk assessments. The dataset is created as part of the
Copernicus Emergency Management Service.

## 基本信息

- 数据集编号（Earth Engine ID）：`JRC/CEMS_GLOFAS/FloodHazard/v1`
- 数据类型：影像集合（ImageCollection）
- 提供方：Joint Research Centre、Google Earth Engine
- 时间范围：2024-03-16 至 2024-03-16
- 空间分辨率：90 米
- 许可：CC-BY-4.0
- 关键词：flood, monitoring, surface-ground-water, wri

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| depth | Flood inundation depth | 90 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JRC/CEMS_GLOFAS/FloodHazard/v1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_CEMS_GLOFAS_FloodHazard_v1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
