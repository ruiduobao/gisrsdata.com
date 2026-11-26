---
title: "TIGER: US Census Tracts Demographic - Profile 1"
date: 2026-11-03 12:00:00
---

# TIGER: US Census Tracts Demographic - Profile 1

Original name: TIGER: US Census Tracts Demographic - Profile 1

## What this dataset is

The United States Census Bureau regularly releases
a geodatabase named TIGER. This table contains the 2010 census
Demographic Profile 1 values aggregated by census tract. Tract
areas vary tremendously, but in urban areas are roughly equivalent
to a neighborhood. There are about 74,000 polygon features covering
the United States, the District of Columbia, Puerto Rico, and
the [Island areas](https://www.census.gov/data/tables/2010/dec/2010-island-areas.html).

For full technical details on all TIGER 2010 products, see
the [TIGER technical documentation](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2010/TGRSHP10SF1.pdf).

Each tract also includes attributes with sums of the DP1
population measurements that intersect the boundary. The columns
have the same name as the shortname column in the [DP1 lookup
table](https://developers.google.com/earth-engine/tiger_2010_tract_dp1_metadata).

## Coverage and time range

- Coverage: Spatial: United States (incl. DC, Puerto Rico and Island Areas); temporal: 2010; type: vector/table.
- Time range: 2010-01-01 至 2010-01-02

## Resolution and specifications

- Data type: FeatureCollection, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
| aland10 | DOUBLE | Land area |
| awater10 | DOUBLE | Water area |
| geoid10 | STRING | Census tract identifier: a concatenation of state FIPS code, county FIPS code, and census tract code |
| intptlat10 | STRING | Latitude of the internal point |
| intptlon10 | STRING | Longitude of the internal point |
| namelsad10 | STRING | Legal/statistical area description and the census tract name |
| shape_area | DOUBLE | Area in square degrees |
| shape_leng | DOUBLE | Perimeter in degrees |

## What you can use it for

- Serve as base maps and attribute tables for US census geography.
- Spatially join and map population and socio-economic data.
- Provide administrative boundaries for siting and regional analysis.

## How to get it

In Earth Engine:

```js
var dataset = ee.FeatureCollection('TIGER/2010/Tracts_DP1');
```

- Earth Engine ID: `TIGER/2010/Tracts_DP1`
- Providers: United States Census Bureau, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/TIGER_2010_Tracts_DP1

## License and citation

- License: proprietary
- Keywords: census, demographic, human, infrastructure-boundaries, social, table, tiger, us
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [TIGER: US Census Block Groups (BG) 2010](/pages/121edc81/)
- [TIGER: US Census Blocks](/pages/86b83027/)
- [TIGER: US Census 5-digit ZIP Code Tabulation Areas 2010 [deprecated]](/pages/1eaf6b31/)
- [GHSL: Global population surfaces 1975-2030 (P2023A)](/en/pages/cf948667/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
