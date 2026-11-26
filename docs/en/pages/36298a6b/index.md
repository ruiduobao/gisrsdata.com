---
title: "MERRA-2 M2T1NXSLV: Single-Level Diagnostics V5.12.4"
date: 2026-11-03 12:00:00
---

# MERRA-2 M2T1NXSLV: Single-Level Diagnostics V5.12.4

Original name: MERRA-2 M2T1NXSLV: Single-Level Diagnostics V5.12.4

## What this dataset is

M2T1NXSLV (or tavg1_2d_slv_Nx) is an hourly time-averaged 2-dimensional data
collection in Modern-Era Retrospective analysis for Research and
Applications version 2 (MERRA-2). This collection consists of meteorology
diagnostics at popularly used vertical levels, such as air temperature at
2-meter (or at 10-meter, 850hPa, 500 hPa, 250hPa), wind components at
50-meter (or at 2-meter, 10-meter, 850 hPa, 500hPa, 250 hPa), sea level
pressure, surface pressure, and total precipitable water vapor (or ice
water, liquid water). The data field is time-stamped with the central time
of an hour starting from 00:30 UTC, e.g.: 00:30, 01:30, ... , 23:30 UTC.

MERRA-2 is the latest version of global atmospheric reanalysis for
the satellite era produced by NASA Global Modeling and Assimilation
Office (GMAO) using the Goddard Earth Observing System Model (GEOS)
version 5.12.4. The dataset covers the period of 1980-present with the
latency of ~3 weeks after the end of a month.

## Coverage and time range

- Coverage: Coverage: global; time span: 1980 to 2026; resolution: 69,375 m.
- Time range: 1980-01-01 至 2026-10-01

## Resolution and specifications

- Spatial resolution: about 69,375 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| CLDPRS | Cloud top pressure | 69375 |  |
| CLDTMP | Cloud top temperature | 69375 |  |
| DISPH | Zero plane displacement height | 69375 |  |
| H1000 | Height at 1000 mb | 69375 |  |
| H250 | Height at 250 hPa | 69375 |  |
| H500 | Height at 500 hPa | 69375 |  |
| H850 | Height at 850 hPa | 69375 |  |
| OMEGA500 | Omega at 500 hPa | 69375 |  |
| PBLTOP | Pbltop pressure | 69375 |  |
| PS | Surface pressure | 69375 |  |
| Q250 | Specific humidity at 250 hPa | 69375 |  |
| Q500 | Specific humidity at 500 hPa | 69375 |  |
| Q850 | Specific humidity at 850 hPa | 69375 |  |
| QV10M | 10-meter specific humidity | 69375 |  |
| QV2M | 2-meter specific humidity | 69375 |  |
| SLP | Sea level pressure | 69375 |  |
| T10M | 10-meter air temperature | 69375 |  |
| T250 | Air temperature at 250 hPa | 69375 |  |
| T2MDEW | Dew point temperature at 2 m | 69375 |  |
| T2MWET | Wet bulb temperature at 2 m | 69375 |  |
| T2M | 2-meter air temperature | 69375 |  |
| T500 | Air temperature at 500 hPa | 69375 |  |
| T850 | Air temperature at 850 hPa | 69375 |  |
| TO3 | Total column ozone | 69375 |  |
| TOX | Total column odd oxygen | 69375 |  |
| TQI | Total precipitable ice water | 69375 |  |
| TQL | Total precipitable liquid water | 69375 |  |
| TQV | Total precipitable water vapor | 69375 |  |
| TROPPB | Tropopause pressure (TROPP) based on blended estimate | 69375 |  |
| TROPPT | Tropopause pressure based on thermal estimate | 69375 |  |
| TROPPV | Tropopause pressure based on epv estimate | 69375 |  |
| TROPQ | Tropopause specific humidity using blended tropp (TROPPB) estimate | 69375 |  |
| TROPT | Tropopause temperature using blended tropp estimate | 69375 |  |
| TS | Surface skin temperature | 69375 |  |
| U10M | 10-meter eastward wind | 69375 |  |
| U250 | Eastward wind at 250 hPa | 69375 |  |
| U2M | 2-meter eastward wind | 69375 |  |
| U500 | Eastward wind at 500 hPa | 69375 |  |
| U50M | Eastward wind at 50 meters | 69375 |  |
| U850 | Eastward wind at 850 hPa | 69375 |  |
| V10M | 10-meter northward wind | 69375 |  |
| V250 | Northward wind at 250 hPa | 69375 |  |
| V2M | 2-meter northward wind | 69375 |  |
| V500 | Northward wind at 500 hPa | 69375 |  |
| V50M | Northward wind at 50 meters | 69375 |  |
| V850 | Northward wind at 850 hPa | 69375 |  |
| ZLCL | Lifting condensation level | 69375 |  |

## What you can use it for

- Atmospheric reanalysis and climate research
- Numerical weather prediction
- Water cycle and energy balance analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/GSFC/MERRA/slv/2');
```

- Earth Engine ID: `NASA/GSFC/MERRA/slv/2`
- Providers: NASA/MERRA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_GSFC_MERRA_slv_2

## License and citation

- License: proprietary
- Keywords: atmosphere, climate, condensation, humidity, merra, nasa, omega, pressure, slv, temperature, vapor, water, water-vapor, weather-and-climate, wind
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MERRA-2 M2I3NVAER: Aerosol Mixing Ratio V5.12.4](/pages/a20ec4cb/)
- [MERRA-2 M2T1NXAER: Aerosol Diagnostics V5.12.4](/pages/2c0f8a49/)
- [MERRA-2 M2T1NXRAD: Radiation Diagnostics V5.12.4](/pages/201faee8/)
- [ERA5 Hourly — ECMWF Climate Reanalysis](/en/pages/2de85afd/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
