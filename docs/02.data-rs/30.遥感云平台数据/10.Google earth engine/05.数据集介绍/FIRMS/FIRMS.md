---
title: "FIRMS: Fire Information for Resource Management System"
date: 2026-11-03 12:00:00
permalink: /pages/4ae50fa9/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "eosdis"
  - "fire"
  - "firms"
  - "geophysical"
  - "hotspot"
  - "lance"
  - "modis"
  - "nasa"
  - "thermal"
---

# FIRMS: Fire Information for Resource Management System

## 数据集简介

The Earth Engine version of the Fire Information for Resource Management
System (FIRMS) dataset contains the LANCE fire detection product in
rasterized form. The near real-time (NRT) active fire locations are
processed by LANCE using the standard MODIS MOD14/MYD14 Fire and Thermal
Anomalies product. Each active fire location represents the centroid of a
1km pixel that is flagged by the algorithm as containing one or more fires
within the pixel. The data are rasterized as follows: for each FIRMS active
fire point, a 1km bounding box (BB) is defined; pixels in the MODIS
sinusoidal projection that intersect the FIRMS BB are identified; if
multiple FIRMS BBs intersect the same pixel, the one with higher confidence
is retained; in case of a tie, the brighter one is retained.

The data in the near-real-time dataset are not considered to be of science
quality.

Additional information can be found [here](https://firms.modaps.eosdis.nasa.gov/).

NOTE: VIIRS FIRMS datasets from NOAA20 and SUOMI are also available:

* [NASA/LANCE/NOAA20_VIIRS/C2](NASA_LANCE_NOAA20_VIIRS_C2)
* [NASA/LANCE/SNPP_VIIRS/C2](NASA_LANCE_SNPP_VIIRS_C2)

## 基本信息

- 数据集编号（Earth Engine ID）：`FIRMS`
- 数据类型：影像集合（ImageCollection）
- 提供方：NASA / LANCE / EOSDIS、Google Earth Engine
- 时间范围：2000-11-01 至 2026-11-01
- 空间分辨率：1000 米
- 许可：proprietary
- 关键词：eosdis, fire, firms, geophysical, hotspot, lance, modis, nasa, thermal

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| T21 | The brightness temperature of a fire pixel using MODIS channels 21/22. | 1000 |  |
| confidence | A detection confidence intended to help users gauge the quality of individual active fire pixels. The confidence estimate ranges between 0% and 100% for all fire pixels within the fire mask. The confidence field should be used with caution; it is likely that it will vary in meaning in different parts of the world.  | 1000 |  |
| line_number | Line number in the FIRMS CSV file that the pixel came from. | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('FIRMS');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/FIRMS
- 数据引用：MODIS Collection 6 NRT Hotspot / Active Fire Detections MCD14DL.
Available on-line [https://earthdata.nasa.gov/firms](https://earthdata.nasa.gov/firms).
[doi:10.5067/FIRMS/MODIS/MCD14DL.NRT.006](https://doi.org/10.5067/FIRMS/MODIS/MCD14DL.NRT.006)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
