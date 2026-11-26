---
title: "TIGER: US Census Roads"
date: 2026-11-03 12:00:00
---

# TIGER: US Census Roads

Original name: TIGER: US Census Roads

## What this dataset is

This United States Census Bureau TIGER dataset contains all road segments
from the 2016 release, containing more than 19 million individual
line features covering the United States, the District of Columbia,
Puerto Rico, and the [Island Areas](https://www.census.gov/newsroom/releases/archives/2010_census/press-kits/island-areas.html).
Each feature represents a road segment geometry (a single navigable
linear path connected to at least one intersection).

For full technical details on all TIGER 2016 products, see the [TIGER
technical documentation](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2016/TGRSHP2016_TechDoc.pdf).

## Coverage and time range

- Coverage: Spatial: United States (incl. DC, Puerto Rico and Island Areas); temporal: 2016; type: vector/table.
- Time range: 2016-01-01 至 2017-01-02

## Resolution and specifications

- Data type: FeatureCollection, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
| fullname | STRING | A human-readable road name |
| linearid | STRING | The primary identifier used to refer to this row in other TIGER products |
| mtfcc | STRING | The road [priority code](https://www.census.gov/library/reference/code-lists/mt-feature-class-codes.html), representing, e.g., primary, second, local, etc. |
| rttyp | STRING | The route [type code](https://www.census.gov/library/reference/code-lists/route-type-codes.html), |

## What you can use it for

- Serve as base maps and attribute tables for US census geography.
- Spatially join and map population and socio-economic data.
- Provide administrative boundaries for siting and regional analysis.

## How to get it

In Earth Engine:

```js
var dataset = ee.FeatureCollection('TIGER/2016/Roads');
```

- Earth Engine ID: `TIGER/2016/Roads`
- Providers: United States Census Bureau, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/TIGER_2016_Roads

## License and citation

- License: proprietary
- Keywords: census, infrastructure-boundaries, roads, table, tiger, us
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [TIGER: US Census Counties 2016](/pages/bbd503d0/)
- [TIGER: US Census States 2016](/pages/e17691bc/)
- [GHSL: Global population surfaces 1975-2030 (P2023A)](/en/pages/cf948667/)
- [LandScan High Definition Data for Ukraine, January 2022](/en/pages/c7a57ce4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
