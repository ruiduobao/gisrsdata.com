---
title: "荷兰 0.5 米高程模型 AHN2（插值版）"
date: 2026-11-03 12:00:00
permalink: /pages/1dc8c864/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ahn"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
  - "lidar"
  - "netherlands"
---

# 荷兰 0.5 米高程模型 AHN2（插值版）

英文原名：AHN Netherlands 0.5m DEM, Interpolated

## 这是什么数据

这是覆盖荷兰全国的高程模型（DEM），格网细到 0.5 米，数据来自 2007–2012 年间春季航飞的激光雷达（LiDAR）测量。

它只保留地面高程：建筑、桥梁、树木等地物都已移除。这一版是「插值版」——移除地物后留下的空缺用插值填上了。点云按平方反距离加权法转换成 0.5 米格网。注意：官方清单中少数瓦片只有更低分辨率的版本，未包含在本数据中。

## 覆盖范围与时间

- 覆盖范围：荷兰全国
- 时间范围：2012-01-01 至 2012-01-01

## 分辨率与规格

- 空间分辨率：约 0.5 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | 高程 | 0.5 |  |

## 能拿来做什么

- 做精细地形分析与地表水流向模拟
- 给洪水淹没模拟、排水规划提供高精度地面基准
- 城市三维建模与基础设施规划的底图

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('AHN/AHN2_05M_INT');
```

- 数据集编号（Earth Engine ID）：`AHN/AHN2_05M_INT`
- 提供方：AHN、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AHN_AHN2_05M_INT

## 许可与引用

- 许可：CC0-1.0
- 关键词：ahn, dem, elevation, elevation-topography, geophysical, lidar, netherlands
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ASTER传感器(TERRA)](/pages/da7fa1/)
- [CryoSat-2 南极 1 公里高程模型](/pages/a0390601/)
- [SRTM 高程数据第 4 版（填洞版）](/pages/81d193ff/)
- [哥白尼全球 30 米高程模型 GLO-30（2024_1）](/pages/3bdccac6/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
