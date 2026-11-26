---
title: "Tree Proximate People (TPP) 1.0"
date: 2026-11-03 12:00:00
---

# Tree Proximate People (TPP) 1.0

Original name: Tree proximate people (TPP) 1.0

## What this dataset is

The "Tree Proximate People" (TPP) is one of the datasets contributing to the
development of indicator #13, number of forest-dependent people in extreme
poverty, of the Collaborative Partnership on Forests (CPF) Global Core Set
of forest-related indicators (GCS). The TPP dataset provides 4 different
estimates of tree proximate people (trees outside forests), all of them for
the year 2019 with a pixel size of 100 meters at a global level.
[Find out more about the dataset.](
  https://data.apps.fao.org/catalog/dcat/tree-proximate-people)

## Coverage and time range

- Coverage: Global
- Time range: 2019-01-01 至 2019-01-01

## Resolution and specifications

- Spatial resolution: about 0.0009 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| TPP_1km | Number of people living in or within 1 km from agricultural lands with at least 10% of tree cover | 0.0009 |  |
| TPP_1km_cropland | Number of people living in or within 1 km from croplands with at least 10% of tree cover | 0.0009 |  |
| TPP_500m | Number of people living in or within 500 m from agricultural lands with at least 10% of tree cover | 0.0009 |  |
| TPP_500m_cropland | Number of people living in or within 500 m from croplands with at least 10% of tree cover | 0.0009 |  |

## What you can use it for

- Estimating forest-dependent population and poverty indicators
- Livelihood analysis of forest-adjacent communities
- Forest conservation and development planning

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('FAO/SOFO/1/TPP');
```

- Earth Engine ID: `FAO/SOFO/1/TPP`
- Providers: FAO Forestry Division (TPP 500m cropland), FAO Forestry Division (TPP 1km cropland), FAO Forestry Division (TPP 500m agricultural), FAO Forestry Division (TPP 1km agricultural), Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/FAO_SOFO_1_TPP

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

- [Forest proximate people (FPP) 1.0](/pages/7f9ed16d/)
- [LandScan High Definition Data for Ukraine, January 2022](/en/pages/c7a57ce4/)
- [GPWv4.11: Population Density](/en/pages/f230ed9d/)
- [GPWv4.11: Population Count](/en/pages/9cd921b2/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
