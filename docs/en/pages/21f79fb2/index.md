---
title: "Latvia RGB orthophotos"
date: 2026-11-03 12:00:00
---

# Latvia RGB orthophotos

Original name: Latvia RGB orthophotos

## What this dataset is

In Latvia, orthophoto maps are prepared in the Latvian coordinate system
LKS-92 TM according to the TKS-93 map sheet division (scale 1:10000 map
sheet corresponds to 5 x 5 kilometers in nature). Orthophoto maps are
prepared for the whole territory of Latvia at the scale of
1:10000, but for separate territories - for cities and densely populated
areas - at the scale of 1:2000 or 1:1000.

The RGB dataset has three bands: red, green, and blue.

For more information, please see the
[Latvia orthophotos documentation](https://www.lgia.gov.lv/lv/ortofotokartes-1)

## Coverage and time range

- Coverage: Coverage: all of Latvia; time span: 2007 to 2018; resolution: 0.2 m.
- Time range: 2007-01-01 至 2018-01-01

## Resolution and specifications

- Spatial resolution: about 0.2 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| R | Red | 0.2 |  |
| G | Green | 0.2 |  |
| B | Blue | 0.2 |  |

## What you can use it for

- Orthophoto basemaps and measurement
- Land use and cadastral surveys
- Urban and agricultural monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('Latvia/Maamet/orthos/rgb');
```

- Earth Engine ID: `Latvia/Maamet/orthos/rgb`
- Providers: Latvia orthophotos, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/Latvia_Maamet_orthos_rgb

## License and citation

- License: CC-BY-4.0
- Keywords: latvia, orthophotos, rgb
- 数据引用：Latvijas Geospatial Information Agency

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Latvia Color InfraRed (CIR) orthophotos](/pages/7a7e34c9/)
- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
