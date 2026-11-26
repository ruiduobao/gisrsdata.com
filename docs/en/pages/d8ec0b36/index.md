---
title: "TIGER: US Census Block Groups (BG) 2020"
date: 2026-11-03 12:00:00
---

# TIGER: US Census Block Groups (BG) 2020

Original name: TIGER: US Census Block Groups (BG) 2020

## What this dataset is

The United States Census Bureau regularly releases
a geodatabase named TIGER. This dataset contains the 2020 census
[block groups](https://www.census.gov/programs-surveys/geography/about/glossary.html#par_textimage_4),
which is a cluster of blocks within the same census tract that have the same
first digit of their four-digit census block number. There are just over
240,000 polygon features covering the United States, the District
of Columbia, Puerto Rico, and the
Island areas.

For full technical details on all TIGER 2020 products, see the
[TIGER technical documentation](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2020/TGRSHP2020_TechDoc.pdf).

## Coverage and time range

- Coverage: Spatial: United States (incl. DC, Puerto Rico and Island Areas); temporal: 2020; type: vector/table.
- Time range: 2020-01-01 至 2020-01-02

## Resolution and specifications

- Data type: FeatureCollection, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
| ALAND | DOUBLE | Land Area (square meters) |
| AWATER | DOUBLE | Water Area (square meters) |
| BLKGRPCE | STRING | Block Group Code |
| COUNTYFP | STRING | County FIPS Code |
| FUNCSTAT | STRING | Functional Status (S = Statistical) |
| GEOID | STRING | Unique Identifier of Summary Level, Characteristic Iteration, US, State, County, Tract, Block Group Code |
| INTPTLAT | DOUBLE | Internal Point Latitude |
| INTPTLON | DOUBLE | Internal Point Longitude |
| MTFCC | STRING | MAF/TIGER Feature Classification Code |
| NAMELSAD | STRING | Full Name |
| STATEFP | STRING | State FIPS Code |
| TRACTCE | STRING | Census Tract Code |

## What you can use it for

- Serve as base maps and attribute tables for US census geography.
- Spatially join and map population and socio-economic data.
- Provide administrative boundaries for siting and regional analysis.

## How to get it

In Earth Engine:

```js
var dataset = ee.FeatureCollection('TIGER/2020/BG');
```

- Earth Engine ID: `TIGER/2020/BG`
- Providers: United States Census Bureau, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/TIGER_2020_BG

## License and citation

- License: proprietary
- Keywords: census, city, infrastructure-boundaries, neighborhood, table, tiger, urban, us
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [TIGER: 2020 Tabulation (Census) Block ](/pages/17e8e957/)
- [TIGER: US Census 5-digit ZIP Code Tabulation Areas 2020](/pages/c4396997/)
- [TIGER: US Census Tracts](/pages/7862b5d6/)
- [GHSL: Global population surfaces 1975-2030 (P2023A)](/en/pages/cf948667/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
