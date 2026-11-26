---
title: "MCD19A2.061: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km"
date: 2026-11-03 12:00:00
---

# MCD19A2.061: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km

Original name: MCD19A2.061: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km

## What this dataset is

The MCD19A2 V6.1 data product is a MODIS Terra and Aqua combined Multi-angle
Implementation of Atmospheric Correction (MAIAC) Land Aerosol Optical Depth
(AOD) gridded Level 2 product produced daily at 1 km resolution. For more
information see the [MAIAC user guide](https://lpdaac.usgs.gov/documents/1500/MCD19_User_Guide_V61.pdf).

NOTE: This product has been released with the caveat that the reprocessing
for the full mission is expected to continue through summer 2023.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2026; resolution: 1 km.
- Time range: 2000-02-24 至 2026-10-31

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Optical_Depth_047 | Aerosol optical depth over land retrieved in the MODIS Blue band (0.47 &mu;m). AOD is not received at high altitude (greater than 4.2 km) except when smoke or dust is detected; rather, we report a static value of 0.02 used for atmospheric correction. | 1000 |  |
| Optical_Depth_055 | Aerosol optical depth over land retrieved in the MODIS Green band (0.55 &mu;m). | 1000 |  |
| AOD_Uncertainty | AOD uncertainty based on blue-band surface brightness (reflectance) | 1000 |  |
| FineModeFraction | Fine mode fraction for ocean and large inland lakes | 1000 |  |
| Column_WV | Column water vapor over land, retrieved from MODIS near-IR bands at 0.94 &mu;m. When reported for cloudy pixels, it represents water vapor above the cloud. | 1000 |  |
| AOD_QA | AOD QA | 1000 |  |
| Injection_Height | Smoke injection height | 1000 |  |
| AngstromExp_470-780 | Angstrom exponent 470-780nm over the ocean | 1000 |  |
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
var dataset = ee.ImageCollection('MODIS/061/MCD19A2_GRANULES');
```

- Earth Engine ID: `MODIS/061/MCD19A2_GRANULES`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD19A2_GRANULES

## License and citation

- License: proprietary
- Keywords: aerosol, aod, aqua, atmosphere, daily, global, maiac, mcd19a2, modis, nasa, terra, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD19A2.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MOD08_M3.061 Terra Atmosphere Monthly Global Product](/pages/492818e5/)
- [MYD08_M3.061 Aqua Atmosphere Monthly Global Product](/pages/515181f9/)
- [ERA5 Hourly — ECMWF Climate Reanalysis](/en/pages/2de85afd/)
- [ERA5 Hourly Pressure Levels — ECMWF Climate Reanalysis](/en/pages/e4d910e9/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
