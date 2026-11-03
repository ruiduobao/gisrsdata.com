---
title: "Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Near Real Time"
date: 2026-11-03 12:00:00
permalink: /pages/f9c69da9/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "oceans"
---

# Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Near Real Time

## 数据集简介

Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density
is an oceanographic product that provides daily, global, and gap-free
Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density
(SSD) at a high resolution of 1/8 degree. This product is generated
by blending observations from multiple satellite missions
(like SMOS and SMAP) with in-situ measurements
(such as those from Argo floats and TSGs) using a sophisticated
multivariate optimal interpolation algorithm, thereby creating a long and
consistent time series that includes both
historical (reprocessed) data and near-real-time updates.
By delivering these climate variables, the dataset is useful
for monitoring the global water cycle, studying changes in ocean circulation
driven by density variations, and serving as an input for climate
modeling and ocean forecasting systems.

This dataset provides the Near-Real-Time (NRT) version of the daily,
global, Level-4 analysis for Sea Surface Salinity (SSS) and Sea Surface
Density (SSD).

Documentation:

 * [User's Guide](https://documentation.marine.copernicus.eu/PUM/CMEMS-MOB-PUM-015-013.pdf)

 * [Quality Information Document](https://documentation.marine.copernicus.eu/QUID/CMEMS-MOB-QUID-015-013.pdf)

 * [Copernicus Marine Datastore](https://data.marine.copernicus.eu/products)

## 基本信息

- 数据集编号（Earth Engine ID）：`COPERNICUS/MARINE/GLOBAL_SEA_SURFACE/NRT_DAILY`
- 数据类型：影像集合（ImageCollection）
- 提供方：Copernicus、Google Earth Engine
- 时间范围：2023-01-01 至 2026-09-08
- 空间分辨率：14000 米
- 许可：CC-BY-4.0
- 关键词：copernicus, oceans

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sos | Sea Surface Salinity | 14000 |  |
| sos_error | Sea Surface Salinity Error | 14000 |  |
| dos | Sea Surface Density | 14000 |  |
| dos_error | Sea Surface Density Error | 14000 |  |
| sea_ice_fraction | Sea Surface Ice Fraction | 14000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/GLOBAL_SEA_SURFACE/NRT_DAILY');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_NRT_DAILY
- 数据引用：Copernicus Multi Observation Global Ocean Sea Surface Salinity and Sea Surface
Density: Global Ocean Satellite and In-Situ Observations, CNR (Rome, Italy) is
providing daily Sea Surface Salinity and Sea Surface Density analyses.
[doi:10.48670/moi-00051](https://doi.org/10.48670/moi-00051)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
