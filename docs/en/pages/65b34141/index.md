---
title: "Landsat-derived Forest Age for Canada 2019"
date: 2026-11-03 12:00:00
---

# Landsat-derived Forest Age for Canada 2019

Original name: Landsat-derived forest age for Canada 2019

## What this dataset is

This is a satellite-based forest age map of Canada for 2019, at 30 m resolution across Canada's forested ecozones. It combines Landsat data (disturbances, surface reflectance composites, forest structure) and MODIS gross primary production to determine age.

Forest age is determined in three ways, in decreasing order of accuracy: where a disturbance can be identified directly from satellite data and mapped change (the disturbance approach, most accurate); where age is inferred from spectral information and forest succession logic (the recovery approach); and, where there is no evidence of disturbance, by inverting allometric equations using realized heights and growth-and-yield modelling (the allometric approach). Because recent disturbance is not widespread in Canada's forests, the allometric approach covers the greatest area (86.6%). Trees of all ages are mapped, with trees older than 150 years combined into an "old tree" category.

## Coverage and time range

- Coverage: Canada's forested ecozones
- Time range: 2019-01-01 至 2020-01-01

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| forest | Forest age | 30 |  |

## What you can use it for

- Estimate forest carbon stocks and their change with stand age
- Study disturbance and recovery history of Canadian forests
- Forest management and biodiversity habitat assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('CANADA/NFIS/NTEMS/CA_FOREST_AGE');
```

- Earth Engine ID: `CANADA/NFIS/NTEMS/CA_FOREST_AGE`
- Providers: National Forest Information System, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/CANADA_NFIS_NTEMS_CA_FOREST_AGE

## License and citation

- License: CC-BY-4.0
- Keywords: canada, forest, forest-biomass
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [SPEIbase: Standardised Precipitation-Evapotranspiration Index, Version 2.11](/en/pages/2a1f609f/)
- [SPEIbase: Standardised Precipitation-Evapotranspiration Index, Version 2.10 [deprecated]](/en/pages/9bb9126f/)
- [PML_V2.1.7: Evapotranspiration and GPP (deprecated)](/en/pages/78dca129/)
- [PML_V2.1.8: Evapotranspiration and GPP (deprecated)](/en/pages/82a78155/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
