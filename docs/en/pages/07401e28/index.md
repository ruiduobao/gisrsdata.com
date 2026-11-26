---
title: "USGS Landsat 2 MSS Collection 2 Tier 2 Raw Scenes"
date: 2026-11-03 12:00:00
---

# USGS Landsat 2 MSS Collection 2 Tier 2 Raw Scenes

Original name: USGS Landsat 2 MSS Collection 2 Tier 2 Raw Scenes

## What this dataset is

Landsat 2 MSS Collection 2 Tier 2 DN values, representing scaled, calibrated at-sensor radiance.
Scenes not meeting Tier 1 criteria during
processing are assigned to Tier 2. This includes Systematic terrain (L1GT) and
Systematic (L1GS) processed scenes, as well as any L1TP scenes that do not meet
the Tier 1 specifications due to significant cloud cover, insufficient ground
control, and other factors. Users interested in Tier 2 scenes can analyze the
RMSE and other properties to determine the suitability for use in individual
applications and studies. See more information [in the USGS
docs](https://www.usgs.gov/core-science-systems/nli/landsat/landsat-collections).

## Coverage and time range

- Coverage: Coverage: global; time span: 1975 to 1982; resolution: 60 m.
- Time range: 1975-01-24 至 1982-03-12

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| B4 | Green | 60 | 0.5 - 0.6 &mu;m |
| B5 | Red | 60 | 0.6 - 0.7 &mu;m |
| B6 | Near Infrared 1 | 60 | 0.7 - 0.8 &mu;m |
| B7 | Near Infrared 2 | 30 | 0.8 - 1.1 &mu;m |
| QA_PIXEL | Landsat Collection 2 MSS QA Bitmask | 30 |  |
| QA_RADSAT | Radiometric saturation QA | 30 |  |

## What you can use it for

- Landsat image search and analysis
- Surface reflectance and land surface temperature applications
- Long time-series land-cover monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('LANDSAT/LM02/C02/T2');
```

- Earth Engine ID: `LANDSAT/LM02/C02/T2`
- Providers: USGS, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LM02_C02_T2

## License and citation

- License: PDDL-1.0
- Keywords: c2, global, l2, landsat, lm2, mss, radiance, satellite-imagery, t2, tier2, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [USGS Landsat 2 MSS Collection 2 Tier 1 Raw Scenes](/pages/c925fbc2/)
- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
