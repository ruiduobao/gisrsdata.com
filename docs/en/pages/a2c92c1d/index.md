---
title: "DMSP OLS: Global Radiance-Calibrated Nighttime Lights Version 4, Defense Meteorological Program Operational Linescan System"
date: 2026-11-03 12:00:00
---

# DMSP OLS: Global Radiance-Calibrated Nighttime Lights Version 4, Defense Meteorological Program Operational Linescan System

Original name: DMSP OLS: Global Radiance-Calibrated Nighttime Lights Version 4, Defense Meteorological Program Operational Linescan System

## What this dataset is

The Defense Meteorological Program (DMSP) Operational Line-Scan System
(OLS) has a unique capability to detect visible and near-infrared (VNIR)
emission sources at night.

This collection contains global nighttime lights images with no sensor
saturation. The sensor is typically operated at a high-gain setting to
enable the detection of moonlit clouds. However, with six bit quantization
and limited dynamic range, the recorded data are saturated in the bright
cores of urban centers. A limited set of observations at low lunar
illumination were obtained where the gain of the detector was set
significantly lower than its typical operational setting (sometimes by a
factor of 100). Sparse data acquired at low-gain settings were combined
with the operational data acquired at high-gain settings to produce the set
of global nighttime lights images with no sensor saturation. Data from
different satellites were merged and blended into the final product in order
to gain maximum coverage. For more information, see this
[readme](https://eogdata.mines.edu/dmsp/radcal_readme.txt)
file from the provider.

Image and data processing by NOAA's National Geophysical Data Center.
DMSP data collected by US Air Force Weather Agency.

## Coverage and time range

- Coverage: Coverage: global; time span: 1996 to 2011; resolution: 927.67 m.
- Time range: 1996-03-16 至 2011-07-31

## Resolution and specifications

- Spatial resolution: about 927.67 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| avg_vis | Average digital band numbers from observations with cloud-free light detection. | 927.67 |  |
| cf_cvg | Cloud-free coverages, the total number of observations that went into each 30-arc second grid cell. This image can be used to identify areas with low numbers of observations where the quality is reduced. | 927.67 |  |

## What you can use it for

- Long-term nighttime lights monitoring
- Urbanization and population research
- Socioeconomic analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/DMSP-OLS/CALIBRATED_LIGHTS_V4');
```

- Earth Engine ID: `NOAA/DMSP-OLS/CALIBRATED_LIGHTS_V4`
- Providers: Earth Observation Group, Payne Institute for Public Policy, Colorado School of Mines, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_DMSP-OLS_CALIBRATED_LIGHTS_V4

## License and citation

- License: proprietary
- Keywords: calibrated, dmsp, eog, imagery, lights, nighttime, ols, population, radiance, visible, yearly
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [DMSP OLS: Nighttime Lights Time Series Version 4, Defense Meteorological Program Operational Linescan System](/en/pages/65a6304d/)
- [VIIRS Nighttime Day/Night Band Composites Version 1](/en/pages/331f49de/)
- [VIIRS Nighttime Day/Night Annual Band Composites V2.1](/en/pages/98ca1d9b/)
- [VIIRS Nighttime Day/Night Annual Band Composites V2.2](/en/pages/57765f1c/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
