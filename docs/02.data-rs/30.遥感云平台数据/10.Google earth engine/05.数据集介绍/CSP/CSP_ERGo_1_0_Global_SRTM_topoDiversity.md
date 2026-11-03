---
title: "Global SRTM Topographic Diversity"
date: 2026-11-03 12:00:00
permalink: /pages/dd16aaff/
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

# Global SRTM Topographic Diversity

## 数据集简介

Topographic diversity (D) is a surrogate variable that represents the
variety of temperature and moisture conditions available to species as local
habitats. It expresses the logic that a higher variety of topo-climate
niches should support higher diversity (especially plant) and support
species persistence given climatic change.

To calculate D, the multi-scale Topographic Position Index (mTPI), being a
dominant control of soil moisture (T), was used for measuring hillslope
position. The mTPI was combined with the square-root transform for
mTPI>0 (T') and with the standard deviation of the Continuous
Heat-Insolation Load Index (CHILI), calculated at multiple scales (C') as:
D = 1 - ((1-T') * (1-C'). It is based on the 30m SRTM DEM (available in EE
as USGS/SRTMGL1_003).

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

- 数据集编号（Earth Engine ID）：`CSP/ERGo/1_0/Global/SRTM_topoDiversity`
- 数据类型：影像（Image）
- 提供方：Conservation Science Partners、Google Earth Engine
- 时间范围：2006-01-24 至 2011-05-13
- 空间分辨率：270 米
- 许可：CC-BY-NC-SA-4.0
- 关键词：aspect, csp, elevation, elevation-topography, ergo, geophysical, global, landforms, slope, topography

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| constant | SRTM-derived topographic diversity | 270 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('CSP/ERGo/1_0/Global/SRTM_topoDiversity');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CSP_ERGo_1_0_Global_SRTM_topoDiversity
- 数据引用：Theobald, D. M., Harrison-Atlas, D., Monahan, W. B., & Albano, C. M.
(2015). Ecologically-relevant maps of landforms and physiographic diversity
for climate adaptation planning. PloS one, 10(12),
[e0143619](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0143619)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
