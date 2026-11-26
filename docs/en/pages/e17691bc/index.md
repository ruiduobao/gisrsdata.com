---
title: "TIGER: US Census States 2016"
date: 2026-11-03 12:00:00
---

# TIGER: US Census States 2016

Original name: TIGER: US Census States 2016

## What this dataset is

The United States Census Bureau TIGER dataset contains the 2016 boundaries
for the primary governmental divisions of the United States. In addition
to the fifty states, the Census Bureau treats the District of Columbia,
Puerto Rico, and each of the island areas (American Samoa, the Commonwealth
of the Northern Mariana Islands, Guam, and the U.S. Virgin Islands) as the
statistical equivalents of States for the purpose of data presentation.
Each feature represents a state or state equivalent.

For full technical details on all TIGER 2016 products, see the [TIGER
technical documentation](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2016/TGRSHP2016_TechDoc.pdf).

## Coverage and time range

- Coverage: Spatial: United States; temporal: 2016; type: vector/table.
- Time range: 2016-01-01 至 2017-01-02

## Resolution and specifications

- Data type: FeatureCollection, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
| ALAND | DOUBLE | Land area |
| AWATER | DOUBLE | Water area |
| DIVISION | STRING | Division code |
| FUNCSTAT | STRING | Functional Status |
| GEOID | STRING | State identifier; state FIPS code |
| INTPTLAT | STRING | Internal point latitude |
| INTPTLON | STRING | Internal point longitude |
| LSAD | STRING | Legal/statistical area description for state |
| MTFCC | STRING | MAF/TIGER feature class code (=G4000) |
| NAME | STRING | State name |
| REGION | STRING | Region code |
| STATEFP | STRING | State FIPS code |
| STATENS | STRING | State GNIS code |
| STUSPS | STRING | US Postal Service state abbreviation |

## What you can use it for

- Serve as base maps and attribute tables for US census geography.
- Spatially join and map population and socio-economic data.
- Provide administrative boundaries for siting and regional analysis.

## How to get it

In Earth Engine:

```js
var dataset = ee.FeatureCollection('TIGER/2016/States');
```

- Earth Engine ID: `TIGER/2016/States`
- Providers: United States Census Bureau, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/TIGER_2016_States

## License and citation

- License: proprietary
- Keywords: census, infrastructure-boundaries, state, states, table, tiger, us
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [TIGER: US Census Counties 2016](/pages/bbd503d0/)
- [TIGER: US Census Roads](/pages/978de92e/)
- [GHSL: Global population surfaces 1975-2030 (P2023A)](/en/pages/cf948667/)
- [LandScan High Definition Data for Ukraine, January 2022](/en/pages/c7a57ce4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
