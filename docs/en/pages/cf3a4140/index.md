---
title: "OpenET SSEBop Monthly Evapotranspiration v2.0 [deprecated]"
date: 2026-11-03 12:00:00
---

# OpenET SSEBop Monthly Evapotranspiration v2.0 [deprecated]

Original name: OpenET SSEBop Monthly Evapotranspiration v2.0 [deprecated]

## What this dataset is

Operational Simplified Surface Energy Balance (SSEBop)

The Operational Simplified Surface Energy Balance (SSEBop) model by Senay
et al. (2013, 2017) is a thermal-based simplified surface energy model for
estimating actual ET based on the principles of satellite psychrometry
(Senay 2018). The OpenET SSEBop implementation uses land surface temperature
(Ts) from Landsat (Collection 2 Level-2 Science Products) with key model
parameters (cold/wet-bulb reference, Tc, and surface psychrometric
constant, 1/dT) derived from a combination of observed surface temperature,
normalized difference vegetation index (NDVI), climatological average
(1980-2017) daily maximum air temperature (Ta, 1-km) from Daymet, and
net radiation data from ERA-5. This model implementation uses the Google
Earth Engine processing framework for connecting key SSEBop ET functions
and algorithms together when generating both intermediate and aggregated ET
results. A detailed study and evaluation of the SSEBop model across CONUS
(Senay et al., 2022) informs both cloud implementation and assessment for
water balance applications at broad scales. Notable model (v0.2.6)
enhancements and performance against previous versions include additional
compatibility with Landsat 9 (launched Sep 2021), global model
extensibility, and improved parameterization of SSEBop using
FANO (Forcing and Normalizing Operation) to better estimate ET
in all landscapes and all seasons regardless of vegetation cover density,
thereby improving model accuracy by avoiding extrapolation of Tc to
non-calibration regions.

[Additional information](https://openetdata.org/methodologies/)

## Coverage and time range

- Coverage: Spatial: CONUS; temporal: 1999 to 2024 (monthly); resolution: 30 m.
- Time range: 1999-10-01 至 2024-12-01

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| et | SSEBop ET value | 30 |  |
| count | Number of cloud free values | 30 |  |

## What you can use it for

- Monitor field-scale irrigation water use and evapotranspiration.
- Provide monthly ET data for water-resource management and drought assessment.
- Compare multi-model ensemble ET with single-model results.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('OpenET/SSEBOP/CONUS/GRIDMET/MONTHLY/v2_0');
```

- Earth Engine ID: `OpenET/SSEBOP/CONUS/GRIDMET/MONTHLY/v2_0`
- Providers: OpenET, Inc., Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/OpenET_SSEBOP_CONUS_GRIDMET_MONTHLY_v2_0

## License and citation

- License: CC-BY-4.0
- Keywords: evapotranspiration, gridmet-derived, landsat-derived, monthly, openet, water, water-vapor
- 数据引用：Senay, G.B., Parrish, G.E., Schauer, M., Friedrichs, M., Khand, K., Boiko,
O., Kagone, S., Dittmeier, R., Arab, S. and Ji, L., 2023. Improving the
Operational Simplified Surface Energy Balance Evapotranspiration Model Using
the Forcing and Normalizing Operation. Remote Sensing, 15(1), p.260.
[doi:10.3390/rs15010260](https://doi.org/10.3390/rs15010260)

- DOI：10.3390/rs15010260

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [AG100: ASTER Global Emissivity Dataset 100-meter V003](/en/pages/3510f165/)
- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002](/en/pages/a7bebe55/)
- [ECOSTRESS Land Surface Temperature and Emissivity L2 Global 70 m V002](/en/pages/f726b0e6/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
