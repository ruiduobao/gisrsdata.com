---
title: "ESA WorldCereal Active Cropland 10 m v100"
date: 2026-11-03 12:00:00
permalink: /pages/dd6f101f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "copernicus"
  - "crop"
  - "esa"
  - "global"
  - "landcover"
  - "landsat"
  - "sentinel1-derived"
  - "sentinel2-derived"
---

# ESA WorldCereal Active Cropland 10 m v100

## 数据集简介

The European Space Agency (ESA) WorldCereal Active Cropland 10 m 2021
product suite contains global-scale seasonal active cropland markers. They
were generated as part of the
[ESA-WorldCereal project](https://esa-worldcereal.org/). The active cropland
products indicate whether or not a pixel identified as temporary crops has
been actively cultivated during a specific growing season. In order for a
pixel to be labeled as “active” during a particular growing season, a full
crop growth cycle (sowing, growing, senescence and harvesting) needs to take
place within the designated time period. Note that this active marker is not
crop-type specific. Any crop grown (slightly) outside the predefined growing
seasons will not be flagged as active cropland in any of the seasons covered
by the WorldCereal system. The active marker results from running a growing
season detection algorithm [1] on the Sentinel-2 derived enhanced vegetation
index (EVI). More information on the methodology used to generate these
products is described in [2].

This collection contains up to 106 agro-ecological zone (AEZ) images per
crop season, where each AEZ has its own seasonality. The seasons for which
the active cropland marker is available are described in the list below and
were developed in [3] as part of the project.

WorldCereal seasons description:

- tc-wintercereals: the main cereals season defined in an AEZ
- tc-springcereals: optional springcereals season, only defined in certain
AEZ
- tc-maize-main: the main maize season defined in an AEZ
- tc-maize-second: optional second maize season, only defined in certain AEZ

Each product (image) has a binary classification band where value 0
corresponds to inactive cropland and value 100 corresponds to active
cropland.

The collection should be filtered using one or more of the following image
properties:

- aez_id, holding the ID of the AEZ to which the image belongs
- season, describing the season for which the image is valid.

References:

- [1] Bolton, D. K., Gray, J. M., Melaas, E. K., Moon, M., Eklundh, L., and
Friedl, M. A.: Continental-scale land surface phenology from harmonized
Landsat 8 and Sentinel-2 imagery, Remote Sens. Environ., 240, 111685,
https://doi.org/10.1016/j.rse.2020.111685, 2020.
- [2] [WorldCereal methodology and products paper](https://doi.org/10.5194/essd-2023-184)
- [3] [WorldCereal global seasonality paper](https://doi.org/10.1080/15481603.2022.2079273)

WorldCereal datasets:

-  Version 100 for year 2021
   -  [ESA/WorldCereal/AEZ/v100](ESA_WorldCereal_AEZ_v100)
   -  [ESA/WorldCereal/2021/MODELS/v100](ESA_WorldCereal_2021_MODELS_v100)
   -  [ESA/WorldCereal/2021/MARKERS/v100](ESA_WorldCereal_2021_MARKERS_v100)

## 基本信息

- 数据集编号（Earth Engine ID）：`ESA/WorldCereal/2021/MARKERS/v100`
- 数据类型：影像集合（ImageCollection）
- 提供方：ESA WorldCereal Consortium、Google Earth Engine
- 时间范围：2020-01-01 至 2021-12-31
- 空间分辨率：10 米
- 许可：CC-BY-4.0
- 关键词：agriculture, copernicus, crop, esa, global, landcover, landsat, sentinel1-derived, sentinel2-derived

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| classification | Classification: 0 or 100 | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('ESA/WorldCereal/2021/MARKERS/v100');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ESA_WorldCereal_2021_MARKERS_v100
- 数据引用：Van Tricht, K., Degerickx, J., Gilliams, S., Zanaga, D., Battude, M., Grosu,
A., Brombacher, J., Lesiv, M., Bayas, J. C. L., Karanam, S., Fritz, S.,
Becker-Reshef, I., Franch, B., Mollà-Bononad, B., Boogaard, H., Pratihast,
A. K., and Szantoi, Z.: WorldCereal: a dynamic open-source system for
global-scale, seasonal, and reproducible crop and irrigation mapping, Earth
Syst. Sci. Data Discuss. [preprint],
[doi:10.5194/essd-2023-184](https://doi.org/10.5194/essd-2023-184), in
review, 2023.,

- DOI：10.5194/essd-2023-184

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
