---
title: "WAPOR Dekadal Transpiration 2.0"
date: 2026-11-03 12:00:00
---

# WAPOR Dekadal Transpiration 2.0

Original name: WAPOR Dekadal Transpiration 2.0

## What this dataset is

The transpiration (T) data component (dekadal, in mm/day) is the actual
transpiration of the vegetation canopy. The value of each pixel represents
the average daily actual transpiration for that specific dekad.

## Coverage and time range

- Coverage: WaPOR project coverage area
- Time range: 2009-01-01 至 2023-03-01

## Resolution and specifications

- Spatial resolution: about 248.2 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| L1_T_D | Transpiration (Dekadal) [mm] | 248.2 |  |

## What you can use it for

- Irrigation water use and water productivity assessment
- Crop water demand and irrigation scheduling
- Drought monitoring and agricultural water management

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('FAO/WAPOR/2/L1_T_D');
```

- Earth Engine ID: `FAO/WAPOR/2/L1_T_D`
- Providers: FAO UN, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/FAO_WAPOR_2_L1_T_D

## License and citation

- License: proprietary
- Keywords: agriculture, fao, wapor, water, water-vapor
- 数据引用：FAO 2018. WaPOR Database Methodology: Level 1. Remote Sensing for Water
Productivity Technical Report: Methodology Series. Rome, FAO. 72 pages.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [WAPOR Actual Evapotranspiration and Interception 2.0](/pages/f46d014b/)
- [WAPOR Actual Evapotranspiration and Interception 3.0](/pages/aca03f09/)
- [WAPOR Daily Reference Evapotranspiration 2.0](/pages/8bd45090/)
- [WAPOR Daily Reference Evapotranspiration 3.0](/pages/c0820d5a/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
