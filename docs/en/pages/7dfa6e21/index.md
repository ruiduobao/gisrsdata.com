---
title: "GFW (Global Fishing Watch) Daily Fishing Hours"
date: 2026-11-03 12:00:00
---

# GFW (Global Fishing Watch) Daily Fishing Hours

Original name: GFW (Global Fishing Watch) Daily Fishing Hours

## What this dataset is

Fishing effort, measured in hours of inferred fishing activity. Each asset
is the effort for a given flag state and day, with one band for the
fishing activity of each gear type.

See [sample Earth Engine
scripts](https://globalfishingwatch.org/research/global-footprint-of-fisheries/).
Also see [the main GFW site](https://GlobalFishingWatch.org) for program
information, fully interactive visualization maps, and impacts.

## Coverage and time range

- Coverage: Global oceans
- Time range: 2012-01-01 至 2017-01-01

## Resolution and specifications

- Spatial resolution: about 1,113.2 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| drifting_longlines | Hours per sq. km of fishing with drifting longlines. | 1113.2 |  |
| fixed_gear | Hours per sq. km of fishing with fixed gear. | 1113.2 |  |
| other_fishing | Hours per sq. km of fishing with other gear types. | 1113.2 |  |
| purse_seines | Hours per sq. km of fishing with purse seines. | 1113.2 |  |
| squid_jigger | Hours per sq. km of fishing with squid jiggers. | 1113.2 |  |
| trawlers | Hours per sq. km of fishing with trawlers. | 1113.2 |  |

## What you can use it for

- Mapping global fishing effort
- Illegal fishing monitoring
- Marine protected area enforcement support

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('GFW/GFF/V1/fishing_hours');
```

- Earth Engine ID: `GFW/GFF/V1/fishing_hours`
- Providers: Global Fishing Watch, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/GFW_GFF_V1_fishing_hours

## License and citation

- License: CC-BY-SA-4.0
- Keywords: fishing, gfw, monthly, oceans
- 数据引用：Global Fishing Watch, "Tracking the Global Footprint of Fisheries." Science 361.6378 (2018).

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GFW (Global Fishing Watch) Daily Vessel Hours](/pages/37ea4824/)
- [Global Ocean Colour — Optics, Multi-Sensor 4 km Monthly](/en/pages/b4a5e847/)
- [Global Ocean Colour — Primary Production, Multi-Sensor 4 km](/en/pages/6396836c/)
- [Global Ocean Colour — Reflectance, OLCI 300 m](/en/pages/f4ffb7b4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
