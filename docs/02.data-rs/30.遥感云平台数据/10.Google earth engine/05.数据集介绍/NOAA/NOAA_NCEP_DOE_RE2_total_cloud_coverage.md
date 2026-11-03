---
title: "NCEP-DOE Reanalysis 2 (Gaussian Grid), Total Cloud Coverage"
date: 2026-11-03 12:00:00
permalink: /pages/388afaeb/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "climate"
  - "cloud"
  - "geophysical"
  - "ncep"
  - "noaa"
  - "reanalysis"
---

# NCEP-DOE Reanalysis 2 (Gaussian Grid), Total Cloud Coverage

## 数据集简介

**This collection is no longer being updated. The Model is no longer being updated at the source.**

NCEP-DOE Reanalysis 2 project is using a state-of-the-art analysis/forecast system to perform
data assimilation using past data from 1979 through the previous year.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/NCEP_DOE_RE2/total_cloud_coverage`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA、Google Earth Engine
- 时间范围：1979-01-01 至 2026-03-01
- 空间分辨率：278300 米
- 许可：proprietary
- 关键词：atmosphere, climate, cloud, geophysical, ncep, noaa, reanalysis

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| tcdc | Total cloud cover | 278300 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/NCEP_DOE_RE2/total_cloud_coverage');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_NCEP_DOE_RE2_total_cloud_coverage
- 数据引用：[NCEP-DOE AMIP-II Reanalysis (R-2): M. Kanamitsu, W. Ebisuzaki, J. Woollen, S-K Yang,
J.J. Hnilo, M. Fiorino, and G. L. Potter. 1631-1643, Nov 2002, Bulletin of the American
Meteorological Society.](https://journals.ametsoc.org/view/journals/bams/83/11/bams-83-11-1631.xml).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
