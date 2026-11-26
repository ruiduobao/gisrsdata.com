---
title: "GHSL: Global building height 2018 (P2023A)"
date: 2026-11-03 12:00:00
---

# GHSL: Global building height 2018 (P2023A)

Original name: GHSL: Global building height 2018 (P2023A)

## What this dataset is

This spatial raster dataset depicts the global distribution of building
heights at a resolution of 100 m, referred to the year 2018. The input data
used to predict building heights are the ALOS Global Digital Surface Model
(30 m), the NASA Shuttle Radar Topographic Mission data (30 m), and a global
Sentinel-2 image composite from L1C data for the period 2017-2018.

More information about the GHSL data products can be found in the
[GHSL Data Package 2023 report]
(https://ghsl.jrc.ec.europa.eu/documents/GHSL_Data_Package_2023.pdf?t=1683540422),
where the building height layer is referred to as the Average Net Building
Height (ANBH).

The Global Human Settlement Layer (GHSL) project is supported by the
European Commission, Joint Research Centre, and Directorate-General for
Regional and Urban Policy.

## Coverage and time range

- Coverage: Coverage: global; time: 2018; resolution: 100 m.
- Time range: 2018-01-01 至 2018-12-31

## Resolution and specifications

- Spatial resolution: about 100 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| built_height | Average building height per grid cell | 100 |  |

## What you can use it for

- Urban expansion and built-up change analysis
- Population exposure and disaster risk assessment
- SDG 11 monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('JRC/GHSL/P2023A/GHS_BUILT_H');
```

- Earth Engine ID: `JRC/GHSL/P2023A/GHS_BUILT_H`
- Providers: EC JRC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/JRC_GHSL_P2023A_GHS_BUILT_H

## License and citation

- License: proprietary
- Keywords: alos, building, built, built-environment, builtup, copernicus, dem, ghsl, height, jrc, population, sdg, sentinel2-derived, srtm, urban
- DOI：10.2905/85005901-3A49-48DD-9D19-6261354F56FE

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [GHSL: Global building volume 1975-2030 (P2023A)](/pages/a37f30e2/)
- [ALOS DSM: Global 30m  v4.1](/en/pages/774620fb/)
- [How to Download the ASTER Global DEM](/en/pages/da7fa1/)
- [CryoSat-2 Antarctica 1 km DEM](/en/pages/a0390601/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
