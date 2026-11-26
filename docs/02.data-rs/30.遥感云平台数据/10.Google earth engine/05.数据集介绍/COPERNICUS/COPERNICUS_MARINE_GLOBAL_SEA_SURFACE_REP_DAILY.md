---
title: "全球海洋表层盐度与密度数据（逐日）"
date: 2026-11-03 12:00:00
permalink: /pages/36f5ea1f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "oceans"
---

# 全球海洋表层盐度与密度数据（逐日）

英文原名：Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Multi-Year Reprocessed

## 这是什么数据

这是一套画给全世界海洋的"咸淡地图"：每天一幅，标出全球海面表层的盐度（海水有多咸）和密度（海水有多"重"）。

它不是靠一颗卫星单独测出来的，而是把 SMOS、SMAP 等多颗卫星的观测，和 Argo 浮标、海上科考船等现场实测数据，用一种叫"最优插值"的拼图算法融合到一起，补齐了卫星没拍到的空缺，得到一幅全球无空白的完整地图。这套数据既有从 1993 年开始的历史回算版本，也持续更新到接近实时。

## 覆盖范围与时间

- 覆盖范围：全球海洋
- 时间范围：1993-01-01 至 2024-12-15
- 更新节奏：逐日一幅

## 分辨率与规格

- 空间分辨率：约 14,000 米（1/8 度网格，一个像元约 14 公里见方）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sos | 海表盐度 | 14000 |  |
| sos_error | 海表盐度误差 | 14000 |  |
| dos | 海表密度 | 14000 |  |
| dos_error | 海表密度误差 | 14000 |  |
| sea_ice_fraction | 海表海冰覆盖比例 | 14000 |  |

## 能拿来做什么

- 监测全球水循环：降雨、蒸发和河流入海都会改变海水咸淡，盐度变化就是水循环的"指纹"
- 研究洋流变化：海水密度差异是驱动海洋环流的重要力量
- 给气候模式和海洋预报系统当输入数据，做气候模拟与预报

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/MARINE/GLOBAL_SEA_SURFACE/REP_DAILY');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/MARINE/GLOBAL_SEA_SURFACE/REP_DAILY`
- 提供方：Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_MARINE_GLOBAL_SEA_SURFACE_REP_DAILY
- 用户指南：[User's Guide](https://documentation.marine.copernicus.eu/PUM/CMEMS-MOB-PUM-015-013.pdf)
- 质量说明：[Quality Information Document](https://documentation.marine.copernicus.eu/QUID/CMEMS-MOB-QUID-015-013.pdf)
- 官方数据商店：[Copernicus Marine Datastore](https://data.marine.copernicus.eu/products)

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：copernicus, oceans
- 数据引用：Copernicus Multi Observation Global Ocean Sea Surface Salinity and Sea Surface
Density: Global Ocean Satellite and In-Situ Observations, CNR (Rome, Italy) is
providing daily Sea Surface Salinity and Sea Surface Density analyses.
[doi:10.48670/moi-00051](https://doi.org/10.48670/moi-00051)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
