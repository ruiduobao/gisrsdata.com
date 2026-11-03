---
title: "MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km"
date: 2026-11-03 12:00:00
permalink: /pages/a130c488/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "daily"
  - "emissivity"
  - "global"
  - "lst"
  - "mod11a1"
  - "modis"
  - "nasa"
  - "surface-temperature"
  - "terra"
  - "usgs"
  - "weather-and-climate"
---

# MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km

## 数据集简介

The MOD11A1 V6.1 product provides daily land surface temperature
(LST) and emissivity values in a 1200 x 1200 kilometer grid. The
temperature value is derived from the MOD11_L2 swath product. Above
30 degrees latitude, some pixels may have multiple observations
where the criteria for clear-sky are met. When this occurs, the
pixel value is the average of all qualifying observations. Provided
along with both the day-time and night-time surface temperature
bands and their quality indicator layers are MODIS bands 31 and
32 and six observation layers.

Documentation:

* [User's Guide](https://lpdaac.usgs.gov/documents/118/MOD11_User_Guide_V6.pdf)

* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/119/MOD11_ATBD.pdf)

* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MOD11A1)

## 基本信息

- 数据集编号（Earth Engine ID）：`MODIS/061/MOD11A1`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 时间范围：2000-02-24 至 2026-10-30
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：daily, emissivity, global, lst, mod11a1, modis, nasa, surface-temperature, terra, usgs, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LST_Day_1km | Daytime Land Surface Temperature | 1000 |  |
| QC_Day | Daytime LST Quality Indicators | 1000 |  |
| Day_view_time | Local time of day observation | 1000 |  |
| Day_view_angle | View zenith angle of day observation | 1000 |  |
| LST_Night_1km | Nighttime Land Surface Temperature | 1000 |  |
| QC_Night | Nighttime LST Quality indicators | 1000 |  |
| Night_view_time | Local time of night observation | 1000 |  |
| Night_view_angle | View zenith angle of night observation | 1000 |  |
| Emis_31 | Band 31 emissivity | 1000 |  |
| Emis_32 | Band 32 emissivity | 1000 |  |
| Clear_day_cov | Day clear-sky coverage | 1000 |  |
| Clear_night_cov | Night clear-sky coverage | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('MODIS/061/MOD11A1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MOD11A1
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MOD11A1.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
