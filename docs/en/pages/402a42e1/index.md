---
title: "OpenET DisALEXI Monthly Evapotranspiration v2.0 [deprecated]"
date: 2026-11-03 12:00:00
---

# OpenET DisALEXI Monthly Evapotranspiration v2.0 [deprecated]

Original name: OpenET DisALEXI Monthly Evapotranspiration v2.0 [deprecated]

## What this dataset is

Atmosphere-Land Exchange Inverse / Disaggregation of the Atmosphere-Land
Exchange Inverse (ALEXI/DisALEXI)

DisALEXI was recently ported to Google Earth Engine as part of the OpenET
framework and the baseline ALEXI/DisALEXI model structure is described by
Anderson et al. (2012, 2018). The ALEXI evapotranspiration (ET) model
specifically uses time differential land surface temperature (LST)
measurements from geostationary or moderate resolution polar orbiting
platforms to generate regional ET maps. DisALEXI then disaggregates the
regional ALEXI ET to finer scales using Landsat data (30 m; biweekly) to
resolve individual farm fields and other landscape features.
[Additional information](https://openetdata.org/methodologies/)

## Coverage and time range

- Coverage: Spatial: CONUS; temporal: 2001 to 2024 (monthly); resolution: 30 m.
- Time range: 2001-01-01 至 2024-12-01

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| et | DisALEXI ET value | 30 |  |
| count | Number of cloud free values | 30 |  |

## What you can use it for

- Monitor field-scale irrigation water use and evapotranspiration.
- Provide monthly ET data for water-resource management and drought assessment.
- Compare multi-model ensemble ET with single-model results.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('OpenET/DISALEXI/CONUS/GRIDMET/MONTHLY/v2_0');
```

- Earth Engine ID: `OpenET/DISALEXI/CONUS/GRIDMET/MONTHLY/v2_0`
- Providers: OpenET, Inc., Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/OpenET_DISALEXI_CONUS_GRIDMET_MONTHLY_v2_0

## License and citation

- License: CC-BY-4.0
- Keywords: evapotranspiration, gridmet-derived, landsat-derived, monthly, openet, water, water-vapor
- 数据引用：Anderson, M., Gao, F., Knipper, K., Hain, C., Dulaney, W., Baldocchi, D .,
Eichelmann, E., Hemes, K., Yang, Y., Medellin-Azuara, J. and Kustas, W.,
2018. Field-scale assessment of land and water use change over the
California Delta using remote sensing. Remote Sensing, 10(6), p.889.
[doi:10.3390/rs10060889](https://doi.org/10.3390/rs10060889)

- DOI：10.3390/rs10060889

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [AG100: ASTER Global Emissivity Dataset 100-meter V003](/en/pages/3510f165/)
- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002](/en/pages/a7bebe55/)
- [ECOSTRESS Land Surface Temperature and Emissivity L2 Global 70 m V002](/en/pages/f726b0e6/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
