---
title: "TIGER: US Census Counties 2018"
date: 2026-11-03 12:00:00
---

# TIGER: US Census Counties 2018

Original name: TIGER: US Census Counties 2018

## What this dataset is

The United States Census Bureau TIGER dataset contains the 2018 boundaries
for primary legal divisions of US states.  In most states, these entities
are termed "counties". In Louisiana, these divisions are known as
"parishes".

Alaska has governmental entities called "boroughs" which fill a similar
governmental role to counties, but in some areas those governmental
responsibilities are handled directly by the state and sometimes by a city.
For Alaska, county equivalent entities thus include

1. organized boroughs,
1. combined city and borough entities (e.g. Juneau),
1. municipalities, and
1. census areas.

The census areas are delineated cooperatively for statistical purposes by
the State of Alaska and the Census Bureau.

In four states (Maryland, Missouri, Nevada, and Virginia), there are one
or more incorporated places that are independent of any county
organization and thus constitute primary divisions of their states. These
incorporated places are known as independent cities and are treated as
county-equivalent entities for purposes of data presentation.

The District of Columbia and Guam have no primary divisions and each area is
considered a county-equivalent entity for purposes of data presentation.
The Census Bureau treats the following entities as equivalents of counties
for purposes of data presentation: municipios in Puerto Rico, districts
and islands in America Samoa, municipalities in the Commonwealth of the
Northern Mariana Islands, and islands in the U.S. Virgin Islands.

For full technical details on all TIGER 2018 products, see the [TIGER
technical documentation](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2018/TGRSHP2018_TechDoc.pdf).

## Coverage and time range

- Coverage: Spatial: United States; temporal: 2018; type: vector/table.
- Time range: 2018-01-01 至 2019-01-01

## Resolution and specifications

- Data type: FeatureCollection, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
| ALAND | DOUBLE | Land area |
| AWATER | DOUBLE | Water area |
| CBSAFP | STRING | Metropolitan statistical area/micropolitan statistical area code |
| CLASSFP | STRING | FIPS class code |
| COUNTYFP | STRING | County FIPS code |
| COUNTYNS | STRING | County GNIS code |
| CSAFP | STRING | Combined statistical area code |
| FUNCSTAT | STRING | Functional Status |
| GEOID | STRING | County identifier; a concatenation of state FIPS code and county FIPS code |
| INTPTLAT | STRING | Internal point latitude |
| INTPTLON | STRING | Internal point longitude |
| LSAD | STRING | Legal/statistical area description for the county |
| METDIVFP | STRING | Metropolitan division code |
| MTFCC | STRING | MAF/TIGER feature class code (=G4020) |
| NAME | STRING | County name |
| NAMELSAD | STRING | Name and the translated legal/statistical area description for the county |
| STATEFP | STRING | State FIPS code |

## What you can use it for

- Serve as base maps and attribute tables for US census geography.
- Spatially join and map population and socio-economic data.
- Provide administrative boundaries for siting and regional analysis.

## How to get it

In Earth Engine:

```js
var dataset = ee.FeatureCollection('TIGER/2018/Counties');
```

- Earth Engine ID: `TIGER/2018/Counties`
- Providers: United States Census Bureau, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/TIGER_2018_Counties

## License and citation

- License: proprietary
- Keywords: census, county, infrastructure-boundaries, table, tiger, us
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [TIGER: US Census States 2018](/pages/b5382785/)
- [GHSL: Global population surfaces 1975-2030 (P2023A)](/en/pages/cf948667/)
- [LandScan High Definition Data for Ukraine, January 2022](/en/pages/c7a57ce4/)
- [VNP46A1: VIIRS Daily Gridded Day Night Band 500m Linear Lat Lon Grid Night](/en/pages/89a1d68e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
