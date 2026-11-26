---
title: "MERRA-2 M2T1NXRAD: Radiation Diagnostics V5.12.4"
date: 2026-11-03 12:00:00
---

# MERRA-2 M2T1NXRAD: Radiation Diagnostics V5.12.4

Original name: MERRA-2 M2T1NXRAD: Radiation Diagnostics V5.12.4

## What this dataset is

M2T1NXRAD (or tavg1_2d_rad_Nx) is an hourly time-averaged data
collection in Modern-Era Retrospective analysis for Research and
Applications version 2 (MERRA-2). This collection consists of radiation
diagnostics, such as surface albedo, cloud area fraction, in cloud
optical thickness, surface incoming shortwave flux (i.e. solar
radiation), surface net downward shortwave flux, and upwelling longwave
flux at TOA (top of atmosphere) (i.e. outgoing longwave radiation (OLR)
at TOA). The data field is time-stamped with the central time of an hour
starting from 00:30 UTC, e.g.: 00:30, 01:30, ... , 23:30 UTC.

MERRA-2 is the latest version of global atmospheric reanalysis for the
satellite era produced by NASA Global Modeling and Assimilation Office
(GMAO) using the Goddard Earth Observing System Model (GEOS) version
5.12.4. The dataset covers the period of 1980-present with the latency
of ~3 weeks after the end of a month.

## Coverage and time range

- Coverage: Coverage: global; time span: 1980 to 2026; resolution: 69,375 m.
- Time range: 1980-01-01 至 2026-10-01

## Resolution and specifications

- Spatial resolution: about 69,375 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| ALBEDO | Surface albedo | 69375 |  |
| ALBNIRDF | Surface albedo for near infrared diffuse | 69375 |  |
| ALBNIRDR | Surface albedo for near infrared beam | 69375 |  |
| ALBVISDF | Surface albedo for visible diffuse | 69375 |  |
| ALBVISDR | Surface albedo for visible beam | 69375 |  |
| CLDHGH | Cloud area fraction for high clouds | 69375 |  |
| CLDLOW | Cloud area fraction for low clouds | 69375 |  |
| CLDMID | Cloud area fraction for middle clouds | 69375 |  |
| CLDTOT | Total cloud area fraction | 69375 |  |
| EMIS | Surface emissivity | 69375 |  |
| LWGABCLRCLN | Surface absorbed longwave radiation assuming clear sky and no aerosol | 69375 |  |
| LWGABCLR | Surface absorbed longwave radiation assuming clear sky | 69375 |  |
| LWGAB | Surface absorbed longwave radiation | 69375 |  |
| LWGEM | Longwave flux emitted from surface | 69375 |  |
| LWGNTCLRCLN | Surface net downward longwave flux assuming clear sky and no aerosol | 69375 |  |
| LWGNTCLR | Surface net downward longwave flux assuming clear sky | 69375 |  |
| LWGNT | Surface net downward longwave flux | 69375 |  |
| LWTUPCLRCLN | Upwelling longwave flux at TOA assuming clear sky and no aerosol | 69375 |  |
| LWTUPCLR | Upwelling longwave flux at TOA assuming clear sky | 69375 |  |
| LWTUP | Upwelling longwave flux at TOA | 69375 |  |
| SWGDNCLR | Surface incoming shortwave flux assuming clear sky | 69375 |  |
| SWGDN | Surface incoming shortwave flux | 69375 |  |
| SWGNTCLN | Surface net downward shortwave flux assuming no aerosol | 69375 |  |
| SWGNTCLRCLN | Surface net downward shortwave flux assuming clear sky and no aerosol | 69375 |  |
| SWGNTCLR | Surface net downward shortwave flux assuming clear sky | 69375 |  |
| SWGNT | Surface net downward shortwave flux | 69375 |  |
| SWTDN | TOA incoming shortwave flux | 69375 |  |
| SWTNTCLN | TOA net downward shortwave flux assuming no aerosol | 69375 |  |
| SWTNTCLRCLN | TOA net downward shortwave flux assuming clear sky and no aerosol | 69375 |  |
| SWTNTCLR | TOA net downward shortwave flux assuming clear sky | 69375 |  |
| SWTNT | TOA net downward shortwave flux | 69375 |  |
| TAUHGH | In cloud optical thickness of high clouds(export) | 69375 |  |
| TAULOW | In cloud optical thickness of low clouds | 69375 |  |
| TAUMID | In cloud optical thickness of middle clouds | 69375 |  |
| TAUTOT | In cloud optical thickness of all clouds | 69375 |  |
| TS | Surface skin temperature | 69375 |  |

## What you can use it for

- Atmospheric reanalysis and climate research
- Aerosol and air quality analysis
- Weather and climate modeling

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/GSFC/MERRA/rad/2');
```

- Earth Engine ID: `NASA/GSFC/MERRA/rad/2`
- Providers: NASA/MERRA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_GSFC_MERRA_rad_2

## License and citation

- License: proprietary
- Keywords: albedo, atmosphere, climate, emissivity, merra, shortwave, temperature, weather-and-climate
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MERRA-2 M2I3NVAER: Aerosol Mixing Ratio V5.12.4](/pages/a20ec4cb/)
- [MERRA-2 M2T1NXAER: Aerosol Diagnostics V5.12.4](/pages/2c0f8a49/)
- [MERRA-2 M2T1NXSLV: Single-Level Diagnostics V5.12.4](/pages/36298a6b/)
- [ERA5 Hourly — ECMWF Climate Reanalysis](/en/pages/2de85afd/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
