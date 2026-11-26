---
title: "Copernicus Global Land Cover Layers: CGLS-LC100 Collection 2 [deprecated]"
date: 2026-11-03 12:00:00
---

# Copernicus Global Land Cover Layers: CGLS-LC100 Collection 2 [deprecated]

Original name: Copernicus Global Land Cover Layers: CGLS-LC100 Collection 2 [deprecated]

## What this dataset is

The Copernicus Global Land Service (CGLS) is the land component of the Copernicus programme, providing a series of bio-geophysical products on the state and evolution of the land surface at global scale.

Its Dynamic Land Cover map at 100 m resolution (CGLS-LC100) gives a primary discrete classification, and — alongside it — continuous field layers for all basic land cover classes, i.e. proportional estimates of vegetation/ground cover for each type. This continuous scheme can depict heterogeneous land cover better than a plain classification and can be tailored to applications such as forest monitoring, crop monitoring, biodiversity and conservation, environmental and security monitoring in Africa, and climate modelling.

This Land Cover map (Collection 2) is provided for the 2015 reference year over the entire globe, derived from the PROBA-V 100 m time series, a database of high-quality land cover training sites and several ancillary datasets, reaching an accuracy of 80% at Level 1. Note: Collection 2 is marked deprecated; Collection 3 is the successor.

## Coverage and time range

- Coverage: Global
- Time range: 2015-01-01 至 2015-01-01

## Resolution and specifications

- Spatial resolution: about 100 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| discrete_classification | Land cover classification | 100 |  |
| discrete_classification-proba | Quality indicator (classification probability) of the discrete classification | 100 |  |
| forest_type | Forest type for all pixels with tree percentage vegetation cover bigger than 1 % | 100 |  |
| bare-coverfraction | Percent vegetation cover for bare-sparse-vegetation land cover class | 100 |  |
| crops-coverfraction | Percent vegetation cover for cropland land cover class | 100 |  |
| grass-coverfraction | Percent vegetation cover for herbaceous vegetation land cover class | 100 |  |
| moss-coverfraction | Percent vegetation cover for moss and lichen land cover class | 100 |  |
| shrub-coverfraction | Percent vegetation cover for shrubland land cover class | 100 |  |
| tree-coverfraction | Percent vegetation cover for forest land cover class | 100 |  |
| snow-coverfraction | Percent ground cover for snow and ice land cover class | 100 |  |
| urban-coverfraction | Percent ground cover for built-up land cover class | 100 |  |
| water-permanent-coverfraction | Percent ground cover for permanent water land cover class | 100 |  |
| water-seasonal-coverfraction | Percent ground cover for seasonal water land cover class | 100 |  |
| data-density-indicator | Data density indicator for algorithm input data | 100 |  |
| bare-coverfraction-stddev | Quality indicator (std. dev.) of the bare-sparse-vegetation regression | 100 |  |
| crops-coverfraction-stddev | Quality indicator (std. dev.) of the cropland regression | 100 |  |
| grass-coverfraction-stddev | Quality indicator (std. dev.) of the herbaceous vegetation regression | 100 |  |
| moss-coverfraction-stddev | Quality indicator (std. dev.) of the moss and lichen regression | 100 |  |
| shrub-coverfraction-stddev | Quality indicator (std. dev.) of the shrubland regression | 100 |  |
| tree-coverfraction-stddev | Quality indicator (std. dev.) of the forest regression | 100 |  |

## What you can use it for

- Global land-cover mapping with both classes and per-class cover fractions (2015)
- Forest and crop monitoring, biodiversity and conservation analysis
- Reproducing studies built on Collection 2

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/Landcover/100m/Proba-V/Global');
```

- Earth Engine ID: `COPERNICUS/Landcover/100m/Proba-V/Global`
- Providers: Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V_Global

## License and citation

- License: proprietary
- Keywords: copernicus, eea, esa, eu, landcover, landuse-landcover, proba, probav, vito
- 数据引用：Buchhorn, M. ; Smets, B. ; Bertels, L. ; Lesiv, M. ; Tsendbazar, N. - E. ; Herold, M. ;
Fritz, S. Copernicus Global Land Service: Land Cover 100m: epoch 2015: Globe. Dataset of the
global component of the Copernicus Land Monitoring Service 2019.
[doi:10.5281/zenodo.3243509](https://doi.org/10.5281/zenodo.3243509)

- DOI：10.5281/zenodo.3243509

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3](/en/pages/ab21afa1/)
- [Global Oil Palm Extent and Planting Year (1990–2021) v1.2](/en/pages/36b9933f/)
- [Canada AAFC Annual Crop Inventory](/en/pages/ad6873e3/)
- [Copernicus CORINE Land Cover V20](/en/pages/a9db0306/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
