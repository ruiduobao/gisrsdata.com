---
title: "NOAA CDR: Ocean Near-Surface Atmospheric Properties, Version 2"
date: 2026-11-03 12:00:00
permalink: /pages/11c640c9/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "air-temperature"
  - "atmospheric"
  - "cdr"
  - "hourly"
  - "humidity"
  - "noaa"
  - "oceans"
  - "osb"
  - "wind"
---

# NOAA CDR: Ocean Near-Surface Atmospheric Properties, Version 2

## 数据集简介

The Ocean Near-Surface Atmospheric Properties dataset is part of the NOAA
Ocean Surface Bundle (OSB) and provides a high quality Climate Data Record
(CDR) of air temperature, wind speed, and specific humidity over ice-free
ocean surfaces.

These atmospheric properties are calculated based on brightness temperature
data from the Special Sensor Microwave/Imager (SSM/I) and the Special Sensor
Microwave/Imager Sounder (SSMIS) on the Defense Meteorological Satellite
Program (DMSP) spacecraft, using a neural network.

## 基本信息

- 数据集编号（Earth Engine ID）：`NOAA/CDR/ATMOS_NEAR_SURFACE/V2`
- 数据类型：影像集合（ImageCollection）
- 提供方：NOAA、Google Earth Engine
- 时间范围：1988-01-01 至 2021-08-31
- 空间分辨率：27830 米
- 许可：proprietary
- 关键词：air-temperature, atmospheric, cdr, hourly, humidity, noaa, oceans, osb, wind

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| air_temperature | Air temperature at 10m | 27830 |  |
| specific_humidity | Specific humidity at 10m | 27830 |  |
| wind_speed | Wind speed at 10m | 27830 |  |
| fill_missing_qc | Quality control flags | 27830 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('NOAA/CDR/ATMOS_NEAR_SURFACE/V2');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_ATMOS_NEAR_SURFACE_V2
- 数据引用：Clayson, Carol Anne, Brown, Jeremiah, and NOAA CDR Program (2016). NOAA
Climate Data Record Ocean Surface Bundle (OSB) Climate Data Record
(CDR) of Near-surface Atmospheric Properties, Version 2. [indicate subset
used]. NOAA National ClimaticData Center. [doi:10.7289/V55T3HH0](https://doi.org/10.7289/V55T3HH0).

- DOI：10.7289/V55T3HH0

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
