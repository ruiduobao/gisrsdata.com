---
title: "VNP46A2: VIIRS Lunar Gap-Filled BRDF Nighttime Lights Daily L3 Global 500m [deprecated]"
date: 2026-11-03 12:00:00
---

# VNP46A2: VIIRS Lunar Gap-Filled BRDF Nighttime Lights Daily L3 Global 500m [deprecated]

Original name: VNP46A2: VIIRS Lunar Gap-Filled BRDF Nighttime Lights Daily L3 Global 500m [deprecated]

## What this dataset is

The Suomi National Polar-orbiting Partnership (SNPP) Visible Infrared
Imaging Radiometer Suite (VIIRS) supports a Day-Night Band (DNB) sensor
that provides global daily measurements of nocturnal visible and
near-infrared (NIR) light that are suitable for Earth system science and
applications. The VIIRS DNB's ultra-sensitivity in lowlight conditions
enables us to generate a new set of science-quality nighttime products that
manifest substantial improvements in sensor resolution and calibration when
compared to the previous era of Defense Meteorological Satellite
Program/Operational Linescan System's (DMSP/OLS) nighttime lights image
products.

VNP46A2 dataset is a daily moonlight- and atmosphere-corrected Nighttime
Lights (NTL) product using the Bidirectional Reflectance Distribution
Function (BRDF).

## Coverage and time range

- Coverage: Spatial: global; temporal: 2012 to 2024 (daily); resolution: 500 m.
- Time range: 2012-01-19 至 2024-12-26

## Resolution and specifications

- Spatial resolution: about 500 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| DNB_BRDF_Corrected_NTL | BRDF corrected DNB NTL | 500 |  |
| Gap_Filled_DNB_BRDF_Corrected_NTL | Gap Filled BRDF corrected DNB NTL | 500 |  |
| DNB_Lunar_Irradiance | DNB Lunar Irradiance | 500 |  |
| Latest_High_Quality_Retrieval | Latest high quality BRDF corrected DNB radiance retrieval | 500 |  |
| Mandatory_Quality_Flag | Mandatory quality flag | 500 |  |
| Snow_Flag | Flag for snow cover | 500 |  |
| QF_Cloud_Mask | Quality flag for cloud mask | 500 |  |

## What you can use it for

- Call the dataset in Google Earth Engine and overlay boundaries, land cover and other layers for spatial analysis.
- Run long time-series analyses, extract regional statistics and export charts and GeoTIFFs.
- Use it as teaching and research sample data demonstrating ImageCollection filtering, compositing and visualization in Earth Engine.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP46A2');
```

- Earth Engine ID: `NOAA/VIIRS/001/VNP46A2`
- Providers: NASA LAADS DAAC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP46A2
* [User's Guide](https://ladsweb.modaps.eosdis.nasa.gov/api/v2/content/archives/Document%20Archive/Science%20Data%20Product%20Documentation/VIIRS_Black_Marble_UG_v1.3_Sep_2022.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://ladsweb.modaps.eosdis.nasa.gov/api/v2/content/archives/Document%20Archive/Science%20Data%20Product%20Documentation/Product%20Generation%20Algorithms/VIIRS_Black_Marble_ATBD_v1.1_July_2020.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/missions-and-measurements/products/VNP46A2/)

## License and citation

- License: proprietary
- Keywords: brdf, daily, nasa, nighttime, noaa, population, viirs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
- DOI：10.5067/VIIRS/VNP46A2.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [VIIRS Nighttime Day/Night Band Composites Version 1](/en/pages/331f49de/)
- [VIIRS Nighttime Day/Night Annual Band Composites V2.1](/en/pages/98ca1d9b/)
- [VIIRS Nighttime Day/Night Annual Band Composites V2.2](/en/pages/57765f1c/)
- [VIIRS Stray Light Corrected Nighttime Day/Night Band Composites Version 1](/en/pages/b0f1292c/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
