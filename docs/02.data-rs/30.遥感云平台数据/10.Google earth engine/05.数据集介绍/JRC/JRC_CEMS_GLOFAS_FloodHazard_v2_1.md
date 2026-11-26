---
title: "JRC 全球河流洪水危害图第 2.1 版"
date: 2026-11-03 12:00:00
permalink: /pages/c512c2e1/
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

# JRC 全球河流洪水危害图第 2.1 版

英文原名：JRC Global River Flood Hazard Maps Version 2.1

## 这是什么数据

全球河流洪水危害图是表示河网沿线淹没情况的格网数据集，包含七种不同的洪水重现期（从 10 年一遇至 500 年一遇）。新图的输入河流流量数据由开源水文模型 LISFLOOD 产生，淹没模拟则由水动力模型 LISFLOOD-FP 执行。范围涵盖全世界，但不包括格陵兰、南极洲以及流域面积小于 500 km² 的小岛。

像元值表示水深（米）。这些图可用于评估人口与经济资产对河流洪水的暴露程度，并开展洪水风险评估。本数据集作为哥白尼应急管理服务（Copernicus Emergency Management Service）的一部分制作。

本版本还包括其他数据集。对每个瓦片，都有一幅按 GloFAS "100 年重现期洪水危害"静态图层对水深分类的洪水危害图。此外，"spurious_depth_category" 波段标示在 10 年重现期下、小河道（小于 3,000 km²）内预测水深大于 10 米的区域，包括 2 km 缓冲区。

注：本版本（v2）更新了波段结构。每个重现期现在有单独的水深与水深分类波段。此外还包括永久水体类别与虚假水深分类波段。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球（格陵兰、南极洲及流域面积小于 500 km² 的小岛除外）；分辨率：90 米。
- 时间范围：2024-03-16 至 2024-03-16

## 分辨率与规格

- 空间分辨率：约 90 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| RP10_depth | 10 年重现期的洪水淹没水深。 | 90 |  |
| RP20_depth | 20 年重现期的洪水淹没水深。 | 90 |  |
| RP50_depth | 50 年重现期的洪水淹没水深。 | 90 |  |
| RP75_depth | 75 年重现期的洪水淹没水深。 | 90 |  |
| RP100_depth | 100 年重现期的洪水淹没水深。 | 90 |  |
| RP200_depth | 200 年重现期的洪水淹没水深。 | 90 |  |
| RP500_depth | 500 年重现期的洪水淹没水深。 | 90 |  |
| RP10_depth_category | 10 年重现期的水深，按 GloFAS "100 年重现期洪水危害"静态图层分类。 | 90 |  |
| RP20_depth_category | 20 年重现期的水深，按 GloFAS "100 年重现期洪水危害"静态图层分类。 | 90 |  |
| RP50_depth_category | 50 年重现期的水深，按 GloFAS "100 年重现期洪水危害"静态图层分类。 | 90 |  |
| RP75_depth_category | 75 年重现期的水深，按 GloFAS "100 年重现期洪水危害"静态图层分类。 | 90 |  |
| RP100_depth_category | 100 年重现期的水深，按 GloFAS "100 年重现期洪水危害"静态图层分类。 | 90 |  |
| RP200_depth_category | 200 年重现期的水深，按 GloFAS "100 年重现期洪水危害"静态图层分类。 | 90 |  |
| RP500_depth_category | 500 年重现期的水深，按 GloFAS "100 年重现期洪水危害"静态图层分类。 | 90 |  |
| permanent_water_class | 用于修补洪水危害图的永久水体类别。 | 90 |  |
| spurious_depth_category | 标示在 10 年重现期下、小河道（<3,000 km²）内预测水深大于 10 米的区域，另加 2 km 缓冲区。 | 90 |  |

## 能拿来做什么

- 洪水风险评估
- 人口与经济资产暴露分析
- 保险与灾害管理

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JRC/CEMS_GLOFAS/FloodHazard/v2_1');
```

- 数据集编号（Earth Engine ID）：`JRC/CEMS_GLOFAS/FloodHazard/v2_1`
- 提供方：Joint Research Centre、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JRC_CEMS_GLOFAS_FloodHazard_v2_1

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：flood, monitoring, surface-ground-water, wri
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [JRC Global River Flood Hazard Maps Version 1 [deprecated]](/pages/a326b13b/)
- [GLCF：Landsat 全球内陆水体](/pages/500a347f/)
- [全球网格人口 GPWv4.11：水体掩膜](/pages/d70c6d97/)
- [全球网格人口 GPWv4.11：水域面积](/pages/0f13e587/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
