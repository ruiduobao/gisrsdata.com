---
title: "Spain RGB orthophotos 10 cm"
date: 2026-11-03 12:00:00
---

# Spain RGB orthophotos 10 cm

Original name: Spain RGB orthophotos 10 cm

## What this dataset is

Mosaics of orthophotos from flights carried out between 2007 and 2018 by
various public administration bodies at 10cm pixel resolution.
This data is provided by National Plan for Aerial Orthophotography Spain
([PNOA](https://pnoa.ign.es)).

For more information, please see the
[Spain orthophotos documentation](https://pnoa.ign.es/web/portal/pnoa-imagen/proceso-fotogrametrico)

## Coverage and time range

- Coverage: Spatial: Spain; temporal: 2007 to 2019; resolution: 0.1 m.
- Time range: 2007-01-01 至 2019-01-01

## Resolution and specifications

- Spatial resolution: about 0.1 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| R | Red | 0.1 |  |
| G | Green | 0.1 |  |
| B | Blue | 0.1 |  |

## What you can use it for

- Serve as a high-resolution base map and ground-truth reference.
- Detailed mapping of cities, farmland and infrastructure.
- Centimetre-level imagery samples for change detection.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('Spain/PNOA/PNOA10');
```

- Earth Engine ID: `Spain/PNOA/PNOA10`
- Providers: Spain orthophotos, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Spain_PNOA_PNOA10

## License and citation

- License: proprietary
- Keywords: orthophotos, pnoa, rgb, spain
- 数据引用：National Geographic Institute Spain

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/en/pages/4a61128e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
