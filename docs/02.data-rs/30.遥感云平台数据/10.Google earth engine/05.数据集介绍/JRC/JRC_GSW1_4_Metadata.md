---
title: "JRC Global Surface Water Metadata, v1.4"
date: 2026-11-03 12:00:00
permalink: /pages/1f03ce37/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "geophysical"
  - "google"
  - "jrc"
  - "landsat-derived"
  - "surface"
  - "surface-ground-water"
  - "water"
---

# JRC Global Surface Water Metadata, v1.4

## 数据集简介

This dataset contains maps of the location and temporal
distribution of surface water from 1984 to 2021 and provides
statistics on the extent and change of those water surfaces.
For more information see the associated journal article: [High-resolution
mapping of global surface water and its long-term changes](https://www.nature.com/nature/journal/v540/n7633/full/nature20584.html)
(Nature, 2016) and the online
[Data Users Guide](https://storage.googleapis.com/global-surface-water/downloads_ancillary/DataUsersGuidev2021.pdf).

These data were generated using 4,716,475 scenes from Landsat
5, 7, and 8 acquired between 16 March 1984 and 31 December 2021.
Each pixel was individually classified into water / non-water
using an expert system and the results were collated into a monthly
history for the entire time period and two epochs (1984-1999,
2000-2021) for change detection.

This product contains metadata about the observations that went into
computing The Global Surface Water dataset. Areas where water has never
been detected are masked.

## 基本信息

- 数据集编号（Earth Engine ID）：`JRC/GSW1_4/Metadata`
- 数据类型：影像（Image）
- 提供方：EC JRC / Google、Google Earth Engine
- 时间范围：1984-03-16 至 2022-01-01
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：geophysical, google, jrc, landsat-derived, surface, surface-ground-water, water

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| detections | The number of water detections in the study period. | 30 |  |
| valid_obs | The number of valid observations in the study period. | 30 |  |
| total_obs | The total number of available observations (i.e. scenes) in the study period. | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('JRC/GSW1_4/Metadata');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_GSW1_4_Metadata
- 数据引用：Jean-Francois Pekel, Andrew Cottam, Noel Gorelick, Alan S. Belward,
High-resolution mapping of global surface water and its long-term changes.
Nature 540, 418-422 (2016). ([doi:10.1038/nature20584](https://doi.org/10.1038/nature20584))


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
