---
title: "MOD17A2H.006: Terra Gross Primary Productivity 8-Day Global 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/a74b5b17/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "global"
  - "gpp"
  - "mod17a2"
  - "modis"
  - "nasa"
  - "photosynthesis"
  - "plant-productivity"
  - "productivity"
  - "psn"
  - "terra"
  - "usgs"
---

# MOD17A2H.006: Terra Gross Primary Productivity 8-Day Global 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MOD17A2H V6 Gross Primary Productivity (GPP) product
is a cumulative 8-day composite with a 500m pixel size. The product
is based on the radiation-use efficiency concept and can be potentially
used as inputs to data models to calculate terrestrial energy,
carbon, water cycle processes, and biogeochemistry of vegetation.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/495/MOD17_User_Guide_V6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/95/MOD17_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD17A2H)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MOD17A2H`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-18 至 2023-02-10
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：8-day, global, gpp, mod17a2, modis, nasa, photosynthesis, plant-productivity, productivity, psn, terra, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Gpp | Gross primary production | 500 |  |
| PsnNet | Net photosynthesis; GPP minus the maintenance respiration (MR) | 500 |  |
| Psn_QC | Quality control bits | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/006/MOD17A2H');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD17A2H
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD17A2H.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
