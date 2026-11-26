---
title: "GHSL: Global building volume 1975-2030 (P2023A)"
date: 2026-11-03 12:00:00
---

# GHSL: Global building volume 1975-2030 (P2023A)

Original name: GHSL: Global building volume 1975-2030 (P2023A)

## What this dataset is

This raster dataset depicts the global distribution of building volume,
expressed in cubic metres per 100 m grid cell. The dataset measures the
total building volume and the building volume allocated to grid cells of
predominant non-residential (NRES) use. Estimates are based on the [built-up
surface](https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_S)
and [building height](https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_H)
products.

More information about the GHSL data products can be found in the [GHSL Data
Package 2023 report](https://ghsl.jrc.ec.europa.eu/documents/GHSL_Data_Package_2023.pdf?t=1683540422)

The Global Human Settlement Layer (GHSL) project is supported by the
European Commission, Joint Research Centre, and Directorate-General for
Regional and Urban Policy.

## Coverage and time range

- Coverage: Coverage: global; time: 1975 to 2030; resolution: 100 m.
- Time range: 1975-01-01 至 2030-12-31

## Resolution and specifications

- Spatial resolution: about 100 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| built_volume_total | Total building volume per grid cell | 100 |  |
| built_volume_nres | Non-residential building volume per grid cell | 100 |  |

## What you can use it for

- Urban expansion and built-up change analysis
- Population exposure and disaster risk assessment
- SDG 11 monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2023A/GHS_BUILT_V');
```

- Earth Engine ID: `JRC/GHSL/P2023A/GHS_BUILT_V`
- Providers: EC JRC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_V

## License and citation

- License: proprietary
- Keywords: alos, building, built-environment, copernicus, dem, ghsl, jrc, population, sdg, sentinel2-derived, srtm, urban
- DOI：10.2905/AB2F107A-03CD-47A3-85E5-139D8EC63283

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GHSL: Global building height 2018 (P2023A)](/pages/13e5cfe4/)
- [ALOS DSM: Global 30m  v4.1](/en/pages/774620fb/)
- [How to Download the ASTER Global DEM](/en/pages/da7fa1/)
- [CryoSat-2 Antarctica 1 km DEM](/en/pages/a0390601/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
