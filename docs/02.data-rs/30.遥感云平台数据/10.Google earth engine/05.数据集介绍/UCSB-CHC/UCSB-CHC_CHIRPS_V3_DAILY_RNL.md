---
title: "CHIRPS 降水逐日再分析：气候危害中心带站点的红外降水（3.0 版，基于 ERA5）"
date: 2026-11-03 12:00:00
permalink: /pages/11a19c2e/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "chc"
  - "climate"
  - "geophysical"
  - "precipitation"
  - "ucsb"
  - "weather"
---

# CHIRPS 降水逐日再分析：气候危害中心带站点的红外降水（3.0 版，基于 ERA5）

英文原名：CHIRPS Precipitation Daily Reanalysis: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, ERA5-based)

## 这是什么数据

气候危害中心带站点的红外降水（CHIRPS v3）是一个 40 多年、高分辨率的准全球降雨数据集。它跨越北纬 60 度至南纬 60 度、覆盖所有经度，提供 1981 年至近现在的数据。CHIRPS v3 将基于卫星的热红外降雨估算与实地站点观测结合，生成陆地上 0.05 度格网降雨时间序列。这是该数据集的 3.0 版，更多信息见 [CHC 页面](https://www.chc.ucsb.edu/data/chirps3)。

CHIRPS 本质上是候与逐月产品，其他时间步长由此派生。此逐日数据集（「rnl」）使用 ECMWF ERA 再分析 v5（ERA5）数据产品的逐日降水，将 CHIRPS-v3 候降水总量划分为逐日量。

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
var dataset = ee.ImageCollection('UCSB-CHC/CHIRPS/V3/DAILY_RNL');
```

- 数据集编号（Earth Engine ID）：`UCSB-CHC/CHIRPS/V3/DAILY_RNL`
- 提供方：UCSB/CHC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/UCSB-CHC_CHIRPS_V3_DAILY_RNL

## 许可与引用

- 许可：proprietary
- 关键词：chc, climate, geophysical, precipitation, ucsb, weather
- 数据引用：Climate Hazards Center Infrared Precipitation with Stations version 3.
CHIRPS3 Data Repository [doi:10.15780/G2JQ0P](https://doi.org/10.15780/G2JQ0P) (2025).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CHIRPS Precipitation Daily Near-Real-Time: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, IMERG-based)](/pages/09ea3f30/)
- [CHIRPS Precipitation Pentad: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0)](/pages/babe4e05/)
- [CPC 全球统一温度](/pages/8042cb38/)
- [CPC 全球统一雨量计逐日降水分析](/pages/9d6b70e8/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
