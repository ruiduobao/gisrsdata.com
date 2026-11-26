---
title: "Global Ocean Colour — Plankton, Multi-Sensor 4 km"
date: 2026-11-03 12:00:00
---

# Global Ocean Colour — Plankton, Multi-Sensor 4 km

Original name: Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Plankton, Multi-Sensor, 4KM

## What this dataset is

The Global Ocean Colour (Copernicus-GlobColour) dataset is a Bio-Geo-Chemical (BGC) product developed by ACRI-ST, derived from multiple satellite sources such as SeaWiFS, MODIS and OLCI. It provides a comprehensive range of oceanographic variables, including chlorophyll (CHL), phytoplankton functional types and sizes (PFT), primary production (PP), suspended matter (SPM), Secchi transparency depth (ZSD), diffuse attenuation (KD490), particulate backscattering (BBP), absorption coefficient (CDM), reflectance (RRS) and more.

This dataset provides key bio-geochemical information about ocean plankton. This L4 dataset is unique for its gap-free nature: it uses space-time interpolation to fill data gaps caused by clouds or other obstructions, providing a complete daily image. It is derived from multiple satellite sensors, including SeaWiFS, MODIS and OLCI. The primary layer is chlorophyll-a concentration (CHL), which serves as a proxy for the biomass of phytoplankton, a crucial component of the marine food web. The dataset is used to monitor phytoplankton blooms, assess ocean productivity, and study marine ecosystems.

Note: the provider may remove Copernicus Marine data (especially Near Real-Time, NRT, observations) from their repository after some time, possibly aggregating that data into different (e.g. monthly) products. However, the corresponding assets remain available in the Earth Engine collection.

## Coverage and time range

- Coverage: Global ocean
- Time range: 2025-02-10 至 2026-10-28

## Resolution and specifications

- Spatial resolution: about 4,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| CHL | Chlorophyll-a concentration | 4000 |  |
| CHL_uncertainty | Chlorophyll-a concentration - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%). | 4000 |  |
| flags | Land water mask bit.    * 0: Water   * 1: Land | 4000 |  |

## What you can use it for

- Gap-free daily phytoplankton bloom monitoring
- Ocean productivity assessment
- Marine ecosystem studies

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/OC_GLO_BGC/PLANKTON_MULTI_4KM');
```

- Earth Engine ID: `COPERNICUS/MARINE/OC_GLO_BGC/PLANKTON_MULTI_4KM`
- Providers: Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_OC_GLO_BGC_PLANKTON_MULTI_4KM
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
- [Global Ocean Colour — Primary Production, Multi-Sensor 4 km](/en/pages/6396836c/)
- [Global Ocean Colour — Reflectance, OLCI 300 m](/en/pages/f4ffb7b4/)
- [Global Ocean Colour — Reflectance, Multi-Sensor 4 km](/en/pages/472dc170/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
