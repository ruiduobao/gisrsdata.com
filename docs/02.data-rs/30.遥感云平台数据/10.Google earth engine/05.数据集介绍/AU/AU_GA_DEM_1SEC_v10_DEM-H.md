---
title: "澳大利亚水文强化高程模型 DEM-H"
date: 2026-11-03 12:00:00
permalink: /pages/583e2ba3/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "australia"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "ga"
  - "geophysical"
  - "geoscience-australia"
  - "smoothed"
  - "srtm"
---

# 澳大利亚水文强化高程模型 DEM-H

英文原名：DEM-H: Australian SRTM Hydrologically Enforced Digital Elevation Model

## 这是什么数据

DEM-H 是澳大利亚的「水文强化」高程模型，源自 NASA 2000 年 2 月获取的 SRTM 数据，经过水文条件化与排水强化处理：它按 SRTM 高程和已测绘的河流线刻画水流路径，支持流域划分和相关水文属性提取。

它由 1 角秒平滑 DEM（DEM-S）用 ANUDEM 软件强化水文连通性得到，水系定义采用 AusHydro V1.6（2010 年 2 月）1:25 万水系线及由 DEM-S 提取的线。排水强化给出了连通一致的水文表达，但也会带来一些高程伪影。这款产品适合流域界定、水流路径演算等水文分析。注意：少数区域有异常负值——堪培拉附近 (150.443044, -35.355281) 约为 -55，西澳大利亚 (124.84, -16.44) 约为 -43。

## 覆盖范围与时间

- 覆盖范围：澳大利亚
- 时间范围：2010-02-01 至 2010-02-01

## 分辨率与规格

- 空间分辨率：约 30.92 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | 高程 | 30.92 |  |

## 能拿来做什么

- 流域划分与水流路径演算
- 需要排水连通一致 DEM 的水文建模
- 洪水与水资源研究的地形输入

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('AU/GA/DEM_1SEC/v10/DEM-H');
```

- 数据集编号（Earth Engine ID）：`AU/GA/DEM_1SEC/v10/DEM-H`
- 提供方：Geoscience Australia、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-H

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：australia, dem, elevation, elevation-topography, ga, geophysical, geoscience-australia, smoothed, srtm
- 数据引用：Geoscience Australia, 2015. Digital Elevation Model (DEM) of Australia
derived from LiDAR 5 Metre Grid. Geoscience Australia, Canberra.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [澳大利亚 5 米高程模型（LiDAR 汇编）](/pages/eb3acc3a/)
- [澳大利亚平滑高程模型 DEM-S](/pages/ada188d3/)
- [ASTER传感器(TERRA)](/pages/da7fa1/)
- [CryoSat-2 南极 1 公里高程模型](/pages/a0390601/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
