---
title: "TRMM 3B42: 3-Hourly Precipitation Estimates"
date: 2026-11-03 12:00:00
---

# TRMM 3B42: 3-Hourly Precipitation Estimates

Original name: TRMM 3B42: 3-Hourly Precipitation Estimates

## What this dataset is

The Tropical Rainfall Measuring Mission (TRMM) is a
joint mission between NASA and the Japan Aerospace Exploration
Agency (JAXA) designed to monitor and study tropical rainfall.
The 34B2 product contains a gridded, TRMM-adjusted, merged infrared
precipitation (mm/hr) and RMS precipitation-error estimate, with
a 3-hour temporal resolution and a 0.25 degree spatial resolution.

See the [algorithm description](https://trmm.gsfc.nasa.gov/3b42.html)
and the [file specification](https://storm.pps.eosdis.nasa.gov/storm/data/docs/filespec.TRMM.V7.3B42.pdf)
for details.

## Coverage and time range

- Coverage: Spatial: global (tropics and mid-latitudes); temporal: 1998 to 2019 (3-hourly); resolution: 27,830 m (0.25 degree).
- Time range: 1998-01-01 至 2019-12-31

## Resolution and specifications

- Spatial resolution: about 27,830 m
- Data type: ImageCollection, accessed through Google Earth Engine

| Band | Description | Resolution (m) | Wavelength |
| --- | --- | --- | --- |
| precipitation | Merged microwave/IR precipitation estimate | 27830 |  |
| relativeError | Merged microwave/IR precipitation random error estimate | 27830 |  |
| satPrecipitationSource | Flag to show source of data | 27830 |  |
| HQprecipitation | Pre-gauge-adjusted microwave precipitation estimate | 27830 |  |
| IRprecipitation | Pre-gauge-adjusted infrared precipitation estimate | 27830 |  |
| satObservationTime | Satellite observation time minus the time of the granule. In case of overlapping satellite observations, the two or more observation times are equal-weighting averaged. | 27830 |  |

## What you can use it for

- Analyse diurnal cycles and extremes of tropical precipitation.
- Provide 3-hourly precipitation forcing for hydrological models.
- Bridge and compare with successor products such as IMERG.

## How to get it

In Earth Engine:

```js
var dataset = ee.ImageCollection('TRMM/3B42');
```

- Earth Engine ID: `TRMM/3B42`
- Providers: NASA GES DISC at NASA Goddard Space Flight Center, Google Earth Engine
- Official catalog page: https://developers.google.com/earth-engine/datasets/catalog/TRMM_3B42
* [PI Documentation](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/3B42_3B43_doc_V7.pdf)
* [File Specification for TRMM Products](https://pps.gsfc.nasa.gov/Documents/filespec.TRMM.V7.pdf)
* [Comparison between TRMM versions 6 and 7](https://pps.gsfc.nasa.gov/Documents/formatChangesV7.pdf)
* [Readme](https://disc2.gesdisc.eosdis.nasa.gov/data/TRMM_L3/TRMM_3B42/doc/README.TRMM_V7.pdf)
* [Details of the TMPA algorithm used in this product](https://pmm.nasa.gov/sites/default/files/imce/3B42_3B43_TMPA_restart.pdf)
* [TRMM Data Gaps](https://web.archive.org/web/20200701000000*/ftp://gpmweb2.pps.eosdis.nasa.gov/tsdis/AB/docs/anomalous.html)
* [Transition from TMPA to IMERG](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/TMPA-to-IMERG_transition.pdf)

## License and citation

- License: proprietary
- Keywords: 3-hourly, climate, geophysical, jaxa, nasa, precipitation, rainfall, trmm, weather
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
