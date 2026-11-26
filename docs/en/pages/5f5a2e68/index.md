---
title: "Global Ocean Waves Static Bathymetry"
date: 2026-11-03 12:00:00
---

# Global Ocean Waves Static Bathymetry

Original name: Global Ocean Waves Static Bathymetry

## What this dataset is

Static bathymetry for the Global Ocean Waves Analysis and Forecast system. This dataset provides the sea floor depth in meters.

The global wave system of Météo-France is based on the wave model MFWAM, a third-generation wave model using the computing code ECWAM-IFS-38R2 with dissipation terms developed by Ardhuin et al. (2010). The model was upgraded in November 2014 thanks to improvements from the European research project 'My Wave' (Janssen et al. 2014).

The model mean bathymetry is generated using 2-minute gridded global topography data ETOPO2/NOAA. The native model grid is irregular, with decreasing distance in the latitudinal direction close to the poles; at the equator the latitudinal grid size is more or less fixed at 1/10 degree. The operational MFWAM is driven by 6-hourly analysis and 3-hourly forecast winds from the IFS-ECMWF atmospheric system. The wave spectrum is discretized in 24 directions and 30 frequencies from 0.035 Hz to 0.58 Hz. The model assimilates altimeter data with a 6-hour time step, provides analyses 4 times a day and a 10-day forecast at 0:00 UTC, and uses partitioning to split the swell spectrum into primary and secondary swells.

This is product GLOBAL_ANALYSISFORECAST_WAV_001_027, implemented by Mercator Ocean International: aggregated analyses and a 10-day forecast, updated twice daily, including integrated wave parameters such as significant wave height, period, direction and Stokes drift for both the total wave spectrum and the partitioned waves (wind wave, primary and secondary swell).

## Coverage and time range

- Coverage: Global ocean
- Time range: 2022-06-01 至 2001-09-01

## Resolution and specifications

- Spatial resolution: about 9,276.62 m (about 9.28 km (1/12 degree))
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| deptho | Sea floor depth | 9276.62 |  |

## What you can use it for

- The model bathymetry layer behind the global wave forecasts
- Reference sea floor depth on the wave model grid
- Consistency checks for wave modelling setups

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/WAV/ANFC_0_083DEG_STATIC');
```

- Earth Engine ID: `COPERNICUS/MARINE/WAV/ANFC_0_083DEG_STATIC`
- Providers: Copernicus Marine Service Global Ocean Waves and Forecasts, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_WAV_ANFC_0_083DEG_STATIC

## License and citation

- License: CC-BY-4.0
- Keywords: bathymetry, copernicus, oceans
- 数据引用：E.U. Copernicus Marine Service Information (2024). Global Ocean Waves Analysis and Forecast.
[doi.org/10.48670/moi-00017](https://doi.org/10.48670/moi-00017)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Global Ocean Colour — Optics, Multi-Sensor 4 km Monthly](/en/pages/b4a5e847/)
- [Global Ocean Colour — Primary Production, Multi-Sensor 4 km](/en/pages/6396836c/)
- [Global Ocean Colour — Reflectance, OLCI 300 m](/en/pages/f4ffb7b4/)
- [Global Ocean Colour — Reflectance, Multi-Sensor 4 km](/en/pages/472dc170/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
