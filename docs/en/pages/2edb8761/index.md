---
title: "VNP21A1N.001: Night Land Surface Temperature and Emissivity Daily 1km [deprecated]"
date: 2026-11-03 12:00:00
---

# VNP21A1N.001: Night Land Surface Temperature and Emissivity Daily 1km [deprecated]

Original name: VNP21A1N.001: Night Land Surface Temperature and Emissivity Daily 1km [deprecated]

## What this dataset is

The NASA Suomi National Polar-Orbiting Partnership (Suomi NPP) Visible
Infrared Imaging Radiometer Suite (VIIRS) Land Surface Temperature and
Emissivity (LST&E) Night Version 1 product (VNP21A1N) is compiled daily
from nighttime Level 2 Gridded (L2G) intermediate products.

The L2G process maps the daily VNP21 swath granules onto a sinusoidal MODIS
grid and stores all observations overlapping a gridded cell for a given
night. The VNP21A1 algorithm sorts through all these observations for each
cell and estimates the final LST value as an average from all cloud-free
observations that have good LST accuracies. Only observations having
observation coverage more than a certain threshold (15%) are considered for
this averaging.

## Coverage and time range

- Coverage: Spatial: global land; temporal: 2012 to 2024 (daily); resolution: 1,000 m.
- Time range: 2012-01-19 至 2024-05-01

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

- Call the dataset in Google Earth Engine and overlay boundaries, land cover and other layers for spatial analysis.
- Run long time-series analyses, extract regional statistics and export charts and GeoTIFFs.
- Use it as teaching and research sample data demonstrating ImageCollection filtering, compositing and visualization in Earth Engine.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/VIIRS/001/VNP21A1N');
```

- Earth Engine ID: `NOAA/VIIRS/001/VNP21A1N`
- Providers: NASA LP DAAC at the USGS EROS Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_VIIRS_001_VNP21A1N
* [User's Guide](https://lpdaac.usgs.gov/documents/429/VNP21_User_Guide_V1.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/1332/VNP21_ATBD_V1.pdf)
* [General Documentation](https://lpdaac.usgs.gov/products/vnp21a1nv001/)
* [Land Product Quality Assessment website](https://landweb.modaps.eosdis.nasa.gov/browse?sensor=VIIRS&sat=SNPP)

## License and citation

- License: proprietary
- Keywords: daily, land, nasa, night, noaa, surface, temperature, viirs, weather-and-climate
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/VIIRS/VNP21A1N.001

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [VNP21A1D.001: Day Land Surface Temperature and Emissivity Daily 1km [deprecated]](/en/pages/a63db064/)
- [CPC Global Unified Temperature](/en/pages/8042cb38/)
- [CPC Global Unified Gauge-Based Analysis of Daily Precipitation](/en/pages/9d6b70e8/)
- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
