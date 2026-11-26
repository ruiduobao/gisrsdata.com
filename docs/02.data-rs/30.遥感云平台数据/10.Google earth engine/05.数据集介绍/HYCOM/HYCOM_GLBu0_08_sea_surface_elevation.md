---
title: "HYCOM：混合坐标海洋模型，海面高程（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/3ce17ee2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "elevation"
  - "hycom"
  - "nopp"
  - "ocean"
  - "oceans"
  - "ssh"
  - "water"
---

# HYCOM：混合坐标海洋模型，海面高程（已弃用）

英文原名：HYCOM: Hybrid Coordinate Ocean Model, Sea Surface Elevation [deprecated]

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
| surface_elevation | 相对于模型高程平均值的海面高程异常 | 8905.6 |  |

## 能拿来做什么

- 海面高度与海洋环流分析
- 海平面变化研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('HYCOM/GLBu0_08/sea_surface_elevation');
```

- 数据集编号（Earth Engine ID）：`HYCOM/GLBu0_08/sea_surface_elevation`
- 提供方：NOPP、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/HYCOM_GLBu0_08_sea_surface_elevation

## 许可与引用

- 许可：proprietary
- 关键词：elevation, hycom, nopp, ocean, oceans, ssh, water
- 数据引用：J. A. Cummings and O. M. Smedstad. 2013: Variational Data Assimilation for
the Global Ocean. Data Assimilation for Atmospheric, Oceanic and Hydrologic
Applications vol II, chapter 13, 303-343.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [HYCOM: Hybrid Coordinate Ocean Model, Water Temperature and Salinity [deprecated]](/pages/0e7e9bc9/)
- [HYCOM: Hybrid Coordinate Ocean Model, Water Velocity [deprecated]](/pages/fda18b21/)
- [ECMWF 近实时 IFS 海浪预报](/pages/2f7bc360/)
- [ECMWF 近实时 IFS 海浪预报（短截断）](/pages/423330ad/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
