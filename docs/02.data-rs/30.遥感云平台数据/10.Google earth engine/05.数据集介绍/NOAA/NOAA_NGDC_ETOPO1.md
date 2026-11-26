---
title: "ETOPO1：全球 1 弧分高程"
date: 2026-11-03 12:00:00
permalink: /pages/52780435/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "bedrock"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
  - "ice"
  - "noaa"
  - "topography"
---

# ETOPO1：全球 1 弧分高程

英文原名：ETOPO1: Global 1 Arc-Minute Elevation

## 这是什么数据

ETOPO1 是 1 弧分全球地形模型，综合陆地地形与海洋水深，由众多全球与区域数据集构建而成。它包含两个高程波段：ice_surface 与 bedrock。

## 覆盖范围与时间

- 覆盖范围：空间：全球；时间：2008 年单期；分辨率：1,855 米（1 弧分）。
- 时间范围：2008-08-01 至 2008-08-01

## 分辨率与规格

- 空间分辨率：约 1,855 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| bedrock | 地面高程，以及南极与格陵兰冰盖底部的高程 | 1855 |  |
| ice_surface | 地面高程，以及南极与格陵兰冰盖顶部的高程 | 1855 |  |

## 能拿来做什么

- 作为地形可视化与三维建模的全球高程底图。
- 做海啸、洪水淹没等海洋与海岸带模拟的地形输入。
- 与其他 DEM 做对比与拼接，构建区域高程产品。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('NOAA/NGDC/ETOPO1');
```

- 数据集编号（Earth Engine ID）：`NOAA/NGDC/ETOPO1`
- 提供方：NOAA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_NGDC_ETOPO1

## 许可与引用

- 许可：proprietary
- 关键词：bedrock, dem, elevation, elevation-topography, geophysical, ice, noaa, topography
- 数据引用：Amante, C. and B. W. Eakins, ETOPO1 1 Arc-Minute Global Relief
Model: Procedures, Data Sources and Analysis. NOAA Technical Memorandum
NESDIS NGDC-24, 19 pp, March 2009.

- DOI：10.7289/V5C8276M

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [CFSR：气候预报系统再分析（协调版）](/pages/a2388741/)
- [CFSV2：NCEP 气候预报系统版本 2，6 小时产品（协调版）](/pages/a1cd75f1/)
- [Daymet V4：逐日地表天气与气候学汇总](/pages/7b6d050e/)
- [ECMWF 近实时 IFS 大气预报](/pages/3fdfa56d/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
