---
title: "TIGER: US Census Blocks"
date: 2026-11-03 12:00:00
---

# TIGER: US Census Blocks

Original name: TIGER: US Census Blocks

## What this dataset is

The United States Census Bureau regularly releases
a geodatabase named TIGER. This dataset contains the 2010 census
blocks, roughly equivalent to a city block. There are just over
11 million polygon features covering the United States, the District
of Columbia, Puerto Rico, and the
[Island areas](https://www.census.gov/data/tables/2010/dec/2010-island-areas.html).

For full technical details on all TIGER 2010 products, see the
[TIGER technical documentation](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2010/TGRSHP10SF1.pdf).

## Coverage and time range

- Coverage: Spatial: United States (incl. DC, Puerto Rico and Island Areas); temporal: 2010; type: vector/table.
- Time range: 2010-01-01 至 2010-01-02

## Resolution and specifications

- Data type: FeatureCollection, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
| blockce | STRING | 2010 Census tabulation block number |
| blockid10 | STRING | Block identifier: a concatenation of 2010 Census state Federal Information Processing Standards (FIPS) code, county FIPS code, census tract code, and tabulation block number |
| countyfp10 | STRING | County FIPS code |
| housing10 | DOUBLE | 2010 Census number of housing units |
| partflg | STRING | Partial block flag |
| pop10 | DOUBLE | Population total as of 2010 census |
| statefp10 | STRING | 2010 Census state FIPS code |
| tractce10 | STRING | 2010 Census tract code |

## What you can use it for

- Serve as base maps and attribute tables for US census geography.
- Spatially join and map population and socio-economic data.
- Provide administrative boundaries for siting and regional analysis.

## How to get it

In Earth Engine:

```js
var dataset = ee.FeatureCollection('TIGER/2010/Blocks');
```

- Earth Engine ID: `TIGER/2010/Blocks`
- Providers: United States Census Bureau, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/TIGER_2010_Blocks

## License and citation

- License: proprietary
- Keywords: census, city, infrastructure-boundaries, neighborhood, table, tiger, urban, us
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [TIGER: US Census Block Groups (BG) 2010](/pages/121edc81/)
- [TIGER: US Census Tracts Demographic - Profile 1](/pages/da325dd6/)
- [TIGER: US Census 5-digit ZIP Code Tabulation Areas 2010 [deprecated]](/pages/1eaf6b31/)
- [GHSL: Global population surfaces 1975-2030 (P2023A)](/en/pages/cf948667/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
