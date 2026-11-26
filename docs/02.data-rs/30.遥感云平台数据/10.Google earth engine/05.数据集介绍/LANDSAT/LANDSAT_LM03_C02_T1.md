---
title: "USGS Landsat 3 MSS Collection 2 Tier 1 原始景"
date: 2026-11-03 12:00:00
permalink: /pages/64af7855/
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
  - "t1"
  - "tier1"
  - "usgs"
---

# USGS Landsat 3 MSS Collection 2 Tier 1 原始景

英文原名：USGS Landsat 3 MSS Collection 2 Tier 1 Raw Scenes

## 这是什么数据

Landsat 3 MSS Collection 2 Tier 1 DN 值，表示缩放、定标后的传感器处辐射。

数据质量最高的 Landsat 影像被归入 Tier 1，被认为适合时间序列处理分析。Tier 1 包括一级精密地形（L1TP）处理数据，其辐射定标特征明确，并在不同 Landsat 传感器之间相互定标。Tier 1 影像的地理配准将保持一致并在规定容差内 [≤12 米均方根误差（RMSE）]。所有 Tier 1 Landsat 数据在整个集合中都可视为一致且相互定标（与传感器无关）。更多信息见 [USGS 文档](https://www.usgs.gov/core-science-systems/nli/landsat/landsat-collections)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1978 年至 1983 年；分辨率：60 米。
- 时间范围：1978-06-03 至 1983-02-23

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
var dataset = ee.ImageCollection('LANDSAT/LM03/C02/T1');
```

- 数据集编号（Earth Engine ID）：`LANDSAT/LM03/C02/T1`
- 提供方：USGS、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LM03_C02_T1

## 许可与引用

- 许可：PDDL-1.0
- 关键词：c2, global, l3, landsat, lm3, mss, radiance, satellite-imagery, t1, tier1, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [USGS Landsat 3 MSS Collection 2 Tier 2 Raw Scenes](/pages/b89c92af/)
- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
