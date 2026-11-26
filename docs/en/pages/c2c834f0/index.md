---
title: "CCNL: Consistent and Corrected Nighttime Lights (1992–2013)"
date: 2026-11-03 12:00:00
---

# CCNL: Consistent and Corrected Nighttime Lights (1992–2013)

Original name: CCNL: Consistent and Corrected Nighttime Light Dataset from DMSP-OLS (1992-2013) v1

## What this dataset is

The Consistent and Corrected Nighttime Lights (CCNL) dataset is a reprocessed version of the [Defense Meteorological Program (DMSP) Operational Line-Scan System (OLS) Version 4](https://developers.google.com/earth-engine/datasets/catalog/NOAA_DMSP-OLS_NIGHTTIME_LIGHTS) nighttime lights. A series of methods was applied to mitigate inter-annual inconsistency, saturation and blooming effects, and to improve data quality — the three classic problems that make raw DMSP-OLS lights hard to compare across years.

CCNL Version 1 spans the globe from 75°N to 65°S at a 1 km pixel size, covering 1992–2013.

## Coverage and time range

- Coverage: Global, 75°N to 65°S
- Time range: 1992-01-01 至 2014-01-01
- Cadence: Yearly

## Resolution and specifications

- Spatial resolution: about 1,000 m (1 km pixels)
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| b1 | Corrected nighttime light intensity. | 1000 |  |

## What you can use it for

- Long-term studies of urbanization and economic activity from nighttime lights
- Compare city light growth across years on a consistent scale
- Population and GDP spatialization for 1992–2013

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('BNU/FGS/CCNL/v1');
```

- Earth Engine ID: `BNU/FGS/CCNL/v1`
- Providers: Beijing Normal University, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/BNU_FGS_CCNL_v1

## License and citation

- License: CC-BY-4.0
- Keywords: bnu, dmsp, eog, imagery, lights, nighttime, ols, population, visible, yearly
- 数据引用：Zhao,Chenchen, Cao,Xin, Chen,Xuehong, & Cui,Xihong. (2020). A Consistent
and Corrected Nighttime Light dataset (CCNL 1992-2013) from DMSP-OLS data
(Version 1.0) [Data set]. Zenodo. https://doi.org/10.5281/zenodo.6644980


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [DMSP OLS: Global Radiance-Calibrated Nighttime Lights Version 4, Defense Meteorological Program Operational Linescan System](/pages/a2c92c1d/)
- [DMSP OLS: Nighttime Lights Time Series Version 4, Defense Meteorological Program Operational Linescan System](/pages/65a6304d/)
- [LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (8-Daily 1km)](/pages/6f3727a9/)
- [LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (Annual 1km)](/pages/13f243dd/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
