---
title: "GIMMS NDVI From AVHRR Sensors (3rd Generation)"
date: 2026-11-03 12:00:00
---

# GIMMS NDVI From AVHRR Sensors (3rd Generation)

Original name: GIMMS NDVI From AVHRR Sensors (3rd Generation)

## What this dataset is

GIMMS NDVI is generated from several NOAA's AVHRR sensors for a global
1/12-degree lat/lon grid. The latest version of the GIMMS NDVI dataset
is named NDVI3g (third generation GIMMS NDVI from AVHRR sensors).

## Coverage and time range

- Coverage: Coverage: global; time span: 1981 to 2013; resolution: 9,277 m.
- Time range: 1981-07-01 至 2013-12-16

## Resolution and specifications

- Spatial resolution: about 9,277 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| ndvi | NDVI | 9277 |  |
| qa | QA flag | 9277 |  |

## What you can use it for

- Long-term vegetation change monitoring
- Global change research
- Drought and ecological assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/GIMMS/3GV0');
```

- Earth Engine ID: `NASA/GIMMS/3GV0`
- Providers: NASA/NOAA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_GIMMS_3GV0

## License and citation

- License: proprietary
- Keywords: avhrr, gimms, nasa, ndvi, noaa, vegetation, vegetation-indices
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSIRO Global Biodiversity Indicators](/en/pages/5e19a751/)
- [ESA CCI Above-Ground Biomass for 2007, 2010, 2015-2022 (v6.0)](/en/pages/e9028b43/)
- [GCOM-C/SGLI L3 Leaf Area Index (V1)](/en/pages/099c4e7b/)
- [GCOM-C/SGLI L3 Leaf Area Index (V2)](/en/pages/9acc1a9f/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
