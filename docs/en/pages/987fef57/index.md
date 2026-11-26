---
title: "MOD44W.005 Land Water Mask Derived From MODIS and SRTM"
date: 2026-11-03 12:00:00
---

# MOD44W.005 Land Water Mask Derived From MODIS and SRTM

Original name: MOD44W.005 Land Water Mask Derived From MODIS and SRTM

## What this dataset is

The Global Water Mask uses the SWBD (SRTM Water Body
Data) in combination with MODIS 250m data to create a complete
global map of surface water at 250m spatial resolution, circa 2000-2002.  This
dataset is intended for use in processing of raster data and for
masking out water in final raster data products.

## Coverage and time range

- Coverage: Coverage: global; time span: circa 2000 (2000-2002); resolution: 250 m.
- Time range: 2000-02-24 至 2000-02-24

## Resolution and specifications

- Spatial resolution: about 250 m
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| water_mask | Land-water mask | 250 |  |
| water_mask_qa | Shows which data source provided the water pixel. | 250 |  |

## What you can use it for

- Water masking and raster preprocessing
- Surface water mapping
- Remote sensing product production

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('MODIS/MOD44W/MOD44W_005_2000_02_24');
```

- Earth Engine ID: `MODIS/MOD44W/MOD44W_005_2000_02_24`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD44W_MOD44W_005_2000_02_24

## License and citation

- License: proprietary
- Keywords: geophysical, mod44w, modis, srtm, surface-ground-water, water-mask
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GFPLAIN250m: Global 250m Floodplain Dataset](/en/pages/fcae03ea/)
- [GLCF: Landsat Global Inland Water](/en/pages/500a347f/)
- [GRIDMET DROUGHT: CONUS Drought Indices](/en/pages/f6533466/)
- [JRC Global Surface Water Metadata, v1.4](/en/pages/1f03ce37/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
