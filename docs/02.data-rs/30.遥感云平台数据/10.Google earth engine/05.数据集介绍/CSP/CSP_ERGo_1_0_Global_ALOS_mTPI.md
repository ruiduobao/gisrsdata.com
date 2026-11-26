---
title: "全球 ALOS 多尺度地形位置指数（mTPI）"
date: 2026-11-03 12:00:00
permalink: /pages/e565b408/
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
  - "global"
  - "landforms"
  - "slope"
  - "topography"
---

# 全球 ALOS 多尺度地形位置指数（mTPI）

英文原名：Global ALOS mTPI (Multi-Scale Topographic Position Index)

## 这是什么数据

mTPI 用于区分山脊与山谷形态。它用每个位置的高程减去邻域内的平均高程来计算。mTPI 使用的移动窗口半径（公里）为：115.8、89.9、35.5、13.1、5.6、2.8 和 1.2。它基于 JAXA ALOS DEM 的 30 米 “AVE” 波段（在 EE 中为 JAXA/ALOS/AW3D30_V1_1）。

保护科学伙伴组织（CSP）的生态相关地貌（ERGo）数据集（地貌与地貌区）包含详细的多尺度地貌与地貌区（又称地貌面）格局数据。这类数据有许多潜在用途，其最初目的是建立一套生态相关的地貌与地貌区分类与制图，适用于气候适应规划。由于未来气候条件存在很大的不确定性、生态响应的不确定性更大，提供「不太可能改变」的信息，能为管理者制定稳健的气候适应计划打下坚实基础。这些景观特征的量化对分辨率敏感，因此我们在给定指数的范围与特征条件下提供尽可能高的分辨率。

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2006-01-24 至 2011-05-13

## 分辨率与规格

- 空间分辨率：约 270 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| AVE | 由 ALOS 派生的 mTPI，取值从负（山谷）到正（山脊） | 270 |  |

## 能拿来做什么

- 气候适应规划的地貌背景分析
- 物种分布与栖息地建模的地形因子
- 蒸散与局地微气候的替代变量

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('CSP/ERGo/1_0/Global/ALOS_mTPI');
```

- 数据集编号（Earth Engine ID）：`CSP/ERGo/1_0/Global/ALOS_mTPI`
- 提供方：Conservation Science Partners、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CSP_ERGo_1_0_Global_ALOS_mTPI

## 许可与引用

- 许可：CC-BY-NC-SA-4.0
- 关键词：aspect, csp, elevation, elevation-topography, ergo, geophysical, global, landforms, slope, topography
- 数据引用：Theobald, D. M., Harrison-Atlas, D., Monahan, W. B., & Albano, C. M.
(2015). Ecologically-relevant maps of landforms and physiographic diversity
for climate adaptation planning. PloS one, 10(12),
[e0143619](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0143619)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [Global ALOS CHILI (Continuous Heat-Insolation Load Index)](/pages/91d663d7/)
- [Global ALOS Landforms](/pages/960bfb36/)
- [Global ALOS Topographic Diversity](/pages/14e817f0/)
- [Global SRTM CHILI (Continuous Heat-Insolation Load Index)](/pages/d904a592/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
