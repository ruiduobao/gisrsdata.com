---
title: "USGS Landsat 9 Collection 2 Tier 2 原始景"
date: 2026-11-03 12:00:00
permalink: /pages/9e77eb63/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "c2"
  - "global"
  - "l9"
  - "landsat"
  - "lc9"
  - "oli-tirs"
  - "radiance"
  - "satellite-imagery"
  - "t2"
  - "tier2"
  - "usgs"
---

# USGS Landsat 9 Collection 2 Tier 2 原始景

英文原名：USGS Landsat 9 Collection 2 Tier 2 Raw Scenes

## 这是什么数据

Landsat 9 Collection 2 Tier 2 DN 值，表示缩放、定标后的传感器处辐射。在处理过程中不满足 Tier 1 标准的影像被归入 Tier 2。这包括系统地形（L1GT）与系统（L1GS）处理影像，以及因显著云覆盖、地面控制不足等因素不满足 Tier 1 规格的任何 L1TP 影像。对 Tier 2 影像感兴趣的用户可以分析 RMSE 与其他属性，以确定其对个别应用与研究的适用性。更多信息见 [USGS 文档](https://www.usgs.gov/core-science-systems/nli/landsat/landsat-collections)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2021 年至今；分辨率：15–100 米（多光谱 30 米）。
- 时间范围：2021-11-02 至 2026-11-02

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | 海岸气溶胶。 | 30 | 0.43 - 0.45 &mu;m |
| B2 | 蓝光。 | 30 | 0.45 - 0.51 &mu;m |
| B3 | 绿光。 | 30 | 0.53 - 0.59 &mu;m |
| B4 | 红光。 | 30 | 0.64 - 0.67 &mu;m |
| B5 | 近红外。 | 30 | 0.85 - 0.88 &mu;m |
| B6 | 短波红外 1。 | 30 | 1.57 - 1.65 &mu;m |
| B7 | 短波红外 2。 | 30 | 2.11 - 2.29 &mu;m |
| B8 | 波段 8 全色。 | 15 | 0.50 - 0.68 &mu;m |
| B9 | 卷云。 | 30 | 1.36 - 1.38 &mu;m |
| B10 | 热红外 1，由 100 米重采样至 30 米。 | 30 | 10.60 - 11.19 &mu;m |
| B11 | 热红外 2，由 100 米重采样至 30 米。 | 30 | 11.50 - 12.51 &mu;m |
| QA_PIXEL | Landsat Collection 2 OLI/TIRS QA 比特掩膜。 | 30 |  |
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
var dataset = ee.ImageCollection('LANDSAT/LC09/C02/T2');
```

- 数据集编号（Earth Engine ID）：`LANDSAT/LC09/C02/T2`
- 提供方：USGS、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC09_C02_T2

## 许可与引用

- 许可：PDDL-1.0
- 关键词：c2, global, l9, landsat, lc9, oli-tirs, radiance, satellite-imagery, t2, tier2, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [USGS Landsat 9 Collection 2 Tier 1 Raw Scenes](/pages/e4bd161a/)
- [USGS Landsat 9 Collection 2 Tier 1 TOA Reflectance](/pages/1f26c0ae/)
- [USGS Landsat 9 Collection 2 Tier 2 TOA Reflectance](/pages/2ee2b33c/)
- [USGS Landsat 9 Level 2, Collection 2, Tier 1](/pages/4ca33bbc/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
