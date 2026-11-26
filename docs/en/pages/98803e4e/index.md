---
title: "Slovakia orthophotos"
date: 2026-11-03 12:00:00
---

# Slovakia orthophotos

Original name: Slovakia orthophotos

## What this dataset is

Orthophotomosaic of the Slovak Republic is a set of color orthoimages
without overlaps, gaps and visible brightness and color differences along
the connecting lines.

For more information, please see the
[Slovakia orthophotos documentation](https://www.geoportal.sk/files/zbgis/orto/technicka_sprava_ortofotomozaika_sr_2017-2019.pdf)

## Coverage and time range

- Coverage: Spatial: Slovakia; temporal: 2017 to 2020; resolution: 0.25 m.
- Time range: 2017-01-01 至 2020-01-01

## Resolution and specifications

- Spatial resolution: about 0.25 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| R | Red | 0.25 |  |
| G | Green | 0.25 |  |
| B | Blue | 0.25 |  |

## What you can use it for

- Serve as a high-resolution base map and ground-truth reference.
- Detailed mapping of cities, farmland and infrastructure.
- Centimetre-level imagery samples for change detection.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('Slovakia/orthos/25cm');
```

- Earth Engine ID: `Slovakia/orthos/25cm`
- Providers: Slovakia orthophotomosaic, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Slovakia_orthos_25cm

## License and citation

- License: proprietary
- Keywords: orthophotos, rgb
- 数据引用：GKU Bratislava, NLC

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/en/pages/4a61128e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
