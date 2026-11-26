---
title: "Canadian Digital Elevation Model"
date: 2026-11-03 12:00:00
---

# Canadian Digital Elevation Model

Original name: Canadian Digital Elevation Model

## What this dataset is

The Canadian Digital Elevation Model (CDEM) is part of Natural Resources
Canada's (NRCan) altimetry system and stems from the existing Canadian
Digital Elevation Data (CDED). In these data, elevations can be either
ground or reflective surface elevations.

The CDEM is comprised of multiple DEMs with varying resolutions. These
vary according to latitude and have a base resolution of 0.75 arc-seconds.
For more information see the [Product Specifications](https://ftp.geogratis.gc.ca/pub/nrcan_rncan/elevation/cdem_mnec/doc/CDEM_product_specs.pdf)

Contains information licensed under the
[Open Government Licence - Canada](https://open.canada.ca/en/open-government-licence-canada).

## Coverage and time range

- Coverage: Spatial: Canada; temporal: 1945 to 2011; resolution: 23.19 m (base 0.75 arc-seconds, varying with latitude).
- Time range: 1945-01-01 至 2011-01-01

## Resolution and specifications

- Spatial resolution: about 23.19 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| elevation | Elevation | 23.19 |  |

## What you can use it for

- Terrain analysis, hydrological modelling and engineering mapping for Canada.
- Mosaic with other DEMs to build North-American elevation products.
- Serve as elevation reference for orthorectification of imagery.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NRCan/CDEM');
```

- Earth Engine ID: `NRCan/CDEM`
- Providers: NRCan, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NRCan_CDEM

## License and citation

- License: OGL-Canada-2.0
- Keywords: canada, cdem, dem, elevation, elevation-topography, geophysical, nrcan, topography
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS DSM: Global 30m  v4.1](/en/pages/774620fb/)
- [How to Download the ASTER Global DEM](/en/pages/da7fa1/)
- [CryoSat-2 Antarctica 1 km DEM](/en/pages/a0390601/)
- [GHSL: Global building volume 1975-2030 (P2023A)](/en/pages/a37f30e2/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
