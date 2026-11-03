---
title: "LANDFIRE ESP HI (Environmental Site Potential) v1.2.0"
date: 2026-11-03 12:00:00
permalink: /pages/7bb2ed52/
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

# LANDFIRE ESP HI (Environmental Site Potential) v1.2.0

## 数据集简介

LANDFIRE (LF), Landscape Fire and Resource Management Planning Tools, is a
shared program between the wildland fire management programs of the U.S.
Department of Agriculture's Forest Service, U.S. Department of the Interior's
Geological Survey, and The Nature Conservancy.

LANDFIRE (LF) layers are created using predictive landscape models based on
extensive field-referenced data, satellite imagery and biophysical gradient
layers using classification and regression trees.

LANDFIRE's (LF) Environmental Site Potential (ESP) represents the vegetation that could be supported at a given site based on the biophysical environment.
Map units are based on NatureServe's Ecological Systems classification and represent the natural plant communities that may have been present during the reference period.
ESP map units represent the natural plant communities that would become established at late or climax stages of successional development in the absence of disturbance.
They reflect the current climate and physical environment, as well as the competitive potential of native plant species. The ESP concept is similar to that used in classifications of potential vegetation, including habitat types and plant associations.
In early versions of LF, ESP was used to inform the existing vegetation and fuel mapping processes.

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

- 数据集编号（Earth Engine ID）：`LANDFIRE/Vegetation/ESP/v1_2_0/HI`
- 数据类型：影像（Image）
- 提供方：U.S. Department of Agriculture's (USDA), U.S. Forest Service (USFS), U.S.
Department of the Interior's Geological Survey (USGS), and The Nature Conservancy.、Google Earth Engine
- 时间范围：2010-01-01 至 2010-12-31
- 空间分辨率：30 米
- 许可：proprietary
- 关键词：doi, fire, forest-biomass, landfire, nature-conservancy, usda, usgs, vegetation, wildfire

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ESP | Environmental Site Potential | 30 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('LANDFIRE/Vegetation/ESP/v1_2_0/HI');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDFIRE_Vegetation_ESP_v1_2_0_HI
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
Available:[https://www.landfire.gov/bps-models.php](https://www.landfire.gov/bps-models.php) [2018, June 27].
Additional guidance on citation of LANDFIRE products can be found
[here](https://landfire.gov/data/citation)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
