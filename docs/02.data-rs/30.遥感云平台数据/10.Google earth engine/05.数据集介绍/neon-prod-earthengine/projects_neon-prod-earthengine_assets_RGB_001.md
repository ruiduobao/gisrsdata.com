---
title: "NEON RGB Camera Imagery"
date: 2026-11-03 12:00:00
permalink: /pages/703789c5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "airborne"
  - "forest"
  - "highres"
  - "neon"
  - "orthophoto"
  - "orthophotos"
  - "rgb"
  - "vegetation"
---

# NEON RGB Camera Imagery

## 数据集简介

High resolution Red-Green-Blue (RGB) orthorectified camera images mosaicked
and output onto a fixed, uniform spatial grid using nearest-neighbor resampling;
spatial resolution is 0.1 m.  The digital camera is part of a suite of instruments
on the NEON Airborne Observation Platform (AOP) that also includes a
full-waveform LiDAR system and the NEON Imaging Spectrometer. In the
orthorectification process, the digital imagery is re-mapped to the same
geographic projection as the LiDAR and imaging spectrometer data that is
acquired simultaneously. The resulting images share the same map projection
grid space as the orthorectified spectrometer and LiDAR imagery. Since the
digital camera imagery is acquired at higher spatial resolution than the
imaging spectrometer data, it can aid in identifying features in the
spectrometer images including manmade features (e.g., roads, fence lines,
and buildings) that are indicative of land-use change. Availability in
GEE may not represent full availability in the NEON Data Portal (linked below).
Additional sites and years can be added to GEE upon request by emailing
listaopgee@battelleecology.org.

See [NEON Data Product
DP3.30010.001](https://data.neonscience.org/data-products/DP3.30010.001) for
more details.

Documentation: [NEON DP3.30010.001 Camera imagery mosaic Quick Start
Guide](https://data.neonscience.org/api/v0/documents/quick-start-guides/NEON.QSG.DP3.30010.001v1?inline=true&fallback=html)

Get started by exploring the [Intro to AOP Data in Google Earth Engine Tutorial Series](
https://www.neonscience.org/resources/learning-hub/tutorials/intro-aop-data-google-earth-engine-tutorial-series)

Browse and interact with AOP data in the [NEON AOP GEE Data Viewer App](
https://neon-prod-earthengine.projects.earthengine.app/view/neon-aop-gee-data-viewer---desktop)

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/neon-prod-earthengine/assets/RGB/001`
- 数据类型：影像集合（ImageCollection）
- 提供方：NEON、Google Earth Engine
- 时间范围：2013-01-01 至 2026-05-14
- 空间分辨率：0.1 米
- 许可：CC0-1.0
- 关键词：airborne, forest, highres, neon, orthophoto, orthophotos, rgb, vegetation

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| R | Red | 0.1 |  |
| G | Green | 0.1 |  |
| B | Blue | 0.1 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/neon-prod-earthengine/assets/RGB/001');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_neon-prod-earthengine_assets_RGB_001
- 数据引用：See [NEON citation guidelines](https://www.neonscience.org/data-samples/guidelines-policies/citing)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
