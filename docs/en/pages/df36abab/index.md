---
title: "OpenLandMap Soil Bulk Density"
date: 2026-11-03 12:00:00
---

# OpenLandMap Soil Bulk Density

Original name: OpenLandMap Soil Bulk Density

## What this dataset is

Soil bulk density (fine earth) 10 x kg / m<sup>3</sup> at 6 standard
depths (0, 10, 30, 60, 100 and 200 cm) at 250 m resolution.

Processing steps are described in detail [here](https://gitlab.com/openlandmap/global-layers/LandGISmaps/tree/master/soil).
Antarctica is not included.

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
| b0 | Soil bulk density at 0 cm depth | 250 |  |
| b10 | Soil bulk density at 10 cm depth | 250 |  |
| b30 | Soil bulk density at 30 cm depth | 250 |  |
| b60 | Soil bulk density at 60 cm depth | 250 |  |
| b100 | Soil bulk density at 100 cm depth | 250 |  |
| b200 | Soil bulk density at 200 cm depth | 250 |  |

## What you can use it for

- Serve as base layers for global climate and land-system analysis.
- Provide environmental variables for ecological, hydrological and soil modelling.
- Compare and fuse with other global gridded products.

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('OpenLandMap/SOL/SOL_BULKDENS-FINEEARTH_USDA-4A1H_M/v02');
```

- Earth Engine ID: `OpenLandMap/SOL/SOL_BULKDENS-FINEEARTH_USDA-4A1H_M/v02`
- Providers: EnvirometriX Ltd, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_SOL_SOL_BULKDENS-FINEEARTH_USDA-4A1H_M_v02
*  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
*  [General questions and comments](https://disqus.com/home/forums/landgis/)

## License and citation

- License: CC-BY-SA-4.0
- Keywords: bulk, density, envirometrix, opengeohub, openlandmap, soil
- 数据引用：Tomislav Hengl. (2018). Soil bulk density (fine earth) 10 x kg / m-cubic at 6 standard depths (0, 10, 30, 60, 100 and 200 cm) at 250 m resolution (Version v02) [Data set]. Zenodo.
[10.5281/zenodo.1475970](https://doi.org/10.5281/zenodo.1475970)

- DOI：10.5281/zenodo.1475970

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [OpenLandMap Clay Content](/pages/f45c0586/)
- [OpenLandMap Predicted Hapludalfs Probability](/pages/ef97e31c/)
- [OpenLandMap Sand Content](/pages/9cc6623a/)
- [OpenLandMap Soil Organic Carbon Content](/pages/5e17d7ce/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
