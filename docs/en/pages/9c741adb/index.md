---
title: "MODIS Terra Daily NDWI"
date: 2026-11-03 12:00:00
---

# MODIS Terra Daily NDWI

Original name: MODIS Terra Daily NDWI

## What this dataset is

The Normalized Difference Water Index (NDWI) is sensitive
to changes in liquid water content of vegetation canopies.  It is
derived from the Near-IR band and a second IR band, &approx;1.24&mu;m when
available and the nearest available IR band otherwise.  It ranges in
value from -1.0 to 1.0.  See
[Gao (1996)](https://www.sciencedirect.com/science/article/pii/S0034425796000673)
for details. This product is generated from the MODIS/006/MOD09GA surface reflectance composites.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2023; resolution: about 463.3 m.
- Time range: 2000-02-24 至 2023-02-17

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| NDWI | Normalized Difference Water Index | 463.312716528 |  |

## What you can use it for

- Vegetation and surface index analysis
- Fire and snow thematic applications
- Long time-series monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/MOD09GA_006_NDWI');
```

- Earth Engine ID: `MODIS/MOD09GA_006_NDWI`
- Providers: Google, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09GA_006_NDWI

## License and citation

- License: proprietary
- Keywords: daily, global, mod09ga, modis, ndwi, surface-reflectance, terra, usgs, vegetation-indices
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)](/en/pages/e9028b43/)
- [GCOM-C/SGLI L3 Leaf Area Index (V1)](/en/pages/099c4e7b/)
- [GCOM-C/SGLI L3 Leaf Area Index (V2)](/en/pages/9acc1a9f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
