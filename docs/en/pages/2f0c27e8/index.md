---
title: "Global Mangrove Forests Distribution, v1 (2000)"
date: 2026-11-03 12:00:00
---

# Global Mangrove Forests Distribution, v1 (2000)

Original name: Global Mangrove Forests Distribution, v1 (2000)

## What this dataset is

The database was prepared using Landsat satellite data from the year 2000.
More than 1,000 Landsat scenes obtained from the USGS Earth Resources
Observation and Science Center (EROS) were classified using hybrid
supervised and unsupervised digital image classification techniques. This
database is the first, most comprehensive mangrove assessment of the world
([Giri et al., 2011](https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1466-8238.2010.00584.x)).
Partial funding of this research was provided by NASA.

The mangrove database is being used for identifying priority areas
for mangrove conservation, studying the role of mangrove forests in
saving lives and properties from natural disasters (e.g. tsunami),
carbon accounting, and biodiversity conservation. The USGS EROS has
been using the data to study the impact of sea level rise on mangrove
ecosystems. The database serves as a baseline for mangrove
monitoring.

[General Documentation](https://www.earthdata.nasa.gov/data/catalog/sedac-ciesin-sedac-lulc-mangroves-2000-1.0#documents-and-resources)

## Coverage and time range

- Coverage: Coverage: global mangrove areas; time: year 2000; resolution: 30 m.
- Time range: 2000-01-01 至 2001-01-01

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| 1 | Mangroves | 30 |  |

## What you can use it for

- Mangrove conservation priority area identification
- Coastal hazard protection assessment
- Blue carbon accounting and biodiversity conservation

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('LANDSAT/MANGROVE_FORESTS');
```

- Earth Engine ID: `LANDSAT/MANGROVE_FORESTS`
- Providers: NASA SEDAC at the Center for International Earth Science Information Network, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_MANGROVE_FORESTS

## License and citation

- License: proprietary
- Keywords: annual, ciesin, forest-biomass, global, landsat-derived, mangrove, nasa, usgs
- 数据引用：Giri, C., E. Ochieng, L.L.Tieszen, Z. Zhu, A. Singh, T. Loveland, J. Masek, and N. Duke. 2013. Global Mangrove Forests Distribution, 2000. Palisades, NY: NASA Socioeconomic Data and Applications Center (SEDAC). [https://doi.org/10.7927/H4J67DW8](https://doi.org/10.7927/H4J67DW8). Accessed DAY MONTH YEAR

- DOI：10.7927/H4J67DW8

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ECMWF Near-Realtime IFS Wave Forecasts](/en/pages/2f7bc360/)
- [ECMWF Near-Realtime IFS Wave (Short-Cutoff) Forecasts](/en/pages/423330ad/)
- [GCOM-C/SGLI L3 Chlorophyll-a Concentration (V1)](/en/pages/9e90afdc/)
- [GCOM-C/SGLI L3 Chlorophyll-a Concentration (V2)](/en/pages/834e6e14/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
