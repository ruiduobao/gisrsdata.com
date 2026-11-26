---
title: "Netherlands orthophotos"
date: 2026-11-03 12:00:00
---

# Netherlands orthophotos

Original name: Netherlands orthophotos

## What this dataset is

Orthophotos of Netherlands is a set of color orthoimages. Two nationwide
aerial photographs are collected per year: a leafless image at 7.5 cm
resolution in the spring and one with leaves on trees at 25 cm resolution
in the summer.

For more information, please see the
[Netherlands orthophotos documentation](https://opendata.beeldmateriaal.nl/)

## Coverage and time range

- Coverage: Spatial: the Netherlands; temporal: 2021 to 2022 (two flights per year); resolution: 0.08 m.
- Time range: 2021-01-01 至 2022-12-31

## Resolution and specifications

- Spatial resolution: about 0.08 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| R | Red | 0.08 |  |
| G | Green | 0.08 |  |
| B | Blue | 0.08 |  |

## What you can use it for

- Centimetre-level mapping of cities and farmland.
- High-resolution samples for change detection and land-cover classification.
- Base map and ground-truth reference.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('Netherlands/Beeldmateriaal/LUCHTFOTO_RGB');
```

- Earth Engine ID: `Netherlands/Beeldmateriaal/LUCHTFOTO_RGB`
- Providers: Beeldmateriaal Nederland, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Netherlands_Beeldmateriaal_LUCHTFOTO_RGB

## License and citation

- License: CC-BY-4.0
- Keywords: netherlands, orthophotos, rgb
- 数据引用：opendata.beeldmaterial.nl

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/en/pages/4a61128e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
