---
title: "全球网格人口 GPWv4.11：陆地面积"
date: 2026-11-03 12:00:00
permalink: /pages/2bf0e5fc/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ciesin"
  - "gpw"
  - "nasa"
  - "population"
---

# 全球网格人口 GPWv4.11：陆地面积

英文原名：GPWv411: Land Area (Gridded Population of the World Version 4.11)

## 这是什么数据

这套数据估计每个像元内的陆地表面积（平方公里，像元内扣除永久冰和水）。它是计算 GPW v4.11 人口密度数据时用的分母。详见[通用文档](https://beta.sedac.ciesin.columbia.edu/data/set/gpw-v4-quality-indicators/docs)。

它属于「全球网格人口」第 4 版（GPWv4）修订 11：把全球人口分布建模到 2000、2005、2010、2015、2020 五个年份的 30 角秒（约 1 公里）格网上，人口按比例分配法从普查与行政单元分摊到格网，输入取自 2010 年轮次普查并外推到各建模年份。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2000-01-01 至 2020-01-01

## 分辨率与规格

- 空间分辨率：约 927.67 米（30 角秒，约 1 公里）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| land_area | 每个 30 角秒像元内的陆地面积估计 | 927.67 |  |

## 能拿来做什么

- 把 GPW 人口数正确换算成人口密度
- 了解海岸、湖岸像元的真实陆地占比
- 网格统计的面积加权

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('CIESIN/GPWv411/GPW_Land_Area');
```

- 数据集编号（Earth Engine ID）：`CIESIN/GPWv411/GPW_Land_Area`
- 提供方：NASA SEDAC at the Center for International Earth Science Information Network、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Land_Area

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：ciesin, gpw, nasa, population
- 数据引用：Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4): Land Area, Revision 11. Palisades, NY: NASA Socioeconomic Data
and Applications Center (SEDAC). [https://doi.org/10.7927/H4Z60M4Z](https://doi.org/10.7927/H4Z60M4Z).
Accessed DAY MONTH YEAR.

- DOI：10.7927/H4Z60M4Z

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球网格人口 GPWv4.11：人口密度](/pages/f230ed9d/)
- [全球网格人口 GPWv4.11：人口计数](/pages/9cd921b2/)
- [全球网格人口 GPWv4.11：国家标识网格](/pages/425f6eb9/)
- [全球网格人口 GPWv4.11：基本人口特征（年龄与性别）](/pages/012ffc59/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
