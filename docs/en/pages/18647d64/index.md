---
title: "MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km"
date: 2026-11-03 12:00:00
---

# MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km

Original name: MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km

## What this dataset is

The MCD19A1 Version 6.1 data product is a Moderate Resolution Imaging
Spectroradiometer (MODIS) Terra and Aqua combined Land Surface Bidirectional
Reflectance Factor (BRF) gridded Level 2 product produced daily at 500 meter
and 1 kilometer resolution. For more information see the
[MAIAC user guide](https://lpdaac.usgs.gov/documents/1500/MCD19_User_Guide_V61.pdf).

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2026; resolution: 500 m and 1 km.
- Time range: 2000-12-21 至 2026-10-29

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Sur_refl1 | Surface reflectance at 500m for band 1. | 1000 |  |
| Sur_refl2 | Surface reflectance at 500m for band 2. | 1000 |  |
| Sur_refl3 | Surface reflectance at 500m for band 3. | 1000 |  |
| Sur_refl4 | Surface reflectance at 500m for band 4. | 1000 |  |
| Sur_refl5 | Surface reflectance at 500m for band 5. | 1000 |  |
| Sur_refl6 | Surface reflectance at 500m for band 6. | 1000 |  |
| Sur_refl7 | Surface reflectance at 500m for band 7. | 1000 |  |
| Sur_refl8 | Surface reflectance at 1km for band 8. | 1000 |  |
| Sur_refl9 | Surface reflectance at 1km for band 9. | 1000 |  |
| Sur_refl10 | Surface reflectance at 1km for band 10. | 1000 |  |
| Sur_refl11 | Surface reflectance at 1km for band 11. | 1000 |  |
| Sur_refl12 | Surface reflectance at 1km for band 12. | 1000 |  |
| Sigma_BRFn1 | BRFn uncertainty over time at 1km, for band 1 | 1000 |  |
| Sigma_BRFn2 | BRFn uncertainty over time at 1km, for band 2 | 1000 |  |
| Status_QA | QA bits | 1000 |  |
| cosSZA | Cosine of Solar zenith angle (5 km resolution) | 1000 |  |
| cosVZA | Cosine view zenith angle (5 km resolution) | 1000 |  |
| RelAZ | Relative azimuth angle (5 km resolution) | 1000 |  |
| Scattering_Angle | Scattering angle (5 km resolution) | 1000 |  |
| SAZ | Solar Azimuth Angle (5 km resolution) | 1000 |  |
| VAZ | View Azimuth Angle (5 km resolution) | 1000 |  |
| Glint_Angle | Glint angle (5 km resolution) | 1000 |  |
| Fv | RTLS volumetric kernel (5 km resolution) | 1000 |  |
| Fg | RTLS geometric kernel (5 km resolution) | 1000 |  |

## What you can use it for

- Surface reflectance and BRF analysis
- MAIAC aerosol retrieval support
- Radiative transfer research

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/061/MCD19A1_GRANULES');
```

- Earth Engine ID: `MODIS/061/MCD19A1_GRANULES`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD19A1_GRANULES

## License and citation

- License: proprietary
- Keywords: aerosol, aod, aqua, daily, global, maiac, modis, nasa, satellite-imagery, terra, usgs
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD19A1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD43A1.061 MODIS BRDF-Albedo Model Parameters Daily 500m](/pages/568e60e0/)
- [MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m](/pages/cc1794f9/)
- [MCD43A3.061 MODIS Albedo Daily 500m](/pages/80cc401f/)
- [MCD43A4.061 MODIS Nadir BRDF-Adjusted Reflectance Daily 500m](/pages/f2dfffb1/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
