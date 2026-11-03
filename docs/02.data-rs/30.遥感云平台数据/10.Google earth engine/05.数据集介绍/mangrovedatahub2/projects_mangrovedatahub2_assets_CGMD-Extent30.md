---
title: "Global Annual Mangrove Extent (1984-2023)"
date: 2026-11-03 12:00:00
permalink: /pages/d9b25120/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "annual"
  - "coastal"
  - "forest-biomass"
  - "global"
  - "landsat-derived"
  - "landuse-landcover"
  - "mangrove"
  - "table"
  - "wetland"
---

# Global Annual Mangrove Extent (1984-2023)

## 数据集简介

The CGMD-Extent30 (Continuous Global Mangrove Dynamics-Annual Mangrove Extent at 30-m resolution) dataset provides global annual mangrove extent from 1984 to 2023. 
The dataset is distributed as a single Earth Engine `FeatureCollection`, with each feature representing a mapped mangrove polygon for a specific year.

The dataset was generated from long-term Landsat time-series observations within the Google Earth Engine platform. 
We first mapped mangrove extent for three baseline periods, representing the 1980s, 2010, and 2023, using cloud-free Landsat composites, 
prior global mangrove maps, automatically derived training samples, localized machine-learning classifiers, and post-classification refinements. 
True mangrove loss and gain between baseline periods were then identified using a change-detection procedure, 
and annual mangrove extent maps for intervening years were reconstructed using a temporal consistency algorithm.

The dataset was validated using independent reference samples. For static mangrove extent, 
global user's and producer's accuracies were approximately 90%. For mangrove change, including loss and gain, 
user's and producer's accuracies were approximately 80%.

This dataset is designed to support large-scale analyses of long-term mangrove area dynamics, 
including loss, gain, persistence, coastal ecosystem monitoring, and blue carbon assessment. 

Because the dataset is provided at annual temporal resolution, the timing of detected changes should be interpreted at the yearly scale. 
Changes that occurred late in a calendar year may be detected in the following annual map, resulting in a potential temporal offset of up to one year. 
In addition, transient mangrove losses lasting less than three years were treated as degradation rather than persistent extent loss; 
therefore, these areas remain classified as mangroves in the annual extent product.
For quick visualization and exploratory analysis, users are encouraged to access 
[the CGMD Earth Engine App](https://zhenzhang.users.earthengine.app/view/globalmangrovedynamic).

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/mangrovedatahub2/assets/CGMD-Extent30`
- 数据类型：矢量/表格（FeatureCollection）
- 提供方：The Mangrove Lab、Dr. Zhen Zhang、Google Earth Engine
- 时间范围：1984-01-01 至 2023-12-31
- 许可：CC-BY-4.0
- 关键词：annual, coastal, forest-biomass, global, landsat-derived, landuse-landcover, mangrove, table, wetland

## 字段信息

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| year | INT | Data year, ranging from 1984 to 2023. |
| gridcode | INT | Source flag for the mapped mangrove extent. A value of 1 indicates extent derived from clear Landsat observations; a value of 2 indicates gap-filled extent using the latest available clear Landsat observation. |
| area_km2 | DOUBLE | Polygon area in square kilometers, calculated under the Behrmann equal-area projection. |

## 在 Earth Engine 中调用

```js
var dataset = ee.FeatureCollection('projects/mangrovedatahub2/assets/CGMD-Extent30');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_mangrovedatahub2_assets_CGMD-Extent30
- 数据引用：Zhang, Z., Murray, N., Song, X., ... & Friess, D. (2026). Unexpected expansion and regrowth in Earth's mangrove forests over the past four decades. Science. https://doi.org/10.1126/science.aec9773


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
