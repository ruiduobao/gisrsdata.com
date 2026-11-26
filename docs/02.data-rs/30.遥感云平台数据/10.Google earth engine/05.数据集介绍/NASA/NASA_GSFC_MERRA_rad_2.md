---
title: "MERRA-2 M2T1NXRAD：辐射诊断 V5.12.4"
date: 2026-11-03 12:00:00
permalink: /pages/201faee8/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "albedo"
  - "atmosphere"
  - "climate"
  - "emissivity"
  - "merra"
  - "shortwave"
  - "temperature"
  - "weather-and-climate"
---

# MERRA-2 M2T1NXRAD：辐射诊断 V5.12.4

英文原名：MERRA-2 M2T1NXRAD: Radiation Diagnostics V5.12.4

## 这是什么数据

M2T1NXRAD（或 tavg1_2d_rad_Nx）是现代时代回顾分析研究与应用版本 2（MERRA-2）中的每小时时间平均数据集合。本集合由辐射诊断组成，如地表反照率、云面积分数、云内光学厚度、地表入射短波通量（即太阳辐射）、地表净向下短波通量与 TOA（大气顶）的上行长波通量（即 TOA 的出射长波辐射（OLR））。数据场以从 00:30 UTC 开始的一小时的中心时间打时间戳，例如：00:30、01:30、……、23:30 UTC。

MERRA-2 是 NASA 全球建模与同化办公室（GMAO）使用戈达德地球观测系统模式（GEOS）版本 5.12.4 生产的卫星时代全球大气再分析的最新版本。数据集覆盖 1980 年至今的时段，延迟为月末后约 3 周。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1980 年至 2026 年；分辨率：69,375 米。
- 时间范围：1980-01-01 至 2026-10-01

## 分辨率与规格

- 空间分辨率：约 69,375 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ALBEDO | 地表反照率。 | 69375 |  |
| ALBNIRDF | 近红外漫射地表反照率。 | 69375 |  |
| ALBNIRDR | 近红外直射地表反照率。 | 69375 |  |
| ALBVISDF | 可见光漫射地表反照率。 | 69375 |  |
| ALBVISDR | 可见光直射地表反照率。 | 69375 |  |
| CLDHGH | 高云云面积分数。 | 69375 |  |
| CLDLOW | 低云云面积分数。 | 69375 |  |
| CLDMID | 中云云面积分数。 | 69375 |  |
| CLDTOT | 总云面积分数。 | 69375 |  |
| EMIS | 地表发射率。 | 69375 |  |
| LWGABCLRCLN | 假设晴空且无气溶胶的地表吸收长波辐射。 | 69375 |  |
| LWGABCLR | 假设晴空的地表吸收长波辐射。 | 69375 |  |
| LWGAB | 地表吸收长波辐射。 | 69375 |  |
| LWGEM | 地表发射的长波通量。 | 69375 |  |
| LWGNTCLRCLN | 假设晴空且无气溶胶的地表净向下长波通量。 | 69375 |  |
| LWGNTCLR | 假设晴空的地表净向下长波通量。 | 69375 |  |
| LWGNT | 地表净向下长波通量。 | 69375 |  |
| LWTUPCLRCLN | 假设晴空且无气溶胶的 TOA 上行长波通量。 | 69375 |  |
| LWTUPCLR | 假设晴空的 TOA 上行长波通量。 | 69375 |  |
| LWTUP | TOA 上行长波通量。 | 69375 |  |
| SWGDNCLR | 假设晴空的地表入射短波通量。 | 69375 |  |
| SWGDN | 地表入射短波通量。 | 69375 |  |
| SWGNTCLN | 假设无气溶胶的地表净向下短波通量。 | 69375 |  |
| SWGNTCLRCLN | 假设晴空且无气溶胶的地表净向下短波通量。 | 69375 |  |
| SWGNTCLR | 假设晴空的地表净向下短波通量。 | 69375 |  |
| SWGNT | 地表净向下短波通量。 | 69375 |  |
| SWTDN | TOA 入射短波通量。 | 69375 |  |
| SWTNTCLN | 假设无气溶胶的 TOA 净向下短波通量。 | 69375 |  |
| SWTNTCLRCLN | 假设晴空且无气溶胶的 TOA 净向下短波通量。 | 69375 |  |
| SWTNTCLR | 假设晴空的 TOA 净向下短波通量。 | 69375 |  |
| SWTNT | TOA 净向下短波通量。 | 69375 |  |
| TAUHGH | 高云云内光学厚度（导出）。 | 69375 |  |
| TAULOW | 低云云内光学厚度。 | 69375 |  |
| TAUMID | 中云云内光学厚度。 | 69375 |  |
| TAUTOT | 全部云云内光学厚度。 | 69375 |  |
| TS | 地表皮肤温度。 | 69375 |  |

## 能拿来做什么

- 大气再分析与气候研究
- 气溶胶与空气质量分析
- 天气与气候建模

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/GSFC/MERRA/rad/2');
```

- 数据集编号（Earth Engine ID）：`NASA/GSFC/MERRA/rad/2`
- 提供方：NASA/MERRA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GSFC_MERRA_rad_2

## 许可与引用

- 许可：proprietary
- 关键词：albedo, atmosphere, climate, emissivity, merra, shortwave, temperature, weather-and-climate
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MERRA-2 M2I3NVAER: Aerosol Mixing Ratio V5.12.4](/pages/a20ec4cb/)
- [MERRA-2 M2T1NXAER: Aerosol Diagnostics V5.12.4](/pages/2c0f8a49/)
- [MERRA-2 M2T1NXSLV: Single-Level Diagnostics V5.12.4](/pages/36298a6b/)
- [ERA5 逐小时数据 — ECMWF 气候再分析](/pages/2de85afd/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
