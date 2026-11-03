---
title: "Landsat Collection 2 Tier 1 Level 2 32-Day NBR Composite"
date: 2026-11-03 12:00:00
permalink: /pages/0f909690/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "fire"
  - "landsat"
  - "landsat-composite"
  - "nbrt"
  - "usgs"
  - "vegetation-indices"
---

# Landsat Collection 2 Tier 1 Level 2 32-Day NBR Composite

## 数据集简介

These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.

The Normalized Burn Ratio Thermal (NBRT) index is
generated from the Near-IR, Mid-IR (2215 nm), and Thermal bands, and
has a range from -1.0 to 1.0. See
[Holden et al. (2005)](https://www.tandfonline.com/doi/abs/10.1080/01431160500239008) for details.

These composites are created from
all the scenes in
each 32-day period beginning from the first day of the year and
continuing to the 352nd day of the year.  The last composite of the
year, beginning on day 353, will overlap the first composite of the
following year by 20 days.  All the images from each 32-day period are
included in the composite, with the most recent pixel as the composite value.

Notes:

* The code used to create the composites
  [can be seen here](https://github.com/google/earthengine-catalog/blob/main/pipelines/landsat.py).

* Only daytime images with WRS_ROW < 122 are included.

* For Landsat 7 , images after 2017-01-01 are excluded due to orbital drift.

* For Landsat 8, images before 2013-05-01 are excluded due to pointing issues.

**Caution:**  These composites are computed on the fly and count towards
the requesting project's
[EECU](https://developers.google.com/earth-engine/guides/computation_overview#eecus)
usage.

## 基本信息

- 数据集编号（Earth Engine ID）：`LANDSAT/COMPOSITES/C02/T1_L2_32DAY_NBR`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google、Google Earth Engine
- 时间范围：1984-01-01 至 2026-10-16
- 许可：proprietary
- 关键词：fire, landsat, landsat-composite, nbrt, usgs, vegetation-indices

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NBR | Normalized Burn Ratio Thermal | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LANDSAT/COMPOSITES/C02/T1_L2_32DAY_NBR');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_COMPOSITES_C02_T1_L2_32DAY_NBR

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
