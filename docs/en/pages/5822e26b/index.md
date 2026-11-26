---
title: "MODIS Combined 16-Day BAI"
date: 2026-11-03 12:00:00
---

# MODIS Combined 16-Day BAI

Original name: MODIS Combined 16-Day BAI

## What this dataset is

The Burn Area Index (BAI) is generated from the Red and
Near-IR bands, and measures the spectral distance of each pixel from a
reference spectral point (the measured reflectance of charcoal).  This
index is intended to emphasize the charcoal signal in post-fire
images. See
[Chuvieco et al. (2002)](https://www.tandfonline.com/doi/abs/10.1080/01431160210153129)
for details. This product is generated from the MODIS/006/MCD43A4 surface reflectance composites.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2023; resolution: about 463.3 m.
- Time range: 2000-02-24 至 2023-02-10

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| BAI | Burn Area Index | 463.312716528 |  |

## What you can use it for

- Vegetation and surface index analysis
- Fire and snow thematic applications
- Long time-series monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/MCD43A4_006_BAI');
```

- Earth Engine ID: `MODIS/MCD43A4_006_BAI`
- Providers: Google, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_MCD43A4_006_BAI

## License and citation

- License: proprietary
- Keywords: albedo, bai, brdf, daily, global, mcd43a4, modis, nasa, reflectance, usgs, vegetation-indices
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)](/en/pages/e9028b43/)
- [GCOM-C/SGLI L3 Leaf Area Index (V1)](/en/pages/099c4e7b/)
- [GCOM-C/SGLI L3 Leaf Area Index (V2)](/en/pages/9acc1a9f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
