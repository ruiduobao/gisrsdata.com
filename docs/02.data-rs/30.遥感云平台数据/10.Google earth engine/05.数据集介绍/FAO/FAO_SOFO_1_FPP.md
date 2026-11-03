---
title: "Forest proximate people (FPP) 1.0"
date: 2026-11-03 12:00:00
permalink: /pages/7f9ed16d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "fao"
  - "forest"
  - "global"
  - "plant-productivity"
  - "population"
  - "rural-area"
---

# Forest proximate people (FPP) 1.0

## 数据集简介

The "Forest Proximate People" (FPP) dataset is one of the data layers
contributing to the development of indicator #13, "number of
forest-dependent people in extreme poverty," of the Collaborative
Partnership on Forests (CPF) Global Core Set of forest-related
indicators (GCS). The FPP dataset provides an estimate of the number of
people living in or within 1 kilometer of forests
(forest-proximate people) for the year 2019 with a pixel size of 100 meters
at a global level.
[Find out more about the dataset.](
  https://data.apps.fao.org/catalog/dcat/forest-proximate-people)

## 基本信息

- 数据集编号（Earth Engine ID）：`FAO/SOFO/1/FPP`
- 数据类型：影像集合（ImageCollection）
- 提供方：FAO Forestry Division (FPP 1km)、FAO Forestry Division (FPP 5km)、Google Earth Engine
- 时间范围：2019-01-01 至 2019-01-01
- 空间分辨率：0.0009 米
- 许可：CC-BY-4.0
- 关键词：agriculture, fao, forest, global, plant-productivity, population, rural-area

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| FPP_1km | Number of people living in or within 1 kilometer of forests.  | 0.0009 |  |
| FPP_5km | Number of people living in or within 5 kilometer of forests.  | 0.0009 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('FAO/SOFO/1/FPP');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/FAO_SOFO_1_FPP
- 数据引用：FAO 2022. The State of the World's Forests (SOFO) - Forest pathways for
green recovery and building inclusive, resilient and sustainable
economies. FAO, Rome.
[https://www.fao.org/documents/card/en/c/cb9360en](
  https://www.fao.org/documents/card/en/c/cb9360en)

- DOI：10.1016/j.oneear.2020.08.016

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
