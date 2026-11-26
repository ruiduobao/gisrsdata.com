---
title: "GFPLAIN250m: Global 250m Floodplain Dataset"
date: 2026-11-03 12:00:00
---

# GFPLAIN250m: Global 250m Floodplain Dataset

Original name: GFPLAIN250m: Global 250m Floodplain Dataset

## What this dataset is

The GFPLAIN250m includes raster data of Earth's floodplains identified
using a geomorphic approach presented in Nardi et al. (2006, 2018).
The 250m floodplain dataset is derived by processing the NASA SRTM
Digital Elevation model gathered from
[http://srtm.csi.cgiar.org/](http://srtm.csi.cgiar.org/),
and in particular the 250-m SRTM version 4.1 DTM. The coding used
for each continent and additional information are detailed in the
metadata included in the GFPLAIN250m data repository.

The elevation data are processed by a fast geospatial tool for floodplain
mapping available for download at
[https://github.com/fnardi/GFPLAIN](https://github.com/fnardi/GFPLAIN).
The tool first preprocesses DEM to derive hydrologic features
(filled DEM, flow direction, flow accumulation, stream network),
then computes floodplain extents.

This dataset is applicable in regions where water-driven erosion and
depositional processes govern the morphology of floodplain landscape
features, and excludes deserts with low water availability and
ice-covered regions with insignificant river flows. It is fit for
river basins with a contributing area greater than 1000 km2.
The GFPLAIN250m dataset can be used in combination with global
datasets of human settlements to support large-scale studies of
human-flood interactions, human pressure on rivers, and changes
over time of floodplain and wetland habitats at risk.

## Coverage and time range

- Coverage: Global
- Time range: 2018-11-11 至 2018-11-12

## Resolution and specifications

- Spatial resolution: about 250 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| flood | Flood plain | 250 |  |

## What you can use it for

- Floodplain extent mapping
- Human-flood interaction studies
- Flood risk assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('IAHS/GFPLAIN250/v0');
```

- Earth Engine ID: `IAHS/GFPLAIN250/v0`
- Providers: IAHS, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/IAHS_GFPLAIN250_v0

## License and citation

- License: CC-BY-4.0
- Keywords: flood, monitoring, surface-ground-water
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GLCF: Landsat Global Inland Water](/en/pages/500a347f/)
- [GPWv4.11: Water Mask](/en/pages/d70c6d97/)
- [GPWv4.11: Water Area](/en/pages/0f13e587/)
- [BLM AIM TerrADat Terrestrial Field Plots v1](/en/pages/53c74382/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
