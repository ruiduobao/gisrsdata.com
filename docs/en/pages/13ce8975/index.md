---
title: "OpenLandMap Precipitation Monthly"
date: 2026-11-03 12:00:00
---

# OpenLandMap Precipitation Monthly

Original name: OpenLandMap Precipitation Monthly

## What this dataset is

Monthly precipitation in mm at 1 km resolution based on [SM2RAIN-ASCAT
2007-2018](https://doi.org/10.5281/zenodo.2615278),
IMERG, CHELSA Climate, and WorldClim.

[Downscaled to 1 km resolution using gdalwarp](https://gitlab.com/openlandmap/global-layers/tree/master/input_layers/clim1km)
(cubic splines) and an average between [WorldClim](https://www.worldclim.org/data/worldclim21.html),
[CHELSA Climate](https://chelsa-climate.org/),
and [IMERG monthly product](https://gpm.nasa.gov/data/imerg) (see, e.g, "3B-MO-L.GIS.IMERG.20180601.V05B.tif").
3x higher weight is given to the SM2RAIN-ASCAT data since it assumed to be more accurate. Processing steps are available
[here](https://gitlab.com/openlandmap/global-layers/tree/master/input_layers/clim1km).
Antarctica is not included.

To access and visualize maps outside of Earth Engine, use [this page](https://opengeohub.org/about-openlandmap).

If you discover a bug, artifact or inconsistency in the LandGIS maps
or if you have a question please use the following channels:

## Coverage and time range

- Coverage: Spatial: global (excluding Antarctica); temporal: 2007 to 2019 (monthly); resolution: 1,000 m.
- Time range: 2007-01-01 至 2019-01-01

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| jan | Jan Precipitation monthly | 1000 |  |
| feb | Feb Precipitation monthly | 1000 |  |
| mar | Mar Precipitation monthly | 1000 |  |
| apr | Apr Precipitation monthly | 1000 |  |
| may | May Precipitation monthly | 1000 |  |
| jun | Jun Precipitation monthly | 1000 |  |
| jul | Jul Precipitation monthly | 1000 |  |
| aug | Aug Precipitation monthly | 1000 |  |
| sep | Sep Precipitation monthly | 1000 |  |
| oct | Oct Precipitation monthly | 1000 |  |
| nov | Nov Precipitation monthly | 1000 |  |
| dec | Dec Precipitation monthly | 1000 |  |

## What you can use it for

- Serve as base layers for global climate and land-system analysis.
- Provide environmental variables for ecological, hydrological and soil modelling.
- Compare and fuse with other global gridded products.

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('OpenLandMap/CLM/CLM_PRECIPITATION_SM2RAIN_M/v01');
```

- Earth Engine ID: `OpenLandMap/CLM/CLM_PRECIPITATION_SM2RAIN_M/v01`
- Providers: EnvirometriX Ltd, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_CLM_CLM_PRECIPITATION_SM2RAIN_M_v01
*  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
*  [General questions and comments](https://disqus.com/home/forums/landgis/)

## License and citation

- License: CC-BY-SA-4.0
- Keywords: envirometrix, imerg, monthly, opengeohub, openlandmap, precipitation
- 数据引用：Monthly precipitation in mm at 1 km resolution based on SM2RAIN-ASCAT 2007-2018 and IMERG 2014-2018
[10.5281/zenodo.1435912](https://doi.org/10.5281/zenodo.1435912)

- DOI：10.5281/zenodo.1435912

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [OpenLandMap Long-term Land Surface Temperature Daytime Monthly Median](/pages/014c6b8e/)
- [OpenLandMap Long-term Land Surface Temperature Monthly Day-Night Difference](/pages/a6fac662/)
- [CPC Global Unified Temperature](/en/pages/8042cb38/)
- [CPC Global Unified Gauge-Based Analysis of Daily Precipitation](/en/pages/9d6b70e8/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
