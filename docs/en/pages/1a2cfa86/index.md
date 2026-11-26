---
title: "Sentinel-2 Cloud Probability"
date: 2026-11-03 12:00:00
---

# Sentinel-2 Cloud Probability

Original name: Sentinel-2: Cloud Probability

## What this dataset is

The S2 cloud probability is created with the [sentinel2-cloud-detector](https://github.com/sentinel-hub/sentinel2-cloud-detector) library (using [LightGBM](https://github.com/microsoft/LightGBM)). All bands are upsampled using bilinear interpolation to 10 m resolution before the gradient boosting algorithm is applied. The resulting 0..1 floating point probability is scaled to 0..100 and stored as UINT8. Areas missing any or all of the bands are masked out. Higher values are more likely to be clouds or highly reflective surfaces (e.g. roof tops or snow).

Sentinel-2 is a wide-swath, high-resolution, multi-spectral imaging mission supporting Copernicus Land Monitoring studies, including the monitoring of vegetation, soil and water cover, as well as observation of inland waterways and coastal areas.

The Level-2 data can be found in the collection [COPERNICUS/S2_SR_HARMONIZED](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR_HARMONIZED). The Level-1B data can be found in the collection [COPERNICUS/S2_HARMONIZED](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED). Additional metadata is available on assets in those collections.

See [this tutorial](https://developers.google.com/earth-engine/tutorials/community/sentinel-2-s2cloudless) explaining how to apply the cloud mask.

## Coverage and time range

- Coverage: Global land and coastal areas imaged by Sentinel-2
- Time range: 2015-06-27 至 2026-11-03

## Resolution and specifications

- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| probability | Probability that the pixel is cloudy. | 10 |  |

## What you can use it for

- Cloud masking for Sentinel-2 imagery (s2cloudless workflow)
- Screening scenes before vegetation and land analysis
- Identifying highly reflective surfaces such as rooftops and snow

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/S2_CLOUD_PROBABILITY');
```

- Earth Engine ID: `COPERNICUS/S2_CLOUD_PROBABILITY`
- Providers: European Union/ESA/Copernicus/SentinelHub, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_CLOUD_PROBABILITY

## License and citation

- License: proprietary
- Keywords: cloud, copernicus, esa, eu, msi, radiance, satellite-imagery, sentinel, sentinelhub
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ASTER L1T Radiance](/en/pages/b48e6fb4/)
- [Landsat 8 Level 2 Surface Reflectance and Surface Temperature](/en/pages/778e3960/)
- [Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-1C (TOA)](/en/pages/07bc7cbd/)
- [Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-2A (SR)](/en/pages/0620c27d/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
