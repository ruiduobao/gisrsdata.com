---
title: "MOD17A3.055: Terra Net Primary Production Yearly Global 1km [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/4841efce/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "global"
  - "gpp"
  - "mod17a3"
  - "modis"
  - "npp"
  - "photosynthesis"
  - "plant-productivity"
  - "productivity"
  - "psn"
  - "terra"
  - "yearly"
---

# MOD17A3.055: Terra Net Primary Production Yearly Global 1km [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

The MOD17A3 V055 product provides information about
annual Gross and Net Primary Productivity (NPP) at 1km pixel resolution.
Net Primary Productivity (NPP) defines the rate at which all plants
in an ecosystem produce net useful chemical energy.  In other words,
NPP is equal to the difference between the rate at which plants
in an ecosystem produce useful chemical energy (or GPP), and the
rate at which they expend some of that energy for respiration.

The version 055 of the NPP product is produced by the Numerical
Terradynamic Simulation Group ([NTSG](https://www.ntsg.umt.edu)),
University of Montana (UMT).  It corrects the problem with cloud-contaminated
MODIS LAI-FPAR inputs to the MOD17 algorithm. The original, uncorrected
datasets constitute the version 4 NPP products. For further details
regarding the differences between the NTSG and NASA versions of
this product, please consult [this document](https://lpdaac.usgs.gov/documents/188/MOD17_NTSG_Note.pdf)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/055/MOD17A3`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-01-01 至 2014-01-01
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：global, gpp, mod17a3, modis, npp, photosynthesis, plant-productivity, productivity, psn, terra, yearly

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Gpp | Annual gross primary productivity | 1000 |  |
| Npp | Annual net primary productivity | 1000 |  |
| Gpp_Npp_QC | Percentage of filled MOD15 LAI caused by cloud-contamination during a growing season (defined when daily minimum air temperatures are above -8°) in a year. A high value indicates a high frequency of cloud-contamination. For example, QA is high for tropical rainforests but low in arid areas.  | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/055/MOD17A3');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_055_MOD17A3
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
