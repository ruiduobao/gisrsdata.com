---
title: "USGS Landsat 5 MSS Collection 2 Tier 1 Raw Scenes"
date: 2026-11-03 12:00:00
---

# USGS Landsat 5 MSS Collection 2 Tier 1 Raw Scenes

Original name: USGS Landsat 5 MSS Collection 2 Tier 1 Raw Scenes

## What this dataset is

Landsat 5 MSS Collection 2 Tier 1 DN values, representing scaled, calibrated at-sensor radiance.

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

- Coverage: Coverage: global; time span: 1984 to 2013; resolution: 60 m.
- Time range: 1984-04-07 至 2013-01-01

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| B1 | Green | 60 | 0.5 - 0.6 &mu;m |
| B2 | Red | 60 | 0.6 - 0.7 &mu;m |
| B3 | Near Infrared 1 | 60 | 0.7 - 0.8 &mu;m |
| B4 | Near Infrared 2 | 30 | 0.8 - 1.1 &mu;m |
| QA_PIXEL | Landsat Collection 2 MSS QA Bitmask | 30 |  |
| QA_RADSAT | Radiometric saturation QA | 30 |  |

## What you can use it for

- Landsat image search and analysis
- Surface reflectance and land surface temperature applications
- Long time-series land-cover monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('LANDSAT/LM05/C02/T1');
```

- Earth Engine ID: `LANDSAT/LM05/C02/T1`
- Providers: USGS, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LM05_C02_T1

## License and citation

- License: PDDL-1.0
- Keywords: c2, global, l5, landsat, lm5, mss, radiance, satellite-imagery, t1, tier1, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [USGS Landsat 5 MSS Collection 2 Tier 2 Raw Scenes](/pages/419cd5ea/)
- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
