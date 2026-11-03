---
title: "OpenLandMap Long-term Land Surface Temperature Daytime Monthly Standard Deviation"
date: 2026-11-03 12:00:00
permalink: /pages/6064b050/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "envirometrix"
  - "lst"
  - "mod11a2"
  - "modis"
  - "monthly"
  - "opengeohub"
  - "openlandmap"
  - "weather-and-climate"
---

# OpenLandMap Long-term Land Surface Temperature Daytime Monthly Standard Deviation

## 数据集简介

Long-term MODIS LST day-time and night-time temperatures standard deviation
at 1 km based on the 2000-2017 time series.

Derived using the [data.table package and quantile function in R](https://gitlab.com/openlandmap/global-layers/tree/master/input_layers/MOD11A2).
For more info about the MODIS LST product see [this page](https://lpdaac.usgs.gov/products/mod11a2v006/).
Antarctica is not included.

To access and visualize maps outside of Earth Engine, use [this page](https://opengeohub.org/about-openlandmap).

If you discover a bug, artifact or inconsistency in the LandGIS maps
or if you have a question please use the following channels:

 *  [Technical issues and questions about the code](https://gitlab.com/openlandmap/global-layers/issues)
 *  [General questions and comments](https://disqus.com/home/forums/landgis/)

## 基本信息

- 数据集编号（Earth Engine ID）：`OpenLandMap/CLM/CLM_LST_MOD11A2-DAY_SD/v01`
- 数据类型：影像（Image）
- 提供方：EnvirometriX Ltd、Google Earth Engine
- 时间范围：2000-01-01 至 2018-01-01
- 空间分辨率：1000 米
- 许可：CC-BY-SA-4.0
- 关键词：climate, envirometrix, lst, mod11a2, modis, monthly, opengeohub, openlandmap, weather-and-climate

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| jan | Long-term Land Surface Temperature daytime monthly stddev, January | 1000 |  |
| feb | Long-term Land Surface Temperature daytime monthly stddev, February | 1000 |  |
| mar | Long-term Land Surface Temperature daytime monthly stddev, March | 1000 |  |
| apr | Long-term Land Surface Temperature daytime monthly stddev, April | 1000 |  |
| may | Long-term Land Surface Temperature daytime monthly stddev, May | 1000 |  |
| jun | Long-term Land Surface Temperature daytime monthly stddev, June | 1000 |  |
| jul | Long-term Land Surface Temperature daytime monthly stddev, July | 1000 |  |
| aug | Long-term Land Surface Temperature daytime monthly stddev, August | 1000 |  |
| sep | Long-term Land Surface Temperature daytime monthly stddev, September | 1000 |  |
| oct | Long-term Land Surface Temperature daytime monthly stddev, October | 1000 |  |
| nov | Long-term Land Surface Temperature daytime monthly stddev, November | 1000 |  |
| dec | Long-term Land Surface Temperature daytime monthly stddev, December | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('OpenLandMap/CLM/CLM_LST_MOD11A2-DAY_SD/v01');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OpenLandMap_CLM_CLM_LST_MOD11A2-DAY_SD_v01
- 数据引用：Long-term MODIS LST day-time and night-time temperatures, sd and differences
at 1 km based on the 2000-2017 time series
[10.5281/zenodo.1420115](https://doi.org/10.5281/zenodo.1420114)

- DOI：10.5281/zenodo.1420114

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
