---
title: "Global Ocean Colour — Primary Production, Multi-Sensor 4 km"
date: 2026-11-03 12:00:00
---

# Global Ocean Colour — Primary Production, Multi-Sensor 4 km

Original name: Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Primary Production, Multi-Sensor 4KM

## What this dataset is

The Global Ocean Colour (Copernicus-GlobColour) dataset is a Bio-Geo-Chemical (BGC) product developed by ACRI-ST, derived from multiple satellite sources such as SeaWiFS, MODIS and OLCI. It provides a comprehensive range of oceanographic variables, including chlorophyll (CHL), phytoplankton functional types and sizes (PFT), primary production (PP), suspended matter (SPM), Secchi transparency depth (ZSD), diffuse attenuation (KD490), particulate backscattering (BBP), absorption coefficient (CDM), reflectance (RRS) and more.

This dataset provides a global estimate of marine primary production. It uses multi-sensor satellite data to measure the rate of carbon fixation by phytoplankton, which is a key indicator of ocean health. The primary production values are expressed in units of mg/m²/day, making it a valuable tool for monitoring global carbon cycles and marine ecosystem dynamics.

Note: the provider may remove Copernicus Marine data (especially Near Real-Time, NRT, observations) from their repository after some time, possibly aggregating that data into different (e.g. monthly) products. However, the corresponding assets remain available in the Earth Engine collection.

## Coverage and time range

- Coverage: Global ocean
- Time range: 2025-03-01 至 2026-09-01

## Resolution and specifications

- Spatial resolution: about 4,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| PP | Primary Production | 4000 |  |
| PP_uncertainty | Primary Production - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%).' | 4000 |  |
| flags | Land water mask bit.    * 0: Water   * 1: Land | 4000 |  |

## What you can use it for

- Global ocean carbon-cycle monitoring
- Marine ecosystem productivity assessment
- Phytoplankton carbon fixation rate studies

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/OC_GLO_BGC/PRIMARY_PRODUCTION_MULTI_4KM');
```

- Earth Engine ID: `COPERNICUS/MARINE/OC_GLO_BGC/PRIMARY_PRODUCTION_MULTI_4KM`
- Providers: Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_OC_GLO_BGC_PRIMARY_PRODUCTION_MULTI_4KM
* [User's Guide](https://documentation.marine.copernicus.eu/PUM/CMEMS-OC-PUM.pdf)
* [Quality Information Document](https://documentation.marine.copernicus.eu/QUID/CMEMS-OC-QUID-009-101to104-111-113-116-118.pdf)
* [Copernicus Marine Datastore](https://data.marine.copernicus.eu/products)

## License and citation

- License: CC-BY-4.0
- Keywords: copernicus, oceans
- 数据引用：Copernicus Global Ocean Colour:  Global Ocean Satellite Observations,
ACRI-ST company (Sophia Antipolis, France) is providing Bio-Geo-Chemical
(BGC) products based on the Copernicus-GlobColour processor.
[doi:10.48670/moi-00279](https://doi.org/10.48670/moi-00279)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Global Ocean Colour — Optics, Multi-Sensor 4 km Monthly](/en/pages/b4a5e847/)
- [Global Ocean Colour — Reflectance, OLCI 300 m](/en/pages/f4ffb7b4/)
- [Global Ocean Colour — Reflectance, Multi-Sensor 4 km](/en/pages/472dc170/)
- [Global Ocean Colour — Plankton, OLCI 300 m](/en/pages/073c2f26/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
