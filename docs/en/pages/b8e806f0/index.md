---
title: "SWISSIMAGE 10 cm RGB imagery"
date: 2026-11-03 12:00:00
---

# SWISSIMAGE 10 cm RGB imagery

Original name: SWISSIMAGE 10 cm RGB imagery

## What this dataset is

The SWISSIMAGE 10 cm orthophoto mosaic is an assembly of new color digital
aerial images over the whole of Switzerland with a ground resolution of
10 cm in the plains and the main alpine valleys and 25 cm in the Alps. It
is updated annually.

For more information, please see the
[SWISSIMAGE10cm_FR documentation](https://backend.swisstopo.admin.ch/fileservice/sdweb-docs-prod-swisstopoch-files/files/2023/11/14/a84642dc-5feb-48e5-af6b-55df4ae7a10b.pdf)

This RGB collection contains digital aerial images with three bands.
Standard deviation for the precision in position: +/- 0.15 m for the ground
sample distance of 0.1 m.

## Coverage and time range

- Coverage: Spatial: Switzerland; temporal: 2017 to 2021 (updated annually); resolution: 0.1 m.
- Time range: 2017-01-01 至 2021-01-01

## Resolution and specifications

- Spatial resolution: about 0.1 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| R | Red | 0.1 | 619-651nm |
| G | Green | 0.1 | 525-585nm |
| B | Blue | 0.1 | 435-495nm |

## What you can use it for

- Serve as a high-resolution base map and ground-truth reference.
- Detailed mapping of cities, farmland and infrastructure.
- Centimetre-level imagery samples for change detection.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('Switzerland/SWISSIMAGE/orthos/10cm');
```

- Earth Engine ID: `Switzerland/SWISSIMAGE/orthos/10cm`
- Providers: Topography swisstopo, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Switzerland_SWISSIMAGE_orthos_10cm

## License and citation

- License: proprietary
- Keywords: orthophotos, rgb, swissimage, swisstopo
- 数据引用：Copyright Federal Office of Topography swisstopo

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/en/pages/4a61128e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
