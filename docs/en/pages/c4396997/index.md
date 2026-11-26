---
title: "TIGER: US Census 5-digit ZIP Code Tabulation Areas 2020"
date: 2026-11-03 12:00:00
---

# TIGER: US Census 5-digit ZIP Code Tabulation Areas 2020

Original name: TIGER: US Census 5-digit ZIP Code Tabulation Areas 2020

## What this dataset is

ZIP Code tabulation areas (ZCTAs) are approximate area representations of
U.S. Postal Service (USPS) 5-digit ZIP Codes.
The Census Bureau defines ZCTAs by allocating each
Census block that contains addresses to a single ZIP Code tabulation area, usually
to the ZCTA that reflects the most frequently occurring ZIP Code for the
addresses within that block. Blocks that do not contain addresses but that
are completely surrounded by a single ZIP Code tabulation area (enclaves)
are assigned to the surrounding ZCTA; those surrounded by multiple ZCTAs
will be added to a single ZCTA based on the longest shared border.

The Census Bureau identifies 5-digit ZIP Code tabulation areas using a 5-
character numeric code that represents the most frequently occurring USPS
ZIP Code within that ZCTA.  This code may contain leading zeros.

Data users should not use ZCTAs to identify the official USPS ZIP Code for
mail delivery. The USPS makes periodic changes to ZIP Codes to support more
efficient mail delivery. ZIP Codes that cover primarily nonresidential or
post office box addresses may not have a corresponding ZCTA because the
delineation process uses primarily residential addresses, resulting in a
bias towards ZIP Codes used for city-style mail delivery.

For full technical details on all TIGER 2020 products, see the [TIGER
technical documentation](https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2020/TGRSHP2020_TechDoc_Ch5.pdf)

## Coverage and time range

- Coverage: Spatial: United States (incl. DC, Puerto Rico and Island Areas); temporal: 2020; type: vector/table.
- Time range: 2020-01-01 至 2020-01-02

## Resolution and specifications

- Data type: FeatureCollection, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
| ALAND20 | DOUBLE | 2020 Census Land area |
| AWATER20 | DOUBLE | 2020 Census Water area |
| CLASSFP20 | STRING | 2020 Census FIPS 55 class code |
| FUNCSTAT20 | STRING | 2020 Census functional status (Always "S", for "Statistical entity".) |
| GEOID20 | STRING | 2020 Census 5-digit ZIP Code Tabulation Area identifier |
| INTPTLAT20 | STRING | 2020 Census latitude of the internal point |
| INTPTLON20 | STRING | 2020 Census longitude of the internal point |
| MTFCC20 | STRING | MAF/TIGER feature class code (Always "G6350".) |
| ZCTA5CE20 | STRING | 2020 Census 5-digit ZIP Code Tabulation Area code |

## What you can use it for

- Serve as base maps and attribute tables for US census geography.
- Spatially join and map population and socio-economic data.
- Provide administrative boundaries for siting and regional analysis.

## How to get it

In Earth Engine:

```js
var dataset = ee.FeatureCollection('TIGER/2020/ZCTA5');
```

- Earth Engine ID: `TIGER/2020/ZCTA5`
- Providers: United States Census Bureau, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/TIGER_2020_ZCTA5

## License and citation

- License: proprietary
- Keywords: census, infrastructure-boundaries, table, tiger, us, zcta, zip-code
- 数据引用：For the creation of any reports, publications, new data sets, derived
products, or services resulting from the data set, users should
[cite the US Census Bureau](https://www.census.gov/about/policies/citation.html).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [TIGER: 2020 Tabulation (Census) Block ](/pages/17e8e957/)
- [TIGER: US Census Block Groups (BG) 2020](/pages/d8ec0b36/)
- [TIGER: US Census Tracts](/pages/7862b5d6/)
- [GHSL: Global population surfaces 1975-2030 (P2023A)](/en/pages/cf948667/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
