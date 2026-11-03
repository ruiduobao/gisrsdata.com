---
title: "GPW Annual uncalibrated Gross Primary Productivity (uGPP) v1"
date: 2026-11-03 12:00:00
permalink: /pages/49bcd349/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "global"
  - "land"
  - "landcover"
  - "landuse"
  - "plant-productivity"
  - "vegetation"
---

# GPW Annual uncalibrated Gross Primary Productivity (uGPP) v1

## 数据集简介

This dataset provides global uncalibrated EO-based Gross Primary Productivity 
from 2000 at 30-m spatial resolution. 
Produced by the Land &#38; Carbon Lab Global Pasture Watch initiative, the current dataset provides 
Gross Primary Productivity (GPP) values globally at 30-m spatial resolution from 2000 onwards. 
GPP values are modeled via a **light use efficiency (LUE)** approach, 
where [**GLAD Landsat ARD** (collection-2)](https://glad.umd.edu/ard/home) are aggregated every two months 
([Consoli et al., 2024](https://peerj.com/articles/18585/)) and combined with 1-km **MODIS 
temperature** data and 1° **CERES Photosynthetically Active Radiation** (PAR). 

To keep the dataset flexible, the maximum light use efficiency (LUEmax) is set to 1 gC/m²/day/MJ 
for **all land cover types**, allowing the users to later calibrate the 
GPP values according to specific land cover maps or regional conditions.

**Bi-monthly uncalibrated Gross Primary Productivity (uGPP)** values (available in [OpenLandMap STAC](https://stac.openlandmap.org/gpw_ugpp.daily-30m/collection.json)) are averaged by each year and accumulated over the full 365-day period to produce
global annual uGPP values, expressed in units of gC/m²/year.

**Grassland GPP** values are computed on-the-fly using [GEE App](https://global-pasture-watch.projects.earthengine.app/view/ggpp-30m).

**Limitations:** 

- **Input data resolution mismatch**: The dataset is provided at 30 m resolution, but key input variables for temperature (MOD11A1) 
and photosynthetically active radiation (CERES PAR) were derived from much coarser products (1 km and ~111 km, respectively).
The downscaling of this information can introduce uncertainty and may not capture fine-scale microclimatic conditions affecting plant productivity.

- **Data artifacts**: The dataset contains known visual artifacts, including vertical stripes ("stripe effect") in some areas, which are a result 
of issues with the Landsat 7 sensor (Scan Line Corrector failure) and the subsequent gap-filling process used to create the underlying 
reflectance archive ([Consoli et al., 2024](https://peerj.com/articles/18585/)). These artifacts can disrupt the spatial continuity 
of GPP estimates during cloudy and snow cover periods

- **Temporal resolution**: The data is produced at a bimonthly temporal resolution. This timeframe may not be sufficient 
to capture key growth periods or a plant's rapid responses (intense rainfall) to environmental changes, making 
it difficult to accurately capture productivity peaks and seasonal variation.

- **Grassland calibration**: Grassland GPP values are calculated using a single maximum light use efficiency (LUEmax) 
parameter (0.86 gC/m²/year/MJ) for all global grasslands, based on the MOD17 algorithm. This value is not optimized 
for specific grassland types or local conditions. As a result, the model shows a tendency to underestimate GPP when 
compared to ground-based flux tower measurements.

- **Dependence on grassland maps accuracy**: The accuracy of the grassland GPP values is contingent on the accuracy of the 
underlying [GPW grassland maps](https://developers.google.com/earth-engine/datasets/catalog/projects_global-pasture-watch_assets_ggc-30m_v1_grassland_c).
Any misclassification of land cover in the source maps (e.g., shrublands or croplands identified as grassland) will 
lead to corresponding errors in the GPP estimates for those locations.

**For more information see [Isik et. al, 2025](https://doi.org/10.7717/peerj.19774),
[Zenodo](https://doi.org/10.5281/zenodo.15675358) and 
[Global Pasture Watch GitHub site](https://github.com/wri/global-pasture-watch)**

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/global-pasture-watch/assets/ggpp-30m/v1/ugpp_m`
- 数据类型：影像集合（ImageCollection）
- 提供方：Land and Carbon Lab Global Pasture Watch、Google Earth Engine
- 时间范围：2000-01-01 至 2024-01-01
- 许可：CC-BY-4.0
- 关键词：global, land, landcover, landuse, plant-productivity, vegetation

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| gc_m2 | Grams of carbon per square meter per year (gC/m²/year) | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/global-pasture-watch/assets/ggpp-30m/v1/ugpp_m');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_global-pasture-watch_assets_ggpp-30m_v1_ugpp_m
- 数据引用：Isik, M. S., Mesquita, V., Parente, L., & Consoli, D. (2025). 
Global Pasture Watch - Source Code of the Global Uncalibrated EO-based GPP and 
Grassland GPP Maps at 30m. Zenodo.
[Source code]. Zenodo
[doi:https://doi.org/10.5281/zenodo.15675358](https://doi.org/10.5281/zenodo.15675358)

- DOI：10.5281/zenodo.13890401

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
