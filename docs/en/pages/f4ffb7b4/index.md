---
title: "Global Ocean Colour — Reflectance, OLCI 300 m"
date: 2026-11-03 12:00:00
---

# Global Ocean Colour — Reflectance, OLCI 300 m

Original name: Global Ocean Colour: Bio-Geo-Chemical, L4, from Satellite Observations, Reflectance, OLCI 300M

## What this dataset is

The Global Ocean Colour (Copernicus-GlobColour) dataset is a Bio-Geo-Chemical (BGC) product developed by ACRI-ST, derived from multiple satellite sources such as SeaWiFS, MODIS and OLCI. It provides a comprehensive range of oceanographic variables, including chlorophyll (CHL), phytoplankton functional types and sizes (PFT), primary production (PP), suspended matter (SPM), Secchi transparency depth (ZSD), diffuse attenuation (KD490), particulate backscattering (BBP), absorption coefficient (CDM), reflectance (RRS) and more.

This dataset is a global product from the Copernicus Marine Service (CMEMS). It provides remote-sensing reflectance (Rrs), a fundamental optical property of the water that represents the light leaving the ocean surface. Derived from the Ocean and Land Colour Instrument (OLCI), this L4 dataset is processed into a ready-to-use format. With an exceptionally high spatial resolution of 300 meters, this dataset is particularly valuable for detailed coastal and regional studies of water quality and marine constituents.

Note: the provider may remove Copernicus Marine data (especially Near Real-Time, NRT, observations) from their repository after some time, possibly aggregating that data into different (e.g. monthly) products. However, the corresponding assets remain available in the Earth Engine collection.

## Coverage and time range

- Coverage: Global ocean
- Time range: 2025-03-01 至 2026-09-01

## Resolution and specifications

- Spatial resolution: about 300 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| RRS400 | Remote Sensing Reflectance at 400 nm | 300 |  |
| RRS400_uncertainty | Remote Sensing Reflectance at 400 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%). | 300 |  |
| RRS412 | Remote Sensing Reflectance at 412 nm | 300 |  |
| RRS412_uncertainty | Remote Sensing Reflectance at 412 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%). | 300 |  |
| RRS443 | Remote Sensing Reflectance at 443 nm | 300 |  |
| RRS443_uncertainty | Remote Sensing Reflectance at 443 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%). | 300 |  |
| RRS490 | Remote Sensing Reflectance at 490 nm | 300 |  |
| RRS490_uncertainty | Remote Sensing Reflectance at 490 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%). | 300 |  |
| RRS510 | Remote Sensing Reflectance at 510 nm | 300 |  |
| RRS510_uncertainty | Remote Sensing Reflectance at 510 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%). | 300 |  |
| RRS560 | Remote Sensing Reflectance at 560 nm | 300 |  |
| RRS560_uncertainty | Remote Sensing Reflectance at 560 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%). | 300 |  |
| RRS620 | Remote Sensing Reflectance at 620 nm | 300 |  |
| RRS620_uncertainty | Remote Sensing Reflectance at 620 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%). | 300 |  |
| RRS665 | Remote Sensing Reflectance at 665 nm | 300 |  |
| RRS665_uncertainty | Remote Sensing Reflectance at 665 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%). | 300 |  |
| RRS674 | Remote Sensing Reflectance at 674 nm | 300 |  |
| RRS674_uncertainty | Remote Sensing Reflectance at 674 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%). | 300 |  |
| RRS681 | Remote Sensing Reflectance at 681 nm | 300 |  |
| RRS681_uncertainty | Remote Sensing Reflectance at 681 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%). | 300 |  |
| RRS709 | Remote Sensing Reflectance at 709 nm | 300 |  |
| RRS709_uncertainty | Remote Sensing Reflectance at 709 nm - The uncertainty as measured in hundredths of a percent (e.g., a value of 5000 means 50%). | 300 |  |
| flags | Land water mask bit.  * 0: Water * 1: Land | 300 |  |

## What you can use it for

- Detailed coastal water-quality studies at 300 m
- Regional marine constituent retrieval
- High-resolution ocean colour analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/OC_GLO_BGC/REFLECTANCE_OLCI_300M');
```

- Earth Engine ID: `COPERNICUS/MARINE/OC_GLO_BGC/REFLECTANCE_OLCI_300M`
- Providers: Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_OC_GLO_BGC_REFLECTANCE_OLCI_300M
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
- [Global Ocean Colour — Reflectance, Multi-Sensor 4 km](/en/pages/472dc170/)
- [Global Ocean Colour — Plankton, OLCI 300 m](/en/pages/073c2f26/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
