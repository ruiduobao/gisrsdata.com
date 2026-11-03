---
title: "MCD15A3H.006 MODIS Leaf Area Index/FPAR 4-Day Global 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/762d4697/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "4-day"
  - "fpar"
  - "global"
  - "lai"
  - "mcd115a3h"
  - "modis"
  - "nasa"
  - "plant-productivity"
  - "usgs"
  - "vegetation"
---

# MCD15A3H.006 MODIS Leaf Area Index/FPAR 4-Day Global 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MCD15A3H V6 level 4, Combined Fraction of Photosynthetically
Active Radiation (FPAR), and Leaf Area Index (LAI) product is a
4-day composite data set with 500 meter pixel size. The algorithm
chooses the \"best\" pixel available from all the acquisitions of
both MODIS sensors located on NASA's Terra and Aqua satellites
from within the 4-day period.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/624/MOD15_User_Guide_V6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/90/MOD15_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MCD15A3H)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MCD15A3H`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2002-07-04 至 2023-02-14
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：4-day, fpar, global, lai, mcd115a3h, modis, nasa, plant-productivity, usgs, vegetation

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Fpar | FPAR absorbed by the green elements of a vegetation canopy | 500 | 400-700nm |
| Lai | One-sided green leaf area per unit ground area in broadleaf canopies; one-half the total needle surface area per unit ground area in coniferous canopies  | 500 |  |
| FparLai_QC | Quality for Lai and Fpar | 500 |  |
| FparExtra_QC | Extra detail quality for LAI and FPAR | 500 |  |
| FparStdDev | Standard deviation of Fpar | 500 |  |
| LaiStdDev | Standard deviation for Lai | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/006/MCD15A3H');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD15A3H
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD15A3H.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
