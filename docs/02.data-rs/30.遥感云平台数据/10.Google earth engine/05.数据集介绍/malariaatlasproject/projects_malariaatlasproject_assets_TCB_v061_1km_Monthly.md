---
title: "TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (Monthly 1km)"
date: 2026-11-03 12:00:00
permalink: /pages/2dca5df6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "brightness"
  - "map"
  - "tasseled-cap"
  - "tcb"
  - "vegetation"
  - "vegetation-indices"
---

# TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (Monthly 1km)

## 数据集简介

This gap-filled Tasseled Cap Brightness (TCB) dataset was created by
applying the tasseled-cap equations defined in Lobser and Cohen (2007) to
MODIS BRDF-corrected imagery (MCD43B4). The resulting data were gap-filled
using the approach outlined in Weiss et al. (2014) to eliminate missing
data caused by factors such as cloud cover. After gap-filling the data was clipped to thresholds of [-1, 2] to ensure valid values. 

The gap-filled 8-daily ~1km outputs are then aggregated temporally to produce monthly and annual products.

## 基本信息

- 数据集编号（Earth Engine ID）：`projects/malariaatlasproject/assets/TCB_v061/1km/Monthly`
- 数据类型：影像集合（ImageCollection）
- 提供方：The Malaria Atlas Project、Google Earth Engine
- 时间范围：2001-02-01 至 2024-12-01
- 空间分辨率：5000 米
- 许可：CC-BY-NC-SA-4.0
- 关键词：brightness, map, tasseled-cap, tcb, vegetation, vegetation-indices

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Mean | The mean value of Tasseled Cap Brightness for each aggregated pixel. | 5000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('projects/malariaatlasproject/assets/TCB_v061/1km/Monthly');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/projects_malariaatlasproject_assets_TCB_v061_1km_Monthly
- 数据引用：Weiss, D.J., P.M. Atkinson, S. Bhatt, B. Mappin, S.I. Hay & P.W. Gething
(2014) An effective approach for gap-filling continental scale remotely
sensed time-series. ISPRS Journal of Photogrammetry and Remote Sensing,
98, 106-118. 
[doi:10.1016/j.isprsjprs.2014.10.001](https://doi.org/10.1016/j.isprsjprs.2014.10.001)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
