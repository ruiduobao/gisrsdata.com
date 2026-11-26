---
title: "USGS Landsat 7 Collection 2 Tier 2 TOA Reflectance"
date: 2026-11-03 12:00:00
---

# USGS Landsat 7 Collection 2 Tier 2 TOA Reflectance

Original name: USGS Landsat 7 Collection 2 Tier 2 TOA Reflectance

## What this dataset is

Landsat 7 Collection 2 Tier 2
  calibrated top-of-atmosphere (TOA) reflectance.
  Calibration coefficients are extracted from the image metadata.
  See [Chander et al. (2009)](https://www.sciencedirect.com/science/article/pii/S0034425709000169)
  for details on the TOA computation.

Note that [Landsat 7's orbit has been drifting to an earlier acquisition time since
2017](https://www.sciencedirect.com/science/article/pii/S2666017221000134?via%3Dihub).

## Coverage and time range

- Coverage: Coverage: global; time span: 2003 to 2024; resolution: 15-60 m (multispectral 30 m).
- Time range: 2003-12-01 至 2024-01-19

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| B1 | Blue | 30 | 0.45 - 0.52 &mu;m |
| B2 | Green | 30 | 0.52 - 0.60 &mu;m |
| B3 | Red | 30 | 0.63 - 0.69 &mu;m |
| B4 | Near infrared | 30 | 0.77 - 0.90 &mu;m |
| B5 | Shortwave infrared 1 | 30 | 1.55 - 1.75 &mu;m |
| B6_VCID_1 | Low-gain Thermal Infrared 1. This band has expanded dynamic range and lower radiometric resolution (sensitivity), with less saturation at high Digital Number (DN) values. Resampled from 60m to 30m. | 60 | 10.40 - 12.50 &mu;m |
| B6_VCID_2 | High-gain Thermal Infrared 1. This band has higher radiometric resolution (sensitivity), although it has a more restricted dynamic range. Resampled from 60m to 30m. | 60 | 10.40 - 12.50 &mu;m |
| B7 | Shortwave infrared 2 | 30 | 2.08 - 2.35 &mu;m |
| B8 | Panchromatic | 15 | 0.52 - 0.90 &mu;m |
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
var dataset = ee.ImageCollection('LANDSAT/LE07/C02/T2_TOA');
```

- Earth Engine ID: `LANDSAT/LE07/C02/T2_TOA`
- Providers: USGS/Google, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LE07_C02_T2_TOA

## License and citation

- License: PDDL-1.0
- Keywords: c2, global, landsat, satellite-imagery, toa, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [USGS Landsat 7 Collection 2 Tier 1 TOA Reflectance](/en/pages/1810cfa0/)
- [USGS Landsat 7 Collection 2 Tier 1 and Real-Time data TOA Reflectance](/en/pages/5228855d/)
- [USGS Landsat 7 Collection 2 Tier 1 and Real-Time data Raw Scenes](/en/pages/50ce2d44/)
- [USGS Landsat 7 Collection 2 Tier 1 Raw Scenes](/en/pages/809111b6/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
