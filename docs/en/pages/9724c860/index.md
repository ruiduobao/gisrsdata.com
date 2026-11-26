---
title: "GHSL: Global built-up surface 1975-2030 (P2023A)"
date: 2026-11-03 12:00:00
---

# GHSL: Global built-up surface 1975-2030 (P2023A)

Original name: GHSL: Global built-up surface 1975-2030 (P2023A)

## What this dataset is

This raster dataset depicts the distribution of built-up surfaces,
expressed in square metres per 100 m grid cell.
The dataset measures:
a) the total built-up surface, and b) the built-up surface allocated to grid
cells of predominant non-residential (NRES) use. Data are
spatially-temporally interpolated or extrapolated from 1975 to 2030 in 5
year intervals.

The complete information about the GHSL main products can be
found in the [GHSL Data Package 2023 report]
(https://ghsl.jrc.ec.europa.eu/documents/GHSL_Data_Package_2023.pdf?t=1683540422)

The Global Human Settlement Layer (GHSL) project is supported by the
European Commission, Joint Research Centre, and Directorate-General for
Regional and Urban Policy.

## Coverage and time range

- Coverage: Coverage: global; time: 1975 to 2030 (5-year intervals, interpolated/extrapolated); resolution: 100 m.
- Time range: 1975-01-01 至 2030-12-31

## Resolution and specifications

- Spatial resolution: about 100 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| built_surface | Built-up surface per grid cell | 100 |  |
| built_surface_nres | Non-residential built-up surface per grid cell | 100 |  |

## What you can use it for

- Urban expansion and built-up change analysis
- Population exposure and disaster risk assessment
- SDG 11 monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2023A/GHS_BUILT_S');
```

- Earth Engine ID: `JRC/GHSL/P2023A/GHS_BUILT_S`
- Providers: EC JRC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_S

## License and citation

- License: proprietary
- Keywords: built, built-environment, builtup, copernicus, ghsl, jrc, landcover, landsat-derived, population, sdg, sentinel2-derived, settlement, urban
- DOI：10.2905/9F06F36F-4B11-47EC-ABB0-4F8B7B1D72EA

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GHSL: Degree of Urbanization 1975-2030 V2-0 (P2023A)](/pages/5396cca7/)
- [GHSL: Global built-up surface 10m (P2023A)](/pages/a10e4a06/)
- [GHSL: Global settlement characteristics (10 m) 2018 (P2023A)](/pages/465f5706/)
- [GHSL: Degree of Urbanization 1975-2030 (P2023A) [deprecated]](/pages/a1a2ee0c/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
