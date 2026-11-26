---
title: "USGS Landsat 9 Collection 2 Tier 1 TOA Reflectance"
date: 2026-11-03 12:00:00
---

# USGS Landsat 9 Collection 2 Tier 1 TOA Reflectance

Original name: USGS Landsat 9 Collection 2 Tier 1 TOA Reflectance

## What this dataset is

Landsat 9 Collection 2 Tier 1
  calibrated top-of-atmosphere (TOA) reflectance.
  Calibration coefficients are extracted from the image metadata.
  See [Chander et al. (2009)](https://www.sciencedirect.com/science/article/pii/S0034425709000169)
  for details on the TOA computation.

Landsat scenes with the highest available data quality
are placed into Tier 1 and are considered suitable for time-series processing
analysis. Tier 1 includes Level-1 Precision Terrain (L1TP) processed data
that have well-characterized radiometry and are inter-calibrated across the
different Landsat sensors. The georegistration of Tier 1 scenes will be
consistent and within prescribed tolerances [<=12 m root mean square error
(RMSE)]. All Tier 1 Landsat data can be considered consistent and
inter-calibrated (regardless of sensor) across the full collection. See more
information [in the USGS
docs](https://www.usgs.gov/core-science-systems/nli/landsat/landsat-collections).

The T1_RT collection contains both Tier 1 and Real-Time (RT) assets.
Newly-acquired Landsat 7 ETM+ and Landsat 8 OLI/TIRS data are processed
upon downlink but use predicted ephemeris, initial bumper mode parameters,
or initial TIRS line of sight model parameters. The data is placed in the
Real-Time tier and made available for immediate download. Once the data
have been reprocessed with definitive ephemeris, updated bumper mode
parameters and refined TIRS parameters, the products are transitioned to
either Tier 1 or Tier 2 and removed from the Real-Time tier. The transition
delay from Real-Time to Tier 1 or Tier 2 is between 14 and 26 days.

## Coverage and time range

- Coverage: Coverage: global; time span: 2021 to present; resolution: 15-100 m (multispectral 30 m).
- Time range: 2021-10-31 至 2026-11-02

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| B1 | Coastal aerosol | 30 | 0.43 - 0.45 &mu;m |
| B2 | Blue | 30 | 0.45 - 0.51 &mu;m |
| B3 | Green | 30 | 0.53 - 0.59 &mu;m |
| B4 | Red | 30 | 0.64 - 0.67 &mu;m |
| B5 | Near infrared | 30 | 0.85 - 0.88 &mu;m |
| B6 | Shortwave infrared 1 | 30 | 1.57 - 1.65 &mu;m |
| B7 | Shortwave infrared 2 | 30 | 2.11 - 2.29 &mu;m |
| B8 | Band 8 Panchromatic | 15 | 0.50 - 0.68 &mu;m |
| B9 | Cirrus | 30 | 1.36 - 1.38 &mu;m |
| B10 | Thermal infrared 1, resampled from 100m to 30m | 30 | 10.60 - 11.19 &mu;m |
| B11 | Thermal infrared 2, resampled from 100m to 30m | 30 | 11.50 - 12.51 &mu;m |
| QA_PIXEL | Landsat Collection 2 OLI/TIRS QA Bitmask | 30 |  |
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
var dataset = ee.ImageCollection('LANDSAT/LC09/C02/T1_TOA');
```

- Earth Engine ID: `LANDSAT/LC09/C02/T1_TOA`
- Providers: USGS/Google, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC09_C02_T1_TOA

## License and citation

- License: PDDL-1.0
- Keywords: c2, global, landsat, satellite-imagery, toa, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [USGS Landsat 9 Collection 2 Tier 1 Raw Scenes](/pages/e4bd161a/)
- [USGS Landsat 9 Collection 2 Tier 2 Raw Scenes](/pages/9e77eb63/)
- [USGS Landsat 9 Collection 2 Tier 2 TOA Reflectance](/pages/2ee2b33c/)
- [USGS Landsat 9 Level 2, Collection 2, Tier 1](/pages/4ca33bbc/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
