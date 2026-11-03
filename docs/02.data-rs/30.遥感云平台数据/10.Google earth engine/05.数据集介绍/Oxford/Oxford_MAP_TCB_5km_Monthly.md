---
title: "Oxford MAP TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/8e5a86b5/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "brightness"
  - "map"
  - "oxford"
  - "tasseled-cap"
  - "tcb"
  - "vegetation-indices"
---

# Oxford MAP TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

This gap-filled Tasseled Cap Brightness (TCB) dataset was created by
applying the tasseled-cap equations defined in Lobser and Cohen (2007) to
MODIS BRDF-corrected imagery (MCD43B4). The resulting data were gap-filled
using the approach outlined in Weiss et al. (2014) to eliminate missing
data caused by factors such as cloud cover, and then the data were
aggregated temporally and spatially to produce the monthly &asymp;5km product.

This dataset was produced by Harry Gibson and Daniel Weiss of the
[Malaria Atlas Project](https://malariaatlas.org/).

## 基本信息

- 数据集编号（Earth Engine ID）：`Oxford/MAP/TCB_5km_Monthly`
- 数据类型：影像集合（ImageCollection）
- 提供方：Oxford Malaria Atlas Project、Google Earth Engine
- 时间范围：2001-02-01 至 2015-01-01
- 空间分辨率：5000 米
- 许可：CC-BY-NC-SA-4.0
- 关键词：brightness, map, oxford, tasseled-cap, tcb, vegetation-indices

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Mean | The mean value of Tasseled Cap Brightness for each aggregated pixel. | 5000 |  |
| FilledProportion | A quality control band that indicates the percentage of each resulting pixel that was comprised of raw data (as opposed to gap-filled estimates).  | 5000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('Oxford/MAP/TCB_5km_Monthly');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_TCB_5km_Monthly
- 数据引用：Weiss, D.J., P.M. Atkinson, S. Bhatt, B. Mappin, S.I. Hay & P.W. Gething
(2014) An effective approach for gap-filling continental scale remotely
sensed time-series. ISPRS Journal of Photogrammetry and Remote Sensing,
98, 106-118.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
