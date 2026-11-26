---
title: "TIGER: US Census Block Groups (BG) 2010"
date: 2026-11-03 12:00:00
---

# TIGER: US Census Block Groups (BG) 2010

Original name: TIGER: US Census Block Groups (BG) 2010

## What this dataset is

The United States Census Bureau regularly releases
a geodatabase named TIGER. This dataset contains the 2010 census
[block groups](https://www.census.gov/programs-surveys/geography/about/glossary.html#par_textimage_4),
which is a cluster of blocks within the same census tract that have the same
first digit of their four-digit census block number. There are just over
300,000 polygon features covering the United States, the District
of Columbia, Puerto Rico, and the
Island areas.

For full technical details on all TIGER 2010 products, see the
[TIGER technical documentation](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2010/TGRSHP10SF1.pdf).

## Coverage and time range

- Coverage: Spatial: United States (incl. DC, Puerto Rico and Island Areas); temporal: 2010; type: vector/table.
- Time range: 2010-01-01 至 2010-01-02

## Resolution and specifications

- Data type: FeatureCollection, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
| ALAND10 | DOUBLE | Land Area (square meters) |
| AWATER10 | DOUBLE | Water Area (square meters) |
| BLKGRPCE10 | STRING | Block Group Code |
| COUNTYFP10 | STRING | County FIPS Code |
| FUNCSTAT10 | STRING | Functional Status (S = Statistical) |
| GEOID10 | STRING | Unique Identifier of Summary Level, Characteristic Iteration, US, State, County, Tract, Block Group Code |
| INTPTLAT10 | DOUBLE | Internal Point Latitude |
| INTPTLON10 | DOUBLE | Internal Point Longitude |
| MTFCC10 | STRING | MAF/TIGER Feature Classification Code |
| NAMELSAD10 | STRING | Full Name |
| STATEFP10 | STRING | State FIPS Code |
| TRACTCE10 | STRING | Census Tract Code |

## What you can use it for

- Serve as base maps and attribute tables for US census geography.
- Spatially join and map population and socio-economic data.
- Provide administrative boundaries for siting and regional analysis.

## How to get it

In Earth Engine:

```js
var dataset = ee.FeatureCollection('TIGER/2010/BG');
```

- Earth Engine ID: `TIGER/2010/BG`
- Providers: United States Census Bureau, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/TIGER_2010_BG

## License and citation

- License: proprietary
- Keywords: census, city, infrastructure-boundaries, neighborhood, table, tiger, urban, us
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [TIGER: US Census Blocks](/pages/86b83027/)
- [TIGER: US Census Tracts Demographic - Profile 1](/pages/da325dd6/)
- [TIGER: US Census 5-digit ZIP Code Tabulation Areas 2010 [deprecated]](/pages/1eaf6b31/)
- [GHSL: Global population surfaces 1975-2030 (P2023A)](/en/pages/cf948667/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
