---
title: "TRMM 3B43: Monthly Precipitation Estimates"
date: 2026-11-03 12:00:00
---

# TRMM 3B43: Monthly Precipitation Estimates

Original name: TRMM 3B43: Monthly Precipitation Estimates

## What this dataset is

**This collection is no longer being updated. See
[IMERG monthly](https://developers.google.com/earth-engine/datasets/catalog/NASA_GPM_L3_IMERG_MONTHLY_V06)**

This dataset algorithmically merges microwave data from multiple satellites,
including SSMI, SSMIS, MHS, AMSU-B and AMSR-E, each inter-calibrated to the
TRMM Combined Instrument.

Algorithm 3B43 is executed once per calendar month to produce the single,
best-estimate precipitation rate and RMS precipitation-error estimate field
(3B43) by combining the 3-hourly merged high-quality/IR estimates (3B42)
with the monthly accumulated Global Precipitation Climatology Centre (GPCC)
rain gauge analysis.

All of the global precipitation datasets have some calibrating data source,
which is necessary to control bias differences between contributing
satellites.  The multi-satellite data are averaged to the monthly scale and
combined with the Global Precipitation Climatology Centre's (GPCC) monthly
surface precipitation gauge analysis. In each case the multi-satellite data
are adjusted to the large-area mean of the gauge analysis, where available
(mostly over land), and then combined with the gauge analysis using a
simple inverse estimated-random-error variance weighting.  Regions with poor
gauge coverage, like central Africa and the oceans, have a higher weighting
on the satellite input.

See the [algorithm description](https://trmm.gsfc.nasa.gov/3b43.html)
and the [file specification](https://pps.gsfc.nasa.gov/Documents/filespec.TRMM.V7.pdf)
for details.

## Coverage and time range

- Coverage: Spatial: global (tropics and mid-latitudes); temporal: 1998 to 2019 (monthly); resolution: 27,830 m (0.25 degree).
- Time range: 1998-01-01 至 2019-12-01

## Resolution and specifications

- Spatial resolution: about 27,830 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| precipitation | Merged microwave/IR precipitation estimate | 27830 |  |
| relativeError | Merged microwave/IR precipitation random error estimate | 27830 |  |
| gaugeRelativeWeighting | Relative weighting of the rain gauges used in calibration | 27830 |  |

## What you can use it for

- Global precipitation climatology and long-term trend analysis.
- Monthly precipitation data for water-resource assessment.
- Cross-validate against GPCP, IMERG and other products.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('TRMM/3B43V7');
```

- Earth Engine ID: `TRMM/3B43V7`
- Providers: NASA GES DISC at NASA Goddard Space Flight Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/TRMM_3B43V7

## License and citation

- License: proprietary
- Keywords: climate, geophysical, jaxa, nasa, precipitation, rainfall, trmm, weather
- 数据引用：Adler, R.F., G.J. Huffman, A. Chang, R. Ferraro, P. Xie, J. Janowiak,
B. Rudolf, U. Schneider, S. Curtis, D. Bolvin, A. Gruber, J. Susskind,
P. Arkin, E.J. Nelkin, 2003: The Version 2 Global Precipitation
Climatology Project (GPCP) Monthly Precipitation Analysis (1979-Present).
J. Hydrometeor., 4(6), 1147-1167.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## Related datasets

- [CPC Global Unified Temperature](/en/pages/8042cb38/)
- [CPC Global Unified Gauge-Based Analysis of Daily Precipitation](/en/pages/9d6b70e8/)
- [ERA5 Monthly Aggregates — ECMWF Climate Reanalysis](/en/pages/87085b9b/)
- [ERA5 Daily Aggregates — ECMWF Climate Reanalysis](/en/pages/9ae9975a/)

> This page is adapted from the official Google Earth Engine data catalog (STAC). The text and metadata belong to the data provider.
