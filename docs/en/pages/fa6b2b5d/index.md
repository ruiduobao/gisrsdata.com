---
title: "IUCN Global Ecosystem Typology Level 3: 1.0"
date: 2026-11-03 12:00:00
---

# IUCN Global Ecosystem Typology Level 3: 1.0

Original name: IUCN Global Ecosystem Typology Level 3: 1.0

## What this dataset is

The Global Ecosystem Typology is a taxonomy of ecosystems based on
their unique characteristics. It is a global classification system
that provides a consistent framework for describing and classifying
ecological ecosystems.

The Global Ecosystem Typology has six levels. The top three levels
(realms, functional biomes, and ecosystem functional groups) classify
ecosystems based on their overall characteristics, such as their location,
dominant plant life, and ecological processes. The bottom three levels
(regional ecosystem subgroups, global ecosystem types, and subglobal
ecosystem types) focus on specific geographic variants within ecosystem
functional groups and complexes of organisms and their associated physical
environment, providing a more detailed understanding of particular
ecosystems.

This dataset focuses on the third level of the Global Ecosystem Typology:
Ecosystem Functional Group. It's defined as a group of related ecosystems
within a biome that share common ecological drivers, which in turn promote
similar biotic traits that characterise the group. Derived from the
top-down by subdivision of biomes.

NOTE: Due to the size of some geometries, a simplification algorithm was
applied to each one to reduce their complexity. As many vertices as
possible were discarded without moving the distance from the original
shape more than 100 m. As a result, approximately two dozen rows in the
table collapsed into geometries with 0 area and were removed.

## Coverage and time range

- Coverage: Coverage: global; time: 2023 (v1.0 release); type: vector/table data.
- Time range: 2023-09-14 至 2023-09-14

## Resolution and specifications

- Data type: FeatureCollection, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
| efg_code | STRING | Ecosystem functional group code (e.g., "T1.1" = Tropical/Subtropical lowland rainforests). For a complete taxonomy, see [https://global-ecosystems.org/explore](https://global-ecosystems.org/explore). |
| map_code | STRING | Map code |
| map_version | STRING | Map version |
| occurrence | INT | It indicates whether the specified region contains major occurrences (1) or minor occurrences (2) of the functional group." |

## What you can use it for

- Ecosystem classification and mapping
- Biodiversity and conservation planning
- Ecological assessment and reporting

## How to get it

In Earth Engine:

```js
var dataset = ee.FeatureCollection('IUCN/GlobalEcosystemTypology/current');
```

- Earth Engine ID: `IUCN/GlobalEcosystemTypology/current`
- Providers: International Union for Conservation of Nature and Natural Resources, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/IUCN_GlobalEcosystemTypology_current

## License and citation

- License: CC-BY-4.0
- Keywords: ecosystem, ecosystems, global, table
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CSP gHM: Global Human Modification](/en/pages/1227f44f/)
- [ESA WorldCereal 10 m v100](/en/pages/76b102d2/)
- [ESA WorldCereal Active Cropland 10 m v100](/en/pages/dd6f101f/)
- [ESA WorldCover 10m v100](/en/pages/69070083/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
