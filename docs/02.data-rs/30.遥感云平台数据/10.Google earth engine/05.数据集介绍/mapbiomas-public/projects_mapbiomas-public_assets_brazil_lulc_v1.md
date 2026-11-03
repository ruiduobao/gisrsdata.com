---
title: "MapBiomas Land Use and Land Cover - Brazil V1.0"
date: 2026-11-03 12:00:00
permalink: /pages/38f0ccc8/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "landsat-derived"
  - "landuse-landcover"
---

# MapBiomas Land Use and Land Cover - Brazil V1.0

## 数据集简介

MapBiomas Land Use and Land Cover (LULC) dataset for Brazil is produced annually by the MapBiomas Project using Landsat satellite imagery and machine learning classification techniques.
The dataset provides consistent, thematically detailed maps at 30-meter resolution, covering multiple decades and updated each year.

Each image in the collection contains annual land cover classifications with pixel values representing categorical land cover classes, such as forest, agriculture, pasture, water bodies, and urban areas.
The classification legend is standardized and maintained across all years, enabling multi-temporal analyses of land use change, deforestation, reforestation, and other landscape dynamics.

The classification is based on Landsat 5 (TM), Landsat 7 (ETM+), Landsat 8 and 9 (OLI/TIRS) surface reflectance data, preprocessed and mosaicked to generate cloud-free composites for each year.
The classification process includes automated decision trees trained with reference samples, along with manual validation by regional experts.

Each image contains one band named "classification", representing the land cover classification for that specific year, version and collection id.

For more information, classification legend, methodology, and accuracy assessments, visit the [MapBiomas website](https://mapbiomas.org/en).

It is recommended to consult the classification legend to interpret the class values.
Note that MapBiomas provides discrete classification maps, not probabilities.
These maps are most appropriate for map transitions, time series analysis, and land policy monitoring applications.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/mapbiomas-public/assets/brazil/lulc/v1`
- 数据类型：影像集合（ImageCollection）
- 提供方：MapBiomas、Google Earth Engine
- 时间范围：1985-01-01 至 2024-12-31
- 空间分辨率：30 米
- 许可：CC-BY-4.0
- 关键词：landsat-derived, landuse-landcover

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| classification | Land use and land cover classification, with integer values corresponding to MapBiomas legend classes. | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/mapbiomas-public/assets/brazil/lulc/v1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_mapbiomas-public_assets_brazil_lulc_v1
- 数据引用：Souza et al. (2020) – Reconstructing Three Decades of Land Use and Land Cover Changes in Brazilian Biomes with Landsat Archive and Earth Engine – Remote Sensing, 
Volume 12, Issue 17, 10.3390/rs12172735.

[doi:10.3390/rs12172735](https://doi.org/10.3390/rs12172735)


- DOI：10.3390/rs12172735

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
