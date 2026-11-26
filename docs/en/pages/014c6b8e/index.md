---
title: "OpenLandMap Long-term Land Surface Temperature Daytime Monthly Median"
date: 2026-11-03 12:00:00
---

# OpenLandMap Long-term Land Surface Temperature Daytime Monthly Median

Original name: OpenLandMap Long-term Land Surface Temperature Daytime Monthly Median

## What this dataset is

Land Surface Temperature daytime monthly mean value 2000-2017.

Derived using the [data.table package and quantile function in R](https://gitlab.com/openlandmap/global-layers/tree/master/input_layers/MOD11A2).
For more info about the MODIS LST product see [this page](https://lpdaac.usgs.gov/products/mod11a2v006/).
Antarctica is not included.

To access and visualize maps outside of Earth Engine, use [this page](https://opengeohub.org/about-openlandmap).

If you discover a bug, artifact or inconsistency in the LandGIS maps
or if you have a question please use the following channels:

## Coverage and time range

- Coverage: Spatial: global (excluding Antarctica); temporal: long-term statistics 2000 to 2017 (monthly); resolution: 1,000 m.
- Time range: 2000-01-01 至 2018-01-01

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| jan | Long-term Land Surface Temperature daytime monthly mean, January | 1000 |  |
| feb | Long-term Land Surface Temperature daytime monthly mean, February | 1000 |  |
| mar | Long-term Land Surface Temperature daytime monthly mean, March | 1000 |  |
| apr | Long-term Land Surface Temperature daytime monthly mean, April | 1000 |  |
| may | Long-term Land Surface Temperature daytime monthly mean, May | 1000 |  |
| jun | Long-term Land Surface Temperature daytime monthly mean, June | 1000 |  |
| jul | Long-term Land Surface Temperature daytime monthly mean, July | 1000 |  |
| aug | Long-term Land Surface Temperature daytime monthly mean, August | 1000 |  |
| sep | Long-term Land Surface Temperature daytime monthly mean, September | 1000 |  |
| oct | Long-term Land Surface Temperature daytime monthly mean, October | 1000 |  |
| nov | Long-term Land Surface Temperature daytime monthly mean, November | 1000 |  |
| dec | Long-term Land Surface Temperature daytime monthly mean, December | 1000 |  |

## What you can use it for

- Serve as base layers for global climate and land-system analysis.
- Provide environmental variables for ecological, hydrological and soil modelling.
- Compare and fuse with other global gridded products.

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('OpenLandMap/CLM/CLM_LST_MOD11A2-DAY_M/v01');
```

- Earth Engine ID: `OpenLandMap/CLM/CLM_LST_MOD11A2-DAY_M/v01`
- Providers: EnvirometriX Ltd, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_CLM_CLM_LST_MOD11A2-DAY_M_v01
*  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
*  [General questions and comments](https://disqus.com/home/forums/landgis/)

## License and citation

- License: CC-BY-SA-4.0
- Keywords: climate, envirometrix, lst, mod11a2, modis, monthly, opengeohub, openlandmap, weather-and-climate
- 数据引用：Long-term MODIS LST day-time and night-time temperatures, sd and differences
at 1 km based on the 2000-2017 time series
[10.5281/zenodo.1420114](https://doi.org/10.5281/zenodo.1420114)

- DOI：10.5281/zenodo.1420114

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [OpenLandMap Long-term Land Surface Temperature Monthly Day-Night Difference](/pages/a6fac662/)
- [OpenLandMap Precipitation Monthly](/pages/13ce8975/)
- [CPC Global Unified Temperature](/en/pages/8042cb38/)
- [CPC Global Unified Gauge-Based Analysis of Daily Precipitation](/en/pages/9d6b70e8/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
