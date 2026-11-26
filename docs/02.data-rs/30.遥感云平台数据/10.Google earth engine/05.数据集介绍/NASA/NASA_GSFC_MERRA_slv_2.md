---
title: "MERRA-2 M2T1NXSLV：单层诊断 V5.12.4"
date: 2026-11-03 12:00:00
permalink: /pages/36298a6b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "climate"
  - "condensation"
  - "humidity"
  - "merra"
  - "nasa"
  - "omega"
  - "pressure"
  - "slv"
  - "temperature"
  - "vapor"
  - "water"
---

# MERRA-2 M2T1NXSLV：单层诊断 V5.12.4

英文原名：MERRA-2 M2T1NXSLV: Single-Level Diagnostics V5.12.4

## 这是什么数据

M2T1NXSLV（或 tavg1_2d_slv_Nx）是现代时代回顾分析研究与应用版本 2（MERRA-2）中的每小时时间平均二维数据集合。本集合由常用垂直层上的气象诊断组成，如 2 米气温（或 10 米、850 hPa、500 hPa、250 hPa）、50 米风分量（或 2 米、10 米、850 hPa、500 hPa、250 hPa）、海平面气压、地表气压与总可降水水汽（或冰水、液态水）。数据场以从 00:30 UTC 开始的一小时的中心时间打时间戳，例如：00:30、01:30、……、23:30 UTC。

MERRA-2 是 NASA 全球建模与同化办公室（GMAO）使用戈达德地球观测系统模式（GEOS）版本 5.12.4 生产的卫星时代全球大气再分析的最新版本。数据集覆盖 1980 年至今的时段，延迟为月末后约 3 周。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1980 年至 2026 年；分辨率：69,375 米。
- 时间范围：1980-01-01 至 2026-10-01

## 分辨率与规格

- 空间分辨率：约 69,375 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| CLDPRS | 云顶气压。 | 69375 |  |
| CLDTMP | 云顶温度。 | 69375 |  |
| DISPH | 零平面位移高度。 | 69375 |  |
| H1000 | 1000 mb 高度。 | 69375 |  |
| H250 | 250 hPa 高度。 | 69375 |  |
| H500 | 500 hPa 高度。 | 69375 |  |
| H850 | 850 hPa 高度。 | 69375 |  |
| OMEGA500 | 500 hPa 的欧米伽。 | 69375 |  |
| PBLTOP | PBL 顶气压。 | 69375 |  |
| PS | 地表气压。 | 69375 |  |
| Q250 | 250 hPa 比湿。 | 69375 |  |
| Q500 | 500 hPa 比湿。 | 69375 |  |
| Q850 | 850 hPa 比湿。 | 69375 |  |
| QV10M | 10 米比湿。 | 69375 |  |
| QV2M | 2 米比湿。 | 69375 |  |
| SLP | 海平面气压。 | 69375 |  |
| T10M | 10 米气温。 | 69375 |  |
| T250 | 250 hPa 气温。 | 69375 |  |
| T2MDEW | 2 米露点温度。 | 69375 |  |
| T2MWET | 2 米湿球温度。 | 69375 |  |
| T2M | 2 米气温。 | 69375 |  |
| T500 | 500 hPa 气温。 | 69375 |  |
| T850 | 850 hPa 气温。 | 69375 |  |
| TO3 | 整层臭氧。 | 69375 |  |
| TOX | 整层奇氧。 | 69375 |  |
| TQI | 总可降水冰水。 | 69375 |  |
| TQL | 总可降水液态水。 | 69375 |  |
| TQV | 总可降水水汽。 | 69375 |  |
| TROPPB | 基于混合估计的对流层顶气压（TROPP）。 | 69375 |  |
| TROPPT | 基于热力估计的对流层顶气压。 | 69375 |  |
| TROPPV | 基于 EPV 估计的对流层顶气压。 | 69375 |  |
| TROPQ | 使用混合 TROPP（TROPPB）估计的对流层顶比湿。 | 69375 |  |
| TROPT | 使用混合 TROPP 估计的对流层顶温度。 | 69375 |  |
| TS | 地表皮肤温度。 | 69375 |  |
| U10M | 10 米东向风。 | 69375 |  |
| U250 | 250 hPa 东向风。 | 69375 |  |
| U2M | 2 米东向风。 | 69375 |  |
| U500 | 500 hPa 东向风。 | 69375 |  |
| U50M | 50 米东向风。 | 69375 |  |
| U850 | 850 hPa 东向风。 | 69375 |  |
| V10M | 10 米北向风。 | 69375 |  |
| V250 | 250 hPa 北向风。 | 69375 |  |
| V2M | 2 米北向风。 | 69375 |  |
| V500 | 500 hPa 北向风。 | 69375 |  |
| V50M | 50 米北向风。 | 69375 |  |
| V850 | 850 hPa 北向风。 | 69375 |  |
| ZLCL | 抬升凝结高度。 | 69375 |  |

## 能拿来做什么

- 大气再分析与气候研究
- 数值天气预报
- 水循环与能量平衡分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/GSFC/MERRA/slv/2');
```

- 数据集编号（Earth Engine ID）：`NASA/GSFC/MERRA/slv/2`
- 提供方：NASA/MERRA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GSFC_MERRA_slv_2

## 许可与引用

- 许可：proprietary
- 关键词：atmosphere, climate, condensation, humidity, merra, nasa, omega, pressure, slv, temperature, vapor, water, water-vapor, weather-and-climate, wind
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MERRA-2 M2I3NVAER: Aerosol Mixing Ratio V5.12.4](/pages/a20ec4cb/)
- [MERRA-2 M2T1NXAER: Aerosol Diagnostics V5.12.4](/pages/2c0f8a49/)
- [MERRA-2 M2T1NXRAD: Radiation Diagnostics V5.12.4](/pages/201faee8/)
- [ERA5 逐小时数据 — ECMWF 气候再分析](/pages/2de85afd/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
