---
title: "TRMM 3B42: 3-Hourly Precipitation Estimates"
date: 2026-11-03 12:00:00
permalink: /pages/cd7d24df/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "3-hourly"
  - "climate"
  - "geophysical"
  - "jaxa"
  - "nasa"
  - "precipitation"
  - "rainfall"
  - "trmm"
  - "weather"
---

# TRMM 3B42: 3-Hourly Precipitation Estimates

## 数据集简介

The Tropical Rainfall Measuring Mission (TRMM) is a
joint mission between NASA and the Japan Aerospace Exploration
Agency (JAXA) designed to monitor and study tropical rainfall.
The 34B2 product contains a gridded, TRMM-adjusted, merged infrared
precipitation (mm/hr) and RMS precipitation-error estimate, with
a 3-hour temporal resolution and a 0.25 degree spatial resolution.

See the [algorithm description](https://trmm.gsfc.nasa.gov/3b42.html)
and the [file specification](https://storm.pps.eosdis.nasa.gov/storm/data/docs/filespec.TRMM.V7.3B42.pdf)
for details.

Documentation:

* [PI Documentation](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/3B42_3B43_doc_V7.pdf)

* [File Specification for TRMM Products](https://pps.gsfc.nasa.gov/Documents/filespec.TRMM.V7.pdf)

* [Comparison between TRMM versions 6 and 7](https://pps.gsfc.nasa.gov/Documents/formatChangesV7.pdf)

* [Readme](https://disc2.gesdisc.eosdis.nasa.gov/data/TRMM_L3/TRMM_3B42/doc/README.TRMM_V7.pdf)

* [Details of the TMPA algorithm used in this product](https://pmm.nasa.gov/sites/default/files/imce/3B42_3B43_TMPA_restart.pdf)

* [TRMM Data Gaps](https://web.archive.org/web/20200701000000*/ftp://gpmweb2.pps.eosdis.nasa.gov/tsdis/AB/docs/anomalous.html)

* [Transition from TMPA to IMERG](https://docserver.gesdisc.eosdis.nasa.gov/public/project/GPM/TMPA-to-IMERG_transition.pdf)

## 基本信息

- 数据集编号（Earth Engine ID）：`TRMM/3B42`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA GES DISC at NASA Goddard Space Flight Center、Google Earth Engine
- 时间范围：1998-01-01 至 2019-12-31
- 空间分辨率：27830 米
- 许可：proprietary
- 关键词：3-hourly, climate, geophysical, jaxa, nasa, precipitation, rainfall, trmm, weather

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| precipitation | Merged microwave/IR precipitation estimate | 27830 |  |
| relativeError | Merged microwave/IR precipitation random error estimate | 27830 |  |
| satPrecipitationSource | Flag to show source of data | 27830 |  |
| HQprecipitation | Pre-gauge-adjusted microwave precipitation estimate | 27830 |  |
| IRprecipitation | Pre-gauge-adjusted infrared precipitation estimate | 27830 |  |
| satObservationTime | Satellite observation time minus the time of the granule. In case of overlapping satellite observations, the two or more observation times are equal-weighting averaged.  | 27830 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('TRMM/3B42');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TRMM_3B42
- 数据引用：Adler, R.F., G.J. Huffman, A. Chang, R. Ferraro, P. Xie, J. Janowiak,
B. Rudolf, U. Schneider, S. Curtis, D. Bolvin, A. Gruber, J. Susskind,
P. Arkin, E.J. Nelkin, 2003: The Version 2 Global Precipitation
Climatology Project (GPCP) Monthly Precipitation Analysis (1979-Present).
J. Hydrometeor., 4(6), 1147-1167.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
