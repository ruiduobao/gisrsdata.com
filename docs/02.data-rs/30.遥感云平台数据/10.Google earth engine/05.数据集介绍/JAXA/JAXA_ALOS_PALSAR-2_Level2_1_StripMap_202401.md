---
title: "ALOS-2 PALSAR-2 StripMap Level 2.1"
date: 2026-11-03 12:00:00
permalink: /pages/b836b19e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alos2"
  - "eroc"
  - "jaxa"
  - "palsar2"
  - "radar"
  - "sar"
  - "satellite-imagery"
---

# ALOS-2 PALSAR-2 StripMap Level 2.1

## 数据集简介

Starting from the night of January 1st, 2024, based on the request from
Japanese ministries and related organization, JAXA implemented ALOS-2
PALSAR-2 emergency observation. Since JAXA expects these emergency
observation data to be extremely useful for disaster
management, JAXA decided to open these data on Google Earth Engine for
public and research usage.

JAXA released PALSAR-2 Level 2.1 strip map mode observation data with 3m
single polarization for January 1-3 and January 8 2024, together with
some archive
data. PALSAR-2 Level 2.1 data is orthorectified from level 1.1 data by using
digital elevation model. The DN values can be converted to sigma naught
values in decibel unit (dB) using the following equation:

* &sigma;<sub>0</sub> = 10*log<sub>10</sub>(DN<sup>2</sup>) - 83.0 dB

Below are the dates for which the dataset has data.

Obs date                   | Frame     |  Beam     | A/D
:--------------------------|:----------|:----------|:---------------
2024/01/01 and 2022/09/26  | 0750, 0760, 0770 | U2-6L | Asc.
2024/01/02 and 2023/06/06  | 2820, 2830, 2840 | U2-8L | Desc.
2024/01/08, 2024/01/03 and 2023/12/06  | 0720, 0730 | U2-9R | Asc.

## 基本信息

- 数据集编号（Earth Engine ID）：`JAXA/ALOS/PALSAR-2/Level2_1/StripMap_202401`
- 数据类型：影像集合（ImageCollection）
- 提供方：JAXA EORC、Google Earth Engine
- 时间范围：2022-09-26 至 2024-01-08
- 空间分辨率：3 米
- 许可：CC-BY-NC-SA-4.0
- 关键词：alos2, eroc, jaxa, palsar2, radar, sar, satellite-imagery

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| b1 | HH polarization Terrain-flattened Gamma-Nought backscatter coefficient.  | 3 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('JAXA/ALOS/PALSAR-2/Level2_1/StripMap_202401');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_PALSAR-2_Level2_1_StripMap_202401
- 数据引用：The data used for this paper have been provided by Earth Observation
Research Center (EORC) of Japan Aerospace Exploration Agency (JAXA).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
