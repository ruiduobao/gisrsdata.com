---
title: "Landsat Collection 2 Tier 1 Level 2 8-Day NDWI Composite"
date: 2026-11-03 12:00:00
---

# Landsat Collection 2 Tier 1 Level 2 8-Day NDWI Composite

Original name: Landsat Collection 2 Tier 1 Level 2 8-Day NDWI Composite

## What this dataset is

These Landsat Collection 2 Tier 1 Level 2 composites are made from Tier 1 Level 2 orthorectified scenes.

The Normalized Difference Water Index (NDWI) is designed to delineate open
water features and enhance their presence in imagery while eliminating soil
and terrestrial vegetation features. It is derived from the Green band and 
the Near-Infrared (NIR) band. It ranges in value from -1.0 to 1.0. See
[McFeeters (1996)](https://doi.org/10.1080/01431169608948714)
for details.

These composites are created from
all the scenes in each
8-day period beginning from the first day of the year and continuing
to the 360th day of the year.  The last composite of the year,
beginning on day 361, will overlap the first composite of the
following year by 3 days.  All the images from each 8-day period are
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
- Time range: 1984-01-01 至 2026-11-01

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| NDWI | Normalized Difference Water Index | 30 |  |

## What you can use it for

- Long time-series surface reflectance analysis
- Land-cover change monitoring
- Vegetation index time series

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('LANDSAT/COMPOSITES/C02/T1_L2_8DAY_NDWI');
```

- Earth Engine ID: `LANDSAT/COMPOSITES/C02/T1_L2_8DAY_NDWI`
- Providers: Google, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_COMPOSITES_C02_T1_L2_8DAY_NDWI

## License and citation

- License: proprietary
- Keywords: landsat, landsat-composite, ndwi, surface-ground-water, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Landsat Collection 2 Tier 1 Level 2 32-Day NDWI Composite](/pages/7eef5288/)
- [Landsat Collection 2 Tier 1 Level 2 Annual NDWI Composite](/pages/5849055c/)
- [GFPLAIN250m: Global 250m Floodplain Dataset](/en/pages/fcae03ea/)
- [GLCF: Landsat Global Inland Water](/en/pages/500a347f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
