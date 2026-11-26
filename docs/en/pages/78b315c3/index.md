---
title: "Copernicus Satellite Ocean Colour Daily Data (V6)"
date: 2026-11-03 12:00:00
---

# Copernicus Satellite Ocean Colour Daily Data (V6)

Original name: Copernicus Satellite Ocean Color Daily Data

## What this dataset is

This dataset provides global daily estimates of ocean surface chlorophyll-a concentration and remote sensing reflectance derived from multiple satellite sensors.

Remote-sensing reflectance (Rrs) is defined as water-leaving radiance divided by downwelling irradiance, and serves as the main input to algorithms used to derive other ocean colour products. Chlorophyll-a (Chl-a) is the main photosynthetic pigment found in phytoplankton, which form the base of the marine food web and are responsible for approximately half of global photosynthesis. Chl-a can be estimated from Rrs data using different algorithms (see details in the documentation). Here, a blended Chl-a estimate from multiple algorithms is provided, where blending is based on the suitability of each candidate algorithm to the optical typology of a given pixel. This approach provides the best estimates of global Chl-a across a range of water types.

The files contain global daily composites of merged sensor products: SeaWiFS, MERIS, MODIS Aqua, VIIRS, and (from version 5.0 onward) OLCI. Note that Rrs and Chl-a data are only available over cloud- and ice-free areas, so more complete spatial coverage can be achieved by aggregating data over longer time periods.

This dataset is produced using the processing chain software developed by the Ocean Colour component of the European Space Agency Climate Change Initiative project (ESA OC-CCI). More details are available in the dataset [documentation](https://dast.copernicus-climate.eu/documents/satellite-ocean-colour/v6.0/WP2-FDDP-2022-04_C3S2-Lot3_PUGS-of-v6.0-OceanColour-product_v1.1_FINAL.pdf).

## Coverage and time range

- Coverage: Global ocean
- Time range: 1997-01-01 至 2026-03-31
- Cadence: Daily composites

## Resolution and specifications

- Spatial resolution: about 4,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| MERIS_nobs | Number of observations from MERIS sensor | 4000 |  |
| MODISA_nobs | Number of observations from MODIS-A sensor | 4000 |  |
| OLCI-A_nobs | Number of observations from OLCI-A sensor | 4000 |  |
| OLCI-B_nobs | Number of observations from OLCI-B sensor | 4000 |  |
| SeaWiFS_nobs | Number of observations from SeaWiFS sensor | 4000 |  |
| VIIRS_nobs | Number of observations from VIIRS sensor | 4000 |  |
| chlor_a | Chlorophyll-a concentration | 4000 |  |
| total_nobs | Total number of observations | 4000 |  |
| Rrs_412 | Remote sensing reflectance at 412 nm | 4000 |  |
| Rrs_443 | Remote sensing reflectance at 443 nm | 4000 |  |
| Rrs_490 | Remote sensing reflectance at 490 nm | 4000 |  |
| Rrs_510 | Remote sensing reflectance at 510 nm | 4000 |  |
| Rrs_560 | Remote sensing reflectance at 560 nm | 4000 |  |
| Rrs_665 | Remote sensing reflectance at 665 nm | 4000 |  |
| Rrs_MERIS_nobs | Number of observations from MERIS sensor | 4000 |  |
| Rrs_MODISA_nobs | Number of observations from MODIS-A sensor | 4000 |  |
| Rrs_OLCI-A_nobs | Number of observations from OLCI-A sensor | 4000 |  |
| Rrs_OLCI-B_nobs | Number of observations from OLCI-B sensor | 4000 |  |
| Rrs_SeaWiFS_nobs | Number of observations from SeaWiFS sensor | 4000 |  |
| Rrs_VIIRS_nobs | Number of observations from VIIRS sensor | 4000 |  |
| Rrs_total_nobs | Total number of observations from RRS sensors | 4000 |  |

## What you can use it for

- Long-term (since 1997) global chlorophyll-a records
- Ocean colour climate data records for trend analysis
- Multi-sensor reflectance for algorithm development

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/SATELLITE_OCEAN_COLOR/V6');
```

- Earth Engine ID: `COPERNICUS/MARINE/SATELLITE_OCEAN_COLOR/V6`
- Providers: Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_SATELLITE_OCEAN_COLOR_V6

## License and citation

- License: CC-BY-4.0
- Keywords: chlorophyll-a, copernicus, daily, oceans
- 数据引用：Copernicus Climate Change Service (2019): Ocean colour daily data from 1997
to present derived from satellite observations. Copernicus Climate Change
Service (C3S) Climate Data Store (CDS). 
[doi:10.24381/cds.f85b319d](https://doi.org/10.24381/cds.f85b319d)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Global Ocean Colour — Optics, Multi-Sensor 4 km Monthly](/en/pages/b4a5e847/)
- [Global Ocean Colour — Primary Production, Multi-Sensor 4 km](/en/pages/6396836c/)
- [Global Ocean Colour — Reflectance, OLCI 300 m](/en/pages/f4ffb7b4/)
- [Global Ocean Colour — Reflectance, Multi-Sensor 4 km](/en/pages/472dc170/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
