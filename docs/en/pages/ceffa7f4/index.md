---
title: "GPWv4: Ancillary Data Grids [deprecated]"
date: 2026-11-03 12:00:00
---

# GPWv4: Ancillary Data Grids [deprecated]

Original name: GPWv4: Gridded Population of the World Version 4, Ancillary Data Grids [deprecated]

## What this dataset is

The Gridded Population of the World, Version 4 (GPWv4) models the distribution of global human population for the years 2000, 2005, 2010, 2015 and 2020 on 30 arc-second (approximately 1 km) grid cells. Population is distributed to cells by proportional allocation from census and administrative units. Input data were collected at the most detailed spatial resolution available from the 2010 round of censuses (conducted between 2005 and 2014) and extrapolated to produce estimates for each modelled year.

These ancillary data grids bundle additional per-pixel information that can be used to assess the quality of the GPWv4 population estimates and how they were produced: water mask, data context, mean administrative unit area, national identifier, land area and water area. See the [general documentation](https://beta.sedac.ciesin.columbia.edu/data/set/gpw-v4-land-water-area/docs). Note: this is the earlier GPWv4 release, marked deprecated — GPWv4.11 provides the same grids as separate datasets.

## Coverage and time range

- Coverage: Global
- Time range: 2000-01-01 至 2020-01-01

## Resolution and specifications

- Spatial resolution: about 927.67 m (30 arc-seconds, about 1 km)
- Data type: Image, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| water-mask | Water mask | 927.67 |  |
| data-context | Categorizes pixels with estimated zero population based on information provided in the census documents. | 927.67 |  |
| mean-administrative-unit-area | The mean area of the input unit(s) from which population count and density grids are created. | 927.67 |  |
| national-identifier | An integer that represents the census data source used to produce the GPWv4 population estimates. Pixels (grid cells) that have the same value reflect the same data source, most often a country or territory. Note that these data represent the area covered by the statistical data as provided, and are not official representations of country or territory boundaries. | 927.67 |  |
| land-area | Estimate of the land area, excluding permanent ice and water, within each 30 arc-second pixel. | 927.67 |  |
| water-area | Estimate of the water area (permanent ice and water) within each 30 arc-second pixel. | 927.67 |  |

## What you can use it for

- Assess the quality and provenance of GPWv4 population estimates
- Get all GPWv4 quality grids in one image instead of separate datasets
- Support layers for careful population-density work

## How to get it

In Earth Engine:

```js
var dataset = ee.Image('CIESIN/GPWv4/ancillary-data-grids');
```

- Earth Engine ID: `CIESIN/GPWv4/ancillary-data-grids`
- Providers: CIESIN, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv4_ancillary-data-grids

## License and citation

- License: CC-BY-4.0
- Keywords: ciesin, gpw, population
- 数据引用：Center for International Earth Science Information Network - CIESIN -
Columbia University. 2016. Gridded Population of the World, Version 4
(GPWv4): Administrative Unit Center Points with Population Estimates.
Palisades, NY: NASA Socioeconomic Data and Applications Center
(SEDAC). [https://doi.org/10.7927/H4F47M2C](https://doi.org/10.7927/H4F47M2C).
Accessed DAY MONTH YEAR.

- DOI：10.7927/H4F47M2C

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GPWv4: Population Density [deprecated]](/en/pages/732e4764/)
- [GPWv4: Population Count [deprecated]](/en/pages/969607b9/)
- [GPWv4: UN-Adjusted Population Density [deprecated]](/en/pages/e8970ec8/)
- [GPWv4: UN-Adjusted Population Count [deprecated]](/en/pages/6a1c9cc3/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
