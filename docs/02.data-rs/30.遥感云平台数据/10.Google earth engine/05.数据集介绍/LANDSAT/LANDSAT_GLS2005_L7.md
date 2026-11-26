---
title: "Landsat 全球土地调查 2005（Landsat 7 影像）"
date: 2026-11-03 12:00:00
permalink: /pages/8d96813a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "etm"
  - "gls"
  - "l7"
  - "landsat"
  - "radiance"
  - "satellite-imagery"
  - "usgs"
---

# Landsat 全球土地调查 2005（Landsat 7 影像）

英文原名：Landsat Global Land Survey 2005, Landsat 7 scenes

## 这是什么数据

GLS2005 数据集是 9,500 幅正射校正的展叶期中分辨率卫星影像的集合，影像在 2004 年至 2007 年间收集，覆盖地球陆地。GLS2005 主要使用 Landsat 5 与填隙后的 Landsat 7 数据，并以 EO-1 ALI 与 Terra ASTER 数据填补任何数据空白。

本集合只包含 GLS2005 影像中来自 L7 ETM+ 传感器的子集。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球陆地；时间范围：2003 年至 2008 年；分辨率：30 米。
- 时间范围：2003-07-29 至 2008-07-29

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| 10 | 蓝光。 | 30 | 0.45 - 0.52 &mu;m |
| 20 | 绿光。 | 30 | 0.52 - 0.60 &mu;m |
| 30 | 红光。 | 30 | 0.63 - 0.69 &mu;m |
| 40 | 近红外。 | 30 | 0.76 - 0.90 &mu;m |
| 50 | 短波红外 1。 | 30 | 1.55 - 1.75 &mu;m |
| 60 | 热红外 1。由 60 米重采样至 30 米。 | 60 | 10.40 - 12.50 &mu;m |
| 70 | 短波红外 2。 | 30 | 2.08 - 2.35 &mu;m |

## 能拿来做什么

- 历史 Landsat 影像分析
- 长时序土地覆盖变化回溯
- 全球土地调查基准数据

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('LANDSAT/GLS2005_L7');
```

- 数据集编号（Earth Engine ID）：`LANDSAT/GLS2005_L7`
- 提供方：USGS、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_GLS2005_L7

## 许可与引用

- 许可：PDDL-1.0
- 关键词：etm, gls, l7, landsat, radiance, satellite-imagery, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/pages/4a61128e/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
