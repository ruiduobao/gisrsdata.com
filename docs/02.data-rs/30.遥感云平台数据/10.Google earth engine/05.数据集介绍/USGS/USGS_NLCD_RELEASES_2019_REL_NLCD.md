---
title: "NLCD 2019: USGS National Land Cover Database, 2019 release"
date: 2026-11-03 12:00:00
permalink: /pages/c162d55c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "blm"
  - "landcover"
  - "landuse-landcover"
  - "mrlc"
  - "nlcd"
  - "usgs"
---

# NLCD 2019: USGS National Land Cover Database, 2019 release

## 数据集简介

NLCD (the National Land Cover Database) is a 30-m Landsat-based land cover
database spanning 8 epochs (2001, 2004, 2006, 2008, 2011, 2013, 2016, and
2019). A ninth epoch for 2021 is also available
[here](USGS_NLCD_RELEASES_2021_REL_NLCD). The images rely on the
imperviousness data layer for the urban classes and on a decision-tree
classification for the rest.

This dataset has one image for the continental US for each epoch.
Alaska, Hawaii, and Puerto Rico data can be found in the previous
[2016 NLCD release](USGS_NLCD_RELEASES_2016_REL).

NLCD products are created by the Multi-Resolution Land Characteristics
(MRLC) Consortium, a partnership of federal agencies led by the
U.S. Geological Survey.

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/NLCD_RELEASES/2019_REL/NLCD`
- 数据类型：影像集合（ImageCollection）
- 提供方：USGS、Google Earth Engine
- 时间范围：2001-01-01 至 2019-01-01
- 空间分辨率：30 米
- 许可：CC0-1.0
- 关键词：blm, landcover, landuse-landcover, mrlc, nlcd, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| landcover | All images include the landcover classification scheme described in the [Product Legend](https://www.mrlc.gov/data/legends/national-land-cover-database-class-legend-and-description). The legends are also available as metadata on each image. The classes in the product legend are given below.  | 30 |  |
| impervious | Percent of the pixel covered by developed impervious surface.  | 30 |  |
| impervious_descriptor | Defines which impervious layer pixels are roads and provides the best fit description for impervious pixels that are not roads.  | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('USGS/NLCD_RELEASES/2019_REL/NLCD');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_NLCD_RELEASES_2019_REL_NLCD
- 数据引用：Dewitz, J., and U.S. Geological Survey, 2021, National Land Cover Database (NLCD)
2019 Products (ver. 2.0, June 2021): U.S. Geological Survey data release,
[doi:10.5066/P9KZCM54](https://doi.org/10.5066/P9KZCM54)

- DOI：10.5066/P9KZCM54

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
