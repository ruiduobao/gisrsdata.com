---
title: "Global ALOS Landforms"
date: 2026-11-03 12:00:00
permalink: /pages/960bfb36/
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

# Global ALOS Landforms

## 数据集简介

The ALOS Landform dataset provides landform classes created by combining
the Continuous Heat-Insolation Load Index (ALOS CHILI) and the
multi-scale Topographic Position Index (ALOS mTPI) datasets. It is
based on the 30m \"AVE\" band of JAXA's ALOS DEM (available in EE as
JAXA/ALOS/AW3D30_V1_1).

The Conservation Science Partners (CSP) Ecologically Relevant Geomorphology
(ERGo) Datasets, Landforms and Physiography contain detailed, multi-scale
data on landforms and physiographic (aka land facet) patterns. Although
there are many potential uses of these data, the original purpose for these
data was to develop an ecologically relevant classification and map of
landforms and physiographic classes that are suitable for climate adaptation
planning. Because there is large uncertainty associated with future climate
conditions and even more uncertainty around ecological responses, providing
information about what is unlikely to change offers a strong foundation for
managers to build robust climate adaptation plans. The quantification of
these features of the landscape is sensitive to the resolution, so we
provide the highest resolution possible given the extent and characteristics
of a given index.

## 基本信息

- 数据集编号（Earth Engine ID）：`CSP/ERGo/1_0/Global/ALOS_landforms`
- 数据类型：影像（Image）
- 提供方：Conservation Science Partners、Google Earth Engine
- 时间范围：2006-01-24 至 2011-05-13
- 空间分辨率：90 米
- 许可：CC-BY-NC-SA-4.0
- 关键词：aspect, csp, elevation, elevation-topography, ergo, geophysical, global, landforms, slope, topography

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| constant | ALOS-derived landform classes | 90 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('CSP/ERGo/1_0/Global/ALOS_landforms');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CSP_ERGo_1_0_Global_ALOS_landforms
- 数据引用：Theobald, D. M., Harrison-Atlas, D., Monahan, W. B., & Albano, C. M.
(2015). Ecologically-relevant maps of landforms and physiographic diversity
for climate adaptation planning. PloS one, 10(12),
[e0143619](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0143619)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
