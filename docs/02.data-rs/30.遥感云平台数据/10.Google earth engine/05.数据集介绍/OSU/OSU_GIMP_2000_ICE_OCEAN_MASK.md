---
title: "Greenland Ice & Ocean Mask - Greenland Mapping Project (GIMP)"
date: 2026-11-03 12:00:00
permalink: /pages/e7d855f1/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "arctic"
  - "cryosphere"
  - "gimp"
  - "greenland"
  - "ice"
  - "mask"
  - "nasa"
  - "polar"
---

# Greenland Ice & Ocean Mask - Greenland Mapping Project (GIMP)

## 数据集简介

This dataset provides complete land ice and ocean
classification masks at 15 m for the Greenland ice sheet.
Ice cover was mapped using
a combination of orthorectified panchromatic (band 8)
imagery from the Landsat 7 Enhanced Thematic Mapper
Plus (ETM+), distributed by the USGS, and RADARSAT-1
Synthetic Amplitude Radar (SAR) amplitude images produced
and distributed by I. Joughin at the Applied Physics
Laboratory, University of Washington.

The Landsat imagery was acquired for the months of July
through September in 1999, 2000 and 2001 (mostly 2000)
and the RADARSAT imagery was acquired in fall of 2000.

## 基本信息

- 数据集编号（Earth Engine ID）：`OSU/GIMP/2000_ICE_OCEAN_MASK`
- 数据类型：影像（Image）
- 提供方：NASA NSIDC DAAC at CIRES、Google Earth Engine
- 时间范围：1999-06-30 至 2002-09-04
- 空间分辨率：15 米
- 许可：proprietary
- 关键词：arctic, cryosphere, gimp, greenland, ice, mask, nasa, polar

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ocean_mask | Ocean mask | 15 |  |
| ice_mask | Ice mask | 15 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('OSU/GIMP/2000_ICE_OCEAN_MASK');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OSU_GIMP_2000_ICE_OCEAN_MASK
- 数据引用：Howat, I.M., A. Negrete, B.E. Smith, 2014, The Greenland Ice
Mapping Project (GIMP) land classification and surface elevation
datasets, The Cryosphere, 8, 1509-1518,
[doi:10.5194/tc-8-1509-2014](https://doi.org/10.5194/tc-8-1509-2014)
[article pdf](https://www.the-cryosphere.net/8/1509/2014/tc-8-1509-2014.pdf)

- DOI：10.5067/B8X58MQBFUPA

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
