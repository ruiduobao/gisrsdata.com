---
title: "HYCOM：混合坐标海洋模型，海水温度与盐度（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/0e7e9bc9/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "hycom"
  - "nopp"
  - "ocean"
  - "oceans"
  - "salinity"
  - "sst"
  - "water"
  - "water-temp"
---

# HYCOM：混合坐标海洋模型，海水温度与盐度（已弃用）

英文原名：HYCOM: Hybrid Coordinate Ocean Model, Water Temperature and Salinity [deprecated]

## 这是什么数据

混合坐标海洋模型（HYCOM）是一个数据同化的混合等密度-sigma-压力（广义）坐标海洋模型。EE 中托管的 HYCOM 数据子集包含盐度、温度、流速和高程变量。它们已被插值到 80.48°S 至 80.48°N 之间均匀的 0.08 度经纬度网格上。盐度、温度和流速变量已被插值到 40 个标准 z 层。

HYCOM 联盟包括国家海洋伙伴计划（NOPP），是美国全球海洋数据同化实验（GODAE）的一部分。

由国家海洋伙伴计划、海军研究办公室（ONR）和国防部高性能计算现代化计划资助。

更多信息见：

- [hycom.org](https://www.hycom.org/) - [GIS StackExchange hycom](https://gis.stackexchange.com/questions/tagged/hycom) - 维基百科 [HyCOM](https://en.wikipedia.org/wiki/HyCOM) - 维基百科 [List of ocean circulation models](https://en.wikipedia.org/wiki/List_of_ocean_circulation_models) - 维基百科 [Ocean general circulation model (OGCM)](https://en.wikipedia.org/wiki/Ocean_general_circulation_model)

## 覆盖范围与时间

- 覆盖范围：全球海洋（80.48°S–80.48°N）
- 时间范围：1992-10-02 至 2018-12-09

## 分辨率与规格

- 空间分辨率：约 8,905.6 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| water_temp_0 | 深度 0 米处的海水温度 | 8905.6 |  |
| salinity_0 | 深度 0 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_2 | 深度 2 米处的海水温度 | 8905.6 |  |
| salinity_2 | 深度 2 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_4 | 深度 4 米处的海水温度 | 8905.6 |  |
| salinity_4 | 深度 4 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_6 | 深度 6 米处的海水温度 | 8905.6 |  |
| salinity_6 | 深度 6 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_8 | 深度 8 米处的海水温度 | 8905.6 |  |
| salinity_8 | 深度 8 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_10 | 深度 10 米处的海水温度 | 8905.6 |  |
| salinity_10 | 深度 10 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_12 | 深度 12 米处的海水温度 | 8905.6 |  |
| salinity_12 | 深度 12 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_15 | 深度 15 米处的海水温度 | 8905.6 |  |
| salinity_15 | 深度 15 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_20 | 深度 20 米处的海水温度 | 8905.6 |  |
| salinity_20 | 深度 20 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_25 | 深度 25 米处的海水温度 | 8905.6 |  |
| salinity_25 | 深度 25 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_30 | 深度 30 米处的海水温度 | 8905.6 |  |
| salinity_30 | 深度 30 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_35 | 深度 35 米处的海水温度 | 8905.6 |  |
| salinity_35 | 深度 35 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_40 | 深度 40 米处的海水温度 | 8905.6 |  |
| salinity_40 | 深度 40 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_45 | 深度 45 米处的海水温度 | 8905.6 |  |
| salinity_45 | 深度 45 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_50 | 深度 50 米处的海水温度 | 8905.6 |  |
| salinity_50 | 深度 50 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_60 | 深度 60 米处的海水温度 | 8905.6 |  |
| salinity_60 | 深度 60 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_70 | 深度 70 米处的海水温度 | 8905.6 |  |
| salinity_70 | 深度 70 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_80 | 深度 80 米处的海水温度 | 8905.6 |  |
| salinity_80 | 深度 80 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_90 | 深度 90 米处的海水温度 | 8905.6 |  |
| salinity_90 | 深度 90 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_100 | 深度 100 米处的海水温度 | 8905.6 |  |
| salinity_100 | 深度 100 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_125 | 深度 125 米处的海水温度 | 8905.6 |  |
| salinity_125 | 深度 125 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_150 | 深度 150 米处的海水温度 | 8905.6 |  |
| salinity_150 | 深度 150 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_200 | 深度 200 米处的海水温度 | 8905.6 |  |
| salinity_200 | 深度 200 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_250 | 深度 250 米处的海水温度 | 8905.6 |  |
| salinity_250 | 深度 250 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_300 | 深度 300 米处的海水温度 | 8905.6 |  |
| salinity_300 | 深度 300 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_350 | 深度 350 米处的海水温度 | 8905.6 |  |
| salinity_350 | 深度 350 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_400 | 深度 400 米处的海水温度 | 8905.6 |  |
| salinity_400 | 深度 400 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_500 | 深度 500 米处的海水温度 | 8905.6 |  |
| salinity_500 | 深度 500 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_600 | 深度 600 米处的海水温度 | 8905.6 |  |
| salinity_600 | 深度 600 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_700 | 深度 700 米处的海水温度 | 8905.6 |  |
| salinity_700 | 深度 700 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_800 | 深度 800 米处的海水温度 | 8905.6 |  |
| salinity_800 | 深度 800 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_900 | 深度 900 米处的海水温度 | 8905.6 |  |
| salinity_900 | 深度 900 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_1000 | 深度 1000 米处的海水温度 | 8905.6 |  |
| salinity_1000 | 深度 1000 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_1250 | 深度 1250 米处的海水温度 | 8905.6 |  |
| salinity_1250 | 深度 1250 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_1500 | 深度 1500 米处的海水温度 | 8905.6 |  |
| salinity_1500 | 深度 1500 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_2000 | 深度 2000 米处的海水温度 | 8905.6 |  |
| salinity_2000 | 深度 2000 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_2500 | 深度 2500 米处的海水温度 | 8905.6 |  |
| salinity_2500 | 深度 2500 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_3000 | 深度 3000 米处的海水温度 | 8905.6 |  |
| salinity_3000 | 深度 3000 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_4000 | 深度 4000 米处的海水温度 | 8905.6 |  |
| salinity_4000 | 深度 4000 米处的海水盐度（实用盐度单位） | 8905.6 |  |
| water_temp_5000 | 深度 5000 米处的海水温度 | 8905.6 |  |
| salinity_5000 | 深度 5000 米处的海水盐度（实用盐度单位） | 8905.6 |  |

## 能拿来做什么

- 海水温盐结构分析
- 海洋热含量研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('HYCOM/GLBu0_08/sea_temp_salinity');
```

- 数据集编号（Earth Engine ID）：`HYCOM/GLBu0_08/sea_temp_salinity`
- 提供方：NOPP、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/HYCOM_GLBu0_08_sea_temp_salinity

## 许可与引用

- 许可：proprietary
- 关键词：hycom, nopp, ocean, oceans, salinity, sst, water, water-temp
- 数据引用：J. A. Cummings and O. M. Smedstad. 2013: Variational Data Assimilation for
the Global Ocean. Data Assimilation for Atmospheric, Oceanic and Hydrologic
Applications vol II, chapter 13, 303-343.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [HYCOM: Hybrid Coordinate Ocean Model, Sea Surface Elevation [deprecated]](/pages/3ce17ee2/)
- [HYCOM: Hybrid Coordinate Ocean Model, Water Velocity [deprecated]](/pages/fda18b21/)
- [ECMWF 近实时 IFS 海浪预报](/pages/2f7bc360/)
- [ECMWF 近实时 IFS 海浪预报（短截断）](/pages/423330ad/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
