---
title: "全球网格人口 GPWv4.11：国家标识网格"
date: 2026-11-03 12:00:00
permalink: /pages/425f6eb9/
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

# 全球网格人口 GPWv4.11：国家标识网格

英文原名：GPWv411: National Identifier Grid (Gridded Population of the World Version 4.11)

## 这是什么数据

这套网格记录每个像元背后的 GPW v4.11 人口估计用的是哪一份普查数据来源：取值相同的像元来自同一来源，通常就是一个国家或地区。详见[通用文档](https://sedac.ciesin.columbia.edu/data/set/gpw-v4-national-identifier-grid-rev11/docs)。

它属于「全球网格人口」第 4 版（GPWv4）修订 11：把全球人口分布建模到 2000、2005、2010、2015、2020 五个年份的 30 角秒（约 1 公里）格网上。人口按比例分配法从普查与行政单元分摊到格网；输入数据取自 2010 年轮次普查（2005–2014 年间开展）可得的最细空间分辨率，再外推得到各建模年份的估计。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2000-01-01 至 2020-01-01

## 分辨率与规格

- 空间分辨率：约 927.67 米（30 角秒，约 1 公里）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| national_identifier_grid | 一个整数，表示制作 GPWv4.11 人口估计所用的普查数据来源。取值相同的像元（格网）表示同一数据来源，通常是一个国家或地区。注意：这些数据表示统计数据所覆盖的范围，不代表官方的国家或地区边界。 | 927.67 |  |

## 能拿来做什么

- 追溯 GPW 地图各区域用的是哪个国家的普查
- 把全球人口网格按数据来源拆分、逐国核查
- 在人口研究中说明数据来源

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('CIESIN/GPWv411/GPW_National_Identifier_Grid');
```

- 数据集编号（Earth Engine ID）：`CIESIN/GPWv411/GPW_National_Identifier_Grid`
- 提供方：NASA SEDAC at the Center for International Earth Science Information Network、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_National_Identifier_Grid

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：ciesin, gpw, nasa, population
- 数据引用：Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4): National Identifier Grid, Revision 11. Palisades, NY: NASA Socioeconomic Data
and Applications Center (SEDAC). [https://doi.org/10.7927/H4F47M2C](https://doi.org/10.7927/H4F47M2C).
Accessed DAY MONTH YEAR.

- DOI：10.7927/H4TD9VDP

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球网格人口 GPWv4.11：人口密度](/pages/f230ed9d/)
- [全球网格人口 GPWv4.11：人口计数](/pages/9cd921b2/)
- [全球网格人口 GPWv4.11：基本人口特征（年龄与性别）](/pages/012ffc59/)
- [全球网格人口 GPWv4.11：平均行政单元面积](/pages/e96ad86f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
