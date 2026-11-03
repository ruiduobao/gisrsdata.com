---
title: "GPW Annual Probabilities of Natural/Semi-natural Grasslands v1"
date: 2026-11-03 12:00:00
permalink: /pages/a9fff33d/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "global"
  - "land"
  - "landcover"
  - "landuse"
  - "landuse-landcover"
  - "pasture"
  - "rangeland"
  - "vegetation"
---

# GPW Annual Probabilities of Natural/Semi-natural Grasslands v1

## 数据集简介

This dataset provides global annual probability maps of natural/semi-natural
grassland from 2000 to 2022 at 30-m spatial resolution. 
Produced by the Land &#38;
Carbon Lab Global Pasture Watch initiative, the mapped grassland extent
includes any land cover type, which contains at least 30% of dry or wet
low vegetation, dominated by grasses and forbs (less than 3 meters) 
and a:

- maximum of 50% tree canopy cover (greater than 5 meters),
- maximum of 70% of other woody vegetation (scrubs and open shrubland), and
- maximum of 50% active cropland cover in mosaic landscapes of cropland
 &#38; other vegetation.

The grassland extent is classified into two classes:
- **Cultivated grassland**: Areas where grasses and other forage plants have
been intentionally planted and managed, as well as areas of native 
grassland-type vegetation where they clearly exhibit active and
heavy management for specific human-directed uses, such as directed
grazing of livestock.
- **Natural/Semi-natural grassland**: Relatively undisturbed native
grasslands/short-height vegetation, such as steppes and tundra, 
as well as areas that have experienced varying degrees of human 
activity in the past, which may contain a mix of native and 
introduced species due to historical land use and natural processes. 
In general, they exhibit natural-looking patterns of varied vegetation 
and clearly ordered hydrological relationships throughout the landscape.

The implemented methodology considered [GLAD Landsat ARD-2 images 
](https://glad.umd.edu/ard) (processed into cloud-free bi-monthly 
aggregates, see [Consoli et al, 2024](https://doi.org/10.7717/peerj.18585)
), accompanied by climatic, landform and proximity covariates, 
spatiotemporal machine learning (per-class Random Forest) and over 
2.3 million reference samples (visually interpreted in Very High 
Resolution imagery). Custom probability thresholds (based on five-fold 
spatial cross-validation and balanced precision and recall values) 
were used to derive dominant class maps, 0.32 and 0.42 for 
cultivated and natural/semi-natural grassland probability thresholds, respectively.

**Limitations:** Grassland extent is partly under-predicted in southeastern
Africa (Zimbabwe and Mozambique) and in eastern Australia (shrublands and
woodlands of the Mulga ecoregion). Cropland is misclassified as grassland
in parts of northern Africa, the Arabian Peninsula, Western Australia, 
New Zealand, the center of Bolivia, and Mato Grosso state (Brazil). Due 
to the Landsat 7 SLC failure, regular stripes of grassland probabilities 
are visible at parcel-level, particularly in the year 2012. The usage of 
coarser resolution layers (accessibility maps and MODIS products) 
introduced curvilinear macroscopic errors (due to the downscaling 
strategy based on cubicspline) in Uruguay, Southwest Argentina, South 
of Angola and in the Sahel region in Africa. Users need to be aware 
of the limitations and known issues; whilst considering them 
carefully to ensure appropriate use of maps at this initial prediction 
stage. GPW is working actively to collect systematic feedback via the [Geo-Wiki 
platform](https://www.geo-wiki.org), validate the current version 
and improve future versions of the dataset.

**For more information see [Parente et. al, 2024](http://doi.org/10.1038/s41597-024-04139-6),
[Zenodo](https://zenodo.org/records/13890401) and 
[Global Pasture Watch GitHub site](https://github.com/wri/global-pasture-watch)**

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/global-pasture-watch/assets/ggc-30m/v1/nat-semi-grassland_p`
- 数据类型：影像集合（ImageCollection）
- 提供方：Land and Carbon Lab Global Pasture Watch、Google Earth Engine
- 时间范围：2000-01-01 至 2023-01-01
- 许可：CC-BY-4.0
- 关键词：global, land, landcover, landuse, landuse-landcover, pasture, rangeland, vegetation

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| probability | Natural/Semi-natural grassland probability value derived through Random Forest. | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/global-pasture-watch/assets/ggc-30m/v1/nat-semi-grassland_p');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_global-pasture-watch_assets_ggc-30m_v1_nat-semi-grassland_p
- 数据引用：Parente, L., Sloat, L., Mesquita, V., et al. (2024) 
Global Pasture Watch - Annual grassland class and extent 
maps at 30-m spatial resolution (2000—2022) (Version v1) 
[Data set]. Zenodo
[doi:https://doi.org/10.5281/zenodo.13890401](https://doi.org/10.5281/zenodo.13890401)

- DOI：10.5281/zenodo.13890401

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
