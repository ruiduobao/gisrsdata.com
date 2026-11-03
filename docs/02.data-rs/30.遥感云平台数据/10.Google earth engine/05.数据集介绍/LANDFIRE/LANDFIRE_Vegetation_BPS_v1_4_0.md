---
title: "LANDFIRE BPS (Biophysical Settings) v1.4.0"
date: 2026-11-03 12:00:00
permalink: /pages/18949a9a/
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

# LANDFIRE BPS (Biophysical Settings) v1.4.0

## 数据集简介

LANDFIRE (LF), Landscape Fire and Resource Management Planning Tools, is a
shared program between the wildland fire management programs of the U.S.
Department of Agriculture's Forest Service, U.S. Department of the Interior's
Geological Survey, and The Nature Conservancy.

LANDFIRE (LF) layers are created using predictive landscape models based on
extensive field-referenced data, satellite imagery and biophysical gradient
layers using classification and regression trees.

LANDFIRE's (LF) Biophysical Settings (BPS) represents the vegetation that may have been dominant on the landscape prior to Euro-American settlement and is based on both the current biophysical environment and an approximation of the historical disturbance regime.
Map units are based on NatureServe's Ecological Systems classification and represent the natural plant communities that may have been present during the reference period. Each BPS map unit is matched with a model of vegetation succession, and both serve as key inputs to the LANDSUM landscape succession model.
The actual time period for this data set is a composite of both the historical context provided by the fire regime and vegetation dynamics models and the more recent field and geospatial inputs used to create it.
LF's current BPS is unchanged from LF National's BPS except for updates made to water, barren, and snow classes (additions or removal), so that non-vegetated cover types within the BPS product matches LF existing vegetation and fuel products.
With the final release of LF Remap for CONUS in mid to late 2020, the LF Remap BPS product will include the following as attributes: Mean Fire Return Interval (MFRI), Percent of Low-severity Fire (PLS), Percent of Mixed-severity Fire (PMS), Percent of Replacement-severity Fire (PRS), and Fire Regime Groups (FRG), so that the linkage of these characteristics to BPS is maintained.
LF uses BPS to depict reference conditions of vegetation across landscapes.

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

- 数据集编号（Earth Engine ID）：`LANDFIRE/Vegetation/BPS/v1_4_0`
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
| BPS | Biophysical Settings | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('LANDFIRE/Vegetation/BPS/v1_4_0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDFIRE_Vegetation_BPS_v1_4_0
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
