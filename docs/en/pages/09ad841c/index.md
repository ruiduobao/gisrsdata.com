---
title: "GlobCover: Global Land Cover Map"
date: 2026-11-03 12:00:00
---

# GlobCover: Global Land Cover Map

Original name: GlobCover: Global Land Cover Map

## What this dataset is

GlobCover 2009 is a global land cover map based on ENVISAT's Medium
Resolution Imaging Spectrometer (MERIS) Level 1B data acquired in full
resolution mode with a spatial resolution of approximately 300 meters.

## Coverage and time range

- Coverage: Global
- Time range: 2009-01-01 至 2010-01-01

## Resolution and specifications

- Spatial resolution: about 300 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| landcover | The land cover map is derived by an automatic and regionally-tuned classification of a time series of global MERIS FR mosaics for the year 2009. The global land cover map counts 22 land cover classes defined with the United Nations (UN) Land Cover Classification System (LCCS). | 300 |  |
| qa | Binary quality band indicating whether the reference dataset has been used instead of the output of the GlobCover classification scheme. | 300 |  |

## What you can use it for

- Global land cover baseline (2009)
- Reference map for land cover change comparison
- Input for global environmental modelling

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('ESA/GLOBCOVER_L4_200901_200912_V2_3');
```

- Earth Engine ID: `ESA/GLOBCOVER_L4_200901_200912_V2_3`
- Providers: ESA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/ESA_GLOBCOVER_L4_200901_200912_V2_3

## License and citation

- License: proprietary
- Keywords: esa, globcover, landcover, landuse-landcover
- 数据引用：ESA 2010 and UCLouvain. [http://due.esrin.esa.int/page_globcover.php](http://due.esrin.esa.int/page_globcover.php)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSP gHM: Global Human Modification](/en/pages/1227f44f/)
- [World Settlement Footprint 2015](/en/pages/a545a891/)
- [Global Oil Palm Extent and Planting Year (1990–2021) v1.2](/en/pages/36b9933f/)
- [Canada AAFC Annual Crop Inventory](/en/pages/ad6873e3/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
