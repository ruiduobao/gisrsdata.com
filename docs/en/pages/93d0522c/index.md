---
title: "MOD08_M3.006 Terra Aerosol Cloud Water Vapor Ozone Monthly Global Product 1Deg CMG [deprecated]"
date: 2026-11-03 12:00:00
---

# MOD08_M3.006 Terra Aerosol Cloud Water Vapor Ozone Monthly Global Product 1Deg CMG [deprecated]

Original name: MOD08_M3.006 Terra Aerosol Cloud Water Vapor Ozone Monthly Global Product 1Deg CMG [deprecated]

## What this dataset is

MOD08_M3 V6 is an atmosphere global product that contains
monthly 1 x 1 degree grid average values of atmospheric parameters.
These parameters are related to atmospheric aerosol particle properties,
total ozone burden, atmospheric water vapor, cloud optical and
physical properties, and atmospheric stability indices. The product
also provides means, standard deviations, QA weighted statistics,
log-normal distributions, uncertainty estimates, and statistics
for fractions of pixels that satisfy some condition. Below is a
subset of the bands, for a complete list see the [MOD08 Band List](https://developers.google.com/earth-engine/MOD08_bands.html).

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2018; resolution: 1 degree (about 111,320 m).
- Time range: 2000-03-01 至 2018-04-01

## Resolution and specifications

- Spatial resolution: about 111,320 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Aerosol_Optical_Depth_Land_Ocean_Mean_Mean | Aerosol optical thickness at 0.55 microns for both ocean (best) and land (corrected): mean of daily mean | 111320 |  |
| Aerosol_Optical_Depth_Land_Ocean_Std_Deviation_Mean | Aerosol optical thickness at 0.55 microns for both ocean (best) and land (corrected): mean of daily standard deviation | 111320 |  |
| Aerosol_Optical_Depth_Land_QA_Mean_Mean_470 | Corrected aerosol optical depth (land) at 0.47 microns: mean of level-3 QA weighted mean | 111320 |  |
| Aerosol_Optical_Depth_Land_QA_Std_Deviation_Mean_470 | Corrected aerosol optical depth (land) at 0.47 microns: mean of level-3 weighted QA standard deviation | 111320 |  |
| Cirrus_Fraction_SWIR_FMean | Cirrus area fraction: mean of daily fraction | 111320 |  |
| Cirrus_Fraction_SWIR_FStd | Cirrus area fraction: standard deviation of daily fraction | 111320 |  |
| Cloud_Optical_Thickness_Liquid_Log_Mean_Mean | Liquid water cloud optical thickness: mean of daily log mean | 111320 |  |
| Cloud_Optical_Thickness_Liquid_Log_Std_Deviation_Mean | Liquid water cloud optical thickness: mean of daily log standard deviation | 111320 |  |
| Cloud_Optical_Thickness_Liquid_Mean_Uncertainty | Liquid water cloud optical thickness: multi-day absolute uncertainty estimate derived from the daily absolute uncertainty estimate | 111320 |  |
| Cloud_Optical_Thickness_Liquid_Log_Mean_Uncertainty | Liquid water cloud optical thickness: multi-day absolute log uncertainty estimate derived from the daily absolute log uncertainty estimate | 111320 |  |

## What you can use it for

- Atmospheric parameters and climate research
- Cloud and aerosol analysis
- Ozone and water vapor monitoring

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/006/MOD08_M3');
```

- Earth Engine ID: `MODIS/006/MOD08_M3`
- Providers: NASA LAADS DAAC at NASA Goddard Space Flight Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MOD08_M3
* [User's Guide](https://modis-atmos.gsfc.nasa.gov/sites/default/files/ModAtmo/L3_ATBD_C6_C61_2019_02_20.pdf)
* [Science Data Product Software Documentation](https://modis-atmos.gsfc.nasa.gov/sites/default/files/ModAtmo/L3_C61_Changes_v2.pdf)
* [MYD08_M3 product description](https://modis-atmos.gsfc.nasa.gov/products/monthly)
* [File specification document](https://modis-atmos.gsfc.nasa.gov/sites/default/files/ModAtmo/MOD08_M3_fs_3045.txt)

## License and citation

- License: proprietary
- Keywords: atmosphere, climate, geophysical, global, mod08, mod08-m3, modis, monthly, nasa, temperature, terra, usgs, weather-and-climate
- 数据引用：Platnick, S., M. King, P. Hubanks, 2015. MODIS Atmosphere L3 Monthly
Product. NASA MODIS Adaptive Processing System, Goddard Space Flight
Center, [doi:10.5067/MODIS/MOD08_M3.006](https://doi.org/10.5067/MODIS/MOD08_M3.006)

- DOI：10.5067/MODIS/MOD08_M3.006

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MCD19A2.006: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km [deprecated]](/pages/2dcc3bae/)
- [MYD08_M3.006 Aqua Aerosol Cloud Water Vapor Ozone Monthly Global Product 1Deg CMG [deprecated]](/pages/6fa8c555/)
- [ERA5 Hourly — ECMWF Climate Reanalysis](/en/pages/2de85afd/)
- [ERA5 Hourly Pressure Levels — ECMWF Climate Reanalysis](/en/pages/e4d910e9/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
