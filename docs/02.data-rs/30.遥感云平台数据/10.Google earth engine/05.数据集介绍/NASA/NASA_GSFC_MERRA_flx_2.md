---
title: "MERRA-2 M2T1NXFLX：地表通量诊断 V5.12.4"
date: 2026-11-03 12:00:00
permalink: /pages/ccd67e09/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "merra"
  - "precipitation"
  - "sea-salt"
  - "so2"
  - "so4"
  - "soil-moisture"
  - "weather-and-climate"
---

# MERRA-2 M2T1NXFLX：地表通量诊断 V5.12.4

英文原名：MERRA-2 M2T1NXFLX: Surface Flux Diagnostics V5.12.4

## 这是什么数据

M2T1NXFLX（或 tavg1_2d_flx_Nx）是现代时代回顾分析研究与应用版本 2（MERRA-2）中的每小时时间平均数据集合。本集合由同化的地表通量诊断组成，如总降水、偏差校正的总降水、地表气温、地表比湿、地表风速与湍流蒸发。本数据集合中的「地表」是模式地表层。模式地表层（HLML）的高度随时间与地点变化，值约为地面以上 60 米。数据场以从 00:30 UTC 开始的一小时的中心时间打时间戳，例如：00:30、01:30、……、23:30 UTC。

MERRA-2 是 NASA [全球建模与同化办公室（GMAO）](https://gmao.gsfc.nasa.gov/) 使用[戈达德地球观测系统模式（GEOS）](https://gmao.gsfc.nasa.gov/GEOS_systems/) 版本 5.12.4 生产的卫星时代全球大气再分析的最新版本。数据集覆盖 1980 年至今的时段，延迟为月末后约 3 周。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1980 年至 2026 年；分辨率：69,375 米。
- 时间范围：1980-01-01 至 2026-10-01

## 分辨率与规格

- 空间分辨率：约 69,375 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| BSTAR | 地表浮力尺度。 | 69375 |  |
| CDH | 热量地表交换系数。 | 69375 |  |
| CDM | 动量地表交换系数。 | 69375 |  |
| CDQ | 水分地表交换系数。 | 69375 |  |
| CN | 地表中性拖曳系数。 | 69375 |  |
| DISPH | 零平面位移高度。 | 69375 |  |
| EFLUX | 总潜热通量。 | 69375 |  |
| EVAP | 湍流蒸发。 | 69375 |  |
| FRCAN | 砧状阵雨的面积分数。 | 69375 |  |
| FRCCN | 对流阵雨的面积分数。 | 69375 |  |
| FRCLS | 非砧状大尺度阵雨的面积分数。 | 69375 |  |
| FRSEAICE | 瓦片的冰覆盖分数。 | 69375 |  |
| GHTSKIN | 皮肤温度的地面加热。 | 69375 |  |
| HFLUX | 湍流感热通量。 | 69375 |  |
| HLML | 地表层高度。 | 69375 |  |
| NIRDF | 地表下行近红外漫射通量。 | 69375 |  |
| NIRDR | 地表下行近红外直射通量。 | 69375 |  |
| PBLH | 行星边界层高度。 | 69375 |  |
| PGENTOT | 降水的总柱生产。 | 69375 |  |
| PRECANV | 砧状降水。 | 69375 |  |
| PRECCON | 对流降水。 | 69375 |  |
| PRECLSC | 非砧状大尺度降水。 | 69375 |  |
| PRECSNO | 降雪。 | 69375 |  |
| PRECTOTCORR | 总降水。 | 69375 |  |
| PRECTOT | 总降水。 | 69375 |  |
| PREVTOT | 降水的总柱再蒸发/升华。 | 69375 |  |
| QLML | 地表比湿。 | 69375 |  |
| QSH | 有效地表比湿。 | 69375 |  |
| QSTAR | 地表水分尺度。 | 69375 |  |
| RHOA | 地表空气密度。 | 69375 |  |
| RISFC | 地表整体理查森数。 | 69375 |  |
| SPEEDMAX | 地表风速。 | 69375 |  |
| SPEED | 地表风速。 | 69375 |  |
| TAUGWX | 地表东向重力波应力。 | 69375 |  |
| TAUGWY | 地表北向重力波应力。 | 69375 |  |
| TAUX | 东向地表应力。 | 69375 |  |
| TAUY | 北向地表应力。 | 69375 |  |
| TCZPBL | Transcom 行星边界层高度。 | 69375 |  |
| TLML | 地表气温。 | 69375 |  |
| TSH | 有效地表皮肤温度。 | 69375 |  |
| TSTAR | 地表温度尺度。 | 69375 |  |
| ULML | 地表东向风。 | 69375 |  |
| USTAR | 地表速度尺度。 | 69375 |  |
| VLML | 地表北向风。 | 69375 |  |
| Z0H | 热量地表粗糙度。 | 69375 |  |
| Z0M | 地表粗糙度。 | 69375 |  |

## 能拿来做什么

- 大气再分析与气候研究
- 气溶胶与空气质量分析
- 天气与气候建模

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/GSFC/MERRA/flx/2');
```

- 数据集编号（Earth Engine ID）：`NASA/GSFC/MERRA/flx/2`
- 提供方：NASA/MERRA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GSFC_MERRA_flx_2

## 许可与引用

- 许可：proprietary
- 关键词：climate, merra, precipitation, sea-salt, so2, so4, soil-moisture, weather-and-climate
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ERA5 月聚合数据 — ECMWF 气候再分析](/pages/87085b9b/)
- [ERA5 逐日聚合数据](/pages/9ae9975a/)
- [GCOM-C/SGLI 三级地表温度产品（V1）](/pages/a4b5eab0/)
- [GCOM-C/SGLI 三级地表温度产品（V2）](/pages/92e78526/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
