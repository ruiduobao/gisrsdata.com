---
title: "Accessibility to Cities 2015 [deprecated]"
date: 2026-11-03 12:00:00
permalink: /pages/17a7017f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "accessibility"
  - "jrc"
  - "map"
  - "oxford"
  - "population"
  - "twente"
---

# Accessibility to Cities 2015 [deprecated]

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**

## 数据集简介

This global accessibility map enumerates land-based
travel time to the nearest densely-populated area for all areas
between 85 degrees north and 60 degrees south for a nominal year 2015.

Densely-populated areas are defined as contiguous areas
with 1,500 or more inhabitants per square kilometer or a majority
of built-up land cover types coincident with a population center
of at least 50,000 inhabitants.

This map was produced through
a collaboration between the University of Oxford Malaria Atlas
Project (MAP), Google, the European Union Joint Research Centre
(JRC), and the University of Twente, Netherlands. The underlying
datasets used to produce the map include roads (comprising the
first ever global-scale use of Open Street Map and Google roads
datasets), railways, rivers, lakes, oceans, topographic conditions
(slope and elevation), landcover types, and national borders.

These datasets were each allocated a speed or speeds of travel in terms
of time to cross each pixel of that type. The datasets were then
combined to produce a &ldquo;friction surface&rdquo;, a map where
every pixel is allocated a nominal overall speed of travel based
on the types occurring within that pixel. Least-cost-path algorithms
(running in Google Earth Engine and, for high-latitude areas, in
R) were used in conjunction with this friction surface to calculate
the time of travel from all locations to the nearest city (by travel
time). Cities were determined using the high-density-cover product
created by the Global Human Settlement Project.

Each pixel in the resultant accessibility map thus represents the modeled shortest
time from that location to a city.

Source dataset credits are as described in the accompanying paper.

## 基本信息

- 数据集编号（Earth Engine ID）：`Oxford/MAP/accessibility_to_cities_2015_v1_0`
- 数据类型：影像（Image）
- 提供方：Malaria Atlas Project、Google Earth Engine
- 时间范围：2015-01-01 至 2016-01-01
- 许可：CC-BY-4.0
- 关键词：accessibility, jrc, map, oxford, population, twente

## 波段信息

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| accessibility | Travel time to the nearest densely-populated area. | 927.67 |  |

## 在 Earth Engine 中调用

```js
var dataset = ee.Image('Oxford/MAP/accessibility_to_cities_2015_v1_0');
```

## 官方文档

- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_accessibility_to_cities_2015_v1_0
- 数据引用：D.J. Weiss, A. Nelson, H.S. Gibson, W. Temperley, S. Peedell, A.
Lieber, M. Hancher, E. Poyart, S. Belchior, N. Fullman, B. Mappin,
U. Dalrymple, J. Rozier, T.C.D. Lucas, R.E. Howes, L.S. Tusting,
S.Y. Kang, E. Cameron, D. Bisanzio, K.E. Battle, S. Bhatt, and
P.W. Gething. A global map of travel time to cities to assess inequalities
in accessibility in 2015. Nature (2018).
[doi:10.1038/nature25181](https://doi.org/10.1038/nature25181)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
