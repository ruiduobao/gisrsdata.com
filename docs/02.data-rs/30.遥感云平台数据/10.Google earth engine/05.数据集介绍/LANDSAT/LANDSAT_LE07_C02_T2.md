---
title: "USGS Landsat 7 Collection 2 Tier 2 原始景"
date: 2026-11-03 12:00:00
permalink: /pages/062fea7f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "c2"
  - "etm"
  - "global"
  - "l7"
  - "landsat"
  - "le7"
  - "radiance"
  - "satellite-imagery"
  - "t2"
  - "tier2"
  - "usgs"
---

# USGS Landsat 7 Collection 2 Tier 2 原始景

英文原名：USGS Landsat 7 Collection 2 Tier 2 Raw Scenes

## 这是什么数据

Landsat 7 Collection 2 Tier 2 DN 值，表示缩放、定标后的传感器处辐射。在处理过程中不满足 Tier 1 标准的影像被归入 Tier 2。这包括系统地形（L1GT）与系统（L1GS）处理影像，以及因显著云覆盖、地面控制不足等因素不满足 Tier 1 规格的任何 L1TP 影像。对 Tier 2 影像感兴趣的用户可以分析 RMSE 与其他属性，以确定其对个别应用与研究的适用性。更多信息见 [USGS 文档](https://www.usgs.gov/core-science-systems/nli/landsat/landsat-collections)。

注意，[Landsat 7 的轨道自 2017 年以来一直在漂移至更早的获取时间](https://www.sciencedirect.com/science/article/pii/S2666017221000134?via%3Dihub)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：1999 年至 2024 年；分辨率：15–60 米（多光谱 30 米）。
- 时间范围：1999-05-28 至 2024-01-19

## 分辨率与规格

- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| B1 | 蓝光。 | 30 | 0.45 - 0.52 &mu;m |
| B2 | 绿光。 | 30 | 0.52 - 0.60 &mu;m |
| B3 | 红光。 | 30 | 0.63 - 0.69 &mu;m |
| B4 | 近红外。 | 30 | 0.77 - 0.90 &mu;m |
| B5 | 短波红外 1。 | 30 | 1.55 - 1.75 &mu;m |
| B6_VCID_1 | 低增益热红外 1。该波段动态范围扩大、辐射分辨率（灵敏度）较低，在高数字量化值（DN）时较少饱和。由 60 米重采样至 30 米。 | 60 | 10.40 - 12.50 &mu;m |
| B6_VCID_2 | 高增益热红外 1。该波段辐射分辨率（灵敏度）较高，但动态范围较受限。由 60 米重采样至 30 米。 | 60 | 10.40 - 12.50 &mu;m |
| B7 | 短波红外 2。 | 30 | 2.08 - 2.35 &mu;m |
| B8 | 全色。 | 15 | 0.52 - 0.90 &mu;m |
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
var dataset = ee.ImageCollection('LANDSAT/LE07/C02/T2');
```

- 数据集编号（Earth Engine ID）：`LANDSAT/LE07/C02/T2`
- 提供方：USGS、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LE07_C02_T2

## 许可与引用

- 许可：PDDL-1.0
- 关键词：c2, etm, global, l7, landsat, le7, radiance, satellite-imagery, t2, tier2, usgs
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [USGS Landsat 7 Collection 2 Tier 1 Raw Scenes](/pages/809111b6/)
- [USGS Landsat 7 Collection 2 Tier 1 TOA Reflectance](/pages/1810cfa0/)
- [USGS Landsat 7 Collection 2 Tier 1 and Real-Time data Raw Scenes](/pages/50ce2d44/)
- [USGS Landsat 7 Collection 2 Tier 1 and Real-Time data TOA Reflectance](/pages/5228855d/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
