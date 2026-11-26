---
title: "Copernicus Global Ocean Biogeochemical Forecast — CO2"
date: 2026-11-03 12:00:00
---

# Copernicus Global Ocean Biogeochemical Forecast — CO2

Original name: Copernicus Global Ocean Bio-Geo-Chemical Forecast - CO2

## What this dataset is

The operational Mercator Ocean biogeochemical global ocean analysis and forecast system at 1/4 degree provides 10 days of 3D global ocean forecasts, updated weekly. The time series is aggregated in time to reach a two full years' sliding window. The product includes daily and monthly mean files of biogeochemical parameters (chlorophyll, nitrate, phosphate, silicate, dissolved oxygen, dissolved iron, primary production, phytoplankton, zooplankton, pH, and surface partial pressure of carbon dioxide) over the global ocean, displayed at 1/4-degree horizontal resolution in a regular longitude/latitude equirectangular projection.

This dataset consists of surface partial pressure of carbon dioxide.

## Coverage and time range

- Coverage: Global ocean
- Time range: 2022-01-01 至 2025-09-19

## Resolution and specifications

- Spatial resolution: about 27,750 m (about 27.75 km (1/4 degree))
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| spco2_depth1 | Surface Partial Pressure of Carbon Dioxide | 27750 |  |

## What you can use it for

- Ocean–atmosphere CO₂ exchange and carbon-cycle research
- Ocean carbon uptake monitoring
- Short-term (10-day) forecast applications

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_BGC_001_028/CO2');
```

- Earth Engine ID: `COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_BGC_001_028/CO2`
- Providers: Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_BGC_001_028_CO2

## License and citation

- License: CC-BY-4.0
- Keywords: copernicus, daily, forecast, oceans
- 数据引用：E.U. Copernicus Marine Service Information.
[https://doi.org/10.48670/moi-00015](https://doi.org/10.48670/moi-00015)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Global Ocean Colour — Optics, Multi-Sensor 4 km Monthly](/en/pages/b4a5e847/)
- [Global Ocean Colour — Primary Production, Multi-Sensor 4 km](/en/pages/6396836c/)
- [Global Ocean Colour — Reflectance, OLCI 300 m](/en/pages/f4ffb7b4/)
- [Global Ocean Colour — Reflectance, Multi-Sensor 4 km](/en/pages/472dc170/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
