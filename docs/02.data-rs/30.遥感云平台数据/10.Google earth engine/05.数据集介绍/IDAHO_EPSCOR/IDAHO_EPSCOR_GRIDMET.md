---
title: "GRIDMET：爱达荷大学格网地表气象数据集"
date: 2026-11-03 12:00:00
permalink: /pages/824ff3bb/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "fireburning"
  - "gridmet"
  - "humidity"
  - "merced"
  - "metdata"
  - "nfdrs"
  - "precipitation"
  - "radiation"
  - "temperature"
  - "water-vapor"
  - "weather-and-climate"
---

# GRIDMET：爱达荷大学格网地表气象数据集

英文原名：GRIDMET: University of Idaho Gridded Surface Meteorological Dataset

## 这是什么数据

格网地表气象数据集提供自 1979 年以来美国本土高空间分辨率（约 4 公里）的逐日地表温度、降水、风、湿度和辐射场。该数据集融合了 PRISM 的高分辨率空间数据与国家陆地数据同化系统（NLDAS）的高时间分辨率数据，产生空间和时间上连续的场，便于进一步的陆面建模。

该数据集包含临时产品，当完整的源数据可用时会被更新版本替换。产品可通过 'status' 属性值区分。起初，资产以 status='early' 摄入。几天后，它们被 status='provisional' 的资产替换。大约 2 个月后，它们被 status='permanent' 的最终资产替换。

## 覆盖范围与时间

- 覆盖范围：美国本土
- 时间范围：1979-01-01 至 2026-10-26

## 分辨率与规格

- 空间分辨率：约 4,638.3 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| pr | 降水量 | 4638.3 |  |
| rmax | 最大相对湿度 | 4638.3 |  |
| rmin | 最小相对湿度 | 4638.3 |  |
| sph | 比湿 | 4638.3 |  |
| srad | 地表向下短波辐射 | 4638.3 |  |
| th | 风向 | 4638.3 |  |
| tmmn | 最低温度 | 4638.3 |  |
| tmmx | 最高温度 | 4638.3 |  |
| vs | 10 米处风速 | 4638.3 |  |
| erc | 能量释放分量 | 4638.3 |  |
| eto | 逐日草地参考蒸散量 | 4638.3 |  |
| bi | 燃烧指数 | 4638.3 |  |
| fm100 | 100 小时死燃料湿度 | 4638.3 |  |
| fm1000 | 1000 小时死燃料湿度 | 4638.3 |  |
| etr | 逐日苜蓿参考蒸散量 | 4638.3 |  |
| vpd | 平均水汽压差 | 4638.3 |  |

## 能拿来做什么

- 逐日气象驱动与陆面建模
- 火灾危险等级评估
- 农业与水文应用

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('IDAHO_EPSCOR/GRIDMET');
```

- 数据集编号（Earth Engine ID）：`IDAHO_EPSCOR/GRIDMET`
- 提供方：University of California Merced、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/IDAHO_EPSCOR_GRIDMET

## 许可与引用

- 许可：proprietary
- 关键词：climate, fireburning, gridmet, humidity, merced, metdata, nfdrs, precipitation, radiation, temperature, water-vapor, weather-and-climate, wind
- 数据引用：Abatzoglou J. T., Development of gridded surface meteorological
data for ecological applications and modelling, International Journal
of Climatology. (2012) [doi:10.1002/joc.3413](https://doi.org/10.1002/joc.3413)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)
- [ERA5 逐日聚合数据](/pages/9ae9975a/)
- [CHELSA气象数据](/pages/1849d6/)
- [CHIRPS Precipitation Daily Near-Real-Time: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, IMERG-based)](/pages/09ea3f30/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
