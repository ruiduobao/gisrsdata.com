---
title: "ECOSTRESS Land Surface Temperature and Emissivity L2 Global 70 m V002"
date: 2026-11-03 12:00:00
permalink: /pages/f726b0e6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ecostress"
  - "emissivity"
  - "land"
  - "lst"
  - "plant-productivity"
  - "temperature"
---

# ECOSTRESS Land Surface Temperature and Emissivity L2 Global 70 m V002

## 数据集简介

The ECOSTRESS Land Surface Temperature and Emissivity (ECO_L2T_LSTE) V002
dataset provides Land Surface Temperature (LST), LST error, Quality Control
flags, Broadband Emissivity, cloud mask, surface height, water mask, and
view zenith angle data at a 70m spatial resolution. This product is derived
from ECOSTRESS observations and is essential for understanding surface
energy balance and water stress.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/1655/ECO_L1C-4_Grid_Tile_User_Guide_V2.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1869/ECOSTRESSL3JET_ATBD_V1.pdf)

* [General Documentation](https://github.com/nasa/ECOSTRESS-Data-Resources)

* [Land Processes Distributed Active Archive Center](https://www.earthdata.nasa.gov/centers/lp-daac)

## 基本信息

- 数据集编号（Earth Engine ID）：`NASA/ECOSTRESS/L2T_LSTE/V2`
- 数据类型：影像集合（ImageCollection）
- 提供方：Land Processes Distributed Active Archive Center、Google Earth Engine
- 时间范围：2018-07-09 至 2026-11-01
- 空间分辨率：70 米
- 许可：proprietary
- 关键词：ecostress, emissivity, land, lst, plant-productivity, temperature

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LST | Land Surface Temperature | 70 |  |
| LST_err | Land Surface Temperature error | 70 |  |
| QC | Quality Control flags for LST and emissivity | 70 |  |
| EmisWB | Wide band Emissivity | 70 |  |
| cloud | Cloud mask | 70 |  |
| height | Surface elevation of observation" | 70 |  |
| water | Water mask | 70 |  |
| view_zenith | View Zenith Angle | 70 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NASA/ECOSTRESS/L2T_LSTE/V2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_ECOSTRESS_L2T_LSTE_V2
- 数据引用：Hook, Simon, et al. ECOSTRESS Land Surface Temperature and Emissivity L2 Global 70 m
v002. NASA Land Processes Distributed Active Archive Center, 2023,
doi:[10.5067/ECOSTRESS/ECO_L2T_LSTE.002](https://doi.org/10.5067/ECOSTRESS/ECO_L2T_LSTE.002)

- DOI：10.5067/ECOSTRESS/ECO_L2T_LSTE.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
