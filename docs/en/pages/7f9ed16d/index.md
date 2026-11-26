---
title: "Forest Proximate People (FPP) 1.0"
date: 2026-11-03 12:00:00
---

# Forest Proximate People (FPP) 1.0

Original name: Forest proximate people (FPP) 1.0

## What this dataset is

The "Forest Proximate People" (FPP) dataset is one of the data layers
contributing to the development of indicator #13, "number of
forest-dependent people in extreme poverty," of the Collaborative
Partnership on Forests (CPF) Global Core Set of forest-related
indicators (GCS). The FPP dataset provides an estimate of the number of
people living in or within 1 kilometer of forests
(forest-proximate people) for the year 2019 with a pixel size of 100 meters
at a global level.
[Find out more about the dataset.](
  https://data.apps.fao.org/catalog/dcat/forest-proximate-people)

## Coverage and time range

- Coverage: Global
- Time range: 2019-01-01 至 2019-01-01

## Resolution and specifications

- Spatial resolution: about 0.0009 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| FPP_1km | Number of people living in or within 1 kilometer of forests. | 0.0009 |  |
| FPP_5km | Number of people living in or within 5 kilometer of forests. | 0.0009 |  |

## What you can use it for

- Estimating forest-dependent population and poverty indicators
- Livelihood analysis of forest-adjacent communities
- Forest conservation and development planning

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('FAO/SOFO/1/FPP');
```

- Earth Engine ID: `FAO/SOFO/1/FPP`
- Providers: FAO Forestry Division (FPP 1km), FAO Forestry Division (FPP 5km), Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/FAO_SOFO_1_FPP

## License and citation

- License: CC-BY-4.0
- Keywords: agriculture, fao, forest, global, plant-productivity, population, rural-area
- 数据引用：FAO 2022. The State of the World's Forests (SOFO) - Forest pathways for
green recovery and building inclusive, resilient and sustainable
economies. FAO, Rome.
[https://www.fao.org/documents/card/en/c/cb9360en](
  https://www.fao.org/documents/card/en/c/cb9360en)

- DOI：10.1016/j.oneear.2020.08.016

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Tree proximate people (TPP) 1.0](/pages/4e1ad679/)
- [LandScan High Definition Data for Ukraine, January 2022](/en/pages/c7a57ce4/)
- [GPWv4.11: Population Density](/en/pages/f230ed9d/)
- [GPWv4.11: Population Count](/en/pages/9cd921b2/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
