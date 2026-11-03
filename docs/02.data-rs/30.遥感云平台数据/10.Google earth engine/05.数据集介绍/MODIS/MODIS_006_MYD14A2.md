---
title: "MYD14A2.006: Aqua Thermal Anomalies & Fire 8-Day Global 1km [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/6b59dbe5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "aqua"
  - "fire"
  - "global"
  - "modis"
  - "myd14a2"
  - "nasa"
  - "usgs"
---

# MYD14A2.006: Aqua Thermal Anomalies & Fire 8-Day Global 1km [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MYD14A2 V6 dataset provides 8-day fire mask composites
at 1km resolution. It contains the maximum value of the individual
pixel classes over the compositing period. Along with the fire
mask, an associated quality information layer is also provided.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/88/MOD14_User_Guide_v6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/87/MOD14_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MYD14A2)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MYD14A2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2002-07-04 至 2023-02-18
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：8-day, aqua, fire, global, modis, myd14a2, nasa, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| FireMask | Confidence of fire | 1000 |  |
| QA | Pixel quality indicators | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/006/MYD14A2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD14A2
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD14A2.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
