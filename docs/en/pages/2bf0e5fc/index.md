---
title: "GPWv4.11: Land Area"
date: 2026-11-03 12:00:00
---

# GPWv4.11: Land Area

Original name: GPWv411: Land Area (Gridded Population of the World Version 4.11)

## What this dataset is

This dataset estimates the surface area of land — in square kilometres per pixel, excluding permanent ice and water — within each pixel. It was used to calculate the GPW v4.11 population density datasets. See the [general documentation](https://beta.sedac.ciesin.columbia.edu/data/set/gpw-v4-quality-indicators/docs).

The Gridded Population of the World, Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, 2010, 2015 and 2020 on 30 arc-second (approximately 1 km) grid cells, distributing population by proportional allocation from census and administrative units, with inputs from the 2010 round of censuses extrapolated to each modelled year.

## Coverage and time range

- Coverage: Global
- Time range: 2000-01-01 至 2020-01-01

## Resolution and specifications

- Spatial resolution: about 927.67 m (30 arc-seconds, about 1 km)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| land_area | Estimates for land area within each 30-arc second pixel. | 927.67 |  |

## What you can use it for

- Convert GPW population counts into population density correctly
- Know the true land fraction of coastal and lakeside pixels
- Area weighting for gridded statistics

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('CIESIN/GPWv411/GPW_Land_Area');
```

- Earth Engine ID: `CIESIN/GPWv411/GPW_Land_Area`
- Providers: NASA SEDAC at the Center for International Earth Science Information Network, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area

## License and citation

- License: CC-BY-4.0
- Keywords: ciesin, gpw, nasa, population
- 数据引用：Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4): Land Area, Revision 11. Palisades, NY: NASA Socioeconomic Data
and Applications Center (SEDAC). [https://doi.org/10.7927/H4Z60M4Z](https://doi.org/10.7927/H4Z60M4Z).
Accessed DAY MONTH YEAR.

- DOI：10.7927/H4Z60M4Z

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GPWv4.11: Population Density](/en/pages/f230ed9d/)
- [GPWv4.11: Population Count](/en/pages/9cd921b2/)
- [GPWv4.11: National Identifier Grid](/en/pages/425f6eb9/)
- [GPWv4.11: Basic Demographic Characteristics](/en/pages/012ffc59/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
