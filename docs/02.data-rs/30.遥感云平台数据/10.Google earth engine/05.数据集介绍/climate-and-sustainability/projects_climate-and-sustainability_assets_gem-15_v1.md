---
title: "GEM-15: Near-Global Surface and Terrain Elevation Models (15m) (Experimental)"
date: 2026-11-03 12:00:00
permalink: /pages/2c266cb4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "google"
  - "height"
  - "ml"
  - "topography"
---

# GEM-15: Near-Global Surface and Terrain Elevation Models (15m) (Experimental)

## 数据集简介

Google's Near-Global Elevation Models at 15m (GEM-15) is an experimental
(under review) near-global elevation dataset at 15m grid spacing derived
from sub-meter optical stereo satellite imagery. The dataset is built from
optical stereo imagery acquired through 2024 (primarily 2022&ndash;2024
30cm Pl&eacute;iades Neo imagery, supplemented by WorldView-2/3/4,
GeoEye-1, Pl&eacute;iades 1A/1B, and 1.5m SPOT stereo imagery), aggregating
native 0.5m DSM reconstructions and 1.0m DTM predictions to 15m resolution.

Alongside the primary 15m Digital Surface Model (`dsm`), GEM-15 includes
within-cell elevation percentiles (`dsm_percentile_5`, `dsm_percentile_50`,
`dsm_percentile_95`), sub-grid elevation standard deviation (`dsm_std`), and
a bare-earth Digital Terrain Model (`dtm`) predicted at 1.0m resolution
using a deep learning model prior to aggregation.

* Explore the elevation layers interactively through the
  [GEM-15 Earth Engine App](https://climate-and-sustainability.projects.earthengine.app/view/gem-15).
* Access the
  [Google Cloud Storage (GCS) COGs](https://storage.googleapis.com/climate-and-sustainability/gem-15)
  (`gs://climate-and-sustainability/gem-15`) and
  [STAC catalog](https://storage.googleapis.com/climate-and-sustainability/gem-15/stac/catalog.json).
* Find the evaluation code on
  [GitHub](https://github.com/google-research/google-research/tree/master/gem_15).

All elevation layers report orthometric heights in meters referenced to the
EGM96 geoid vertical datum ([EPSG:5773](https://epsg.io/5773)) and are
projected in local UTM zones at 15m pixel resolution.

**Possible Uses:**

* **Flood and inundation modeling:** Using the 15m bare-earth `dtm` and
  `dsm` layers for watershed, flow and inundation modeling. 
* **Canopy and building height estimation:** Combining `dsm_percentile_95`
  (or `dsm`) with `dtm` to estimate above-ground building and forest canopy
  heights (`dsm - dtm`) and local vertical variability (`dsm_std`). Note
  that super-tall (~>50m) buildings are often not captured well due to
  stereo limitations.
* **Topographic analysis:** Using the 15m elevation layers for satellite
  imagery orthorectification and slope or aspect calculation.

**Limitations:**

* **Multi-temporal imagery:** Tiles are constructed from multi-view imagery
  across three sensor tiers: 63.2% of mapped tiles use 2022&ndash;2024 30cm
  Pl&eacute;iades Neo imagery, 24.4% use other sub-meter sensors
  (WorldView-2/3/4, GeoEye-1, Pl&eacute;iades 1A/1B), and 12.4% use 1.5m
  SPOT imagery. Temporal transitions can appear along acquisition
  boundaries.
* **Coverage exclusions:** Coverage spans latitudes 60&deg;S to 84&deg;N and
  excludes Russia, China, Mongolia, Greenland, and Antarctica. India data is
  offset (with the offsets tapering off outside India's border over tens of
  kilometers) to comply with India Geospatial regulations.
* **Water masking and voids:** Water bodies (plus a 9m buffer), snow/ice,
  salt pans, and other low-texture surfaces (~1&ndash;3% of cells), and
  pixels differing by more than 50m from Copernicus GLO-30 are masked as
  no-data.
* **Dense forest canopy:** Because the elevations are derived from optical
  stereo imagery rather than LiDAR, bare-earth `dtm` accuracy is lower in
  dense forests where the ground is not visible from above.
* **Absolute vertical accuracy:** Regional mean offsets of several meters
  relative to airborne lidar occur (-4.8 m to +1.9 m across the
  validation regions in the paper). Where absolute precision is critical,
  debias against local control.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/climate-and-sustainability/assets/gem-15_v1`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google Research、Google Earth Engine
- 时间范围：2025-01-01 至 2025-01-01
- 空间分辨率：15 米
- 许可：CC-BY-4.0
- 关键词：dem, elevation, elevation-topography, google, height, ml, topography

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| dsm | Digital Surface Model (mean of 2.5m bilinear native DSM within 15m cell) | 15 |  |
| dsm_std | Standard deviation of 2.5m bilinear native DSM within 15m cell | 15 |  |
| dsm_percentile_5 | 5th percentile of 2.5m bilinear native DSM within 15m cell | 15 |  |
| dsm_percentile_50 | 50th percentile (median) of 2.5m bilinear native DSM within 15m cell | 15 |  |
| dsm_percentile_95 | 95th percentile of 2.5m bilinear native DSM within 15m cell | 15 |  |
| dtm | Bare-earth Digital Terrain Model (mean of 2.5m bilinear native DTM within 15m cell) | 15 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/climate-and-sustainability/assets/gem-15_v1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_climate-and-sustainability_assets_gem-15_v1
- 数据引用：Batchu, V. V., et al. (2026). GEM-15: Global surface and terrain elevation
models (15 meters) from sub-meter optical stereo imagery.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
