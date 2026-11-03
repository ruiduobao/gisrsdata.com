---
title: "Copernicus CORINE Land Cover [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/5ec608fc/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "clc"
  - "copernicus"
  - "corine"
  - "eea"
  - "esa"
  - "eu"
  - "landcover"
  - "landuse-landcover"
---

# Copernicus CORINE Land Cover [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The CORINE (coordination of information on the environment) Land Cover
(CLC) inventory was initiated in 1985 to standardize data collection on land
in Europe to support environmental policy development. The project is
coordinated by the European Environment Agency (EEA) in the frame of the EU
Copernicus programme and implemented by national teams. The number of
participating countries has increased over time currently including 33 (EEA)
member countries and six cooperating countries (EEA39) with a total area of
over 5.8M km2.

The reference year of the first CLC inventory was 1990 and the first update
created in 2000. Later, the update cycle has become 6 years. Satellite
imagery provides the geometrical and thematic basis for mapping with in-situ
data as essential ancillary information. The basic technical parameters of
CLC (i.e. 44 classes in nomenclature, 25 hectares minimum mapping unit
(MMU), and 100 meters minimum mapping width) have not changed since the
beginning, therefore the results of the different inventories are
comparable.

## 基本信息

- 数据集编号（Earth Engine ID）：`COPERNICUS/CORINE/V18_5_1/100m`
- 数据类型：影像集合（ImageCollection）
- 提供方：EEA/Copernicus、Google Earth Engine
- 时间范围：1986-01-01 至 2012-12-31
- 空间分辨率：100 米
- 许可：proprietary
- 关键词：clc, copernicus, corine, eea, esa, eu, landcover, landuse-landcover

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| landcover | Land cover | 100 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/CORINE/V18_5_1/100m');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_CORINE_V18_5_1_100m

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
