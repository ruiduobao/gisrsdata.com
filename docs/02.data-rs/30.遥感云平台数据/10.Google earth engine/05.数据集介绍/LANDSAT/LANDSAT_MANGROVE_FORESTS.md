---
title: "Global Mangrove Forests Distribution, v1 (2000)"
date: 2026-11-03 12:00:00
permalink: /pages/2f0c27e8/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "annual"
  - "ciesin"
  - "forest-biomass"
  - "global"
  - "landsat-derived"
  - "mangrove"
  - "nasa"
  - "usgs"
---

# Global Mangrove Forests Distribution, v1 (2000)

## 数据集简介

The database was prepared using Landsat satellite data from the year 2000.
More than 1,000 Landsat scenes obtained from the USGS Earth Resources
Observation and Science Center (EROS) were classified using hybrid
supervised and unsupervised digital image classification techniques. This
database is the first, most comprehensive mangrove assessment of the world
([Giri et al., 2011](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1466-8238.2010.00584.x)).
Partial funding of this research was provided by NASA.

The mangrove database is being used for identifying priority areas
for mangrove conservation, studying the role of mangrove forests in
saving lives and properties from natural disasters (e.g. tsunami),
carbon accounting, and biodiversity conservation. The USGS EROS has
been using the data to study the impact of sea level rise on mangrove
ecosystems. The database serves as a baseline for mangrove
monitoring.

[General Documentation](https://www.earthdata.nasa.gov/data/catalog/sedac-ciesin-sedac-lulc-mangroves-2000-1.0#documents-and-resources)

## 基本信息

- 数据集编号（Earth Engine ID）：`LANDSAT/MANGROVE_FORESTS`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA SEDAC at the Center for International Earth Science Information Network、Google Earth Engine
- 时间范围：2000-01-01 至 2001-01-01
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：annual, ciesin, forest-biomass, global, landsat-derived, mangrove, nasa, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| 1 | Mangroves | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LANDSAT/MANGROVE_FORESTS');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_MANGROVE_FORESTS
- 数据引用：Giri, C., E. Ochieng, L.L.Tieszen, Z. Zhu, A. Singh, T. Loveland, J. Masek, and N. Duke. 2013. Global Mangrove Forests Distribution, 2000. Palisades, NY: NASA Socioeconomic Data and Applications Center (SEDAC). [https://doi.org/10.7927/H4J67DW8](https://doi.org/10.7927/H4J67DW8). Accessed DAY MONTH YEAR

- DOI：10.7927/H4J67DW8

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
