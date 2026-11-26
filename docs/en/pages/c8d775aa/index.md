---
title: "MODIS Terra Daily NDSI [deprecated]"
date: 2026-11-03 12:00:00
---

# MODIS Terra Daily NDSI [deprecated]

Original name: MODIS Terra Daily NDSI [deprecated]

## What this dataset is

The Normalized Difference Snow Index is used to
identify snow, based on its characteristically higher reflectance in
the visible portion of the spectrum compared to the mid-IR.  NDSI is
computed using the Green and Mid-IR bands, and has a range of -1.0 to
1.0. See
[Riggs et al. (1994)](https://doi.org/10.1109/IGARSS.1994.399618)
for details. This product is generated from the MODIS/MOD09GA surface reflectance composites.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2017; resolution: about 463.3 m.
- Time range: 2000-02-24 至 2017-03-30

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| NDSI | Normalized Difference Snow Index | 463.312716528 |  |

## What you can use it for

- Vegetation and surface index analysis
- Fire and snow thematic applications
- Long time-series monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/MOD09GA_NDSI');
```

- Earth Engine ID: `MODIS/MOD09GA_NDSI`
- Providers: Google, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09GA_NDSI

## License and citation

- License: proprietary
- Keywords: daily, global, mod09ga, modis, ndsi, surface-reflectance, terra, usgs, vegetation-indices
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)](/en/pages/e9028b43/)
- [GCOM-C/SGLI L3 Leaf Area Index (V1)](/en/pages/099c4e7b/)
- [GCOM-C/SGLI L3 Leaf Area Index (V2)](/en/pages/9acc1a9f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
