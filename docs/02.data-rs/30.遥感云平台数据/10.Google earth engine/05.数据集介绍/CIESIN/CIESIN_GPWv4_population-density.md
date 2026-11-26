---
title: "全球网格人口 GPWv4：人口密度（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/732e4764/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ciesin"
  - "gpw"
  - "population"
---

# 全球网格人口 GPWv4：人口密度（已弃用）

英文原名：GPWv4: Gridded Population of the World Version 4, Population Density [deprecated]

## 这是什么数据

「全球网格人口」第 4 版（GPWv4）把全球人口分布建模到 2000、2005、2010、2015、2020 五个年份的 30 角秒（约 1 公里）格网上。人口按比例分配法从普查与行政单元分摊到格网；输入数据取自 2010 年轮次普查（2005–2014 年间开展）可得的最细空间分辨率，再外推得到各建模年份的估计。

这套人口密度网格给出每平方公里的估计人数，与各国普查和人口登记一致；每个建模年份一幅影像。详见[通用文档](https://sedac.ciesin.columbia.edu/data/set/gpw-v4-population-count-rev11/docs)。注意：这是 GPWv4 的早期发布版，官方已标注弃用（deprecated），现行修订版是 GPWv4.11。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2000-01-01 至 2020-01-01

## 分辨率与规格

- 空间分辨率：约 927.67 米（30 角秒，约 1 公里）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| population-density | 估计的每平方公里人数 | 927.67 |  |

## 能拿来做什么

- 约 1 公里分辨率的全球人口密度快速制图
- 复现基于原始 GPWv4 的既有研究时作历史图层
- 跨区域比较人口聚居程度

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('CIESIN/GPWv4/population-density');
```

- 数据集编号（Earth Engine ID）：`CIESIN/GPWv4/population-density`
- 提供方：CIESIN、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv4_population-density

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：ciesin, gpw, population
- 数据引用：Center for International Earth Science Information Network - CIESIN -
Columbia University. 2016. Gridded Population of the World, Version 4
(GPWv4): Population Density. Palisades, NY: NASA Socioeconomic Data and
Applications Center (SEDAC). [https://doi.org/10.7927/H4NP22DQ](https://doi.org/10.7927/H4NP22DQ).
Accessed DAY MONTH YEAR.

- DOI：10.7927/H4NP22DQ

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球网格人口 GPWv4：人口计数（已弃用）](/pages/969607b9/)
- [全球网格人口 GPWv4：联合国校准人口密度（已弃用）](/pages/e8970ec8/)
- [全球网格人口 GPWv4：联合国校准人口计数（已弃用）](/pages/6a1c9cc3/)
- [全球网格人口 GPWv4：辅助数据网格（已弃用）](/pages/ceffa7f4/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
