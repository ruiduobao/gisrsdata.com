---
title: "Global map of Local Climate Zones, latest version"
date: 2026-11-03 12:00:00
permalink: /pages/65860dab/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "landcover"
  - "landuse-landcover"
  - "urban"
---

# Global map of Local Climate Zones, latest version

## 数据集简介

Since their introduction in 2012, Local Climate Zones (LCZs) emerged as
a new standard for characterizing urban landscapes, providing a holistic
classification approach that takes into account micro-scale land-cover and
associated physical properties.

This global map of Local Climate Zones, at 100m pixel size and
representative for the nominal year 2018, is derived from multiple earth
observation datasets and expert LCZ class labels. LCZ_Filter is the
recommended band for most users. The other classification band, LCZ, is
only provided as it is used to calculate the LCZ_Probability band.

The LCZ scheme complements other land use / land cover schemes by
its focus on urban and rural landscape types, which can be described by
any of the 17 classes in the LCZ scheme. Out of the 17 LCZ classes, 10
reflect the 'built' environment, and each LCZ type is associated with
generic numerical descriptions of key urban canopy parameters critical to
model atmospheric responses to urbanisation.  In addition, since LCZs were
originally designed as a new framework for urban heat island studies, they
also contain a limited set (7) of 'natural' land-cover classes that can be
used as 'control' or 'natural reference' areas.

As these seven natural classes in the LCZ scheme can not capture the
heterogeneity of the world's existing natural ecosystems, we advise
users - if required - to combine the built LCZ classes with any other
land-cover product that provides a wider range of natural land-cover
classes.

See also:

* [LCZ Typology](https://doi.org/10.1175/BAMS-D-11-00019.1)

* [Global map of LCZs - paper](https://doi.org/10.5194/essd-14-3835-2022)

* [Global map of LCZs - dataset](https://doi.org/10.5281/zenodo.6364593)

* [LCZ Gaussian filtering](https://doi.org/10.1038/s41597-020-00605-z)

## 基本信息

- 数据集编号（Earth Engine ID）：`RUB/RUBCLIM/LCZ/global_lcz_map/latest`
- 数据类型：影像集合（ImageCollection）
- 提供方：Bochum Urban Climate Lab、Google Earth Engine
- 时间范围：2018-01-01 至 2019-01-01
- 空间分辨率：100 米
- 许可：CC-BY-4.0
- 关键词：climate, landcover, landuse-landcover, urban

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LCZ | The raw, pixel-based global LCZ map with LCZ classes | 100 |  |
| LCZ_Filter | The recommended global LCZ map with LCZ classes.  LCZ labels are obtained after applying the morphological Gaussian filter described in Demuzere et al. (2020)  | 100 |  |
| LCZ_Probability | A probability layer that identifies how often the modal LCZ was chosen per pixel (e.g. a probability of 60% means that the modal LCZ class was mapped 30 times out of 50 LCZ models). This is a pixel-based probability derived from the LCZ layer  | 100 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('RUB/RUBCLIM/LCZ/global_lcz_map/latest');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/RUB_RUBCLIM_LCZ_global_lcz_map_latest
- 数据引用：Demuzere M.; Kittner J.; Martilli A.; Mills, G.; Moede, C.; Stewart, I.D.; van Vliet, J.; Bechtel, B.
A global map of local climate zones to support earth system modelling and urban-scale environmental science.
Earth System Science Data 2022, 14 Volume 8: 3835-3873.
[doi:10.5194/essd-14-3835-2022](https://doi.org/10.5194/essd-14-3835-2022)

- DOI：10.5281/zenodo.6364593

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
