---
title: "Copernicus Marine Physics 2D Daily Mean Fields"
date: 2026-11-03 12:00:00
---

# Copernicus Marine Physics 2D Daily Mean Fields

Original name: Global Ocean Physics Analysis and Forecast Daily

## What this dataset is

The Copernicus Marine Physics 2D Daily Mean Fields (cmems_mod_glo_phy_anfc_0.083deg_P1D-m) deliver global daily-averaged ocean surface and bottom variables at 8 km resolution.

The operational Mercator global ocean analysis and forecast system provides 10 days of 2D global ocean forecasts, updated daily. The time series is aggregated in time to reach a two full years' sliding window. The product includes daily mean files of temperature, salinity, currents, sea level, mixed layer depth and ice parameters from the top to the bottom over the global ocean.

## Coverage and time range

- Coverage: Global ocean
- Time range: 2022-06-01 至 2026-11-06

## Resolution and specifications

- Spatial resolution: about 9,276.62 m (about 9.28 km (0.083-degree grid; nominal 8 km))
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| sialb | Mean albedo over sea ice | 9276.62 |  |
| siage | Mean sea ice age | 9276.62 |  |
| siconc | Sea Ice Concentration | 9276.62 |  |
| ist | Sea Ice Surface Temperature | 9276.62 |  |
| sivelo | Sea Ice Velocity | 9276.62 |  |
| sithick | Sea Ice Thickness | 9276.62 |  |
| sisnthick | Sea Ice Surface Snow Thickness | 9276.62 |  |
| mlotst | Mixed Layer Depth | 9276.62 |  |
| pbo | Sea Water Pressure at Sea floor | 9276.62 |  |
| sob | Sea Bottom Salinity | 9276.62 |  |
| zos | Sea Surface Height | 9276.62 |  |
| tob | Sea Bottom Temperature | 9276.62 |  |
| usi | Sea Ice Eastward Velocity | 9276.62 |  |
| vsi | Sea Ice Northward Velocity | 9276.62 |  |

## What you can use it for

- Daily sea-surface and sea-bottom physical state for the global ocean
- Sea-ice monitoring (concentration, thickness, velocity, snow)
- Ocean analysis and 10-day forecast applications

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_PHY_DAILY');
```

- Earth Engine ID: `COPERNICUS/MARINE/GLOBAL_ANALYSISFORECAST_PHY_DAILY`
- Providers: Copernicus Marine Service, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_ANALYSISFORECAST_PHY_DAILY

## License and citation

- License: CC-BY-4.0
- Keywords: copernicus, daily, forecast, oceans
- 数据引用：E.U. Copernicus Marine Service Information (2024). Global Ocean Physics Analysis and Forecast.
[doi:10.48670/moi-00016](https://doi.org/10.48670/moi-00016)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Global Ocean Colour — Optics, Multi-Sensor 4 km Monthly](/en/pages/b4a5e847/)
- [Global Ocean Colour — Primary Production, Multi-Sensor 4 km](/en/pages/6396836c/)
- [Global Ocean Colour — Reflectance, OLCI 300 m](/en/pages/f4ffb7b4/)
- [Global Ocean Colour — Reflectance, Multi-Sensor 4 km](/en/pages/472dc170/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
