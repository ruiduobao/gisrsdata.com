---
title: "NOAA CDR OISST v02r01: Optimum Interpolation Sea Surface Temperature"
date: 2026-11-03 12:00:00
---

# NOAA CDR OISST v02r01: Optimum Interpolation Sea Surface Temperature

Original name: NOAA CDR OISST v02r01: Optimum Interpolation Sea Surface Temperature

## What this dataset is

The NOAA 1/4 degree daily Optimum Interpolation Sea Surface Temperature
(OISST) provides complete ocean temperature fields constructed by combining
bias-adjusted observations from different platforms (satellite, ships,
buoys) on a regular global grid, with gaps filled in by interpolation.
Satellite data from the Advanced Very High Resolution Radiometer (AVHRR)
provides the main input which permits the high temporal-spatial coverage
beginning in late 1981 to the present.

The OISST dataset has a single day's data processed twice. First a near
real-time preliminary version is released with a lag of 1 day, and a final
version with a lag of 14 days. The final version uses extra days for
smoothing, and zonal bias correction in addition to replacing the
preliminary version.

## Coverage and time range

- Coverage: Coverage: global oceans; time span: 1981 to 2026; resolution: 27,830 m.
- Time range: 1981-09-01 至 2026-10-31

## Resolution and specifications

- Spatial resolution: about 27,830 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| sst | Daily sea surface temperature | 27830 |  |
| anom | Temperature anomaly; the daily OISST minus a 30-year climatological mean. | 27830 |  |
| ice | Seven-day median of daily sea ice concentrations. | 27830 |  |
| err | Estimated error; standard deviation of analyzed sea surface temperature. | 27830 |  |

## What you can use it for

- Sea surface temperature monitoring
- Ocean climate research
- Fisheries and marine ecology applications

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/CDR/OISST/V2_1');
```

- Earth Engine ID: `NOAA/CDR/OISST/V2_1`
- Providers: NOAA, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_OISST_V2_1

## License and citation

- License: proprietary
- Keywords: avhrr, cdr, daily, ice, noaa, oceans, oisst, real-time, sst, temperature
- 数据引用：Richard W. Reynolds, Viva F. Banzon, and NOAA CDR Program (2008): NOAA
Optimum Interpolation 1/4 Degree Daily Sea Surface Temperature (OISST)
Analysis, Version 2. [indicate subset used]. NOAA National Centers for
Environmental Information. [doi:10.7289/V5SQ8XB5](https://doi.org/10.7289/V5SQ8XB5)
[access date].

- DOI：10.7289/V5SQ8XB5

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [NOAA CDR OISST v2: Optimum Interpolation Sea Surface Temperature [deprecated]](/en/pages/0c219b07/)
- [CFSR: Climate Forecast System Reanalysis Harmonized](/en/pages/a2388741/)
- [CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products Harmonized](/en/pages/a1cd75f1/)
- [Daymet V4: Daily Surface Weather and Climatological Summaries](/en/pages/7b6d050e/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
