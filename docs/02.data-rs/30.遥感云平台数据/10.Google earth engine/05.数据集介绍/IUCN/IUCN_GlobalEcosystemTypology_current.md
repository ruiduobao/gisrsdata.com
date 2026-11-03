---
title: "IUCN Global Ecosystem Typology Level 3: 1.0"
date: 2026-11-03 12:00:00
permalink: /pages/fa6b2b5d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ecosystem"
  - "ecosystems"
  - "global"
  - "table"
---

# IUCN Global Ecosystem Typology Level 3: 1.0

## 数据集简介

The Global Ecosystem Typology is a taxonomy of ecosystems based on
their unique characteristics. It is a global classification system
that provides a consistent framework for describing and classifying
ecological ecosystems.

The Global Ecosystem Typology has six levels. The top three levels
(realms, functional biomes, and ecosystem functional groups) classify
ecosystems based on their overall characteristics, such as their location,
dominant plant life, and ecological processes. The bottom three levels
(regional ecosystem subgroups, global ecosystem types, and subglobal
ecosystem types) focus on specific geographic variants within ecosystem
functional groups and complexes of organisms and their associated physical
environment, providing a more detailed understanding of particular
ecosystems.

This dataset focuses on the third level of the Global Ecosystem Typology:
Ecosystem Functional Group. It's defined as a group of related ecosystems
within a biome that share common ecological drivers, which in turn promote
similar biotic traits that characterise the group. Derived from the
top-down by subdivision of biomes.

NOTE: Due to the size of some geometries, a simplification algorithm was
applied to each one to reduce their complexity. As many vertices as
possible were discarded without moving the distance from the original
shape more than 100 m. As a result, approximately two dozen rows in the
table collapsed into geometries with 0 area and were removed.

## 基本信息

- 数据集编号（Earth Engine ID）：`IUCN/GlobalEcosystemTypology/current`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：International Union for Conservation of Nature and Natural Resources、Google Earth Engine
- 时间范围：2023-09-14 至 2023-09-14
- 许可：CC-BY-4.0
- 关键词：ecosystem, ecosystems, global, table

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| efg_code | STRING | Ecosystem functional group code (e.g., "T1.1" = Tropical/Subtropical lowland rainforests). For a complete taxonomy, see [https://global-ecosystems.org/explore](https://global-ecosystems.org/explore).  |
| map_code | STRING | Map code |
| map_version | STRING | Map version |
| occurrence | INT | It indicates whether the specified region contains major occurrences (1) or minor occurrences (2) of the functional group."  |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('IUCN/GlobalEcosystemTypology/current');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IUCN_GlobalEcosystemTypology_current

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
