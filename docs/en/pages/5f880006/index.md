---
title: "PERSIANN-CDR: Precipitation Estimation From Remotely Sensed Information Using Artificial Neural Networks-Climate Data Record"
date: 2026-11-03 12:00:00
---

# PERSIANN-CDR: Precipitation Estimation From Remotely Sensed Information Using Artificial Neural Networks-Climate Data Record

Original name: PERSIANN-CDR: Precipitation Estimation From Remotely Sensed Information Using Artificial Neural Networks-Climate Data Record

## What this dataset is

PERSIANN-CDR is a daily quasi-global precipitation product
that spans the period from 1983-01-01 to present.  The data is
produced quarterly, with a typical lag of three months. The product
is developed by the Center for Hydrometeorology and Remote Sensing
at the University of California, Irvine (UC-IRVINE/CHRS) using
Gridded Satellite (GridSat-B1) IR data that are derived from merging
ISCCP B1 IR data, along with GPCP version 2.2.

## Coverage and time range

- Coverage: Spatial: quasi-global; temporal: 1983 to present (daily); resolution: 27,830 m.
- Time range: 1983-01-01 至 2026-07-31

## Resolution and specifications

- Spatial resolution: about 27,830 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| precipitation | Estimated daily precipitation | 27830 |  |

## What you can use it for

- Analyse long-term global precipitation change and extremes since 1983.
- Force hydrological models with long daily precipitation records.
- Cross-validate against GPCP, IMERG and other precipitation products.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('NOAA/PERSIANN-CDR');
```

- Earth Engine ID: `NOAA/PERSIANN-CDR`
- Providers: NOAA NCDC, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/NOAA_PERSIANN-CDR

## License and citation

- License: proprietary
- Keywords: cdr, climate, geophysical, ncdc, noaa, persiann, precipitation, weather
- 数据引用：Cite this dataset when used as a source: Sorooshian, Soroosh;
Hsu, Kuolin; Braithwaite, Dan; Ashouri, Hamed; and NOAA CDR Program
(2014): NOAA Climate Data Record (CDR) of Precipitation Estimation
from Remotely Sensed Information using Artificial Neural Networks
(PERSIANN-CDR), Version 1 Revision 1. [indicate subset used]. NOAA
National Centers for Environmental Information. doi:
[doi:10.7289/V51V5BWQ](https://doi.org/10.7289/V51V5BWQ)
[access date].

- DOI：10.7289/V51V5BWQ

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CPC Global Unified Temperature](/en/pages/8042cb38/)
- [CPC Global Unified Gauge-Based Analysis of Daily Precipitation](/en/pages/9d6b70e8/)
- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)
- [ERA5 Daily Aggregates — ECMWF Climate Reanalysis](/en/pages/9ae9975a/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
