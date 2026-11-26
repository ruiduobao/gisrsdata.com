---
title: "OPERA Radiometric Terrain-Corrected SAR Backscatter from Sentinel-1 V1.0"
date: 2026-11-03 12:00:00
---

# OPERA Radiometric Terrain-Corrected SAR Backscatter from Sentinel-1 V1.0

Original name: OPERA Radiometric Terrain-Corrected SAR Backscatter from Sentinel-1 V1.0

## What this dataset is

This product consists of radar backscatter normalized with respect to the
topography. It maps signals related to the physical properties of ground
scattering objects, such as surface roughness and soil moisture and/or
vegetation. The OPERA RTC-S1 product is derived from Copernicus Sentinel-1
Interferometric Wide (IW) Single Look Complex (SLC) data with a near global
scope and temporal sampling coincident with the availability of SLC data.

Each OPERA RTC-S1 product corresponds to a single S1 burst projected onto
a pre-defined UTM/Polar stereographic map projection system map grid with
a 30-meter spacing. The Copernicus global 30 m (GLO-30) Digital Elevation
Model (DEM) is the reference DEM used to correct for the impacts of
topography and to geocode the product. The OPERA RTC-S1 product is
normalized to the backscatter coefficient gamma0 obtained from the
original radar brightness beta0 through radiometric terrain correction.

Due to the S1 mission’s narrow orbital tube, radar-geometry layers such as
incidence angle, local incidence angle, number of looks, and RTC Area
Normalization Factor (ANF) vary slightly over time for each position on the
ground, and therefore are considered static. These static layers are
provided separately from the OPERA RTC-S1 product, as they are produced
only once or a limited number of times, to account for changes in the DEM,
in the S1 orbit, or in the static-layers generation algorithm. The static
layers are available in the associated
[OPERA Radiometric Terrain Corrected SAR Backscatter from Sentinel-1 Static Layers dataset](OPERA_RTC_L2_V1_S1_STATIC).

## Coverage and time range

- Coverage: Spatial: near-global; temporal: 2016 to present; resolution: 30 m.
- Time range: 2016-04-14 至 2026-11-02

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| VV | VV polarization radar backscatter normalized to gamma0. | 30 |  |
| VH | VH polarization radar backscatter normalized to gamma0. | 30 |  |
| HV | HV polarization radar backscatter normalized to gamma0. | 30 |  |
| HH | HH polarization radar backscatter normalized to gamma0. | 30 |  |
| mask | Mask layer containing valid/invalid, layover, and shadow classification computed using the RTC-S1 burst orbit, provided over the same geographic grid as the associated geocoded imagery. | 30 |  |

## What you can use it for

- SAR analysis of soil moisture, vegetation and surface roughness.
- Terrain-corrected backscatter for flood and crop monitoring.
- Standardized input for interferometry and change detection.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('OPERA/RTC/L2_V1/S1');
```

- Earth Engine ID: `OPERA/RTC/L2_V1/S1`
- Providers: NASA JPL, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/OPERA_RTC_L2_V1_S1

## License and citation

- License: CC0-1.0
- Keywords: backscatter, jpl, nasa, opera, polarization, radar, sar, satellite-imagery, sentinel1-derived
- 数据引用：NASA/JPL/OPERA. (2023). OPERA Radiometric Terrain Corrected SAR
Backscatter from Sentinel-1 validated product (Version 1) [Data set].
NASA Alaska Satellite Facility Distributed Active Archive Center.
[doi:10.5067/SNWG/OPERA_L2_RTC-S1_V1](https://doi.org/10.5067/SNWG/OPERA_L2_RTC-S1_V1)

- DOI：10.5067/SNWG/OPERA_L2_RTC-S1_V1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [OPERA Radiometric Terrain-Corrected SAR Backscatter from Sentinel-1 Static Layers V1.0](/en/pages/d7f26f8f/)
- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
