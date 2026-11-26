---
title: "GRIDMET: University of Idaho Gridded Surface Meteorological Dataset"
date: 2026-11-03 12:00:00
---

# GRIDMET: University of Idaho Gridded Surface Meteorological Dataset

Original name: GRIDMET: University of Idaho Gridded Surface Meteorological Dataset

## What this dataset is

The Gridded Surface Meteorological dataset provides
high spatial resolution (~4-km) daily surface fields of temperature,
precipitation, winds, humidity and radiation across the contiguous
United States from 1979. The dataset blends the high resolution
spatial data from PRISM with the high temporal resolution data
from the National Land Data Assimilation System (NLDAS) to produce
spatially and temporally continuous fields that lend themselves
to additional land surface modeling.

This dataset contains provisional products that are replaced with
updated versions when the complete source data become available.
Products can be distinguished by the value of the 'status' property.
At first, assets are ingested with status='early'. After several
days, they are replaced by assets with status='provisional'.
After about 2 months, they are replaced by the final assets with
status='permanent'.

## Coverage and time range

- Coverage: Contiguous United States
- Time range: 1979-01-01 至 2026-10-26

## Resolution and specifications

- Spatial resolution: about 4,638.3 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| pr | Precipitation amount | 4638.3 |  |
| rmax | Maximum relative humidity | 4638.3 |  |
| rmin | Minimum relative humidity | 4638.3 |  |
| sph | Specific humididy | 4638.3 |  |
| srad | Surface downward shortwave radiation | 4638.3 |  |
| th | Wind direction | 4638.3 |  |
| tmmn | Minimum temperature | 4638.3 |  |
| tmmx | Maximum temperature | 4638.3 |  |
| vs | Wind velocity at 10m | 4638.3 |  |
| erc | Energy release component | 4638.3 |  |
| eto | Daily grass reference evapotranspiration | 4638.3 |  |
| bi | Burning index | 4638.3 |  |
| fm100 | 100-hour dead fuel moisture | 4638.3 |  |
| fm1000 | 1000-hour dead fuel moisture | 4638.3 |  |
| etr | Daily alfalfa reference evapotranspiration | 4638.3 |  |
| vpd | Mean vapor pressure deficit | 4638.3 |  |

## What you can use it for

- Daily meteorological forcing and land surface modelling
- Fire danger rating
- Agricultural and hydrological applications

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('IDAHO_EPSCOR/GRIDMET');
```

- Earth Engine ID: `IDAHO_EPSCOR/GRIDMET`
- Providers: University of California Merced, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/IDAHO_EPSCOR_GRIDMET

## License and citation

- License: proprietary
- Keywords: climate, fireburning, gridmet, humidity, merced, metdata, nfdrs, precipitation, radiation, temperature, water-vapor, weather-and-climate, wind
- 数据引用：Abatzoglou J. T., Development of gridded surface meteorological
data for ecological applications and modelling, International Journal
of Climatology. (2012) [doi:10.1002/joc.3413](https://doi.org/10.1002/joc.3413)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)
- [ERA5 Daily Aggregates — ECMWF Climate Reanalysis](/en/pages/9ae9975a/)
- [CHELSA气象数据](/pages/1849d6/)
- [CHIRPS Precipitation Daily Near-Real-Time: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, IMERG-based)](/pages/09ea3f30/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
