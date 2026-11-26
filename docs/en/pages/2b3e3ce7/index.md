---
title: "WAPOR Dekadal Interception 3.0"
date: 2026-11-03 12:00:00
---

# WAPOR Dekadal Interception 3.0

Original name: WAPOR Dekadal Interception 3.0

## What this dataset is

The interception (I) data component (dekadal, in mm/day) represents the evaporation
of intercepted rainfall from the vegetation canopy. Interception is the process
where rainfall is captured by the leaves. Part of this captured rainfall will
evaporate again. The value of each pixel represents the average daily evaporated
interception for that specific dekad.

## Coverage and time range

- Coverage: WaPOR project coverage area
- Time range: 2009-01-01 至 2026-10-11

## Resolution and specifications

- Spatial resolution: about 326.13 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| L1-I-D | Interception (Dekadal) [mm] | 326.13 |  |

## What you can use it for

- Irrigation water use and water productivity assessment
- Crop water demand and irrigation scheduling
- Drought monitoring and agricultural water management

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('FAO/WAPOR/3/L1_I_D');
```

- Earth Engine ID: `FAO/WAPOR/3/L1_I_D`
- Providers: FAO UN, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/FAO_WAPOR_3_L1_I_D

## License and citation

- License: proprietary
- Keywords: agriculture, fao, wapor, water, water-vapor
- 数据引用：FAO 2023. WaPOR Database Methodology: Level 1. Remote Sensing for Water Productivity
Technical Report: Methodology Series. Rome, FAO. 72 pages.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [WAPOR Actual Evapotranspiration and Interception 2.0](/pages/f46d014b/)
- [WAPOR Actual Evapotranspiration and Interception 3.0](/pages/aca03f09/)
- [WAPOR Daily Reference Evapotranspiration 2.0](/pages/8bd45090/)
- [WAPOR Daily Reference Evapotranspiration 3.0](/pages/c0820d5a/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
