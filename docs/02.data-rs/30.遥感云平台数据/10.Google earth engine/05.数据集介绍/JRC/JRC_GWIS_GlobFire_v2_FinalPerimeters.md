---
title: "GlobFire Final Fire Event Detection Based on MCD64A1"
date: 2026-11-03 12:00:00
permalink: /pages/16d164e6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "area"
  - "burnt"
  - "disaster"
  - "fire"
  - "globfire"
  - "mcd64a1"
  - "modis-derived"
  - "table"
  - "wildfire"
---

# GlobFire Final Fire Event Detection Based on MCD64A1

## 数据集简介

Fire boundaries based on the MODIS dataset MCD64A1. The data were computed
based on an algorithm that relies on encoding in a graph structure
a space-time relationship among patches of burned areas.

Each fire has a unique number identifying the event.

## 基本信息

- 数据集编号（Earth Engine ID）：`JRC/GWIS/GlobFire/v2/FinalPerimeters`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：European Commission, Joint Research Centre, Global Wildfire Information System、Google Earth Engine
- 时间范围：2001-01-01 至 2021-01-01
- 许可：CC-BY-4.0
- 关键词：area, burnt, disaster, fire, globfire, mcd64a1, modis-derived, table, wildfire

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| area | DOUBLE | Fire area, square meters |
| FinalDate | INT | Final fire date in milliseconds since 1970-01-01 |
| Id | INT | Numeric id of the fire |
| InitialDate | INT | Initial fire date in milliseconds since 1970-01-01 |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('JRC/GWIS/GlobFire/v2/FinalPerimeters');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GWIS_GlobFire_v2_FinalPerimeters
- 数据引用：Artés, T., Oom, D., De Rigo, D., Durrant, T. H., Maianti, P., Libertà, G., &
San-Miguel-Ayanz, J. (2019). A global wildfire dataset for the analysis of
fire regimes and fire behaviour. Scientific data, 6(1), 1-11.
[doi:10.1038/s41597-019-0312-2](https://doi.org/10.1038/s41597-019-0312-2)

- DOI：10.1038/s41597-019-0312-2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
