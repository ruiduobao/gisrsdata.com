---
title: "NCEP/NCAR 再分析数据：水汽 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/69c2c9eb/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "climate"
  - "geophysical"
  - "ncep"
  - "noaa"
  - "precipitable"
  - "reanalysis"
  - "vapor"
  - "weather-and-climate"
---

# NCEP/NCAR 再分析数据：水汽 [已弃用]

英文原名：NCEP/NCAR Reanalysis Data, Water Vapor [deprecated]

## 这是什么数据

NCEP/NCAR 再分析项目是国家环境预测中心（NCEP，前身为「NMC」）与国家大气研究中心（NCAR）的联合项目。此联合工作的目标是使用历史数据生产新的大气分析，并生产当前大气状态的分析（气候数据同化系统，CDAS）。NCEP/NCAR 再分析 1 项目正使用最先进的分析/预报系统，使用 1948 年至 2026 年 3 月的过去数据进行数据同化。数据有 6 小时时间分辨率（0000、0600、1200 与 1800 UTC）与 2.5 度空间分辨率。

NCEP 于 2026 年 3 月停产本数据集，不再更新。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1948 年至 2026 年；分辨率：278,300 米。
- 时间范围：1948-01-01 至 2026-03-18

## 分辨率与规格

- 空间分辨率：约 278,300 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| pr_wtr | 整层水汽。 | 278300 |  |

## 能拿来做什么

- 大气再分析与气候研究
- 天气分析
- 气候监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NCEP_RE/surface_wv');
```

- 数据集编号（Earth Engine ID）：`NCEP_RE/surface_wv`
- 提供方：NCEP、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NCEP_RE_surface_wv

## 许可与引用

- 许可：proprietary
- 关键词：atmosphere, climate, geophysical, ncep, noaa, precipitable, reanalysis, vapor, weather-and-climate
- 数据引用：Kalnay et al., 1996, The NCEP/NCAR 40-Year Reanalysis Project. Bull. Amer.
Meteor. Soc., 77, 437-471.
[doi:10.1175/1520-0477(1996)077<0437:TNYRP\\>2.0.CO;2](https://doi.org/10.1175/1520-0477(1996)077<0437:TNYRP>2.0.CO;2).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [AERDB_D3_VIIRS_NOAA20.002：VIIRS/NOAA-20 深蓝气溶胶光学厚度逐日三级全球 1.0 度格网](/pages/fa53b9c1/)
- [AERDB_D3_VIIRS_SNPP.002：VIIRS/SNPP 深蓝气溶胶光学厚度逐日三级全球 1.0 度格网](/pages/64c851e2/)
- [ERA5 逐小时数据 — ECMWF 气候再分析](/pages/2de85afd/)
- [ERA5 逐小时气压层数据 — ECMWF 气候再分析](/pages/e4d910e9/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
