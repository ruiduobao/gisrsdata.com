---
title: "MOD11A2.061 Terra Land Surface Temperature and Emissivity 8-Day Global 1km"
date: 2026-11-03 12:00:00
permalink: /pages/154c1ce8/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "8-day"
  - "emissivity"
  - "global"
  - "lst"
  - "mod11a2"
  - "modis"
  - "nasa"
  - "surface-temperature"
  - "terra"
  - "usgs"
  - "weather-and-climate"
---

# MOD11A2.061 Terra Land Surface Temperature and Emissivity 8-Day Global 1km

## 数据集简介

The MOD11A2 V6.1 product provides an average 8-day land surface temperature
(LST)  in a 1200 x 1200 kilometer grid. Each pixel value in MOD11A2 is a
simple average of all the corresponding MOD11A1 LST pixels collected within
that 8 day period. The MOD11A2 does a simple averaging of all daily LST
values, without any filtering for specific QA bits. Each of the MOD11A2 QA
values are set based on what majority of input daily QA values are for any
given pixel.

The 8 day compositing period was chosen because twice that period is the
exact ground track repeat period of the Terra and Aqua platforms. In this
product, along with both the day- and night-time surface temperature bands
and their quality indicator (QC) layers, are also MODIS bands 31 and 32 and
eight observation layers.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/118/MOD11_User_Guide_V6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/119/MOD11_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MOD11A2)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MOD11A2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-18 至 2026-10-16
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：8-day, emissivity, global, lst, mod11a2, modis, nasa, surface-temperature, terra, usgs, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LST_Day_1km | Day land surface temperature | 1000 |  |
| QC_Day | Daytime LST quality indicators | 1000 |  |
| Day_view_time | Local time of day observation | 1000 |  |
| Day_view_angl | View zenith angle of day observation | 1000 |  |
| LST_Night_1km | Night land surface temperature | 1000 |  |
| QC_Night | Nighttime LST quality indicators | 1000 |  |
| Night_view_time | Local time of night observation | 1000 |  |
| Night_view_angl | View zenith angle of night observation | 1000 |  |
| Emis_31 | Band 31 emissivity | 1000 |  |
| Emis_32 | Band 32 emissivity | 1000 |  |
| Clear_sky_days | Days in clear-sky conditions | 1000 |  |
| Clear_sky_nights | Nights in clear-sky conditions | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MOD11A2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD11A2
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD11A2.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
