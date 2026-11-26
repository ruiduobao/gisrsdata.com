---
title: "VNP46A2: VIIRS Lunar Gap-Filled BRDF Nighttime Lights Daily L3 Global 500m"
date: 2026-11-03 12:00:00
---

# VNP46A2: VIIRS Lunar Gap-Filled BRDF Nighttime Lights Daily L3 Global 500m

Original name: VNP46A2: VIIRS Lunar Gap-Filled BRDF Nighttime Lights Daily L3 Global 500m

## What this dataset is

The Suomi National Polar-orbiting Partnership (SNPP) Visible Infrared
Imaging Radiometer Suite (VIIRS) supports a Day-Night Band (DNB) sensor that
provides global daily measurements of nocturnal visible and
near-infrared(NIR) light that are suitable for Earth system science and
applications. The VIIRS DNB's ultra-sensitivity in lowlight conditions
enable us to generate a new set of science-quality nighttime products that
manifest substantial improvements in sensor resolution and calibration when
compared to the previous era of Defense Meteorological Satellite
Program/Operational Linescan System's (DMSP/OLS) nighttime lights image
products. Such improvements allow the VIIRS DNB products to better monitor
both the magnitude and signature of nighttime phenomena, and anthropogenic
sources of light emissions.

VNP46A2 is the short-name for the daily moonlight- and atmosphere-corrected
Nighttime Lights (NTL) product called VIIRS/NPP Gap-Filled Lunar
BRDF-Adjusted Nighttime Lights Daily L3 Global 500m Linear Lat Lon Grid.

## Coverage and time range

- Coverage: Coverage: global; time span: 2012 to 2026; resolution: 500 m.
- Time range: 2012-01-19 至 2026-10-28

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

- Nighttime lights monitoring
- Urbanization and population research
- Anthropogenic light emission analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP46A2');
```

- Earth Engine ID: `NASA/VIIRS/002/VNP46A2`
- Providers: NASA LAADS DAAC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP46A2
* [User's Guide](https://ladsweb.modaps.eosdis.nasa.gov/api/v2/content/archives/Document%20Archive/Science%20Data%20Product%20Documentation/VIIRS_Black_Marble_UG_v1.3_Sep_2022.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://ladsweb.modaps.eosdis.nasa.gov/api/v2/content/archives/Document%20Archive/Science%20Data%20Product%20Documentation/Product%20Generation%20Algorithms/VIIRS_Black_Marble_ATBD_v1.1_July_2020.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/missions-and-measurements/products/VNP46A2/)

## License and citation

- License: proprietary
- Keywords: brdf, daily, nasa, nighttime, noaa, population, viirs
- 数据引用：Román, M.O., Wang, Z., Sun, Q., Kalb, V., Miller, S.D., Molthan, A.,
Schultz, L., Bell, J., Stokes, E.C., Pandey, B. and Seto, K.C., et al.
(2018). NASA's Black Marble nighttime lights product suite.
Remote Sensing of Environment 210, 113-143.
[10.1016/j.rse.2018.03.017](https://doi.org/10.1016/j.rse.2018.03.017)

- DOI：10.5067/VIIRS/VNP46A2.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [DMSP OLS: Global Radiance-Calibrated Nighttime Lights Version 4, Defense Meteorological Program Operational Linescan System](/en/pages/a2c92c1d/)
- [DMSP OLS: Nighttime Lights Time Series Version 4, Defense Meteorological Program Operational Linescan System](/en/pages/65a6304d/)
- [VIIRS Nighttime Day/Night Band Composites Version 1](/en/pages/331f49de/)
- [VIIRS Nighttime Day/Night Annual Band Composites V2.1](/en/pages/98ca1d9b/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
