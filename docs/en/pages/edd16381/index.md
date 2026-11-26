---
title: "OpenLandMap Potential Distribution of Biomes"
date: 2026-11-03 12:00:00
---

# OpenLandMap Potential Distribution of Biomes

Original name: OpenLandMap Potential Distribution of Biomes

## What this dataset is

Potential Natural Vegetation biomes global predictions of classes
(based on predictions using the BIOMES 6000 dataset's 'current biomes' category.)

Potential Natural Vegetation (PNV) is the vegetation cover in equilibrium with climate
that would exist at a given location non-impacted by human activities. PNV is useful for raising
public awareness about land degradation and for estimating land potential.
This dataset contains results of predictions of
- (1) global distribution of biomes based on the BIOME 6000 data set (8057 modern pollen-based site reconstructions),
- (2) distribution of forest tree species in Europe based on detailed occurrence records (1,546,435 ground observations), and
- (3) global monthly Fraction of Absorbed Photosynthetically Active Radiation (FAPAR) values (30,301 randomly-sampled points).

To report an issue or artifact in data, please use [this link](https://github.com/envirometrix/PNVmaps/issues).

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
| biome_type | Potential distribution of biomes | 1000 |  |

## What you can use it for

- Serve as base layers for global climate and land-system analysis.
- Provide environmental variables for ecological, hydrological and soil modelling.
- Compare and fuse with other global gridded products.

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('OpenLandMap/PNV/PNV_BIOME-TYPE_BIOME00K_C/v01');
```

- Earth Engine ID: `OpenLandMap/PNV/PNV_BIOME-TYPE_BIOME00K_C/v01`
- Providers: EnvirometriX Ltd, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_PNV_PNV_BIOME-TYPE_BIOME00K_C_v01
*  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
*  [General questions and comments](https://disqus.com/home/forums/landgis/)

## License and citation

- License: CC-BY-SA-4.0
- Keywords: biome, ecosystems, envirometrix, opengeohub, openlandmap, potential
- 数据引用：Hengl T, Walsh MG, Sanderman J, Wheeler I, Harrison SP, Prentice IC. (2018) Global Mapping of Potential Natural Vegetation: An Assessment of Machine Learning Algorithms for Estimating Land Potential. PeerJ Preprints.
[10.7287/peerj.preprints.26811v1](https://doi.org/10.7910/DVN/QQHCIK)

- DOI：10.7910/DVN/QQHCIK

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [OpenLandMap Potential FAPAR Monthly](/pages/284f7bab/)
- [AG100: ASTER Global Emissivity Dataset 100-meter V003](/en/pages/3510f165/)
- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002](/en/pages/a7bebe55/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
