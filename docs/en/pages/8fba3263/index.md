---
title: "MCD18C2.061 Photosynthetically Active Radiation Daily 3-Hour [deprecated]"
date: 2026-11-03 12:00:00
---

# MCD18C2.061 Photosynthetically Active Radiation Daily 3-Hour [deprecated]

Original name: MCD18C2.061 Photosynthetically Active Radiation Daily 3-Hour [deprecated]

## What this dataset is

The MCD18C2 Version 6.1
is a Moderate Resolution Imaging Spectroradiometer
(MODIS) Terra and Aqua combined Photosynthetically Active Radiation (PAR)
gridded Level 3 product produced daily at 0.05 degree (5,600 meters at the
equator) resolution with estimates of PAR every 3 hours. PAR is incident
solar radiation in the visible spectrum (400-700 nanometers) and is an
important variable in land-surface models that address a variety of
scientific and application issues. The MCD18 products are based on a
prototyping algorithm that uses multi-temporal signatures of MODIS data to
derive surface reflectance and then calculate incident PAR using the look-up
table (LUT) approach. The LUTs consider different types of loadings of
aerosols and clouds at a variety of illumination/viewing geometry. Global
PAR products are generated from MODIS and geostationary satellite data.
Additional details regarding the methodology used to create the data are
available in the
[Algorithm Theoretical Basis Document](https://lpdaac.usgs.gov/documents/106/MCD18_ATBD.pdf)

## Coverage and time range

- Coverage: Coverage: global; time span: 2002 to 2024; resolution: 5,566 m.
- Time range: 2002-02-24 至 2024-06-01

## Resolution and specifications

- Spatial resolution: about 5,566 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| GMT_0000_PAR | Total PAR at GMT 00:00 | 5566 |  |
| GMT_0300_PAR | Total PAR at GMT 03:00 | 5566 |  |
| GMT_0600_PAR | Total PAR at GMT 06:00 | 5566 |  |
| GMT_0900_PAR | Total PAR at GMT 09:00 | 5566 |  |
| GMT_1200_PAR | Total PAR at GMT 12:00 | 5566 |  |
| GMT_1500_PAR | Total PAR at GMT 15:00 | 5566 |  |
| GMT_1800_PAR | Total PAR at GMT 18:00 | 5566 |  |
| GMT_2100_PAR | Total PAR at GMT 21:00 | 5566 |  |

## What you can use it for

- Surface radiation and energy balance research
- Land surface model inputs
- Agricultural and ecological radiation analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/061/MCD18C2');
```

- Earth Engine ID: `MODIS/061/MCD18C2`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD18C2

## License and citation

- License: proprietary
- Keywords: par, radiation, weather-and-climate
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD18C2.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km](/pages/a130c488/)
- [MOD11A2.061 Terra Land Surface Temperature and Emissivity 8-Day Global 1km](/pages/154c1ce8/)
- [MOD21A1D.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km](/pages/ea336063/)
- [MOD21A1N.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km](/pages/a0c5f0f5/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
