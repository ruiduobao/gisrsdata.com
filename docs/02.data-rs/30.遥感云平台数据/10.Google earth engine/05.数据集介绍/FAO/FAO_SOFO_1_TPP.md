---
title: "Tree proximate people (TPP) 1.0"
date: 2026-11-03 12:00:00
permalink: /pages/4e1ad679/
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

# Tree proximate people (TPP) 1.0

## 数据集简介

The "Tree Proximate People" (TPP) is one of the datasets contributing to the
development of indicator #13, number of forest-dependent people in extreme
poverty, of the Collaborative Partnership on Forests (CPF) Global Core Set
of forest-related indicators (GCS). The TPP dataset provides 4 different
estimates of tree proximate people (trees outside forests), all of them for
the year 2019 with a pixel size of 100 meters at a global level.
[Find out more about the dataset.](
  https://data.apps.fao.org/catalog/dcat/tree-proximate-people)

## 基本信息

- 数据集编号（Earth Engine ID）：`FAO/SOFO/1/TPP`
- 数据类型：影像集合（ImageCollection）
- 提供方：FAO Forestry Division (TPP 500m cropland)、FAO Forestry Division (TPP 1km cropland)、FAO Forestry Division (TPP 500m agricultural)、FAO Forestry Division (TPP 1km agricultural)、Google Earth Engine
- 时间范围：2019-01-01 至 2019-01-01
- 空间分辨率：0.0009 米
- 许可：CC-BY-4.0
- 关键词：agriculture, fao, forest, global, plant-productivity, population, rural-area

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| TPP_1km | Number of people living in or within 1 km from agricultural lands with at least 10% of tree cover  | 0.0009 |  |
| TPP_1km_cropland | Number of people living in or within 1 km from croplands with at least 10% of tree cover  | 0.0009 |  |
| TPP_500m | Number of people living in or within 500 m from agricultural lands with at least 10% of tree cover  | 0.0009 |  |
| TPP_500m_cropland | Number of people living in or within 500 m from croplands with at least 10% of tree cover  | 0.0009 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('FAO/SOFO/1/TPP');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/FAO_SOFO_1_TPP
- 数据引用：FAO 2022. The State of the World's Forests (SOFO) - Forest pathways for
green recovery and building inclusive, resilient and sustainable
economies. FAO, Rome.
[https://www.fao.org/documents/card/en/c/cb9360en](
  https://www.fao.org/documents/card/en/c/cb9360en)

- DOI：10.1016/j.oneear.2020.08.016

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
