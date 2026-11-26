---
title: "USGS Landsat 4 TM Collection 2 Tier 1 Raw Scenes"
date: 2026-11-03 12:00:00
---

# USGS Landsat 4 TM Collection 2 Tier 1 Raw Scenes

Original name: USGS Landsat 4 TM Collection 2 Tier 1 Raw Scenes

## What this dataset is

Landsat 4 TM Collection 2 Tier 1 DN values, representing scaled, calibrated at-sensor radiance.

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
var dataset = ee.ImageCollection('LANDSAT/LT04/C02/T1');
```

- Earth Engine ID: `LANDSAT/LT04/C02/T1`
- Providers: USGS, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LT04_C02_T1

## License and citation

- License: PDDL-1.0
- Keywords: c2, global, l4, landsat, lt4, radiance, satellite-imagery, t1, tier1, tm, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [USGS Landsat 4 Level 2, Collection 2, Tier 1](/pages/f614ca66/)
- [USGS Landsat 4 Level 2, Collection 2, Tier 2](/pages/39a188bd/)
- [USGS Landsat 4 TM Collection 2 Tier 1 TOA Reflectance](/pages/6222b0dd/)
- [USGS Landsat 4 TM Collection 2 Tier 2 Raw Scenes](/pages/2240c9fe/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
