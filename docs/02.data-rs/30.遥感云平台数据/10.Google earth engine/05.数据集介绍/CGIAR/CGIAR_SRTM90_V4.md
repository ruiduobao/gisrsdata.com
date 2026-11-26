---
title: "SRTM 高程数据第 4 版（填洞版）"
date: 2026-11-03 12:00:00
permalink: /pages/81d193ff/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cgiar"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
  - "srtm"
  - "topography"
---

# SRTM 高程数据第 4 版（填洞版）

英文原名：SRTM Digital Elevation Data Version 4

## 这是什么数据

SRTM（航天飞机雷达地形测绘）高程数据最初就是为提供近全球范围、口径一致的高质量高程而生产的。这一版（CGIAR-CSI 发布的第 4 版）做过空洞填补处理，用起来更方便，就是大家常说的「填洞版 SRTM」。

## 覆盖范围与时间

- 覆盖范围：近全球
- 时间范围：2000-02-11 至 2000-02-22

## 分辨率与规格

- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | 高程 | 90 |  |

## 能拿来做什么

- 几乎全球陆地的地形分析：坡度、坡向、山体阴影
- 流域与水系划分
- 建模与制图的标准全球高程底图

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('CGIAR/SRTM90_V4');
```

- 数据集编号（Earth Engine ID）：`CGIAR/SRTM90_V4`
- 提供方：NASA/CGIAR、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CGIAR_SRTM90_V4

## 许可与引用

- 许可：proprietary
- 关键词：cgiar, dem, elevation, elevation-topography, geophysical, srtm, topography
- 数据引用：Jarvis, A., H.I. Reuter, A. Nelson, E. Guevara. 2008. Hole-filled
SRTM for the globe Version 4, available from the CGIAR-CSI SRTM
90m Database: [https://srtm.csi.cgiar.org](https://srtm.csi.cgiar.org).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ASTER传感器(TERRA)](/pages/da7fa1/)
- [CryoSat-2 南极 1 公里高程模型](/pages/a0390601/)
- [哥白尼全球 30 米高程模型 GLO-30（2024_1）](/pages/3bdccac6/)
- [澳大利亚 5 米高程模型（LiDAR 汇编）](/pages/eb3acc3a/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
