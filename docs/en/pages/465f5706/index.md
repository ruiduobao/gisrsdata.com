---
title: "GHSL: Global settlement characteristics (10 m) 2018 (P2023A)"
date: 2026-11-03 12:00:00
---

# GHSL: Global settlement characteristics (10 m) 2018 (P2023A)

Original name: GHSL: Global settlement characteristics (10 m) 2018 (P2023A)

## What this dataset is

This spatial raster dataset delineates human settlements at 10 m resolution,
and describes their inner characteristics in terms of the functional and
height-related components of the built environment.

More information about the GHSL data products can be found in the [GHSL Data
Package 2023 report]
(https://ghsl.jrc.ec.europa.eu/documents/GHSL_Data_Package_2023.pdf?t=1683540422)

The Global Human Settlement Layer (GHSL) project is supported by the European
Commission, Joint Research Centre, and Directorate-General for Regional and
Urban Policy.

## Coverage and time range

- Coverage: Coverage: global; time: 2018; resolution: 10 m.
- Time range: 2018-01-01 至 2018-12-31

## Resolution and specifications

- Spatial resolution: about 10 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| built_characteristics | Settlement characteristics | 10 |  |

## What you can use it for

- Urban expansion and built-up change analysis
- Population exposure and disaster risk assessment
- SDG 11 monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2023A/GHS_BUILT_C');
```

- Earth Engine ID: `JRC/GHSL/P2023A/GHS_BUILT_C`
- Providers: EC JRC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_C

## License and citation

- License: proprietary
- Keywords: building, built, builtup, copernicus, ghsl, height, jrc, landcover, population, roads, sdg, sentinel2-derived, settlement, urban
- DOI：10.2905/3c60ddf6-0586-4190-854b-f6aa0edc2a30

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GHSL: Degree of Urbanization 1975-2030 V2-0 (P2023A)](/pages/5396cca7/)
- [GHSL: Global built-up surface 10m (P2023A)](/pages/a10e4a06/)
- [GHSL: Global built-up surface 1975-2030 (P2023A)](/pages/9724c860/)
- [GHSL: Degree of Urbanization 1975-2030 (P2023A) [deprecated]](/pages/a1a2ee0c/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
