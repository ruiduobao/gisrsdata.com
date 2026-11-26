---
title: "OpenLandMap Predicted Hapludalfs Probability"
date: 2026-11-03 12:00:00
---

# OpenLandMap Predicted Hapludalfs Probability

Original name: OpenLandMap Predicted Hapludalfs Probability

## What this dataset is

Predicted USDA soil great groups at 250 m (probabilities).

Distribution of the USDA soil great groups based on machine learning predictions
from global compilation of soil profiles. To learn more about soil great groups
please refer to the [Illustrated Guide to Soil Taxonomy - NRCS - USDA](https://www.nrcs.usda.gov/wps/PA_NRCSConsumption/download/?cid=stelprdb1247203.pdf).

* Processing steps are described in detail [here](https://gitlab.com/openlandmap/global-layers/tree/master/soil)
* Antarctica is not included.

To access and visualize maps outside of Earth Engine, use [this page](https://opengeohub.org/about-openlandmap).

If you discover a bug, artifact or inconsistency in the LandGIS maps
or if you have a question please use the following channels:

## Coverage and time range

- Coverage: Spatial: global (excluding Antarctica); temporal: 1950 to 2018; resolution: 250 m.
- Time range: 1950-01-01 至 2018-01-01

## Resolution and specifications

- Spatial resolution: about 250 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| grtgroup | Predicted Hapludalfs probability | 250 |  |

## What you can use it for

- Serve as base layers for global climate and land-system analysis.
- Provide environmental variables for ecological, hydrological and soil modelling.
- Compare and fuse with other global gridded products.

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('OpenLandMap/SOL/SOL_GRTGROUP_USDA-SOILTAX-HAPLUDALFS_P/v01');
```

- Earth Engine ID: `OpenLandMap/SOL/SOL_GRTGROUP_USDA-SOILTAX-HAPLUDALFS_P/v01`
- Providers: EnvirometriX Ltd, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_SOL_SOL_GRTGROUP_USDA-SOILTAX-HAPLUDALFS_P_v01
*  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
*  [General questions and comments](https://disqus.com/home/forums/landgis/)

## License and citation

- License: CC-BY-SA-4.0
- Keywords: argillic, envirometrix, hapludalfs, opengeohub, openlandmap, soil
- 数据引用：Tomislav Hengl, & Travis Nauman. (2018). Predicted USDA soil great groups at 250 m (probabilities) (Version v01) [Data set]. Zenodo.
[10.5281/zenodo.1476844](https://doi.org/10.5281/zenodo.1476844)

- DOI：10.5281/zenodo.1476844

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [OpenLandMap Clay Content](/pages/f45c0586/)
- [OpenLandMap Sand Content](/pages/9cc6623a/)
- [OpenLandMap Soil Bulk Density](/pages/df36abab/)
- [OpenLandMap Soil Organic Carbon Content](/pages/5e17d7ce/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
