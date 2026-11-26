---
title: "MOD44W.006 Terra Land Water Mask Derived From MODIS and SRTM Yearly Global 250m"
date: 2026-11-03 12:00:00
---

# MOD44W.006 Terra Land Water Mask Derived From MODIS and SRTM Yearly Global 250m

Original name: MOD44W.006 Terra Land Water Mask Derived From MODIS and SRTM Yearly Global 250m

## What this dataset is

The MOD44W V6 land/water mask 250m product is derived using a
decision tree classifier trained with MODIS data and validated with the
MOD44W V5 product. A series of masks are applied to address known issues
caused by terrain shadow, burn scars, cloudiness, or ice cover in oceans.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2015; resolution: 250 m.
- Time range: 2000-01-01 至 2015-01-01

## Resolution and specifications

- Spatial resolution: about 250 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| water_mask | Land-water mask | 250 |  |
| water_mask_QA | Quality assurance (QA) | 250 |  |

## What you can use it for

- Land-water mask production
- Water mapping support
- Land-cover classification support

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/006/MOD44W');
```

- Earth Engine ID: `MODIS/006/MOD44W`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD44W

## License and citation

- License: proprietary
- Keywords: geophysical, mod44w, modis, nasa, srtm, surface-ground-water, usgs, water-mask
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD44W.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GFPLAIN250m: Global 250m Floodplain Dataset](/en/pages/fcae03ea/)
- [GLCF: Landsat Global Inland Water](/en/pages/500a347f/)
- [GRIDMET DROUGHT: CONUS Drought Indices](/en/pages/f6533466/)
- [JRC Global Surface Water Metadata, v1.4](/en/pages/1f03ce37/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
