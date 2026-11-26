---
title: "GPWv4.11: Water Mask"
date: 2026-11-03 12:00:00
---

# GPWv4.11: Water Mask

Original name: GPWv411: Water Mask (Gridded Population of the World Version 4.11)

## What this dataset is

This dataset identifies water pixels, with non-water pixels masked out. The water mask was used to exclude areas of water and permanent ice from the population allocation in GPW. See the [general documentation](https://sedac.ciesin.columbia.edu/data/set/gpw-v4-basic-demographic-characteristics-rev11/docs).

The Gridded Population of the World, Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, 2005, 2010, 2015 and 2020 on 30 arc-second (approximately 1 km) grid cells, distributing population by proportional allocation from census and administrative units, with inputs from the 2010 round of censuses extrapolated to each modelled year.

## Coverage and time range

- Coverage: Global
- Time range: 2000-01-01 至 2020-01-01

## Resolution and specifications

- Spatial resolution: about 927.67 m (30 arc-seconds, about 1 km)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| water_mask | Water mask | 927.67 |  |

## What you can use it for

- Exclude water and permanent ice when allocating or analysing population
- Mask oceans, lakes and rivers in gridded population work
- Consistent water layer matching the GPW grid

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('CIESIN/GPWv411/GPW_Water_Mask');
```

- Earth Engine ID: `CIESIN/GPWv411/GPW_Water_Mask`
- Providers: NASA SEDAC at the Center for International Earth Science Information Network, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Water_Mask

## License and citation

- License: CC-BY-4.0
- Keywords: ciesin, gpw, nasa, population, surface-ground-water
- 数据引用：Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4): Water Mask, Revision 11. Palisades, NY: NASA Socioeconomic Data
and Applications Center (SEDAC). [https://doi.org/10.7927/H42Z13KG](https://doi.org/10.7927/H42Z13KG).
Accessed DAY MONTH YEAR.

- DOI：10.7927/H42Z13KG

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GPWv4.11: Water Area](/en/pages/0f13e587/)
- [BLM AIM TerrADat Terrestrial Field Plots v1](/en/pages/53c74382/)
- [Dynamic Surface Water Extent from Harmonized Landsat Sentinel-2 (DSWx-HLS) V1](/pages/0bb51b32/)
- [Dynamic Surface Water Extent from Sentinel-1 (DSWx-S1) V1](/pages/e1121614/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
