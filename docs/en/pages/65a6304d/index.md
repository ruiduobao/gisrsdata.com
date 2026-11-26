---
title: "DMSP OLS: Nighttime Lights Time Series Version 4, Defense Meteorological Program Operational Linescan System"
date: 2026-11-03 12:00:00
---

# DMSP OLS: Nighttime Lights Time Series Version 4, Defense Meteorological Program Operational Linescan System

Original name: DMSP OLS: Nighttime Lights Time Series Version 4, Defense Meteorological Program Operational Linescan System

## What this dataset is

The Defense Meteorological Program (DMSP) Operational Line-Scan System
(OLS) has a unique capability to detect visible and near-infrared (VNIR)
emission sources at night.

Version 4 of the DMSP-OLS Nighttime Lights Time Series consists of
cloud-free composites made using all the available archived DMSP-OLS smooth
resolution data for calendar years. In cases where two satellites were
collecting data, two composites were produced.

Image and data processing by NOAA's National Geophysical Data Center.
DMSP data collected by US Air Force Weather Agency.

## Coverage and time range

- Coverage: Coverage: global; time span: 1992 to 2014; resolution: 927.67 m.
- Time range: 1992-01-01 至 2014-01-01

## Resolution and specifications

- Spatial resolution: about 927.67 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| avg_vis | The average of the visible band digital number values with no further filtering. | 927.67 |  |
| stable_lights | The cleaned up avg_vis contains the lights from cities, towns, and other sites with persistent lighting, including gas flares. Ephemeral events, such as fires, have been discarded. The background noise was identified and replaced with values of zero. | 927.67 |  |
| cf_cvg | Cloud-free coverages tally the total number of observations that went into each 30-arc second grid cell. This band can be used to identify areas with low numbers of observations where the quality is reduced. | 927.67 |  |
| avg_lights_x_pct | The average visible band digital number (DN) of cloud-free light detections multiplied by the percent frequency of light detection. The inclusion of the percent frequency of detection term normalizes the resulting digital values for variations in the persistence of lighting. For instance, the value for a light only detected half the time is discounted by 50%. Note that this product contains detections from fires and a variable amount of background noise. | 927.67 |  |

## What you can use it for

- Long-term nighttime lights monitoring
- Urbanization and population research
- Socioeconomic analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/DMSP-OLS/NIGHTTIME_LIGHTS');
```

- Earth Engine ID: `NOAA/DMSP-OLS/NIGHTTIME_LIGHTS`
- Providers: Earth Observation Group, Payne Institute for Public Policy, Colorado School of Mines, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_DMSP-OLS_NIGHTTIME_LIGHTS

## License and citation

- License: proprietary
- Keywords: dmsp, eog, imagery, lights, nighttime, ols, population, visible, yearly
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [DMSP OLS: Global Radiance-Calibrated Nighttime Lights Version 4, Defense Meteorological Program Operational Linescan System](/en/pages/a2c92c1d/)
- [VIIRS Nighttime Day/Night Band Composites Version 1](/en/pages/331f49de/)
- [VIIRS Nighttime Day/Night Annual Band Composites V2.1](/en/pages/98ca1d9b/)
- [VIIRS Nighttime Day/Night Annual Band Composites V2.2](/en/pages/57765f1c/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
