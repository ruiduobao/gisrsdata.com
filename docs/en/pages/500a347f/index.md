---
title: "GLCF: Landsat Global Inland Water"
date: 2026-11-03 12:00:00
---

# GLCF: Landsat Global Inland Water

Original name: GLCF: Landsat Global Inland Water

## What this dataset is

The Global Inland Water dataset shows inland surface water bodies, including
fresh and saline lakes, rivers, and reservoirs.

From the GLS 2000 epoch, 3,650,723 km2 of inland water were identified,
around three quarters of which were in North America and Asia. Boreal
forests and tundra hold the largest portion of inland water, about 40% of
the global total. The data exhibits strong linear correlation with both the
MODIS dataset as well as 30-m resolution datasets over the United States
and Canada. Residual errors were due primarily to the seasonality of water
cover, snow and ice, and residual clouds.

The dataset contains one or more image for each available Landsat WRS2
path/row.

## Coverage and time range

- Coverage: Global land
- Time range: 2000-01-01 至 2000-12-31

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| water | Water classification | 30 |  |

## What you can use it for

- Global inland water distribution mapping
- Lake and reservoir area change monitoring
- Water resources assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('GLCF/GLS_WATER');
```

- Earth Engine ID: `GLCF/GLS_WATER`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/GLCF_GLS_WATER
* [User's guide](https://lpdaac.usgs.gov/documents/1371/GFCC_User_Guide_V1.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1370/GFCC_ATBD.pdf)

## License and citation

- License: proprietary
- Keywords: glcf, landsat-derived, nasa, surface-ground-water, umd, water
- 数据引用：Data Citation: Global Inland Water, {Year, ...}, Global Land Cover
Facility.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GPWv4.11: Water Mask](/en/pages/d70c6d97/)
- [GPWv4.11: Water Area](/en/pages/0f13e587/)
- [BLM AIM TerrADat Terrestrial Field Plots v1](/en/pages/53c74382/)
- [Dynamic Surface Water Extent from Harmonized Landsat Sentinel-2 (DSWx-HLS) V1](/pages/0bb51b32/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
