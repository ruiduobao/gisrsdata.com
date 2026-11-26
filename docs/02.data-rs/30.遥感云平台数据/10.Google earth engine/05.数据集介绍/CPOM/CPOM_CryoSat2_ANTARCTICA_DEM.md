---
title: "CryoSat-2 南极 1 公里高程模型"
date: 2026-11-03 12:00:00
permalink: /pages/a0390601/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "antarctica"
  - "cpom"
  - "cryosat-2"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "polar"
---

# CryoSat-2 南极 1 公里高程模型

英文原名：CryoSat-2 Antarctica 1km DEM

## 这是什么数据

本数据集是南极冰盖和冰架的数字高程模型（DEM），基于 CryoSat-2 卫星雷达高度计在 2010 年 7 月至 2016 年 7 月间记录的观测。

该 DEM 由在 1、2、5 公里格网单元内累积的高程测量做时空拟合而成，以 1 公里的众数分辨率发布。它与 NASA「冰桥行动」获取的 2.3×10^7 个机载激光高度计测量之差的中位数和均方根分别为 -0.30 米和 13.50 米。

DEM 的不确定度在高坡度区域上升，尤其是高程测量以低分辨率模式获取的地方；综合考虑，平均精度估计为 9.5 米。

## 覆盖范围与时间

- 覆盖范围：南极洲
- 时间范围：2010-07-01 至 2016-07-01

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | 南极冰盖与冰架高程 | 1000 |  |
| data_composition | 每个格网单元高程的数据处理方法 | 1000 |  |
| slope | 由高程梯度导出的坡度 | 1000 |  |
| z_smoothed | 用中值滤波平滑后的高程模型 | 1000 |  |
| z_uncertainty | 高程模型的确定性（由观测格网单元内高程残差的均方根导出） | 1000 |  |

## 能拿来做什么

- 南极冰盖高程与变化研究
- 冰架研究与极地建模
- 高度计验证的参考高程

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('CPOM/CryoSat2/ANTARCTICA_DEM');
```

- 数据集编号（Earth Engine ID）：`CPOM/CryoSat2/ANTARCTICA_DEM`
- 提供方：CPOM、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CPOM_CryoSat2_ANTARCTICA_DEM

## 许可与引用

- 许可：proprietary
- 关键词：antarctica, cpom, cryosat-2, dem, elevation, elevation-topography, polar
- 数据引用：Slater, T., Shepherd, A., McMillan, M., Muir, A., Gilbert, L.,
Hogg, A. E., Konrad, H. and Parrinello, T.: A new Digital Elevation
Model of Antarctica derived from CryoSat-2 altimetry, The Cryosphere,
[doi:10.5194/tc-2017-223](https://doi.org/10.5194/tc-2017-223), 2018

- DOI：10.5194/tc-2017-223

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ASTER传感器(TERRA)](/pages/da7fa1/)
- [SRTM 高程数据第 4 版（填洞版）](/pages/81d193ff/)
- [哥白尼全球 30 米高程模型 GLO-30（2024_1）](/pages/3bdccac6/)
- [澳大利亚 5 米高程模型（LiDAR 汇编）](/pages/eb3acc3a/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
