---
title: "OPERA Radiometric Terrain-Corrected SAR Backscatter from Sentinel-1 Static Layers V1.0"
date: 2026-11-03 12:00:00
---

# OPERA Radiometric Terrain-Corrected SAR Backscatter from Sentinel-1 Static Layers V1.0

Original name: OPERA Radiometric Terrain-Corrected SAR Backscatter from Sentinel-1 Static Layers V1.0

## What this dataset is

This product contains static radar geometry layers associated with the
[OPERA Radiometric Terrain Corrected SAR Backscatter from Sentinel-1 dataset](OPERA_RTC_L2_V1_S1).

Due to the S1 mission’s narrow orbital tube, radar-geometry layers such as
incidence angle, local incidence angle, number of looks, and RTC Area
Normalization Factor (ANF) vary slightly over time for each position on the
ground, and therefore are considered static. These static layers are
provided separately from the OPERA RTC-S1 product, as they are produced
only once or a limited number of times, to account for changes in the DEM,
in the S1 orbit, or in the static-layers generation algorithm.

## Coverage and time range

- Coverage: Spatial: near-global; temporal: static layers (sample period 2014); resolution: 30 m.
- Time range: 2014-04-03 至 2014-04-04

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| local_incidence_angle | Angle between LOS vector and terrain normal vector at the target provided in the same geographic grid as the geocoded imagery. | 30 |  |
| incidence_angle | Angle between LOS vector and the ellipsoid normal at the target provided in the same geographic grid as the geocoded imagery. | 30 |  |
| number_of_looks | The number of radar samples used to compute each RTC-S1 imagery pixel, provided in the same geographic grid as the RTC-S1 product imagery. | 30 |  |
| rtc_anf_gamma0_to_beta0 | The factors to normalize the gamma0 backscatter to beta0, provided in the same grid as the corresponding RTC-S1 imagery. | 30 |  |
| rtc_anf_gamma0_to_sigma0 | The factors to normalize the gamma0 backscatter to sigma0, provided in the same grid as the associated RTC-S1 imagery. | 30 |  |
| mask | Mask layer containing valid/invalid, layover, and shadow classification computed using the RTC-S1 burst orbit, provided over the same geographic grid as the associated geocoded imagery. | 30 |  |

## What you can use it for

- Provide incidence-angle and other geometric parameters for RTC-S1 backscatter.
- SAR radiometric calibration and terrain-effect analysis.
- Identify and mask layover/shadow areas.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('OPERA/RTC/L2_V1/S1_STATIC');
```

- Earth Engine ID: `OPERA/RTC/L2_V1/S1_STATIC`
- Providers: NASA JPL, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/OPERA_RTC_L2_V1_S1_STATIC

## License and citation

- License: CC0-1.0
- Keywords: jpl, nasa, opera, sar, satellite-imagery, sentinel1-derived
- 数据引用：NASA/JPL/OPERA. (2023). OPERA Radiometric Terrain Corrected SAR Backscatter
from Sentinel-1 Static Layers validated product (Version 1) [Data set].
NASA Alaska Satellite Facility Distributed Active Archive Center.
[doi:10.5067/SNWG/OPERA_L2_RTC-S1-STATIC_V1](https://doi.org/10.5067/SNWG/OPERA_L2_RTC-S1-STATIC_V1)

- DOI：10.5067/SNWG/OPERA_L2_RTC-S1-STATIC_V1

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [OPERA Radiometric Terrain-Corrected SAR Backscatter from Sentinel-1 V1.0](/en/pages/8c150ee4/)
- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
