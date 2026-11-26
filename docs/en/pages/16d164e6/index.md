---
title: "GlobFire Final Fire Event Detection Based on MCD64A1"
date: 2026-11-03 12:00:00
---

# GlobFire Final Fire Event Detection Based on MCD64A1

Original name: GlobFire Final Fire Event Detection Based on MCD64A1

## What this dataset is

Fire boundaries based on the MODIS dataset MCD64A1. The data were computed
based on an algorithm that relies on encoding in a graph structure
a space-time relationship among patches of burned areas.

Each fire has a unique number identifying the event.

## Coverage and time range

- Coverage: Coverage: global; time span: 2001 to 2020; type: vector/table data.
- Time range: 2001-01-01 至 2021-01-01

## Resolution and specifications

- Data type: FeatureCollection, accessed through Google Earth Engine

| Field | Type | Description |
| --- | --- | --- |
| area | DOUBLE | Fire area, square meters |
| FinalDate | INT | Final fire date in milliseconds since 1970-01-01 |
| Id | INT | Numeric id of the fire |
| InitialDate | INT | Initial fire date in milliseconds since 1970-01-01 |

## What you can use it for

- Wildfire event and burnt area analysis
- Fire regime and fire behaviour research
- Disaster assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.FeatureCollection('JRC/GWIS/GlobFire/v2/FinalPerimeters');
```

- Earth Engine ID: `JRC/GWIS/GlobFire/v2/FinalPerimeters`
- Providers: European Commission, Joint Research Centre, Global Wildfire Information System, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JRC_GWIS_GlobFire_v2_FinalPerimeters

## License and citation

- License: CC-BY-4.0
- Keywords: area, burnt, disaster, fire, globfire, mcd64a1, modis-derived, table, wildfire
- 数据引用：Artés, T., Oom, D., De Rigo, D., Durrant, T. H., Maianti, P., Libertà, G., &
San-Miguel-Ayanz, J. (2019). A global wildfire dataset for the analysis of
fire regimes and fire behaviour. Scientific data, 6(1), 1-11.
[doi:10.1038/s41597-019-0312-2](https://doi.org/10.1038/s41597-019-0312-2)

- DOI：10.1038/s41597-019-0312-2

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GlobFire Daily Fire Event Detection Based on MCD64A1](/pages/71c82772/)
- [FIRMS: Fire Information for Resource Management System](/en/pages/4ae50fa9/)
- [FireCCI51: MODIS Fire_cci Burned Area Pixel Product, Version 5.1](/en/pages/2a6e2416/)
- [FORMA Global Forest Watch Deforestation Alerts, 500m [deprecated]](/en/pages/19a66aef/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
