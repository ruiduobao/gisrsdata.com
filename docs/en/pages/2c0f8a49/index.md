---
title: "MERRA-2 M2T1NXAER: Aerosol Diagnostics V5.12.4"
date: 2026-11-03 12:00:00
---

# MERRA-2 M2T1NXAER: Aerosol Diagnostics V5.12.4

Original name: MERRA-2 M2T1NXAER: Aerosol Diagnostics V5.12.4

## What this dataset is

M2T1NXAER (or tavg1_2d_aer_Nx) is an hourly time-averaged 2-dimensional data
collection in Modern-Era Retrospective analysis for Research and
Applications version 2 (MERRA-2). This collection consists of assimilated
aerosol diagnostics, such as column mass density of aerosol components
(black carbon, dust, sea-salt, sulfate, and organic carbon), surface mass
concentration of aerosol components, and total extinction (and scattering)
aerosol optical thickness (AOT) at 550 nm. The total PM1.0, PM2.5, and PM10
may be derived with the formula described in the
[in the FAQ] (https://gmao.gsfc.nasa.gov/reanalysis/MERRA-2/FAQ/)

The data field is time-stamped with the
central time of an hour starting from 00:30 UTC,
e.g.: 00:30, 01:30, ... , 23:30 UTC.

MERRA-2 is the latest version of global atmospheric reanalysis for the
satellite era produced by NASA Global Modeling and Assimilation Office
(GMAO) using the Goddard Earth Observing System Model (GEOS) version 5.12.4.
The dataset covers the period of 1980-present with the latency of ~3 weeks
after the end of a month.

## Coverage and time range

- Coverage: Coverage: global; time span: 1980 to 2026; resolution: 69,375 m.
- Time range: 1980-01-01 至 2026-10-01

## Resolution and specifications

- Spatial resolution: about 69,375 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| BCANGSTR | Black carbon angstrom parameter [470-870 nm] | 69375 |  |
| BCCMASS | Black carbon column mass density | 69375 |  |
| BCEXTTAU | Black carbon extinction AOT [550 nm] | 69375 |  |
| BCFLUXU | Black carbon column u-wind mass flux | 69375 |  |
| BCFLUXV | Black carbon column v-wind mass flux | 69375 |  |
| BCSCATAU | Black carbon scattering AOT [550 nm] | 69375 |  |
| BCSMASS | Black carbon surface mass concentration | 69375 |  |
| DMSCMASS | Dms column mass density | 69375 |  |
| DMSSMASS | Dms surface mass concentration | 69375 |  |
| DUANGSTR | Dust angstrom parameter [470-870 nm] | 69375 |  |
| DUCMASS25 | Dust column mass density - PM2.5 | 69375 |  |
| DUCMASS | Dust column mass density | 69375 |  |
| DUEXTT25 | Dust extinction AOT [550 nm] - PM2.5 | 69375 |  |
| DUEXTTAU | Dust extinction AOT [550 nm] | 69375 |  |
| DUFLUXU | Dust column u-wind mass flux | 69375 |  |
| DUFLUXV | Dust column v-wind mass flux | 69375 |  |
| DUSCAT25 | Dust scattering AOT [550 nm] - PM2.5 | 69375 |  |
| DUSCATAU | Dust scattering AOT [550 nm] | 69375 |  |
| DUSMASS25 | Dust surface mass concentration - PM2.5 | 69375 |  |
| DUSMASS | Dust surface mass concentration | 69375 |  |
| OCANGSTR | Organic carbon angstrom parameter [470-870 nm] | 69375 |  |
| OCCMASS | Organic carbon column mass density | 69375 |  |
| OCEXTTAU | Organic carbon extinction AOT [550 nm] | 69375 |  |
| OCFLUXU | Organic carbon column u-wind mass flux | 69375 |  |
| OCFLUXV | Organic carbon column v-wind mass flux | 69375 |  |
| OCSCATAU | Organic carbon scattering AOT [550 nm] | 69375 |  |
| OCSMASS | Organic carbon surface mass concentration | 69375 |  |
| SO2CMASS | So2 column mass density | 69375 |  |
| SO2SMASS | So2 surface mass concentration | 69375 |  |
| SO4CMASS | SO4 column mass density | 69375 |  |
| SO4SMASS | SO4 surface mass concentration | 69375 |  |
| SSANGSTR | Sea salt angstrom parameter [470-870 nm] | 69375 |  |
| SSCMASS25 | Sea salt column mass density - PM2.5 | 69375 |  |
| SSCMASS | Sea salt column mass density | 69375 |  |
| SSEXTT25 | Sea salt extinction AOT [550 nm] - PM2.5 | 69375 |  |
| SSEXTTAU | Sea salt extinction AOT [550 nm] | 69375 |  |
| SSFLUXU | Sea salt column u-wind mass flux | 69375 |  |
| SSFLUXV | Sea salt column v-wind mass flux | 69375 |  |
| SSSCAT25 | Sea salt scattering AOT [550 nm] - PM2.5 | 69375 |  |
| SSSCATAU | Sea salt scattering AOT [550 nm] | 69375 |  |
| SSSMASS25 | Sea salt surface mass concentration - PM2.5 | 69375 |  |
| SSSMASS | Sea salt surface mass concentration | 69375 |  |
| SUANGSTR | SO4 angstrom parameter [470-870 nm] | 69375 |  |
| SUEXTTAU | SO4 extinction AOT [550 nm] | 69375 |  |
| SUFLUXU | SO4 column u-wind mass flux | 69375 |  |
| SUFLUXV | SO4 column v-wind mass flux | 69375 |  |
| SUSCATAU | SO4 scattering AOT [550 nm] | 69375 |  |
| TOTANGSTR | Total aerosol angstrom parameter [470-870 nm] | 69375 |  |
| TOTEXTTAU | Total aerosol extinction AOT [550 nm] | 69375 |  |
| TOTSCATAU | Total aerosol scattering AOT [550 nm] | 69375 |  |

## What you can use it for

- Atmospheric reanalysis and climate research
- Aerosol and air quality analysis
- Weather and climate modeling

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/GSFC/MERRA/aer/2');
```

- Earth Engine ID: `NASA/GSFC/MERRA/aer/2`
- Providers: NASA/MERRA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_GSFC_MERRA_aer_2

## License and citation

- License: proprietary
- Keywords: aerosol, atmosphere, carbon, dust, mass, merra, nasa, sea-salt, so2, so4
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MERRA-2 M2I3NVAER: Aerosol Mixing Ratio V5.12.4](/pages/a20ec4cb/)
- [MERRA-2 M2T1NXRAD: Radiation Diagnostics V5.12.4](/pages/201faee8/)
- [MERRA-2 M2T1NXSLV: Single-Level Diagnostics V5.12.4](/pages/36298a6b/)
- [ERA5 Hourly — ECMWF Climate Reanalysis](/en/pages/2de85afd/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
