---
title: "Landsat Collection 2 Tier 1 Level 2 32-Day EVI Composite"
date: 2026-11-03 12:00:00
---

# Landsat Collection 2 Tier 1 Level 2 32-Day EVI Composite

Original name: Landsat Collection 2 Tier 1 Level 2 32-Day EVI Composite

## What this dataset is

These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.

The Enhanced Vegetation Index (EVI) is generated from the
Near-IR, Red and Blue bands of each scene, and ranges in value from
-1.0 to 1.0. See
[Huete et al. (2002)](https://www.sciencedirect.com/science/article/pii/S0034425702000962)
for details.

These composites are created from
all the scenes in
each 32-day period beginning from the first day of the year and
continuing to the 352nd day of the year.  The last composite of the
year, beginning on day 353, will overlap the first composite of the
following year by 20 days.  All the images from each 32-day period are
included in the composite, with the most recent pixel as the composite value.

Notes:

* The code used to create the composites
  [can be seen here](https://github.com/google/earthengine-catalog/blob/main/pipelines/landsat.py).

* Only daytime images with WRS_ROW < 122 are included.

* For Landsat 7 , images after 2017-01-01 are excluded due to orbital drift.

* For Landsat 8, images before 2013-05-01 are excluded due to pointing issues.

**Caution:**  These composites are computed on the fly and count towards
the requesting project's
[EECU](https://developers.google.com/earth-engine/guides/computation_overview#eecus)
usage.

## Coverage and time range

- Coverage: Coverage: global land; time span: 1984 to present; resolution: 30 m.
- Time range: 1984-01-01 至 2026-10-16

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| EVI | Enhanced Vegetation Index | 30 |  |

## What you can use it for

- Long time-series surface reflectance analysis
- Land-cover change monitoring
- Vegetation index time series

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('LANDSAT/COMPOSITES/C02/T1_L2_32DAY_EVI');
```

- Earth Engine ID: `LANDSAT/COMPOSITES/C02/T1_L2_32DAY_EVI`
- Providers: Google, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_COMPOSITES_C02_T1_L2_32DAY_EVI

## License and citation

- License: proprietary
- Keywords: evi, landsat, landsat-composite, usgs, vegetation, vegetation-indices
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Landsat Collection 2 Tier 1 Level 2 32-Day NDVI Composite](/pages/b9129bcd/)
- [Landsat Collection 2 Tier 1 Level 2 8-Day EVI Composite](/pages/8d96143c/)
- [Landsat Collection 2 Tier 1 Level 2 8-Day NDVI Composite](/pages/a7ccdab3/)
- [Landsat Collection 2 Tier 1 Level 2 Annual EVI Composite](/pages/31230e0d/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
