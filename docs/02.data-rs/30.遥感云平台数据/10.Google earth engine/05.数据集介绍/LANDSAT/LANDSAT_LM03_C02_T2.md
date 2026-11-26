---
title: "USGS Landsat 3 MSS Collection 2 Tier 2 原始景"
date: 2026-11-03 12:00:00
permalink: /pages/b89c92af/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "c2"
  - "global"
  - "l3"
  - "landsat"
  - "lm3"
  - "mss"
  - "radiance"
  - "satellite-imagery"
  - "t2"
  - "tier2"
  - "usgs"
---

# USGS Landsat 3 MSS Collection 2 Tier 2 原始景

英文原名：USGS Landsat 3 MSS Collection 2 Tier 2 Raw Scenes

## 这是什么数据

Landsat 3 MSS Collection 2 Tier 2 DN 值，表示缩放、定标后的传感器处辐射。在处理过程中不满足 Tier 1 标准的影像被归入 Tier 2。这包括系统地形（L1GT）与系统（L1GS）处理影像，以及因显著云覆盖、地面控制不足等因素不满足 Tier 1 规格的任何 L1TP 影像。对 Tier 2 影像感兴趣的用户可以分析 RMSE 与其他属性，以确定其对个别应用与研究的适用性。更多信息见 [USGS 文档](https://www.usgs.gov/core-science-systems/nli/landsat/landsat-collections)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1978 年至 1983 年；分辨率：60 米。
- 时间范围：1978-03-07 至 1983-03-31

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B4 | 绿光。 | 60 | 0.5 - 0.6 &mu;m |
| B5 | 红光。 | 60 | 0.6 - 0.7 &mu;m |
| B6 | 近红外 1。 | 60 | 0.7 - 0.8 &mu;m |
| B7 | 近红外 2。 | 30 | 0.8 - 1.1 &mu;m |
| QA_PIXEL | Landsat Collection 2 MSS QA 比特掩膜。 | 30 |  |
| QA_RADSAT | 辐射饱和 QA。 | 30 |  |

## 能拿来做什么

- Landsat 影像检索与分析
- 地表反射率与地表温度应用
- 长时间序列土地覆盖监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('LANDSAT/LM03/C02/T2');
```

- 数据集编号（Earth Engine ID）：`LANDSAT/LM03/C02/T2`
- 提供方：USGS、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LM03_C02_T2

## 许可与引用

- 许可：PDDL-1.0
- 关键词：c2, global, l3, landsat, lm3, mss, radiance, satellite-imagery, t2, tier2, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [USGS Landsat 3 MSS Collection 2 Tier 1 Raw Scenes](/pages/64af7855/)
- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
