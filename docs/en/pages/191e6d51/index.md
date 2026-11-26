---
title: "Copernicus DEM GLO-30 (deprecated)"
date: 2026-11-03 12:00:00
---

# Copernicus DEM GLO-30 (deprecated)

Original name: Copernicus DEM GLO-30: Global 30m Digital Elevation Model [deprecated]

## What this dataset is

The Copernicus DEM is a Digital Surface Model (DSM): it represents the surface of the Earth including buildings, infrastructure and vegetation. It derives from an edited DSM named WorldDEM™, with flattening of water bodies and consistent flow of rivers included, plus editing of shore- and coastlines, special features such as airports, and implausible terrain structures.

WorldDEM is based on radar satellite data acquired during the TanDEM-X mission, funded by a public-private partnership between the German Aerospace Center (DLR) and Airbus Defence and Space. More details are in the dataset [documentation](https://dataspace.copernicus.eu/sites/default/files/media/files/2024-06/geo1988-copernicusdem-spe-002_producthandbook_i5.0.pdf).

The DSM uses the EGM2008 vertical datum ([EPSG:3855](https://spatialreference.org/ref/epsg/3855/)), so an elevation of 0 at a location does not necessarily mean mean sea level. The Earth Engine asset was ingested from the DGED files. Note: unlike most DEMs in Earth Engine this is an image collection — source files have multiple resolutions and cannot be mosaicked into a single asset — so slope computations need a reprojection; see the code example for the recommended way of computing slope. This version is marked deprecated.

## Coverage and time range

- Coverage: Global
- Time range: 2010-12-01 至 2015-01-31

## Resolution and specifications

- Spatial resolution: about 30 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| DEM | Digital Surface Model | 30 |  |
| EDM | The Edit Data Mask indicates all DEM pixels that were modified during the terrain and hydro editing process. | 30 |  |
| FLM | The Filling Mask is created primarily during the terrain editing process. | 30 |  |
| HEM | The Height Error Mask represents the corresponding height error for each DEM pixel in the form of the standard deviation derived from the interferometric coherence and geometrical considerations. | 30 |  |
| WBM | The Water Body Mask shows all DEM pixels which are classified as water and edited according to the categories Ocean, Lake or River. | 30 |  |

## What you can use it for

- Global terrain analysis at 30 m: slope, aspect, hillshade
- Hydrology where flattened water bodies and consistent river flow matter
- Elevation base for mapping and modelling almost anywhere on land

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/DEM/GLO30');
```

- Earth Engine ID: `COPERNICUS/DEM/GLO30`
- Providers: Copernicus, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30

## License and citation

- License: proprietary
- Keywords: copernicus, dem, elevation, elevation-topography, geophysical
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Copernicus DEM GLO-30 (2024_1)](/en/pages/3bdccac6/)
- [How to Download the ASTER Global DEM](/en/pages/da7fa1/)
- [CryoSat-2 Antarctica 1 km DEM](/en/pages/a0390601/)
- [SRTM Digital Elevation Data Version 4](/en/pages/81d193ff/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
