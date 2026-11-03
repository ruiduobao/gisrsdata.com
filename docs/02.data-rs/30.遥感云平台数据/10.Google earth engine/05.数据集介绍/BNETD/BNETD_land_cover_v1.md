---
title: "Cote d'Ivoire BNETD 2020 Land Cover Map"
date: 2026-11-03 12:00:00
permalink: /pages/ede6637e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "classification"
  - "deforestation"
  - "forest"
  - "landcover"
  - "landuse-landcover"
---

# Cote d'Ivoire BNETD 2020 Land Cover Map

## 数据集简介

The Cote d'Ivoire BNETD 2020 Land Cover Map was produced by the Ivorian
Government through a national institution, the Center for Geographic
Information and Digital from the National Study Office Techniques and
Development (BNETD-CIGN), with technical and financial support from the
European Union. The methodology used to produce the map was transparent,
participatory and in line with international standards.

To develop this map, a mosaic of satellite images (Sentinel 2) from 2020 was
processed via Google Earth Engine and supplemented with data collected in the
field, to train a supervised classification algorithm (Random Forest).
Two field campaigns were conducted, from 10 November to 9 December 2022 and
from 26 January to 13 February 2023, throughout the country. These missions
involved 33 people from multiple partner organizations because the data
collection methods and definitions of certain land use classes
adopted by stakeholders may sometimes differ.

As part of the EUDR due diligence process, geolocation data for plots of
land producing EUDR-relevant products could be overlaid with 2020 forest
cover data in order to assess the risk that the plot is located in an area
that was forested before the 2020 cut-off date. To do this, forest cover
data aligned with the FAO definition of forests and the 2020 cut-off date
is required. The 2020 land cover map of Cote d'Ivoire meets these needs.
Indeed, the classes in the land cover map can be combined to create a
forest/non-forest map that is aligned with the FAO definition of forests.

A platform for accessing 2020 land cover data, metadata and the methodology
has been developed using ESRI solutions, from Africa GeoPortal, for data
analysis and visualization:

The address is: [https://bit.ly/carte-ci-2020](https://bit.ly/carte-ci-2020)

Documentation:

* [Detailed documentation](https://africageoportal.maps.arcgis.com/sharing/rest/content/items/26a717d4c13f4f3db2c6056f7e5c0bab/data)

* [Methodology in French](https://africageoportal.maps.arcgis.com/sharing/rest/content/items/76dc18767b89472eb89e8aa54e08a6c9/data)

## 基本信息

- 数据集编号（Earth Engine ID）：`BNETD/land_cover/v1`
- 数据类型：影像集合（ImageCollection）
- 提供方：BNETD-CIGN、Google Earth Engine
- 时间范围：2020-01-01 至 2021-01-01
- 空间分辨率：10 米
- 许可：CC-BY-4.0
- 关键词：classification, deforestation, forest, landcover, landuse-landcover

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| classification | Land Cover class  | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('BNETD/land_cover/v1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/BNETD_land_cover_v1
- 数据引用：BNETD Land Cover Map 2020.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
