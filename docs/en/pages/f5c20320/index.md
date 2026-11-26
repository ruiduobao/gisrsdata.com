---
title: "FAO GAUL: Global Administrative Unit Layers 2025, First-Level Administrative Units"
date: 2026-11-03 12:00:00
---

# FAO GAUL: Global Administrative Unit Layers 2025, First-Level Administrative Units

Original name: FAO GAUL: Global Administrative Unit Layers 2025, First-Level Administrative Units

## What this dataset is

The administrative boundaries dataset at level 1 (sub-national level) is part
of the Global Administrative Unit Layers (GAUL 2025) dataset series which
includes information on administrative units for all countries in the world,
providing a contribution to the standardization of the spatial dataset
representing administrative units.

The administrative boundaries at the level 1 dataset distinguishes States,
Provinces, Departments and equivalents.

The GAUL maintains global layers with a unified coding system at country,
first (e.g. departments), and second administrative levels (e.g. districts).
The overall GAUL methodology consists in a) collecting the best available
data from most reliable sources, b) assembling national datasets into a
common dataset by matching international boundaries with a reference
authoritative dataset (UN 2018), c) standardizing attributes to a common
table of attributes, d) generating codes using the GAUL Coding System,
e) applying a topology, and f) validating metadata for each country
(see [Technical Guidelines of the GAUL 2024 Set](
  https://doi.org/10.4060/cd4262en)).
Note that some administrative units are multipolygon features.

## Coverage and time range

- Coverage: Global
- Time range: 2025-01-01 至 2025-12-31

## Resolution and specifications

- Data type: FeatureCollection, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
| FID | INT | Internal feature identifier |
| ISO3_CODE | STRING | ISO 3166-1 alpha-3 country code |
| MAP_CODE | STRING | Map code for statistical joins |
| GAUL0_CODE | INT | GAUL country code |
| GAUL0_NAME | STRING | Country name (UN standard) |
| GAUL1_CODE | INT | GAUL code of administrative units at first level |
| GAUL1_NAME | STRING | Name of administrative units at first level |
| CONTINENT | STRING | Continent name |
| DISP_EN | STRING | Hierarchical display label in English |

## What you can use it for

- Global administrative boundary base map
- Summarizing statistics by administrative unit
- Boundary reference for mapping and spatial analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.FeatureCollection('FAO/GAUL/2025/level1');
```

- Earth Engine ID: `FAO/GAUL/2025/level1`
- Providers: FAO UN, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/FAO_GAUL_2025_level1

## License and citation

- License: CC-BY-4.0
- Keywords: borders, departments, fao, gaul, infrastructure-boundaries, provinces, states, table, un
- 数据引用：FAO. 2025. Global Administrative Unit Layers (GAUL). https://data.apps.fao.org. Licence: CC-BY-4.0


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [FAO GAUL: Global Administrative Unit Layers 2015, Country Boundaries](/pages/7e1341bc/)
- [FAO GAUL: Global Administrative Unit Layers 2025, Second-Level Administrative Units](/pages/71ed3542/)
- [FAO GAUL: Global Administrative Unit Layers 2015, First-Level Administrative Units [deprecated]](/pages/2a1a3734/)
- [FAO GAUL: Global Administrative Unit Layers 2015, Second-Level Administrative Units [deprecated]](/pages/4cca3b45/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
