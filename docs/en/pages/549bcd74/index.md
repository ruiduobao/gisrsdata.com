---
title: "HYCOM: Hybrid Coordinate Ocean Model, Sea Surface Elevation"
date: 2026-11-03 12:00:00
---

# HYCOM: Hybrid Coordinate Ocean Model, Sea Surface Elevation

Original name: HYCOM: Hybrid Coordinate Ocean Model, Sea Surface Elevation

## What this dataset is

The Hybrid Coordinate Ocean Model (HYCOM) is a data-assimilative hybrid
isopycnal-sigma-pressure (generalized) coordinate ocean model. The subset
of HYCOM data hosted in EE contains the variables salinity, temperature,
velocity, and elevation. They have been interpolated to a uniform
0.08 degree lat/long grid between 80.48°S and 80.48°N. The salinity,
temperature, and velocity variables have been interpolated to 40
standard z-levels.

The HYCOM Consortium, which includes the National Ocean Partnership
Program (NOPP), is part of the U.S. Global Ocean Data Assimilation
Experiment (GODAE).

Funded by the National Ocean Partnership Program, the Office of Naval
Research (ONR), and DoD High Performance Computing Modernization Program.

For more information, see:

- [hycom.org](https://www.hycom.org/)
- [GIS StackExchange hycom](https://gis.stackexchange.com/questions/tagged/hycom)
- Wikipedia [HyCOM](https://en.wikipedia.org/wiki/HyCOM)
- Wikipedia [List of ocean circulation models](https://en.wikipedia.org/wiki/List_of_ocean_circulation_models)
- Wikipedia [Ocean general circulation model (OGCM)](https://en.wikipedia.org/wiki/Ocean_general_circulation_model)

## Coverage and time range

- Coverage: Global oceans (80.48°S–80.48°N)
- Time range: 1992-10-02 至 2024-09-05

## Resolution and specifications

- Spatial resolution: about 8,905.6 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| surface_elevation | Sea surface elevation anomaly relative to the modeled elevation mean | 8905.6 |  |

## What you can use it for

- Sea surface height and ocean circulation analysis
- Sea level change research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('HYCOM/sea_surface_elevation');
```

- Earth Engine ID: `HYCOM/sea_surface_elevation`
- Providers: NOPP, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/HYCOM_sea_surface_elevation

## License and citation

- License: proprietary
- Keywords: elevation, hycom, nopp, oceans, ssh, water
- 数据引用：J. A. Cummings and O. M. Smedstad. 2013: Variational Data Assimilation for
the Global Ocean. Data Assimilation for Atmospheric, Oceanic and Hydrologic
Applications vol II, chapter 13, 303-343.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ECMWF Near-Realtime IFS Wave Forecasts](/en/pages/2f7bc360/)
- [ECMWF Near-Realtime IFS Wave (Short-Cutoff) Forecasts](/en/pages/423330ad/)
- [GFW (Global Fishing Watch) Daily Fishing Hours](/en/pages/7dfa6e21/)
- [GFW (Global Fishing Watch) Daily Vessel Hours](/en/pages/37ea4824/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
