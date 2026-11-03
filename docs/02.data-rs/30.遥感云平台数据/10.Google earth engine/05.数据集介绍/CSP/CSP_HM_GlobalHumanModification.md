---
title: "CSP gHM: Global Human Modification"
date: 2026-11-03 12:00:00
permalink: /pages/1227f44f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "csp"
  - "fragmentation"
  - "human-modification"
  - "landcover"
  - "landscape-gradient"
  - "population"
  - "stressors"
  - "tnc"
---

# CSP gHM: Global Human Modification

## 数据集简介

The global Human Modification dataset (gHM) provides a cumulative measure of human modification
of terrestrial lands globally at 1 square-kilometer resolution. The gHM
values range from 0.0-1.0 and are calculated by estimating the proportion of a given location
(pixel) that is modified, the estimated intensity of modification
associated with a given type of human modification or "stressor".
5 major anthropogenic stressors circa 2016 were mapped using 13
individual datasets:

* human settlement (population density, built-up areas)
* agriculture (cropland, livestock)
* transportation (major, minor, and two-track roads; railroads)
* mining and energy production
* electrical infrastructure (power lines, nighttime lights)

Please see the paper for additional methodological details.
This asset was re-projected to WGS84 for use in Earth Engine.

## 基本信息

- 数据集编号（Earth Engine ID）：`CSP/HM/GlobalHumanModification`
- 数据类型：影像集合（ImageCollection）
- 提供方：Conservation Science Partners、Google Earth Engine
- 时间范围：2016-01-01 至 2016-12-31
- 空间分辨率：1000 米
- 许可：CC-BY-NC-SA-4.0
- 关键词：csp, fragmentation, human-modification, landcover, landscape-gradient, population, stressors, tnc

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| gHM | global Human Modification | 1000 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.ImageCollection('CSP/HM/GlobalHumanModification');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/CSP_HM_GlobalHumanModification
- 数据引用：Kennedy, C.M., J.R. Oakleaf, D.M. Theobald, S. Baruch-Murdo, and J. Kiesecker. 2019. Managing
the middle: A shift in conservation priorities based on the global human modification gradient.
Global Change Biology 00:1-16. [doi:10.1111/gcb.14549](https://doi.org/10.1111/gcb.14549)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
