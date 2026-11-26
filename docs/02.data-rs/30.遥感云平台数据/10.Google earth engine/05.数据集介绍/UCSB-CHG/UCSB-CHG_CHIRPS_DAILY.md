---
title: "CHIRPS 降水逐日：气候危害中心带站点的红外降水（2.0 版定版）"
date: 2026-11-03 12:00:00
permalink: /pages/7d12c001/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "chg"
  - "climate"
  - "geophysical"
  - "precipitation"
  - "ucsb"
  - "weather"
---

# CHIRPS 降水逐日：气候危害中心带站点的红外降水（2.0 版定版）

英文原名：CHIRPS Precipitation Daily: Climate Hazards Center InfraRed Precipitation With Station Data (Version 2.0 Final)

## 这是什么数据

气候危害中心带站点的红外降水（CHIRPS）是一个 30 多年的准全球降雨数据集。CHIRPS 将 0.05° 分辨率卫星影像与实地站点数据结合，创建用于趋势分析与季节干旱监测的格网降雨时间序列。

## 覆盖范围与时间

- 覆盖范围：空间：准全球（60°N–60°S）；时间：1981 年至今（逐日）；分辨率：5,566 米（0.05 度）。
- 时间范围：1981-01-01 至 2026-09-30

## 分辨率与规格

- 空间分辨率：约 5,566 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| precipitation | 降水 | 5566 |  |

## 能拿来做什么

- 做干旱监测与季节预报。
- 分析 1981 年以来降水趋势与极端事件。
- 为农业与水资源管理提供降雨数据。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('UCSB-CHG/CHIRPS/DAILY');
```

- 数据集编号（Earth Engine ID）：`UCSB-CHG/CHIRPS/DAILY`
- 提供方：UCSB/CHG、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UCSB-CHG_CHIRPS_DAILY

## 许可与引用

- 许可：proprietary
- 关键词：chg, climate, geophysical, precipitation, ucsb, weather
- 数据引用：Funk, Chris, Pete Peterson, Martin Landsfeld, Diego Pedreros, James
Verdin, Shraddhanand Shukla, Gregory Husak, James Rowland, Laura Harrison,
Andrew Hoell & Joel Michaelsen. "The climate hazards infrared precipitation
with stations-a new environmental record for monitoring extremes".
Scientific Data 2, 150066. [doi:10.1038/sdata.2015.66](https://doi.org/10.1038/sdata.2015.66)
2015.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CHIRPS Precipitation Pentad: Climate Hazards Center InfraRed Precipitation With Station Data (Version 2.0 Final)](/pages/82b64c2f/)
- [CPC 全球统一温度](/pages/8042cb38/)
- [CPC 全球统一雨量计逐日降水分析](/pages/9d6b70e8/)
- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
