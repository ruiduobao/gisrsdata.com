---
title: "FAO GAUL: Global Administrative Unit Layers 2015, Country Boundaries"
date: 2026-11-03 12:00:00
---

# FAO GAUL: Global Administrative Unit Layers 2015, Country Boundaries

Original name: FAO GAUL: Global Administrative Unit Layers 2015, Country Boundaries

## What this dataset is

The Global Administrative Unit Layers (GAUL) compiles and disseminates the
best available information on administrative units for all the countries in
the world, providing a contribution to the standardization of the spatial
dataset representing administrative units. The GAUL always maintains global
layers with a unified coding system at country, first (e.g. departments),
and second administrative levels (e.g. districts). Where data is available,
it provides layers on a country by country basis down to third, fourth, and
lowers levels. The overall methodology consists in a) collecting the best
available data from most reliable sources, b) establishing validation
periods of the geographic features (when possible), c) adding selected data
to the global layer based on the last country boundaries map provided by
the UN Cartographic Unit (UNCS), d) generating codes using GAUL Coding
System, and e) distribute data to the users
(see [Technical Aspects of the GAUL Distribution Set](
  https://data.apps.fao.org:/map/catalog/srv/api/records/9c35ba10-5649-41c8-bdfc-eb78e9e65654/attachments/GAUL2015_Documentation.zip).
Note that some administrative units are multipolygon features.

## Coverage and time range

- Coverage: Global
- Time range: 2014-12-19 至 2014-12-19

## Resolution and specifications

- Data type: FeatureCollection, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
| ADM0_CODE | INT | GAUL country code |
| ADM0_NAME | STRING | UN country name |
| DISP_AREA | STRING | Unsettled territory: 'Yes' or 'No' |
| STATUS | STRING | Status of the country |
| Shape_Area | DOUBLE | Shape area |
| Shape_Leng | DOUBLE | Shape length |
| EXP0_YEAR | INT | Expiry year of the administrative unit |
| STR0_YEAR | INT | Creation year of the administrative unit |

## What you can use it for

- Global administrative boundary base map
- Summarizing statistics by administrative unit
- Boundary reference for mapping and spatial analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.FeatureCollection('FAO/GAUL/2015/level0');
```

- Earth Engine ID: `FAO/GAUL/2015/level0`
- Providers: FAO UN, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/FAO_GAUL_2015_level0

## License and citation

- License: proprietary
- Keywords: borders, countries, fao, gaul, infrastructure-boundaries, table, un
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [FAO GAUL: Global Administrative Unit Layers 2025, First-Level Administrative Units](/pages/f5c20320/)
- [FAO GAUL: Global Administrative Unit Layers 2025, Second-Level Administrative Units](/pages/71ed3542/)
- [FAO GAUL: Global Administrative Unit Layers 2015, First-Level Administrative Units [deprecated]](/pages/2a1a3734/)
- [FAO GAUL: Global Administrative Unit Layers 2015, Second-Level Administrative Units [deprecated]](/pages/4cca3b45/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
