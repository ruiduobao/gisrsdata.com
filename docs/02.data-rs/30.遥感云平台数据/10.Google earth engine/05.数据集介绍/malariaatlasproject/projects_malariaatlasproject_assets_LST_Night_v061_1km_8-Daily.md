---
title: "LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (8-Daily 1km)"
date: 2026-11-03 12:00:00
permalink: /pages/6f3727a9/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "lst"
  - "map"
  - "surface-temperature"
  - "weather-and-climate"
---

# LST Night: Malaria Atlas Project Gap-Filled Nighttime Land Surface Temperature (8-Daily 1km)

## 数据集简介

Nighttime Land Surface Temperature (LST) are derived from the ~1km MODIS [MOD11A2 v6.1](https://lpdaac.usgs.gov/products/mod11a2v061/) products.
The 8-daily composites are converted to degrees Celsius and then gap-filled using the approach outlined in [Weiss et al (2014)](https://doi.org/10.1016/j.isprsjprs.2014.10.001) 
to eliminate missing data caused by factors such as cloud cover. 
After gap-filling the data was clipped to thresholds of [-100, 100] to ensure valid values.  

The gap-filled 8-daily ~1km outputs are then aggregated temporally to produce monthly and annual products.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/malariaatlasproject/assets/LST_Night_v061/1km/8-Daily`
- 数据类型：影像集合（ImageCollection）
- 提供方：The Malaria Atlas Project、Google Earth Engine
- 时间范围：2001-03-01 至 2024-12-26
- 空间分辨率：5000 米
- 许可：CC-BY-NC-SA-4.0
- 关键词：lst, map, surface-temperature, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Mean | The mean value of nighttime land surface temperature for each aggregated pixel. | 5000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/malariaatlasproject/assets/LST_Night_v061/1km/8-Daily');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_malariaatlasproject_assets_LST_Night_v061_1km_8-Daily
- 数据引用：Weiss, D.J., P.M. Atkinson, S. Bhatt, B. Mappin, S.I. Hay & P.W. Gething
(2014) An effective approach for gap-filling continental scale remotely
sensed time-series. ISPRS Journal of Photogrammetry and Remote Sensing,
98, 106-118. 
[doi:10.1016/j.isprsjprs.2014.10.001](https://doi.org/10.1016/j.isprsjprs.2014.10.001)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
