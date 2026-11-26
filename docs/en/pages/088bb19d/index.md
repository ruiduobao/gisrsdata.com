---
title: "MCD18A1.061 Surface Radiation Daily/3-Hour [deprecated]"
date: 2026-11-03 12:00:00
---

# MCD18A1.061 Surface Radiation Daily/3-Hour [deprecated]

Original name: MCD18A1.061 Surface Radiation Daily/3-Hour [deprecated]

## What this dataset is

The MCD18A1 Version 6.1
is a Moderate Resolution Imaging Spectroradiometer
(MODIS) Terra and Aqua combined Downward Shortwave Radiation (DSR) gridded
Level 3 product produced daily at 1 kilometer pixel resolution with
estimates of DSR every 3 hours. DSR is incident solar radiation over land
surfaces in the shortwave spectrum (300-4,000 nanometers) and is an
important variable in land-surface models that address a variety of
scientific and application issues. The MCD18 products are based on a
prototyping algorithm that uses multi-temporal signatures of MODIS data to
derive surface reflectance and then calculate incident DSR using the look-up
table (LUT) approach. The LUTs consider different types of loadings of
aerosols and clouds at a variety of illumination/viewing geometry. Global
DSR products are generated from MODIS and geostationary satellite data.
Additional details regarding the methodology used to create the data are
available in the
[Algorithm Theoretical Basis Document](https://lpdaac.usgs.gov/documents/106/MCD18_ATBD.pdf).

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2024; resolution: 1 km.
- Time range: 2000-02-24 至 2024-06-01

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| DSR | Instantaneous total DSR at MODIS overpass | 1000 |  |
| Direct | Instantaneous direct DSR at MODIS overpass | 1000 |  |
| Diffuse | Instantaneous diffuse DSR at MODIS overpass | 1000 |  |
| GMT_0000_DSR | Total DSR at GMT 00:00 | 1000 |  |
| GMT_0300_DSR | Total DSR at GMT 03:00 | 1000 |  |
| GMT_0600_DSR | Total DSR at GMT 06:00 | 1000 |  |
| GMT_0900_DSR | Total DSR at GMT 09:00 | 1000 |  |
| GMT_1200_DSR | Total DSR at GMT 12:00 | 1000 |  |
| GMT_1500_DSR | Total DSR at GMT 15:00 | 1000 |  |
| GMT_1800_DSR | Total DSR at GMT 18:00 | 1000 |  |
| GMT_2100_DSR | Total DSR at GMT 21:00 | 1000 |  |
| DSR_Quality | Quality flag | 1000 |  |

## What you can use it for

- Surface radiation and energy balance research
- Land surface model inputs
- Agricultural and ecological radiation analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/061/MCD18A1');
```

- Earth Engine ID: `MODIS/061/MCD18A1`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD18A1

## License and citation

- License: proprietary
- Keywords: par, radiation, weather-and-climate
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD18A1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km](/pages/a130c488/)
- [MOD11A2.061 Terra Land Surface Temperature and Emissivity 8-Day Global 1km](/pages/154c1ce8/)
- [MOD21A1D.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km](/pages/ea336063/)
- [MOD21A1N.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km](/pages/a0c5f0f5/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
