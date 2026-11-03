---
title: "ESA WorldCereal 10 m v100"
date: 2026-11-03 12:00:00
permalink: /pages/76b102d2/
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

# ESA WorldCereal 10 m v100

## 数据集简介

The European Space Agency (ESA) WorldCereal 10 m 2021 product suite consists
of global-scale annual and seasonal crop maps and their related confidence.
They were generated as part of the
[ESA-WorldCereal project](https://esa-worldcereal.org/). More information on
the content of these products and the methodology used to generate them is
described in [1].

This collection contains up to 106 agro-ecological zone (AEZ) images for
each product which were all processed with respect to their own regional
seasonality and should be considered as independent products. These seasons
are described in the list below and were developed in [2] as part of the
project. Note that cereals as described by WorldCereal include wheat,
barley, and rye, which belong to the *Triticeae* tribe.

WorldCereal seasons description:

- tc-annual: a one-year cycle being defined in an AEZ by the end of the last
considered growing season
- tc-wintercereals: the main cereals season defined in an AEZ
- tc-springcereals: optional springcereals season, only defined in certain
AEZ
- tc-maize-main: the main maize season defined in an AEZ
- tc-maize-second: optional second maize season, only defined in certain AEZ

The available products in this collection are:

- temporarycrops
- maize
- wintercereals
- springcereals
- irrigation

Each product (image) has a binary classification (0 or 100) and a confidence
(0-100) band. Note that AEZs for which no irrigation product is available
were not processed because of the unavailability of thermal Landsat data.

The collection should be filtered using one or more of the following image
properties:

- aez_id, holding the ID of the AEZ to which the image belongs
- product, describing the WorldCereal product name of the image
- season, describing the season for which the image is valid.

References:

- [1] [WorldCereal methodology and products paper](https://doi.org/10.5194/essd-2023-184)
- [2] [WorldCereal global seasonality paper](https://doi.org/10.1080/15481603.2022.2079273)

WorldCereal datasets:

-  Version 100 for year 2021
   -  [ESA/WorldCereal/AEZ/v100](ESA_WorldCereal_AEZ_v100)
   -  [ESA/WorldCereal/2021/MODELS/v100](ESA_WorldCereal_2021_MODELS_v100)
   -  [ESA/WorldCereal/2021/MARKERS/v100](ESA_WorldCereal_2021_MARKERS_v100)

## 基本信息

- 数据集编号（Earth Engine ID）：`ESA/WorldCereal/2021/MODELS/v100`
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
| confidence | Confidence, 0 to 100 | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('ESA/WorldCereal/2021/MODELS/v100');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/ESA_WorldCereal_2021_MODELS_v100
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
