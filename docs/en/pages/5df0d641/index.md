---
title: "MYD21C2.061 Aqua Land Surface Temperature and 3-Band Emissivity 8-Day L3 Global 0.05 Deg CMG"
date: 2026-11-03 12:00:00
---

# MYD21C2.061 Aqua Land Surface Temperature and 3-Band Emissivity 8-Day L3 Global 0.05 Deg CMG

Original name: MYD21C2.061 Aqua Land Surface Temperature and 3-Band Emissivity 8-Day L3 Global 0.05 Deg CMG

## What this dataset is

The MYD21C2 dataset is an 8-day composite LST product that uses an algorithm
based on a simple averaging method. The algorithm calculates the average
from all the cloud free MYD21A1D and MYD21A1N daily acquisitions from the
8-day period. Unlike the MYD21A1 data sets where the daytime and nighttime
acquisitions are separate products, the MYD21A2 contains both daytime and
nighttime acquisitions. The LST, Quality Control (QC), view zenith angle,
and viewing time have separate day and night bands, while the values for the
MODIS emissivity bands 29, 31, and 32 are the average of both the nighttime
and daytime acquisitions.

## Coverage and time range

- Coverage: Coverage: global; time span: 2000 to 2026; resolution: 1 km (CMG 0.05 deg).
- Time range: 2000-02-24 至 2026-10-16

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| Count_Day | Count of Daytime Input Values | 1000 |  |
| Count_Night | Count of Nighttime Input Values | 1000 |  |
| QC_Day | Quality Control for Daytime LST and Emissivity | 1000 |  |
| QC_Night | Quality Control for Nighttime LST and Emissivity | 1000 |  |
| LST_Day | Average Daytime Land Surface Temperature | 1000 |  |
| LST_Night | Average Nighttime Land Surface Temperature | 1000 |  |
| LST_Day_err | Root-mean-square-error Daytime Land Surface Temperature | 1000 |  |
| LST_Night_err | Average Nighttime Land Surface Temperature | 1000 |  |
| Day_view_angle | Average Daytime View Zenith Angle | 1000 |  |
| Night_view_angle | Average Nighttime View Zenith Angle | 1000 |  |
| Day_view_time | Average Daytime View Time (UTC) | 1000 |  |
| Night_view_time | Average Nighttime View Time (UTC) | 1000 |  |
| Emis_29_Day | Average Daytime Band 29 Emissivity | 1000 |  |
| Emis_29_Night | Average Nighttime Band 29 Emissivity | 1000 |  |
| Emis_29_Day_err | Root-mean-square-error Daytime Band 29 Emissivity | 1000 |  |
| Emis_29_Night_err | Root-mean-square-error Nighttime Band 29 Emissivity | 1000 |  |
| Emis_31_Day | Average Daytime Band 31 Emissivity | 1000 |  |
| Emis_31_Night | Average Nighttime Band 31 Emissivity | 1000 |  |
| Emis_31_Day_err | Root-mean-square-error Daytime Band 31 Emissivity | 1000 |  |
| Emis_31_Night_err | Root-mean-square-error Nighttime Band 31 Emissivity | 1000 |  |
| Emis_32_Day | Average Daytime Band 32 Emissivity | 1000 |  |
| Emis_32_Night | Average Nighttime Band 32 Emissivity | 1000 |  |
| Emis_32_Day_err | Root-mean-square-error Daytime Band 32 Emissivity | 1000 |  |
| Emis_32_Night_err | Root-mean-square-error Nighttime Band 32 Emissivity | 1000 |  |
| View_Angle | MODIS view zenith angle | 1000 |  |
| Percent_land_in_grid | Percent of Land Detections in Grid Cell | 1000 |  |
| Clear_sky_days | Bitmap of Clear Sky Days (1 = clear, LSB = 1st day) | 1000 |  |
| Clear_sky_nights | Bitmap of Clear Sky Nights (1 = clear, LSB = 1st day) | 1000 |  |

## What you can use it for

- Land surface temperature monitoring
- Urban heat island and climate research
- Drought and evapotranspiration assessment

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('MODIS/061/MYD21C2');
```

- Earth Engine ID: `MODIS/061/MYD21C2`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MYD21C2
* [User's Guide](https://lpdaac.usgs.gov/documents/1398/MOD21_User_Guide_V61.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1399/MOD21_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MYD21C2)

## License and citation

- License: proprietary
- Keywords: aqua, emissivity, global, lst, nasa, surface-temperature, usgs, weather-and-climate
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD21C2.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km](/pages/a130c488/)
- [MOD11A2.061 Terra Land Surface Temperature and Emissivity 8-Day Global 1km](/pages/154c1ce8/)
- [MOD21A1D.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km](/pages/ea336063/)
- [MOD21A1N.061 Terra Land Surface Temperature and 3-Band Emissivity Daily Global 1km](/pages/a0c5f0f5/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
