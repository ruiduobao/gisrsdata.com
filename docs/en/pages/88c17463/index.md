---
title: "Landsat Collection 2 Tier 1 Level 2 Annual NBR Composite"
date: 2026-11-03 12:00:00
---

# Landsat Collection 2 Tier 1 Level 2 Annual NBR Composite

Original name: Landsat Collection 2 Tier 1 Level 2 Annual NBR Composite

## What this dataset is

These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.

The Normalized Burn Ratio Thermal (NBRT) index is
generated from the Near-IR, Mid-IR (2215 nm), and Thermal bands, and
has a range from -1.0 to 1.0. See
[Holden et al. (2005)](https://www.tandfonline.com/doi/abs/10.1080/01431160500239008)
for details.

These composites are created from
all the scenes in
each annual period beginning from the first day of the year and
continuing to the last day of the year.  All the images from each year
are included in the composite, with the most recent pixel as the composite value.

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
- Time range: 1984-01-01 至 2026-01-01

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| NBR | Normalized Burn Ratio Thermal | 30 |  |

## What you can use it for

- Long time-series surface reflectance analysis
- Land-cover change monitoring
- Vegetation index time series

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('LANDSAT/COMPOSITES/C02/T1_L2_ANNUAL_NBR');
```

- Earth Engine ID: `LANDSAT/COMPOSITES/C02/T1_L2_ANNUAL_NBR`
- Providers: USGS, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_COMPOSITES_C02_T1_L2_ANNUAL_NBR

## License and citation

- License: proprietary
- Keywords: fire, landsat, landsat-composite, nbrt, usgs, vegetation-indices
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Landsat Collection 2 Tier 1 Level 2 32-Day BAI Composite](/pages/dadba6a4/)
- [Landsat Collection 2 Tier 1 Level 2 32-Day NBR Composite](/pages/0f909690/)
- [Landsat Collection 2 Tier 1 Level 2 8-Day BAI Composite](/pages/2457b55b/)
- [Landsat Collection 2 Tier 1 Level 2 8-Day NBR Composite](/pages/4b8ec6f8/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
