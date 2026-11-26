---
title: "Copernicus CORINE Land Cover V18 [deprecated]"
date: 2026-11-03 12:00:00
---

# Copernicus CORINE Land Cover V18 [deprecated]

Original name: Copernicus CORINE Land Cover [deprecated]

## What this dataset is

CORINE Land Cover (CLC) is Europe's standard land-cover inventory. It was initiated in 1985 to standardize data collection on land in Europe and support environmental policy development. The project is coordinated by the European Environment Agency (EEA) within the EU Copernicus programme and implemented by national teams. Participation has grown to 33 EEA member countries and six cooperating countries (EEA39), covering a total area of over 5.8 million km².

The first CLC inventory had reference year 1990, the first update was created in 2000, and the update cycle later became 6 years. Satellite imagery provides the geometrical and thematic basis for mapping, with in-situ data as essential ancillary information. The basic technical parameters — 44 classes in the nomenclature, a 25-hectare minimum mapping unit, and a 100 m minimum mapping width — have not changed since the beginning, so the different inventories are comparable. Note: this is the older V18 release, marked deprecated.

## Coverage and time range

- Coverage: Europe (39 EEA member and cooperating countries, over 5.8 million km²)
- Time range: 1986-01-01 至 2012-12-31
- Cadence: Update cycle of 6 years

## Resolution and specifications

- Spatial resolution: about 100 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| landcover | Land cover | 100 |  |

## What you can use it for

- European land-cover and land-use change analysis since 1990
- Environmental policy reporting across EEA countries
- A consistent 44-class base map for Europe

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/CORINE/V18_5_1/100m');
```

- Earth Engine ID: `COPERNICUS/CORINE/V18_5_1/100m`
- Providers: EEA/Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_CORINE_V18_5_1_100m

## License and citation

- License: proprietary
- Keywords: clc, copernicus, corine, eea, esa, eu, landcover, landuse-landcover
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Copernicus CORINE Land Cover V20](/en/pages/a9db0306/)
- [Global Oil Palm Extent and Planting Year (1990–2021) v1.2](/en/pages/36b9933f/)
- [Canada AAFC Annual Crop Inventory](/en/pages/ad6873e3/)
- [Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3](/en/pages/ab21afa1/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
