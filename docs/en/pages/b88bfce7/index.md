---
title: "CHIRTS Temperature Daily: Climate Hazards Center InfraRed Temperature with Stations daily data product"
date: 2026-11-03 12:00:00
---

# CHIRTS Temperature Daily: Climate Hazards Center InfraRed Temperature with Stations daily data product

Original name: CHIRTS Temperature Daily: Climate Hazards Center InfraRed Temperature with Stations daily data product

## What this dataset is

The Climate Hazards Center InfraRed Temperature with Stations daily
temperature data product (CHIRTS-daily; Verdin et al. 2020) is a quasi
global, high-resolution gridded dataset
(0.05&deg;&thinsp;&times;&thinsp;0.05&deg; resolution, 60&deg;S - 70&deg;N)
that provides daily minimum (Tmin) and maximum 2-meter temperatures (Tmax)
and four derived variables: saturation vapor pressure (SVP),
vapor pressure deficit (VPD), relative humidity (RH), and heat index (HI).
CHIRTS temperature products are designed to support analysis of temperature
extremes and variability, especially in regions with a low density of
station observations.

CHIRTS-daily is created by merging a high-quality, high-resolution monthly
maximum temperature dataset, the Climate Hazards Center InfraRed
Temperature with Stations monthly maximum temperature climate record
(CHIRTSmax; Funk et al. 2019), with daily temperatures from the European
Centre for Medium-Range Weather Forecasts (ECMWF) Reanalysis v5 (ERA5).
The result is a high-resolution, daily temperature dataset that maintains
spatio-temporal information from monthly CHIRTSmax and the daily and diurnal
temperature variability from ERA5. Monthly CHIRTSmax are based on:

1. A Tmax climatology constructed using geostatistical regressions and
      long-term averages of FAO station observations, ERA5 temperatures, and
      several other geographic predictors.

2. Estimates of Tmax variability using approximately 15,000 in situ
      observations and high-resolution
      (0.05&deg;&thinsp;&times;&thinsp;0.05&deg;) satellite observations.
      These data are from Berkeley Earth and Global Telecommunication
      System (GTS) station reports and cloud-screened GridSat geostationary
      satellite thermal infrared brightness temperatures.

Daily Tmax values are produced using downscaled ERA5 Tmax anomalies and
high-resolution CHIRTSmax. Daily Tmin values are created by removing the
downscaled ERA5 diurnal temperature range (Tmax - Tmin).
Daily SVP, VPD, RH, and HI are computed using CHIRTS-daily Tmin and Tmax,
alongside hourly ERA5 inputs for other meteorological variables
(see Williams et al., 2024, for details). CHIRTS-daily, version 1, covers
the period from 1983 to 2016.

## Coverage and time range

- Coverage: Spatial: quasi-global (60°S to 70°N); temporal: 1983 to 2016 (daily); resolution: 5,566 m (0.05 degree).
- Time range: 1983-01-01 至 2016-12-31

## Resolution and specifications

- Spatial resolution: about 5,566 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| minimum_temperature | The lowest air temperature recorded at 2 meters above the ground surface over a 24-hour period. | 5566 |  |
| maximum_temperature | The highest air temperature recorded at 2 meters above the ground surface over a 24-hour period. | 5566 |  |
| saturation_vapor_pressure | The maximum amount of water vapor that the air can hold at a given temperature and pressure at 2 meters above ground. | 5566 |  |
| vapor_pressure_deficit | The difference between the saturation vapor pressure and the actual vapor pressure at 2 meters above ground. | 5566 |  |
| relative_humidity | The ratio of the actual amount of water vapor in the air to the maximum amount it could hold at that temperature and pressure (saturation vapor pressure) at 2 meters above ground. | 5566 |  |
| heat_index | A measure of how hot it feels when temperature and humidity are combined. | 5566 |  |

## What you can use it for

- Analyse temperature extremes and heatwaves.
- Temperature data for agricultural and health heat-risk assessment.
- Climate monitoring in station-sparse regions.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('UCSB-CHG/CHIRTS/DAILY');
```

- Earth Engine ID: `UCSB-CHG/CHIRTS/DAILY`
- Providers: UCSB/CHG, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/UCSB-CHG_CHIRTS_DAILY

## License and citation

- License: CC0-1.0
- Keywords: chg, climate, daily, era5, geophysical, reanalysis, temperature, ucsb, weather-and-climate, wind
- 数据引用：Verdin, A., C. Funk, P. Peterson, M. Landsfeld, C. Tuholske, and Grace, K.,
2020: Development and validation of the CHIRTS-daily quasi-global
high-resolution daily temperature data set. Scientific Data, 7(1), 303.
[doi: 10.1038/s41597-020-00643-7](https://doi.org/10.1038/s41597-020-00643-7)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CPC Global Unified Temperature](/en/pages/8042cb38/)
- [CPC Global Unified Gauge-Based Analysis of Daily Precipitation](/en/pages/9d6b70e8/)
- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)
- [ERA5 Daily Aggregates — ECMWF Climate Reanalysis](/en/pages/9ae9975a/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
