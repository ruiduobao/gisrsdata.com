---
title: "MYD10A1.005 Aqua 雪盖日产品全球 500 米 [已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/36bd8918/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "aqua"
  - "cryosphere"
  - "daily"
  - "geophysical"
  - "global"
  - "modis"
  - "myd10a1"
  - "nsidc"
  - "snow"
---

# MYD10A1.005 Aqua 雪盖日产品全球 500 米 [已弃用]

英文原名：MYD10A1.005 Aqua Snow Cover Daily Global 500m [deprecated]

## 这是什么数据

MYD10A1 V5 雪盖日产品全球 500 米包含雪盖、雪反照率、分数雪盖与质量评估（QA）数据。雪盖数据基于采用归一化差值雪指数（NDSI）与其他判据检验的雪制图算法。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2016 年；分辨率：500 米。
- 时间范围：2002-07-04 至 2016-12-25

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Snow_Cover_Daily_Tile | NDSI 雪盖加其他结果。此值针对 MOD10_L2 计算，并在选择当日观测时检索。可能值：0-100（NDSI 雪盖）。 | 500 |  |
| Snow_Spatial_QA | 算法结果质量的基本估计。此值针对 MOD10_L2 计算，并随当日相应观测检索。 | 500 |  |
| Snow_Albedo_Daily_Tile | 雪反照率百分比加其他结果。 | 500 |  |
| Fractional_Snow_Cover | 雪盖百分比加其他结果。 | 500 |  |

## 能拿来做什么

- 雪盖监测与积雪物候
- 水文与融雪径流模拟
- 气候变化研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/MYD10A1');
```

- 数据集编号（Earth Engine ID）：`MODIS/MYD10A1`
- 提供方：NSIDC、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_MYD10A1

## 许可与引用

- 许可：proprietary
- 关键词：albedo, aqua, cryosphere, daily, geophysical, global, modis, myd10a1, nsidc, snow
- 数据引用：Hall, D. K., V. V. Salomonson, and G. A. Riggs. 2006. MODIS/Terra
Snow Cover Daily L3 Global 500m Grid. Version 5. Boulder, Colorado
USA: NASA National Snow and Ice Data Center Distributed Active
Archive Center.

- DOI：10.5067/ZFAEMQGSR4XD

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ECMWF 近实时 IFS 大气预报](/pages/3fdfa56d/)
- [ERA5-Land 按日内时刻月平均数据 — ECMWF 气候再分析](/pages/39c04517/)
- [ERA5-Land 月聚合数据 — ECMWF 气候再分析](/pages/0889ecdc/)
- [ERA5-Land 逐小时数据 — ECMWF 气候再分析](/pages/0a0b8372/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
