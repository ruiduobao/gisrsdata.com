---
title: "Sentinel-3 OLCI EFR: Ocean and Land Colour Instrument, Full Resolution"
date: 2026-11-03 12:00:00
---

# Sentinel-3 OLCI EFR: Ocean and Land Colour Instrument, Full Resolution

Original name: Sentinel-3 OLCI EFR: Ocean and Land Color Instrument Earth Observation Full Resolution

## What this dataset is

The Ocean and Land Color Instrument (OLCI) Earth Observation Full Resolution (EFR) dataset contains top of atmosphere radiances at 21 spectral bands with center wavelengths ranging between 0.4 µm and 1.02 µm, at a spatial resolution of 300 m, with worldwide coverage every ~2 days.

OLCI is one of the instruments in the ESA/EUMETSAT Sentinel-3 mission for measuring sea-surface topography, sea- and land-surface temperature, ocean color and land color with high-end accuracy and reliability, to support ocean forecasting systems as well as environmental and climate monitoring.

The Sentinel-3 OLCI instrument is based on the opto-mechanical and imaging design of ENVISAT's MERIS. It is designed to retrieve the spectral distribution of upwelling radiance just above the sea surface (the water-leaving radiance). OLCI observation is performed simultaneously in 21 spectral bands ranging from the visible to the near-infrared (400 to 1029 nm).

## Coverage and time range

- Coverage: Global, about every 2 days
- Time range: 2016-10-18 至 2026-11-02

## Resolution and specifications

- Spatial resolution: about 300 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Oa01_radiance | Aerosol correction, improved water constituent retrieval | 300 | 400nm/15nm |
| Oa02_radiance | Yellow substance and detrital pigments (turbidity) | 300 | 412.5nm/10nm |
| Oa03_radiance | Chl absorption max., biogeochemistry, vegetation | 300 | 442.5nm/10nm |
| Oa04_radiance | High Chl, other pigments | 300 | 490nm/10nm |
| Oa05_radiance | Chl, sediment, turbidity, red tide | 300 | 510nm/10nm |
| Oa06_radiance | Chlorophyll reference (Chl minimum) | 300 | 560nm/10nm |
| Oa07_radiance | Sediment loading | 300 | 620nm/10nm |
| Oa08_radiance | Chl (2^nd Chl abs. max.), sediment, yellow substance/vegetation | 300 | 665nm/10nm |
| Oa09_radiance | For improved fluorescence retrieval and to better account for [smile](https://sentinels.copernicus.eu/web/sentinel/technical-guides/sentinel-3-olci/level-2/smile-correction) together with the bands 665 and 680nm | 300 | 673.75nm/7.5nm |
| Oa10_radiance | Chl fluorescence peak, red edge | 300 | 681.25nm/7.5nm |
| Oa11_radiance | Chl fluorescence baseline, red edge transition | 300 | 708.75nm/10nm |
| Oa12_radiance | O2 absorption/clouds, vegetation | 300 | 753.75nm/7.5nm |
| Oa13_radiance | O2 absorption band/aerosol correction | 300 | 761.25nm/7.5nm |
| Oa14_radiance | Atmospheric correction | 300 | 764.375nm/3.75nm |
| Oa15_radiance | O2A used for cloud top pressure, fluorescence over land | 300 | 767.5nm/2.5nm |
| Oa16_radiance | Atmospheric correction/aerosol correction | 300 | 778.75nm/15nm |
| Oa17_radiance | Atmospheric correction/aerosol correction, clouds, pixel co-registration | 300 | 865nm/20nm |
| Oa18_radiance | Water vapor absorption reference band. Common reference band with SLSTR instrument. Vegetation monitoring | 300 | 885nm/10nm |
| Oa19_radiance | Water vapor absorption/vegetation monitoring (max. reflectance) | 300 | 900nm/10nm |
| Oa20_radiance | Water vapor absorption, atmospheric/aerosol correction | 300 | 940nm/20nm |
| Oa21_radiance | Atmospheric/aerosol correction | 300 | 1029nm/40nm |
| quality_flags | Quality flags | 300 |  |

## What you can use it for

- Ocean and land colour analysis at 300 m
- Water-leaving radiance retrieval for ocean colour products
- Environmental and climate monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/S3/OLCI');
```

- Earth Engine ID: `COPERNICUS/S3/OLCI`
- Providers: European Union/ESA/Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S3_OLCI

## License and citation

- License: proprietary
- Keywords: copernicus, esa, eu, olci, radiance, satellite-imagery, sentinel, toa
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Global Ocean Colour — Optics, Multi-Sensor 4 km Monthly](/en/pages/b4a5e847/)
- [Global Ocean Colour — Primary Production, Multi-Sensor 4 km](/en/pages/6396836c/)
- [Global Ocean Colour — Reflectance, OLCI 300 m](/en/pages/f4ffb7b4/)
- [Global Ocean Colour — Reflectance, Multi-Sensor 4 km](/en/pages/472dc170/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
