---
title: "VNP09H1: VIIRS Surface Reflectance 8-Day L3 Global 500m"
date: 2026-11-03 12:00:00
---

# VNP09H1: VIIRS Surface Reflectance 8-Day L3 Global 500m

Original name: VNP09H1: VIIRS Surface Reflectance 8-Day L3 Global 500m

## What this dataset is

The 8-day Visible Infrared Imaging Radiometer Suite (VIIRS) Surface
Reflectance (VNP09H1) Version 1 composite product provides an estimate of
land surface reflectance from the Suomi National Polar-orbiting Partnership
(Suomi NPP) VIIRS sensor for three imagery bands (I1, I2, I3) at nominal
500m resolution (~463m). The 500m dataset is derived through resampling the
native 375m VIIRS resolution in the L2 input product. The data are corrected
for atmospheric conditions such as the effects of molecular gases, including
ozone and water vapor, and for the effects of atmospheric aerosols. Each
pixel represents the best possible Level 2G observation during an 8-day
period, which is selected on the basis of high observation coverage, low
sensor angle, the absence of clouds or cloud shadow, and aerosol loading.
The three reflectance bands, this product includes a state quality assurance
(QA) layer and a reflectance band quality layer.

## Coverage and time range

- Coverage: Coverage: global; time span: 2012 to 2026; resolution: 500 m.
- Time range: 2012-01-19 至 2026-10-16

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| SurfReflect_I1 | 500 m Surface Reflectance Band I1 | 500 |  |
| SurfReflect_I2 | 500 m Surface Reflectance Band I2 | 500 |  |
| SurfReflect_I3 | 500 m Surface Reflectance Band I3 | 500 |  |
| SurfReflect_QC_500m | Surface Reflectance Band Quality Control (QC) | 500 |  |
| SurfReflect_State_500m | Surface Reflectance State Quality Assurance (QA) | 500 |  |

## What you can use it for

- Surface reflectance monitoring
- Vegetation and land cover research
- VIIRS data applications

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP09H1');
```

- Earth Engine ID: `NASA/VIIRS/002/VNP09H1`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP09H1
* [User's Guide]( https://lpdaac.usgs.gov/documents/1657/VNP09_User_Guide_V2.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/122/VNP09_ATBD.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/vnp09h1v002/)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## License and citation

- License: proprietary
- Keywords: daily, nasa, noaa, npp, reflectance, satellite-imagery, sr, viirs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
- DOI：10.5067/VIIRS/VNP09H1.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [VNP09GA: VIIRS Surface Reflectance Daily 500m and 1km](/pages/f3f78834/)
- [VNP43IA3: BRDF/Albedo Daily L3 Global 500m SIN Grid](/pages/217dd9b2/)
- [VNP43IA4: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid](/pages/00b89222/)
- [VNP43MA3: BRDF/Albedo Daily L3 Global 1km SIN Grid](/pages/86f9040c/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
