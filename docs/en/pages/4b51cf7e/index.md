---
title: "US Lithology"
date: 2026-11-03 12:00:00
---

# US Lithology

Original name: US Lithology

## What this dataset is

The Lithology dataset provides classes of the general types of parent material of soil on the surface. It is not derived from any DEM.

The Conservation Science Partners (CSP) Ecologically Relevant Geomorphology (ERGo) Datasets, Landforms and Physiography contain detailed, multi-scale data on landforms and physiographic (aka land facet) patterns. Although there are many potential uses of these data, the original purpose for these data was to develop an ecologically relevant classification and map of landforms and physiographic classes that are suitable for climate adaptation planning. Because there is large uncertainty associated with future climate conditions and even more uncertainty around ecological responses, providing information about what is unlikely to change offers a strong foundation for managers to build robust climate adaptation plans. The quantification of these features of the landscape is sensitive to the resolution, so we provide the highest resolution possible given the extent and characteristics of a given index.

## Coverage and time range

- Coverage: United States
- Time range: 2006-01-24 至 2011-05-13

## Resolution and specifications

- Spatial resolution: about 90 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| b1 | Lithology classes | 90 |  |

## What you can use it for

- Landform context for climate adaptation planning
- Terrain factors for species distribution and habitat modelling
- Surrogate variables for evapotranspiration and local microclimate

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('CSP/ERGo/1_0/US/lithology');
```

- Earth Engine ID: `CSP/ERGo/1_0/US/lithology`
- Providers: Conservation Science Partners, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/CSP_ERGo_1_0_US_lithology

## License and citation

- License: CC-BY-NC-SA-4.0
- Keywords: aspect, csp, elevation, elevation-topography, ergo, geophysical, landforms, slope, topography, us
- 数据引用：Theobald, D. M., Harrison-Atlas, D., Monahan, W. B., & Albano, C. M.
(2015). Ecologically-relevant maps of landforms and physiographic diversity
for climate adaptation planning. PloS one, 10(12),
[e0143619](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0143619)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Global ALOS Topographic Diversity](/en/pages/14e817f0/)
- [Global ALOS Landforms](/en/pages/960bfb36/)
- [Global ALOS mTPI (Multi-Scale Topographic Position Index)](/en/pages/e565b408/)
- [Global ALOS CHILI (Continuous Heat-Insolation Load Index)](/en/pages/91d663d7/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
