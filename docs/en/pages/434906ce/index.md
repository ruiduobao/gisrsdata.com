---
title: "GHSL: Global Human Settlement Layers, Population Grid 1975-1990-2000-2015 (P2016) [deprecated]"
date: 2026-11-03 12:00:00
---

# GHSL: Global Human Settlement Layers, Population Grid 1975-1990-2000-2015 (P2016) [deprecated]

Original name: GHSL: Global Human Settlement Layers, Population Grid 1975-1990-2000-2015 (P2016) [deprecated]

## What this dataset is

The GHSL relies on the design and implementation of new spatial data mining
technologies allowing to automatically process and extract analytics and
knowledge from large amount of heterogeneous data including: global,
fine-scale satellite image data streams, census data, and crowd sources or
volunteered geographic information sources.

This dataset depicts the distribution and density of population, expressed
as the number of people per cell, for reference epochs: 1975, 1990, 2000,
2015.

Residential population estimates were provided by CIESIN GPW v4. These were
disaggregated from census or administrative units to grid cells, informed by
the distribution and density of built-up as mapped in the GHSL global layer
per corresponding epoch. (See ["Development of New Open and Free
Multi-temporal Global Population Grids at 250 m
Resolution."](https://publications.jrc.ec.europa.eu/repository/handle/JRC100523))

This dataset was produced in the World Mollweide projection (EPSG:54009).

For more information visit: [https://ghsl.jrc.ec.europa.eu/ghs_pop.php](https://ghsl.jrc.ec.europa.eu/ghs_pop.php).

The Global Human Settlement Layer (GHSL) project is supported by the
European Commission, Joint Research Center, and Directorate-General for
Regional and Urban Policy. The GHSL produces new global spatial information,
evidence-based analytics, and knowledge describing the human presence in
the planet.

## Coverage and time range

- Coverage: Coverage: global; time: epochs 1975, 1990, 2000 and 2015; resolution: 250 m; projection: World Mollweide (EPSG:54009).
- Time range: 1975-01-01 至 2015-12-31

## Resolution and specifications

- Spatial resolution: about 250 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| population_count | Number of people per cell | 250 |  |

## What you can use it for

- Global population distribution mapping
- Urbanisation research
- Public service accessibility analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2016/POP_GPW_GLOBE_V1');
```

- Earth Engine ID: `JRC/GHSL/P2016/POP_GPW_GLOBE_V1`
- Providers: EC JRC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2016_POP_GPW_GLOBE_V1

## License and citation

- License: proprietary
- Keywords: ciesin-derived, ghsl, jrc, population
- 数据引用：European Commission, Joint Research Centre (JRC); Columbia University,
Center for International Earth Science Information Network - CIESIN (2015):
GHS population grid, derived from GPW4, multitemporal (1975, 1990, 2000,
2015). European Commission, Joint Research Centre (JRC) [Dataset]
PID: [https://data.europa.eu/89h/jrc-ghsl-ghs_pop_gpw4_globe_r2015a](https://data.europa.eu/89h/jrc-ghsl-ghs_pop_gpw4_globe_r2015a)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GHSL: Global population surfaces 1975-2030 (P2023A)](/pages/cf948667/)
- [LandScan High Definition Data for Ukraine, January 2022](/en/pages/c7a57ce4/)
- [GPWv4.11: Population Density](/en/pages/f230ed9d/)
- [GPWv4.11: Population Count](/en/pages/9cd921b2/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
