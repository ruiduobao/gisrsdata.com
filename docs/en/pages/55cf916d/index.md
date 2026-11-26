---
title: "Global Ocean Waves Analysis and Forecast (3-hourly)"
date: 2026-11-03 12:00:00
---

# Global Ocean Waves Analysis and Forecast (3-hourly)

Original name: Global Ocean Waves Analysis and Forecast 

## What this dataset is

The operational global ocean analysis and forecast system of Météo-France, at 1/12-degree resolution, provides daily analyses and 10-day forecasts for global ocean sea surface waves. The product includes 3-hourly instantaneous fields of integrated wave parameters from the total spectrum (significant height, period, direction, Stokes drift, etc.), as well as the partitions: wind wave, primary swell and secondary swell.

The global wave system of Météo-France is based on the wave model MFWAM, a third-generation wave model using the computing code ECWAM-IFS-38R2 with dissipation terms developed by Ardhuin et al. (2010). The model was upgraded in November 2014 thanks to improvements from the European research project 'My Wave' (Janssen et al. 2014). The model mean bathymetry is generated using 2-minute gridded global topography data ETOPO2/NOAA. The native model grid is irregular, with decreasing distance in the latitudinal direction close to the poles; at the equator the latitudinal grid size is more or less fixed at 1/10 degree. The operational MFWAM is driven by 6-hourly analysis and 3-hourly forecast winds from the IFS-ECMWF atmospheric system. The wave spectrum is discretized in 24 directions and 30 frequencies from 0.035 Hz to 0.58 Hz. The model assimilates altimeter data with a 6-hour time step, provides analyses 4 times a day and a 10-day forecast at 0:00 UTC, and uses partitioning to split the swell spectrum into primary and secondary swells.

This is product GLOBAL_ANALYSISFORECAST_WAV_001_027, implemented by Mercator Ocean International: aggregated analyses and a 10-day forecast, updated twice daily, including integrated wave parameters such as significant wave height, period, direction and Stokes drift for both the total wave spectrum and the partitioned waves (wind wave, primary and secondary swell).

## Coverage and time range

- Coverage: Global ocean
- Time range: 2022-06-01 至 2026-11-10
- Cadence: 3-hourly fields; analyses 4 times a day and a 10-day forecast, updated twice daily

## Resolution and specifications

- Spatial resolution: about 9,276.62 m (about 9.28 km (1/12 degree))
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| VHM0 | Spectral significant wave height | 9276.62 |  |
| VHM0_WW | Significant wave height of wind sea | 9276.62 |  |
| VTM01_SW1 | Spectral moments (0,1) wave period of primary swell | 9276.62 |  |
| VTM01_SW2 | Spectral moments (0,1) wave period of secondary swell | 9276.62 |  |
| VTM10 | Spectral moments (-1,0) wave period | 9276.62 |  |
| VHM0_SW1 | Significant wave height of primary swell | 9276.62 |  |
| VHM0_SW2 | Significant wave height of secondary swell | 9276.62 |  |
| VTPK | Wave period at spectral peak | 9276.62 |  |
| VSDX | Stokes drift U component | 9276.62 |  |
| VSDY | Stokes drift V component | 9276.62 |  |
| VCMX | Maximum crest trough wave height | 9276.62 |  |
| VTM02 | Spectral moments (0,2) wave period | 9276.62 |  |
| VTM01_WW | Spectral moments (0,1) wave period of wind sea | 9276.62 |  |
| VMDR_WW | Mean wave direction of wind sea | 9276.62 |  |
| VMDR_SW1 | Mean wave direction of primary swell | 9276.62 |  |
| VMDR_SW2 | Mean wave direction of secondary swell | 9276.62 |  |
| VMDR | Mean wave direction | 9276.62 |  |
| VPED | Peak wave direction | 9276.62 |  |
| VMXL | Height of the highest crest | 9276.62 |  |

## What you can use it for

- Marine operations and shipping with significant wave height forecasts
- Coastal engineering and offshore design conditions
- Wave energy and Stokes drift studies

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/WAV/ANFC_0_083DEG_PT3H');
```

- Earth Engine ID: `COPERNICUS/MARINE/WAV/ANFC_0_083DEG_PT3H`
- Providers: Copernicus Marine Service Global Ocean Waves and Forecasts, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_WAV_ANFC_0_083DEG_PT3H

## License and citation

- License: CC-BY-4.0
- Keywords: copernicus, forecast, hourly, oceans
- 数据引用：E.U. Copernicus Marine Service Information (2024). Global Ocean Waves Analysis and Forecast.
[doi.org/10.48670/moi-00017](https://doi.org/10.48670/moi-00017)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [Global Ocean Colour — Optics, Multi-Sensor 4 km Monthly](/en/pages/b4a5e847/)
- [Global Ocean Colour — Primary Production, Multi-Sensor 4 km](/en/pages/6396836c/)
- [Global Ocean Colour — Reflectance, OLCI 300 m](/en/pages/f4ffb7b4/)
- [Global Ocean Colour — Reflectance, Multi-Sensor 4 km](/en/pages/472dc170/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
