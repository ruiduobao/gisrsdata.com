---
title: "全球网格人口 GPWv4：辅助数据网格（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/ceffa7f4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "ciesin"
  - "gpw"
  - "population"
---

# 全球网格人口 GPWv4：辅助数据网格（已弃用）

英文原名：GPWv4: Gridded Population of the World Version 4, Ancillary Data Grids [deprecated]

## 这是什么数据

「全球网格人口」第 4 版（GPWv4）把全球人口分布建模到 2000、2005、2010、2015、2020 五个年份的 30 角秒（约 1 公里）格网上。人口按比例分配法从普查与行政单元分摊到格网；输入数据取自 2010 年轮次普查（2005–2014 年间开展）可得的最细空间分辨率，再外推得到各建模年份的估计。

这套「辅助网格」把评估人口估计质量和生产过程所需的逐像元信息打包在一起：水体掩膜、数据背景、平均行政单元面积、国家标识、陆地面积、水域面积。详见[通用文档](https://beta.sedac.ciesin.columbia.edu/data/set/gpw-v4-land-water-area/docs)。注意：这是 GPWv4 的早期发布版，官方已标注弃用（deprecated）；GPWv4.11 已把这些网格拆成独立数据集发布。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2000-01-01 至 2020-01-01

## 分辨率与规格

- 空间分辨率：约 927.67 米（30 角秒，约 1 公里）
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| water-mask | 水体掩膜 | 927.67 |  |
| data-context | 依据普查文档信息，对估计人口为零的像元进行分类 | 927.67 |  |
| mean-administrative-unit-area | 制作人口计数与密度网格所依据的输入单元的平均面积 | 927.67 |  |
| national-identifier | 一个整数，表示制作 GPWv4 人口估计所用的普查数据来源。取值相同的像元（格网）表示同一数据来源，通常是一个国家或地区。注意：这些数据表示统计数据所覆盖的范围，不代表官方的国家或地区边界。 | 927.67 |  |
| land-area | 每个 30 角秒像元内扣除永久冰和水后的陆地面积估计 | 927.67 |  |
| water-area | 每个 30 角秒像元内的水域面积（永久冰和水）估计 | 927.67 |  |

## 能拿来做什么

- 评估 GPWv4 人口估计的质量与来源
- 一幅影像取齐 GPWv4 的全部质量网格，免逐个数据集找
- 严谨人口密度工作的配套图层

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('CIESIN/GPWv4/ancillary-data-grids');
```

- 数据集编号（Earth Engine ID）：`CIESIN/GPWv4/ancillary-data-grids`
- 提供方：CIESIN、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv4_ancillary-data-grids

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：ciesin, gpw, population
- 数据引用：Center for International Earth Science Information Network - CIESIN -
Columbia University. 2016. Gridded Population of the World, Version 4
(GPWv4): Administrative Unit Center Points with Population Estimates.
Palisades, NY: NASA Socioeconomic Data and Applications Center
(SEDAC). [https://doi.org/10.7927/H4F47M2C](https://doi.org/10.7927/H4F47M2C).
Accessed DAY MONTH YEAR.

- DOI：10.7927/H4F47M2C

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球网格人口 GPWv4：人口密度（已弃用）](/pages/732e4764/)
- [全球网格人口 GPWv4：人口计数（已弃用）](/pages/969607b9/)
- [全球网格人口 GPWv4：联合国校准人口密度（已弃用）](/pages/e8970ec8/)
- [全球网格人口 GPWv4：联合国校准人口计数（已弃用）](/pages/6a1c9cc3/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
