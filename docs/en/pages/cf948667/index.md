---
title: "GHSL: Global population surfaces 1975-2030 (P2023A)"
date: 2026-11-03 12:00:00
---

# GHSL: Global population surfaces 1975-2030 (P2023A)

Original name: GHSL: Global population surfaces 1975-2030 (P2023A)

## What this dataset is

This raster dataset depicts the spatial distribution of residential
population, expressed as the absolute number of inhabitants of the cell.
Residential population estimates between 1975 and 2020 in 5-year intervals
and projections to 2025 and 2030 derived from CIESIN GPWv4.11 were
disaggregated from census or administrative units to grid cells, informed by
the distribution, volume, and classification of built-up area as mapped in
the [global GHSL built-up surface layers](https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_S)
per epoch.

More information about the GHSL main products can be found in the
[GHSL Data Package 2023 report]
(https://ghsl.jrc.ec.europa.eu/documents/GHSL_Data_Package_2023.pdf?t=1683540422)

The Global Human Settlement Layer (GHSL) project is supported by the
European Commission, Joint Research Center, and Directorate-General for
Regional and Urban Policy.

## Coverage and time range

- Coverage: Coverage: global; time: 1975 to 2030 (5-year intervals; 2025/2030 are projections); resolution: 100 m.
- Time range: 1975-01-01 至 2030-12-31

## Resolution and specifications

- Spatial resolution: about 100 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| population_count | Population count by epoch | 100 |  |

## What you can use it for

- Global population distribution mapping
- Urbanisation research
- Public service accessibility analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2023A/GHS_POP');
```

- Earth Engine ID: `JRC/GHSL/P2023A/GHS_POP`
- Providers: EC JRC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_POP

## License and citation

- License: proprietary
- Keywords: ciesin-derived, ghsl, jrc, population, sdg
- DOI：10.2905/2FF68A52-5B5B-4A22-8F40-C41DA8332CFE

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GHSL: Global Human Settlement Layers, Population Grid 1975-1990-2000-2015 (P2016) [deprecated]](/pages/434906ce/)
- [LandScan High Definition Data for Ukraine, January 2022](/en/pages/c7a57ce4/)
- [GPWv4.11: Population Density](/en/pages/f230ed9d/)
- [GPWv4.11: Population Count](/en/pages/9cd921b2/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
