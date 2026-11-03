---
title: "EUCROPMAP"
date: 2026-11-03 12:00:00
permalink: /pages/9750a230/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "agriculture"
  - "crop"
  - "eu"
  - "jrc"
  - "lucas"
  - "sentinel1-derived"
---

# EUCROPMAP

## 数据集简介

European crop type maps based on Sentinel-1 and LUCAS Copernicus 2018 in-situ 
observations for 2018, and a combination of Sentinel-1, Sentinel-2, 
and auxiliary data with LUCAS Copernicus 2022 observations for 2022.

Based on the unique [LUCAS 2018 Copernicus in-situ survey](JRC_LUCAS_HARMO_THLOC_V1), this dataset 
represents the first EU-scale crop type map at 10m resolution, 
which was derived exclusively from S1A and S1B synthetic aperture radar observations. 
The 2022 dataset continues this effort using a multi-source approach that combines 
Sentinel-1 and Sentinel-2 imagery with temperature and elevation data, supported by LUCAS 2022 observations.

## 基本信息

- 数据集编号（Earth Engine ID）：`JRC/D5/EUCROPMAP/V1`
- 数据类型：影像集合（ImageCollection）
- 提供方：Joint Research Center (JRC)、Google Earth Engine
- 时间范围：2018-01-01 至 2022-01-01
- 空间分辨率：10 米
- 许可：CC-BY-4.0
- 关键词：agriculture, crop, eu, jrc, lucas, sentinel1-derived

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| classification | Main crop-specific land cover classification. | 10 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JRC/D5/EUCROPMAP/V1');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_D5_EUCROPMAP_V1
- 数据引用：d'Andrimont, R., Verhegghen, A., Lemoine, G., Kempeneers, P., Meroni, M.,
& Van der Velde, M. (2021). From parcel to continental scale-A first
European crop type map based on Sentinel-1 and LUCAS Copernicus in-situ
observations. Remote sensing of environment, 266, 112708.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
