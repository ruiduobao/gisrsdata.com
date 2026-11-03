---
title: "MOD17A3H.006: Terra Net Primary Production Yearly Global 500m [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/b5054ffc/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "global"
  - "gpp"
  - "mod17a3"
  - "modis"
  - "nasa"
  - "npp"
  - "photosynthesis"
  - "plant-productivity"
  - "productivity"
  - "psn"
  - "terra"
  - "usgs"
---

# MOD17A3H.006: Terra Net Primary Production Yearly Global 500m [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MOD17A3H V6 product provides information about
annual Net Primary Productivity (NPP) at 500m pixel resolution.
 Annual NPP is derived from the sum of the 45 8-day Net Photosynthesis
(PSN) products (MOD17A2H) from the given year.  The PSN value
is the difference of the GPP and the Maintenance Respiration
(MR) (GPP-MR).

This is a NASA version of this product. Another
version is produced by the Numerical Terradynamic Simulation
Group ([NTSG](https://www.ntsg.umt.edu)), University of Montana
(UMT).  The NTSG version corrects the problem with cloud-contaminated
MODIS LAI-FPAR inputs to the MOD17 algorithm, but its resolution
is 1km. It is ingested into Earth Engine as MODIS/055/MOD17A3.

For further details regarding the differences between the NTSG
and NASA versions of this product, please consult [this document
](https://lpdaac.usgs.gov/documents/188/MOD17_NTSG_Note.pdf).

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/006/MOD17A3H`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-01-01 至 2014-01-01
- 空间分辨率：500 米
- 许可：proprietary
- 关键词：global, gpp, mod17a3, modis, nasa, npp, photosynthesis, plant-productivity, productivity, psn, terra, usgs, yearly

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Npp | Net primary productivity | 500 |  |
| Npp_QC | Quality control bits | 500 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/006/MOD17A3H');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD17A3H
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD17A3H.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
