---
title: "USGS Landsat 4 TM Collection 2 Tier 1 TOA 反射率"
date: 2026-11-03 12:00:00
permalink: /pages/6222b0dd/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "global"
  - "landsat"
  - "satellite-imagery"
  - "toa"
  - "usgs"
---

# USGS Landsat 4 TM Collection 2 Tier 1 TOA 反射率

英文原名：USGS Landsat 4 TM Collection 2 Tier 1 TOA Reflectance

## 这是什么数据

Landsat 4 TM Collection 2 Tier 1 定标大气层顶（TOA）反射率。定标系数从影像元数据中提取。TOA 计算细节见 [Chander et al. (2009)](https://www.sciencedirect.com/science/article/pii/S0034425709000169)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1982 年至 1993 年；分辨率：30 米（热红外 60 米）。
- 时间范围：1982-08-22 至 1993-12-14

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
var dataset = ee.ImageCollection('LANDSAT/LT04/C02/T1_TOA');
```

- 数据集编号（Earth Engine ID）：`LANDSAT/LT04/C02/T1_TOA`
- 提供方：USGS/Google、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LT04_C02_T1_TOA

## 许可与引用

- 许可：PDDL-1.0
- 关键词：global, landsat, satellite-imagery, toa, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [USGS Landsat 4 Level 2, Collection 2, Tier 1](/pages/f614ca66/)
- [USGS Landsat 4 Level 2, Collection 2, Tier 2](/pages/39a188bd/)
- [USGS Landsat 4 TM Collection 2 Tier 1 Raw Scenes](/pages/7a8bcd74/)
- [USGS Landsat 4 TM Collection 2 Tier 2 Raw Scenes](/pages/2240c9fe/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
