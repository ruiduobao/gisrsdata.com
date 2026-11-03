---
title: "World Settlement Footprint 2015"
date: 2026-11-03 12:00:00
permalink: /pages/a545a891/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "landcover"
  - "landsat-derived"
  - "population"
  - "sentinel1-derived"
  - "settlement"
  - "urban"
---

# World Settlement Footprint 2015

## 数据集简介

The World Settlement Footprint (WSF) 2015 is a 10m resolution binary mask
outlining the extent of human settlements globally derived by means of
2014-2015 multitemporal Landsat-8 and Sentinel-1 imagery (of which ~217,000 and
~107,000 scenes have been processed, respectively).

The temporal dynamics of human settlements over time are
sensibly different than those of all other non-settlement information classes.
Hence, given all the multitemporal images available over a region of interest
in the selected time interval, key temporal statistics (i.e., temporal mean,
minimum, maximum, etc.) are extracted for:

* the original backscattering value
in the case of radar data; and
*  different spectral indices (e.g., vegetation
index, built-up index, etc.) derived after performing cloud masking in the case
of optical imagery.

Next, different classification schemes based on Support
Vector Machines (SVMs) are separately applied to the optical and radar temporal
features, respectively, and, finally, the two outputs are properly combined
together.

To quantitatively assess the high accuracy and reliability of the
layer, an extensive validation exercise has been carried out in collaboration
with Google based on a huge amount of ground-truth samples (i.e., 900,000)
labeled by crowd-sourcing photo-interpretation. A statistically
robust and transparent protocol has been defined following the state-of-the-art
practices currently recommended in the literature.

For all technical details, please refer to
[the publication](https://www.nature.com/articles/s41597-020-00580-5)

## 基本信息

- 数据集编号（Earth Engine ID）：`DLR/WSF/WSF2015/v1`
- 数据类型：影像（Image）
- 提供方：Deutsches Zentrum für Luft- und Raumfahrt (DLR)、Google Earth Engine
- 时间范围：2015-01-01 至 2016-01-01
- 许可：CC0-1.0
- 关键词：landcover, landsat-derived, population, sentinel1-derived, settlement, urban

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| settlement | A human settlement area | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('DLR/WSF/WSF2015/v1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/DLR_WSF_WSF2015_v1
- 数据引用：Marconcini, M., Metz-Marconcini, A., Üreyen, S., Palacios-Lopez, D., Hanke, W., Bachofer, F.,
Zeidler, J., Esch, T., Gorelick, N., Kakarla, A., Paganini, M., Strano, E. (2020).
Outlining where humans live, the World Settlement Footprint 2015. Scientific Data, 7(1), 1-14.
[doi:10.1038/s41597-020-00580-5](https://doi.org/10.1038/s41597-020-00580-5)

- DOI：10.1038/s41597-020-00580-5

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
