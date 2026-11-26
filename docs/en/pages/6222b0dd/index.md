---
title: "USGS Landsat 4 TM Collection 2 Tier 1 TOA Reflectance"
date: 2026-11-03 12:00:00
---

# USGS Landsat 4 TM Collection 2 Tier 1 TOA Reflectance

Original name: USGS Landsat 4 TM Collection 2 Tier 1 TOA Reflectance

## What this dataset is

Landsat 4 TM Collection 2 Tier 1
  calibrated top-of-atmosphere (TOA) reflectance.
  Calibration coefficients are extracted from the image metadata.
  See [Chander et al. (2009)](https://www.sciencedirect.com/science/article/pii/S0034425709000169)
  for details on the TOA computation.

## Coverage and time range

- Coverage: Coverage: global; time span: 1982 to 1993; resolution: 30 m (thermal 60 m).
- Time range: 1982-08-22 至 1993-12-14

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| B1 | Blue | 30 | 0.45 - 0.52 &mu;m |
| B2 | Green | 30 | 0.52 - 0.60 &mu;m |
| B3 | Red | 30 | 0.63 - 0.69 &mu;m |
| B4 | Near infrared | 30 | 0.76 - 0.90 &mu;m |
| B5 | Shortwave infrared 1 | 30 | 1.55 - 1.75 &mu;m |
| B6 | Thermal Infrared 1. Resampled from 60m to 30m. | 30 | 10.40 - 12.50 &mu;m |
| B7 | Shortwave infrared 2 | 30 | 2.08 - 2.35 &mu;m |
| QA_PIXEL | Landsat Collection 2 TM/ETM QA Bitmask | 30 |  |
| QA_RADSAT | Radiometric saturation QA | 30 |  |
| SAA | Solar Azimuth Angle | 30 |  |
| SZA | Solar Zenith Angle | 30 |  |
| VAA | View Azimuth Angle | 30 |  |
| VZA | View Zenith Angle | 30 |  |

## What you can use it for

- Landsat image search and analysis
- Surface reflectance and land surface temperature applications
- Long time-series land-cover monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('LANDSAT/LT04/C02/T1_TOA');
```

- Earth Engine ID: `LANDSAT/LT04/C02/T1_TOA`
- Providers: USGS/Google, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LT04_C02_T1_TOA

## License and citation

- License: PDDL-1.0
- Keywords: global, landsat, satellite-imagery, toa, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [USGS Landsat 4 Level 2, Collection 2, Tier 1](/pages/f614ca66/)
- [USGS Landsat 4 Level 2, Collection 2, Tier 2](/pages/39a188bd/)
- [USGS Landsat 4 TM Collection 2 Tier 1 Raw Scenes](/pages/7a8bcd74/)
- [USGS Landsat 4 TM Collection 2 Tier 2 Raw Scenes](/pages/2240c9fe/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
