---
title: "MERRA-2 M2T1NXLND：陆面诊断 V5.12.4"
date: 2026-11-03 12:00:00
permalink: /pages/fe806e47/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "cryosphere"
  - "evaporation"
  - "ice"
  - "merra"
  - "precipitation"
  - "soil"
  - "temperature"
  - "water-vapor"
  - "weather-and-climate"
---

# MERRA-2 M2T1NXLND：陆面诊断 V5.12.4

英文原名：MERRA-2 M2T1NXLND: Land Surface Diagnostics V5.12.4

## 这是什么数据

M2T1NXLND（或 tavg1_2d_lnd_Nx）是现代时代回顾分析研究与应用版本 2（MERRA-2）中的每小时时间平均数据集合。本集合由陆面诊断组成，如基流通量、径流、地表土壤湿度、根区土壤湿度、地表层水、根区层水与六层土壤温度。数据场以从 00:30 UTC 开始的一小时的中心时间打时间戳，例如：00:30、01:30、……、23:30 UTC。

MERRA-2 是 NASA 全球建模与同化办公室（GMAO）使用戈达德地球观测系统模式（GEOS）版本 5.12.4 生产的卫星时代全球大气再分析的最新版本。数据集覆盖 1980 年至今的时段，延迟为月末后约 3 周。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1980 年至 2026 年；分辨率：69,375 米。
- 时间范围：1980-01-01 至 2026-10-01

## 分辨率与规格

- 空间分辨率：约 69,375 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BASEFLOW | 基流通量。 | 69375 |  |
| ECHANGE | 总陆地能量变化率。 | 69375 |  |
| EVLAND | 陆地蒸发。 | 69375 |  |
| EVPINTR | 截留损失能量通量。 | 69375 |  |
| EVPSBLN | 雪冰蒸发能量通量。 | 69375 |  |
| EVPSOIL | 裸土蒸发能量通量。 | 69375 |  |
| EVPTRNS | 蒸腾能量通量。 | 69375 |  |
| FRSAT | 饱和区面积分数。 | 69375 |  |
| FRSNO | 陆地雪盖面积分数。 | 69375 |  |
| FRUNST | 非饱和区面积分数。 | 69375 |  |
| FRWLT | 萎蔫区面积分数。 | 69375 |  |
| GHLAND | 陆地地面加热。 | 69375 |  |
| GRN | 绿度分数。 | 69375 |  |
| GWETPROF | 平均剖面土壤水分。 | 69375 |  |
| GWETROOT | 根区土壤湿度。 | 69375 |  |
| GWETTOP | 地表土壤湿度。 | 69375 |  |
| LAI | 叶面积指数。 | 69375 |  |
| LHLAND | 陆地潜热通量。 | 69375 |  |
| LWLAND | 陆地净长波。 | 69375 |  |
| PARDFLAND | 地表下行光合有效辐射漫射通量。 | 69375 |  |
| PARDRLAND | 地表下行 PAR 直射通量。 | 69375 |  |
| PRECSNOLAND | 陆地降雪。 | 69375 |  |
| PRECTOTLAND | 陆地总降水。 | 69375 |  |
| PRMC | 水剖面。 | 69375 |  |
| QINFIL | 土壤水入渗率。 | 69375 |  |
| RUNOFF | 包括壤中流的地表径流。 | 69375 |  |
| RZMC | 根区水。 | 69375 |  |
| SFMC | 地表层水。 | 69375 |  |
| SHLAND | 陆地感热通量。 | 69375 |  |
| SMLAND | 陆地融雪通量。 | 69375 |  |
| SNODP | 雪深。 | 69375 |  |
| SNOMAS | 陆地总雪储量。 | 69375 |  |
| SPLAND | 虚假陆地能量源速率。 | 69375 |  |
| SPSNOW | 虚假雪能量速率。 | 69375 |  |
| SPWATR | 虚假陆地水源速率。 | 69375 |  |
| SWLAND | 陆地净短波。 | 69375 |  |
| TELAND | 陆地总能量储量。 | 69375 |  |
| TPSNOW | 雪面温度。 | 69375 |  |
| TSAT | 饱和区地表温度。 | 69375 |  |
| TSOIL1 | 第 1 层土壤温度。 | 69375 |  |
| TSOIL2 | 第 2 层土壤温度。 | 69375 |  |
| TSOIL3 | 第 3 层土壤温度。 | 69375 |  |
| TSOIL4 | 第 4 层土壤温度。 | 69375 |  |
| TSOIL5 | 第 5 层土壤温度。 | 69375 |  |
| TSOIL6 | 第 6 层土壤温度。 | 69375 |  |
| TSURF | 包括雪的陆地地表温度。 | 69375 |  |
| TUNST | 非饱和区地表温度。 | 69375 |  |
| TWLAND | 陆地可用水储量。 | 69375 |  |
| TWLT | 萎蔫区地表温度。 | 69375 |  |
| WCHANGE | 总陆地水变化率。 | 69375 |  |

## 能拿来做什么

- 大气再分析与气候研究
- 气溶胶与空气质量分析
- 天气与气候建模

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/GSFC/MERRA/lnd/2');
```

- 数据集编号（Earth Engine ID）：`NASA/GSFC/MERRA/lnd/2`
- 提供方：NASA/MERRA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GSFC_MERRA_lnd_2

## 许可与引用

- 许可：proprietary
- 关键词：climate, cryosphere, evaporation, ice, merra, precipitation, soil, temperature, water-vapor, weather-and-climate
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ECMWF 近实时 IFS 大气预报](/pages/3fdfa56d/)
- [ERA5-Land 按日内时刻月平均数据 — ECMWF 气候再分析](/pages/39c04517/)
- [ERA5-Land 月聚合数据 — ECMWF 气候再分析](/pages/0889ecdc/)
- [ERA5-Land 逐小时数据 — ECMWF 气候再分析](/pages/0a0b8372/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
