---
title: "Breathing Earth System Simulator (BESS) Radiation v1"
date: 2026-11-03 12:00:00
---

# Breathing Earth System Simulator (BESS) Radiation v1

Original name: Breathing Earth System Simulator (BESS) Radiation v1

## What this dataset is

Breathing Earth System Simulator (BESS) is a simplified process-based model
that couples atmosphere and canopy radiative transfers, canopy
photosynthesis, transpiration, and energy balance. It couples an atmospheric
radiative transfer model and artificial neural network with forcings from
MODIS atmospheric products to generate 5-km daily products.

Publications:

* Ryu Youngryel, Chongya Jiang, Hideki Kobayashi, Matteo Detto,
  MODIS-derived global land products of shortwave radiation and diffuse and
  total photosynthetically active radiation at 5km resolution from 2000.
  Remote Sensing of Environment, Volume 204,
  2018.
  [doi:10.1016/j.rse.2017.09.021](https://doi.org/10.1016/j.rse.2017.09.021)

## Coverage and time range

- Coverage: Spatial: global land; temporal: 2001 to 2021 (daily); resolution: 5,500 m.
- Time range: 2001-01-01 至 2021-12-31

## Resolution and specifications

- Spatial resolution: about 5,500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| PAR_Daily | Surface downwelling photosynthetic radiative flux in air | 5500 |  |
| PARdiff_Daily | Surface diffuse downwelling photosynthetic radiative flux in air | 5500 |  |
| RSDN_Daily | Surface downwelling shortwave flux in air | 5500 |  |

## What you can use it for

- Long time-series analysis of global radiation and PAR.
- Radiation forcing for GPP and evapotranspiration modelling.
- Analyse interannual radiation variability and trends.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('SNU/ESL/BESS/Rad/v1');
```

- Earth Engine ID: `SNU/ESL/BESS/Rad/v1`
- Providers: Seoul National University (SNU), Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/SNU_ESL_BESS_Rad_v1

## License and citation

- License: CC-BY-4.0
- Keywords: climate, evapotranspiration, gpp, modis-derived, par, radiation, shortwave, weather-and-climate
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [AG100: ASTER Global Emissivity Dataset 100-meter V003](/en/pages/3510f165/)
- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ECOSTRESS Tiled Ancillary NDVI and Albedo L2 Global 70 m V002](/en/pages/a7bebe55/)
- [ECOSTRESS Land Surface Temperature and Emissivity L2 Global 70 m V002](/en/pages/f726b0e6/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
