---
title: "GLCF: Landsat Tree Cover Continuous Fields [deprecated]"
date: 2026-11-03 12:00:00
---

# GLCF: Landsat Tree Cover Continuous Fields [deprecated]

Original name: GLCF: Landsat Tree Cover Continuous Fields [deprecated]

## What this dataset is

The Landsat Vegetation Continuous Fields (VCF) tree cover layers contain
estimates of the percentage of horizontal ground in each 30-m pixel covered
by woody vegetation greater than 5 meters in height. The data represent
three nominal epochs, 2000, 2005 and 2010, compiled from the NASA/USGS
Global Land Survey (GLS) collection of Landsat data. The product is derived
from all seven bands of Landsat-5 Thematic Mapper (TM) and/or Landsat-7
Enhanced Thematic Mapper Plus (ETM+), depending on the GLS image selection.

Tree cover, the proportional, vertically projected area of vegetation
(including leaves, stems, branches, etc.) of woody plants above a given
height, affects terrestrial energy and water exchanges, photosynthesis and
transpiration, net primary production, and carbon and nutrient fluxes. Tree
cover also affects habitat quality and movements of wildlife, residential
property value for humans, and other ecosystem services. The continuous
classification scheme of the VCF product enables better depiction of land
cover gradients than traditional discrete classification schemes.
Importantly for detection and monitoring of forest changes (e.g.,
deforestation and degradation), tree cover provides a measurable attribute
upon which to define forest cover and its changes. Changes in tree cover
over time can be used to monitor and retrieve site-specific histories of
forest change.

The dataset has been produced for three year epochs: 2000, 2005, 2010, with
an image in the collection for each available WRS2 path/row.

## Coverage and time range

- Coverage: Global land
- Time range: 2000-01-01 至 2010-12-31

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| tree_canopy_cover | The percentage of pixel area covered by trees. | 30 |  |
| uncertainty | RMSE for tree-canopy_cover | 30 |  |
| source_index | Identity of source image used for the particular pixel. This is an index into the per image metadata array 'sources'. | 30 |  |

## What you can use it for

- Global tree cover mapping
- Forest change and deforestation monitoring
- Input for carbon stock estimation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('GLCF/GLS_TCC');
```

- Earth Engine ID: `GLCF/GLS_TCC`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/GLCF_GLS_TCC

## License and citation

- License: proprietary
- Keywords: forest, forest-biomass, glcf, landsat-derived, nasa, umd
- 数据引用：Data citation: Tree Canopy Cover, {Year, ...}, Global Land Cover Facility.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [SPEIbase: Standardised Precipitation-Evapotranspiration Index, Version 2.11](/en/pages/2a1f609f/)
- [Landsat-derived Forest Age for Canada 2019](/en/pages/65b34141/)
- [SPEIbase: Standardised Precipitation-Evapotranspiration Index, Version 2.10 [deprecated]](/en/pages/9bb9126f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
