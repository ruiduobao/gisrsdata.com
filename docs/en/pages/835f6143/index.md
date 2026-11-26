---
title: "The Climate Hazards Center (CHC) Coupled Model Intercomparison Project Phase 6 (CHC-CMIP6)"
date: 2026-11-03 12:00:00
---

# The Climate Hazards Center (CHC) Coupled Model Intercomparison Project Phase 6 (CHC-CMIP6)

Original name: The Climate Hazards Center (CHC) Coupled Model Intercomparison Project Phase 6 (CHC-CMIP6)

## What this dataset is

CHC-CMIP6 was explicitly developed to support the analysis of
climate-related hazards over the recent past and in the near-future.

This climate projection dataset contains global, daily gridded data for the
observational (1983-2016) and projection (2030 and 2050) periods to be used
in the identification and monitoring of hydroclimatic extremes. The dataset
contains global daily high resolution (0.05&#176;) grids of the Climate
Hazards InfraRed Temperature with Stations (CHIRTS-daily) temperature
product, the Climate Hazards InfraRed Precipitation with Stations (CHIRPS)
precipitation product, and ERA5-derived relative humidity, from which Vapor
Pressure Deficits (VPD) and maximum Wet Bulb Globe Temperatures (WBGTmax)
were derived.

Large CMIP6 ensembles from the Shared Socioeconomic Pathway (SSP) 245 and
SSP 585 scenarios were used to develop high resolution (0.05&#176;) daily
2030 and 2050 delta fields.

For more information, see
[The Climate Hazards Center (CHC) Coupled Model Intercomparison Project
Phase 6 (CHC-CMIP6)](https://chc.ucsb.edu/data/chc-cmip6).

## Coverage and time range

- Coverage: Spatial: global; temporal: 1983 to 2016 observations and 2030/2050 projections (daily); resolution: 5,566 m (0.05 degree).
- Time range: 1983-01-01 至 2016-12-31

## Resolution and specifications

- Spatial resolution: about 5,566 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| CHIRPS | Daily total precipitation. | 5566 |  |
| himax | Daily maximum Heat Index. | 5566 |  |
| RH | Relative Humidity. | 5566 |  |
| RHx | Relative humidity at the hour of maximum temperature | 5566 |  |
| RHn | Relative humidity at the hour of minimum temperature. | 5566 |  |
| wbgtmax | Daily maximum wet bulb globe temperature. | 5566 |  |
| vpd | Daily vapor pressure deficit. | 5566 |  |
| svp | Daily average saturation vapor pressure. | 5566 |  |
| Tmax | Daily maximum near-surface air temperature. | 5566 |  |
| Tmin | Daily minimum near-surface air temperature. | 5566 |  |

## What you can use it for

- Assess heat and precipitation extreme risks under future climate scenarios.
- High-resolution climate projections for adaptation planning.
- Analyse health-related hazard metrics such as wet-bulb temperature.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('UCSB/CHC/CMIP6/v1');
```

- Earth Engine ID: `UCSB/CHC/CMIP6/v1`
- Providers: UCSB, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/UCSB_CHC_CMIP6_v1

## License and citation

- License: CC-BY-4.0
- Keywords: climate, geophysical, precipitation, ucsb, weather
- 数据引用：Williams, E., Funk, C., Peterson, P., & Tuholske, C. (2024). High resolution
climate change observations and projections for the evaluation of
heat-related extremes. Scientific Data, 11(1), 261.
[https://www.nature.com/articles/s41597-024-03074-w](https://www.nature.com/articles/s41597-024-03074-w)
2015.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CPC Global Unified Temperature](/en/pages/8042cb38/)
- [CPC Global Unified Gauge-Based Analysis of Daily Precipitation](/en/pages/9d6b70e8/)
- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)
- [ERA5 Daily Aggregates — ECMWF Climate Reanalysis](/en/pages/9ae9975a/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
