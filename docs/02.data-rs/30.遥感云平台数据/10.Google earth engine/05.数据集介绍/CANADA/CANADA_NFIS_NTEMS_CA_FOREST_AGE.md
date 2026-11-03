---
title: "Landsat-derived forest age for Canada 2019"
date: 2026-11-03 12:00:00
permalink: /pages/65b34141/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "canada"
  - "forest"
  - "forest-biomass"
---

# Landsat-derived forest age for Canada 2019

## 数据集简介

Canadian primary forest dataset is a satellite-based forest age map for
2019 across Canada's forested ecozones at a 30-m spatial resolution.
Remotely-sensed data from Landsat (disturbances, surface
reflectance composites, forest structure) and MODIS (Gross Primary
Production) are utilized to determine age.

Forest age can be determined where disturbance can be identified directly
(disturbance approach) or inferred using spectral information (recovery
approach) or using inverted allometric equations to model age where there
is no evidence of disturbance (allometric approach). The disturbance
approach is based upon satellite data and mapped changes and is the most
accurate. The recovery approach also relies upon satellite data plus logic
regarding forest succession, with an accuracy that is greater than pure
modeling.

Given the lack of widespread recent disturbance over Canada's forests, the
allometric approach is required over the greatest area (86.6%). Using
information regarding realized heights and growth and yield modeling, ages
are estimated where none are otherwise possible. Trees of all ages are
mapped, with trees >150 years old combined in an "old tree" category.

## 基本信息

- 数据集编号（Earth Engine ID）：`CANADA/NFIS/NTEMS/CA_FOREST_AGE`
- 数据类型：影像集合（ImageCollection）
- 提供方：National Forest Information System、Google Earth Engine
- 时间范围：2019-01-01 至 2020-01-01
- 空间分辨率：30 米
- 许可：CC-BY-4.0
- 关键词：canada, forest, forest-biomass

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| forest | Forest age | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('CANADA/NFIS/NTEMS/CA_FOREST_AGE');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CANADA_NFIS_NTEMS_CA_FOREST_AGE

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
