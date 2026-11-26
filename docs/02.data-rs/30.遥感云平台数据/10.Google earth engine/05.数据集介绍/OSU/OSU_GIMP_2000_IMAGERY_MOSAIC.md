---
title: "2000 年格陵兰镶嵌影像——格陵兰冰制图项目（GIMP）"
date: 2026-11-03 12:00:00
permalink: /pages/c8cdeaa2/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "arctic"
  - "gimp"
  - "greenland"
  - "imagery"
  - "nasa"
  - "polar"
  - "radarsat-1"
  - "satellite-imagery"
---

# 2000 年格陵兰镶嵌影像——格陵兰冰制图项目（GIMP）

英文原名：2000 Greenland Mosaic - Greenland Ice Mapping Project (GIMP)

## 这是什么数据

本数据集提供格陵兰冰盖完整的 15 米分辨率影像镶嵌，源自 1999 至 2002 年的 Landsat 7 ETM+ 与 RADARSAT-1 SAR 影像。方法包括影像云掩膜、全色锐化、影像采样与缩放、影像配准的组合。处理方法详情见 Howat，2014。

**注**

* GIMP DEM 或 GIMP 2000 影像镶嵌的用户可能会发现，使用对应的 15 米海洋掩膜影像「格陵兰制图项目（GIMP）陆地冰与海洋分类掩膜」掩膜掉格陵兰海岸线以外的区域很有帮助。* SAR 数据以 20 米分辨率分发。数据经双线性插值上采样到 15 米，以匹配 Landsat 波段 8 的分辨率。

[通用文档](https://doi.org/10.5067/4RNTRRE4JCYD)

## 覆盖范围与时间

- 覆盖范围：空间：格陵兰冰盖；时间：1999 年至 2002 年；分辨率：15 米。
- 时间范围：1999-06-30 至 2002-09-04

## 分辨率与规格

- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | Landsat 7 ETM+ 蓝光 | 15 | 0.45 - 0.52 &mu;m |
| B2 | Landsat 7 ETM+ 绿光 | 15 | 0.52 - 0.60 &mu;m |
| B3 | Landsat 7 ETM+ 红光 | 15 | 0.63 - 0.69 &mu;m |
| B4 | Landsat 7 ETM+ 近红外 | 15 | 0.77 - 0.90 &mu;m |
| B5 | Landsat 7 ETM+ 短波红外 1 | 30 | 1.55 - 1.75 &mu;m |
| B6_low_gain | Landsat 7 ETM+ 低增益热红外 1。此波段动态范围扩大、辐射分辨率（灵敏度）较低，在高数字值（DN）时不易饱和。由 60 米重采样到 30 米。 | 30 | 10.40 - 12.50 &mu;m |
| B6_high_gain | Landsat 7 ETM+ 高增益热红外 1。此波段辐射分辨率（灵敏度）较高，但动态范围较受限。由 60 米重采样到 30 米。 | 30 | 10.40 - 12.50 &mu;m |
| B7 | Landsat 7 ETM+ 短波红外 2 | 30 | 2.08 - 2.35 &mu;m |
| B8 | Landsat 7 ETM+ 全色 | 15 | 0.52 - 0.90 &mu;m |
| B8_radarsat | RADARSAT-1 合成孔径雷达振幅影像 | 15 |  |

## 能拿来做什么

- 在 Google Earth Engine 中调用该数据集，叠加行政区划、土地覆盖等图层做空间分析。
- 做长时间序列分析，提取区域统计值并导出图表与 GeoTIFF。
- 作为教学与科研示例数据，演示 Earth Engine 影像集合的筛选、合成与可视化流程。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('OSU/GIMP/2000_IMAGERY_MOSAIC');
```

- 数据集编号（Earth Engine ID）：`OSU/GIMP/2000_IMAGERY_MOSAIC`
- 提供方：NASA NSIDC DAAC at CIRES、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OSU_GIMP_2000_IMAGERY_MOSAIC

## 许可与引用

- 许可：proprietary
- 关键词：arctic, gimp, greenland, imagery, nasa, polar, radarsat-1, satellite-imagery
- 数据引用：Howat, I.M., A. Negrete, B.E. Smith, 2014, The Greenland Ice
Mapping Project (GIMP) land classification and surface elevation
datasets, The Cryosphere, 8, 1509-1518,
[doi:10.5194/tc-8-1509-2014](https://doi.org/10.5194/tc-8-1509-2014)
[article pdf](https://www.the-cryosphere.net/8/1509/2014/tc-8-1509-2014.pdf)

- DOI：10.5067/4RNTRRE4JCYD

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/pages/4a61128e/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
