---
title: "VNP21A1D.002: Day Land Surface Temperature and Emissivity Daily 1km"
date: 2026-11-03 12:00:00
---

# VNP21A1D.002: Day Land Surface Temperature and Emissivity Daily 1km

Original name: VNP21A1D.002: Day Land Surface Temperature and Emissivity Daily 1km

## What this dataset is

The NASA Suomi National Polar-Orbiting Partnership (Suomi NPP) Visible
Infrared Imaging Radiometer Suite (VIIRS) Land Surface Temperature and
Emissivity (LST&E) Day Version 1 product (VNP21A1D) is compiled daily
from daytime Level 2 Gridded (L2G) intermediate products.

The L2G process maps the daily VNP21 swath granules onto a sinusoidal MODIS
grid and stores all observations overlapping a gridded cell for a given
day. The VNP21A1 algorithm sorts through all these observations for each
cell and estimates the final LST value as an average from all cloud-free
observations that have good LST accuracies. Only observations having
observation coverage more than a certain threshold (15%) are considered for
this averaging.

## Coverage and time range

- Coverage: Coverage: global; time span: 2012 to 2026; resolution: 1,000 m.
- Time range: 2012-01-19 至 2026-10-28

## Resolution and specifications

- Spatial resolution: about 1,000 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| LST_1KM | Daily 1 km Land Surface Temperature. | 1000 |  |
| QC | Daily Quality control for LST and emissivity | 1000 |  |
| Emis_14 | Daily M14 emissivity | 1000 |  |
| Emis_15 | Daily M15 emissivity | 1000 |  |
| Emis_16 | Daily M16 emissivity | 1000 |  |
| View_Angle | View zenith angle of LST | 1000 |  |
| View_Time | Time of LST observation | 1000 |  |

## What you can use it for

- Land surface temperature monitoring
- Urban thermal environment research
- Climate and weather analysis

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NASA/VIIRS/002/VNP21A1D');
```

- Earth Engine ID: `NASA/VIIRS/002/VNP21A1D`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NASA_VIIRS_002_VNP21A1D
* [User's Guide](https://lpdaac.usgs.gov/documents/429/VNP21_User_Guide_V1.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1332/VNP21_ATBD_V1.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/vnp21a1dv002/)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## License and citation

- License: proprietary
- Keywords: daily, day, land, nasa, noaa, surface, temperature, viirs, weather-and-climate
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP21A1D.002

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [VNP21A1N.002: Night Land Surface Temperature and Emissivity Daily 1km](/en/pages/7d1bb919/)
- [CPC Global Unified Temperature](/en/pages/8042cb38/)
- [CPC Global Unified Gauge-Based Analysis of Daily Precipitation](/en/pages/9d6b70e8/)
- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
