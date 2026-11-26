---
title: "全球网格人口 GPWv4.11：基本人口特征（年龄与性别）"
date: 2026-11-03 12:00:00
permalink: /pages/012ffc59/
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

# 全球网格人口 GPWv4.11：基本人口特征（年龄与性别）

英文原名：GPWv411: Basic Demographic Characteristics (Gridded Population of the World Version 4.11)

## 这是什么数据

这套数据给出每个 30 角秒格网（约 1 公里见方）里按年龄和性别估计的人口数，与各国人口普查和人口登记口径一致。每个建模的年龄—性别类别是一幅单独的影像，基于 2010 年轮次的人口普查。详见[通用文档](https://sedac.ciesin.columbia.edu/data/set/gpw-v4-basic-demographic-characteristics-rev11/docs)。

它属于「全球网格人口」第 4 版（GPWv4）修订 11：把全球人口分布建模到 2000、2005、2010、2015、2020 五个年份的 30 角秒格网上。人口按比例分配法从普查与行政单元分摊到格网；输入数据取自 2010 年轮次普查（2005–2014 年间开展）可得的最细空间分辨率，再外推得到各建模年份的估计。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2000-01-01 至 2020-01-01

## 分辨率与规格

- 空间分辨率：约 927.67 米（30 角秒，约 1 公里）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| basic_demographic_characteristics | 每个 30 角秒格网内按年龄和性别估计的人数 | 927.67 |  |

## 能拿来做什么

- 绘制全球任意地区的分年龄、分性别人口分布
- 给学校、医疗等依赖年龄结构的公共服务规划提供数据
- 灾害与健康研究中的人口暴露输入

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('CIESIN/GPWv411/GPW_Basic_Demographic_Characteristics');
```

- 数据集编号（Earth Engine ID）：`CIESIN/GPWv411/GPW_Basic_Demographic_Characteristics`
- 提供方：NASA SEDAC at the Center for International Earth Science Information Network、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Basic_Demographic_Characteristics

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：ciesin, gpw, nasa, population
- 数据引用：Center for International Earth Science Information Network - CIESIN -
Columbia University. 2018. Gridded Population of the World, Version 4
(GPWv4): Basic Characteristics, Revision 11. Palisades, NY: NASA Socioeconomic Data and
Applications Center (SEDAC). [doi:10.7927/H46M34XX](https://doi.org/10.7927/H46M34XX).
Accessed DAY MONTH YEAR.

- DOI：10.7927/H46M34XX

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球网格人口 GPWv4.11：人口密度](/pages/f230ed9d/)
- [全球网格人口 GPWv4.11：人口计数](/pages/9cd921b2/)
- [全球网格人口 GPWv4.11：国家标识网格](/pages/425f6eb9/)
- [全球网格人口 GPWv4.11：平均行政单元面积](/pages/e96ad86f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
