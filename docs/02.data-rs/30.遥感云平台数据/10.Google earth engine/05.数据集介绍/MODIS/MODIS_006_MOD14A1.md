---
title: "MOD14A1.006: Terra Thermal Anomalies & Fire Daily Global 1km [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/90a353e5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "fire"
  - "global"
  - "mod14a1"
  - "modis"
  - "nasa"
  - "terra"
  - "usgs"
---

# MOD14A1.006: Terra Thermal Anomalies & Fire Daily Global 1km [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MOD14A1 V6 dataset provides daily fire mask composites
at 1km resolution derived from the MODIS 4- and 11-micrometer radiances.
The fire detection strategy is based on absolute detection of a
fire (when the fire strength is sufficient to detect), and on detection
relative to its background (to account for variability of the surface
temperature and reflection by sunlight). The product distinguishes
between fire, no fire and no observation. This information is used
for monitoring the spatial and temporal distribution of fires in
different ecosystems, detecting changes in fire distribution and
identifying new fire frontiers, wild fires, and changes in the
frequency of the fires  or their relative strength.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/88/MOD14_User_Guide_v6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/87/MOD14_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD14A1)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MOD14A1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-24 至 2023-02-17
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：daily, fire, global, mod14a1, modis, nasa, terra, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| FireMask | Confidence of fire | 1000 |  |
| MaxFRP | Maximum fire radiative power | 1000 |  |
| sample | Position of fire pixel within scan | 1000 |  |
| QA | Pixel quality indicators | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/006/MOD14A1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD14A1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD14A1.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
