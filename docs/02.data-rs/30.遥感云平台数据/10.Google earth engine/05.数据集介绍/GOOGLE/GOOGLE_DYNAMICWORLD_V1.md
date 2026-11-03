---
title: "Dynamic World V1"
date: 2026-11-03 12:00:00
permalink: /pages/a78539ca/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "global"
  - "google"
  - "landcover"
  - "landuse"
  - "landuse-landcover"
  - "nrt"
  - "sentinel2-derived"
---

# Dynamic World V1

## 数据集简介

Dynamic World is a 10m near-real-time (NRT) Land Use/Land Cover (LULC)
dataset that includes class probabilities and label information for nine
classes.

Dynamic World predictions are available for the Sentinel-2 L1C collection
from 2015-06-27 to present. The revisit frequency of Sentinel-2 is between
2-5 days depending on latitude. Dynamic World predictions are generated for
Sentinel-2 L1C images with CLOUDY_PIXEL_PERCENTAGE <= 35%.
Predictions are masked to remove clouds and cloud shadows using
a combination of S2 Cloud Probability, Cloud Displacement Index, and
Directional Distance Transform.

Images in the Dynamic World collection have names matching the individual
Sentinel-2 L1C asset names from which they were derived, e.g:

  ee.Image('COPERNICUS/S2/20160711T084022_20160711T084751_T35PKT')

has a matching Dynamic World image named:
  ee.Image('GOOGLE/DYNAMICWORLD/V1/20160711T084022_20160711T084751_T35PKT').

All probability bands except the "label" band collectively sum to 1.

To learn more about the Dynamic World dataset and see examples for
generating composites, calculating regional statistics, and working with the
time series, see the [Introduction to Dynamic World](https://developers.google.com/earth-engine/tutorials/community/introduction-to-dynamic-world-pt-1) tutorial series.

Given Dynamic World class estimations are derived from single images using a
spatial context from a small moving window, top-1 "probabilities" for
predicted land covers that are in-part defined by cover over time, like
crops, can be comparatively low in the absence of obvious distinguishing
features. High-return surfaces in arid climates, sand, sunglint, etc may
also exhibit this phenomenon.

To select only pixels that confidently belong to a Dynamic World class,
it is recommended to mask Dynamic World outputs by thresholding the
estimated "probability" of the top-1 prediction.

## 基本信息

- 数据集编号（Earth Engine ID）：`GOOGLE/DYNAMICWORLD/V1`
- 数据类型：影像集合（ImageCollection）
- 提供方：World Resources Institute、Google、Google Earth Engine
- 时间范围：2015-06-27 至 2026-11-02
- 空间分辨率：10 米
- 许可：CC-BY-4.0
- 关键词：global, google, landcover, landuse, landuse-landcover, nrt, sentinel2-derived

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| water | Estimated probability of complete coverage by water | 10 |  |
| trees | Estimated probability of complete coverage by trees | 10 |  |
| grass | Estimated probability of complete coverage by grass | 10 |  |
| flooded_vegetation | Estimated probability of complete coverage by flooded vegetation | 10 |  |
| crops | Estimated probability of complete coverage by crops | 10 |  |
| shrub_and_scrub | Estimated probability of complete coverage by shrub and scrub | 10 |  |
| built | Estimated probability of complete coverage by built | 10 |  |
| bare | Estimated probability of complete coverage by bare | 10 |  |
| snow_and_ice | Estimated probability of complete coverage by snow and ice | 10 |  |
| label | Index of the band with the highest estimated probability | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('GOOGLE/DYNAMICWORLD/V1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_DYNAMICWORLD_V1
- 数据引用：Brown, C.F., Brumby, S.P., Guzder-Williams, B. et al. Dynamic World, Near
real-time global 10 m land use land cover mapping. Sci Data 9, 251 (2022).
[doi:10.1038/s41597-022-01307-4](https://doi.org/10.1038/s41597-022-01307-4)

- DOI：10.1038/s41597-022-01307-4

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
