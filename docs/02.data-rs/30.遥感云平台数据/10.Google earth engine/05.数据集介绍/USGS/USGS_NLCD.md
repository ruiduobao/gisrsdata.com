---
title: "NLCD: USGS National Land Cover Database [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/40c18d08/
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
  - "shrub"
  - "shrubland"
  - "usgs"
---

# NLCD: USGS National Land Cover Database [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

This dataset is superseded by newer datasets:

* 2016 landcover and imperviousness data in
  [USGS/NLCD_RELEASES/2019_REL/NLCD](USGS_NLCD_RELEASES_2019_REL_NLCD).
* 2019 landcover and imperviousness data in
  [USGS/NLCD_RELEASES/2019_REL/NLCD](USGS_NLCD_RELEASES_2019_REL_NLCD).

NLCD (the National Land Cover Database) is a 30-m Landsat-based land cover
database spanning 8 epochs (1992, 2001, 2004, 2006, 2008, 2011, 2013 and 2016).
1992 data are primarily based on unsupervised classification of Landsat data,
while the rest of the images rely on the imperviousness data layer for the
urban classes and on a decision-tree classification for the rest. The 1992
image is not directly comparable to any later editions of NLCD.

This dataset has one image for the continental US for each of the
eight epochs, plus separate images for Alaska, Hawaii, and Puerto Rico in 2001 and 2011.
(They could not be merged in due to having a different projection from the continental US
images.)

Note that the impervious layers and tree cover layers for Alaska 2011
only have data for parts of Alaska.  For the impervious layer, only the
parts of Kenai Peninsula Borough and Anchorage Municipality are available.
Tree cover is only available on a strip along the coast from the southern
tip of the Alaskan Panhandle up through the Kenai Peninsula, plus Kodiak
Island.

NLCD 2016 Shrub Component products characterize the percentage of each
30-meter pixel in the Western United States covered by shrub, herbaceous,
bare ground, litter, sagebrush, big sagebrush and annual herbaceous, along
with estimating shrub height and sagebrush height. These products have
been produced by USGS in collaboration with the Bureau of Land Management.

NLCD products are created by the Multi-Resolution Land Characteristics
(MRLC) Consortium, a partnership of federal agencies led by the
U.S. Geological Survey.

## 基本信息

- 数据集编号（Earth Engine ID）：`USGS/NLCD`
- 数据类型：影像集合（ImageCollection）
- 提供方：USGS、Google Earth Engine
- 时间范围：1992-01-01 至 2017-01-01
- 空间分辨率：30 米
- 许可：CC0-1.0
- 关键词：blm, landcover, landuse-landcover, mrlc, nlcd, shrub, shrubland, usgs

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| landcover | All images except NCLD2011_HI and NLCD2011_PR include the landcover classification scheme described in the [2016 Product Legend](https://www.mrlc.gov/data/legends/national-land-cover-database-2016-nlcd2016-legend). The legends are also available as metadata on each image. The classes in the 2016 product legend are given below.  | 30 |  |
| impervious | Percent of the pixel covered by developed impervious surface. Included in images NLCD2001, NLCD2001_AK, NLCD2001_HI, NLCD2001_PR, NLCD2006, NLCD2011, NLCD2011_AK, and NLCD2016.  | 30 |  |
| impervious_descriptor | Defines which impervious layer pixels are roads and provides the best fit description for impervious pixels that are not roads. Included in images NLCD2001, NLCD2006, NLCD2011, and NLCD2016.  | 30 |  |
| percent_tree_cover | Percent of the pixel that's covered by tree canopy. No masking of obvious non-tree areas is performed for this product. Included in images NLCD2011, NLCD2011_AK, NLCD2011_HI, NLCD2011_PR, and NLCD2016.  | 30 |  |
| percent_tree_error | Standard error for the model as a percentage from 0 to 45. The higher the value, the greater the model uncertainty in estimating the canopy value for that cell. Included in NLCD2011, NLCD2011_AK, NLCD2011_HI, and NLCD2011_PR.  | 30 |  |
| shrubland_annual_herbaceous | The annual only grass and forb proportion in each in 30m pixel. Included in NLCD2016. | 30 |  |
| shrubland_bare_ground | The bare ground proportion in each 30m pixel. Included in NLCD2016. | 30 |  |
| shrubland_big_sagebrush | The proportion of big sagebrush canopy in each 30m pixel. Included in NLCD2016. | 30 |  |
| shrubland_herbaceous | The annual and perennial grass and forb proportion in each 30m pixel. Included in NLCD2016. | 30 |  |
| shrubland_litter | The dead plant material proportion in each 30m pixel. Included in NLCD2016. | 30 |  |
| shrubland_sagebrush | The proportion of sagebrush canopy in each 30m pixel. Included in NLCD2016. | 30 |  |
| shrubland_sagebrush_height | Average height of sagebrush. Included in NLCD2016. | 30 |  |
| shrubland_shrub | The proportion of shrub canopy in each 30m pixel. Included in NLCD2016. | 30 |  |
| shrubland_shrub_height | Average height of shrubs. Included in NLCD2016. | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('USGS/NLCD');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/USGS_NLCD
- 数据引用：Yang, L., Jin, S., Danielson, P., Homer, C., Gass, L., Case, A.,
Costello, C., Dewitz, J., Fry, J., Funk, M., Grannemann, B., Rigge,
M. and G. Xian. 2018,
[A New Generation of the United States National Land Cover Database: Requirements, Research Priorities, Design, and Implementation Strategies](https://www.sciencedirect.com/science/article/abs/pii/S092427161830251X), p. 108-123.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
