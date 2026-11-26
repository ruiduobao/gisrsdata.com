---
title: "US Physiography"
date: 2026-11-03 12:00:00
---

# US Physiography

Original name: US Physiography

## What this dataset is

The Physiography dataset represents the spatial intersection of landforms (available in EE as ERGo/1_0/US/landforms) and lithology (available in EE as ERGo/1_0/US/lithology) data layers. It provides 247 unique combinations out of a possible 270. The values for each type are formed by concatenating the landform and lithology types (e.g., 1101 is "Peak/ridge" landform on "carbonate" lithology). This data layer is sometimes referred to as characterizing "land facets".

The landforms layer is based on the USGS's 10m NED DEM (available in EE as USGS/NED). The lithology layer is not based on any DEM.

This dataset is provided just for the US, because of the availability of the lithology data layer, though these data are likely available for other countries.

## Coverage and time range

- Coverage: United States
- Time range: 2006-01-24 至 2011-05-13

## Resolution and specifications

- Spatial resolution: about 90 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| constant | Landforms and lithology intersection | 90 |  |

## What you can use it for

- Landform context for climate adaptation planning
- Terrain factors for species distribution and habitat modelling
- Surrogate variables for evapotranspiration and local microclimate

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('CSP/ERGo/1_0/US/physiography');
```

- Earth Engine ID: `CSP/ERGo/1_0/US/physiography`
- Providers: Conservation Science Partners, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/CSP_ERGo_1_0_US_physiography

## License and citation

- License: CC-BY-NC-SA-4.0
- Keywords: aspect, csp, elevation, elevation-topography, ergo, geophysical, landforms, slope, topography, us
- 数据引用：Theobald, D. M., Harrison-Atlas, D., Monahan, W. B., & Albano, C. M.
(2015). Ecologically-relevant maps of landforms and physiographic diversity
for climate adaptation planning. PloS one, 10(12),
[e0143619](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0143619)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Global ALOS CHILI (Continuous Heat-Insolation Load Index)](/pages/91d663d7/)
- [Global ALOS Landforms](/pages/960bfb36/)
- [Global ALOS Topographic Diversity](/pages/14e817f0/)
- [Global ALOS mTPI (Multi-Scale Topographic Position Index)](/pages/e565b408/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
