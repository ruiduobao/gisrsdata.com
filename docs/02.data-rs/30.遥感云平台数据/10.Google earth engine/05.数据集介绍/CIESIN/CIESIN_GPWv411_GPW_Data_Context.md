---
title: "全球网格人口 GPWv4.11：数据背景（零人口像元分类）"
date: 2026-11-03 12:00:00
permalink: /pages/681ae947/
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

# 全球网格人口 GPWv4.11：数据背景（零人口像元分类）

英文原名：GPWv411: Data Context (Gridded Population of the World Version 4.11)

## 这是什么数据

这套数据把估计人口为零的像元按原因分类，依据来自普查文档——也就是告诉你每个空像元「为什么没人」（例如源文档标注的水域、保护地等无人居住类别）。详见[通用文档](https://sedac.ciesin.columbia.edu/data/set/gpw-v4-admin-unit-center-points-population-estimates-rev11/docs)。

它属于「全球网格人口」第 4 版（GPWv4）修订 11：把全球人口分布建模到 2000、2005、2010、2015、2020 五个年份的 30 角秒（约 1 公里）格网上。人口按比例分配法从普查与行政单元分摊到格网；输入数据取自 2010 年轮次普查（2005–2014 年间开展）可得的最细空间分辨率，再外推得到各建模年份的估计。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2000-01-01 至 2020-01-01

## 分辨率与规格

- 空间分辨率：约 927.67 米（30 角秒，约 1 公里）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| data_context | 依据普查文档信息，对估计人口为零的像元进行分类 | 927.67 |  |

## 能拿来做什么

- 在 GPW 里区分真正无人居住与数据缺失的像元
- 人口密度计算的质量控制
- 在暴露分析中解释零人口区域

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('CIESIN/GPWv411/GPW_Data_Context');
```

- 数据集编号（Earth Engine ID）：`CIESIN/GPWv411/GPW_Data_Context`
- 提供方：NASA SEDAC at the Center for International Earth Science Information Network、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Data_Context

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：ciesin, gpw, nasa, population
- 数据引用：Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4): Data Context, Revision 11. Palisades, NY: NASA Socioeconomic Data
and Applications Center (SEDAC). [doi:10.7927/H42Z13KG](https://doi.org/10.7927/H42Z13KG).
Accessed DAY MONTH YEAR.

- DOI：10.7927/H42Z13KG

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球网格人口 GPWv4.11：人口密度](/pages/f230ed9d/)
- [全球网格人口 GPWv4.11：人口计数](/pages/9cd921b2/)
- [全球网格人口 GPWv4.11：国家标识网格](/pages/425f6eb9/)
- [全球网格人口 GPWv4.11：基本人口特征（年龄与性别）](/pages/012ffc59/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
