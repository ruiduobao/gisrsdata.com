---
title: "MEaSUREs 格陵兰冰流速：光学影像选定冰川站点流速图第 2 版"
date: 2026-11-03 12:00:00
permalink: /pages/da7120c8/
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
  - "nasa"
  - "polar"
  - "velocity"
---

# MEaSUREs 格陵兰冰流速：光学影像选定冰川站点流速图第 2 版

英文原名：MEaSUREs Greenland Ice Velocity: Selected Glacier Site Velocity Maps from Optical Images Version 2

## 这是什么数据

本数据集是 NASA 面向研究环境制作地球系统数据记录（MEaSUREs）计划的一部分，由选定冰川出口区的逐月平均流速图组成。这些图通过跟踪 Landsat 4 与 5 专题制图仪（TM）、Landsat 7 增强型专题制图仪 Plus（ETM+）、Landsat 8 陆地成像仪（OLI）与高级星载热发射与反射辐射计（ASTER）获取的光学影像对之间的可见特征生成。

**注**

逐月平均由影像计算，影像的获取日期可能来自前一个月或后一个月。命名惯例中，月份由影像对儒略日中点落入的月份确定。例如，9 月逐月平均可能由 8 月或 10 月获取的影像生成，但影像间的中点儒略日落在 9 月内。所用的确切日期包含在逐影像元数据字段中。

[通用文档](https://doi.org/10.5067/VM5DZ20MYF5C)

## 覆盖范围与时间

- 覆盖范围：空间：格陵兰选定冰川出口区；时间：1985 年至 2016 年（逐月）；分辨率：100 米。
- 时间范围：1985-03-01 至 2016-09-30

## 分辨率与规格

- 空间分辨率：约 100 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| velocity_x | 冰流 x 流速 | 100 |  |
| velocity_y | 冰流 y 流速 | 100 |  |
| error_x | 冰流 x 误差 | 100 |  |
| error_y | 冰流 y 误差 | 100 |  |

## 能拿来做什么

- 监测出口冰川流速的季节与年际变化。
- 为冰盖动力学与海平面贡献评估提供流速数据。
- 与 SAR 流速产品交叉验证。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('OSU/GIMP/ICE_VELOCITY_OPT');
```

- 数据集编号（Earth Engine ID）：`OSU/GIMP/ICE_VELOCITY_OPT`
- 提供方：NASA NSIDC DAAC at CIRES、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/OSU_GIMP_ICE_VELOCITY_OPT

## 许可与引用

- 许可：proprietary
- 关键词：arctic, cryosphere, gimp, greenland, ice, nasa, polar, velocity
- 数据引用：Howat, I. 2017. MEaSUREs Greenland Ice Velocity: Selected
Glacier Site Velocity Maps from Optical Images, Version 2.
[Indicate subset used]. Boulder, Colorado USA. NASA National
Snow and Ice Data Center Distributed Active Archive Center.
[doi:10.5067/VM5DZ20MYF5C](https://doi.org/10.5067/VM5DZ20MYF5C).
[Date Accessed].

- DOI：10.5067/VM5DZ20MYF5C

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Greenland Ice & Ocean Mask - Greenland Mapping Project (GIMP)](/pages/e7d855f1/)
- [CFSR：气候预报系统再分析（协调版）](/pages/a2388741/)
- [CFSV2：NCEP 气候预报系统版本 2，6 小时产品（协调版）](/pages/a1cd75f1/)
- [Daymet V4：逐日地表天气与气候学汇总](/pages/7b6d050e/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
