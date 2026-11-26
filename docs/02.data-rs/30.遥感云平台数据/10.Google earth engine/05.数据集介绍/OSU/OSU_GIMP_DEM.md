---
title: "格陵兰 DEM——格陵兰制图项目（GIMP）"
date: 2026-11-03 12:00:00
permalink: /pages/3ac1f909/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "arctic"
  - "elevation-topography"
  - "gimp"
  - "greenland"
  - "nasa"
  - "polar"
---

# 格陵兰 DEM——格陵兰制图项目（GIMP）

英文原名：Greenland DEM - Greenland Mapping Project (GIMP)

## 这是什么数据

本数字高程模型（DEM）由 ASTER 与 SPOT-5 DEM 的组合构建，用于约 82.5°N 以南冰盖外围与边缘（即平衡线高程以下），以及冰盖内部与最北部的 AVHRR 光度立体测量（Scambos 与 Haran，2002）。（原文作「equilbrium」，系 equilibrium 之误）

SPOT-5 DEM 作为极地冰立体调查：参考影像与地形（SPIRIT）项目的一部分制作与分发（Korona 等，2009）。海洋表面使用 GIMP 陆地分类掩膜掩膜，并替换为 CNES CLS11 平均海面高（Schaeffer 等，2012）。

**注**

* 所有陆地高程数据在水平与垂直方向均配准到 2003–2009 年时段的 ICESat 平均高程，因此 DEM 的名义日期为 2007 年，但在快速变化区域（如 70°N 以南的主要出口冰川）使用 DEM 时须谨慎。* DEM 分辨率为 30 米，但 DEM 的「真实」分辨率从 SPOT-5 覆盖区的 40 米到光度立体测量区的 500 米不等（见 Korona 等 2009）。* 相对 ICESat 的全冰盖均方根验证误差为 +/-10 米，从大多数冰面的接近 +/-1 米到高起伏区的 +/-30 米不等。（原文作「rangining」，系 ranging 之误）

[通用文档](https://doi.org/10.5067/NV34YUIXLP9W)

## 覆盖范围与时间

- 覆盖范围：空间：格陵兰；时间：1999 年至 2002 年（名义日期 2007 年）；分辨率：30 米。
- 时间范围：1999-06-30 至 2002-09-04

## 分辨率与规格

- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | 高程 | 30 |  |

## 能拿来做什么

- 做格陵兰冰盖地形与冰流模拟的高程输入。
- 与 ICESat 等测高数据做高程变化分析。
- 作为冰盖制图的底图高程。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('OSU/GIMP/DEM');
```

- 数据集编号（Earth Engine ID）：`OSU/GIMP/DEM`
- 提供方：NASA NSIDC DAAC at CIRES、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OSU_GIMP_DEM

## 许可与引用

- 许可：proprietary
- 关键词：arctic, elevation-topography, gimp, greenland, nasa, polar
- 数据引用：Howat, I.M., A. Negrete, B.E. Smith, 2014, The Greenland Ice
Mapping Project (GIMP) land classification and surface elevation
datasets, The Cryosphere, 8, 1509-1518,
[doi:10.5194/tc-8-1509-2014](https://doi.org/10.5194/tc-8-1509-2014)
[article pdf](https://www.the-cryosphere.net/8/1509/2014/tc-8-1509-2014.pdf)

- DOI：10.5067/NV34YUIXLP9W

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS 全球 30 米 DSM v4.1](/pages/774620fb/)
- [ASTER传感器(TERRA)](/pages/da7fa1/)
- [CryoSat-2 南极 1 公里高程模型](/pages/a0390601/)
- [GHSL：全球建筑体积 1975–2030（P2023A）](/pages/a37f30e2/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
