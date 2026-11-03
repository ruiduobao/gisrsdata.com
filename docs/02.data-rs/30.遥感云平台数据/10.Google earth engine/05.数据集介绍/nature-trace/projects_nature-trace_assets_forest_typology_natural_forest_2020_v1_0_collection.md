---
title: "Natural Forests of the World 2020"
date: 2026-11-03 12:00:00
permalink: /pages/ed95a390/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "biodiversity"
  - "climate"
  - "conservation"
  - "deforestation"
  - "eudr"
  - "forest"
  - "forest-biomass"
---

# Natural Forests of the World 2020

## 数据集简介

Natural Forests of the World 2020, provides a global map of
natural forest probability for the year 2020 at a 10-meter resolution. It
was developed to support initiatives like the European Union's
Deforestation Regulation (EUDR) and other efforts for forest conservation
and monitoring.
The map represents the likelihood of an area being a natural forest, which
includes primary, naturally regenerating secondary, and managed natural
forests. It distinguishes these from planted forests, tree crops, and
other land cover types. The dataset was created using a multi-modal
temporal-spatial vision transformer model that analyzed seasonal
multi-temporal Sentinel-2 satellite imagery and topographical data
(elevation, slope, aspect based on TanDEM-X's Copernicus GLO-30 DEM).
The data is provided as a probabilistic map, allowing users to apply a
probability threshold to create a binary natural forest map tailored to
their specific needs.

Limitations: While this map provides a valuable global baseline, users
should be aware of several limitations in our map (assessed at the OA
optimal probability threshold of 0.52):

* The model can have difficulty distinguishing complex agroforestry systems
(e.g., with shaded tree crops), and smallholder agricultural mosaics can be
difficult to distinguish from natural forests.
* Differentiating planted forests from naturally regenerating ones can be
challenging, especially in boreal and some temperate zones, where natural
forests have lower species diversity and are harvested with longer rotation
times compared to the tropics.
* Sparse natural forests, such as savanna, are often at the threshold of
natural forest definition for the tree canopy height and coverage ratios.
Forest type assignment immediately after a disturbance event (e.g., fire,
logging) is inherently ambiguous. It may not be clear from satellite imagery
whether the forest will regenerate naturally or if the land will be
converted to another use (e.g., plantation, agriculture).
* Other areas of potential confusion could include large parks within urban
areas, or planted tree belts that meet forest definition criteria but are
not natural.
* The accuracy of our natural forest map is intrinsically linked to the
quality and consistency of the various input datasets used for training
label generation. These datasets were created using different methodologies,
spatial resolutions, temporal ranges, and definitions. Some label layers
were the outputs of other models, and are therefore limited by the quality
of those models. While our approach aimed to harmonize sources and mitigate
the impact of individual dataset errors, inconsistencies and inaccuracies in
the underlying data could still influence the final map.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/nature-trace/assets/forest_typology/natural_forest_2020_v1_0_collection`
- 数据类型：影像集合（ImageCollection）
- 提供方：Google、Google Earth Engine
- 时间范围：2020-01-01 至 2020-12-31
- 空间分辨率：10 米
- 许可：CC-BY-4.0
- 关键词：biodiversity, climate, conservation, deforestation, eudr, forest, forest-biomass

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B0 | Natural forest probabilities (scaled to [0-250]).  | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/nature-trace/assets/forest_typology/natural_forest_2020_v1_0_collection');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_nature-trace_assets_forest_typology_natural_forest_2020_v1_0_collection
- 数据引用：Maxim Neumann , Anton Raichuk, Radost Stanimirova, Michelle Sims , Sarah Carter,
Elizabeth Goldman, Melanie Rey, Yuchang Jiang, Keith Anderson, Petra Poklukar,
Katelyn Tarrio, Myroslava Lesiv, Steffen Fritz, Nicholas Clinton,
Charlotte Stanton, Dan Morris, Drew Purves, "Natural forests of the world:
A 2020 baseline for deforestation and degradation monitoring" (in review).
[doi:10.31223/X5ZX6P](https://doi.org/10.31223/X5ZX6P),


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
