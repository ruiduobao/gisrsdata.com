---
title: "澳大利亚平滑高程模型 DEM-S"
date: 2026-11-03 12:00:00
permalink: /pages/ada188d3/
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

# 澳大利亚平滑高程模型 DEM-S

英文原名：DEM-S: Australian Smoothed Digital Elevation Model

## 这是什么数据

DEM-S 是澳大利亚的「平滑」高程模型，源自 NASA 2000 年 2 月获取的 SRTM 数据，表示地面地形（不含植被），并经过平滑处理以减少噪声、更好地表达地表形态。平滑是自适应的：平坦区、噪声大的区域平滑得更多，丘陵区、干净区域平滑得更少。

DEM-S 适合计算坡度、坡向、曲率等局部地形属性——这些属性用未平滑的 1 角秒 DEM 会因噪声而不可靠。注意：少数区域有异常负值——堪培拉附近 (150.443044, -35.355281) 约为 -55，西澳大利亚 (124.84, -16.44) 约为 -43。

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

- 可靠地计算坡度、坡向与曲率
- 澳大利亚一般地形分析
- 做后续处理时更干净的 SRTM 基准 DEM

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('AU/GA/DEM_1SEC/v10/DEM-S');
```

- 数据集编号（Earth Engine ID）：`AU/GA/DEM_1SEC/v10/DEM-S`
- 提供方：Geoscience Australia、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AU_GA_DEM_1SEC_v10_DEM-S

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：australia, dem, elevation, elevation-topography, ga, geophysical, geoscience-australia, smoothed, srtm
- 数据引用：Geoscience Australia, 2015. Digital Elevation Model (DEM) of Australia
derived from LiDAR 5 Metre Grid. Geoscience Australia, Canberra.


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [澳大利亚 5 米高程模型（LiDAR 汇编）](/pages/eb3acc3a/)
- [澳大利亚水文强化高程模型 DEM-H](/pages/583e2ba3/)
- [ASTER传感器(TERRA)](/pages/da7fa1/)
- [CryoSat-2 南极 1 公里高程模型](/pages/a0390601/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
