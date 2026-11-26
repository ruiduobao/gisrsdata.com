---
title: "OpenLandMap Potential FAPAR Monthly"
date: 2026-11-03 12:00:00
---

# OpenLandMap Potential FAPAR Monthly

Original name: OpenLandMap Potential FAPAR Monthly

## What this dataset is

Potential Natural Vegetation FAPAR predicted monthly median (based on PROB-V FAPAR 2014-2017).
[Description](https://gitlab.com/openlandmap/global-layers/#potential-natural-vegetation).

To access and visualize maps outside of Earth Engine, use [this page](https://opengeohub.org/about-openlandmap).

If you discover a bug, artifact or inconsistency in the LandGIS maps
or if you have a question please use the following channels:

## Coverage and time range

- Coverage: Spatial: global; temporal: 2001 to 2002 (prediction reference period); resolution: 1,000 m.
- Time range: 2001-01-01 至 2002-01-01

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| jan | Jan Potential FAPAR monthly | 1000 |  |
| feb | Feb Potential FAPAR monthly | 1000 |  |
| mar | Mar Potential FAPAR monthly | 1000 |  |
| apr | Apr Potential FAPAR monthly | 1000 |  |
| may | May Potential FAPAR monthly | 1000 |  |
| jun | Jun Potential FAPAR monthly | 1000 |  |
| jul | Jul Potential FAPAR monthly | 1000 |  |
| aug | Aug Potential FAPAR monthly | 1000 |  |
| sep | Sep Potential FAPAR monthly | 1000 |  |
| oct | Oct Potential FAPAR monthly | 1000 |  |
| nov | Nov Potential FAPAR monthly | 1000 |  |
| dec | Dec Potential FAPAR monthly | 1000 |  |
| annual | Anuual Potential FAPAR monthly | 1000 |  |
| annualdiff | Annual Difference Potential FAPAR monthly | 1000 |  |

## What you can use it for

- Serve as base layers for global climate and land-system analysis.
- Provide environmental variables for ecological, hydrological and soil modelling.
- Compare and fuse with other global gridded products.

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('OpenLandMap/PNV/PNV_FAPAR_PROBA-V_D/v01');
```

- Earth Engine ID: `OpenLandMap/PNV/PNV_FAPAR_PROBA-V_D/v01`
- Providers: EnvirometriX Ltd, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_PNV_PNV_FAPAR_PROBA-V_D_v01
*  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
*  [General questions and comments](https://disqus.com/home/forums/landgis/)

## License and citation

- License: CC-BY-SA-4.0
- Keywords: envirometrix, fapar, monthly, opengeohub, openlandmap, plant-productivity, potential
- 数据引用：Hengl T, Walsh MG, Sanderman J, Wheeler I, Harrison SP, Prentice IC. (2018) Global Mapping of Potential Natural Vegetation: An Assessment of Machine Learning Algorithms for Estimating Land Potential. PeerJ Preprints.
[10.7287/peerj.preprints.26811v5](https://doi.org/10.7910/DVN/QQHCIK)

- DOI：10.7910/DVN/QQHCIK

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [OpenLandMap Potential Distribution of Biomes](/pages/edd16381/)
- [AG100: ASTER Global Emissivity Dataset 100-meter V003](/en/pages/3510f165/)
- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002](/en/pages/a7bebe55/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
