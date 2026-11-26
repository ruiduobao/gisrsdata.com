---
title: "全球网格人口 GPWv4.11：人口密度"
date: 2026-11-03 12:00:00
permalink: /pages/f230ed9d/
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

# 全球网格人口 GPWv4.11：人口密度

英文原名：GPWv411: Population Density (Gridded Population of the World Version 4.11)

## 这是什么数据

这套数据给出人口密度（每平方公里估计人数），与各国人口普查和人口登记一致。每个建模年份一幅影像。详见[通用文档](https://sedac.ciesin.columbia.edu/data/set/gpw-v4-population-density-rev11/docs)。

它属于「全球网格人口」第 4 版（GPWv4）修订 11：把全球人口分布建模到 2000、2005、2010、2015、2020 五个年份的 30 角秒（约 1 公里）格网上。人口按比例分配法从普查与行政单元分摊到格网；输入数据取自 2010 年轮次普查（2005–2014 年间开展）可得的最细空间分辨率，再外推得到各建模年份的估计。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2000-01-01 至 2020-01-01

## 分辨率与规格

- 空间分辨率：约 927.67 米（30 角秒，约 1 公里）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| population_density | 估计的每平方公里人数 | 927.67 |  |

## 能拿来做什么

- 绘制全球任意地区的人口稠密程度
- 灾害、健康与气候研究的人口暴露数据
- 城镇化与聚落格局分析

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('CIESIN/GPWv411/GPW_Population_Density');
```

- 数据集编号（Earth Engine ID）：`CIESIN/GPWv411/GPW_Population_Density`
- 提供方：NASA SEDAC at the Center for International Earth Science Information Network、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：ciesin, gpw, nasa, population
- 数据引用：Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4): Population Density, Revision 11. Palisades, NY: NASA Socioeconomic Data and
Applications Center (SEDAC). [https://doi.org/10.7927/H49C6VHW](https://doi.org/10.7927/H49C6VHW).
Accessed DAY MONTH YEAR.

- DOI：10.7927/H49C6VHW

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球网格人口 GPWv4.11：人口计数](/pages/9cd921b2/)
- [全球网格人口 GPWv4.11：国家标识网格](/pages/425f6eb9/)
- [全球网格人口 GPWv4.11：基本人口特征（年龄与性别）](/pages/012ffc59/)
- [全球网格人口 GPWv4.11：平均行政单元面积](/pages/e96ad86f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
