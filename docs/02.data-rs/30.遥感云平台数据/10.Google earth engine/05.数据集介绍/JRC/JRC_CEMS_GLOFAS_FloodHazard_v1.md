---
title: "JRC 全球河流洪水危害图第 1 版（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/a326b13b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "flood"
  - "monitoring"
  - "surface-ground-water"
  - "wri"
---

# JRC 全球河流洪水危害图第 1 版（已弃用）

英文原名：JRC Global River Flood Hazard Maps Version 1 [deprecated]

## 这是什么数据

全球河流洪水危害图是表示河网沿线淹没情况的格网数据集，包含七种不同的洪水重现期（从 10 年一遇至 500 年一遇）。新图的输入河流流量数据由开源水文模型 LISFLOOD 产生，淹没模拟则由水动力模型 LISFLOOD-FP 执行。范围涵盖全世界，但不包括格陵兰、南极洲以及流域面积小于 500 km² 的小岛。

像元值表示水深（米）。这些图可用于评估人口与经济资产对河流洪水的暴露程度，并开展洪水风险评估。本数据集作为哥白尼应急管理服务（Copernicus Emergency Management Service）的一部分制作。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球（格陵兰、南极洲及流域面积小于 500 km² 的小岛除外）；分辨率：90 米。
- 时间范围：2024-03-16 至 2024-03-16

## 分辨率与规格

- 空间分辨率：约 90 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| depth | 洪水淹没水深。 | 90 |  |

## 能拿来做什么

- 洪水风险评估
- 人口与经济资产暴露分析
- 保险与灾害管理

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JRC/CEMS_GLOFAS/FloodHazard/v1');
```

- 数据集编号（Earth Engine ID）：`JRC/CEMS_GLOFAS/FloodHazard/v1`
- 提供方：Joint Research Centre、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_CEMS_GLOFAS_FloodHazard_v1

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：flood, monitoring, surface-ground-water, wri
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [JRC Global River Flood Hazard Maps Version 2.1](/pages/c512c2e1/)
- [GLCF：Landsat 全球内陆水体](/pages/500a347f/)
- [全球网格人口 GPWv4.11：水体掩膜](/pages/d70c6d97/)
- [全球网格人口 GPWv4.11：水域面积](/pages/0f13e587/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
