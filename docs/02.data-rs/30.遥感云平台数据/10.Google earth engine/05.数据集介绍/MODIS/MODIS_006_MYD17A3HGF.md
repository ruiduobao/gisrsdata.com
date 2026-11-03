---
title: "MYD17A3HGF.006: Aqua Net Primary Production  Gap-Filled Yearly Global 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/c446dc2f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aqua"
  - "global"
  - "gpp"
  - "modis"
  - "myd17a3"
  - "myd17a3gf"
  - "nasa"
  - "npp"
  - "photosynthesis"
  - "plant-productivity"
  - "productivity"
  - "psn"
---

# MYD17A3HGF.006: Aqua Net Primary Production  Gap-Filled Yearly Global 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

Version 6 MODIS data products. Users are advised to transition to the
improved Version 6.1.

The MYD17A3HGF V6 product provides information about
annual Net Primary Productivity (NPP) at 500m pixel resolution.
 Annual NPP is derived from the sum of all 8-day Net Photosynthesis
(PSN) products (MYD17A2H) from the given year.  The PSN value
is the difference of the Gross Primary Productivity (GPP) and the
Maintenance Respiration (MR) (GPP-MR).

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MYD17A3HGF`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2002-07-04 至 2021-01-01
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：aqua, global, gpp, modis, myd17a3, myd17a3gf, nasa, npp, photosynthesis, plant-productivity, productivity, psn, usgs, yearly

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Npp | Net primary productivity | 500 |  |
| Npp_QC | Quality control percentage | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/006/MYD17A3HGF');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD17A3HGF
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD17A3HGF.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
