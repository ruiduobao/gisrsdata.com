---
title: "美国 NED 地貌分类"
date: 2026-11-03 12:00:00
permalink: /pages/bbe030c7/
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

# 美国 NED 地貌分类

英文原名：US NED Landforms

## 这是什么数据

ALOS 地貌数据集提供由连续热量-日照负荷指数（CHILI）与多尺度地形位置指数（mTPI）组合生成的地貌类别。它基于 USGS 的 10 米 NED DEM（在 EE 中为 USGS/NED）。

保护科学伙伴组织（CSP）的生态相关地貌（ERGo）数据集（地貌与地貌区）包含详细的多尺度地貌与地貌区（又称地貌面）格局数据。这类数据有许多潜在用途，其最初目的是建立一套生态相关的地貌与地貌区分类与制图，适用于气候适应规划。由于未来气候条件存在很大的不确定性、生态响应的不确定性更大，提供「不太可能改变」的信息，能为管理者制定稳健的气候适应计划打下坚实基础。这些景观特征的量化对分辨率敏感，因此我们在给定指数的范围与特征条件下提供尽可能高的分辨率。

## 覆盖范围与时间

- 覆盖范围：美国
- 时间范围：2006-01-24 至 2011-05-13

## 分辨率与规格

- 空间分辨率：约 10 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| constant | 由 NED 派生的地貌类别 | 10 |  |

## 能拿来做什么

- 气候适应规划的地貌背景分析
- 物种分布与栖息地建模的地形因子
- 蒸散与局地微气候的替代变量

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('CSP/ERGo/1_0/US/landforms');
```

- 数据集编号（Earth Engine ID）：`CSP/ERGo/1_0/US/landforms`
- 提供方：Conservation Science Partners、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CSP_ERGo_1_0_US_landforms

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
