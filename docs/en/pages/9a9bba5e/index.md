---
title: "USGS Landsat 5 TM Collection 2 Tier 2 Raw Scenes"
date: 2026-11-03 12:00:00
---

# USGS Landsat 5 TM Collection 2 Tier 2 Raw Scenes

Original name: USGS Landsat 5 TM Collection 2 Tier 2 Raw Scenes

## What this dataset is

Landsat 5 TM Collection 2 Tier 2 DN values, representing scaled, calibrated at-sensor radiance.
Scenes not meeting Tier 1 criteria during
processing are assigned to Tier 2. This includes Systematic terrain (L1GT) and
Systematic (L1GS) processed scenes, as well as any L1TP scenes that do not meet
the Tier 1 specifications due to significant cloud cover, insufficient ground
control, and other factors. Users interested in Tier 2 scenes can analyze the
RMSE and other properties to determine the suitability for use in individual
applications and studies. See more information [in the USGS
docs](https://www.usgs.gov/core-science-systems/nli/landsat/landsat-collections).

## Coverage and time range

- Coverage: Coverage: global; time span: 1984 to 2001; resolution: 30 m (thermal 60 m).
- Time range: 1984-03-06 至 2001-02-06

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
var dataset = ee.ImageCollection('LANDSAT/LT05/C02/T2');
```

- Earth Engine ID: `LANDSAT/LT05/C02/T2`
- Providers: USGS, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LT05_C02_T2

## License and citation

- License: PDDL-1.0
- Keywords: c2, global, l5, landsat, lt5, radiance, satellite-imagery, t2, tier2, tm, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [USGS Landsat 5 Level 2, Collection 2, Tier 1](/pages/02094cb5/)
- [USGS Landsat 5 Level 2, Collection 2, Tier 2](/pages/d3ac795f/)
- [USGS Landsat 5 TM Collection 2 Tier 1 Raw Scenes](/pages/c53a9c3b/)
- [USGS Landsat 5 TM Collection 2 Tier 1 TOA Reflectance](/pages/90bf05da/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
