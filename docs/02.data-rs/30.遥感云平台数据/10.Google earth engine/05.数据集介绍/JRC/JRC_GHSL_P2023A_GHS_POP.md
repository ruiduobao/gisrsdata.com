---
title: "GHSL: Global population surfaces 1975-2030 (P2023A)"
date: 2026-11-03 12:00:00
permalink: /pages/cf948667/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ciesin-derived"
  - "ghsl"
  - "jrc"
  - "population"
  - "sdg"
---

# GHSL: Global population surfaces 1975-2030 (P2023A)

## 数据集简介

This raster dataset depicts the spatial distribution of residential
population, expressed as the absolute number of inhabitants of the cell.
Residential population estimates between 1975 and 2020 in 5-year intervals
and projections to 2025 and 2030 derived from CIESIN GPWv4.11 were
disaggregated from census or administrative units to grid cells, informed by
the distribution, volume, and classification of built-up area as mapped in
the [global GHSL built-up surface layers](https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_S)
per epoch.

More information about the GHSL main products can be found in the
[GHSL Data Package 2023 report]
(https://ghsl.jrc.ec.europa.eu/documents/GHSL_Data_Package_2023.pdf?t=1683540422)

The Global Human Settlement Layer (GHSL) project is supported by the
European Commission, Joint Research Center, and Directorate-General for
Regional and Urban Policy.

## 基本信息

- 数据集编号（Earth Engine ID）：`JRC/GHSL/P2023A/GHS_POP`
- 数据类型：影像集合（ImageCollection）
- 提供方：EC JRC、Google Earth Engine
- 时间范围：1975-01-01 至 2030-12-31
- 空间分辨率：100 米
- 许可：proprietary
- 关键词：ciesin-derived, ghsl, jrc, population, sdg

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| population_count | Population count by epoch | 100 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2023A/GHS_POP');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_POP
- DOI：10.2905/2FF68A52-5B5B-4A22-8F40-C41DA8332CFE

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
