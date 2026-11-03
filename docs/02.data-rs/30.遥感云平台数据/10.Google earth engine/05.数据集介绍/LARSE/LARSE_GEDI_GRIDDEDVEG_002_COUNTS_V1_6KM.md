---
title: "Gridded GEDI Vegetation Structure Metrics and Biomass Density with COUNTS metrics, 6KM pixel size"
date: 2026-11-03 12:00:00
permalink: /pages/de63c924/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "biomass"
  - "canopy"
  - "forest"
  - "forest-biomass"
  - "gedi"
  - "larse"
  - "lidar"
  - "nasa"
  - "vegetation"
---

# Gridded GEDI Vegetation Structure Metrics and Biomass Density with COUNTS metrics, 6KM pixel size

## 数据集简介

This dataset consists of near-global, analysis-ready, multi-resolution
gridded vegetation structure metrics derived from NASA Global Ecosystem
Dynamics Investigation (GEDI) Level 2 and 4A products associated with 25-m
diameter lidar footprints. This dataset provides a comprehensive
representation of near-global vegetation structure that is inclusive of
the entire vertical profile, based solely on GEDI lidar, and validated with
independent data.

The GEDI sensor, mounted on the International Space
Station (ISS), uses eight laser beams spaced by 60 m along-track and 600 m
across-track on the Earth surface to measure ground elevation and vegetation
structure between approximately 52 degrees North and South latitude.
Between April 17th 2019 and March 16th 2023, GEDI acquired 11 and 7.7
billion quality waveforms suitable for measuring ground elevation and
vegetation structure, respectively.

In addition to many of the standard L2 and L4A shot metrics, several
additional metrics have been derived which may be particularly useful for
applications in carbon and water cycling processes in earth system models,
as well as forest management, biodiversity modeling, and habitat assessment.
Variables include canopy height, canopy cover, plant area index, foliage
height diversity, and plant area volume density at 5 m strata. Refer to the
[Gridded GEDI Vegetation Structure Metrics and Biomass Density]
(https://daac.ornl.gov/VEGETATION/guides/GEDI_HighQuality_Shots_Rasters.html)
for more information.

Eight statistics are included for each GEDI shot metric: mean, bootstrapped
standard error of the mean, median, standard deviation, interquartile range,
95th percentile, Shannon's diversity index, and shot count.
Quality shot filtering methodology that aligns with the GEDI L4B Gridded
Aboveground Biomass Density, Version 2.1 was used. In comparison to the
corresponding GEDI L3 dataset, this dataset provides additional gridded metrics at
multiple spatial resolutions and over several temporal periods (annual and
the full mission duration).

This dataset provides GEDI shot metrics aggregated into raster grids at
three spatial resolutions: 1 km, 6 km, and 12 km.
This dataset uses the pixel size of 6KM with counts metrics.

## 基本信息

- 数据集编号（Earth Engine ID）：`LARSE/GEDI/GRIDDEDVEG_002/COUNTS/V1/6KM`
- 数据类型：影像集合（ImageCollection）
- 提供方：Rasterization: Google and USFS Laboratory for Applications of Remote Sensing in Ecology (LARSE)、Gridded GEDI Vegetation Structure Metrics and Biomass Density、Google Earth Engine
- 时间范围：2019-04-17 至 2023-03-16
- 空间分辨率：6000 米
- 许可：proprietary
- 关键词：biomass, canopy, forest, forest-biomass, gedi, larse, lidar, nasa, vegetation

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| shots_count | The number of shots. For a shot to be counted in this layer the following fields need to be valid: longitude, latitude, elevation of the lowest mode, decimal date, and orbit.  | 6000 |  |
| orbits_uniq | The number of unique orbits.  | 6000 |  |
| tracks_uniq | The number of unique tracks. A track is the combination of orbit and beam.  | 6000 |  |
| shots_nni | The Nearest Neighbor Index (Evans et al. 2023).  | 6000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LARSE/GEDI/GRIDDEDVEG_002/COUNTS/V1/6KM');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LARSE_GEDI_GRIDDEDVEG_002_COUNTS_V1_6KM
- 数据引用：Burns, P., Hakkenberg, C.R. & Goetz, S.J. Multi-resolution gridded maps of
vegetation structure from GEDI. Sci Data 11, 881 (2024).
[doi:10.1038/s41597-024-03668-4](https://doi.org/10.1038/s41597-024-03668-4)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
