---
title: "GSMaP Reanalysis: Global Satellite Mapping of Precipitation"
date: 2026-11-03 12:00:00
permalink: /pages/49f8cd66/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "geophysical"
  - "gpm"
  - "hourly"
  - "jaxa"
  - "precipitation"
  - "weather"
---

# GSMaP Reanalysis: Global Satellite Mapping of Precipitation

## 数据集简介

Global Satellite Mapping of Precipitation (GSMaP) provides
a global hourly rain rate with a 0.1 x 0.1 degree resolution. GSMaP
is a product of the Global Precipitation Measurement (GPM) mission,
which provides global precipitation observations at three hour
intervals.  Values are estimated using multi-band passive microwave
and infrared radiometers from the GPM Core Observatory satellite
and with the assistance of a constellation of other satellites.  GPM's
precipitation rate retrieval algorithm is based on a radiative
transfer model. The gauge-adjusted rate is calculated based on
the optimization of the 24h accumulation of GSMaP hourly rain rate
to daily precipitation by NOAA/CPC gauge measurement. This dataset
is processed by GSMaP algorithm version 6 (product version 3).
See [GSMaP Technical Documentation](https://www.eorc.jaxa.jp/GPM/doc/algorithm/GSMaPforGPM_20140902_E.pdf)
for more details.

The operational GSMaP dataset (from 2014 to present)
is also [available](JAXA_GPM_L3_GSMaP_v6_operational].

## 基本信息

- 数据集编号（Earth Engine ID）：`JAXA/GPM_L3/GSMaP/v6/reanalysis`
- 数据类型：影像集合（ImageCollection）
- 提供方：JAXA Earth Observation Research Center、Google Earth Engine
- 时间范围：2000-03-01 至 2014-03-12
- 空间分辨率：11132 米
- 许可：proprietary
- 关键词：climate, geophysical, gpm, hourly, jaxa, precipitation, weather

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| satelliteInfoFlag | Satellite/sensor used | 11132 |  |
| hourlyPrecipRate | Snapshot of hourly precipitation rate | 11132 |  |
| hourlyPrecipRateGC | Snapshot of hourly precipitation rate adjusted to rain gauge | 11132 |  |
| observationTimeFlag | Relative time from the starting time of the file to the time of microwave radiometer (imager/sounder) observing. If no observation exists within the hourly window, the time will be the negative number of hours since the last observation.  | 11132 |  |
| gaugeQualityInfo | Existence of gauge adjustment when the status is 'provisional', 1 indicates adjusted and 0 is non-adjusted. When the status is 'permanent', the pixel value is the daily average of number of gauges used for adjustment in the pixel.  | 11132 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JAXA/GPM_L3/GSMaP/v6/reanalysis');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_GPM_L3_GSMaP_v6_reanalysis
- 数据引用：Kubota, T., K. Aonashi, T. Ushio, S. Shige, Y. N. Takayabu, M. Kachi,
Y. Arai, T. Tashima, T. Masaki, N. Kawamoto, T. Mega, M. K. Yamamoto,
A. Hamada, M. Yamaji, G. Liu and R. Oki 2020: Global Satellite Mapping of
Precipitation (GSMaP) products in the GPM era, Satellite precipitation
measurement, Springer, https://doi.org/10.1007/978-3-030-24568-9_20.

- DOI：10.57746/EO.01gs73bkt358gfpy92y2qns5e9

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
