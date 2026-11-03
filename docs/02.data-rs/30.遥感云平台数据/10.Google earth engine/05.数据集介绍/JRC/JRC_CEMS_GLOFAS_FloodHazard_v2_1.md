---
title: "JRC Global River Flood Hazard Maps Version 2.1"
date: 2026-11-03 12:00:00
permalink: /pages/c512c2e1/
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

# JRC Global River Flood Hazard Maps Version 2.1

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

This version also includes additional datasets. For each tile, a flood
hazard map is available with water depth categorized according to the GloFAS
"Flood hazard 100 year return period" static layer. Furthermore, the
"spurious_depth_category" band identifies areas where depths greater than
10m are predicted in small channels (less than 3,000km^2) for the 10-year
return period, including a 2km buffer.

Note: The band structure has been updated in this version (v2). Each return
period now has separate bands for depth and depth category. Additionally,
bands for permanent water class and spurious depth category are included.

## 基本信息

- 数据集编号（Earth Engine ID）：`JRC/CEMS_GLOFAS/FloodHazard/v2_1`
- 数据类型：影像集合（ImageCollection）
- 提供方：Joint Research Centre、Google Earth Engine
- 时间范围：2024-03-16 至 2024-03-16
- 空间分辨率：90 米
- 许可：CC-BY-4.0
- 关键词：flood, monitoring, surface-ground-water, wri

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| RP10_depth | Flood inundation depth for return period 10 years | 90 |  |
| RP20_depth | Flood inundation depth for return period 20 years | 90 |  |
| RP50_depth | Flood inundation depth for return period 50 years | 90 |  |
| RP75_depth | Flood inundation depth for return period 75 years | 90 |  |
| RP100_depth | Flood inundation depth for return period 100 years | 90 |  |
| RP200_depth | Flood inundation depth for return period 200 years | 90 |  |
| RP500_depth | Flood inundation depth for return period 500 years | 90 |  |
| RP10_depth_category | Water depth categorized as the GloFAS Flood hazard 100 year return period static layer for return period 10 years | 90 |  |
| RP20_depth_category | Water depth categorized as the GloFAS Flood hazard 100 year return period static layer for return period 20 years | 90 |  |
| RP50_depth_category | Water depth categorized as the GloFAS Flood hazard 100 year return period static layer for return period 50 years | 90 |  |
| RP75_depth_category | Water depth categorized as the GloFAS Flood hazard 100 year return period static layer for return period 75 years | 90 |  |
| RP100_depth_category | Water depth categorized as the GloFAS Flood hazard 100 year return period static layer for return period 100 years | 90 |  |
| RP200_depth_category | Water depth categorized as the GloFAS Flood hazard 100 year return period static layer for return period 200 years | 90 |  |
| RP500_depth_category | Water depth categorized as the GloFAS Flood hazard 100 year return period static layer for return period 500 years | 90 |  |
| permanent_water_class | Permanent water bodies used to patch the flood hazard maps  | 90 |  |
| spurious_depth_category | Identifies areas where depths >10m are predicted in small channels (<3,000km^2) for the 10-year return period, plus a 2km buffer  | 90 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JRC/CEMS_GLOFAS/FloodHazard/v2_1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_CEMS_GLOFAS_FloodHazard_v2_1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
