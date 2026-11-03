---
title: "HYCOM: Hybrid Coordinate Ocean Model, Sea Surface Elevation [deprecated]"
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

# HYCOM: Hybrid Coordinate Ocean Model, Sea Surface Elevation [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The Hybrid Coordinate Ocean Model (HYCOM) is a data-assimilative hybrid
isopycnal-sigma-pressure (generalized) coordinate ocean model. The subset
of HYCOM data hosted in EE contains the variables salinity, temperature,
velocity, and elevation. They have been interpolated to a uniform
0.08 degree lat/long grid between 80.48°S and 80.48°N. The salinity,
temperature, and velocity variables have been interpolated to 40
standard z-levels.

The HYCOM Consortium, which includes the National Ocean Partnership
Program (NOPP), is part of the U.S. Global Ocean Data Assimilation
Experiment (GODAE).

Funded by the National Ocean Partnership Program, the Office of Naval
Research (ONR), and DoD High Performance Computing Modernization Program.

For more information, see:

- [hycom.org](https://www.hycom.org/)
- [GIS StackExchange hycom](https://gis.stackexchange.com/questions/tagged/hycom)
- Wikipedia [HyCOM](https://en.wikipedia.org/wiki/HyCOM)
- Wikipedia [List of ocean circulation models](https://en.wikipedia.org/wiki/List_of_ocean_circulation_models)
- Wikipedia [Ocean general circulation model (OGCM)](https://en.wikipedia.org/wiki/Ocean_general_circulation_model)

## 基本信息

- 数据集编号（Earth Engine ID）：`HYCOM/GLBu0_08/sea_surface_elevation`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOPP、Google Earth Engine
- 时间范围：1992-10-02 至 2018-12-09
- 空间分辨率：8905.6 米
- 许可：proprietary
- 关键词：elevation, hycom, nopp, ocean, oceans, ssh, water

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| surface_elevation | Sea surface elevation anomaly relative to the modeled elevation mean | 8905.6 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('HYCOM/GLBu0_08/sea_surface_elevation');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/HYCOM_GLBu0_08_sea_surface_elevation
- 数据引用：J. A. Cummings and O. M. Smedstad. 2013: Variational Data Assimilation for
the Global Ocean. Data Assimilation for Atmospheric, Oceanic and Hydrologic
Applications vol II, chapter 13, 303-343.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
