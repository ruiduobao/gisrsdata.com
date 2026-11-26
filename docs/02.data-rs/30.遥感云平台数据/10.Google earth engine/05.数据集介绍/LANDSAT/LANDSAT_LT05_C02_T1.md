---
title: "USGS Landsat 5 TM Collection 2 Tier 1 原始景"
date: 2026-11-03 12:00:00
permalink: /pages/c53a9c3b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "c2"
  - "global"
  - "l5"
  - "landsat"
  - "lt5"
  - "radiance"
  - "satellite-imagery"
  - "t1"
  - "tier1"
  - "tm"
  - "usgs"
---

# USGS Landsat 5 TM Collection 2 Tier 1 原始景

英文原名：USGS Landsat 5 TM Collection 2 Tier 1 Raw Scenes

## 这是什么数据

Landsat 5 TM Collection 2 Tier 1 DN 值，表示缩放、定标后的传感器处辐射。

数据质量最高的 Landsat 影像被归入 Tier 1，被认为适合时间序列处理分析。Tier 1 包括一级精密地形（L1TP）处理数据，其辐射定标特征明确，并在不同 Landsat 传感器之间相互定标。Tier 1 影像的地理配准将保持一致并在规定容差内 [≤12 米均方根误差（RMSE）]。所有 Tier 1 Landsat 数据在整个集合中都可视为一致且相互定标（与传感器无关）。更多信息见 [USGS 文档](https://www.usgs.gov/core-science-systems/nli/landsat/landsat-collections)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1984 年至 2012 年；分辨率：30 米（热红外 60 米）。
- 时间范围：1984-03-16 至 2012-05-05

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | 蓝光。 | 30 | 0.45 - 0.52 &mu;m |
| B2 | 绿光。 | 30 | 0.52 - 0.60 &mu;m |
| B3 | 红光。 | 30 | 0.63 - 0.69 &mu;m |
| B4 | 近红外。 | 30 | 0.76 - 0.90 &mu;m |
| B5 | 短波红外 1。 | 30 | 1.55 - 1.75 &mu;m |
| B6 | 热红外 1。由 60 米重采样至 30 米。 | 30 | 10.40 - 12.50 &mu;m |
| B7 | 短波红外 2。 | 30 | 2.08 - 2.35 &mu;m |
| QA_PIXEL | Landsat Collection 2 TM/ETM QA 比特掩膜。 | 30 |  |
| QA_RADSAT | 辐射饱和 QA。 | 30 |  |
| SAA | 太阳方位角。 | 30 |  |
| SZA | 太阳天顶角。 | 30 |  |
| VAA | 观测方位角。 | 30 |  |
| VZA | 观测天顶角。 | 30 |  |

## 能拿来做什么

- Landsat 影像检索与分析
- 地表反射率与地表温度应用
- 长时间序列土地覆盖监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('LANDSAT/LT05/C02/T1');
```

- 数据集编号（Earth Engine ID）：`LANDSAT/LT05/C02/T1`
- 提供方：USGS、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LT05_C02_T1

## 许可与引用

- 许可：PDDL-1.0
- 关键词：c2, global, l5, landsat, lt5, radiance, satellite-imagery, t1, tier1, tm, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [USGS Landsat 5 Level 2, Collection 2, Tier 1](/pages/02094cb5/)
- [USGS Landsat 5 Level 2, Collection 2, Tier 2](/pages/d3ac795f/)
- [USGS Landsat 5 TM Collection 2 Tier 1 TOA Reflectance](/pages/90bf05da/)
- [USGS Landsat 5 TM Collection 2 Tier 2 Raw Scenes](/pages/9a9bba5e/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
