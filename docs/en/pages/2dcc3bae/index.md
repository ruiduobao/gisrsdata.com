---
title: "MCD19A2.006: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km [deprecated]"
date: 2026-11-03 12:00:00
---

# MCD19A2.006: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km [deprecated]

Original name: MCD19A2.006: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km [deprecated]

## What this dataset is

The MCD19A2 V6 data product is a MODIS Terra and Aqua combined Multi-angle
Implementation of Atmospheric Correction (MAIAC) Land Aerosol Optical Depth (AOD) gridded
Level 2 product produced daily at 1 km resolution. For more information
see the [MAIAC user guide](https://lpdaac.usgs.gov/documents/110/MCD19_User_Guide_V6.pdf).

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2023; resolution: 1 km.
- Time range: 2000-02-26 至 2023-02-17

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Optical_Depth_047 | Blue band (0.47 &mu;m) aerosol optical depth over land | 1000 |  |
| Optical_Depth_055 | Green band (0.55 &mu;m) aerosol optical depth over land | 1000 |  |
| AOD_Uncertainty | AOD uncertainty based on blue-band surface brightness (reflectance) | 1000 |  |
| FineModeFraction | Fine mode fraction for ocean | 1000 |  |
| Column_WV | Column water vapor over land | 1000 |  |
| AOD_QA | AOD QA | 1000 |  |
| AOD_MODEL | AOD model used in retrieval | 1000 |  |
| Injection_Height | Smoke injection height | 1000 |  |
| cosSZA | Cosine of solar zenith angle (5 km resolution) | 1000 |  |
| cosVZA | Cosine view zenith angle (5 km resolution) | 1000 |  |
| RelAZ | Relative azimuth angle (5 km resolution) | 1000 |  |
| Scattering_Angle | Scattering angle (5 km resolution) | 1000 |  |
| Glint_Angle | Glint angle (5 km resolution) | 1000 |  |

## What you can use it for

- Aerosol and air quality monitoring
- Atmospheric correction support
- Climate research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/006/MCD19A2_GRANULES');
```

- Earth Engine ID: `MODIS/006/MCD19A2_GRANULES`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MCD19A2_GRANULES
* [User's Guide](https://lpdaac.usgs.gov/documents/110/MCD19_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/111/MCD19_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/6/MCD19A2)

## License and citation

- License: proprietary
- Keywords: aerosol, aod, aqua, atmosphere, daily, global, maiac, mcd19a2, modis, nasa, terra, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD19A2.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MOD08_M3.006 Terra Aerosol Cloud Water Vapor Ozone Monthly Global Product 1Deg CMG [deprecated]](/pages/93d0522c/)
- [MYD08_M3.006 Aqua Aerosol Cloud Water Vapor Ozone Monthly Global Product 1Deg CMG [deprecated]](/pages/6fa8c555/)
- [ERA5 Hourly — ECMWF Climate Reanalysis](/en/pages/2de85afd/)
- [ERA5 Hourly Pressure Levels — ECMWF Climate Reanalysis](/en/pages/e4d910e9/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
