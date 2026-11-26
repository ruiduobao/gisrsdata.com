---
title: "CHIRPS Precipitation Daily Near-Real-Time: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, IMERG-based)"
date: 2026-11-03 12:00:00
---

# CHIRPS Precipitation Daily Near-Real-Time: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, IMERG-based)

Original name: CHIRPS Precipitation Daily Near-Real-Time: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, IMERG-based)

## What this dataset is

The Climate Hazards Center Infrared Precipitation with Stations (CHIRPS v3)
is a 40+ year, high-resolution quasi-global rainfall dataset. It spans
60&deg;N to 60&deg;S and covers all longitudes, providing data from 1981 to
near-present. CHIRPS v3 combines satellite-based thermal infrared rainfall
estimates with in-situ station observations to produce a 0.05&deg; gridded
rainfall time series over land. This is version 3.0 of the dataset, for more
information see [the CHC page](https://www.chc.ucsb.edu/data/chirps3).

CHIRPS is fundamentally a pentad and monthly product from which other
time steps are derived. This daily dataset ('sat') uses daily precipitation
from the NASA IMERG Late V07 data product (IMERG) to partition pentadal
CHIRPS-v3 precipitation totals into daily amounts.

## Coverage and time range

- Coverage: Spatial: quasi-global (60°N to 60°S); temporal: 1981 to present (daily); resolution: 5,566 m (0.05 degree).
- Time range: 1981-01-01 至 2026-09-30

## Resolution and specifications

- Spatial resolution: about 5,566 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| precipitation | Precipitation | 5566 |  |

## What you can use it for

- Drought monitoring and seasonal forecasting.
- Analyse precipitation trends and extremes since 1981.
- Rainfall data for agriculture and water-resource management.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('UCSB-CHC/CHIRPS/V3/DAILY_SAT');
```

- Earth Engine ID: `UCSB-CHC/CHIRPS/V3/DAILY_SAT`
- Providers: UCSB/CHC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/UCSB-CHC_CHIRPS_V3_DAILY_SAT

## License and citation

- License: proprietary
- Keywords: chc, climate, geophysical, precipitation, ucsb, weather
- 数据引用：Climate Hazards Center Infrared Precipitation with Stations version 3.
CHIRPS3 Data Repository [doi:10.15780/G2JQ0P](https://doi.org/10.15780/G2JQ0P) (2025).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CHIRPS Precipitation Daily Reanalysis: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, ERA5-based)](/pages/11a19c2e/)
- [CHIRPS Precipitation Pentad: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0)](/pages/babe4e05/)
- [CPC Global Unified Temperature](/en/pages/8042cb38/)
- [CPC Global Unified Gauge-Based Analysis of Daily Precipitation](/en/pages/9d6b70e8/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
