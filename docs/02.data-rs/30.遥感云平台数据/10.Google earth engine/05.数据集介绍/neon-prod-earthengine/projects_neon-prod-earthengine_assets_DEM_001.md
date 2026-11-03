---
title: "NEON Digital Elevation Model (DEM)"
date: 2026-11-03 12:00:00
permalink: /pages/a7f5a8f5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "airborne"
  - "dem"
  - "elevation-topography"
  - "forest"
  - "highres"
  - "lidar"
  - "neon"
  - "vegetation"
---

# NEON Digital Elevation Model (DEM)

## 数据集简介

Digital models of the surface (DSM) and terrain (DTM) derived from [NEON LiDAR data](
https://www.neonscience.org/data-collection/lidar). DSM: Surface features (topographic
information with vegetation and man-made structures present). DTM: Bare earth elevation
(topographic information with vegetation and man-made structures removed). Images are
given in meters above mean sea level and mosaicked onto a spatially uniform grid at
1 m resolution. Availability in GEE may not represent full availability in the NEON
Data Portal (linked below). Additional sites and years can be added to GEE upon request
by emailing listaopgee@battelleecology.org.

See [NEON Data Product DP3.30024.001](
https://data.neonscience.org/data-products/DP3.30024.001) for more details.

Documentation: [Elevation - LiDAR (DP3.30024.001) Quick Start Guide](
https://data.neonscience.org/api/v0/documents/quick-start-guides/NEON.QSG.DP3.30024.001v1?inline=true&fallback=html)

Get started by exploring the [Intro to AOP Data in Google Earth Engine Tutorial Series](
https://www.neonscience.org/resources/learning-hub/tutorials/intro-aop-data-google-earth-engine-tutorial-series)

Browse and interact with AOP data in the [NEON AOP GEE Data Viewer App](
https://neon-prod-earthengine.projects.earthengine.app/view/neon-aop-gee-data-viewer---desktop)

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/neon-prod-earthengine/assets/DEM/001`
- 数据类型：影像集合（ImageCollection）
- 提供方：NEON、Google Earth Engine
- 时间范围：2013-01-01 至 2026-05-14
- 空间分辨率：1 米
- 许可：CC0-1.0
- 关键词：airborne, dem, elevation-topography, forest, highres, lidar, neon, vegetation

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| DTM | Digital Terrain Model | 1 |  |
| DSM | Digital Surface Model | 1 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/neon-prod-earthengine/assets/DEM/001');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_neon-prod-earthengine_assets_DEM_001
- 数据引用：See [NEON citation guidelines](https://www.neonscience.org/data-samples/guidelines-policies/citing)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
