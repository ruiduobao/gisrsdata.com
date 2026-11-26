---
title: "全球网格人口 GPWv4.11：水域面积"
date: 2026-11-03 12:00:00
permalink: /pages/0f13e587/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ciesin"
  - "gpw"
  - "nasa"
  - "population"
  - "surface-ground-water"
---

# 全球网格人口 GPWv4.11：水域面积

英文原名：GPWv411: Water Area (Gridded Population of the World Version 4.11)

## 这是什么数据

这套数据估计每个像元内的水域面积（永久冰和水），是计算 GPW v4.11 人口密度时用的配套图层。详见[通用文档](https://sedac.ciesin.columbia.edu/data/set/gpw-v4-land-water-area-rev11/docs)。

它属于「全球网格人口」第 4 版（GPWv4）修订 11：把全球人口分布建模到 2000、2005、2010、2015、2020 五个年份的 30 角秒（约 1 公里）格网上，人口按比例分配法从普查与行政单元分摊到格网，输入取自 2010 年轮次普查并外推到各建模年份。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2000-01-01 至 2020-01-01

## 分辨率与规格

- 空间分辨率：约 927.67 米（30 角秒，约 1 公里）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| water_area | 每个 30 角秒像元内的水域面积估计 | 927.67 |  |

## 能拿来做什么

- 与陆地面积图层一起算出每个像元的陆地占比
- 校正海岸、湖泊、河流沿岸的人口密度
- 网格分析中的水体与冰掩膜

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('CIESIN/GPWv411/GPW_Water_Area');
```

- 数据集编号（Earth Engine ID）：`CIESIN/GPWv411/GPW_Water_Area`
- 提供方：NASA SEDAC at the Center for International Earth Science Information Network、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Water_Area

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：ciesin, gpw, nasa, population, surface-ground-water
- 数据引用：Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4): Water Area, Revision 11.
Palisades, NY: NASA Socioeconomic Data and Applications Center
(SEDAC). [https://doi.org/10.7927/H4Z60M4Z](https://doi.org/10.7927/H4Z60M4Z).
Accessed DAY MONTH YEAR.

- DOI：10.7927/H4Z60M4Z

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球网格人口 GPWv4.11：水体掩膜](/pages/d70c6d97/)
- [美国 BLM 土地健康野外样地数据（AIM TerrADat）](/pages/53c74382/)
- [Dynamic Surface Water Extent from Harmonized Landsat Sentinel-2 (DSWx-HLS) V1](/pages/0bb51b32/)
- [Dynamic Surface Water Extent from Sentinel-1 (DSWx-S1) V1](/pages/e1121614/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
