---
title: "MOD09A1.005 Surface Reflectance 8-Day Global 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# MOD09A1.005 Surface Reflectance 8-Day Global 500m [deprecated]

Original name: MOD09A1.005 Surface Reflectance 8-Day Global 500m [deprecated]

## What this dataset is

The MODIS Surface Reflectance products
provide an estimate of the surface spectral reflectance as it would be
measured at ground level in the absence of atmospheric scattering or
absorption. Low-level data are corrected for atmospheric gases and
aerosols, yielding a level-2 basis for several higher-order gridded
level-2 (L2G) and level-3 products.

MOD09A1 provides
Bands 1-7 at 500-meter resolution in an 8-day gridded level-3 product in the
Sinusoidal projection. Each MOD09A1 pixel contains the best possible L2G
observation during an 8-day period as selected on the basis of high observation
coverage, low view angle, the absence of clouds or cloud shadow, and aerosol
loading. Science Data Sets provided for this product include reflectance values
for Bands 1-7, quality assessment, and the day of the year for the pixel along
with solar, view, and zenith angles.

Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data) for information on citing LP DAAC datasets.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2017; resolution: 500 m.
- Time range: 2000-02-18 至 2017-03-22

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| sur_refl_b01 | Surface reflectance for band 1 | 500 | 620-670nm |
| sur_refl_b02 | Surface reflectance for band 2 | 500 | 841-876nm |
| sur_refl_b03 | Surface reflectance for band 3 | 500 | 459-479nm |
| sur_refl_b04 | Surface reflectance for band 4 | 500 | 545-565nm |
| sur_refl_b05 | Surface reflectance for band 5 | 500 | 1230-1250nm |
| sur_refl_b06 | Surface reflectance for band 6 | 500 | 1628-1652nm |
| sur_refl_b07 | Surface reflectance for band 7 | 500 | 2105-2155nm |
| QA | Surface reflectance 500m band quality control flags | 500 |  |
| SolarZenith | MODIS Solar zenith angle | 500 |  |
| ViewZenith | MODIS view zenith angle | 500 |  |
| RelativeAzimuth | MODIS relative azimuth angle | 500 |  |
| StateQA | Surface reflectance 500m state flags | 500 |  |
| DayOfYear | Julian day of the year for the pixel | 500 |  |

## What you can use it for

- Surface reflectance and land-cover analysis
- Vegetation and phenology monitoring
- Atmospheric correction research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/MOD09A1');
```

- Earth Engine ID: `MODIS/MOD09A1`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_MOD09A1

## License and citation

- License: proprietary
- Keywords: 8-day, global, mod09a1, modis, satellite-imagery, surface-reflectance, terra
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ALOS/AVNIR-2 ORI](/en/pages/d4abf354/)
- [ALOS-2 PALSAR-2 StripMap Level 2.1](/en/pages/b836b19e/)
- [ASTER L1T Radiance](/en/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/en/pages/4a61128e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
