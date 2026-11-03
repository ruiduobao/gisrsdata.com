---
title: "LANDFIRE EVT (Existing Vegetation Type) v1.4.0"
date: 2026-11-03 12:00:00
permalink: /pages/deaeeab0/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "doi"
  - "fire"
  - "forest-biomass"
  - "landfire"
  - "nature-conservancy"
  - "usda"
  - "usgs"
  - "vegetation"
  - "wildfire"
---

# LANDFIRE EVT (Existing Vegetation Type) v1.4.0

## 数据集简介

LANDFIRE (LF), Landscape Fire and Resource Management Planning Tools, is a
shared program between the wildland fire management programs of the U.S.
Department of Agriculture's Forest Service, U.S. Department of the Interior's
Geological Survey, and The Nature Conservancy.

LANDFIRE (LF) layers are created using predictive landscape models based on
extensive field-referenced data, satellite imagery and biophysical gradient
layers using classification and regression trees.

LANDFIRE's (LF) Existing Vegetation Type (EVT) represents the current distribution of the terrestrial ecological systems classification, developed by NatureServe for the western hemisphere, through 2016. A terrestrial ecological system is defined as a group of plant community types (associations) that tend to co-occur within landscapes with similar ecological processes, substrates, and/or environmental gradients.

*The LF Ecological Systems Descriptions for CONUS provides descriptions for each Ecological System including species, distribution and classification information.

EVT also includes ruderal or semi-natural vegetation types within the U.S. National Vegetation Classification.
The LF Ruderal NVC Groups Descriptions for CONUS provides descriptions for each ruderal NVC Group including species, distribution, and classification information.

EVT is mapped using decision tree models, field data, Landsat imagery, elevation, and biophysical gradient data.

* Decision tree models are developed separately for each of the three lifeforms-tree, shrub, and herbaceous and are then used to generate lifeform specific EVT layers.

* Disturbance products are included in LF Remap products to describe areas on the landscape that have experienced change within the previous 10-year period.

* The EVT product is reconciled through QA/QC measures to ensure life-form is synchronized with both Existing Vegetation Cover and Existing Vegetation Height.

The LANDIFRE Vegetation datasets include:

* Biophysical Settings (BPS)
* Environmental Site Potential (ESP)
* Existing Vegetation Canopy Cover (EVC)
* Existing Vegetation Height (EVH).
* Existing Vegetation Type (EVT)
These layers are created using predictive landscape models based on extensive
field-referenced data, satellite imagery and biophysical gradient layers using
classification and regression trees.

## 基本信息

- 数据集编号（Earth Engine ID）：`LANDFIRE/Vegetation/EVT/v1_4_0`
- 数据类型：影像集合（ImageCollection）
- 提供方：U.S. Department of Agriculture's (USDA), U.S. Forest Service (USFS), U.S.
Department of the Interior's Geological Survey (USGS), and The Nature Conservancy.、Google Earth Engine
- 时间范围：2014-09-01 至 2014-09-01
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：doi, fire, forest-biomass, landfire, nature-conservancy, usda, usgs, vegetation, wildfire

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| EVT | Existing Vegetation Type | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LANDFIRE/Vegetation/EVT/v1_4_0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDFIRE_Vegetation_EVT_v1_4_0
- 数据引用：The suggested way to cite LANDFIRE products is specific to each product,
so the model for citation is provided, with an example for a particular product.
Producer. Year released. Product xxxxx:

- Individual model name.
- BpS Models and Descriptions, Online. LANDFIRE. Washington, DC. U.S. Department of
  Agriculture, Forest Service
- U.S. Department of the Interior; U.S. Geological Survey; Arlington, VA
- The Nature Conservancy (Producers). Available- URL. Access date.

Example Citation: LANDFIRE Biophysical Settings. 2018. Biophysical setting 14420:
South Texas sand sheet grassland. In: LANDFIRE Biophysical Setting Model: Map zone 36,
[Online]. In: BpS Models and Descriptions. In: LANDFIRE. Washington, DC:
U.S. Department of Agriculture, Forest Service; U.S. Department of the Interior;
U.S. Geological Survey; Arlington, VA: The Nature Conservancy (Producers).
Available: [https://www.landfire.gov/bps-models.php](https://www.landfire.gov/bps-models.php) [2018, June 27].
Additional guidance on citation of LANDFIRE products can be found
[here](https://landfire.gov/data/citation)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
