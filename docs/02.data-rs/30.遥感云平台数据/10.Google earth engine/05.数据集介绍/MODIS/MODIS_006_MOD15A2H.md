---
title: "MOD15A2H.006: Terra Leaf Area Index/FPAR 8-Day Global 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/94591ad1/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "fpar"
  - "global"
  - "lai"
  - "mod15a2h"
  - "modis"
  - "nasa"
  - "terra"
  - "usgs"
  - "vegetation-indices"
---

# MOD15A2H.006: Terra Leaf Area Index/FPAR 8-Day Global 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MOD15A2H V6 MODIS combined Leaf Area Index (LAI) and
Fraction of Photosynthetically Active Radiation (FPAR) product is an 8-day
composite dataset at 500m resolution. The algorithm chooses the \"best\" pixel
available from all the acquisitions of the Terra sensor from within the 8-day period.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/624/MOD15_User_Guide_V6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/90/MOD15_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MOD15A2H)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MOD15A2H`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-18 至 2023-02-10
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：8-day, fpar, global, lai, mod15a2h, modis, nasa, terra, usgs, vegetation-indices

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Fpar_500m | Fraction of Photosynthetically Active Radiation | 500 |  |
| Lai_500m | Leaf Area Index | 500 |  |
| FparLai_QC | Quality for LAI and FPAR | 500 |  |
| FparExtra_QC | Extra detail Quality for LAI and FPAR | 500 |  |
| FparStdDev_500m | Standard deviation of FPAR | 500 |  |
| LaiStdDev_500m | Standard deviation of LAI | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/006/MOD15A2H');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD15A2H
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD15A2H.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
