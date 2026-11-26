---
title: "CHIRPS Precipitation Daily: Climate Hazards Center InfraRed Precipitation With Station Data (Version 2.0 Final)"
date: 2026-11-03 12:00:00
---

# CHIRPS Precipitation Daily: Climate Hazards Center InfraRed Precipitation With Station Data (Version 2.0 Final)

Original name: CHIRPS Precipitation Daily: Climate Hazards Center InfraRed Precipitation With Station Data (Version 2.0 Final)

## What this dataset is

Climate Hazards Center InfraRed Precipitation with Station data (CHIRPS)
is a 30+ year quasi-global rainfall dataset. CHIRPS incorporates
0.05° resolution satellite imagery with in-situ station data
to create gridded rainfall time series for trend analysis and seasonal
drought monitoring.

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
var dataset = ee.ImageCollection('UCSB-CHG/CHIRPS/DAILY');
```

- Earth Engine ID: `UCSB-CHG/CHIRPS/DAILY`
- Providers: UCSB/CHG, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/UCSB-CHG_CHIRPS_DAILY

## License and citation

- License: proprietary
- Keywords: chg, climate, geophysical, precipitation, ucsb, weather
- 数据引用：Funk, Chris, Pete Peterson, Martin Landsfeld, Diego Pedreros, James
Verdin, Shraddhanand Shukla, Gregory Husak, James Rowland, Laura Harrison,
Andrew Hoell & Joel Michaelsen. "The climate hazards infrared precipitation
with stations-a new environmental record for monitoring extremes".
Scientific Data 2, 150066. [doi:10.1038/sdata.2015.66](https://doi.org/10.1038/sdata.2015.66)
2015.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CHIRPS Precipitation Pentad: Climate Hazards Center InfraRed Precipitation With Station Data (Version 2.0 Final)](/pages/82b64c2f/)
- [CPC Global Unified Temperature](/en/pages/8042cb38/)
- [CPC Global Unified Gauge-Based Analysis of Daily Precipitation](/en/pages/9d6b70e8/)
- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
