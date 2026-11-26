---
title: "GPWv4: UN-Adjusted Population Density [deprecated]"
date: 2026-11-03 12:00:00
---

# GPWv4: UN-Adjusted Population Density [deprecated]

Original name: GPWv4: Gridded Population of the World Version 4, UN-Adjusted Population Density [deprecated]

## What this dataset is

The Gridded Population of the World, Version 4 (GPWv4) models the distribution of global human population for the years 2000, 2005, 2010, 2015 and 2020 on 30 arc-second (approximately 1 km) grid cells. Population is distributed to cells by proportional allocation from census and administrative units. Input data were collected at the most detailed spatial resolution available from the 2010 round of censuses (conducted between 2005 and 2014) and extrapolated to produce estimates for each modelled year.

These population density grids contain estimates of the number of persons per square kilometre, consistent with national censuses and population registers with respect to relative spatial distribution but adjusted to match the 2015 Revision of UN World Population Prospects country totals. There is one image for each modelled year. See the [general documentation](https://beta.sedac.ciesin.columbia.edu/data/set/gpw-v4-population-count-adjusted-to-2015-unwpp-country-totals/docs). Note: this is the earlier GPWv4 release, marked deprecated — GPWv4.11 is the current revision.

## Coverage and time range

- Coverage: Global
- Time range: 2000-01-01 至 2020-01-01

## Resolution and specifications

- Spatial resolution: about 927.67 m (30 arc-seconds, about 1 km)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| population-density | The estimated number of persons per square kilometer. | 927.67 |  |

## What you can use it for

- Density mapping that stays consistent with UN country totals (legacy GPWv4 release)
- Exposure and risk analysis needing internationally comparable densities
- Reproducing studies built on the original GPWv4

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('CIESIN/GPWv4/unwpp-adjusted-population-density');
```

- Earth Engine ID: `CIESIN/GPWv4/unwpp-adjusted-population-density`
- Providers: CIESIN, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv4_unwpp-adjusted-population-density

## License and citation

- License: CC-BY-4.0
- Keywords: ciesin, gpw, population
- 数据引用：Center for International Earth Science Information Network - CIESIN -
Columbia University. 2016. Gridded Population of the World, Version 4
(GPWv4): Population Density Adjusted to Match 2015 Revision of UN WPP
Country Totals. Palisades, NY: NASA Socioeconomic Data and Applications
Center (SEDAC). [https://doi.org/10.7927/H4HX19NJ](https://doi.org/10.7927/H4HX19NJ).
Accessed DAY MONTH YEAR.

- DOI：10.7927/H4HX19NJ

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GPWv4: Population Density [deprecated]](/en/pages/732e4764/)
- [GPWv4: Population Count [deprecated]](/en/pages/969607b9/)
- [GPWv4: UN-Adjusted Population Count [deprecated]](/en/pages/6a1c9cc3/)
- [GPWv4: Ancillary Data Grids [deprecated]](/en/pages/ceffa7f4/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
