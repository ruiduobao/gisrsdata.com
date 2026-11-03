---
title: "Breathing Earth System Simulator (BESS) Radiation v1"
date: 2026-11-03 12:00:00
permalink: /pages/39b2b51f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "evapotranspiration"
  - "gpp"
  - "modis-derived"
  - "par"
  - "radiation"
  - "shortwave"
  - "weather-and-climate"
---

# Breathing Earth System Simulator (BESS) Radiation v1

## 数据集简介

Breathing Earth System Simulator (BESS) is a simplified process-based model
that couples atmosphere and canopy radiative transfers, canopy
photosynthesis, transpiration, and energy balance. It couples an atmospheric
radiative transfer model and artificial neural network with forcings from
MODIS atmospheric products to generate 5-km daily products.

Publications:

* Ryu Youngryel, Chongya Jiang, Hideki Kobayashi, Matteo Detto,
  MODIS-derived global land products of shortwave radiation and diffuse and
  total photosynthetically active radiation at 5km resolution from 2000.
  Remote Sensing of Environment, Volume 204,
  2018.
  [doi:10.1016/j.rse.2017.09.021](https://doi.org/10.1016/j.rse.2017.09.021)

## 基本信息

- 数据集编号（Earth Engine ID）：`SNU/ESL/BESS/Rad/v1`
- 数据类型：影像集合（ImageCollection）
- 提供方：Seoul National University (SNU)、Google Earth Engine
- 时间范围：2001-01-01 至 2021-12-31
- 空间分辨率：5500 米
- 许可：CC-BY-4.0
- 关键词：climate, evapotranspiration, gpp, modis-derived, par, radiation, shortwave, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| PAR_Daily | Surface downwelling photosynthetic radiative flux in air | 5500 |  |
| PARdiff_Daily | Surface diffuse downwelling photosynthetic radiative flux in air | 5500 |  |
| RSDN_Daily | Surface downwelling shortwave flux in air | 5500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('SNU/ESL/BESS/Rad/v1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/SNU_ESL_BESS_Rad_v1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
