---
title: "MACAv2-METDATA Monthly Summaries: University of Idaho, Multivariate Adaptive Constructed Analogs Applied to Global  Climate Models"
date: 2026-11-03 12:00:00
---

# MACAv2-METDATA Monthly Summaries: University of Idaho, Multivariate Adaptive Constructed Analogs Applied to Global  Climate Models

Original name: MACAv2-METDATA Monthly Summaries: University of Idaho, Multivariate Adaptive Constructed Analogs Applied to Global  Climate Models

## What this dataset is

The MACAv2-METDATA dataset is a collection of 20 global
climate models covering the conterminous USA. The Multivariate Adaptive
Constructed Analogs (MACA) method is a statistical downscaling
method which utilizes a training dataset (i.e. a meteorological
observation dataset) to remove historical biases and match spatial
patterns in climate model output.

The MACA method was used to downscale the model output from 20
global climate models (GCMs) of the Coupled Model Inter-Comparison
Project 5 (CMIP5) for the historical GCM forcings (1950-2005) and
the future Representative Concentration Pathways (RCPs) RCP 4.5
and RCP 8.5 scenarios (2006-2100) from the native resolution of
the GCMS to 4km.

This version contains monthly summaries.

The full list of models can be found at:
[https://climate.northwestknowledge.net/MACA/GCMs.php](https://climate.northwestknowledge.net/MACA/GCMs.php)

## Coverage and time range

- Coverage: Conterminous United States
- Time range: 1900-01-01 至 2099-12-31

## Resolution and specifications

- Spatial resolution: about 4,638.3 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| tasmax | Monthly average of maximum daily temperature near surface | 4638.3 |  |
| tasmin | Monthly average of minimum daily temperature near surface | 4638.3 |  |
| huss | Monthly average of mean daily specific humidity near surface | 4638.3 |  |
| pr | Total monthly precipitation amount at surface | 4638.3 |  |
| rsds | Monthly average of mean daily downward shortwave radiation at surface | 4638.3 |  |
| was | Monthly average of mean daily near surface wind speed | 4638.3 |  |

## What you can use it for

- Downscaled climate change projections
- Wildfire and ecological impact assessment
- Water resources planning

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('IDAHO_EPSCOR/MACAv2_METDATA_MONTHLY');
```

- Earth Engine ID: `IDAHO_EPSCOR/MACAv2_METDATA_MONTHLY`
- Providers: University of California Merced, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/IDAHO_EPSCOR_MACAv2_METDATA_MONTHLY

## License and citation

- License: CC0-1.0
- Keywords: climate, conus, geophysical, idaho, maca, monthly, weather-and-climate
- 数据引用：Abatzoglou J.T. and Brown T.J., A comparison of statistical downscaling
methods suited for wildfire applications, International Journal
of Climatology(2012) [doi:10.1002/joc.2312](https://doi.org/10.1002/joc.2312).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)
- [ERA5 Daily Aggregates — ECMWF Climate Reanalysis](/en/pages/9ae9975a/)
- [CHELSA气象数据](/pages/1849d6/)
- [CHIRPS Precipitation Daily Near-Real-Time: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, IMERG-based)](/pages/09ea3f30/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
