---
title: "PML_V2.1.7: Evapotranspiration and GPP (deprecated)"
date: 2026-11-03 12:00:00
---

# PML_V2.1.7: Evapotranspiration and GPP (deprecated)

Original name: PML_V2.1.8: Coupled Evapotranspiration and Gross Primary Product (GPP) [deprecated]

## What this dataset is

PML_V2 (Penman-Monteith-Leuning Evapotranspiration V2) provides evapotranspiration (ET), its three components, and gross primary production (GPP) at 500 m and 8-day resolution, covering 60°S to 90°N. Version 2.1.7's catalog record spans 2000–2020. Its two main advantages are: (1) transpiration and GPP are estimated in a coupled way via canopy conductance (Gan et al., 2018; Zhang et al., 2019); (2) ET is partitioned into three components — transpiration from vegetation, direct evaporation from soil, and vaporization of intercepted rainfall from vegetation (Zhang et al., 2016).

The products perform well against observations at 95 flux sites across the globe, and are similar to or noticeably better than the major state-of-the-art ET and GPP products widely used by the water and ecology research communities (Zhang et al., 2019). Version note: for naming consistency, PML-V2.1.7 replaces the previous PML-V2 0.1.7. This version is marked deprecated.

## Coverage and time range

- Coverage: Global, 60°S to 90°N
- Time range: 2000-02-26 至 2023-12-27
- Cadence: Every 8 days

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| GPP | Gross primary production | 500 |  |
| Ec | Vegetation transpiration | 500 |  |
| Es | Soil evaporation | 500 |  |
| Ei | Interception from vegetation canopy | 500 |  |
| ET_water | Evaporation from water bodies, snow, and ice. Calculated using the Penman equation, which is considered a good estimate of actual evaporation for these surfaces. | 500 |  |

## What you can use it for

- Analyse regional water consumption by ecosystems and cropland
- Study the carbon uptake of vegetation (GPP) together with water loss
- Compare evapotranspiration products against flux-tower observations

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('CAS/IGSNRR/PML/V2_v018');
```

- Earth Engine ID: `CAS/IGSNRR/PML/V2_v018`
- Providers: PML_V2, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/CAS_IGSNRR_PML_V2_v018

## License and citation

- License: CC-BY-4.0
- Keywords: evapotranspiration, gpp, plant-productivity, water-vapor
- 数据引用：Zhang, Y., Kong, D., Gan, R., Chiew, F.H.S., McVicar, T.R., Zhang, Q.,
and Yang, Y., 2019. Coupled estimation of 500m and 8-day resolution global
evapotranspiration and gross primary production in 2002-2017.
Remote Sens. Environ. 222, 165-182,
[doi:10.1016/j.rse.2018.12.031](https://doi.org/10.1016/j.rse.2018.12.031)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [PML_V2.1.8: Evapotranspiration and GPP (deprecated)](/en/pages/82a78155/)
- [PML_V2: Evapotranspiration and GPP (deprecated)](/en/pages/1fcbf3b8/)
- [SPEIbase: Standardised Precipitation-Evapotranspiration Index, Version 2.11](/en/pages/2a1f609f/)
- [Landsat-derived Forest Age for Canada 2019](/en/pages/65b34141/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
