---
title: "MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid"
date: 2026-11-03 12:00:00
permalink: /pages/7cbb8070/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "16-day"
  - "global"
  - "nasa"
  - "terra"
  - "usgs"
  - "vegetation"
  - "vegetation-indices"
---

# MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid

## 数据集简介

The Terra Moderate Resolution Imaging Spectroradiometer (MODIS) Vegetation Indices 16-Day (MOD13C1) Version 6.1 product provides a Vegetation Index (VI) value at a per pixel basis. There are two primary vegetation layers. The first is the Normalized Difference Vegetation Index (NDVI), which maintains continuity with the existing National Oceanic and Atmospheric Administration-Advanced Very High Resolution Radiometer (NOAA-AVHRR) derived NDVI. The second vegetation layer is the Enhanced Vegetation Index (EVI), which has improved sensitivity over high biomass regions. The Climate Modeling Grid (CMG) consists of 3,600 rows and 7,200 columns of 5,600 meter (m) pixels. Global MOD13C1 data are cloud-free spatial composites of the gridded 16-day 1 kilometer MOD13A2 data, and are provided as a Level 3 product projected on a 0.05 degree (5,600 m) geographic CMG. The MOD13C1 has data fields for NDVI, EVI, VI QA, reflectance data, angular information, and spatial statistics such as mean, standard deviation, and number of used input pixels at the 0.05 degree CMG resolution.

Note that scale factors and offsets described in the MODIS documentation
for MOD13C1 bands are already applied to assets ingested into Earth
Engine.

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MOD13C1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-18 至 2026-09-30
- 空间分辨率：5600 米
- 许可：proprietary
- 关键词：16-day, global, nasa, terra, usgs, vegetation, vegetation-indices

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| NDVI | 16-day NDVI average | 5600 |  |
| EVI | 16-day EVI average | 5600 |  |
| DetailedQA | VI Quality indicators | 5600 |  |
| sur_refl_b01 | Surface reflectance band 1 (red) | 5600 | 620-670nm |
| sur_refl_b02 | Surface reflectance band 2 (near-infrared) | 5600 | 841-876nm |
| sur_refl_b03 | Surface reflectance band 3 (blue) | 5600 | 459-479nm |
| sur_refl_b07 | Surface reflectance band 7 (mid-infrared) | 5600 | 2105-2155nm |
| SolarZenith | View zenith angle of VI Pixel | 5600 |  |
| NDVIStdDev | Standard deviation computed from input NDVI pixels | 5600 |  |
| EVIStdDev | Standard deviation computed from input NDVI pixels | 5600 |  |
| Pixel_1km | Number of 1 km input pixels used | 5600 |  |
| Pixel_30deg_1km | Number of 1 km input pixels used with VZ angle less than + or - 30 degs | 5600 |  |
| SummaryQA | Quality reliability of VI pixel | 5600 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MOD13C1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD13C1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD13C1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
