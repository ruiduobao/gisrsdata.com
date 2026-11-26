---
title: "美国地貌区（地貌与岩性交集）"
date: 2026-11-03 12:00:00
permalink: /pages/2e93f898/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aspect"
  - "csp"
  - "elevation"
  - "elevation-topography"
  - "ergo"
  - "geophysical"
  - "landforms"
  - "slope"
  - "topography"
  - "us"
---

# 美国地貌区（地貌与岩性交集）

英文原名：US Physiography

## 这是什么数据

地貌区数据集表示地貌（在 EE 中为 ERGo/1_0/US/landforms）与岩性（在 EE 中为 ERGo/1_0/US/lithology）两个数据图层的空间交集。它在可能的 270 种组合中提供了 247 种独有组合。每种类型的值由地貌与岩性类型拼接而成（例如 1101 是「山峰/山脊」地貌位于「碳酸盐岩」岩性之上）。这一数据层有时被称为刻画「地貌面」。

地貌图层基于 USGS 的 10 米 NED DEM（在 EE 中为 USGS/NED）。岩性图层不基于任何 DEM。

该数据集只提供美国范围，因为岩性数据层仅在美国可得，不过其他国家可能也有这类数据。

## 覆盖范围与时间

- 覆盖范围：美国
- 时间范围：2006-01-24 至 2011-05-13

## 分辨率与规格

- 空间分辨率：约 90 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| constant | 地貌与岩性的交集 | 90 |  |

## 能拿来做什么

- 气候适应规划的地貌背景分析
- 物种分布与栖息地建模的地形因子
- 蒸散与局地微气候的替代变量

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('CSP/ERGo/1_0/US/physiography');
```

- 数据集编号（Earth Engine ID）：`CSP/ERGo/1_0/US/physiography`
- 提供方：Conservation Science Partners、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CSP_ERGo_1_0_US_physiography

## 许可与引用

- 许可：CC-BY-NC-SA-4.0
- 关键词：aspect, csp, elevation, elevation-topography, ergo, geophysical, landforms, slope, topography, us
- 数据引用：Theobald, D. M., Harrison-Atlas, D., Monahan, W. B., & Albano, C. M.
(2015). Ecologically-relevant maps of landforms and physiographic diversity
for climate adaptation planning. PloS one, 10(12),
[e0143619](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0143619)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球 ALOS 地形多样性](/pages/14e817f0/)
- [全球 ALOS 地貌分类](/pages/960bfb36/)
- [全球 ALOS 多尺度地形位置指数（mTPI）](/pages/e565b408/)
- [全球 ALOS 连续热量-日照负荷指数（CHILI）](/pages/91d663d7/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
