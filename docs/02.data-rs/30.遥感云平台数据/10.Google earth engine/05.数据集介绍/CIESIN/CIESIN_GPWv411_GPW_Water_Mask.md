---
title: "全球网格人口 GPWv4.11：水体掩膜"
date: 2026-11-03 12:00:00
permalink: /pages/d70c6d97/
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

# 全球网格人口 GPWv4.11：水体掩膜

英文原名：GPWv411: Water Mask (Gridded Population of the World Version 4.11)

## 这是什么数据

这套数据标出哪些像元是水体，非水像元被掩膜掉。GPW 在分摊人口时就是用这层水体掩膜把水域和永久冰排除在外的。详见[通用文档](https://sedac.ciesin.columbia.edu/data/set/gpw-v4-basic-demographic-characteristics-rev11/docs)。

它属于「全球网格人口」第 4 版（GPWv4）修订 11：把全球人口分布建模到 2000、2005、2010、2015、2020 五个年份的 30 角秒（约 1 公里）格网上，人口按比例分配法从普查与行政单元分摊到格网，输入取自 2010 年轮次普查并外推到各建模年份。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2000-01-01 至 2020-01-01

## 分辨率与规格

- 空间分辨率：约 927.67 米（30 角秒，约 1 公里）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| water_mask | 水体掩膜 | 927.67 |  |

## 能拿来做什么

- 分摊或分析人口时排除水域与永久冰
- 在网格人口工作中掩膜海洋、湖泊与河流
- 与 GPW 网格对齐的水体图层

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('CIESIN/GPWv411/GPW_Water_Mask');
```

- 数据集编号（Earth Engine ID）：`CIESIN/GPWv411/GPW_Water_Mask`
- 提供方：NASA SEDAC at the Center for International Earth Science Information Network、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Water_Mask

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：ciesin, gpw, nasa, population, surface-ground-water
- 数据引用：Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4): Water Mask, Revision 11. Palisades, NY: NASA Socioeconomic Data
and Applications Center (SEDAC). [https://doi.org/10.7927/H42Z13KG](https://doi.org/10.7927/H42Z13KG).
Accessed DAY MONTH YEAR.

- DOI：10.7927/H42Z13KG

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球网格人口 GPWv4.11：水域面积](/pages/0f13e587/)
- [美国 BLM 土地健康野外样地数据（AIM TerrADat）](/pages/53c74382/)
- [Dynamic Surface Water Extent from Harmonized Landsat Sentinel-2 (DSWx-HLS) V1](/pages/0bb51b32/)
- [Dynamic Surface Water Extent from Sentinel-1 (DSWx-S1) V1](/pages/e1121614/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
