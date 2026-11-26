---
title: "GPWv4.11: Population Count Adjusted to UN WPP Totals"
date: 2026-11-03 12:00:00
---

# GPWv4.11: Population Count Adjusted to UN WPP Totals

Original name: GPWv411: Adjusted to Match 2015 Revision of UN WPP Country Totals (Gridded Population of the World Version 4.11)

## What this dataset is

This dataset contains estimates of the number of persons per 30 arc-second grid cell. The relative spatial distribution is consistent with national censuses and population registers, but the totals are adjusted to match the 2015 Revision of UN World Population Prospects country totals. There is one image for each modelled year. See the [general documentation](https://www.earthdata.nasa.gov/data/catalog/esdis-ciesin-sedac-gpwv4-popdens-r11-4.11).

Note: this collection has a pyramid policy of MEAN, so zooming out results in information loss — calculations need to be performed at native resolution.

The Gridded Population of the World, Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, 2010, 2015 and 2020 on 30 arc-second (approximately 1 km) grid cells. Population is distributed to cells by proportional allocation from census and administrative units. Input data were collected at the most detailed spatial resolution available from the 2010 round of censuses (conducted between 2005 and 2014) and extrapolated to produce estimates for each modelled year.

## Coverage and time range

- Coverage: Global
- Time range: 2000-01-01 至 2020-01-01

## Resolution and specifications

- Spatial resolution: about 927.67 m (30 arc-seconds, about 1 km)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| unwpp-adjusted_population_count | The estimated number of persons per 30 arc-second grid cell. | 927.67 |  |

## What you can use it for

- Headcounts that add up to UN country totals
- Cross-country population comparisons on a consistent basis
- Exposure analysis for international programmes

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('CIESIN/GPWv411/GPW_UNWPP-Adjusted_Population_Count');
```

- Earth Engine ID: `CIESIN/GPWv411/GPW_UNWPP-Adjusted_Population_Count`
- Providers: NASA SEDAC at the Center for International Earth Science Information Network, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_UNWPP-Adjusted_Population_Count

## License and citation

- License: CC-BY-4.0
- Keywords: ciesin, gpw, nasa, population
- 数据引用：Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4): Population Count Adjusted to Match 2015 Revision of UN WPP Country
Totals, Revision 11. Palisades, NY: NASA Socioeconomic Data and Applications Center
(SEDAC). [https://doi.org/10.7927/H4PN93PB](https://doi.org/10.7927/H4PN93PB).
Accessed DAY MONTH YEAR.

- DOI：10.7927/H4PN93PB

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GPWv4.11: Population Density](/en/pages/f230ed9d/)
- [GPWv4.11: Population Count](/en/pages/9cd921b2/)
- [GPWv4.11: National Identifier Grid](/en/pages/425f6eb9/)
- [GPWv4.11: Basic Demographic Characteristics](/en/pages/012ffc59/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
