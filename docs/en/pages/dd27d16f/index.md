---
title: "MYD09Q1.005 Surface Reflectance 8-Day L3 Global 250m [deprecated]"
date: 2026-11-03 12:00:00
---

# MYD09Q1.005 Surface Reflectance 8-Day L3 Global 250m [deprecated]

Original name: MYD09Q1.005 Surface Reflectance 8-Day L3 Global 250m [deprecated]

## What this dataset is

The MODIS Surface Reflectance products
provide an estimate of the surface spectral reflectance as it would be
measured at ground level in the absence of atmospheric scattering or
absorption. Low-level data are corrected for atmospheric gases and
aerosols, yielding a level-2 basis for several higher-order gridded
level-2 (L2G) and level-3 products.

MYD09Q1 provides Bands 1
and 2 at 250-meter resolution in an 8-day gridded level-3 product in the
Sinusoidal projection. Each MYD09Q1 pixel contains the best possible L2G
observation during an 8-day period as selected on the basis of
high observation coverage, low view angle, the absence of clouds or cloud
shadow, and aerosol loading. Science Data Sets provided for this product
include reflectance values for Bands 1 and 2, and a quality rating.

Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data) for information on citing LP DAAC datasets.

## Coverage and time range

- Coverage: Coverage: global; time span: 2002 to 2017; resolution: 250 m.
- Time range: 2002-07-04 至 2017-03-22

## Resolution and specifications

- Spatial resolution: about 250 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| sur_refl_b01 | Surface reflectance band 1 | 250 | 620-670nm |
| sur_refl_b02 | Surface reflectance for band 2 | 250 | 841-876nm |
| QA | Surface reflectance 250m band quality control flags | 250 |  |

## What you can use it for

- Surface reflectance and land-cover analysis
- Vegetation and phenology monitoring
- Atmospheric correction research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/MYD09Q1');
```

- Earth Engine ID: `MODIS/MYD09Q1`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD09Q1

## License and citation

- License: proprietary
- Keywords: 8-day, aqua, global, modis, myd09q1, satellite-imagery, surface-reflectance
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/en/pages/4a61128e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
