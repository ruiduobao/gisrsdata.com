---
title: "澳大利亚 5 米高程模型（LiDAR 汇编）"
date: 2026-11-03 12:00:00
permalink: /pages/eb3acc3a/
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
  - "lidar"
---

# 澳大利亚 5 米高程模型（LiDAR 汇编）

英文原名：Australian 5M DEM

## 这是什么数据

这是澳大利亚全国 5 米格网的裸地高程模型，由激光雷达（LiDAR）数据汇编而成：汇集了 2001–2015 年间 236 次独立 LiDAR 测量，覆盖超过 24.5 万平方公里——包括澳大利亚人口稠密的沿海带、墨累—达令流域的洪泛区测量，以及各大、小居民点的测量。所有可得的 1 米 LiDAR 高程先按邻域均值法重采样到 5 米，再按州合并；本集合中每个州是一幅单独的影像。

该产品是 Geoscience Australia 与空间信息合作研究中心（CRCSI）、气候变化与环境部门、各州和领地、地方政府及墨累—达令流域管理局在国家高程数据框架与沿海城市 DEM 计划下的长期合作成果。源数据采集标准与澳大利亚 ICSM LiDAR 采集规范大体一致，要求垂直精度至少 0.30 米、水平精度至少 0.80 米（均为 95% 置信）。注意：珀斯附近几处有空值（NaN），约在 (115.85, -31.99)、(115.72, -33.75) 和 (115.10, -33.43)。

## 覆盖范围与时间

- 覆盖范围：澳大利亚（人口稠密的沿海带、墨累—达令流域洪泛区及大大小小的居民点）
- 时间范围：2015-12-01 至 2015-12-01

## 分辨率与规格

- 空间分辨率：约 5 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | 高程 | 5 |  |

## 能拿来做什么

- 澳大利亚沿海与城市地区的高分辨率地形分析
- 墨累—达令流域的洪泛区与淹没模拟
- 基础设施与规划用的裸地高程基准

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('AU/GA/AUSTRALIA_5M_DEM');
```

- 数据集编号（Earth Engine ID）：`AU/GA/AUSTRALIA_5M_DEM`
- 提供方：Geoscience Australia、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/AU_GA_AUSTRALIA_5M_DEM

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：australia, dem, elevation, elevation-topography, ga, geophysical, geoscience-australia, lidar
- 数据引用：Geoscience Australia, 2015. Digital Elevation Model (DEM) of Australia
derived from LiDAR 5 Metre Grid. Geoscience Australia, Canberra.

- DOI：10.4225/25/5652419862E23

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [澳大利亚平滑高程模型 DEM-S](/pages/ada188d3/)
- [澳大利亚水文强化高程模型 DEM-H](/pages/583e2ba3/)
- [ASTER传感器(TERRA)](/pages/da7fa1/)
- [CryoSat-2 南极 1 公里高程模型](/pages/a0390601/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
