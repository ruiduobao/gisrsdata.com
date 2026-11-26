---
title: "格陵兰冰与海洋掩膜——格陵兰制图项目（GIMP）"
date: 2026-11-03 12:00:00
permalink: /pages/e7d855f1/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "arctic"
  - "cryosphere"
  - "gimp"
  - "greenland"
  - "ice"
  - "mask"
  - "nasa"
  - "polar"
---

# 格陵兰冰与海洋掩膜——格陵兰制图项目（GIMP）

英文原名：Greenland Ice & Ocean Mask - Greenland Mapping Project (GIMP)

## 这是什么数据

本数据集提供格陵兰冰盖 15 米完整的陆地冰与海洋分类掩膜。冰盖制图使用了 USGS 分发的 Landsat 7 增强型专题制图仪 Plus（ETM+）正射校正全色（波段 8）影像，以及华盛顿大学应用物理实验室 I. Joughin 制作并分发的 RADARSAT-1 合成孔径雷达（SAR）振幅影像的组合。

Landsat 影像获取于 1999、2000 与 2001 年的 7 月至 9 月（多为 2000 年），RADARSAT 影像获取于 2000 年秋季。

## 覆盖范围与时间

- 覆盖范围：空间：格陵兰冰盖；时间：1999 年至 2002 年；分辨率：15 米。
- 时间范围：1999-06-30 至 2002-09-04

## 分辨率与规格

- 空间分辨率：约 15 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ocean_mask | 海洋掩膜 | 15 |  |
| ice_mask | 冰掩膜 | 15 |  |

## 能拿来做什么

- 做格陵兰冰盖范围与海岸线制图。
- 为冰流速与高程产品提供冰/海洋掩膜。
- 分析冰盖边缘变化。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('OSU/GIMP/2000_ICE_OCEAN_MASK');
```

- 数据集编号（Earth Engine ID）：`OSU/GIMP/2000_ICE_OCEAN_MASK`
- 提供方：NASA NSIDC DAAC at CIRES、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OSU_GIMP_2000_ICE_OCEAN_MASK

## 许可与引用

- 许可：proprietary
- 关键词：arctic, cryosphere, gimp, greenland, ice, mask, nasa, polar
- 数据引用：Howat, I.M., A. Negrete, B.E. Smith, 2014, The Greenland Ice
Mapping Project (GIMP) land classification and surface elevation
datasets, The Cryosphere, 8, 1509-1518,
[doi:10.5194/tc-8-1509-2014](https://doi.org/10.5194/tc-8-1509-2014)
[article pdf](https://www.the-cryosphere.net/8/1509/2014/tc-8-1509-2014.pdf)

- DOI：10.5067/B8X58MQBFUPA

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MEaSUREs Greenland Ice Velocity: Selected Glacier Site Velocity Maps from Optical Images Version 2](/pages/da7120c8/)
- [CFSR：气候预报系统再分析（协调版）](/pages/a2388741/)
- [CFSV2：NCEP 气候预报系统版本 2，6 小时产品（协调版）](/pages/a1cd75f1/)
- [Daymet V4：逐日地表天气与气候学汇总](/pages/7b6d050e/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
