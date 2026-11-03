---
title: "PML_V2.1.7: Coupled Evapotranspiration and Gross Primary Product (GPP) [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/82a78155/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "evapotranspiration"
  - "gpp"
  - "plant-productivity"
  - "water-vapor"
---

# PML_V2.1.7: Coupled Evapotranspiration and Gross Primary Product (GPP) [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

Penman-Monteith-Leuning Evapotranspiration V2 (PML_V2) products include
evapotranspiration (ET), its three components, and
gross primary production (GPP) at 500m and 8-day resolution during 2000-2017
and with spatial range from -60&deg;S to 90&deg;N. The major advantages of the
PML_V2 products are:

  1. Coupled estimates of transpiration and GPP via canopy
  conductance (Gan et al., 2018; Zhang et al., 2019)
  2. Partitioning ET into three components: transpiration from vegetation,
  direct evaporation from the soil and vaporization of intercepted
   rainfall from vegetation (Zhang et al., 2016).

The PML_V2 products perform well against observations
at 95 flux sites across the globe, and are similar to or noticeably better than
major state-of-the-art ET and GPP products widely used by water and ecology
research communities (Zhang et al., 2019).

Note on versioning: For consistency in naming conventions, PML-V2.1.7 replaces the previous PML-V2 0.1.7.

## 基本信息

- 数据集编号（Earth Engine ID）：`CAS/IGSNRR/PML/V2_v017`
- 数据类型：影像集合（ImageCollection）
- 提供方：PML_V2、Google Earth Engine
- 时间范围：2000-02-26 至 2020-12-26
- 空间分辨率：500 米
- 许可：CC-BY-4.0
- 关键词：evapotranspiration, gpp, plant-productivity, water-vapor

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| GPP | Gross primary production | 500 |  |
| Ec | Vegetation transpiration | 500 |  |
| Es | Soil evaporation | 500 |  |
| Ei | Interception from vegetation canopy | 500 |  |
| ET_water | Evaporation from water bodies, snow, and ice. Calculated using the Penman equation, which is considered a good estimate of actual evaporation for these surfaces.  | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('CAS/IGSNRR/PML/V2_v017');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CAS_IGSNRR_PML_V2_v017
- 数据引用：Zhang, Y., Kong, D., Gan, R., Chiew, F.H.S., McVicar, T.R., Zhang, Q.,
and Yang, Y., 2019. Coupled estimation of 500m and 8-day resolution global
evapotranspiration and gross primary production in 2002-2017.
Remote Sens. Environ. 222, 165-182,
[doi:10.1016/j.rse.2018.12.031](https://doi.org/10.1016/j.rse.2018.12.031)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
