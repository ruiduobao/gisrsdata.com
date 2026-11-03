---
title: "TRMM 3B43: Monthly Precipitation Estimates"
date: 2026-11-03 12:00:00
permalink: /pages/a7993ae1/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "geophysical"
  - "jaxa"
  - "nasa"
  - "precipitation"
  - "rainfall"
  - "trmm"
  - "weather"
---

# TRMM 3B43: Monthly Precipitation Estimates

## 数据集简介

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

## 基本信息

- 数据集编号（Earth Engine ID）：`TRMM/3B43V7`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA GES DISC at NASA Goddard Space Flight Center、Google Earth Engine
- 时间范围：1998-01-01 至 2019-12-01
- 空间分辨率：27830 米
- 许可：proprietary
- 关键词：climate, geophysical, jaxa, nasa, precipitation, rainfall, trmm, weather

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| precipitation | Merged microwave/IR precipitation estimate | 27830 |  |
| relativeError | Merged microwave/IR precipitation random error estimate | 27830 |  |
| gaugeRelativeWeighting | Relative weighting of the rain gauges used in calibration | 27830 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('TRMM/3B43V7');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/TRMM_3B43V7
- 数据引用：Adler, R.F., G.J. Huffman, A. Chang, R. Ferraro, P. Xie, J. Janowiak,
B. Rudolf, U. Schneider, S. Curtis, D. Bolvin, A. Gruber, J. Susskind,
P. Arkin, E.J. Nelkin, 2003: The Version 2 Global Precipitation
Climatology Project (GPCP) Monthly Precipitation Analysis (1979-Present).
J. Hydrometeor., 4(6), 1147-1167.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
