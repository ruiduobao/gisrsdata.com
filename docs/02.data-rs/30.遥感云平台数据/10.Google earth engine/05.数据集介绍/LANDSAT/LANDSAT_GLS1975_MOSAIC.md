---
title: "Landsat 全球土地调查 1975 镶嵌图"
date: 2026-11-03 12:00:00
permalink: /pages/d566ae8a/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "gls"
  - "landsat"
  - "radiance"
  - "satellite-imagery"
  - "usgs"
---

# Landsat 全球土地调查 1975 镶嵌图

英文原名：Landsat Global Land Survey 1975 Mosaic

## 这是什么数据

全球土地调查（GLS）1975 是来自 Landsat 多光谱扫描仪（MSS）的全球影像集合。大多数影像由 Landsat 1–3 在 1972–1983 年间获取。Landsat 1–3 数据中的少数空白已用 Landsat 4–5 在 1982–1987 年间获取的影像填补。

这些数据包含 4 个光谱波段：绿、红、一个近红外波段与一个短波红外波段。在典型的假彩色呈现中，影像显示为红色，因为显示为红色的近红外波段突出了植被。

集合中的所有影像都包括在这幅合成影像中。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球陆地；时间：1975 年前后；分辨率：60 米。
- 时间范围：1975-01-01 至 1976-01-01

## 分辨率与规格

- 空间分辨率：约 60 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| 10 | 绿光。 | 60 | 0.50 - 0.60 &mu;m |
| 20 | 红光。 | 60 | 600-700 &mu;m |
| 30 | 近红外。 | 60 | 0.70-0.80 &mu;m |
| 40 | 短波红外。 | 60 | 0.80-1.10 &mu;m |

## 能拿来做什么

- 历史 Landsat 影像分析
- 长时序土地覆盖变化回溯
- 全球土地调查基准数据

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('LANDSAT/GLS1975_MOSAIC');
```

- 数据集编号（Earth Engine ID）：`LANDSAT/GLS1975_MOSAIC`
- 提供方：USGS、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_GLS1975_MOSAIC

## 许可与引用

- 许可：PDDL-1.0
- 关键词：gls, landsat, radiance, satellite-imagery, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)
- [Cloud Score+ S2_HARMONIZED V1](/pages/4a61128e/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
