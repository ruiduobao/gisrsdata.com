---
title: "GHSL: Global built-up surface 10m (P2023A)"
date: 2026-11-03 12:00:00
---

# GHSL: Global built-up surface 10m (P2023A)

Original name: GHSL: Global built-up surface 10m (P2023A)

## What this dataset is

This raster dataset depicts the distribution of built-up surfaces,
expressed in square metres per 10 m grid cell, for 2018
as observed from the S2 image data.

The datasets measure:
a) the total built-up surface, and b) the built-up surface allocated to grid
cells of predominant non-residential (NRES) use.

The complete information about the GHSL main products can be
found in the [GHSL Data Package 2023 report]
(https://ghsl.jrc.ec.europa.eu/documents/GHSL_Data_Package_2023.pdf?t=1683540422)

The Global Human Settlement Layer (GHSL) project is supported by the
European Commission, Joint Research Centre, and Directorate-General for
Regional and Urban Policy.

## Coverage and time range

- Coverage: Coverage: global; time: 2018; resolution: 10 m.
- Time range: 2018-01-01 至 2019-01-01

## Resolution and specifications

- Spatial resolution: about 10 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| built_surface | Built-up surface per grid cell | 10 |  |
| built_surface_nres | Non-residential built-up class (NRES) | 10 |  |

## What you can use it for

- Urban expansion and built-up change analysis
- Population exposure and disaster risk assessment
- SDG 11 monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2023A/GHS_BUILT_S_10m');
```

- Earth Engine ID: `JRC/GHSL/P2023A/GHS_BUILT_S_10m`
- Providers: EC JRC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_S_10m

## License and citation

- License: proprietary
- Keywords: built, built-environment, builtup, copernicus, ghsl, jrc, landcover, population, sdg, sentinel2-derived, settlement, urban
- DOI：10.2905/9F06F36F-4B11-47EC-ABB0-4F8B7B1D72EA

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GHSL: Degree of Urbanization 1975-2030 V2-0 (P2023A)](/pages/5396cca7/)
- [GHSL: Global built-up surface 1975-2030 (P2023A)](/pages/9724c860/)
- [GHSL: Global settlement characteristics (10 m) 2018 (P2023A)](/pages/465f5706/)
- [GHSL: Degree of Urbanization 1975-2030 (P2023A) [deprecated]](/pages/a1a2ee0c/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
